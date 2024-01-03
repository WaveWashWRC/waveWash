const Booking = require("../../database/BookingModel");
const mongoose = require("mongoose");
const getAllBookingsForVendor = async (req, res) => {
  try {
    const vendorId = req.user.id; // Get the vendor's ID from the request (set by authentication middleware)

    const bookings = await Booking.aggregate([
      // Match to filter bookings by the vendor
      { $match: { vendorId: new mongoose.Types.ObjectId(vendorId) } },

      // Lookup to join with the users collection (to get customer details)
      {
        $lookup: {
          from: "users", // Replace with your actual users collection name
          localField: "customerId",
          foreignField: "_id",
          as: "customerDetails",
        },
      },

      // Unwind the results from the lookup
      {
        $unwind: { path: "$customerDetails", preserveNullAndEmptyArrays: true },
      },

      // Project to structure the output
      {
        $project: {
          serviceCategory: 1,
          bookingDate: 1,
          status: 1,
          cost: 1,
          customerName: "$customerDetails.name", // Assuming 'name' holds the customer's name
          address: "$customerDetails.location.address", // Assuming the customer's address is stored here
          phoneNumber: "$customerDetails.phoneNumber", // Assuming the customer's phone number is stored here
          // ... include other fields you want to return ...
        },
      },
    ]);

    res.json(bookings); // Send the result back to the client
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

// Function to handle vendor acceptance of bookings
const acceptBooking = async (req, res) => {
  const { bookingId } = req.params;

  try {
    const booking = await Booking.findByIdAndUpdate(
      bookingId,
      { status: "Confirmed" }, // Update the status to 'Confirmed' upon vendor acceptance
      { new: true }
    );

    if (!booking) {
      return res.status(404).json({ message: "Booking not found" });
    }

    res.json({ message: "Booking accepted by the vendor", booking });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

const cancelBooking = async (req, res) => {
  try {
    const vendorId = req.user.id; // Get the vendor's ID from the request (set by authentication middleware)
    const { bookingId } = req.params; // Get the booking ID from the request parameters

    // Find the booking and ensure it belongs to the vendor making the request
    const booking = await Booking.findOne({
      _id: bookingId,
      vendorId: new mongoose.Types.ObjectId(vendorId),
    });

    if (!booking) {
      return res
        .status(404)
        .json({
          message:
            "Booking not found or you do not have permission to cancel this booking",
        });
    }

    // Update the booking status to 'Cancelled'
    booking.status = "Cancelled";
    await booking.save();

    res.json({ message: "Booking cancelled successfully", booking });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};
module.exports = {
  acceptBooking,
  getAllBookingsForVendor,
  cancelBooking,
};

const mongoose = require("mongoose");
const Booking = require("../../database/BookingModel");
// GET - Fetch all bookings
const getAllBookings = async (req, res) => {
  try {
    const userId = req.user.id; // Get the user ID from the request (set by authentication middleware)
    const bookings = await Booking.aggregate([
      // Match to filter bookings by the user
      { $match: { customerId: new mongoose.Types.ObjectId(userId) } },

      // Lookup to join with the vendors collection
      {
        $lookup: {
          from: "vendors", // Replace with your actual vendors collection name
          localField: "vendorId",
          foreignField: "_id",
          as: "vendorDetails",
        },
      },

      // Unwind the results from the lookup
      { $unwind: { path: "$vendorDetails", preserveNullAndEmptyArrays: true } },

      // Lookup to join with the users collection
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
          vendorName: "$vendorDetails.companyName", // Assuming 'companyName' holds the vendor's name
          customerName: "$customerDetails.name", // Assuming 'name' holds the customer's name
          // ... include other fields you want to return ...
        },
      },
    ]);

    res.json(bookings); // Send the result back to the client
  } catch (error) {
    // Log and return the error if something goes wrong
    console.error(error);
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

// GET - Confirmed bookings
const getConfirmedBookings = async (req, res) => {
  try {
    // Fetch all confirmed bookings and populate the 'customerId' and 'vendorId' fields
    const confirmedBookings = await Booking.find({
      status: "Confirmed",
      vendorId: { $exists: true }, // Assuming vendorId is present for vendor bookings
    }).populate("customerId vendorId");

    if (confirmedBookings.length === 0) {
      // If there are no confirmed bookings, send a response to the client
      return res
        .status(404)
        .json({ message: "No confirmed bookings found for vendors" });
    }

    // Send the confirmed bookings back to the admin dashboard
    res.json(confirmedBookings);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

// POST - Create a new booking
const createBooking = async (req, res) => {
  const {
    vendorId,
    serviceCategory,
    bookingDate,
    status,
    cost,
    additionalDetails,
    // rating,
  } = req.body;

  // Use the authenticated user's ID for customerId
  const customerId = req.user.id;

  const booking = new Booking({
    vendorId,
    customerId,
    serviceCategory,
    bookingDate,
    status,
    cost,
    additionalDetails,
    // rating,
  });

  try {
    const newBooking = await booking.save();
    res.status(201).json(newBooking);
  } catch (error) {
    res.status(400).json({ message: "Bad Request", error: error.message });
  }
};

// DELETE - Delete a booking by ID
const deleteBookingById = async (req, res) => {
  const { bookingId } = req.params;

  try {
    const deletedBooking = await Booking.findByIdAndDelete(bookingId);
    if (!deletedBooking) {
      return res.status(404).json({ message: "Booking not found" });
    }
    res.json({ message: "Booking deleted successfully", deletedBooking });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

module.exports = {
  getAllBookings,
  getConfirmedBookings,
  createBooking,
  deleteBookingById,
};

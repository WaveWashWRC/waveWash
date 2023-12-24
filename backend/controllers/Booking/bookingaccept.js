const Booking = require("../../database/BookingModel");

// Function to handle vendor acceptance of bookings
exports.acceptBooking = async (req, res) => {
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

module.exports = {
  acceptBooking,
};

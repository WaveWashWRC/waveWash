const Booking = require("../../database/BookingModel");
// GET - Fetch all bookings
const getAllBookings = async (req, res) => {
  try {
    const bookings = await Booking.find();
    res.json(bookings);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
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
    customerId, // Now using the authenticated user's ID
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
  createBooking,
  deleteBookingById,
};

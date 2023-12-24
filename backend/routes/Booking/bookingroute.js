const express = require("express");
const router = express.Router();
const authenticate = require("../../middleware/authenticate");
const {
  getAllBookings,
  createBooking,
  deleteBookingById,
} = require("../../controllers/Booking/booking");

const { acceptBooking } = require("../../controllers/Booking/bookingaccept");

router.get("/bookings", authenticate, getAllBookings);
router.post("/bookings", authenticate, createBooking);
router.delete("/bookings/:bookingId", authenticate, deleteBookingById);

//for vendor acceptance of bookings
router.put("/bookings/accept/:bookingId", authenticate, acceptBooking);

module.exports = router;

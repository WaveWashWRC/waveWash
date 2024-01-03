const express = require("express");
const router = express.Router();
const authenticate = require("../../middleware/authenticate");
const {
  getAllBookings,
  createBooking,
  deleteBookingById,
} = require("../../controllers/Booking/booking");

const {
  acceptBooking,
  cancelBooking,
  getAllBookingsForVendor,
} = require("../../controllers/Booking/bookingaccept");

//for user
router.get("/bookings", authenticate, getAllBookings);
router.post("/bookings", authenticate, createBooking);
router.delete("/bookings/:bookingId", authenticate, deleteBookingById);

//for vendor
router.get("/bookings/vendor", authenticate, getAllBookingsForVendor);
router.put("/bookings/accept/:bookingId", authenticate, acceptBooking);
router.put("/bookings/cancel/:bookingId", authenticate, cancelBooking);

module.exports = router;

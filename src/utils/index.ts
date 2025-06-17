import { editUserDetails } from "./apis/auth/edit";
import { AdminLogin } from "./apis/auth/login";
import { LoginUser, signupUser } from "./apis/auth/signUp";
import {
  createBooking,
  getBookings,
  updateBooking,
} from "./apis/booking/booking";
import { getAllEvents, getEventDetails } from "./apis/events/events.api";
import {
  createProvider,
  deleteProvider,
  editProvider,
  getAllProviders,
} from "./apis/providers/providers";
import { giveReview } from "./apis/ratings/ratings";
import {
  createService,
  deleteService,
  editService,
  getAllServices,
} from "./apis/services/service";

export const api = {
  auth: {
    AdminLogin,
    signupUser,
    LoginUser,
    editUserDetails,
  },
  providers: {
    getAllProviders,
    deleteProvider,
    editProvider,
    createProvider,
  },
  services: {
    getAllServices,
    createService,
    editService,
    deleteService,
  },
  events: {
    getAllEvents,
    getEventDetails,
  },
  booking: {
    createBooking,
    updateBooking,
    getBookings,
  },
  review: {
    giveReview,
  },
};

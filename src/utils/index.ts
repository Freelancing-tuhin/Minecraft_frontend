import { AdminLogin } from "./apis/auth/login";
import { createBooking } from "./apis/booking/booking";
import { getAllEvents, getEventDetails } from "./apis/events/events.api";
import {
  createProvider,
  deleteProvider,
  editProvider,
  getAllProviders,
} from "./apis/providers/providers";
import {
  createService,
  deleteService,
  editService,
  getAllServices,
} from "./apis/services/service";

export const api = {
  auth: {
    AdminLogin,
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
  },
};

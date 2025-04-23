import { headers } from "../../../config/config";
import { MESSAGE } from "../../../constants/api/message";
import { Payload } from "../../../@types/api/api.types";
import { request } from "../../api";

const { get, post, patch, del } = request;

const initialRoute = "bookings";

export const createBooking = async (payload: Payload) => {
  try {
    const endpoint = `${initialRoute}/create-booking`;
    const response = await post(endpoint, payload, {
      ...headers,
    });
    if (response) {
      const {
        data: { message },
      } = response;
      if (message === MESSAGE.post.succ) {
        const {
          data: { result, payment },
        } = response;
        return { result, payment };
      }
    }
    throw new Error();
  } catch (error: unknown) {
    console.log(error);
    throw error;
  }
};

import { headers } from "../../../config/config";
import { MESSAGE } from "../../../constants/api/message";
import { request } from "../../api";

const { get, post, patch, del } = request;

const initialRoute = "events";

export const getAllEvents = async (filter: any) => {
  try {
    const endpoint = `${initialRoute}/get-events`;
    const response = await get(
      endpoint,
      {
        ...headers,
      },
      filter
    );
    if (response) {
      const {
        data: { message },
      } = response;
      if (message === MESSAGE.get.succ) {
        const {
          data: { result },
        } = response;
        return result;
      }
    }
    throw new Error();
  } catch (error: any) {
    console.log(error);
    throw error;
  }
};

export const getEventDetails = async (filter: any) => {
  try {
    const endpoint = `${initialRoute}/view-event-for-users`;
    const response = await get(
      endpoint,
      {
        ...headers,
      },
      filter
    );
    if (response) {
      const {
        data: { message },
      } = response;
      if (message === MESSAGE.get.succ) {
        const {
          data: { result },
        } = response;
        return result;
      }
    }
    throw new Error();
  } catch (error: any) {
    console.log(error);
    throw error;
  }
};

import { headers } from "../../../config/config";
import { MESSAGE } from "../../../constants/api/message";
import { Payload } from "../../../@types/api/api.types";
import { request } from "../../api";

const { post } = request;

const initialRoute = "auth";

export const signupUser = async (payload: Payload) => {
  try {
    const endpoint = `${initialRoute}/user-signup`;
    const response = await post(endpoint, payload, {
      ...headers,
      //   "Content-Type": "multipart/form-data",
    });
    if (response) {
      const {
        data: { message },
      } = response;
      if (message === MESSAGE.post.succ) {
        const {
          data: { result },
        } = response;
        return result;
      }
    }
    throw new Error();
  } catch (error: unknown) {
    console.log(error);
    throw error;
  }
};

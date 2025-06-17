import { headers } from "../../../config/config";
import { MESSAGE } from "../../../constants/api/message";
import { Payload } from "../../../@types/api/api.types";
import { request } from "../../api";

const { patch } = request;

const initialRoute = "auth";

export const editUserDetails = async (payload: any, userId: string) => {
  try {
    const endpoint = `auth/user-edit?userId=${userId}`;
    const response = await patch(endpoint, payload, {
      ...headers,
    });

    if (response?.data?.message === MESSAGE.patch.succ) {
      return response.data.result;
    }

    throw new Error("Edit failed");
  } catch (error) {
    throw error;
  }
};

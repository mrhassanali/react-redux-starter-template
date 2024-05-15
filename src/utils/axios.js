import axios, { method } from "axios";

export const request = async ({ url, method, data }) => {
  if (!url) {
    throw new Error("request func arg @param url is missing");
  }
  if (!method) {
    throw new Error(
      'request func arg @param method is missing. Valid options "GET"|"POST"|"PUT" etc'
    );
  }

  try {
    const response = await axios({
      url,
      method,
      data,
    });
    if (response.status >= 400) {
      throw new Error(response.data);
    }

    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};

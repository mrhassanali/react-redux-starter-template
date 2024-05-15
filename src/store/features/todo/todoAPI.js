import { request } from "../../../utils/axios";
const ROOT = "https://jsonplaceholder.typicode.com/todos";

export const todoAPIUsingID = async (todoId) => {
  const URL = `${ROOT}/${todoId}`;
  return await request({ url: URL, method: "GET" });
};

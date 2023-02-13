import axios, { AxiosResponse } from "axios";
import { Activity } from "../app/models/activity";

const sleep = (delay: number) => {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
};

axios.defaults.baseURL = "http://localhost:5000/api";

axios.interceptors.response.use(async (res) => {
  try {
    await sleep(1000);
    return res;
  } catch (error) {
    console.log(error);
    return await Promise.reject(error);
  }
});

const responseBody = <T>(response: AxiosResponse) => response.data;

const requests = {
  get: <T>(url: string) => axios.get<T>(url).then(responseBody),
  post: <T>(url: string, body: {}) =>
    axios.post<T>(url, body).then(responseBody),
  put: <T>(url: string, body: {}) => axios.put<T>(url, body).then(responseBody),
  del: <T>(url: string) => axios.delete<T>(url).then(responseBody),
};

const Activites = {
  list: () => requests.get<Activity[]>("/Activities"),
  details: (id: string) => requests.get<Activity>(`/Activities/${id}`),
  create: (activity: Activity) => axios.post<void>("/Activities", activity),
  update: (activity: Activity) =>
    axios.put<void>(`/Activities/${activity.id}`, activity),
  delete: (id: string) => axios.delete<void>(`/Activities/${id}`),
};

const agent = {
  Activites,
};

export default agent;

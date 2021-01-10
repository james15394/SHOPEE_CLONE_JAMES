import { instance } from "./axios";

export const productApi = {
  post: (params) => {
    url: "/products/add";
    return instance.post(url, { params });
  },
};

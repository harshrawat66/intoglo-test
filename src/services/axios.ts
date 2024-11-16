import { consignmentListResponse } from "./constants";

const axios = require("axios");
const AxiosMockAdapter = require("axios-mock-adapter");

const mock = new AxiosMockAdapter(axios);

mock.onGet("/consignments").reply(200, {
  status: "success",
  data: consignmentListResponse,
  meta: {
    pagination: {
      total: 200,
      current: 1,
      totalPages: 24,
    },
  },
});

axios.get("/consignments").then(function (response: any) {
  return response;
});

export { axios };

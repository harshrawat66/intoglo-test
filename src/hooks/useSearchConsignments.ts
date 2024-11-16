import { axios } from "@/services/axios";
import qs from "query-string";
import { ConsignmentResponse } from "@/types/consignment";
import { useEffect, useState } from "react";

export function useGetConsignments({ query }: any): ConsignmentResponse {
  const [response, setResponse] = useState<ConsignmentResponse>({
    status: "success",
    completedShipments: [],
    inTransitShipments: [],
  });

  useEffect(() => {
    axios
      .get(`/consignments?${qs.stringify(query)}`)
      .then(({ data }: any) => setResponse(data));
  });

  return response;
}

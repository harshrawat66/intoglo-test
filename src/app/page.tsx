import ConsignmentTable from "@/components/Consignment/Consignment";
import { axios } from "@/services/axios";
import { ShipmentShape } from "@/types/consignment";

export default async function Home() {
  const {
    data: {
      data: { completedShipments, inTransitShipments },
      meta: { pagination },
    },
  } = await axios.get("/consignments");

  const getShipmentShape = () => {
    const shape: ShipmentShape = { all: [], delivered: [], inTransit: [] };
    shape["all"] = [...completedShipments, ...inTransitShipments];
    if (completedShipments.length) shape["delivered"] = completedShipments;
    if (inTransitShipments.length) shape["inTransit"] = inTransitShipments;

    return shape;
  };

  return (
    <>
      <ConsignmentTable
        shipments={getShipmentShape()}
        pagination={pagination}
      />
    </>
  );
}

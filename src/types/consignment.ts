type LastCompletedEventLocation = {
  LOCATIONNAME: string;
  COUNTRY: string;
};

type Locations = {
  LOCATIONTYPE: string;
  LOCATIONNAME: string;
  COUNTRY: string;
};

type ShippedBy = {
  LINERNAME: string;
  TRACKINGLINK: string;
};

export type Consignment = {
  SHIPMENTID: string;
  INLOPSID: string;
  CARGOWISEID: string;
  SCACCODE: string;
  BOOKINGNUMBER: string | null;
  BILLOFLADING: string;
  CONTAINERID: string;
  CONTAINERQUANTITY: string;
  CONSIGNEENAME: string;
  COMMERCIALINVOICE: string;
  DELIVERYMODE: string;
  FREIGHTCLASS: string;
  TOTALDEADWEIGHT: number;
  TOTALDEADWEIGHTMETRIC: string;
  SHIPMENTSTATUS: string;
  SHIPPEDBY: ShippedBy | null;
  VESSELNAME: string[];
  VOYAGE: string[];
  ESTIMATEDDELIVERYDATE: string;
  LASTSTATUSUPATEDON: string;
  LOCATIONS: Locations[];
  LASTCOMPLETEDEVENT: string;
  LASTCOMPLETEDEVENTDATETIME: string;
  LASTCOMPLETEDEVENTLOCATION: LastCompletedEventLocation;
  ACTUALDELIVERYDATE?: string;
  ISBOOKMARKED: boolean;
};

export type ConsignmentResponse = {
  status: string;
  completedShipments: Consignment[];
  inTransitShipments: Consignment[];
};

export type PaginationProps = {
  total: number;
  current: number;
  totalPages: number;
};

export type ConsignmentProps = {
  meta: {
    pagination: PaginationProps;
  };
  data: {
    shipments: Consignment[];
  };
};

export type ShipmentShape = {
  [key: string]: Consignment[];
  all: Consignment[];
  delivered: Consignment[];
  inTransit: Consignment[];
};

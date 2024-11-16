"use client";

import { Consignment } from "@/types/consignment";
import { BookmarkFilledIcon, BookmarkIcon } from "@radix-ui/react-icons";
import { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<Consignment>[] = [
  {
    accessorKey: "SHIPMENTID",
    header: "Shipment ID",
    cell: ({ row }) => (
      <div style={{ display: "flex", flexDirection: "row", gap: "10px" }}>
        <span>
          {row.original.ISBOOKMARKED ? (
            <BookmarkFilledIcon
              style={{
                color: "#e7265f",
                width: "20px",
                height: "20px",
              }}
            />
          ) : (
            <BookmarkIcon style={{ width: "20px", height: "20px" }} />
          )}
        </span>
        <span>{row.original.SHIPMENTID}</span>
      </div>
    ),
  },
  {
    accessorKey: "COMMERCIALINVOICE",
    header: "Invoice No.",
  },
  {
    accessorKey: "CONSIGNEENAME",
    header: "Consignee Name",
    cell: ({ row }) => (
      <div style={{ display: "flex", flexDirection: "column" }}>
        <span>{row.original.CONSIGNEENAME}</span>
        <span>401/32, Oak Ridge Road, Virginia, USA</span>
      </div>
    ),
  },
  {
    accessorKey: "CONTAINERID",
    header: "Container No.",
    cell: ({ row }) => (
      <div style={{ display: "flex", flexDirection: "column" }}>
        <span>{row.original.CONTAINERID}</span>
        <span>20&quot; HC</span>
      </div>
    ),
  },
  {
    accessorKey: "SHIPMENTSTATUS",
    header: "Shipment Status",
    cell: ({ row }) => (
      <div style={{ display: "flex", flexDirection: "column" }}>
        <span>{row.original.CONTAINERID}</span>
        <span>20&quot; HC</span>
      </div>
    ),
  },
  {
    accessorKey: "ESTIMATEDDELIVERYDATE",
    header: "Delivery Date",
  },
];

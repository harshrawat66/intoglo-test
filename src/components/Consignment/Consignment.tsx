"use client";

import { columns } from "@/components/Table/columns";
import { DataTable } from "@/components/Table/table";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PaginationProps, ShipmentShape } from "@/types/consignment";
import { UploadIcon } from "@radix-ui/react-icons";
import TablePagination from "../Pagination";
import { getTabName } from "@/lib/utils";

type ConsignmentTableProps = {
  shipments: ShipmentShape;
  pagination: PaginationProps;
};

export default function ConsignmentTable({
  shipments,
  pagination,
}: ConsignmentTableProps) {
  const tabs = Object.keys(shipments);

  return (
    <>
      <Tabs defaultValue={tabs[0]} className="w-full pl-2 pr-2">
        <div className="flex flex-row justify-between">
          <TabsList className="bg-white h-[40px]">
            {tabs.map((tab, _k) => (
              <TabsTrigger
                key={_k}
                value={tab}
                className="data-[state=active]:border-b-2 data-[state=active]:border-[#e7265f] data-[state=active]:rounded-none data-[state=active]:shadow-none"
              >
                {getTabName(tab) + `(${shipments[tab].length})`}
              </TabsTrigger>
            ))}
          </TabsList>
          <Button className="bg-white border-gray-500 text-gray-500 hover:bg-white">
            <UploadIcon /> Export
          </Button>
        </div>
        {tabs.map((tab, _k) => (
          <TabsContent key={_k} value={tab}>
            <DataTable columns={columns} data={shipments[tab]} />
          </TabsContent>
        ))}
      </Tabs>
      <div className="flex flex-row justify-between p-4">
        <div>
          Showing {Math.ceil(pagination.total / pagination.totalPages)} of{" "}
          {pagination.total} Containers{" "}
        </div>
        <div>
          <TablePagination
            total={pagination.total}
            current={pagination.current}
            totalPages={pagination.totalPages}
          />
        </div>
      </div>
    </>
  );
}

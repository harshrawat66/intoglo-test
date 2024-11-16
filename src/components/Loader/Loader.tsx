import { Skeleton } from "@/components/ui/skeleton";

export function Loader() {
  return (
    <div className="flex flex-col space-y-1 p-32">
      <Skeleton className="h-8 w-full" />
      <Skeleton className="h-4 w-[90%]" />
      <Skeleton className="h-12 w-full" />
    </div>
  );
}

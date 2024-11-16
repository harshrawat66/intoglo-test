import { ChevronRightIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-row justify-center items-center pt-16 pb-16 p-32">
      <div className="flex flex-col">
        <span className="">
          <Image
            src="/not-found.png"
            alt="Page not found"
            width={925}
            height={600}
          />
        </span>
        <div className="flex flex-col justify-center items-center">
          <span className="text-lg font-medium">
            Oops, we could not find resource requested.
          </span>
          <Link
            className="flex flex-row gap-2 justify-center items-center bg-black hover:bg-black p-4 w-full rounded-full text-white font-medium mt-4"
            href="/"
          >
            Return Home <ChevronRightIcon />
          </Link>
        </div>
      </div>
    </div>
  );
}

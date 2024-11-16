import Image from "next/image";
import { Avatar } from "../ui/avatar";
import { AvatarFallback } from "@radix-ui/react-avatar";
import SearchForm from "../SearchForm/SearchForm";

export function MainNav() {
  return (
    <div className="flex flex-row justify-between items-center pl-16 pr-16 pt-2 pb-2 shadow-md">
      <a href="/">
        <div className="flex flex-row items-center pt-2 pb-2">
          <Image src="/logo.svg" alt="logo" height="150" width="150" />
        </div>
      </a>
      <div className="w-2/3">
        <SearchForm />
      </div>
      <div>
        <Avatar className="bg-[#f4efef]">
          <AvatarFallback className=" w-full flex flex-row justify-center items-center">
            HR
          </AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
}

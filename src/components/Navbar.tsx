import { Icon } from "@iconify/react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center py-6 px-2">
      <div>
        <Button className="bg-transparent hover:bg-transparent flex items-center shadow-none gap-2">
          <div className="relative">
            <span className="text-mainBg text-3xl rounded-full bg-primary p-4 flex items-center justify-center w-7 h-7">
              <Icon icon="f7:airplane" className="absolute -left-0.5" />
            </span>
          </div>
          <h1 className="font-bold text-zinc-800 text-xl">PLANE SCAPE</h1>
        </Button>
      </div>
      <div className="flex items-center justify-center gap-2">
        <Button className="bg-transparent flex items-center shadow-none gap-1 group hover:bg-primary focus-visible:ring-0 focus-visible:ring-transparent">    
          <Icon icon="mdi:tag" className="text-primary group-hover:text-mainBg text-lg" />
          <p className="text-zinc-800 group-hover:text-mainBg text-lg">Deals</p>
        </Button>
        <Button className="bg-transparent flex items-center shadow-none gap-1 group hover:bg-primary focus-visible:ring-0 focus-visible:ring-transparent">
          <Icon icon="fluent-mdl2:world" className="text-primary group-hover:text-mainBg text-lg" />
          <p className="text-zinc-800 group-hover:text-mainBg text-lg">Discover</p>
        </Button>
        <DropdownMenu>
          <DropdownMenuTrigger className="bg-transparent flex items-center shadow-none gap-1 group hover:bg-primary h-9 px-4 py-2 transition-colors rounded-md focus-visible:ring-0 focus-visible:ring-transparent focus-visible:outline-none font-medium">
            <Avatar>
              <AvatarImage src="https://github.com/sevro49.png" />
              <AvatarFallback>EG</AvatarFallback>
            </Avatar>
            <p className="text-zinc-800 group-hover:text-mainBg text-lg">Emre Güler</p>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-mainBg">
            <DropdownMenuLabel className="cursor-pointer">My Flights</DropdownMenuLabel>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
};

export default Navbar;

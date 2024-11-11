import { Link, useLocation } from "react-router-dom";
import { MenuIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Menu } from "./menu";
import {
  Sheet,
  SheetHeader,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Logo } from "./logo";
export function SheetMenu() {
  const location = useLocation();
  const { pathname: pathName } = location;

  return (
    <Sheet>
      <SheetTrigger className="lg:hidden" asChild>
        <Button className="h-8 bg-gray-200" size="icon">
          <MenuIcon color="gray" size={20} />
        </Button>
      </SheetTrigger>
      <SheetContent className="flex h-full flex-col px-3 sm:w-72" side="left">
        <SheetHeader>
          <Button
            className="flex items-center justify-center pb-2 pt-1"
            variant="link"
            asChild
          >
            <Link to="/" className="flex items-center gap-2">
              <Logo isOpen={false} />
              <h1 className="text-lg font-bold">MaxFame</h1>
            </Link>
          </Button>
        </SheetHeader>
        <div className={pathName.includes("/dashboard") ? "block" : "hidden"}>
          <Menu isOpen />
        </div>
        <div className="grow"></div>
      </SheetContent>
    </Sheet>
  );
}

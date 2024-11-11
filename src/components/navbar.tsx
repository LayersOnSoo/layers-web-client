import { Button } from "@/components/ui/button"; // Replace with ShadCN's button component path
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"; // Replace with ShadCN's dropdown components path
import { MenuIcon, BellIcon, XIcon } from "lucide-react";
import { useState } from "react";
import { Logo } from "./logo";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-blue-600">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          {/* Mobile menu button */}
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <Button
              onClick={toggleMobileMenu}
              variant="ghost"
              className="text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none"
            >
              {isMobileMenuOpen ? (
                <XIcon className="h-6 w-6" aria-hidden="true" />
              ) : (
                <MenuIcon className="h-6 w-6" aria-hidden="true" />
              )}
              <span className="sr-only">Open main menu</span>
            </Button>
          </div>

          {/* Logo */}
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex shrink-0 items-center">
              <Logo isOpen={true} />
            </div>
          </div>

          {/* Notification and Profile dropdown */}
          <div className="absolute inset-y-0 right-0 flex space-x-5 items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <Button
              variant="ghost"
              className="relative p-1 text-gray-400 hover:text-white focus:outline-none"
            >
              <BellIcon className="h-6 w-6" aria-hidden="true" />
              <span className="sr-only">View notifications</span>
            </Button>

            {/* Profile dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <img
                  className="h-8 w-8 rounded-full"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="mt-2 w-48">
                <DropdownMenuItem onSelect={() => console.log("Your Profile")}>
                  Your Profile
                </DropdownMenuItem>
                <DropdownMenuItem onSelect={() => console.log("Settings")}>
                  Settings
                </DropdownMenuItem>
                <DropdownMenuItem onSelect={() => console.log("Sign out")}>
                  Sign out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="sm:hidden" id="mobile-menu">
          <div className="space-y-1 px-2 pb-3 pt-2">
            {["Dashboard", "Team", "Projects", "Calendar"].map((item) => (
              <a
                key={item}
                href="#"
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

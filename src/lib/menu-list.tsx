import { SquarePen } from "lucide-react";

type Submenu = {
  href: string;
  label: string;
  active: boolean;
};

type Menu = {
  href: string;
  label: string;
  active: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon: any;
  submenus: Submenu[];
};

type Group = {
  groupLabel: string;
  menus: Menu[];
};

export function getMenuList(pathname: string): Group[] {
  return [
    {
      groupLabel: "Management",
      menus: [
        {
          href: "/dashboard/examiner-management",
          label: "Examiner Management",
          active: pathname.includes("/dashboard/examiner-management"),
          icon: SquarePen, // Change icon as needed
          submenus: [
            {
              href: "/dashboard/examiner-management",
              label: "View Examiners",
              active: pathname === "/dashboard/examiner-management",
            },
            {
              href: "/dashboard/examiner-management/add",
              label: "Add Examiner",
              active: pathname === "/dashboard/examiner-management/add",
            },
            {
              href: `/dashboard/examiner-management/assign`,
              label: "Assign Examiner",
              active: pathname === "/dashboard/examiner-management/assign",
            },
          ],
        },
        {
          href: "/dashboard/station-management",
          label: "Station Management",
          active: pathname.includes("/dashboard/station-management"),
          icon: SquarePen, // Change icon as needed
          submenus: [
            {
              href: "/dashboard/station-management",
              label: "View Stations",
              active: pathname === "/dashboard/station-management",
            },
            {
              href: "/dashboard/station-management/add",
              label: "Add Station",
              active: pathname === "/dashboard/station-management/add",
            },
            {
              href: `/dashboard/station-management/assign`,
              label: "Assign Station",
              active: pathname === "/dashboard/station-management/assign",
            },
          ],
        },
      ],
    },
  ];
}

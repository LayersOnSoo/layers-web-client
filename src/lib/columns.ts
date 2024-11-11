import { Examiner, Station } from "@/types";
import {
  ColumnDef,
  createColumnHelper,
  ColumnHelper,
} from "@tanstack/react-table";

const getColumnHelper = <T>(): ColumnHelper<T> => createColumnHelper<T>();

const ExaminerColumnHelper = getColumnHelper<Examiner>();
const StationColumnHelper = getColumnHelper<Station>();

export const examinerColumns: ColumnDef<Examiner>[] = [
  ExaminerColumnHelper.accessor((row) => row.id.toString(), {
    header: "Id",
    // @ts-expect-error    bug fix from tanstack-react-table
    accessorKey: "id",
  }),
  {
    header: "First Name",
    accessorKey: "firstName",
  },
  {
    header: "Last Name",
    accessorKey: "lastName",
  },
  {
    header: "Email",
    accessorKey: "email",
  },
];

export const stationColumns: ColumnDef<Station>[] = [
  StationColumnHelper.accessor((row) => row.id.toString(), {
    header: "Id",
    // @ts-expect-error    bug fix from tanstack-react-table
    accessorKey: "id",
  }),
  {
    header: "Station Name",
    accessorKey: "stationName",
  },
  {
    header: "Location",
    accessorKey: "location",
  },
  {
    header: "Assigned Examiners",
    accessorKey: "assignedExaminers",
    cell: ({ getValue }) => getValue<number>().toString(),
  },
];

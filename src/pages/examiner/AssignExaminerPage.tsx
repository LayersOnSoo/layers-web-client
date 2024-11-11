import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectLabel,
  SelectGroup,
} from "@/components/ui/select";
import { DataTable } from "@/components/UiDataTable";
import UiModal from "@/components/UiModal";
import UiPageHeader from "@/components/UiPageHeader";
import { examinerData } from "@/dummy/columns";
import { Examiner } from "@/types";
import { Button } from "@headlessui/react";
import { examinerColumns } from "@/lib/columns";

const AssignExaminerPage = () => {
  const [loading] = useState(false);
  const [modalState, setModalState] = useState({
    isOpen: false,
    type: "edit" as "edit" | "delete" | "assign",
  });
  const [selectedExaminer, setSelectedExaminer] = useState(null);
  const [cohort, setCohort] = useState("");
  const [track, setTrack] = useState("");
  const [station, setStation] = useState<string[]>([]);

  const openModal = (
    type: "edit" | "delete" | "assign",
    examiner: Examiner | null
  ) => {
    console.log("Opening modal of type:", type);
    setModalState({ isOpen: true, type });
    setSelectedExaminer(examiner);
    if (examiner) {
      setCohort(examiner.cohort || "");
      setTrack(examiner.track || "");
      setStation(examiner.stations || []);
    }
  };

  const closeModal = () => {
    setModalState({ isOpen: false, type: "edit" });
    setSelectedExaminer(null);
    setCohort("");
    setTrack("");
    setStation([]);
  };

  const confirmAction = () => {
    switch (modalState.type) {
      case "edit":
        // handleEditAction();
        break;
      case "delete":
        // handleDeleteAction();
        break;
    }
    closeModal();
  };

  return (
    <div className="flex flex-col w-full h-screen p-8 bg-gray-50 space-y-6">
      <UiPageHeader
        mainTitle="Examiner Management"
        subTitle="Assign Examiner"
      />

      <div className="flex justify-end">
        <Button
          onClick={() => openModal("assign", null)}
          className="bg-blue-600 text-white font-medium py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-200 shadow-md"
        >
          Assign Examiner
        </Button>
      </div>

      <div className="flex-1 bg-white p-6 rounded-lg shadow-lg overflow-auto">
        <DataTable
          header="Examiner List"
          columns={examinerColumns}
          data={examinerData}
          loading={loading}
          handleEdit={(examiner) => openModal("edit", examiner)}
          handleDelete={(examiner) => openModal("delete", examiner)}
        />
      </div>

      {/* Assign Modal Implementation */}
      {modalState.isOpen && modalState.type === "assign" && (
        <UiModal
          opened={modalState.isOpen}
          close={closeModal}
          maxWidth="max-w-md"
        >
          <div className="flex flex-col z-20 gap-4">
            <h3 className="text-xl font-semibold text-gray-800">
              Assign Examiner
            </h3>
            <form className="space-y-4">
              {/* Select Examiner */}
              <SelectGroup>
                <SelectLabel className="text-sm font-medium text-gray-700">
                  Examiner
                </SelectLabel>
                <Select
                  onValueChange={(value) => setSelectedExaminer(value)}
                  value={selectedExaminer}
                >
                  <SelectTrigger className="w-full mt-1 h-12 rounded-lg">
                    <SelectValue placeholder="Select Examiner" />
                  </SelectTrigger>
                  <SelectContent>
                    {examinerData.map((examiner) => (
                      <SelectItem key={examiner.id} value={examiner.email}>
                        {`${examiner.firstName} ${examiner.lastName} - ${examiner.speciality}`}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </SelectGroup>

              {/* Select Cohort */}
              <SelectGroup>
                <SelectLabel className="text-sm font-medium text-gray-700">
                  Cohort
                </SelectLabel>
                <Select
                  onValueChange={(value) => setCohort(value)}
                  value={cohort}
                >
                  <SelectTrigger className="w-full mt-1 h-12 rounded-lg">
                    <SelectValue placeholder="Select Cohort" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="cohort1">Cohort 1</SelectItem>
                    <SelectItem value="cohort2">Cohort 2</SelectItem>
                  </SelectContent>
                </Select>
              </SelectGroup>

              {/* Select Track */}
              <SelectGroup>
                <SelectLabel className="text-sm font-medium text-gray-700">
                  Track
                </SelectLabel>
                <Select
                  onValueChange={(value) => setTrack(value)}
                  value={track}
                >
                  <SelectTrigger className="w-full mt-1 h-12 rounded-lg">
                    <SelectValue placeholder="Select Track" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="frontend">Frontend</SelectItem>
                    <SelectItem value="backend">Backend</SelectItem>
                  </SelectContent>
                </Select>
              </SelectGroup>

              {/* Select Station */}
              <SelectGroup>
                <SelectLabel className="text-sm font-medium text-gray-700">
                  Station
                </SelectLabel>
                <Select
                  onValueChange={(value) =>
                    setStation(Array.isArray(value) ? value : [value])
                  }
                  value={station.join(", ")}
                >
                  <SelectTrigger className="w-full mt-1 h-12 rounded-lg">
                    <SelectValue placeholder="Select Station(s)" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="station1">Station 1</SelectItem>
                    <SelectItem value="station2">Station 2</SelectItem>
                  </SelectContent>
                </Select>
              </SelectGroup>
            </form>

            <div className="flex justify-around gap-4 w-full mt-4">
              <Button
                onClick={closeModal}
                className="px-4 py-2 rounded-lg bg-gray-200 text-gray-700 hover:bg-gray-300"
              >
                Cancel
              </Button>
              <Button
                onClick={confirmAction}
                className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700"
              >
                Confirm
              </Button>
            </div>
          </div>
        </UiModal>
      )}

      {/* Edit Modal Implementation */}
      {modalState.isOpen && modalState.type === "edit" && selectedExaminer && (
        <UiModal
          opened={modalState.isOpen}
          close={closeModal}
          maxWidth="max-w-md"
        >
          <div className="flex flex-col z-20 gap-4">
            <h3 className="text-xl font-semibold text-gray-800">
              Edit Examiner Assignment
            </h3>
            <form className="space-y-4">
              {/* Select Examiner */}
              <SelectGroup>
                <SelectLabel className="text-sm font-medium text-gray-700">
                  Examiner
                </SelectLabel>
                <Select
                  disabled
                  onValueChange={(value) =>
                    setSelectedExaminer((prev) => ({ ...prev, email: value }))
                  }
                  value={selectedExaminer?.email}
                >
                  <SelectTrigger className="w-full mt-1 h-12 rounded-lg">
                    <SelectValue placeholder="Select Examiner" />
                  </SelectTrigger>
                  <SelectContent>
                    {examinerData.map((examiner) => (
                      <SelectItem key={examiner.id} value={examiner.email}>
                        {`${examiner.firstName} ${examiner.lastName} - ${examiner.speciality}`}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </SelectGroup>

              {/* Select Cohort */}
              <SelectGroup>
                <SelectLabel className="text-sm font-medium text-gray-700">
                  Cohort
                </SelectLabel>
                <Select
                  onValueChange={(value) => setCohort(value)}
                  value={cohort}
                >
                  <SelectTrigger className="w-full mt-1 h-12 rounded-lg">
                    <SelectValue placeholder="Select Cohort" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="cohort 1">Cohort 1</SelectItem>
                    <SelectItem value="cohort 2">Cohort 2</SelectItem>
                  </SelectContent>
                </Select>
              </SelectGroup>

              {/* Select Track */}
              <SelectGroup>
                <SelectLabel className="text-sm font-medium text-gray-700">
                  Track
                </SelectLabel>
                <Select
                  onValueChange={(value) => setTrack(value)}
                  value={track}
                >
                  <SelectTrigger className="w-full mt-1 h-12 rounded-lg">
                    <SelectValue placeholder="Select Track" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="frontend">Frontend</SelectItem>
                    <SelectItem value="backend">Backend</SelectItem>
                  </SelectContent>
                </Select>
              </SelectGroup>

              {/* Select Station */}
              <SelectGroup>
                <SelectLabel className="text-sm font-medium text-gray-700">
                  Station
                </SelectLabel>
                <Select
                  onValueChange={(value) =>
                    setStation(Array.isArray(value) ? value : [value])
                  }
                  value={station.join(", ")}
                >
                  <SelectTrigger className="w-full mt-1 h-12 rounded-lg">
                    <SelectValue placeholder="Select Station(s)" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="station1">Station 1</SelectItem>
                    <SelectItem value="station2">Station 2</SelectItem>
                  </SelectContent>
                </Select>
              </SelectGroup>
            </form>

            <div className="flex justify-around gap-4 w-full mt-4">
              <Button
                onClick={closeModal}
                className="px-4 py-2 rounded-lg bg-gray-200 text-gray-700 hover:bg-gray-300"
              >
                Cancel
              </Button>
              <Button
                onClick={confirmAction}
                className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700"
              >
                Confirm
              </Button>
            </div>
          </div>
        </UiModal>
      )}

      {/* Delete Examiner Modal */}
      {modalState.isOpen &&
        modalState.type === "delete" &&
        selectedExaminer && (
          <UiModal
            opened={modalState.isOpen}
            close={closeModal}
            maxWidth="max-w-lg"
          >
            <>
              <h3 className="text-2xl font-semibold text-gray-800 text-center mb-4">
                Delete Examiner Assignment
              </h3>
              <p className="text-gray-600 text-center mb-6">
                Are you sure you want to delete this assignment to the
                facilitator?
              </p>

              <div className="px-6 py-4 bg-gray-50 rounded-lg shadow-md">
                <div className="space-y-4">
                  <p className="text-sm text-gray-700">
                    <span className="font-medium text-gray-900">User ID:</span>{" "}
                    <strong>{selectedExaminer.id}</strong>
                  </p>
                  <p className="text-sm text-gray-700">
                    <span className="font-medium text-gray-900">Name:</span>{" "}
                    <strong>
                      {selectedExaminer.firstName} {selectedExaminer.lastName}
                    </strong>
                  </p>
                  <p className="text-sm text-gray-700">
                    <span className="font-medium text-gray-900">Cohort:</span>{" "}
                    <strong>{selectedExaminer.cohort}</strong>
                  </p>
                  <p className="text-sm text-gray-700">
                    <span className="font-medium text-gray-900">Stations:</span>{" "}
                    <strong>{selectedExaminer.stations}</strong>
                  </p>
                  <p className="text-sm text-gray-700">
                    <span className="font-medium text-gray-900">Tracks:</span>{" "}
                    <strong>{selectedExaminer.track}</strong>
                  </p>
                </div>
              </div>

              <div className="flex justify-around gap-4 w-full mt-4">
                <Button
                  onClick={closeModal}
                  className="px-4 py-2 rounded-lg bg-gray-200 text-gray-700 hover:bg-gray-300"
                >
                  Cancel
                </Button>
                <Button
                  onClick={confirmAction}
                  className={`px-4 py-2 rounded-lg text-white ${
                    modalState.type === "delete"
                      ? "bg-red-600 hover:bg-red-700"
                      : "bg-blue-600 hover:bg-blue-700"
                  }`}
                >
                  Confirm
                </Button>
              </div>
            </>
          </UiModal>
        )}
    </div>
  );
};

export default AssignExaminerPage;

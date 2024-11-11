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
import { stationData } from "@/dummy/columns";
import { Station } from "@/types";
import { Button } from "@headlessui/react";
import { stationColumns } from "@/lib/columns";
import { ContentLayout } from "@/layout/contentLayout";

const AssignStationPage = () => {
  const [loading] = useState(false);
  const [modalState, setModalState] = useState({
    isOpen: false,
    type: "edit" as "edit" | "delete" | "assign",
  });
  const [selectedStation, setSelectedStation] = useState(null);
  const [track, setTrack] = useState("");
  const [station, setStation] = useState<string[]>([]);

  const openModal = (
    type: "edit" | "delete" | "assign",
    station: Station | null
  ) => {
    console.log("Opening modal of type:", type);
    setModalState({ isOpen: true, type });
    setSelectedStation(station);
    if (station) {
      setTrack(station.track || "");
      setStation(station.stations || []);
    }
  };

  const closeModal = () => {
    setModalState({ isOpen: false, type: "edit" });
    setSelectedStation(null);
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
    <ContentLayout>
      <div className="flex flex-col w-full h-screen p-8 bg-gray-50 space-y-6">
        <UiPageHeader
          mainTitle="Station Management"
          subTitle="Assign Station"
        />

        <div className="flex justify-end">
          <Button
            onClick={() => openModal("assign", null)}
            className="bg-blue-600 text-white font-medium py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-200 shadow-md"
          >
            Assign Station
          </Button>
        </div>

        <div className="flex-1 bg-white p-6 rounded-lg shadow-lg overflow-auto">
          <DataTable
            header="Examiner List"
            columns={stationColumns}
            data={stationData}
            loading={loading}
            handleEdit={(station) => openModal("edit", station)}
            handleDelete={(station) => openModal("delete", station)}
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
                Assign Station
              </h3>
              <form className="space-y-4">
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
        {modalState.isOpen && modalState.type === "edit" && selectedStation && (
          <UiModal
            opened={modalState.isOpen}
            close={closeModal}
            maxWidth="max-w-md"
          >
            <div className="flex flex-col z-20 gap-4">
              <h3 className="text-xl font-semibold text-gray-800">
                Edit Station Assignment
              </h3>
              <form className="space-y-4">
                {/* Select Examiner */}
                <SelectGroup>
                  <SelectLabel className="text-sm font-medium text-gray-700">
                    Station
                  </SelectLabel>
                  <Select
                    disabled
                    onValueChange={(value) =>
                      setSelectedStation((prev) => ({
                        ...prev,
                        location: value,
                      }))
                    }
                    value={selectedStation?.location}
                  >
                    <SelectTrigger className="w-full mt-1 h-12 rounded-lg">
                      <SelectValue placeholder="Select station" />
                    </SelectTrigger>
                    <SelectContent>
                      {stationData.map((station) => (
                        <SelectItem key={station.id} value={station.location}>
                          {`${station.stationName} `}
                        </SelectItem>
                      ))}
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

        {/* Delete Station Modal */}
        {modalState.isOpen &&
          modalState.type === "delete" &&
          selectedStation && (
            <UiModal
              opened={modalState.isOpen}
              close={closeModal}
              maxWidth="max-w-lg"
            >
              <>
                <h3 className="text-2xl font-semibold text-gray-800 text-center mb-4">
                  Delete Station Assignment
                </h3>
                <p className="text-gray-600 text-center mb-6">
                  Are you sure you want to delete this assignment ? <br />
                  <strong>Note:</strong> It will dissociate it from track.
                </p>

                <div className="px-6 py-4 bg-gray-50 rounded-lg shadow-md">
                  <div className="space-y-4">
                    <p className="text-sm text-gray-700">
                      <span className="font-medium text-gray-900">
                        Station Name:
                      </span>{" "}
                      <strong>{selectedStation.location}</strong>
                    </p>
                    <p className="text-sm text-gray-700">
                      <span className="font-medium text-gray-900">Track:</span>{" "}
                      <strong>{selectedStation.track}</strong>
                    </p>
                    <p className="text-sm text-gray-700">
                      <span className="font-medium text-gray-900">
                        Assigned Examiners:
                      </span>{" "}
                      <strong>{selectedStation.assignedExaminers}</strong>
                    </p>
                    <p className="text-sm text-gray-700">
                      <span className="font-medium text-gray-900">
                        Location:
                      </span>{" "}
                      <strong>{selectedStation.location}</strong>
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
    </ContentLayout>
  );
};

export default AssignStationPage;

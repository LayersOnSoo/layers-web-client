import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { DataTable } from "@/components/UiDataTable";
import UiModal from "@/components/UiModal";
import { stationData } from "@/dummy/columns";
import { ContentLayout } from "@/layout/contentLayout";
import { stationColumns } from "@/lib/columns";
import { Station } from "@/types";

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const StationListPage = () => {
  const [loading] = useState(false);

  const [selectedStation, setSelectedStation] = useState(null);

  const [modalState, setModalState] = useState({
    isOpen: false,
    type: "edit" as "edit" | "delete",
  });

  const [formData, setFormData] = useState<Station>({
    id: 0,
    stationName: "",
    location: "",
    assignedExaminers: 0,
  });

  // Form state for editing
  useEffect(() => {
    if (modalState.type === "edit" && selectedStation) {
      setFormData({ ...selectedStation });
    }
  }, [modalState, selectedStation]);

  const openModal = (type, station) => {
    setSelectedStation(station);
    setModalState({ isOpen: true, type });
  };

  const closeModal = () => {
    setModalState({ isOpen: false, type: "edit" });
    setSelectedStation(null);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) =>
      prevData ? { ...prevData, [name]: value } : null
    );
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

  const fields = [
    {
      name: "stationName",
      label: "Station Name",
      type: "text",
    },
    {
      name: "location",
      label: "Location",
      type: "text",
    },
  ];

  return (
    <ContentLayout>
      <div className="flex flex-col w-full h-screen p-8 bg-gray-50 space-y-6">
        <h1 className="text-3xl font-semibold text-gray-800">
          Station Management
        </h1>

        <div className="flex justify-end">
          <Link
            to="/dashboard/station-management/add"
            className="bg-blue-600 text-white font-medium py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-200 shadow-md"
          >
            Add New Station
          </Link>
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

        <UiModal
          opened={modalState.isOpen}
          close={closeModal}
          maxWidth="max-w-md"
        >
          <div className="flex flex-col gap-4">
            {modalState.type === "delete" && selectedStation ? (
              <>
                <h3 className="text-2xl font-semibold text-gray-800 text-center mb-4">
                  Delete Station
                </h3>
                <p className="text-gray-600 text-center mb-6">
                  Are you sure you want to delete this station ? <br />
                  <strong>Note:</strong> It will be disassociated from any track
                  which is associated with it.
                </p>

                <div className="px-6 py-4 bg-gray-50 rounded-lg shadow-md">
                  <div className="space-y-4">
                    <p className="text-sm text-gray-700">
                      <span className="font-medium text-gray-900">
                        Station ID:
                      </span>{" "}
                      <strong>{selectedStation.stationId}</strong>
                    </p>
                    <p className="text-sm text-gray-700">
                      <span className="font-medium text-gray-900">
                        Station Name:
                      </span>{" "}
                      <strong>{selectedStation.stationName}</strong>
                    </p>
                    <p className="text-sm text-gray-700">
                      <span className="font-medium text-gray-900">
                        Location:
                      </span>{" "}
                      <strong>{selectedStation.location}</strong>
                    </p>
                    <p className="text-sm text-gray-700">
                      <span className="font-medium text-gray-900">
                        Assigned Examiners:
                      </span>{" "}
                      <strong>{selectedStation.assignedExaminers}</strong>
                    </p>
                  </div>
                </div>
              </>
            ) : (
              formData && (
                <>
                  <h3 className="text-xl font-semibold text-gray-800">
                    Edit Station
                  </h3>
                  <form className="space-y-4">
                    <div>
                      {fields.map((field) => (
                        <div key={field.name} className="mb-4">
                          <label
                            htmlFor={field.name}
                            className="block text-sm font-medium text-gray-700"
                          >
                            {field.label}
                          </label>
                          <Input
                            type={field.type}
                            name={field.name}
                            value={formData ? formData[field.name] : ""}
                            onChange={handleInputChange}
                            id={field.name} // Ensure that input and label are linked
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                          />
                        </div>
                      ))}
                    </div>
                  </form>
                </>
              )
            )}
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
          </div>
        </UiModal>
      </div>
    </ContentLayout>
  );
};

export default StationListPage;

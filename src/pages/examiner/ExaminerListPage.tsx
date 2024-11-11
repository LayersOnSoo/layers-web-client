import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { DataTable } from "@/components/UiDataTable";
import UiModal from "@/components/UiModal";
import { examinerData } from "@/dummy/columns";
import { examinerColumns } from "@/lib/columns";
import { Examiner } from "@/types";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ExaminerListPage = () => {
  const [loading] = useState(false);

  const [modalState, setModalState] = useState({
    isOpen: false,
    type: "edit" as "edit" | "delete",
  });
  const [selectedExaminer, setSelectedExaminer] = useState(null);

  // Form state for editing
  const [formData, setFormData] = useState<Examiner>({
    id: 0,
    firstName: "",
    lastName: "",
    email: "",
    speciality: "",
    location: "",
    password: "",
    confirmPassword: "",
  });

  useEffect(() => {
    if (modalState.type === "edit" && selectedExaminer) {
      setFormData({ ...selectedExaminer });
    }
  }, [modalState, selectedExaminer]);

  const openModal = (type, examiner) => {
    setSelectedExaminer(examiner);
    setModalState({ isOpen: true, type });
  };

  const closeModal = () => {
    setModalState({ isOpen: false, type: "edit" });
    setSelectedExaminer(null);
    setFormData(null);
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
      name: "firstName",
      label: "First Name",
      type: "text",
    },
    {
      name: "lastName",
      label: "Last Name",
      type: "text",
    },
    {
      name: "email",
      label: "Email",
      type: "email",
    },
    {
      name: "speciality",
      label: "Speciality",
      type: "text",
    },
    {
      name: "location",
      label: "Location",
      type: "text",
    },
    {
      name: "password",
      label: "Password",
      type: "password",
    },
    {
      name: "confirmPassword",
      label: "Confirm Password",
      type: "password",
    },
  ];

  return (
    <div className="flex flex-col w-full h-screen p-8 bg-gray-50 space-y-6">
      <h1 className="text-3xl font-semibold text-gray-800">
        Examiner Management
      </h1>

      <div className="flex justify-end">
        <Link
          to="/dashboard/examiner-management/add"
          className="bg-blue-600 text-white font-medium py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-200 shadow-md"
        >
          Add New Examiner
        </Link>
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

      <UiModal
        opened={modalState.isOpen}
        close={closeModal}
        maxWidth="max-w-md"
      >
        <div className="flex flex-col gap-4">
          {modalState.type === "delete" && selectedExaminer ? (
            <>
              <>
                <h3 className="text-2xl font-semibold text-gray-800 text-center mb-4">
                  Delete Examiner
                </h3>
                <p className="text-gray-600 text-center mb-6">
                  Are you sure you want to delete this examiner ?
                </p>

                <div className="px-6 py-4 bg-gray-50 rounded-lg shadow-md">
                  <div className="space-y-4">
                    <p className="text-sm text-gray-700">
                      <span className="font-medium text-gray-900">
                        User ID:
                      </span>{" "}
                      <strong>{selectedExaminer.id}</strong>
                    </p>
                    <p className="text-sm text-gray-700">
                      <span className="font-medium text-gray-900">Email:</span>{" "}
                      <strong>{selectedExaminer.email}</strong>
                    </p>
                    <p className="text-sm text-gray-700">
                      <span className="font-medium text-gray-900">Name:</span>{" "}
                      <strong>
                        {" "}
                        {selectedExaminer.firstname} {selectedExaminer.lastname}
                      </strong>
                    </p>
                  </div>
                </div>
              </>
            </>
          ) : (
            formData && (
              <>
                <h3 className="text-xl font-semibold text-gray-800">
                  Edit Examiner
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
  );
};

export default ExaminerListPage;

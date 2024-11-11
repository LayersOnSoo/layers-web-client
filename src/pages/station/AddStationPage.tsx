import UiPageHeader from "@/components/UiPageHeader";
import { ContentLayout } from "@/layout/contentLayout";
import React, { useState } from "react";

const AddStationPage = () => {
  const [formData, setFormData] = useState({
    stationName: "",
    location: "",
  });

  const [errors, setErrors] = useState({
    stationName: "",
    location: "",
  });

  const fields = [
    { label: "Station Name", name: "stationName", type: "text" },
    { label: "Location", name: "location", type: "text" },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    const newErrors = { ...errors };

    Object.keys(formData).forEach((key) => {
      if (!formData[key as keyof typeof formData]) {
        newErrors[key as keyof typeof errors] = `${key} is required`;
      } else {
        newErrors[key as keyof typeof errors] = "";
      }
    });

    setErrors(newErrors);

    return !Object.values(newErrors).some((error) => error !== "");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      console.log("Form Submitted: ", formData);
    }
  };

  return (
    <ContentLayout>
      <div className="flex flex-col w-full h-screen p-8 bg-gray-50 space-y-6">
        <UiPageHeader
          mainTitle="Station Management"
          subTitle="Add New Station"
        />

        <form onSubmit={handleSubmit} className="space-y-4">
          {fields.map((field) => (
            <div key={field.name}>
              <label className="block text-sm font-medium text-gray-700">
                {field.label}
              </label>
              <input
                type={field.type}
                name={field.name}
                value={formData[field.name as keyof FormData]}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              />
              {errors[field.name] && (
                <p className="text-red-600 text-sm">{errors[field.name]}</p>
              )}
            </div>
          ))}

          <button
            type="submit"
            className="w-full bg-blue-500 text-white rounded-md p-2 mt-4"
          >
            Create New Station
          </button>
        </form>
      </div>
    </ContentLayout>
  );
};

export default AddStationPage;

import Card from "@/components/card";
import Navbar from "@/components/navbar";
import React from "react";
import { useNavigate } from "react-router-dom";

const HomePage: React.FC = () => {
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="p-8">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-gray-800">
            Welcome to the Dashboard
          </h1>
          <p className="text-gray-600">Manage your content below</p>
        </div>

        {/* Management Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card
            title="Track Management"
            description="View, add, or edit tracks here."
            buttonLabel="Go to Track Management"
            onButtonClick={() =>
              handleNavigation("/dashboard/track-management")
            }
          />

          <Card
            hasBeenImplemented
            title="Examiner Management"
            description="Manage examiner information and permissions."
            buttonLabel="Go to Examiner Management"
            onButtonClick={() =>
              handleNavigation("/dashboard/examiner-management")
            }
          />

          <Card
            hasBeenImplemented
            title="Station Management"
            description="Organize and assign stations."
            buttonLabel="Go to Station Management"
            onButtonClick={() =>
              handleNavigation("/dashboard/station-management")
            }
          />

          <Card
            title="Additional Management"
            description="Additional options for managing resources."
            buttonLabel="Go to Additional Management"
            onButtonClick={() =>
              handleNavigation("/dashboard/additional-management")
            }
          />
        </div>
      </main>
    </div>
  );
};

export default HomePage;

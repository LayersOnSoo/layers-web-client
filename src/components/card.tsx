import { CheckCircle } from "lucide-react";
import React from "react";

interface CardProps {
  title: string;
  description: string;
  buttonLabel: string;
  onButtonClick: () => void;
  hasBeenImplemented?: boolean;
}

const Card: React.FC<CardProps> = ({
  title,
  description,
  buttonLabel,
  onButtonClick,
  hasBeenImplemented = false,
}) => {
  return (
    <div className="bg-white p-6 rounded shadow">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold mb-4 text-gray-800">{title}</h2>
          <p className="text-gray-600">{description}</p>
          <button
            onClick={onButtonClick}
            className="mt-4 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
          >
            {buttonLabel}
          </button>
        </div>
        <div>{hasBeenImplemented && <CheckCircle color="green" />}</div>
      </div>
    </div>
  );
};

export default Card;

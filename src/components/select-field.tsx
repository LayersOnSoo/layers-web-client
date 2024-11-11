import * as React from "react";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectLabel,
  SelectItem,
  SelectSeparator,
  SelectValue,
} from "@/components/ui/select";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils"; // Your utility function for combining class names

interface SelectFieldProps {
  label: string;
  options: { value: string; label: string }[];
  value: string[];
  onChange: (value: string[]) => void;
  placeholder: string;
}

const SelectField: React.FC<SelectFieldProps> = ({
  label,
  options,
  value,
  onChange,
  placeholder,
}) => {
  const handleSelection = (itemValue: string) => {
    const updatedValue = value.includes(itemValue)
      ? value.filter((val) => val !== itemValue)
      : [...value, itemValue];
    onChange(updatedValue);
  };

  return (
    <div className="space-y-2">
      <SelectLabel>{label}</SelectLabel>
      <Select>
        <SelectTrigger>
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          <SelectLabel>Choose options</SelectLabel>
          {options.map((option) => (
            <SelectItem
              key={option.value}
              value={option.value}
              onClick={() => handleSelection(option.value)}
              className={cn(
                "flex items-center space-x-2",
                value.includes(option.value)
                  ? "bg-accent text-accent-foreground"
                  : ""
              )}
            >
              <Check
                className={cn(
                  "h-4 w-4",
                  value.includes(option.value) ? "opacity-100" : "opacity-50"
                )}
              />
              <span>{option.label}</span>
            </SelectItem>
          ))}
          <SelectSeparator />
        </SelectContent>
      </Select>
    </div>
  );
};

export default SelectField;

import { Label, Select } from "flowbite-react";

export default function SelectInput({ label, name, value, onChange, options = [], className = "" }) {
  return (
    <div className={`flex flex-col gap-1 ${className}`}>
      {label && <Label htmlFor={name} value={label} />}
      <Select id={name} name={name} value={value} onChange={onChange}>
        {options.map(opt => (
          <option key={opt.value} value={opt.value}>{opt.label}</option>
        ))}
      </Select>
    </div>
  );
}

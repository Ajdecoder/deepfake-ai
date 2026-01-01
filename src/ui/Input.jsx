import { TextInput, Label } from "flowbite-react";

export default function Input({ label, value, onChange, type = "text", placeholder, name, required = false, className = "" }) {
  return (
    <div className={`flex flex-col gap-1 ${className}`}>
      {label && <Label htmlFor={name} value={label} />}
      <TextInput
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
      />
    </div>
  );
}

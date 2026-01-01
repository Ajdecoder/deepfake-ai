import { Textarea, Label } from "flowbite-react";

export default function TextArea({ label, value, onChange, name, placeholder, className = "" }) {
  return (
    <div className={`flex flex-col gap-1 ${className}`}>
      {label && <Label htmlFor={name} value={label} />}
      <Textarea id={name} name={name} value={value} onChange={onChange} placeholder={placeholder} />
    </div>
  );
}

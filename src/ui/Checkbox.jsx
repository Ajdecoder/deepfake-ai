import { Checkbox, Label } from "flowbite-react";

export default function CheckBox({ label, checked, onChange, name, className = "" }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <Checkbox id={name} name={name} checked={checked} onChange={onChange} />
      {label && <Label htmlFor={name}>{label}</Label>}
    </div>
  );
}

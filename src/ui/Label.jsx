import { cn } from "../utils/cn";

export default function Label({ children, htmlFor, className="" }) {
  return (
    <label htmlFor={htmlFor} className={cn("font-medium text-sm", className)}>
      {children}
    </label>
  );
}

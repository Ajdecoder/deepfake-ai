import { cn } from "../utils/cn";

export default function Details({ children, open=false, className="" }) {
  return (
    <details open={open} className={cn("border rounded p-2", className)}>
      {children}
    </details>
  );
}

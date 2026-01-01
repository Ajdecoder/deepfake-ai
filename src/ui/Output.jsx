import { cn } from "../utils/cn";

export default function Output({ value, className="" }) {
  return <output className={cn("block p-2 border rounded", className)}>{value}</output>;
}

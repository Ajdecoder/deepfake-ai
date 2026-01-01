import { cn } from "../utils/cn";

export default function Progress({ value=0, max=100, className="" }) {
  return (
    <progress value={value} max={max} className={cn("w-full h-3 rounded", className)} />
  );
}

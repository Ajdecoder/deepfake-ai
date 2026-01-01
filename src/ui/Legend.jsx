import { cn } from "../utils/cn";

export default function Legend({ children, className="" }) {
  return <legend className={cn("font-medium text-sm", className)}>{children}</legend>;
}
d
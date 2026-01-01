import { cn } from "../utils/cn";

export default function Summary({ children, className="" }) {
  return <summary className={cn("cursor-pointer font-medium", className)}>{children}</summary>;
}

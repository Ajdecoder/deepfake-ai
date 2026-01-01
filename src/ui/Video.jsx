import { cn } from "../utils/cn";

export default function Video({ src, controls=true, className="" }) {
  return <video src={src} controls={controls} className={cn("rounded", className)} />;
}

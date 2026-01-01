import { cn } from "../utils/cn";

export default function Audio({ src, controls = true, className = "", autoPlay = false, loop = false }) {
  return (
    <div className={cn("w-full flex justify-center", className)}>
      <audio
        src={src}
        controls={controls}
        autoPlay={autoPlay}
        loop={loop}
        className="w-full rounded-md border border-gray-200 bg-gray-50"
      />
    </div>
  );
}

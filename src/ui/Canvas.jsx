import { useRef, useEffect } from "react";

export default function Canvas({ width=300, height=150, className="", draw }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (canvasRef.current && draw) {
      const ctx = canvasRef.current.getContext("2d");
      draw(ctx);
    }
  }, [draw]);

  return <canvas ref={canvasRef} width={width} height={height} className={(className)} />;
}

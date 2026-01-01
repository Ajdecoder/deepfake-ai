import { Button as FlowButton } from "flowbite-react";

export default function Button({ children, onClick, color = "blue", size = "md", className = "", ...props }) {
  return (
    <FlowButton
      color={color}
      size={size}
      onClick={onClick}
      className={className}
      {...props}
    >
      {children}
    </FlowButton>
  );
}

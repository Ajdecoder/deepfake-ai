import { Modal, Button } from "flowbite-react";
import { useState } from "react";

export default function Dialog({ title, children, triggerText = "Open", size = "md", className = "" }) {
  const [open, setOpen] = useState(false);

  return (
    <div className={className}>
      <Button onClick={() => setOpen(true)}>{triggerText}</Button>
      <Modal show={open} onClose={() => setOpen(false)} size={size}>
        <Modal.Header>{title}</Modal.Header>
        <Modal.Body>{children}</Modal.Body>
        <Modal.Footer>
          <Button onClick={() => setOpen(false)}>Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

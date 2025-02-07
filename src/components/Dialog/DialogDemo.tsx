import * as React from "react";
import { Dialog, DialogTrigger, DialogContent, DialogClose } from "./Dialog";
import Button from "../Button/Button";

const DialogDemo = () => (
  <Dialog>
    <DialogTrigger asChild>
      <Button variant="primary" aria-label="Open dialog">
        Open dialog
      </Button>
    </DialogTrigger>
    <DialogContent>
      <DialogClose asChild>
        <Button
          variant="primary"
          aria-label="Close"
          style={{ width: "100px", height: "60px" }}
        >
          Close
        </Button>
      </DialogClose>
    </DialogContent>
  </Dialog>
);

export default DialogDemo;

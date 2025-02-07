import React, { PropsWithChildren } from "react";
import { UniqueIdentifier, useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";
import clsx from "clsx";
import styles from "./DragAndDrop.module.css";

type DraggableProps = PropsWithChildren & {
  variant: "dark" | "light";
  id: UniqueIdentifier;
  hasDroppable?: boolean; // ideally a check on the children type would avoid this check
  type?: string;
  currentDroppable?: UniqueIdentifier;
  disabled?: boolean;
};

const Draggable = ({
  variant,
  id,
  children,
  hasDroppable,
  type,
  currentDroppable,
  disabled,
}: DraggableProps) => {
  const { attributes, isDragging, listeners, setNodeRef, transform } =
    useDraggable({
      id,
      data: {
        type,
        currentDroppable,
      },
      disabled,
    });

  const draggableClasses = hasDroppable
    ? styles["draggable-droppable-container"]
    : styles["draggable-container"];

  const draggableContainerClasses = clsx(
    draggableClasses,
    styles[variant],
    isDragging && styles.dragging
  );

  const style = {
    transform: CSS.Translate.toString(transform),
  };

  return (
    <div
      className={draggableContainerClasses}
      id={`draggable-${id}`}
      ref={setNodeRef}
      style={{
        ...style,
      }}
      {...listeners}
      {...attributes}
    >
      {children}
    </div>
  );
};

export default Draggable;

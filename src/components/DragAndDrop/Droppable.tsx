import React, { PropsWithChildren } from "react";
import { UniqueIdentifier, useDroppable } from "@dnd-kit/core";
import clsx from "clsx";
import styles from "./DragAndDrop.module.css";

type DroppableProps = PropsWithChildren & {
  variant: "dark" | "light";
  id: UniqueIdentifier;
  isDraggable?: boolean;
  accepts?: string[];
  position?: string;
  disabled?: boolean;
};

const Droppable = ({
  variant,
  id,
  children,
  isDraggable,
  accepts,
  position,
  disabled,
}: DroppableProps) => {
  const { setNodeRef, isOver, active, over } = useDroppable({
    id,
    data: {
      accepts,
      position,
    },
    disabled,
  });

  const validDropZone =
    over && over?.data?.current?.accepts.includes(active?.data?.current?.type);

  const draggableClasses = isDraggable
    ? styles["droppable-draggable-container"]
    : styles["droppable-container"];

  const droppableContainerClasses = clsx(
    draggableClasses,
    styles[variant],
    isOver && validDropZone && styles["dragging-droppable"]
  );

  // TODO: disable dropzone border if draggable element is not accepted
  // Show drag zone when dragging elements that can be dropped there, and not when dragging the droppable itself when this is also draggable
  const activeValidDropZone = id === active?.id;
  const style = {
    border: activeValidDropZone ? "none" : undefined,
  };

  return (
    <div
      className={droppableContainerClasses}
      id={`droppable-${id}`}
      ref={setNodeRef}
      style={{
        ...style,
      }}
    >
      {children}
    </div>
  );
};

export default Droppable;

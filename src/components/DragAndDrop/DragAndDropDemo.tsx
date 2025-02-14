import React, { useState } from "react";
import {
  DndContext,
  DragEndEvent,
  UniqueIdentifier,
  DragStartEvent,
} from "@dnd-kit/core";
import styles from "./DragAndDrop.module.css";
import clsx from "clsx";
import Droppable from "./Droppable";
import Draggable from "./Draggable";
// import { SortableContext } from "@dnd-kit/sortable";

type DraggableBoard = {
  id: UniqueIdentifier;
  position: "top" | "bottom";
  tasks: DraggableTask[];
  label: string;
};

type DraggableTask = {
  id: UniqueIdentifier;
  label: string;
};

type DragAndDropDemoProps = {
  variant: "light" | "dark";
  disabled?: boolean;
};

// TODO: check swappy and review styles (hover, dragging, default) with Flow component
const DragAndDropDemo = ({ variant, disabled }: DragAndDropDemoProps) => {
  const draggableBodyClasses = clsx(styles["draggable-body"], styles[variant]);

  /**
   * Logic goes as follows:
   * - All dnd elements lie within a single DnDContext.
   * - Individual boards (that eventually themselves are draggable) are containers of other draggable elements (tasks).
   * - Each container is responsible for their respective state (the draggable elements they contain).
   * - Containers are fixed for now. They should eventually be dynamically created, or at least be shown/hidden CSS wise.
   * - dragStart checks the active element being dragged (active)
   * - dragEnd checks the id of the droppable over which the dragged was released
   * - if the droppable had already the draggable, does nothing (eventually only update coordinates inside container)
   * - if not, remove draggable from original droppable and add it to the new droppable
   */

  // Top level draggable-droppable elements (boards) only care about position (top, bottom)
  const [initialDraggableBoards, setInitialDraggableBoards] = useState<
    DraggableBoard[]
  >([
    {
      id: "board-1",
      position: "top",
      tasks: [
        {
          id: `task-1`,
          label: "one",
        },
        {
          id: `task-2`,
          label: "two",
        },
        {
          id: `task-3`,
          label: "three",
        },
      ],
      label: "board 1",
    },
    {
      id: "board-2",
      position: "bottom",
      tasks: [],
      label: "board 2",
    },
    { id: "board-3", position: "bottom", tasks: [], label: "board 3" },
  ]);

  const handleDragStart = ({ active }: DragStartEvent) => {
    console.log("start", { active });
  };

  const handleDragEnd = ({ over, active }: DragEndEvent) => {
    const originDroppable = active.data.current?.currentDroppable;
    const targetDroppable = over?.id;
    const targetPosition = over?.data?.current?.position;

    if (targetDroppable === null || targetDroppable === undefined) return;

    // If the target droppable is the same as the current from which task is dragged, do nothing
    if (originDroppable === targetDroppable) return;

    // Check if the drop zone is valid (droppable.accepts === draggable.type)
    if (
      over &&
      over?.data?.current?.accepts.includes(active?.data?.current?.type)
    ) {
      // Handle board drag and drop
      if (active?.data?.current?.type === "container") {
        const newState = initialDraggableBoards.map((board) => {
          if (board.id === active.id) {
            return { ...board, position: targetPosition };
          } else {
            return board;
          }
        });
        setInitialDraggableBoards(newState as DraggableBoard[]);
      }

      // Handle tasks drag and drop
      if (active?.data?.current?.type === "item") {
        // find the dragged element (active only carries the id)
        const task = initialDraggableBoards
          .find((board) => board.id === originDroppable)
          ?.tasks.find((task) => task.id === active.id);

        // update new state, removing the element from its origin and adding it to the target droppable
        const newState = initialDraggableBoards.map((board) => {
          if (board.id === originDroppable) {
            return {
              ...board,
              tasks: board.tasks.filter((el) => el.id !== active.id),
            };
          } else if (board.id === targetDroppable) {
            return {
              ...board,
              tasks: [...board.tasks, task],
            };
          } else {
            return board;
          }
        });

        setInitialDraggableBoards(newState as DraggableBoard[]);
      }
    } else {
      console.log("Invalid drop zone for active draggable");
    }
  };

  const topDropZone = (
    <Droppable
      variant={variant}
      id={"top-drop-zone"}
      accepts={["container"]}
      position={"top"}
      disabled={disabled}
    >
      {initialDraggableBoards
        .filter(({ position }) => position === "top")
        .map(({ position, id, label, tasks }) => {
          const boardIdentifier = `board-${position}-${id}`;
          return (
            <Draggable
              key={boardIdentifier}
              id={id}
              variant={variant}
              type="container"
              hasDroppable={true}
              currentDroppable={"top-drop-zone"}
              disabled={disabled}
            >
              <span>{label}</span>
              <Droppable
                variant={variant}
                id={id}
                accepts={["item"]}
                isDraggable={true}
                disabled={disabled}
              >
                {tasks?.map((el) => {
                  const taskIdentifier = `task-${position}-${el.id}`;
                  return (
                    <Draggable
                      key={taskIdentifier}
                      id={el.id}
                      variant={variant}
                      type="item"
                      currentDroppable={id}
                      disabled={disabled}
                    >
                      <div className={draggableBodyClasses}>
                        <span>{el.label}</span>
                      </div>
                    </Draggable>
                  );
                })}
              </Droppable>
            </Draggable>
          );
        })}
    </Droppable>
  );

  const bottomDropZone = (
    <Droppable
      variant={variant}
      id={"bottom-drop-zone"}
      accepts={["container"]}
      position={"bottom"}
      disabled={disabled}
    >
      {initialDraggableBoards
        .filter(({ position }) => position === "bottom")
        .map(({ position, id, label, tasks }) => {
          const boardIdentifier = `board-${position}-${id}`;
          return (
            <Draggable
              key={boardIdentifier}
              id={id}
              variant={variant}
              type="container"
              hasDroppable={true}
              currentDroppable={"bottom-drop-zone"}
              disabled={disabled}
            >
              <span>{label}</span>
              <Droppable
                variant={variant}
                id={id}
                accepts={["item"]}
                isDraggable={true}
                disabled={disabled}
              >
                {tasks?.map((el) => {
                  const taskIdentifier = `task-${position}-${el.id}`;
                  return (
                    <Draggable
                      key={taskIdentifier}
                      id={el.id}
                      variant={variant}
                      type="item"
                      currentDroppable={id}
                      disabled={disabled}
                    >
                      <div className={draggableBodyClasses}>
                        <span>{el.label}</span>
                      </div>
                    </Draggable>
                  );
                })}
              </Droppable>
            </Draggable>
          );
        })}
    </Droppable>
  );

  return (
    <div
      style={{
        width: "900px",
        height: "600px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        position: "relative",
        gap: "15px",
      }}
    >
      <DndContext onDragEnd={handleDragEnd} onDragStart={handleDragStart}>
        {topDropZone}
        {bottomDropZone}
      </DndContext>
    </div>
  );
};

export default DragAndDropDemo;

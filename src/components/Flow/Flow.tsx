import React from "react";
import { getStraightPath } from "@xyflow/react";
import { useInternalNode } from "@xyflow/react";
import {
  Handle,
  Position,
  useConnection,
  type Node,
  type NodeProps,
} from "@xyflow/react";
import { useDraggable, useDroppable } from "@dnd-kit/core";
import { getEdgeParams } from "./utils";
import clsx from "clsx";

import "./Flow.css";
import { Grip } from "lucide-react";

type VariantProps = "dark" | "light";

const BaseNode = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> &
    NodeProps<Node> & {
      selected?: boolean;
      variant: VariantProps;
    }
>(
  (
    { selected, variant, data, id, isConnectable, type, parentId, ...props },
    ref
  ) => {
    const connection = useConnection();

    const isTarget = connection.inProgress && connection.fromNode.id !== id;

    const connectLabel = isTarget ? "Pick me!" : "Click me and hold to connect";

    const { attributes, isDragging, listeners, setNodeRef, transform } =
      useDraggable({
        id,
        data: {
          type,
          currentDroppable: parentId,
        },
        // disabled,
      });

    return (
      <>
        <div
          className={clsx("base-node", data.className)}
          id={`draggable-${id}`}
          ref={setNodeRef}
          {...listeners}
          {...attributes}
        >
          <div ref={ref} {...props}>
            <div
              style={{
                display: "flex",
                width: "100%",
                justifyContent: "space-between",
                padding: "2px",
              }}
            >
              <p style={{ padding: "10px" }}>{data.label}</p>
              <span className="drag-handle__custom">
                <Grip size={14} />
              </span>
            </div>
          </div>
        </div>
        {/* Easy connect components are set outside to avoid issues with the drag and drop behaviour and effectAllowed attribute */}
        <div className="customNodeBody">
          <p
            style={{
              height: "50px",
              textAlign: "center",
              paddingTop: "10px",
            }}
          >
            {connectLabel}
          </p>
          {/* If handles are conditionally rendered and not present initially, you need to update the node internals https://reactflow.dev/docs/api/hooks/use-update-node-internals/ */}
          {/* In this case we don't need to use useUpdateNodeInternals, since !isConnecting is true at the beginning and all handles are rendered initially. */}
          {!connection.inProgress && (
            <Handle
              className="customHandle"
              position={Position.Right}
              type="source"
            />
          )}
          {/* We want to disable the target handle, if the connection was started from this node */}
          {(!connection.inProgress || isTarget) && (
            <Handle
              className="customHandle"
              position={Position.Left}
              type="target"
              isConnectableStart={false}
            />
          )}
        </div>
      </>
    );
  }
);

BaseNode.displayName = "BaseNode";

const GroupNode = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> &
    NodeProps<Node> & {
      selected?: boolean;
      variant: VariantProps;
    }
>(({ selected, variant, data, isConnectable, id, ...props }, ref) => {
  const { setNodeRef, isOver, active, over } = useDroppable({
    id,
    data: {
      accepts: "baseNode",
    },
    // disabled,
  });
  return (
    <div
      className={clsx("group-node", data.className)}
      id={`droppable-${id}`}
      ref={setNodeRef}
    >
      <div ref={ref} {...props}>
        <p className={clsx("group-node-header")}>{data.label}</p>
      </div>
    </div>
  );
});

GroupNode.displayName = "GroupNode";

const MainContainerNode = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> &
    NodeProps<Node> & {
      selected?: boolean;
      variant: VariantProps;
    }
>(({ selected, variant, data, isConnectable, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={clsx("main-container-node", data.className)}
      {...props}
    />
  );
});

MainContainerNode.displayName = "MainContainerNode";

function CustomConnectionLine({ fromX, fromY, toX, toY, connectionLineStyle }) {
  const [edgePath] = getStraightPath({
    sourceX: fromX,
    sourceY: fromY,
    targetX: toX,
    targetY: toY,
  });

  return (
    <g>
      <path style={connectionLineStyle} fill="none" d={edgePath} />
    </g>
  );
}

function FloatingEdge({ id, source, target, markerEnd, style }) {
  const sourceNode = useInternalNode(source);
  const targetNode = useInternalNode(target);

  if (!sourceNode || !targetNode) {
    return null;
  }

  const { sx, sy, tx, ty } = getEdgeParams(sourceNode, targetNode);

  const [edgePath] = getStraightPath({
    sourceX: sx,
    sourceY: sy,
    targetX: tx,
    targetY: ty,
  });

  return (
    <path
      id={id}
      className="react-flow__edge-path"
      d={edgePath}
      markerEnd={markerEnd}
      style={style}
    />
  );
}

export {
  BaseNode,
  GroupNode,
  MainContainerNode,
  CustomConnectionLine,
  FloatingEdge,
};

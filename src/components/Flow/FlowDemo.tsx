import React, {
  PointerEvent,
  useCallback,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
  type Ref,
} from "react";
import {
  ReactFlow,
  Controls,
  Background,
  addEdge,
  useNodesState,
  useEdgesState,
  MarkerType,
  useReactFlow,
  ReactFlowProvider,
} from "@xyflow/react";

import clsx from "clsx";
import "@xyflow/react/dist/base.css";
import "./Flow.css";

import {
  BaseNode,
  CustomConnectionLine,
  FloatingEdge,
  GroupNode,
  MainContainerNode,
} from "./Flow";
import DevTools from "./FlowDevTools";
import { DndContext, DragEndEvent, DragStartEvent } from "@dnd-kit/core";

// TODO check which drag/drop events are relevant for draggable (base) and droppable (groups) nodes
// Add edges
// Connect / delete. Create nodes on menu context?
// Reset position
// Discrete drag / steps
// avoid board node overlap
// Dynamic sizes for viewport -> resizable? somehow chande initialNodes dynamically? store update

const initialNodes = [
  {
    id: "main-container",
    type: "mainContainerNode",
    data: { label: "main container" },
    position: { x: 0, y: 0 },
  },
  {
    id: "board-1",
    type: "groupNode",
    data: { label: "Board 1" },
    position: { x: 20, y: 20 },
    parentId: "main-container",
    extent: "parent",
  },
  {
    id: "board-2",
    type: "groupNode",
    data: { label: "Board 2" },
    position: { x: 280, y: 20 },
    parentId: "main-container",
    extent: "parent",
  },
  {
    id: "board-3",
    type: "groupNode",
    data: { label: "Board 3" },
    position: { x: 530, y: 20 },
    parentId: "main-container",
    extent: "parent",
  },
  {
    id: "item-1",
    type: "baseNode",
    data: { label: "Item 1" },
    dragHandle: ".drag-handle__custom",
    position: { x: 10, y: 130 },
    parentId: "board-1",
  },
  {
    id: "item-2",
    type: "baseNode",
    data: { label: "Item 2" },
    dragHandle: ".drag-handle__custom",
    position: { x: 10, y: 50 },
    parentId: "board-2",
  },
  {
    id: "item-3",
    type: "baseNode",
    data: { label: "Item 3" },
    dragHandle: ".drag-handle__custom",
    position: { x: 10, y: 180 },
    parentId: "board-2",
  },
  {
    id: "item-4",
    type: "baseNode",
    data: { label: "Item 4" },
    dragHandle: ".drag-handle__custom",
    position: { x: 10, y: 130 },
    parentId: "board-3",
  },
];

const connectionLineStyle = {
  stroke: "var(--indigo-drag)",
  strokeWidth: "2px",
};

const initialEdges = [];
// {
//   id: "xy-edge__item-1-item-3",
//   markerEnd: { type: "arrowclosed", color: "currentColor" },
//   source: "item-1",
//   target: "item-3",
//   type: "floating",
// };

const defaultEdgeOptions = {
  type: "floating",
  markerEnd: {
    type: MarkerType.ArrowClosed,
    color: "currentColor",
  },
};

const snapGrid = [10, 10];

type FlowDemoProps = {
  variant: "dark" | "light";
  ref: Ref<unknown>;
};

const Flow = ({ variant, ref }: FlowDemoProps) => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const reactFlowWrapper = useRef(null);
  const { screenToFlowPosition } = useReactFlow();

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  const nodeTypes = useMemo(
    () => ({
      mainContainerNode: MainContainerNode,
      groupNode: GroupNode,
      baseNode: BaseNode,
    }),
    []
  );

  const edgeTypes = useMemo(() => ({ floating: FloatingEdge }), []);

  useImperativeHandle(ref, () => ({
    updateNodes: (newParentId: string, nodeId: string, evt: PointerEvent) => {
      // react flow requires that parent nodes be in previous in order from their respective child nodes
      // and also modify the position

      const parentNode = nodes.find((node) => node.id === newParentId);
      const newPosition = screenToFlowPosition({
        x: evt.clientX,
        y: evt.clientY,
      });

      setNodes((nodes) =>
        nodes.map((node) => {
          if (node.id === nodeId) {
            return {
              ...node,
              parentId: newParentId, // ! issue relies here, pro version has it solved apparently for dynamic grouping, would not be a surprise there is a blocker on the code
              // position: newPosition,
              // position: { x: 10, y: 130 },
            };
          } else {
            return node;
          }
        })
      );
    },
  }));

  return (
    <div ref={reactFlowWrapper} style={{ width: "100%", height: "100%" }}>
      <ReactFlow
        className={clsx("react-flow")}
        colorMode={variant}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        edgeTypes={edgeTypes}
        nodes={nodes}
        edges={edges}
        connectionLineComponent={CustomConnectionLine}
        connectionLineStyle={connectionLineStyle}
        defaultEdgeOptions={defaultEdgeOptions}
        snapToGrid={true}
        snapGrid={snapGrid}
        fitView
      >
        <Background />
        {/* <Controls
          style={{
            color: variant === "dark" ? "var(--dark-50)" : "var(--light-950)",
            backgroundColor:
              variant === "dark" ? "var(--dark-950)" : "var(--light-50)",
          }}
        />
        <DevTools /> */}
      </ReactFlow>
    </div>
  );
};

const FlowDemo = ({ variant }: FlowDemoProps) => {
  const childRef = useRef<unknown>(null);

  const handleNodeDrop = (newParentId: string, nodeId: string, evt: Event) => {
    // console.log(childRef?.current);
    // console.log({ newParentId, nodeId });
    childRef?.current?.updateNodes(newParentId, nodeId, evt);
  };

  const handleDragStart = ({ active }: DragStartEvent) => {
    // console.log("start", { active });
  };

  const handleDragEnd = ({ over, active, activatorEvent }: DragEndEvent) => {
    const originDroppable = active.data.current?.currentDroppable;
    const targetDroppable = over?.id;
    // console.log("dragend", { over, active });

    if (targetDroppable === null || targetDroppable === undefined) return;

    // If the target droppable is the same as the current from which task is dragged, do nothing
    if (originDroppable === targetDroppable) return;

    // Check if the drop zone is valid (droppable.accepts === draggable.type)
    if (
      over &&
      over?.data?.current?.accepts.includes(active?.data?.current?.type)
    ) {
      // console.log("can drop");
      const newParentId = over.id as string;
      const nodeId = active.id as string;
      // console.log({ activatorEvent });
      handleNodeDrop(newParentId, nodeId, activatorEvent);
    } else {
      console.log("Invalid drop zone for active draggable");
    }
  };

  return (
    <div style={{ height: "800px", width: "1200px", border: "1px solid" }}>
      <ReactFlowProvider>
        {/* <DndContext onDragEnd={handleDragEnd} onDragStart={handleDragStart}> */}
        <Flow variant={variant} ref={childRef} />
        {/* </DndContext> */}
      </ReactFlowProvider>
    </div>
  );
};

export default FlowDemo;

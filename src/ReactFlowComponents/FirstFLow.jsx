import React, { useState, useCallback, useEffect } from "react";
import ReactFlow, {
  applyEdgeChanges,
  applyNodeChanges,
  addEdge,
  useReactFlow
} from "reactflow";
import "reactflow/dist/style.css";
const initialNodes = [
  { id: "1", data: { label: <div>Node 1</div> }, position: { x: 0, y: 0 } },
  { id: "2", data: { label: <div>Node 2</div> }, position: { x: 100, y: 0 } },
  { id: "3", data: { label: <div>Node 3</div> }, position: { x: 0, y: 100 } },
  { id: "4", data: { label: <div>Node 4</div> }, position: { x: 200, y: 200 } },
  { id: "5", data: { label: <div>Node 5</div> }, position: { x: 300, y: 300 } },
];
const initialEdges = [{ id: "e1-2", source: "1", target: "2", type: "step" }];

export const Flow = () => {
    // const rea = useReactFlow()
  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);
  const onNodeChange = useCallback(
    (changes) => setNodes((node) => applyNodeChanges(changes, node)),
    []
  );
  const onEdgeChange = useCallback(
    (changes) => setEdges((edge) => applyEdgeChanges(changes, edge)),
    []
  );
//   useEffect(() => {
//     console.log(rea)
//   },[])
  const onConnect = useCallback(
    (par) =>
      setEdges((eds) => {
        console.log(eds, par);
        return addEdge(par, eds);
      }),
    []
  );
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodeChange}
        onEdgesChange={onEdgeChange}
        onConnect={onConnect}
      />
    </div>
  );
};

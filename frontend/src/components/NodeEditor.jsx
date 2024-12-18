// src/components/NodeEditor.jsx
import React, { useState, useEffect } from 'react';
import ReactFlow, { Background, Controls, addEdge, useNodesState, useEdgesState, useReactFlow } from 'reactflow';
import 'reactflow/dist/style.css';
import { useWorkflowStore } from '../state/workflowStore';
import { nanoid } from 'nanoid';
import nodeTypes from './NodeTypes';

function NodeEditor() {
  const workflow = useWorkflowStore((state) => state.workflow);
  const updateWorkflow = useWorkflowStore((state) => state.updateWorkflow);
  const setSelectedNode = useWorkflowStore((state) => state.setSelectedNode);
  const addNode = useWorkflowStore((state) => state.addNode);

  const [nodes, setNodes] = useNodesState(workflow.nodes || []);
  const [edges, setEdges] = useEdgesState(workflow.edges || []);

  const reactFlowInstance = useReactFlow();

  const [contextMenu, setContextMenu] = useState(null); 

  useEffect(() => {
    setNodes(workflow.nodes || []);
    setEdges(workflow.edges || []);
    console.log('Nodes:', nodes);
    console.log('Edges:', edges);
  }, [workflow, setNodes, setEdges]);

  const onConnect = (params) => {
    const updatedEdges = addEdge(params, edges);
    setEdges(updatedEdges);
    updateWorkflow(nodes, updatedEdges);
  };

  const onNodesUpdate = (ns) => {
    setNodes(ns);
    updateWorkflow(ns, edges);
  };

  const onEdgesUpdate = (es) => {
    setEdges(es);
    updateWorkflow(nodes, es);
  };

  const onNodeClick = (event, node) => {
    setSelectedNode(node);
  };

  const onContextMenuHandler = (event) => {
    event.preventDefault();
    const bounds = event.currentTarget.getBoundingClientRect();
    const clientX = event.clientX - bounds.left;
    const clientY = event.clientY - bounds.top;

    const position = reactFlowInstance.screenToFlowPosition({ x: clientX, y: clientY });

    setContextMenu({
      x: event.clientX,
      y: event.clientY,
      canvasX: position.x,
      canvasY: position.y
    });
  };

  const addAgentNode = () => {
    if (!contextMenu) return; 
  
    addNode({
      id: nanoid(),
      type: 'agent', 
      data: { label: 'LLM Agent', parameters: { model: 'gpt-4', prompt: 'Hello' } },
      position: { x: contextMenu.canvasX, y: contextMenu.canvasY } 
    });
    setContextMenu(null);
  };
  
  const addDecisionNode = () => {
    if (!contextMenu) return; // Prevent adding node if contextMenu is not set
  
    addNode({
      id: nanoid(),
      type: 'decision', 
      data: { label: 'Decision', parameters: { condition: 'condition' } },
      position: { x: contextMenu.canvasX, y: contextMenu.canvasY } 
    });
    setContextMenu(null);
  };
  
  const addFallbackNode = () => {
    if (!contextMenu) return; // Prevent adding node if contextMenu is not set
  
    addNode({
      id: nanoid(),
      type: 'fallback',
      data: { label: 'Fallback', parameters: { fallback_action: 'action' } },
      position: { x: contextMenu.canvasX, y: contextMenu.canvasY } 
    });
    setContextMenu(null);
  };

  const hideContextMenu = () => {
    setContextMenu(null);
  };

  return (
    <div style={{ width: '100%', height: '100%' }} onContextMenu={onContextMenuHandler} onClick={hideContextMenu}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesUpdate}
        onEdgesChange={onEdgesUpdate}
        onConnect={onConnect}
        onNodeClick={onNodeClick}
        fitView
        nodeTypes={nodeTypes} 
      >
        <Background />
        <Controls />
      </ReactFlow>

      {contextMenu && (
        <div 
          style={{
            position: 'absolute', 
            top: contextMenu.y, 
            left: contextMenu.x, 
            background: '#fff', 
            border: '1px solid #ccc',
            zIndex: 100,
            padding: '5px',
            boxShadow: '0px 2px 10px rgba(0,0,0,0.2)'
          }}
          onClick={(e) => e.stopPropagation()}
        >
          <div style={{ cursor: 'pointer', marginBottom: '5px' }} onClick={addAgentNode}>Add Agent Node</div>
          <div style={{ cursor: 'pointer', marginBottom: '5px' }} onClick={addDecisionNode}>Add Decision Node</div>
          <div style={{ cursor: 'pointer' }} onClick={addFallbackNode}>Add Fallback Node</div>
        </div>
      )}
    </div>
  );
}

export default NodeEditor;
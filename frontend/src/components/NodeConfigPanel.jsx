import React, { useState, useEffect } from 'react';
import { useWorkflowStore } from '../state/workflowStore';

function NodeConfigPanel() {
  const { selectedNode, updateNode } = useWorkflowStore();
  const [params, setParams] = useState({});

  useEffect(() => {
    if (selectedNode?.data?.parameters) {
      setParams(selectedNode.data.parameters);
    } else {
      setParams({});
    }
  }, [selectedNode]);

  const handleChange = (e) => {
    setParams((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const saveParams = () => {
    if (selectedNode) {
      updateNode(selectedNode.id, { data: { ...selectedNode.data, parameters: params } });
    }
  };

  if (!selectedNode) return <div>Select a node to configure.</div>;

  return (
    <div>
      <h4>Node: {selectedNode.data.label || selectedNode.type}</h4>
      {selectedNode.type === 'agent' && (
        <>
          <div><strong>Model Name:</strong></div>
          <input name="model" value={params.model || ''} onChange={handleChange} />
          <div><strong>Prompt Template:</strong></div>
          <textarea name="prompt" value={params.prompt || ''} onChange={handleChange} />
        </>
      )}

      {selectedNode.type === 'decision' && (
        <>
          <div><strong>Condition:</strong></div>
          <input name="condition" value={params.condition || ''} onChange={handleChange} />
        </>
      )}

      {selectedNode.type === 'fallback' && (
        <>
          <div><strong>Fallback Action:</strong></div>
          <input name="fallback_action" value={params.fallback_action || ''} onChange={handleChange} />
        </>
      )}
      <br/><br/>
      <button onClick={saveParams}>Save Parameters</button>
    </div>
  );
}

export default NodeConfigPanel;
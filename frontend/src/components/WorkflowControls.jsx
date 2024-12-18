import React from 'react';
import { useWorkflowStore } from '../state/workflowStore';

function WorkflowControls() {
  const { saveWorkflow } = useWorkflowStore();

  const runWorkflow = () => {
    // Mock run (no backend yet)
    alert("Run triggered (mocked).");
  };

  return (
    <div style={{ padding: '10px', borderBottom: '1px solid #ddd', background: '#fafafa', display: 'flex', gap: '10px' }}>
      <button onClick={saveWorkflow}>Save</button>
      <button onClick={runWorkflow}>Run</button>
    </div>
  );
}

export default WorkflowControls;
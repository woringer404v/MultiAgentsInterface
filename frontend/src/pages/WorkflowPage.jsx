// src/pages/WorkflowPage.jsx
import React, { useEffect } from 'react';
import { useWorkflowStore } from '../state/workflowStore';
import WorkflowControls from '../components/WorkflowControls';
import NodeEditor from '../components/NodeEditor';
import NodeConfigPanel from '../components/NodeConfigPanel';
import { ReactFlowProvider } from 'reactflow'; 

function WorkflowPage() {
  const { loadWorkflow } = useWorkflowStore();

  useEffect(() => {
    loadWorkflow(1); // Load a default workflow
  }, [loadWorkflow]);

  return (
    <div style={{ display: 'flex', height: '100vh', flexDirection: 'row', fontFamily: 'Arial, sans-serif' }}>
      <div style={{ flex: 1, position: 'relative', display: 'flex', flexDirection: 'column' }}>
        <WorkflowControls />
        <ReactFlowProvider> {}
          <div style={{ flex: 1 }}>
            <NodeEditor />
          </div>
        </ReactFlowProvider>
      </div>
      <div style={{ width: '20%', background: '#eeeeee', padding: '10px', borderLeft: '1px solid #ddd' }}>
        <NodeConfigPanel />
      </div>
    </div>
  );
}

export default WorkflowPage;
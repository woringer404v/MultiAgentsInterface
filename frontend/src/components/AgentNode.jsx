import React from 'react';

function AgentNode({ data }) {
  return (
    <div style={{ padding: 10, border: '2px solid #1e90ff', borderRadius: 5, background: '#e6f7ff' }}>
      <strong>{data.label}</strong>
      <p>Model: {data.parameters.model || 'Not set'}</p>
      <p>Prompt: {data.parameters.prompt || 'Not set'}</p>
    </div>
  );
}

export default AgentNode;
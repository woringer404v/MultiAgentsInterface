import React from 'react';

function DecisionNode({ data }) {
  return (
    <div style={{ padding: 10, border: '2px solid #ffa500', borderRadius: 5, background: '#fff5e6' }}>
      <strong>{data.label}</strong>
      <p>Condition: {data.parameters.condition || 'Not set'}</p>
    </div>
  );
}

export default DecisionNode;
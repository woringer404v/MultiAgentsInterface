import React from 'react';

function FallbackNode({ data }) {
  return (
    <div style={{ padding: 10, border: '2px solid #ff4500', borderRadius: 5, background: '#ffe6e6' }}>
      <strong>{data.label}</strong>
      <p>Action: {data.parameters.fallback_action || 'Not set'}</p>
    </div>
  );
}

export default FallbackNode;
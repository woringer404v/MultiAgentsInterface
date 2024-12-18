// src/components/NodeTypes.js
import AgentNode from './AgentNode';
import DecisionNode from './DecisionNode';
import FallbackNode from './FallbackNode';

const nodeTypes = {
  agent: AgentNode,
  decision: DecisionNode,
  fallback: FallbackNode,
};

export default nodeTypes;
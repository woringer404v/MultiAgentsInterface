import { create } from 'zustand';

export const useWorkflowStore = create((set, get) => ({
  workflow: { 
    id: 1, 
    nodes: [], 
    edges: [], 
    definition_json: { nodes: [], edges: [] } 
  },
  selectedNode: null,

  setSelectedNode: (node) => set({ selectedNode: node }),

  loadWorkflow: async (id) => {
    // Mock loading a workflow with a default node
    set({
      workflow: {
        id: id,
        name: "Mock Workflow",
        nodes: [
          
        ],
        edges: [],
        definition_json: { nodes: [], edges: [] }
      },
      selectedNode: null
    });
  },

  saveWorkflow: async () => {
    // Mock save
    alert('Workflow saved (mocked).');
  },

  updateWorkflow: (nodes, edges) => {
    const wf = get().workflow;
    set({ workflow: { ...wf, nodes, edges, definition_json: { nodes, edges } } });
  },

  addNode: (node) => {
    const wf = get().workflow;
    const newNodes = [...(wf.nodes || []), node];
    set({ workflow: { ...wf, nodes: newNodes, definition_json: { nodes: newNodes, edges: wf.edges || [] } } });
  },

  updateNode: (nodeId, updates) => {
    const wf = get().workflow;
    const newNodes = wf.nodes.map(n => n.id === nodeId ? { ...n, ...updates } : n);
    set({ workflow: { ...wf, nodes: newNodes, definition_json: { nodes: newNodes, edges: wf.edges } } });
  }
}));
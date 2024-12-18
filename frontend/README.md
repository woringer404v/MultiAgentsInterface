# React Workflow Editor

A dynamic and interactive Workflow Editor built with React, leveraging **React Flow** for visual node-based workflows and **Zustand** for state management. This application allows users to create, visualize, and manage workflows through an intuitive drag-and-drop interface.

## Features

- **Interactive Workflow Editing:** Add, connect, and manipulate nodes visually to design complex workflows.
- **Custom Node Types:** Define and use various node types like Agents, Decisions, and Fallbacks, each with distinct properties and appearances.
- **Real-time Configuration:** Select nodes to view and edit their properties through a dedicated configuration panel.
- **State Management:** Utilize Zustand for efficient and scalable state management across the application.
- **Error Handling:** Implement Error Boundaries to gracefully handle and display errors without crashing the app.
- **Responsive Design:** Organized layout with a main editing area and a sidebar for configurations, ensuring a user-friendly interface.

## Technologies Used

- **React:** Frontend library for building user interfaces.
- **React Flow:** Library for creating interactive node-based graphs and workflows.
- **Zustand:** Lightweight state management library for managing global application state.
- **React Router:** Library for handling client-side routing and navigation.
- **Vite:** Fast build tool for frontend projects.
- **nanoid:** Library for generating unique IDs.

## Project Architecture

### 1. **Entry Point (`main.jsx`)**
- **Purpose:** Initializes and renders the React application.
- **Key Components:**
  - **`React.StrictMode`**: Helps identify potential problems in the application.
  - **`ErrorBoundary`**: Catches JavaScript errors in child components and displays a fallback UI.
  - **`App` Component**: The root component managing routing.

### 2. **Root Component (`App.jsx`)**
- **Purpose:** Defines the routing structure of the application.
- **Key Components:**
  - **`BrowserRouter`**: Enables routing using the HTML5 history API.
  - **`Routes` and `Route`**: Define different application routes.
  - **`WorkflowPage`**: The primary page for workflow management.

### 3. **Pages (`WorkflowPage.jsx`)**
- **Purpose:** Serves as the main interface for workflow editing.
- **Key Components:**
  - **`WorkflowControls`**: UI controls for actions like saving workflows.
  - **`NodeEditor`**: Core component utilizing React Flow for node and edge management.
  - **`NodeConfigPanel`**: Sidebar for displaying and editing selected node properties.
  - **`ReactFlowProvider`**: Provides context for React Flow components within `NodeEditor`.

### 4. **Components**
- **`NodeEditor.jsx`**: Manages the interactive workflow canvas, including adding and connecting nodes.
- **`AgentNode.jsx`, `DecisionNode.jsx`, `FallbackNode.jsx`**: Define custom node types with specific data and styling.
- **`WorkflowControls.jsx`**: Contains controls for workflow operations like saving and loading.
- **`NodeConfigPanel.jsx`**: Displays and allows editing of the selected node's properties.
- **`ErrorBoundary.jsx`**: Catches and handles errors in the component tree.
- **`TestComponent.jsx`**: Placeholder component for testing purposes.

### 5. **State Management (`workflowStore.js`)**
- **Purpose:** Manages global state including workflows, nodes, edges, and the selected node.
- **Key Features:**
  - **Loading Workflows:** Initializes workflows with default nodes and edges.
  - **Updating Workflows:** Synchronizes changes to nodes and edges with the global state.
  - **Adding and Updating Nodes:** Facilitates the addition of new nodes and updates to existing ones.
  - **Saving Workflows:** Handles the persistence of workflows (currently mocked).

## Getting Started

### Prerequisites

- **Node.js** (v14 or later)
- **npm** (v6 or later) or **yarn**

### Installation

1. **Clone the Repository**

2. **CInstall Dependencies**

```bash
npm install   
```
3. **Start the Development Server**

```bash
npm run dev
```
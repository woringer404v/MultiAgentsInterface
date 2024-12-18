// Mocked API client: returns dummy data or does nothing, as we have no backend.
const apiClient = {
    get: async (url) => {
      return { data: {} };
    },
    post: async (url, data) => {
      return { data: { status: "mocked run" } };
    },
    put: async (url, data) => {
      return { data: { status: "updated (mocked)" } };
    }
  };
  
  export default apiClient;  
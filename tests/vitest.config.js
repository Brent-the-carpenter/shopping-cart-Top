// vitest.config.js
export default {
  test: {
    globals: true,
    environment: "jsdom",
    memoryLimit: 4096, // Increase the memory limit here if not done via NODE_OPTIONS
  },
};

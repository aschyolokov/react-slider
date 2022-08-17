/// <reference types="react-scripts" />

// TODO: Remove when support in @types/react-dom
declare module "react-dom/client" {
  const createRoot: any;
  export { createRoot };
}

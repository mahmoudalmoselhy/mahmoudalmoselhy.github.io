/// <reference types="vite/client" />

// Type declarations for vite-imagetools
declare module '*?optimize' {
  const src: string;
  export default src;
}

declare module '*?format=webp' {
  const src: string;
  export default src;
}

declare module '*.png?optimize' {
  const src: string;
  export default src;
}

declare module '*.jpg?optimize' {
  const src: string;
  export default src;
}

declare module '*.jpeg?optimize' {
  const src: string;
  export default src;
}

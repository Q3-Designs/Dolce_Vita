{
    "compilerOptions": {
      "target": "ES2020",
      "useDefineForClassFields": true,
      "lib": ["ES2020", "DOM", "DOM.Iterable"],
      "module": "ESNext",
      "skipLibCheck": true,
      "moduleResolution": "node", // Use Node.js-style module resolution
      "resolveJsonModule": true, // Enable importing JSON modules
      // Remove or comment out the isolatedModules option
      // "isolatedModules": true,
      "noEmit": true,
      "jsx": "react-jsx",
      "strict": true,
      "noUnusedLocals": true,
      "noUnusedParameters": true,
      "noFallthroughCasesInSwitch": true,
      "allowSyntheticDefaultImports": true
    },
    "include": ["src"],
    "references": [{ "path": "./tsconfig.node.json" }]
  }
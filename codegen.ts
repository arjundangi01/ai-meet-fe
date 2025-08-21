import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "http://localhost:8080/graphql", // Use BE live URL
  documents: ["src/api/*.ts"],
  generates: {
    "src/gql/": {
      preset: "client",
      plugins: [],
    },
    "src/gql/types.ts": {
      plugins: ["typescript"], // generates base schema types
    },
  },
  ignoreNoDocuments: true,
  overwrite: true,
};

export default config;

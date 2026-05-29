# Migration from dhive

Pollen is a modern successor to `dhive`. While it maintains a familiar API, there are several key changes you should be aware of when migrating.

## Breaking Changes

### 1. Pure ESM

Pollen is now a **Pure ESM** package. This means you must use `import` instead of `require`.

```typescript
// Legacy
const { Client } = require("dhive");

// Modern
import { Client } from "@srbde/pollen";
```

### 2. Native Error Hierarchy

We have replaced `verror` with a native TypeScript error hierarchy.

- `PollenError`: The base error class.
- `RPCError`: Errors returned by the Hive node.
- `SerializationError`: Errors occurring during byte-stream conversion.

### 3. Removal of legacy Polyfills

Pollen no longer includes large polyfills for `Buffer` or `crypto`. It uses native `Uint8Array` and the `@noble` suite. If you are using Pollen in a legacy browser environment, you may need to provide your own polyfills (see the [Comment Feed example](https://github.com/srbde/hive-pollen/tree/main/examples/comment-feed) for a Vite-based reference).

## New Features

- **BinaryWriter/Reader:** A high-performance, native byte-engine for blockchain serialization.
- **Exponential Backoff:** All RPC calls now include built-in resilience with jittered backoff.
- **Strict Typing:** All types are now strictly defined; the `any` keyword has been eliminated from the core.

# Getting Started

Welcome to **Pollen 🌸**, the high-performance, strictly-typed TypeScript SDK for the Hive blockchain.

## Installation

Install Pollen using your preferred package manager:

```bash
# Using pnpm (recommended)
pnpm add @srbde/pollen

# Using npm
npm install @srbde/pollen

# Using yarn
yarn add @srbde/pollen
```

## Quick Start

The following example demonstrates how to initialize a client and read the latest block from the blockchain.

```typescript
import { Client } from '@srbde/pollen'

const client = new Client(['https://api.hive.blog'])

// Get the latest global properties
const props = await client.database.getDynamicGlobalProperties()
console.log(`Current block: ${props.head_block_number}`)
```

## Why Pollen?

Pollen was born out of the need for a modern, secure, and zero-dependency SDK. It is a complete modernization of the legacy `dhive` library, rewritten for the Pure ESM era.

- **Zero Dependencies:** No more `verror`, `bytebuffer`, or legacy polyfill bloat.
- **Native Engine:** Powered by native `Uint8Array` and `noble` cryptography.
- **Strictly Typed:** Built from the ground up with `strict: true` for maximum reliability.
- **Network Resilient:** Built-in exponential backoff and jitter for stable RPC interactions.

# 🌸 Pollen

**The modern, secure, and audited TypeScript SDK for the Hive blockchain. Built for 2025 and beyond.**

`dhive` built the foundation of JavaScript development on Hive — but it carried a decade of legacy: unmaintained cryptography, thousands of transient vulnerabilities, and a build system stuck in the past. **Pollen** is its spiritual successor, rebuilt for security, performance, and the environments developers actually build for today.

If you are building for the web or Node.js on Hive, Pollen is your foundation.

---

**Secured and Audited:** Pollen is built on the **@noble** cryptographic suite, resolving over 400 vulnerabilities found in legacy Hive libraries, including critical private key extraction risks.

---

## Why Pollen?

The Hive ecosystem deserves infrastructure that is safe by default.

### 🔒 Audited Cryptography

Pollen strips out `secp256k1` (v3), `elliptic`, and `ecurve` entirely — unmaintained libraries that represent real supply-chain risk. In their place:

- **[@noble/curves](https://github.com/paulmillr/noble-curves)**: The gold standard for JS cryptography. Audited, zero-dependency, and incredibly fast implementation of `secp256k1`.
- **[@noble/hashes](https://github.com/paulmillr/noble-hashes)**: Modern, audited implementations of SHA256, RIPEMD160, and SHA512.

No legacy "ghost" dependencies. No known vulnerable paths. Just modern, auditable math.

### ⚡ Blazing Fast Builds

We replaced the legacy Browserify/Babelify pipeline with **[esbuild](https://esbuild.github.io/)**.
- **Browser Bundle:** Generates a minified, secure `pollen.js` in ~200ms.
- **Tree-Shaking Ready:** Designed to work perfectly with Vite, Next.js, and modern bundlers.

### 🔌 Ecosystem Alignment

Pollen is the JavaScript counterpart to **[Nectar](https://github.com/srbde/hive-nectar)** (Python). Together, they form a unified, secure foundation for building cross-platform Hive applications under the SRBDE umbrella.

---

## 🚀 Quick Start

Requires Node.js >= 18.

```bash
npm install @srbde/pollen
```

### Read account data (TypeScript)

```typescript
import { Client } from "@srbde/pollen";

const client = new Client(["https://api.hive.blog", "https://api.openhive.network"]);

async function main() {
    const account = await client.database.getAccounts(["thecrazygm"]);
    console.log(`HIVE Balance: ${account[0].balance}`);
}

main();
```

### Sign and broadcast (Node.js)

```javascript
const { Client, PrivateKey } = require("@srbde/pollen");

const client = new Client(["https://api.hive.blog"]);
const key = PrivateKey.fromLogin("username", "password", "posting");

client.broadcast.vote({
    voter: "username",
    author: "thecrazygm",
    permlink: "pollen-is-live",
    weight: 10000
}, key).then(console.log);
```

---

## 🏗️ Building from Source

Pollen uses a modernized toolchain for development.

```bash
# Install dependencies
pnpm install

# Build Node and Browser targets
pnpm run build

# Run secure test suite
pnpm run test
```

---

## 📜 Standing on Shoulders

Pollen is a modernized fork of [dhive](https://github.com/openhive-network/dhive), originally built by Johan Nordberg. His years of work provided the architecture that Pollen has secured and carried into the modern era.

---

## 🌐 Built by SRBDE

Pollen is developed and maintained by the **Sustainable Resource and Business Development Enterprise (SRBDE)** — an open-source infrastructure organization building tools and platforms for communities that build things together.

We apply the logic of agricultural sustainability to software: the goal is always to return more to the ecosystem than we extract.

### Explore the Ecosystem

| Project                                  | Language | Description                |
| ---------------------------------------- | -------- | -------------------------- |
| [Nectar](https://github.com/srbde/hive-nectar) | Python   | The modern Hive Python SDK |
| [ecoinstats.net](https://ecoinstats.net) | Web      | SRBDE corporate hub        |

---

## 🤝 Contributing

Audits, forks, and pull requests are welcome. Pollen is built to last for the decade, not the quarter. If you find a security issue, please open a private advisory.

_Share and Enjoy!_

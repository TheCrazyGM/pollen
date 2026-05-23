# Security & noble

Security is the core pillar of Project Pollen. We have transitioned away from unmaintained cryptographic libraries to the **noble** suite, which is widely audited and trusted.

## noble Cryptography

Pollen uses the following noble libraries for its cryptographic operations:

- **@noble/curves:** Used for secp256k1 operations (signing, public key extraction).
- **@noble/hashes:** Used for SHA-256 and RIPEMD-160 hashing.
- **@scure/base:** Used for Base58 (legacy Hive keys) and other encoding operations.

## Why this matters

The legacy `secp256k1@3.8.0` library previously used by `dhive` had a critical vulnerability (**GHSA-584q-6j8j-r5pm**) where malicious private keys could potentially lead to extraction. By migrating to `noble`, we have eliminated this entire class of vulnerabilities.

## Secure EcmaScript (SES)

Pollen is designed to be compatible with **SES (Secure EcmaScript)** environments, such as those used by MetaMask or Agoric. Our zero-dependency approach and use of modern JavaScript primitives (like `Uint8Array`) make it the most secure choice for modern dApp development.

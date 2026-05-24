[**@srbde/pollen**](../index.md)

---

[@srbde/pollen](../index.md) / RCPool

# Interface: RCPool

Defined in: [src/chain/rc.ts:67](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/rc.ts#L67)

Current available RC pool levels by resource class.

## Example

```ts
const pool = await client.rc.getResourcePool();
console.log(pool.resource_state_bytes.pool);
```

## Properties

### resource_execution_time

> **resource_execution_time**: [`Pool`](Pool.md)

Defined in: [src/chain/rc.ts:72](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/rc.ts#L72)

---

### resource_history_bytes

> **resource_history_bytes**: [`Pool`](Pool.md)

Defined in: [src/chain/rc.ts:68](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/rc.ts#L68)

---

### resource_market_bytes

> **resource_market_bytes**: [`Pool`](Pool.md)

Defined in: [src/chain/rc.ts:70](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/rc.ts#L70)

---

### resource_new_accounts

> **resource_new_accounts**: [`Pool`](Pool.md)

Defined in: [src/chain/rc.ts:69](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/rc.ts#L69)

---

### resource_state_bytes

> **resource_state_bytes**: [`Pool`](Pool.md)

Defined in: [src/chain/rc.ts:71](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/rc.ts#L71)

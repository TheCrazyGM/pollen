[**@srbde/pollen**](../index.md)

---

[@srbde/pollen](../index.md) / RCParams

# Interface: RCParams

Defined in: [src/chain/rc.ts:18](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/rc.ts#L18)

Global RC pricing parameters for every Hive resource class.

## Remarks

RC pricing separates history bytes, account creation, market bytes, state
bytes, and execution time. Each resource has dynamics parameters and a price
curve used by the chain to compute RC costs.

## Example

```ts
const params = await client.rc.getResourceParams();
console.log(params.resource_execution_time.price_curve_params);
```

## Properties

### resource_execution_time

> **resource_execution_time**: [`Resource`](Resource.md)

Defined in: [src/chain/rc.ts:23](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/rc.ts#L23)

---

### resource_history_bytes

> **resource_history_bytes**: [`Resource`](Resource.md)

Defined in: [src/chain/rc.ts:19](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/rc.ts#L19)

---

### resource_market_bytes

> **resource_market_bytes**: [`Resource`](Resource.md)

Defined in: [src/chain/rc.ts:21](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/rc.ts#L21)

---

### resource_new_accounts

> **resource_new_accounts**: [`Resource`](Resource.md)

Defined in: [src/chain/rc.ts:20](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/rc.ts#L20)

---

### resource_state_bytes

> **resource_state_bytes**: [`Resource`](Resource.md)

Defined in: [src/chain/rc.ts:22](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/rc.ts#L22)

[**@srbde/pollen**](../index.md)

---

[@srbde/pollen](../index.md) / DynamicParam

# Interface: DynamicParam

Defined in: [src/chain/rc.ts:39](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/rc.ts#L39)

Dynamic RC pool tuning values for one resource class.

## Remarks

These fields describe how the resource pool regenerates, decays, and caps
over time.

## Properties

### budget_per_time_unit

> **budget_per_time_unit**: `number`

Defined in: [src/chain/rc.ts:41](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/rc.ts#L41)

---

### decay_params

> **decay_params**: `object`

Defined in: [src/chain/rc.ts:44](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/rc.ts#L44)

#### decay_per_time_unit

> **decay_per_time_unit**: `string`

#### decay_per_time_unit_denom_shift

> **decay_per_time_unit_denom_shift**: `number`

---

### max_pool_size

> **max_pool_size**: `string`

Defined in: [src/chain/rc.ts:43](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/rc.ts#L43)

---

### min_decay

> **min_decay**: `number`

Defined in: [src/chain/rc.ts:48](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/rc.ts#L48)

---

### pool_eq

> **pool_eq**: `string`

Defined in: [src/chain/rc.ts:42](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/rc.ts#L42)

---

### resource_unit

> **resource_unit**: `number`

Defined in: [src/chain/rc.ts:40](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/rc.ts#L40)

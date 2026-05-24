[**@srbde/pollen**](../index.md)

---

[@srbde/pollen](../index.md) / DynamicGlobalProperties

# Interface: DynamicGlobalProperties

Defined in: [src/chain/misc.ts:193](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/misc.ts#L193)

Dynamic global chain state reported by a Hive RPC node.

## Remarks

These values drive transaction TAPOS fields, stream cursors, supply displays,
voting-power calculations, witness participation dashboards, and bandwidth
estimates.

## Example

```ts
const props = await client.database.getDynamicGlobalProperties();
console.log(props.head_block_number, props.last_irreversible_block_num);
```

## Properties

### average_block_size

> **average_block_size**: `number`

Defined in: [src/chain/misc.ts:251](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/misc.ts#L251)

Average block size is updated every block to be:

    average_block_size = (99 * average_block_size + new_block_size) / 100

This property is used to update the current_reserve_ratio to maintain
approximately 50% or less utilization of network capacity.

---

### confidential_hbd_supply

> **confidential_hbd_supply**: `string` \| [`Asset`](../classes/Asset.md)

Defined in: [src/chain/misc.ts:228](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/misc.ts#L228)

Total asset held in confidential balances.

---

### confidential_supply

> **confidential_supply**: `string` \| [`Asset`](../classes/Asset.md)

Defined in: [src/chain/misc.ts:223](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/misc.ts#L223)

Total asset held in confidential balances.

---

### current_aslot

> **current_aslot**: `number`

Defined in: [src/chain/misc.ts:267](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/misc.ts#L267)

The current absolute slot number. Equal to the total
number of slots since genesis. Also equal to the total
number of missed slots plus head_block_number.

---

### current_hbd_supply

> **current_hbd_supply**: `string` \| [`Asset`](../classes/Asset.md)

Defined in: [src/chain/misc.ts:224](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/misc.ts#L224)

---

### current_reserve_ratio

> **current_reserve_ratio**: `number`

Defined in: [src/chain/misc.ts:290](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/misc.ts#L290)

Any time average_block_size <= 50% maximum_block_size this value grows by 1 until it
reaches MAX_RESERVE_RATIO. Any time average_block_size is greater than
50% it falls by 1%. Upward adjustments happen once per round, downward adjustments
happen every block.

---

### current_supply

> **current_supply**: `string` \| [`Asset`](../classes/Asset.md)

Defined in: [src/chain/misc.ts:219](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/misc.ts#L219)

---

### current_witness

> **current_witness**: `string`

Defined in: [src/chain/misc.ts:207](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/misc.ts#L207)

Currently elected witness.

---

### hbd_interest_rate

> **hbd_interest_rate**: `number`

Defined in: [src/chain/misc.ts:241](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/misc.ts#L241)

This property defines the interest rate that HBD deposits receive.

---

### hbd_print_rate

> **hbd_print_rate**: `number`

Defined in: [src/chain/misc.ts:242](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/misc.ts#L242)

---

### head_block_id

> **head_block_id**: `string`

Defined in: [src/chain/misc.ts:199](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/misc.ts#L199)

---

### head_block_number

> **head_block_number**: `number`

Defined in: [src/chain/misc.ts:198](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/misc.ts#L198)

Current block height.

---

### id

> **id**: `number`

Defined in: [src/chain/misc.ts:194](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/misc.ts#L194)

---

### last_irreversible_block_num

> **last_irreversible_block_num**: `number`

Defined in: [src/chain/misc.ts:273](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/misc.ts#L273)

---

### max_virtual_bandwidth

> **max_virtual_bandwidth**: `string`

Defined in: [src/chain/misc.ts:283](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/misc.ts#L283)

The maximum bandwidth the blockchain can support is:

max_bandwidth = maximum_block_size \* BANDWIDTH_AVERAGE_WINDOW_SECONDS / BLOCK_INTERVAL

The maximum virtual bandwidth is:

max_bandwidth \* current_reserve_ratio

---

### maximum_block_size

> **maximum_block_size**: `number`

Defined in: [src/chain/misc.ts:261](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/misc.ts#L261)

Maximum block size is decided by the set of active witnesses which change every round.
Each witness posts what they think the maximum size should be as part of their witness
properties, the median size is chosen to be the maximum block size for the round.

#### Remarks

The minimum value for maximum_block_size is defined by the protocol to prevent the
network from getting stuck by witnesses attempting to set this too low.

---

### num_pow_witnesses

> **num_pow_witnesses**: `number`

Defined in: [src/chain/misc.ts:217](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/misc.ts#L217)

The current count of how many pending POW witnesses there are, determines
the difficulty of doing pow.

---

### participation_count

> **participation_count**: `number`

Defined in: [src/chain/misc.ts:272](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/misc.ts#L272)

---

### pending_rewarded_vesting_hive

> **pending_rewarded_vesting_hive**: `string` \| [`Asset`](../classes/Asset.md)

Defined in: [src/chain/misc.ts:237](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/misc.ts#L237)

---

### pending_rewarded_vesting_shares

> **pending_rewarded_vesting_shares**: `string` \| [`Asset`](../classes/Asset.md)

Defined in: [src/chain/misc.ts:236](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/misc.ts#L236)

---

### recent_slots_filled

> **recent_slots_filled**: `string`

Defined in: [src/chain/misc.ts:271](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/misc.ts#L271)

Used to compute witness participation.

---

### time

> **time**: `string`

Defined in: [src/chain/misc.ts:203](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/misc.ts#L203)

UTC Server time, e.g. 2020-01-15T00:42:00

---

### total_pow

> **total_pow**: `number`

Defined in: [src/chain/misc.ts:212](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/misc.ts#L212)

The total POW accumulated, aka the sum of num_pow_witness at the time
new POW is added.

---

### total_reward_fund_hive

> **total_reward_fund_hive**: `string` \| [`Asset`](../classes/Asset.md)

Defined in: [src/chain/misc.ts:231](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/misc.ts#L231)

---

### total_reward_shares2

> **total_reward_shares2**: `string`

Defined in: [src/chain/misc.ts:235](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/misc.ts#L235)

The running total of REWARD^2.

---

### total_vesting_fund_hive

> **total_vesting_fund_hive**: `string` \| [`Asset`](../classes/Asset.md)

Defined in: [src/chain/misc.ts:229](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/misc.ts#L229)

---

### total_vesting_shares

> **total_vesting_shares**: `string` \| [`Asset`](../classes/Asset.md)

Defined in: [src/chain/misc.ts:230](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/misc.ts#L230)

---

### virtual_supply

> **virtual_supply**: `string` \| [`Asset`](../classes/Asset.md)

Defined in: [src/chain/misc.ts:218](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/misc.ts#L218)

---

### vote_power_reserve_rate

> **vote_power_reserve_rate**: `number`

Defined in: [src/chain/misc.ts:296](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/misc.ts#L296)

The number of votes regenerated per day. Any user voting slower than this rate will be
"wasting" voting power through spillover; any user voting faster than this rate will have
their votes reduced.

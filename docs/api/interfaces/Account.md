[**@srbde/pollen**](../index.md)

---

[@srbde/pollen](../index.md) / Account

# Interface: Account

Defined in: [src/chain/account.ts:132](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/account.ts#L132)

Core Hive account object returned by condenser account lookups.

## Remarks

This shape includes authority keys, balances, savings balances, vesting
state, voting state, recovery metadata, and historical counters. Use
[ExtendedAccount](ExtendedAccount.md) when condenser returns augmented social/history
fields.

## Example

```ts
const [account] = await client.database.getAccounts(["srbde"]);
console.log(account.balance, account.vesting_shares);
```

## Extended by

- [`ExtendedAccount`](ExtendedAccount.md)

## Properties

### active

> **active**: [`Authority`](../classes/Authority.md)

Defined in: [src/chain/account.ts:136](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/account.ts#L136)

---

### active_challenged

> **active_challenged**: `boolean`

Defined in: [src/chain/account.ts:147](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/account.ts#L147)

---

### average_bandwidth

> **average_bandwidth**: `string` \| `number`

Defined in: [src/chain/account.ts:190](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/account.ts#L190)

---

### average_market_bandwidth

> **average_market_bandwidth**: `string` \| `number`

Defined in: [src/chain/account.ts:193](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/account.ts#L193)

---

### balance

> **balance**: `string` \| [`Asset`](../classes/Asset.md)

Defined in: [src/chain/account.ts:163](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/account.ts#L163)

---

### can_vote

> **can_vote**: `boolean`

Defined in: [src/chain/account.ts:156](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/account.ts#L156)

---

### comment_count

> **comment_count**: `number`

Defined in: [src/chain/account.ts:153](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/account.ts#L153)

---

### created

> **created**: `string`

Defined in: [src/chain/account.ts:144](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/account.ts#L144)

---

### curation_rewards

> **curation_rewards**: `string` \| `number`

Defined in: [src/chain/account.ts:178](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/account.ts#L178)

---

### delegated_vesting_shares

> **delegated_vesting_shares**: `string` \| [`Asset`](../classes/Asset.md)

Defined in: [src/chain/account.ts:181](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/account.ts#L181)

---

### hbd_balance

> **hbd_balance**: `string` \| [`Asset`](../classes/Asset.md)

Defined in: [src/chain/account.ts:165](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/account.ts#L165)

---

### hbd_last_interest_payment

> **hbd_last_interest_payment**: `string`

Defined in: [src/chain/account.ts:168](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/account.ts#L168)

---

### hbd_seconds

> **hbd_seconds**: `string`

Defined in: [src/chain/account.ts:166](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/account.ts#L166)

---

### hbd_seconds_last_update

> **hbd_seconds_last_update**: `string`

Defined in: [src/chain/account.ts:167](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/account.ts#L167)

---

### id

> **id**: `number`

Defined in: [src/chain/account.ts:133](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/account.ts#L133)

---

### json_metadata

> **json_metadata**: `string`

Defined in: [src/chain/account.ts:139](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/account.ts#L139)

---

### last_account_recovery

> **last_account_recovery**: `string`

Defined in: [src/chain/account.ts:152](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/account.ts#L152)

---

### last_account_update

> **last_account_update**: `string`

Defined in: [src/chain/account.ts:143](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/account.ts#L143)

---

### last_active_proved

> **last_active_proved**: `string`

Defined in: [src/chain/account.ts:149](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/account.ts#L149)

---

### last_bandwidth_update

> **last_bandwidth_update**: `string`

Defined in: [src/chain/account.ts:192](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/account.ts#L192)

---

### last_market_bandwidth_update

> **last_market_bandwidth_update**: `string`

Defined in: [src/chain/account.ts:195](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/account.ts#L195)

---

### last_owner_proved

> **last_owner_proved**: `string`

Defined in: [src/chain/account.ts:148](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/account.ts#L148)

---

### last_owner_update

> **last_owner_update**: `string`

Defined in: [src/chain/account.ts:142](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/account.ts#L142)

---

### last_post

> **last_post**: `string`

Defined in: [src/chain/account.ts:196](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/account.ts#L196)

---

### last_root_post

> **last_root_post**: `string`

Defined in: [src/chain/account.ts:197](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/account.ts#L197)

---

### last_vote_time

> **last_vote_time**: `string`

Defined in: [src/chain/account.ts:158](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/account.ts#L158)

---

### lifetime_bandwidth

> **lifetime_bandwidth**: `string` \| `number`

Defined in: [src/chain/account.ts:191](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/account.ts#L191)

---

### lifetime_market_bandwidth

> **lifetime_market_bandwidth**: `string` \| `number`

Defined in: [src/chain/account.ts:194](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/account.ts#L194)

---

### lifetime_vote_count

> **lifetime_vote_count**: `number`

Defined in: [src/chain/account.ts:154](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/account.ts#L154)

---

### memo_key

> **memo_key**: `string`

Defined in: [src/chain/account.ts:138](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/account.ts#L138)

---

### mined

> **mined**: `boolean`

Defined in: [src/chain/account.ts:145](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/account.ts#L145)

---

### name

> **name**: `string`

Defined in: [src/chain/account.ts:134](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/account.ts#L134)

---

### next_vesting_withdrawal

> **next_vesting_withdrawal**: `string`

Defined in: [src/chain/account.ts:184](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/account.ts#L184)

---

### owner

> **owner**: [`Authority`](../classes/Authority.md)

Defined in: [src/chain/account.ts:135](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/account.ts#L135)

---

### owner_challenged

> **owner_challenged**: `boolean`

Defined in: [src/chain/account.ts:146](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/account.ts#L146)

---

### post_count

> **post_count**: `number`

Defined in: [src/chain/account.ts:155](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/account.ts#L155)

---

### posting

> **posting**: [`Authority`](../classes/Authority.md)

Defined in: [src/chain/account.ts:137](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/account.ts#L137)

---

### posting_json_metadata

> **posting_json_metadata**: `string`

Defined in: [src/chain/account.ts:140](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/account.ts#L140)

---

### posting_rewards

> **posting_rewards**: `string` \| `number`

Defined in: [src/chain/account.ts:179](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/account.ts#L179)

---

### proxied_vsf_votes

> **proxied_vsf_votes**: `number`[]

Defined in: [src/chain/account.ts:188](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/account.ts#L188)

---

### proxy

> **proxy**: `string`

Defined in: [src/chain/account.ts:141](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/account.ts#L141)

---

### received_vesting_shares

> **received_vesting_shares**: `string` \| [`Asset`](../classes/Asset.md)

Defined in: [src/chain/account.ts:182](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/account.ts#L182)

---

### recovery_account

> **recovery_account**: `string`

Defined in: [src/chain/account.ts:150](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/account.ts#L150)

---

### reset_account

> **reset_account**: `string`

Defined in: [src/chain/account.ts:151](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/account.ts#L151)

---

### reward_hbd_balance

> **reward_hbd_balance**: `string` \| [`Asset`](../classes/Asset.md)

Defined in: [src/chain/account.ts:174](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/account.ts#L174)

---

### reward_hive_balance

> **reward_hive_balance**: `string` \| [`Asset`](../classes/Asset.md)

Defined in: [src/chain/account.ts:175](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/account.ts#L175)

---

### reward_vesting_balance

> **reward_vesting_balance**: `string` \| [`Asset`](../classes/Asset.md)

Defined in: [src/chain/account.ts:176](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/account.ts#L176)

---

### reward_vesting_hive

> **reward_vesting_hive**: `string` \| [`Asset`](../classes/Asset.md)

Defined in: [src/chain/account.ts:177](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/account.ts#L177)

---

### savings_balance

> **savings_balance**: `string` \| [`Asset`](../classes/Asset.md)

Defined in: [src/chain/account.ts:164](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/account.ts#L164)

---

### savings_hbd_balance

> **savings_hbd_balance**: `string` \| [`Asset`](../classes/Asset.md)

Defined in: [src/chain/account.ts:169](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/account.ts#L169)

---

### savings_hbd_last_interest_payment

> **savings_hbd_last_interest_payment**: `string`

Defined in: [src/chain/account.ts:172](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/account.ts#L172)

---

### savings_hbd_seconds

> **savings_hbd_seconds**: `string`

Defined in: [src/chain/account.ts:170](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/account.ts#L170)

---

### savings_hbd_seconds_last_update

> **savings_hbd_seconds_last_update**: `string`

Defined in: [src/chain/account.ts:171](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/account.ts#L171)

---

### savings_withdraw_requests

> **savings_withdraw_requests**: `number`

Defined in: [src/chain/account.ts:173](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/account.ts#L173)

---

### to_withdraw

> **to_withdraw**: `string` \| `number`

Defined in: [src/chain/account.ts:186](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/account.ts#L186)

---

### vesting_shares

> **vesting_shares**: `string` \| [`Asset`](../classes/Asset.md)

Defined in: [src/chain/account.ts:180](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/account.ts#L180)

---

### vesting_withdraw_rate

> **vesting_withdraw_rate**: `string` \| [`Asset`](../classes/Asset.md)

Defined in: [src/chain/account.ts:183](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/account.ts#L183)

---

### voting_manabar

> **voting_manabar**: `object`

Defined in: [src/chain/account.ts:159](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/account.ts#L159)

#### current_mana

> **current_mana**: `string` \| `number`

#### last_update_time

> **last_update_time**: `number`

---

### voting_power

> **voting_power**: `number`

Defined in: [src/chain/account.ts:157](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/account.ts#L157)

---

### withdraw_routes

> **withdraw_routes**: `number`

Defined in: [src/chain/account.ts:187](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/account.ts#L187)

---

### withdrawn

> **withdrawn**: `string` \| `number`

Defined in: [src/chain/account.ts:185](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/account.ts#L185)

---

### witnesses_voted_for

> **witnesses_voted_for**: `number`

Defined in: [src/chain/account.ts:189](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/account.ts#L189)

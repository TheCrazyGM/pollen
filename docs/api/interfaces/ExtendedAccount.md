[**@srbde/pollen**](../index.md)

---

[@srbde/pollen](../index.md) / ExtendedAccount

# Interface: ExtendedAccount

Defined in: [src/chain/account.ts:213](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/account.ts#L213)

Augmented account object returned by condenser `get_accounts`.

## Remarks

Extended accounts add reputation, converted vesting balance, witness votes,
and several legacy history collections used by social applications.

## Example

```ts
const [account] = await client.database.getAccounts(["srbde"]);
console.log(account.reputation, account.witness_votes);
```

## Extends

- [`Account`](Account.md)

## Properties

### active

> **active**: [`Authority`](../classes/Authority.md)

Defined in: [src/chain/account.ts:136](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/account.ts#L136)

#### Inherited from

[`Account`](Account.md).[`active`](Account.md#active)

---

### active_challenged

> **active_challenged**: `boolean`

Defined in: [src/chain/account.ts:147](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/account.ts#L147)

#### Inherited from

[`Account`](Account.md).[`active_challenged`](Account.md#active_challenged)

---

### average_bandwidth

> **average_bandwidth**: `string` \| `number`

Defined in: [src/chain/account.ts:190](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/account.ts#L190)

#### Inherited from

[`Account`](Account.md).[`average_bandwidth`](Account.md#average_bandwidth)

---

### average_market_bandwidth

> **average_market_bandwidth**: `string` \| `number`

Defined in: [src/chain/account.ts:193](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/account.ts#L193)

#### Inherited from

[`Account`](Account.md).[`average_market_bandwidth`](Account.md#average_market_bandwidth)

---

### balance

> **balance**: `string` \| [`Asset`](../classes/Asset.md)

Defined in: [src/chain/account.ts:163](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/account.ts#L163)

#### Inherited from

[`Account`](Account.md).[`balance`](Account.md#balance)

---

### blog?

> `optional` **blog?**: `any`[]

Defined in: [src/chain/account.ts:235](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/account.ts#L235)

---

### can_vote

> **can_vote**: `boolean`

Defined in: [src/chain/account.ts:156](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/account.ts#L156)

#### Inherited from

[`Account`](Account.md).[`can_vote`](Account.md#can_vote)

---

### comment_count

> **comment_count**: `number`

Defined in: [src/chain/account.ts:153](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/account.ts#L153)

#### Inherited from

[`Account`](Account.md).[`comment_count`](Account.md#comment_count)

---

### comments?

> `optional` **comments?**: `any`[]

Defined in: [src/chain/account.ts:234](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/account.ts#L234)

---

### created

> **created**: `string`

Defined in: [src/chain/account.ts:144](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/account.ts#L144)

#### Inherited from

[`Account`](Account.md).[`created`](Account.md#created)

---

### curation_rewards

> **curation_rewards**: `string` \| `number`

Defined in: [src/chain/account.ts:178](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/account.ts#L178)

#### Inherited from

[`Account`](Account.md).[`curation_rewards`](Account.md#curation_rewards)

---

### delegated_vesting_shares

> **delegated_vesting_shares**: `string` \| [`Asset`](../classes/Asset.md)

Defined in: [src/chain/account.ts:181](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/account.ts#L181)

#### Inherited from

[`Account`](Account.md).[`delegated_vesting_shares`](Account.md#delegated_vesting_shares)

---

### feed?

> `optional` **feed?**: `any`[]

Defined in: [src/chain/account.ts:236](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/account.ts#L236)

---

### guest_bloggers

> **guest_bloggers**: `string`[]

Defined in: [src/chain/account.ts:232](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/account.ts#L232)

---

### hbd_balance

> **hbd_balance**: `string` \| [`Asset`](../classes/Asset.md)

Defined in: [src/chain/account.ts:165](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/account.ts#L165)

#### Inherited from

[`Account`](Account.md).[`hbd_balance`](Account.md#hbd_balance)

---

### hbd_last_interest_payment

> **hbd_last_interest_payment**: `string`

Defined in: [src/chain/account.ts:168](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/account.ts#L168)

#### Inherited from

[`Account`](Account.md).[`hbd_last_interest_payment`](Account.md#hbd_last_interest_payment)

---

### hbd_seconds

> **hbd_seconds**: `string`

Defined in: [src/chain/account.ts:166](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/account.ts#L166)

#### Inherited from

[`Account`](Account.md).[`hbd_seconds`](Account.md#hbd_seconds)

---

### hbd_seconds_last_update

> **hbd_seconds_last_update**: `string`

Defined in: [src/chain/account.ts:167](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/account.ts#L167)

#### Inherited from

[`Account`](Account.md).[`hbd_seconds_last_update`](Account.md#hbd_seconds_last_update)

---

### id

> **id**: `number`

Defined in: [src/chain/account.ts:133](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/account.ts#L133)

#### Inherited from

[`Account`](Account.md).[`id`](Account.md#id)

---

### json_metadata

> **json_metadata**: `string`

Defined in: [src/chain/account.ts:139](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/account.ts#L139)

#### Inherited from

[`Account`](Account.md).[`json_metadata`](Account.md#json_metadata)

---

### last_account_recovery

> **last_account_recovery**: `string`

Defined in: [src/chain/account.ts:152](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/account.ts#L152)

#### Inherited from

[`Account`](Account.md).[`last_account_recovery`](Account.md#last_account_recovery)

---

### last_account_update

> **last_account_update**: `string`

Defined in: [src/chain/account.ts:143](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/account.ts#L143)

#### Inherited from

[`Account`](Account.md).[`last_account_update`](Account.md#last_account_update)

---

### last_active_proved

> **last_active_proved**: `string`

Defined in: [src/chain/account.ts:149](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/account.ts#L149)

#### Inherited from

[`Account`](Account.md).[`last_active_proved`](Account.md#last_active_proved)

---

### last_bandwidth_update

> **last_bandwidth_update**: `string`

Defined in: [src/chain/account.ts:192](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/account.ts#L192)

#### Inherited from

[`Account`](Account.md).[`last_bandwidth_update`](Account.md#last_bandwidth_update)

---

### last_market_bandwidth_update

> **last_market_bandwidth_update**: `string`

Defined in: [src/chain/account.ts:195](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/account.ts#L195)

#### Inherited from

[`Account`](Account.md).[`last_market_bandwidth_update`](Account.md#last_market_bandwidth_update)

---

### last_owner_proved

> **last_owner_proved**: `string`

Defined in: [src/chain/account.ts:148](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/account.ts#L148)

#### Inherited from

[`Account`](Account.md).[`last_owner_proved`](Account.md#last_owner_proved)

---

### last_owner_update

> **last_owner_update**: `string`

Defined in: [src/chain/account.ts:142](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/account.ts#L142)

#### Inherited from

[`Account`](Account.md).[`last_owner_update`](Account.md#last_owner_update)

---

### last_post

> **last_post**: `string`

Defined in: [src/chain/account.ts:196](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/account.ts#L196)

#### Inherited from

[`Account`](Account.md).[`last_post`](Account.md#last_post)

---

### last_root_post

> **last_root_post**: `string`

Defined in: [src/chain/account.ts:197](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/account.ts#L197)

#### Inherited from

[`Account`](Account.md).[`last_root_post`](Account.md#last_root_post)

---

### last_vote_time

> **last_vote_time**: `string`

Defined in: [src/chain/account.ts:158](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/account.ts#L158)

#### Inherited from

[`Account`](Account.md).[`last_vote_time`](Account.md#last_vote_time)

---

### lifetime_bandwidth

> **lifetime_bandwidth**: `string` \| `number`

Defined in: [src/chain/account.ts:191](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/account.ts#L191)

#### Inherited from

[`Account`](Account.md).[`lifetime_bandwidth`](Account.md#lifetime_bandwidth)

---

### lifetime_market_bandwidth

> **lifetime_market_bandwidth**: `string` \| `number`

Defined in: [src/chain/account.ts:194](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/account.ts#L194)

#### Inherited from

[`Account`](Account.md).[`lifetime_market_bandwidth`](Account.md#lifetime_market_bandwidth)

---

### lifetime_vote_count

> **lifetime_vote_count**: `number`

Defined in: [src/chain/account.ts:154](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/account.ts#L154)

#### Inherited from

[`Account`](Account.md).[`lifetime_vote_count`](Account.md#lifetime_vote_count)

---

### market_history

> **market_history**: `any`[]

Defined in: [src/chain/account.ts:226](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/account.ts#L226)

Limit order, cancel, and fill history.

---

### memo_key

> **memo_key**: `string`

Defined in: [src/chain/account.ts:138](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/account.ts#L138)

#### Inherited from

[`Account`](Account.md).[`memo_key`](Account.md#memo_key)

---

### mined

> **mined**: `boolean`

Defined in: [src/chain/account.ts:145](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/account.ts#L145)

#### Inherited from

[`Account`](Account.md).[`mined`](Account.md#mined)

---

### name

> **name**: `string`

Defined in: [src/chain/account.ts:134](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/account.ts#L134)

#### Inherited from

[`Account`](Account.md).[`name`](Account.md#name)

---

### next_vesting_withdrawal

> **next_vesting_withdrawal**: `string`

Defined in: [src/chain/account.ts:184](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/account.ts#L184)

#### Inherited from

[`Account`](Account.md).[`next_vesting_withdrawal`](Account.md#next_vesting_withdrawal)

---

### open_orders?

> `optional` **open_orders?**: `any`[]

Defined in: [src/chain/account.ts:233](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/account.ts#L233)

---

### other_history

> **other_history**: `any`[]

Defined in: [src/chain/account.ts:229](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/account.ts#L229)

---

### owner

> **owner**: [`Authority`](../classes/Authority.md)

Defined in: [src/chain/account.ts:135](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/account.ts#L135)

#### Inherited from

[`Account`](Account.md).[`owner`](Account.md#owner)

---

### owner_challenged

> **owner_challenged**: `boolean`

Defined in: [src/chain/account.ts:146](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/account.ts#L146)

#### Inherited from

[`Account`](Account.md).[`owner_challenged`](Account.md#owner_challenged)

---

### post_count

> **post_count**: `number`

Defined in: [src/chain/account.ts:155](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/account.ts#L155)

#### Inherited from

[`Account`](Account.md).[`post_count`](Account.md#post_count)

---

### post_history

> **post_history**: `any`[]

Defined in: [src/chain/account.ts:227](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/account.ts#L227)

---

### posting

> **posting**: [`Authority`](../classes/Authority.md)

Defined in: [src/chain/account.ts:137](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/account.ts#L137)

#### Inherited from

[`Account`](Account.md).[`posting`](Account.md#posting)

---

### posting_json_metadata

> **posting_json_metadata**: `string`

Defined in: [src/chain/account.ts:140](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/account.ts#L140)

#### Inherited from

[`Account`](Account.md).[`posting_json_metadata`](Account.md#posting_json_metadata)

---

### posting_rewards

> **posting_rewards**: `string` \| `number`

Defined in: [src/chain/account.ts:179](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/account.ts#L179)

#### Inherited from

[`Account`](Account.md).[`posting_rewards`](Account.md#posting_rewards)

---

### proxied_vsf_votes

> **proxied_vsf_votes**: `number`[]

Defined in: [src/chain/account.ts:188](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/account.ts#L188)

#### Inherited from

[`Account`](Account.md).[`proxied_vsf_votes`](Account.md#proxied_vsf_votes)

---

### proxy

> **proxy**: `string`

Defined in: [src/chain/account.ts:141](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/account.ts#L141)

#### Inherited from

[`Account`](Account.md).[`proxy`](Account.md#proxy)

---

### received_vesting_shares

> **received_vesting_shares**: `string` \| [`Asset`](../classes/Asset.md)

Defined in: [src/chain/account.ts:182](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/account.ts#L182)

#### Inherited from

[`Account`](Account.md).[`received_vesting_shares`](Account.md#received_vesting_shares)

---

### recent_replies?

> `optional` **recent_replies?**: `any`[]

Defined in: [src/chain/account.ts:237](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/account.ts#L237)

---

### recommended?

> `optional` **recommended?**: `any`[]

Defined in: [src/chain/account.ts:238](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/account.ts#L238)

---

### recovery_account

> **recovery_account**: `string`

Defined in: [src/chain/account.ts:150](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/account.ts#L150)

#### Inherited from

[`Account`](Account.md).[`recovery_account`](Account.md#recovery_account)

---

### reputation

> **reputation**: `string` \| `number`

Defined in: [src/chain/account.ts:218](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/account.ts#L218)

---

### reset_account

> **reset_account**: `string`

Defined in: [src/chain/account.ts:151](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/account.ts#L151)

#### Inherited from

[`Account`](Account.md).[`reset_account`](Account.md#reset_account)

---

### reward_hbd_balance

> **reward_hbd_balance**: `string` \| [`Asset`](../classes/Asset.md)

Defined in: [src/chain/account.ts:174](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/account.ts#L174)

#### Inherited from

[`Account`](Account.md).[`reward_hbd_balance`](Account.md#reward_hbd_balance)

---

### reward_hive_balance

> **reward_hive_balance**: `string` \| [`Asset`](../classes/Asset.md)

Defined in: [src/chain/account.ts:175](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/account.ts#L175)

#### Inherited from

[`Account`](Account.md).[`reward_hive_balance`](Account.md#reward_hive_balance)

---

### reward_vesting_balance

> **reward_vesting_balance**: `string` \| [`Asset`](../classes/Asset.md)

Defined in: [src/chain/account.ts:176](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/account.ts#L176)

#### Inherited from

[`Account`](Account.md).[`reward_vesting_balance`](Account.md#reward_vesting_balance)

---

### reward_vesting_hive

> **reward_vesting_hive**: `string` \| [`Asset`](../classes/Asset.md)

Defined in: [src/chain/account.ts:177](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/account.ts#L177)

#### Inherited from

[`Account`](Account.md).[`reward_vesting_hive`](Account.md#reward_vesting_hive)

---

### savings_balance

> **savings_balance**: `string` \| [`Asset`](../classes/Asset.md)

Defined in: [src/chain/account.ts:164](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/account.ts#L164)

#### Inherited from

[`Account`](Account.md).[`savings_balance`](Account.md#savings_balance)

---

### savings_hbd_balance

> **savings_hbd_balance**: `string` \| [`Asset`](../classes/Asset.md)

Defined in: [src/chain/account.ts:169](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/account.ts#L169)

#### Inherited from

[`Account`](Account.md).[`savings_hbd_balance`](Account.md#savings_hbd_balance)

---

### savings_hbd_last_interest_payment

> **savings_hbd_last_interest_payment**: `string`

Defined in: [src/chain/account.ts:172](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/account.ts#L172)

#### Inherited from

[`Account`](Account.md).[`savings_hbd_last_interest_payment`](Account.md#savings_hbd_last_interest_payment)

---

### savings_hbd_seconds

> **savings_hbd_seconds**: `string`

Defined in: [src/chain/account.ts:170](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/account.ts#L170)

#### Inherited from

[`Account`](Account.md).[`savings_hbd_seconds`](Account.md#savings_hbd_seconds)

---

### savings_hbd_seconds_last_update

> **savings_hbd_seconds_last_update**: `string`

Defined in: [src/chain/account.ts:171](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/account.ts#L171)

#### Inherited from

[`Account`](Account.md).[`savings_hbd_seconds_last_update`](Account.md#savings_hbd_seconds_last_update)

---

### savings_withdraw_requests

> **savings_withdraw_requests**: `number`

Defined in: [src/chain/account.ts:173](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/account.ts#L173)

#### Inherited from

[`Account`](Account.md).[`savings_withdraw_requests`](Account.md#savings_withdraw_requests)

---

### tags_usage

> **tags_usage**: `string`[]

Defined in: [src/chain/account.ts:231](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/account.ts#L231)

---

### to_withdraw

> **to_withdraw**: `string` \| `number`

Defined in: [src/chain/account.ts:186](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/account.ts#L186)

#### Inherited from

[`Account`](Account.md).[`to_withdraw`](Account.md#to_withdraw)

---

### transfer_history

> **transfer_history**: `any`[]

Defined in: [src/chain/account.ts:222](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/account.ts#L222)

Transfer and vesting operation history.

---

### vesting_balance

> **vesting_balance**: `string` \| [`Asset`](../classes/Asset.md)

Defined in: [src/chain/account.ts:217](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/account.ts#L217)

Vesting shares converted to vesting HIVE for display.

---

### vesting_shares

> **vesting_shares**: `string` \| [`Asset`](../classes/Asset.md)

Defined in: [src/chain/account.ts:180](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/account.ts#L180)

#### Inherited from

[`Account`](Account.md).[`vesting_shares`](Account.md#vesting_shares)

---

### vesting_withdraw_rate

> **vesting_withdraw_rate**: `string` \| [`Asset`](../classes/Asset.md)

Defined in: [src/chain/account.ts:183](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/account.ts#L183)

#### Inherited from

[`Account`](Account.md).[`vesting_withdraw_rate`](Account.md#vesting_withdraw_rate)

---

### vote_history

> **vote_history**: `any`[]

Defined in: [src/chain/account.ts:228](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/account.ts#L228)

---

### voting_manabar

> **voting_manabar**: `object`

Defined in: [src/chain/account.ts:159](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/account.ts#L159)

#### current_mana

> **current_mana**: `string` \| `number`

#### last_update_time

> **last_update_time**: `number`

#### Inherited from

[`Account`](Account.md).[`voting_manabar`](Account.md#voting_manabar)

---

### voting_power

> **voting_power**: `number`

Defined in: [src/chain/account.ts:157](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/account.ts#L157)

#### Inherited from

[`Account`](Account.md).[`voting_power`](Account.md#voting_power)

---

### withdraw_routes

> **withdraw_routes**: `number`

Defined in: [src/chain/account.ts:187](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/account.ts#L187)

#### Inherited from

[`Account`](Account.md).[`withdraw_routes`](Account.md#withdraw_routes)

---

### withdrawn

> **withdrawn**: `string` \| `number`

Defined in: [src/chain/account.ts:185](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/account.ts#L185)

#### Inherited from

[`Account`](Account.md).[`withdrawn`](Account.md#withdrawn)

---

### witness_votes

> **witness_votes**: `string`[]

Defined in: [src/chain/account.ts:230](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/account.ts#L230)

---

### witnesses_voted_for

> **witnesses_voted_for**: `number`

Defined in: [src/chain/account.ts:189](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/account.ts#L189)

#### Inherited from

[`Account`](Account.md).[`witnesses_voted_for`](Account.md#witnesses_voted_for)

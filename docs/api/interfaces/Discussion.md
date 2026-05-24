[**@srbde/pollen**](../index.md)

---

[@srbde/pollen](../index.md) / Discussion

# Interface: Discussion

Defined in: [src/chain/comment.ts:113](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/comment.ts#L113)

Hivemind/condenser discussion record for posts and enriched comments.

## Remarks

`Discussion` extends the base comment object with URL, root title, active
votes, reblog data, pending payout values, and reputation fields used by Hive
front ends.

## Example

```ts
const [post] = await client.hivemind.getRankedPosts({
  sort: "hot",
  tag: "hive-139531",
  limit: 1,
});

console.log(post.url, post.pending_payout_value);
```

## Extends

- [`Comment`](Comment.md)

## Properties

### abs_rshares

> **abs_rshares**: `string`

Defined in: [src/chain/comment.ts:74](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/comment.ts#L74)

#### Inherited from

[`Comment`](Comment.md).[`abs_rshares`](Comment.md#abs_rshares)

---

### active

> **active**: `string`

Defined in: [src/chain/comment.ts:69](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/comment.ts#L69)

#### Inherited from

[`Comment`](Comment.md).[`active`](Comment.md#active)

---

### active_votes

> **active_votes**: `any`[]

Defined in: [src/chain/comment.ts:118](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/comment.ts#L118)

---

### allow_curation_rewards

> **allow_curation_rewards**: `boolean`

Defined in: [src/chain/comment.ts:90](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/comment.ts#L90)

#### Inherited from

[`Comment`](Comment.md).[`allow_curation_rewards`](Comment.md#allow_curation_rewards)

---

### allow_replies

> **allow_replies**: `boolean`

Defined in: [src/chain/comment.ts:88](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/comment.ts#L88)

#### Inherited from

[`Comment`](Comment.md).[`allow_replies`](Comment.md#allow_replies)

---

### allow_votes

> **allow_votes**: `boolean`

Defined in: [src/chain/comment.ts:89](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/comment.ts#L89)

#### Inherited from

[`Comment`](Comment.md).[`allow_votes`](Comment.md#allow_votes)

---

### author

> **author**: `string`

Defined in: [src/chain/comment.ts:62](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/comment.ts#L62)

#### Inherited from

[`Comment`](Comment.md).[`author`](Comment.md#author)

---

### author_reputation

> **author_reputation**: `number`

Defined in: [src/chain/comment.ts:120](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/comment.ts#L120)

---

### author_rewards

> **author_rewards**: `string`

Defined in: [src/chain/comment.ts:83](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/comment.ts#L83)

#### Inherited from

[`Comment`](Comment.md).[`author_rewards`](Comment.md#author_rewards)

---

### beneficiaries

> **beneficiaries**: [`BeneficiaryRoute`](BeneficiaryRoute.md)[]

Defined in: [src/chain/comment.ts:91](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/comment.ts#L91)

#### Inherited from

[`Comment`](Comment.md).[`beneficiaries`](Comment.md#beneficiaries)

---

### body

> **body**: `string`

Defined in: [src/chain/comment.ts:65](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/comment.ts#L65)

#### Inherited from

[`Comment`](Comment.md).[`body`](Comment.md#body)

---

### body_length

> **body_length**: `string`

Defined in: [src/chain/comment.ts:122](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/comment.ts#L122)

---

### cashout_time

> **cashout_time**: `string`

Defined in: [src/chain/comment.ts:77](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/comment.ts#L77)

#### Inherited from

[`Comment`](Comment.md).[`cashout_time`](Comment.md#cashout_time)

---

### category

> **category**: `string`

Defined in: [src/chain/comment.ts:59](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/comment.ts#L59)

#### Inherited from

[`Comment`](Comment.md).[`category`](Comment.md#category)

---

### children

> **children**: `number`

Defined in: [src/chain/comment.ts:72](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/comment.ts#L72)

#### Inherited from

[`Comment`](Comment.md).[`children`](Comment.md#children)

---

### children_abs_rshares

> **children_abs_rshares**: `string`

Defined in: [src/chain/comment.ts:76](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/comment.ts#L76)

#### Inherited from

[`Comment`](Comment.md).[`children_abs_rshares`](Comment.md#children_abs_rshares)

---

### created

> **created**: `string`

Defined in: [src/chain/comment.ts:68](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/comment.ts#L68)

#### Inherited from

[`Comment`](Comment.md).[`created`](Comment.md#created)

---

### curator_payout_value

> **curator_payout_value**: `string` \| [`Asset`](../classes/Asset.md)

Defined in: [src/chain/comment.ts:82](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/comment.ts#L82)

#### Inherited from

[`Comment`](Comment.md).[`curator_payout_value`](Comment.md#curator_payout_value)

---

### depth

> **depth**: `number`

Defined in: [src/chain/comment.ts:71](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/comment.ts#L71)

#### Inherited from

[`Comment`](Comment.md).[`depth`](Comment.md#depth)

---

### first_reblogged_by?

> `optional` **first_reblogged_by?**: `any`

Defined in: [src/chain/comment.ts:124](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/comment.ts#L124)

---

### first_reblogged_on?

> `optional` **first_reblogged_on?**: `any`

Defined in: [src/chain/comment.ts:125](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/comment.ts#L125)

---

### id

> **id**: `number`

Defined in: [src/chain/comment.ts:58](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/comment.ts#L58)

#### Inherited from

[`Comment`](Comment.md).[`id`](Comment.md#id)

---

### json_metadata

> **json_metadata**: `string`

Defined in: [src/chain/comment.ts:66](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/comment.ts#L66)

#### Inherited from

[`Comment`](Comment.md).[`json_metadata`](Comment.md#json_metadata)

---

### last_payout

> **last_payout**: `string`

Defined in: [src/chain/comment.ts:70](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/comment.ts#L70)

#### Inherited from

[`Comment`](Comment.md).[`last_payout`](Comment.md#last_payout)

---

### last_update

> **last_update**: `string`

Defined in: [src/chain/comment.ts:67](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/comment.ts#L67)

#### Inherited from

[`Comment`](Comment.md).[`last_update`](Comment.md#last_update)

---

### max_accepted_payout

> **max_accepted_payout**: `string`

Defined in: [src/chain/comment.ts:86](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/comment.ts#L86)

#### Inherited from

[`Comment`](Comment.md).[`max_accepted_payout`](Comment.md#max_accepted_payout)

---

### max_cashout_time

> **max_cashout_time**: `string`

Defined in: [src/chain/comment.ts:78](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/comment.ts#L78)

#### Inherited from

[`Comment`](Comment.md).[`max_cashout_time`](Comment.md#max_cashout_time)

---

### net_rshares

> **net_rshares**: `string`

Defined in: [src/chain/comment.ts:73](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/comment.ts#L73)

#### Inherited from

[`Comment`](Comment.md).[`net_rshares`](Comment.md#net_rshares)

---

### net_votes

> **net_votes**: `number`

Defined in: [src/chain/comment.ts:84](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/comment.ts#L84)

#### Inherited from

[`Comment`](Comment.md).[`net_votes`](Comment.md#net_votes)

---

### parent_author

> **parent_author**: `string`

Defined in: [src/chain/comment.ts:60](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/comment.ts#L60)

#### Inherited from

[`Comment`](Comment.md).[`parent_author`](Comment.md#parent_author)

---

### parent_permlink

> **parent_permlink**: `string`

Defined in: [src/chain/comment.ts:61](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/comment.ts#L61)

#### Inherited from

[`Comment`](Comment.md).[`parent_permlink`](Comment.md#parent_permlink)

---

### pending_payout_value

> **pending_payout_value**: `string` \| [`Asset`](../classes/Asset.md)

Defined in: [src/chain/comment.ts:116](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/comment.ts#L116)

---

### percent_hbd

> **percent_hbd**: `number`

Defined in: [src/chain/comment.ts:87](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/comment.ts#L87)

#### Inherited from

[`Comment`](Comment.md).[`percent_hbd`](Comment.md#percent_hbd)

---

### permlink

> **permlink**: `string`

Defined in: [src/chain/comment.ts:63](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/comment.ts#L63)

#### Inherited from

[`Comment`](Comment.md).[`permlink`](Comment.md#permlink)

---

### promoted

> **promoted**: `string` \| [`Asset`](../classes/Asset.md)

Defined in: [src/chain/comment.ts:121](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/comment.ts#L121)

---

### reblogged_by

> **reblogged_by**: `any`[]

Defined in: [src/chain/comment.ts:123](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/comment.ts#L123)

---

### replies

> **replies**: `string`[]

Defined in: [src/chain/comment.ts:119](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/comment.ts#L119)

---

### reward_weight

> **reward_weight**: `number`

Defined in: [src/chain/comment.ts:80](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/comment.ts#L80)

#### Inherited from

[`Comment`](Comment.md).[`reward_weight`](Comment.md#reward_weight)

---

### root_comment

> **root_comment**: `number`

Defined in: [src/chain/comment.ts:85](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/comment.ts#L85)

#### Inherited from

[`Comment`](Comment.md).[`root_comment`](Comment.md#root_comment)

---

### root_title

> **root_title**: `string`

Defined in: [src/chain/comment.ts:115](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/comment.ts#L115)

---

### title

> **title**: `string`

Defined in: [src/chain/comment.ts:64](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/comment.ts#L64)

#### Inherited from

[`Comment`](Comment.md).[`title`](Comment.md#title)

---

### total_payout_value

> **total_payout_value**: `string` \| [`Asset`](../classes/Asset.md)

Defined in: [src/chain/comment.ts:81](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/comment.ts#L81)

#### Inherited from

[`Comment`](Comment.md).[`total_payout_value`](Comment.md#total_payout_value)

---

### total_pending_payout_value

> **total_pending_payout_value**: `string` \| [`Asset`](../classes/Asset.md)

Defined in: [src/chain/comment.ts:117](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/comment.ts#L117)

---

### total_vote_weight

> **total_vote_weight**: `number`

Defined in: [src/chain/comment.ts:79](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/comment.ts#L79)

#### Inherited from

[`Comment`](Comment.md).[`total_vote_weight`](Comment.md#total_vote_weight)

---

### url

> **url**: `string`

Defined in: [src/chain/comment.ts:114](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/comment.ts#L114)

---

### vote_rshares

> **vote_rshares**: `string`

Defined in: [src/chain/comment.ts:75](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/comment.ts#L75)

#### Inherited from

[`Comment`](Comment.md).[`vote_rshares`](Comment.md#vote_rshares)

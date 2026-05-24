[**@srbde/pollen**](../index.md)

---

[@srbde/pollen](../index.md) / Comment

# Interface: Comment

Defined in: [src/chain/comment.ts:57](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/comment.ts#L57)

Core Hive comment object.

## Remarks

Hive uses the same object for top-level posts and replies. A top-level post
has an empty `parent_author`; replies point at a parent author and permlink.
Payout, vote, and beneficiary fields are included because condenser combines
social and reward state in this shape.

## Example

```ts
const posts = await client.database.getDiscussions("trending", {
  tag: "hive-139531",
  limit: 5,
});

console.log(posts[0].author, posts[0].permlink);
```

## Extended by

- [`Discussion`](Discussion.md)

## Properties

### abs_rshares

> **abs_rshares**: `string`

Defined in: [src/chain/comment.ts:74](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/comment.ts#L74)

---

### active

> **active**: `string`

Defined in: [src/chain/comment.ts:69](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/comment.ts#L69)

---

### allow_curation_rewards

> **allow_curation_rewards**: `boolean`

Defined in: [src/chain/comment.ts:90](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/comment.ts#L90)

---

### allow_replies

> **allow_replies**: `boolean`

Defined in: [src/chain/comment.ts:88](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/comment.ts#L88)

---

### allow_votes

> **allow_votes**: `boolean`

Defined in: [src/chain/comment.ts:89](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/comment.ts#L89)

---

### author

> **author**: `string`

Defined in: [src/chain/comment.ts:62](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/comment.ts#L62)

---

### author_rewards

> **author_rewards**: `string`

Defined in: [src/chain/comment.ts:83](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/comment.ts#L83)

---

### beneficiaries

> **beneficiaries**: [`BeneficiaryRoute`](BeneficiaryRoute.md)[]

Defined in: [src/chain/comment.ts:91](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/comment.ts#L91)

---

### body

> **body**: `string`

Defined in: [src/chain/comment.ts:65](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/comment.ts#L65)

---

### cashout_time

> **cashout_time**: `string`

Defined in: [src/chain/comment.ts:77](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/comment.ts#L77)

---

### category

> **category**: `string`

Defined in: [src/chain/comment.ts:59](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/comment.ts#L59)

---

### children

> **children**: `number`

Defined in: [src/chain/comment.ts:72](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/comment.ts#L72)

---

### children_abs_rshares

> **children_abs_rshares**: `string`

Defined in: [src/chain/comment.ts:76](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/comment.ts#L76)

---

### created

> **created**: `string`

Defined in: [src/chain/comment.ts:68](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/comment.ts#L68)

---

### curator_payout_value

> **curator_payout_value**: `string` \| [`Asset`](../classes/Asset.md)

Defined in: [src/chain/comment.ts:82](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/comment.ts#L82)

---

### depth

> **depth**: `number`

Defined in: [src/chain/comment.ts:71](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/comment.ts#L71)

---

### id

> **id**: `number`

Defined in: [src/chain/comment.ts:58](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/comment.ts#L58)

---

### json_metadata

> **json_metadata**: `string`

Defined in: [src/chain/comment.ts:66](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/comment.ts#L66)

---

### last_payout

> **last_payout**: `string`

Defined in: [src/chain/comment.ts:70](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/comment.ts#L70)

---

### last_update

> **last_update**: `string`

Defined in: [src/chain/comment.ts:67](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/comment.ts#L67)

---

### max_accepted_payout

> **max_accepted_payout**: `string`

Defined in: [src/chain/comment.ts:86](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/comment.ts#L86)

---

### max_cashout_time

> **max_cashout_time**: `string`

Defined in: [src/chain/comment.ts:78](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/comment.ts#L78)

---

### net_rshares

> **net_rshares**: `string`

Defined in: [src/chain/comment.ts:73](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/comment.ts#L73)

---

### net_votes

> **net_votes**: `number`

Defined in: [src/chain/comment.ts:84](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/comment.ts#L84)

---

### parent_author

> **parent_author**: `string`

Defined in: [src/chain/comment.ts:60](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/comment.ts#L60)

---

### parent_permlink

> **parent_permlink**: `string`

Defined in: [src/chain/comment.ts:61](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/comment.ts#L61)

---

### percent_hbd

> **percent_hbd**: `number`

Defined in: [src/chain/comment.ts:87](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/comment.ts#L87)

---

### permlink

> **permlink**: `string`

Defined in: [src/chain/comment.ts:63](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/comment.ts#L63)

---

### reward_weight

> **reward_weight**: `number`

Defined in: [src/chain/comment.ts:80](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/comment.ts#L80)

---

### root_comment

> **root_comment**: `number`

Defined in: [src/chain/comment.ts:85](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/comment.ts#L85)

---

### title

> **title**: `string`

Defined in: [src/chain/comment.ts:64](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/comment.ts#L64)

---

### total_payout_value

> **total_payout_value**: `string` \| [`Asset`](../classes/Asset.md)

Defined in: [src/chain/comment.ts:81](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/comment.ts#L81)

---

### total_vote_weight

> **total_vote_weight**: `number`

Defined in: [src/chain/comment.ts:79](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/comment.ts#L79)

---

### vote_rshares

> **vote_rshares**: `string`

Defined in: [src/chain/comment.ts:75](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/comment.ts#L75)

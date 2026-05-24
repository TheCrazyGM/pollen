[**@srbde/pollen**](../index.md)

---

[@srbde/pollen](../index.md) / CommunityDetail

# Interface: CommunityDetail

Defined in: [src/chain/hivemind.ts:18](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/hivemind.ts#L18)

Community metadata returned by Hivemind bridge calls.

## Remarks

This shape contains presentation metadata, moderation/admin team fields, and
aggregate pending-post counters that Hive front ends use for community pages.

## Example

```ts
const [community] = await client.hivemind.getCommunity({
  name: "hive-139531",
  observer: "srbde",
});

console.log(community.title, community.subscribers);
```

## Properties

### about

> **about**: `string`

Defined in: [src/chain/hivemind.ts:22](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/hivemind.ts#L22)

---

### admins?

> `optional` **admins?**: `string`[]

Defined in: [src/chain/hivemind.ts:37](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/hivemind.ts#L37)

---

### avatar_url

> **avatar_url**: `string`

Defined in: [src/chain/hivemind.ts:31](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/hivemind.ts#L31)

---

### context

> **context**: `object`

Defined in: [src/chain/hivemind.ts:32](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/hivemind.ts#L32)

---

### created_at

> **created_at**: `string`

Defined in: [src/chain/hivemind.ts:30](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/hivemind.ts#L30)

---

### description

> **description**: `string`

Defined in: [src/chain/hivemind.ts:33](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/hivemind.ts#L33)

---

### flag_text

> **flag_text**: `string`

Defined in: [src/chain/hivemind.ts:34](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/hivemind.ts#L34)

---

### id

> **id**: `number`

Defined in: [src/chain/hivemind.ts:19](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/hivemind.ts#L19)

---

### is_nsfw

> **is_nsfw**: `false`

Defined in: [src/chain/hivemind.ts:25](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/hivemind.ts#L25)

---

### lang

> **lang**: `string`

Defined in: [src/chain/hivemind.ts:23](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/hivemind.ts#L23)

---

### name

> **name**: `string`

Defined in: [src/chain/hivemind.ts:20](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/hivemind.ts#L20)

---

### num_authors

> **num_authors**: `number`

Defined in: [src/chain/hivemind.ts:29](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/hivemind.ts#L29)

---

### num_pending

> **num_pending**: `number`

Defined in: [src/chain/hivemind.ts:28](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/hivemind.ts#L28)

---

### settings

> **settings**: `object`

Defined in: [src/chain/hivemind.ts:35](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/hivemind.ts#L35)

---

### subscribers

> **subscribers**: `number`

Defined in: [src/chain/hivemind.ts:26](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/hivemind.ts#L26)

---

### sum_pending

> **sum_pending**: `number`

Defined in: [src/chain/hivemind.ts:27](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/hivemind.ts#L27)

---

### team?

> `optional` **team?**: `string`[]

Defined in: [src/chain/hivemind.ts:36](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/hivemind.ts#L36)

---

### title

> **title**: `string`

Defined in: [src/chain/hivemind.ts:21](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/hivemind.ts#L21)

---

### type_id

> **type_id**: `number`

Defined in: [src/chain/hivemind.ts:24](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/hivemind.ts#L24)

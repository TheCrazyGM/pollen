[**@srbde/pollen**](../index.md)

---

[@srbde/pollen](../index.md) / DisqussionQuery

# Interface: DisqussionQuery

Defined in: [src/helpers/database.ts:91](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/helpers/database.ts#L91)

Query shape accepted by Hive discussion listing endpoints.

## Remarks

The name is preserved for API compatibility even though the historical type
spelling is `DisqussionQuery`.

## Example

```ts
const query: DisqussionQuery = {
  tag: "photography",
  limit: 20,
  truncate_body: 512,
};
```

## Properties

### filter_tags?

> `optional` **filter_tags?**: `string`[]

Defined in: [src/helpers/database.ts:100](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/helpers/database.ts#L100)

---

### limit

> **limit**: `number`

Defined in: [src/helpers/database.ts:99](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/helpers/database.ts#L99)

Number of results, max 100.

---

### parent_author?

> `optional` **parent_author?**: `string`

Defined in: [src/helpers/database.ts:117](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/helpers/database.ts#L117)

---

### parent_permlink?

> `optional` **parent_permlink?**: `string`

Defined in: [src/helpers/database.ts:118](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/helpers/database.ts#L118)

---

### select_authors?

> `optional` **select_authors?**: `string`[]

Defined in: [src/helpers/database.ts:101](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/helpers/database.ts#L101)

---

### select_tags?

> `optional` **select_tags?**: `string`[]

Defined in: [src/helpers/database.ts:102](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/helpers/database.ts#L102)

---

### start_author?

> `optional` **start_author?**: `string`

Defined in: [src/helpers/database.ts:111](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/helpers/database.ts#L111)

Name of author to start from, used for paging.
Should be used in conjunction with `start_permlink`.

---

### start_permlink?

> `optional` **start_permlink?**: `string`

Defined in: [src/helpers/database.ts:116](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/helpers/database.ts#L116)

Permalink of post to start from, used for paging.
Should be used in conjunction with `start_author`.

---

### tag?

> `optional` **tag?**: `string`

Defined in: [src/helpers/database.ts:95](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/helpers/database.ts#L95)

Name of author or tag to fetch.

---

### truncate_body?

> `optional` **truncate_body?**: `number`

Defined in: [src/helpers/database.ts:106](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/helpers/database.ts#L106)

Number of bytes of post body to fetch, default 0 (all)

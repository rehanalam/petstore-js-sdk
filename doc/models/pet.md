
# Pet

## Structure

`Pet`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `bigint \| undefined` | Optional | - |
| `name` | `string` | Required | - |
| `category` | [`Category \| undefined`](../../doc/models/category.md) | Optional | - |
| `photoUrls` | `string[]` | Required | - |
| `tags` | [`Tag[] \| undefined`](../../doc/models/tag.md) | Optional | - |
| `status` | [`Status1Enum \| undefined`](../../doc/models/status-1-enum.md) | Optional | pet status in the store |

## Example (as JSON)

```json
{
  "id": 120,
  "name": "name0",
  "category": {
    "id": 232,
    "name": "name2"
  },
  "photoUrls": [
    "photoUrls5",
    "photoUrls6"
  ],
  "tags": [
    {
      "id": 26,
      "name": "name0"
    }
  ],
  "status": "available"
}
```


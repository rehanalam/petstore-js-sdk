# Store

Access to Petstore orders

Find out more about our store: [https://swagger.io](https://swagger.io)

```ts
const storeController = new StoreController(client);
```

## Class Name

`StoreController`

## Methods

* [Get Inventory](../../doc/controllers/store.md#get-inventory)
* [Place Order](../../doc/controllers/store.md#place-order)
* [Get Order by Id](../../doc/controllers/store.md#get-order-by-id)
* [Delete Order](../../doc/controllers/store.md#delete-order)


# Get Inventory

Returns a map of status codes to quantities.

```ts
async getInventory(
  requestOptions?: RequestOptions
): Promise<ApiResponse<Record<string, number>>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type Record<string, number>.

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await storeController.getInventory();
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| Default | Unexpected error | `ApiError` |


# Place Order

Place a new order in the store.

:information_source: **Note** This endpoint does not require authentication.

```ts
async placeOrder(
  id?: bigint,
  petId?: bigint,
  quantity?: number,
  shipDate?: string,
  status?: StatusEnum,
  complete?: boolean,
  requestOptions?: RequestOptions
): Promise<ApiResponse<Order>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `bigint \| undefined` | Form, Optional | - |
| `petId` | `bigint \| undefined` | Form, Optional | - |
| `quantity` | `number \| undefined` | Form, Optional | - |
| `shipDate` | `string \| undefined` | Form, Optional | - |
| `status` | [`StatusEnum \| undefined`](../../doc/models/status-enum.md) | Form, Optional | Order Status |
| `complete` | `boolean \| undefined` | Form, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [Order](../../doc/models/order.md).

## Example Usage

```ts
const id = BigInt(10);

const petId = BigInt(198772);

const quantity = 7;

try {
  const { result, ...httpResponse } = await storeController.placeOrder(
  id,
  petId,
  quantity
);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Invalid input | `ApiError` |
| 422 | Validation exception | `ApiError` |
| Default | Unexpected error | `ApiError` |


# Get Order by Id

For valid response try integer IDs with value <= 5 or > 10. Other values will generate exceptions.

:information_source: **Note** This endpoint does not require authentication.

```ts
async getOrderById(
  orderId: bigint,
  requestOptions?: RequestOptions
): Promise<ApiResponse<Order>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `orderId` | `bigint` | Template, Required | ID of order that needs to be fetched |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [Order](../../doc/models/order.md).

## Example Usage

```ts
const orderId = BigInt(62);

try {
  const { result, ...httpResponse } = await storeController.getOrderById(orderId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Invalid ID supplied | `ApiError` |
| 404 | Order not found | `ApiError` |
| Default | Unexpected error | `ApiError` |


# Delete Order

For valid response try integer IDs with value < 1000. Anything above 1000 or non-integers will generate API errors.

:information_source: **Note** This endpoint does not require authentication.

```ts
async deleteOrder(
  orderId: bigint,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `orderId` | `bigint` | Template, Required | ID of the order that needs to be deleted |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

This method returns an [`ApiResponse`](../../doc/api-response.md) instance.

## Example Usage

```ts
const orderId = BigInt(62);

try {
  const { result, ...httpResponse } = await storeController.deleteOrder(orderId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Invalid ID supplied | `ApiError` |
| 404 | Order not found | `ApiError` |
| Default | Unexpected error | `ApiError` |


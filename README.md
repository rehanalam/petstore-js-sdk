
# Getting Started with Swagger Petstore - OpenAPI 3.0

## Introduction

This is a sample Pet Store Server based on the OpenAPI 3.0 specification.  You can find out more about
Swagger at [https://swagger.io](https://swagger.io). In the third iteration of the pet store, we've switched to the design first approach!
You can now help us improve the API whether it's by making changes to the definition itself or to the code.
That way, with time, we can improve the API in general, and expose some of the new features in OAS3.

Some useful links:

- [The Pet Store repository](https://github.com/swagger-api/swagger-petstore)
- [The source API definition for the Pet Store](https://github.com/swagger-api/swagger-petstore/blob/master/src/main/resources/openapi.yaml)

Find out more about Swagger: [https://swagger.io](https://swagger.io)

## Install the Package

Run the following command from your project directory to install the package from npm:

```bash
npm install petstore-sdk@10.00.2
```

For additional package details, see the [Npm page for the petstore-sdk@10.00.2 npm](https://www.npmjs.com/package/petstore-sdk/v/10.00.2).

## Test the SDK

To validate the functionality of this SDK, you can execute all tests located in the `test` directory. This SDK utilizes `Jest` as both the testing framework and test runner.

To run the tests, navigate to the root directory of the SDK and execute the following command:

```bash
npm run test
```

Or you can also run tests with coverage report:

```bash
npm run test:coverage
```

## Initialize the API Client

**_Note:_** Documentation for the client can be found [here.](https://www.github.com/rehanalam/petstore-js-sdk/tree/10.00.2/doc/client.md)

The following parameters are configurable for the API Client:

| Parameter | Type | Description |
|  --- | --- | --- |
| environment | `Environment` | The API environment. <br> **Default: `Environment.Production`** |
| timeout | `number` | Timeout for API calls.<br>*Default*: `0` |
| httpClientOptions | [`Partial<HttpClientOptions>`](https://www.github.com/rehanalam/petstore-js-sdk/tree/10.00.2/doc/http-client-options.md) | Stable configurable http client options. |
| unstableHttpClientOptions | `any` | Unstable configurable http client options. |
| petstoreAuthCredentials | [`PetstoreAuthCredentials`](https://www.github.com/rehanalam/petstore-js-sdk/tree/10.00.2/doc/auth/oauth-2-implicit-grant.md) | The credential object for petstoreAuth |
| apiKeyCredentials | [`ApiKeyCredentials`](https://www.github.com/rehanalam/petstore-js-sdk/tree/10.00.2/doc/auth/custom-header-signature.md) | The credential object for apiKey |

The API client can be initialized as follows:

```ts
const client = new Client({
  petstoreAuthCredentials: {
    oAuthClientId: 'OAuthClientId',
    oAuthRedirectUri: 'OAuthRedirectUri',
    oAuthScopes: [
      OAuthScopePetstoreAuthEnum.Writepets,
      OAuthScopePetstoreAuthEnum.Readpets
    ]
  },
  apiKeyCredentials: {
    'api_key': 'api_key'
  },
  timeout: 0,
  environment: Environment.Production,
});
```

## Authorization

This API uses the following authentication schemes.

* [`petstore_auth (OAuth 2 Implicit Grant)`](https://www.github.com/rehanalam/petstore-js-sdk/tree/10.00.2/doc/auth/oauth-2-implicit-grant.md)
* [`api_key (Custom Header Signature)`](https://www.github.com/rehanalam/petstore-js-sdk/tree/10.00.2/doc/auth/custom-header-signature.md)

## List of APIs

* [Pet](https://www.github.com/rehanalam/petstore-js-sdk/tree/10.00.2/doc/controllers/pet.md)
* [Store](https://www.github.com/rehanalam/petstore-js-sdk/tree/10.00.2/doc/controllers/store.md)
* [User](https://www.github.com/rehanalam/petstore-js-sdk/tree/10.00.2/doc/controllers/user.md)

## SDK Infrastructure

### Configuration

* [HttpClientOptions](https://www.github.com/rehanalam/petstore-js-sdk/tree/10.00.2/doc/http-client-options.md)
* [RetryConfiguration](https://www.github.com/rehanalam/petstore-js-sdk/tree/10.00.2/doc/retry-configuration.md)

### HTTP

* [HttpRequest](https://www.github.com/rehanalam/petstore-js-sdk/tree/10.00.2/doc/http-request.md)

### Utilities

* [ApiResponse](https://www.github.com/rehanalam/petstore-js-sdk/tree/10.00.2/doc/api-response.md)
* [ApiError](https://www.github.com/rehanalam/petstore-js-sdk/tree/10.00.2/doc/api-error.md)


# AuthApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**authInitPost**](AuthApi.md#authinitpost) | **POST** /auth/init | wysyła wyzwanie serwerowi i prośbe o challange |
| [**authLoginPost**](AuthApi.md#authloginpost) | **POST** /auth/login | loguje sie używając odpowiedzi na wyzwanie |



## authInitPost

> authInitPost(challengeRequest)

wysyła wyzwanie serwerowi i prośbe o challange

zaczyna challange response handshake dając wyzwanie serwerowi, do klienta zwracana jest losowa wartość (serwer ją zapisuje aby ją później potwierdzić) oraz odpowiedź na jego wyzwanie podpisana kluczem prywatnym serwera

### Example

```ts
import {
  Configuration,
  AuthApi,
} from '';
import type { AuthInitPostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new AuthApi();

  const body = {
    // ChallengeRequest
    challengeRequest: ...,
  } satisfies AuthInitPostRequest;

  try {
    const data = await api.authInitPost(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **challengeRequest** | [ChallengeRequest](ChallengeRequest.md) |  | |

### Return type

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | serwer wysyła odpowiedź na wyzwanie wraz ze swoim wyzwaniem |  -  |
| **500** | coś poszło nie tak |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## authLoginPost

> authLoginPost(loginRequest)

loguje sie używając odpowiedzi na wyzwanie

klient wysyła do serwera zaszyfrowaną swoim prywatnym kluczem wartość którą dostał od serwera i dostaje spowrotem session token. Trzeba zaimplementować timeout

### Example

```ts
import {
  Configuration,
  AuthApi,
} from '';
import type { AuthLoginPostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new AuthApi();

  const body = {
    // LoginRequest
    loginRequest: ...,
  } satisfies AuthLoginPostRequest;

  try {
    const data = await api.authLoginPost(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **loginRequest** | [LoginRequest](LoginRequest.md) |  | |

### Return type

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | serwer wysyła klientowi session token |  -  |
| **400** | klient podał albo zły nonce albo niepoprawny uid LUB klient nie wysłał odpowiedzi wystarczająco szybko |  -  |
| **418** | serwer jest czajnikiem |  -  |
| **500** | serwer coś dziwnego odwalił |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


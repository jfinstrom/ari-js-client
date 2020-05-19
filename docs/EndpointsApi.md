# Localhost8088.EndpointsApi

All URIs are relative to *http://localhost:8088/ari*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getendpoint**](EndpointsApi.md#getendpoint) | **GET** /endpoints/{tech}/{resource} | Details for an endpoint.
[**listByTech**](EndpointsApi.md#listByTech) | **GET** /endpoints/{tech} | List available endoints for a given endpoint technology.
[**listendpoints**](EndpointsApi.md#listendpoints) | **GET** /endpoints | List all endpoints.
[**sendMessage**](EndpointsApi.md#sendMessage) | **PUT** /endpoints/sendMessage | Send a message to some technology URI or endpoint.
[**sendMessageToEndpoint**](EndpointsApi.md#sendMessageToEndpoint) | **PUT** /endpoints/{tech}/{resource}/sendMessage | Send a message to some endpoint in a technology.

<a name="getendpoint"></a>
# **getendpoint**
> Endpoint getendpoint(tech, resource)

Details for an endpoint.

### Example
```javascript
import Localhost8088 from 'localhost8088';

let apiInstance = new Localhost8088.EndpointsApi();
let tech = "tech_example"; // String | Technology of the endpoint
let resource = "resource_example"; // String | ID of the endpoint

apiInstance.getendpoint(tech, resource, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tech** | **String**| Technology of the endpoint | 
 **resource** | **String**| ID of the endpoint | 

### Return type

[**Endpoint**](Endpoint.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

<a name="listByTech"></a>
# **listByTech**
> [Endpoint] listByTech(tech)

List available endoints for a given endpoint technology.

### Example
```javascript
import Localhost8088 from 'localhost8088';

let apiInstance = new Localhost8088.EndpointsApi();
let tech = "tech_example"; // String | Technology of the endpoints (sip,iax2,...)

apiInstance.listByTech(tech, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tech** | **String**| Technology of the endpoints (sip,iax2,...) | 

### Return type

[**[Endpoint]**](Endpoint.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

<a name="listendpoints"></a>
# **listendpoints**
> [Endpoint] listendpoints()

List all endpoints.

### Example
```javascript
import Localhost8088 from 'localhost8088';

let apiInstance = new Localhost8088.EndpointsApi();
apiInstance.listendpoints((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[Endpoint]**](Endpoint.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

<a name="sendMessage"></a>
# **sendMessage**
> sendMessage(tofrom, opts)

Send a message to some technology URI or endpoint.

### Example
```javascript
import Localhost8088 from 'localhost8088';

let apiInstance = new Localhost8088.EndpointsApi();
let to = "to_example"; // String | The endpoint resource or technology specific URI to send the message to. Valid resources are sip, pjsip, and xmpp.
let from = "from_example"; // String | The endpoint resource or technology specific identity to send this message from. Valid resources are sip, pjsip, and xmpp.
let opts = { 
  'body2': new Localhost8088.Containers() // Containers | 
  'body': "body_example" // String | The body of the message
};
apiInstance.sendMessage(tofrom, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **to** | **String**| The endpoint resource or technology specific URI to send the message to. Valid resources are sip, pjsip, and xmpp. | 
 **from** | **String**| The endpoint resource or technology specific identity to send this message from. Valid resources are sip, pjsip, and xmpp. | 
 **body2** | [**Containers**](Containers.md)|  | [optional] 
 **body** | **String**| The body of the message | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: */*
 - **Accept**: Not defined

<a name="sendMessageToEndpoint"></a>
# **sendMessageToEndpoint**
> sendMessageToEndpoint(fromtechresource, opts)

Send a message to some endpoint in a technology.

### Example
```javascript
import Localhost8088 from 'localhost8088';

let apiInstance = new Localhost8088.EndpointsApi();
let from = "from_example"; // String | The endpoint resource or technology specific identity to send this message from. Valid resources are sip, pjsip, and xmpp.
let tech = "tech_example"; // String | Technology of the endpoint
let resource = "resource_example"; // String | ID of the endpoint
let opts = { 
  'body2': new Localhost8088.Containers() // Containers | 
  'body': "body_example" // String | The body of the message
};
apiInstance.sendMessageToEndpoint(fromtechresource, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **from** | **String**| The endpoint resource or technology specific identity to send this message from. Valid resources are sip, pjsip, and xmpp. | 
 **tech** | **String**| Technology of the endpoint | 
 **resource** | **String**| ID of the endpoint | 
 **body2** | [**Containers**](Containers.md)|  | [optional] 
 **body** | **String**| The body of the message | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: */*
 - **Accept**: Not defined


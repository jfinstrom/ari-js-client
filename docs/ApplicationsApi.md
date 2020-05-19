# Localhost8088.ApplicationsApi

All URIs are relative to *http://localhost:8088/ari*

Method | HTTP request | Description
------------- | ------------- | -------------
[**filter**](ApplicationsApi.md#filter) | **PUT** /applications/{applicationName}/eventFilter | Filter application events types.
[**get**](ApplicationsApi.md#get) | **GET** /applications/{applicationName} | Get details of an application.
[**list**](ApplicationsApi.md#list) | **GET** /applications | List all applications.
[**subscribe**](ApplicationsApi.md#subscribe) | **POST** /applications/{applicationName}/subscription | Subscribe an application to a event source.
[**unsubscribe**](ApplicationsApi.md#unsubscribe) | **DELETE** /applications/{applicationName}/subscription | Unsubscribe an application from an event source.

<a name="filter"></a>
# **filter**
> Application filter(applicationName, opts)

Filter application events types.

Allowed and/or disallowed event type filtering can be done. The body (parameter) should specify a JSON key/value object that describes the type of event filtering needed. One, or both of the following keys can be designated:&lt;br /&gt;&lt;br /&gt;\&quot;allowed\&quot; - Specifies an allowed list of event types&lt;br /&gt;\&quot;disallowed\&quot; - Specifies a disallowed list of event types&lt;br /&gt;&lt;br /&gt;Further, each of those key&#x27;s value should be a JSON array that holds zero, or more JSON key/value objects. Each of these objects must contain the following key with an associated value:&lt;br /&gt;&lt;br /&gt;\&quot;type\&quot; - The type name of the event to filter&lt;br /&gt;&lt;br /&gt;The value must be the string name (case sensitive) of the event type that needs filtering. For example:&lt;br /&gt;&lt;br /&gt;{ \&quot;allowed\&quot;: [ { \&quot;type\&quot;: \&quot;StasisStart\&quot; }, { \&quot;type\&quot;: \&quot;StasisEnd\&quot; } ] }&lt;br /&gt;&lt;br /&gt;As this specifies only an allowed list, then only those two event type messages are sent to the application. No other event messages are sent.&lt;br /&gt;&lt;br /&gt;The following rules apply:&lt;br /&gt;&lt;br /&gt;* If the body is empty, both the allowed and disallowed filters are set empty.&lt;br /&gt;* If both list types are given then both are set to their respective values (note, specifying an empty array for a given type sets that type to empty).&lt;br /&gt;* If only one list type is given then only that type is set. The other type is not updated.&lt;br /&gt;* An empty \&quot;allowed\&quot; list means all events are allowed.&lt;br /&gt;* An empty \&quot;disallowed\&quot; list means no events are disallowed.&lt;br /&gt;* Disallowed events take precedence over allowed events if the event type is specified in both lists.

### Example
```javascript
import Localhost8088 from 'localhost8088';

let apiInstance = new Localhost8088.ApplicationsApi();
let applicationName = "applicationName_example"; // String | Application's name
let opts = { 
  'body': null // Object | Specify which event types to allow/disallow
};
apiInstance.filter(applicationName, opts, (error, data, response) => {
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
 **applicationName** | **String**| Application&#x27;s name | 
 **body** | [**Object**](Object.md)| Specify which event types to allow/disallow | [optional] 

### Return type

[**Application**](Application.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: */*
 - **Accept**: */*

<a name="get"></a>
# **get**
> Application get(applicationName)

Get details of an application.

### Example
```javascript
import Localhost8088 from 'localhost8088';

let apiInstance = new Localhost8088.ApplicationsApi();
let applicationName = "applicationName_example"; // String | Application's name

apiInstance.get(applicationName, (error, data, response) => {
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
 **applicationName** | **String**| Application&#x27;s name | 

### Return type

[**Application**](Application.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

<a name="list"></a>
# **list**
> [Application] list()

List all applications.

### Example
```javascript
import Localhost8088 from 'localhost8088';

let apiInstance = new Localhost8088.ApplicationsApi();
apiInstance.list((error, data, response) => {
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

[**[Application]**](Application.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

<a name="subscribe"></a>
# **subscribe**
> Application subscribe(applicationName, eventSource)

Subscribe an application to a event source.

Returns the state of the application after the subscriptions have changed

### Example
```javascript
import Localhost8088 from 'localhost8088';

let apiInstance = new Localhost8088.ApplicationsApi();
let applicationName = "applicationName_example"; // String | Application's name
let eventSource = ["eventSource_example"]; // [String] | URI for event source (channel:{channelId}, bridge:{bridgeId}, endpoint:{tech}[/{resource}], deviceState:{deviceName}

apiInstance.subscribe(applicationName, eventSource, (error, data, response) => {
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
 **applicationName** | **String**| Application&#x27;s name | 
 **eventSource** | [**[String]**](String.md)| URI for event source (channel:{channelId}, bridge:{bridgeId}, endpoint:{tech}[/{resource}], deviceState:{deviceName} | 

### Return type

[**Application**](Application.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

<a name="unsubscribe"></a>
# **unsubscribe**
> Application unsubscribe(applicationName, eventSource)

Unsubscribe an application from an event source.

Returns the state of the application after the subscriptions have changed

### Example
```javascript
import Localhost8088 from 'localhost8088';

let apiInstance = new Localhost8088.ApplicationsApi();
let applicationName = "applicationName_example"; // String | Application's name
let eventSource = ["eventSource_example"]; // [String] | URI for event source (channel:{channelId}, bridge:{bridgeId}, endpoint:{tech}[/{resource}], deviceState:{deviceName}

apiInstance.unsubscribe(applicationName, eventSource, (error, data, response) => {
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
 **applicationName** | **String**| Application&#x27;s name | 
 **eventSource** | [**[String]**](String.md)| URI for event source (channel:{channelId}, bridge:{bridgeId}, endpoint:{tech}[/{resource}], deviceState:{deviceName} | 

### Return type

[**Application**](Application.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*


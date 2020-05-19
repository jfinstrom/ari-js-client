# AsteriskAri.EventsApi

All URIs are relative to *http://localhost:8088/ari*

Method | HTTP request | Description
------------- | ------------- | -------------
[**eventWebsocket**](EventsApi.md#eventWebsocket) | **GET** /events | WebSocket connection for events.
[**userEvent**](EventsApi.md#userEvent) | **POST** /events/user/{eventName} | Generate a user event.

<a name="eventWebsocket"></a>
# **eventWebsocket**
> Message eventWebsocket(app, opts)

WebSocket connection for events.

### Example
```javascript
import AsteriskAri from 'asterisk_ari';

let apiInstance = new AsteriskAri.EventsApi();
let app = ["app_example"]; // [String] | Applications to subscribe to.
let opts = { 
  'subscribeAll': true // Boolean | Subscribe to all Asterisk events. If provided, the applications listed will be subscribed to all events, effectively disabling the application specific subscriptions. Default is 'false'.
};
apiInstance.eventWebsocket(app, opts, (error, data, response) => {
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
 **app** | [**[String]**](String.md)| Applications to subscribe to. | 
 **subscribeAll** | **Boolean**| Subscribe to all Asterisk events. If provided, the applications listed will be subscribed to all events, effectively disabling the application specific subscriptions. Default is &#x27;false&#x27;. | [optional] 

### Return type

[**Message**](Message.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

<a name="userEvent"></a>
# **userEvent**
> userEvent(applicationeventName, opts)

Generate a user event.

### Example
```javascript
import AsteriskAri from 'asterisk_ari';

let apiInstance = new AsteriskAri.EventsApi();
let application = "application_example"; // String | The name of the application that will receive this event
let eventName = "eventName_example"; // String | Event name
let opts = { 
  'body': new AsteriskAri.Containers() // Containers | The "variables" key in the body object holds custom key/value pairs to add to the user event. Ex. { "variables": { "key": "value" } }
  'source': ["source_example"] // [String] | URI for event source (channel:{channelId}, bridge:{bridgeId}, endpoint:{tech}/{resource}, deviceState:{deviceName}
};
apiInstance.userEvent(applicationeventName, opts, (error, data, response) => {
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
 **application** | **String**| The name of the application that will receive this event | 
 **eventName** | **String**| Event name | 
 **body** | [**Containers**](Containers.md)| The &quot;variables&quot; key in the body object holds custom key/value pairs to add to the user event. Ex. { &quot;variables&quot;: { &quot;key&quot;: &quot;value&quot; } } | [optional] 
 **source** | [**[String]**](String.md)| URI for event source (channel:{channelId}, bridge:{bridgeId}, endpoint:{tech}/{resource}, deviceState:{deviceName} | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: */*
 - **Accept**: Not defined


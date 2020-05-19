# AsteriskAri.PlaybacksApi

All URIs are relative to *http://localhost:8088/ari*

Method | HTTP request | Description
------------- | ------------- | -------------
[**control**](PlaybacksApi.md#control) | **POST** /playbacks/{playbackId}/control | Control a playback.
[**getplayback**](PlaybacksApi.md#getplayback) | **GET** /playbacks/{playbackId} | Get a playback&#x27;s details.
[**stop**](PlaybacksApi.md#stop) | **DELETE** /playbacks/{playbackId} | Stop a playback.

<a name="control"></a>
# **control**
> control(playbackId, operation)

Control a playback.

### Example
```javascript
import AsteriskAri from 'asterisk_ari';

let apiInstance = new AsteriskAri.PlaybacksApi();
let playbackId = "playbackId_example"; // String | Playback's id
let operation = "operation_example"; // String | Operation to perform on the playback.

apiInstance.control(playbackId, operation, (error, data, response) => {
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
 **playbackId** | **String**| Playback&#x27;s id | 
 **operation** | **String**| Operation to perform on the playback. | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getplayback"></a>
# **getplayback**
> Playback getplayback(playbackId)

Get a playback&#x27;s details.

### Example
```javascript
import AsteriskAri from 'asterisk_ari';

let apiInstance = new AsteriskAri.PlaybacksApi();
let playbackId = "playbackId_example"; // String | Playback's id

apiInstance.getplayback(playbackId, (error, data, response) => {
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
 **playbackId** | **String**| Playback&#x27;s id | 

### Return type

[**Playback**](Playback.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

<a name="stop"></a>
# **stop**
> stop(playbackId)

Stop a playback.

### Example
```javascript
import AsteriskAri from 'asterisk_ari';

let apiInstance = new AsteriskAri.PlaybacksApi();
let playbackId = "playbackId_example"; // String | Playback's id

apiInstance.stop(playbackId, (error, data, response) => {
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
 **playbackId** | **String**| Playback&#x27;s id | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


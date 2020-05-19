# Localhost8088.RecordingsApi

All URIs are relative to *http://localhost:8088/ari*

Method | HTTP request | Description
------------- | ------------- | -------------
[**cancel**](RecordingsApi.md#cancel) | **DELETE** /recordings/live/{recordingName} | Stop a live recording and discard it.
[**copyStored**](RecordingsApi.md#copyStored) | **POST** /recordings/stored/{recordingName}/copy | Copy a stored recording.
[**deleteStored**](RecordingsApi.md#deleteStored) | **DELETE** /recordings/stored/{recordingName} | Delete a stored recording.
[**getLive**](RecordingsApi.md#getLive) | **GET** /recordings/live/{recordingName} | List live recordings.
[**getStored**](RecordingsApi.md#getStored) | **GET** /recordings/stored/{recordingName} | Get a stored recording&#x27;s details.
[**getStoredFile**](RecordingsApi.md#getStoredFile) | **GET** /recordings/stored/{recordingName}/file | Get the file associated with the stored recording.
[**listStored**](RecordingsApi.md#listStored) | **GET** /recordings/stored | List recordings that are complete.
[**muterecording**](RecordingsApi.md#muterecording) | **POST** /recordings/live/{recordingName}/mute | Mute a live recording.
[**pause**](RecordingsApi.md#pause) | **POST** /recordings/live/{recordingName}/pause | Pause a live recording.
[**stoprecording**](RecordingsApi.md#stoprecording) | **POST** /recordings/live/{recordingName}/stop | Stop a live recording and store it.
[**unmuterecording**](RecordingsApi.md#unmuterecording) | **DELETE** /recordings/live/{recordingName}/mute | Unmute a live recording.
[**unpause**](RecordingsApi.md#unpause) | **DELETE** /recordings/live/{recordingName}/pause | Unpause a live recording.

<a name="cancel"></a>
# **cancel**
> cancel(recordingName)

Stop a live recording and discard it.

### Example
```javascript
import Localhost8088 from 'localhost8088';

let apiInstance = new Localhost8088.RecordingsApi();
let recordingName = "recordingName_example"; // String | The name of the recording

apiInstance.cancel(recordingName, (error, data, response) => {
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
 **recordingName** | **String**| The name of the recording | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="copyStored"></a>
# **copyStored**
> StoredRecording copyStored(recordingName, destinationRecordingName)

Copy a stored recording.

### Example
```javascript
import Localhost8088 from 'localhost8088';

let apiInstance = new Localhost8088.RecordingsApi();
let recordingName = "recordingName_example"; // String | The name of the recording to copy
let destinationRecordingName = "destinationRecordingName_example"; // String | The destination name of the recording

apiInstance.copyStored(recordingName, destinationRecordingName, (error, data, response) => {
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
 **recordingName** | **String**| The name of the recording to copy | 
 **destinationRecordingName** | **String**| The destination name of the recording | 

### Return type

[**StoredRecording**](StoredRecording.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

<a name="deleteStored"></a>
# **deleteStored**
> deleteStored(recordingName)

Delete a stored recording.

### Example
```javascript
import Localhost8088 from 'localhost8088';

let apiInstance = new Localhost8088.RecordingsApi();
let recordingName = "recordingName_example"; // String | The name of the recording

apiInstance.deleteStored(recordingName, (error, data, response) => {
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
 **recordingName** | **String**| The name of the recording | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getLive"></a>
# **getLive**
> LiveRecording getLive(recordingName)

List live recordings.

### Example
```javascript
import Localhost8088 from 'localhost8088';

let apiInstance = new Localhost8088.RecordingsApi();
let recordingName = "recordingName_example"; // String | The name of the recording

apiInstance.getLive(recordingName, (error, data, response) => {
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
 **recordingName** | **String**| The name of the recording | 

### Return type

[**LiveRecording**](LiveRecording.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

<a name="getStored"></a>
# **getStored**
> StoredRecording getStored(recordingName)

Get a stored recording&#x27;s details.

### Example
```javascript
import Localhost8088 from 'localhost8088';

let apiInstance = new Localhost8088.RecordingsApi();
let recordingName = "recordingName_example"; // String | The name of the recording

apiInstance.getStored(recordingName, (error, data, response) => {
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
 **recordingName** | **String**| The name of the recording | 

### Return type

[**StoredRecording**](StoredRecording.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

<a name="getStoredFile"></a>
# **getStoredFile**
> File getStoredFile(recordingName)

Get the file associated with the stored recording.

### Example
```javascript
import Localhost8088 from 'localhost8088';

let apiInstance = new Localhost8088.RecordingsApi();
let recordingName = "recordingName_example"; // String | The name of the recording

apiInstance.getStoredFile(recordingName, (error, data, response) => {
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
 **recordingName** | **String**| The name of the recording | 

### Return type

**File**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

<a name="listStored"></a>
# **listStored**
> [StoredRecording] listStored()

List recordings that are complete.

### Example
```javascript
import Localhost8088 from 'localhost8088';

let apiInstance = new Localhost8088.RecordingsApi();
apiInstance.listStored((error, data, response) => {
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

[**[StoredRecording]**](StoredRecording.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

<a name="muterecording"></a>
# **muterecording**
> muterecording(recordingName)

Mute a live recording.

Muting a recording suspends silence detection, which will be restarted when the recording is unmuted.

### Example
```javascript
import Localhost8088 from 'localhost8088';

let apiInstance = new Localhost8088.RecordingsApi();
let recordingName = "recordingName_example"; // String | The name of the recording

apiInstance.muterecording(recordingName, (error, data, response) => {
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
 **recordingName** | **String**| The name of the recording | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="pause"></a>
# **pause**
> pause(recordingName)

Pause a live recording.

Pausing a recording suspends silence detection, which will be restarted when the recording is unpaused. Paused time is not included in the accounting for maxDurationSeconds.

### Example
```javascript
import Localhost8088 from 'localhost8088';

let apiInstance = new Localhost8088.RecordingsApi();
let recordingName = "recordingName_example"; // String | The name of the recording

apiInstance.pause(recordingName, (error, data, response) => {
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
 **recordingName** | **String**| The name of the recording | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="stoprecording"></a>
# **stoprecording**
> stoprecording(recordingName)

Stop a live recording and store it.

### Example
```javascript
import Localhost8088 from 'localhost8088';

let apiInstance = new Localhost8088.RecordingsApi();
let recordingName = "recordingName_example"; // String | The name of the recording

apiInstance.stoprecording(recordingName, (error, data, response) => {
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
 **recordingName** | **String**| The name of the recording | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="unmuterecording"></a>
# **unmuterecording**
> unmuterecording(recordingName)

Unmute a live recording.

### Example
```javascript
import Localhost8088 from 'localhost8088';

let apiInstance = new Localhost8088.RecordingsApi();
let recordingName = "recordingName_example"; // String | The name of the recording

apiInstance.unmuterecording(recordingName, (error, data, response) => {
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
 **recordingName** | **String**| The name of the recording | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="unpause"></a>
# **unpause**
> unpause(recordingName)

Unpause a live recording.

### Example
```javascript
import Localhost8088 from 'localhost8088';

let apiInstance = new Localhost8088.RecordingsApi();
let recordingName = "recordingName_example"; // String | The name of the recording

apiInstance.unpause(recordingName, (error, data, response) => {
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
 **recordingName** | **String**| The name of the recording | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


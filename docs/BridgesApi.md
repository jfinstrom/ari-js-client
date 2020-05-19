# Localhost8088.BridgesApi

All URIs are relative to *http://localhost:8088/ari*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addChannel**](BridgesApi.md#addChannel) | **POST** /bridges/{bridgeId}/addChannel | Add a channel to a bridge.
[**clearVideoSource**](BridgesApi.md#clearVideoSource) | **DELETE** /bridges/{bridgeId}/videoSource | Removes any explicit video source in a multi-party mixing bridge. This operation has no effect on bridges with two or fewer participants. When no explicit video source is set, talk detection will be used to determine the active video stream.
[**create**](BridgesApi.md#create) | **POST** /bridges | Create a new bridge.
[**createWithId**](BridgesApi.md#createWithId) | **POST** /bridges/{bridgeId} | Create a new bridge or updates an existing one.
[**destroy**](BridgesApi.md#destroy) | **DELETE** /bridges/{bridgeId} | Shut down a bridge.
[**getbridge**](BridgesApi.md#getbridge) | **GET** /bridges/{bridgeId} | Get bridge details.
[**listbridges**](BridgesApi.md#listbridges) | **GET** /bridges | List all active bridges in Asterisk.
[**play**](BridgesApi.md#play) | **POST** /bridges/{bridgeId}/play | Start playback of media on a bridge.
[**playWithId**](BridgesApi.md#playWithId) | **POST** /bridges/{bridgeId}/play/{playbackId} | Start playback of media on a bridge.
[**record**](BridgesApi.md#record) | **POST** /bridges/{bridgeId}/record | Start a recording.
[**removeChannel**](BridgesApi.md#removeChannel) | **POST** /bridges/{bridgeId}/removeChannel | Remove a channel from a bridge.
[**setVideoSource**](BridgesApi.md#setVideoSource) | **POST** /bridges/{bridgeId}/videoSource/{channelId} | Set a channel as the video source in a multi-party mixing bridge. This operation has no effect on bridges with two or fewer participants.
[**startMoh**](BridgesApi.md#startMoh) | **POST** /bridges/{bridgeId}/moh | Play music on hold to a bridge or change the MOH class that is playing.
[**stopMoh**](BridgesApi.md#stopMoh) | **DELETE** /bridges/{bridgeId}/moh | Stop playing music on hold to a bridge.

<a name="addChannel"></a>
# **addChannel**
> addChannel(bridgeId, channel, opts)

Add a channel to a bridge.

### Example
```javascript
import Localhost8088 from 'localhost8088';

let apiInstance = new Localhost8088.BridgesApi();
let bridgeId = "bridgeId_example"; // String | Bridge's id
let channel = ["channel_example"]; // [String] | Ids of channels to add to bridge
let opts = { 
  'role': "role_example", // String | Channel's role in the bridge
  'absorbDTMF': false, // Boolean | Absorb DTMF coming from this channel, preventing it to pass through to the bridge
  'mute': false, // Boolean | Mute audio from this channel, preventing it to pass through to the bridge
  'inhibitConnectedLineUpdates': false // Boolean | Do not present the identity of the newly connected channel to other bridge members
};
apiInstance.addChannel(bridgeId, channel, opts, (error, data, response) => {
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
 **bridgeId** | **String**| Bridge&#x27;s id | 
 **channel** | [**[String]**](String.md)| Ids of channels to add to bridge | 
 **role** | **String**| Channel&#x27;s role in the bridge | [optional] 
 **absorbDTMF** | **Boolean**| Absorb DTMF coming from this channel, preventing it to pass through to the bridge | [optional] [default to false]
 **mute** | **Boolean**| Mute audio from this channel, preventing it to pass through to the bridge | [optional] [default to false]
 **inhibitConnectedLineUpdates** | **Boolean**| Do not present the identity of the newly connected channel to other bridge members | [optional] [default to false]

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="clearVideoSource"></a>
# **clearVideoSource**
> clearVideoSource(bridgeId)

Removes any explicit video source in a multi-party mixing bridge. This operation has no effect on bridges with two or fewer participants. When no explicit video source is set, talk detection will be used to determine the active video stream.

### Example
```javascript
import Localhost8088 from 'localhost8088';

let apiInstance = new Localhost8088.BridgesApi();
let bridgeId = "bridgeId_example"; // String | Bridge's id

apiInstance.clearVideoSource(bridgeId, (error, data, response) => {
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
 **bridgeId** | **String**| Bridge&#x27;s id | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="create"></a>
# **create**
> Bridge create(opts)

Create a new bridge.

This bridge persists until it has been shut down, or Asterisk has been shut down.

### Example
```javascript
import Localhost8088 from 'localhost8088';

let apiInstance = new Localhost8088.BridgesApi();
let opts = { 
  'type': "type_example", // String | Comma separated list of bridge type attributes (mixing, holding, dtmf_events, proxy_media, video_sfu).
  'bridgeId': "bridgeId_example", // String | Unique ID to give to the bridge being created.
  'name': "name_example" // String | Name to give to the bridge being created.
};
apiInstance.create(opts, (error, data, response) => {
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
 **type** | **String**| Comma separated list of bridge type attributes (mixing, holding, dtmf_events, proxy_media, video_sfu). | [optional] 
 **bridgeId** | **String**| Unique ID to give to the bridge being created. | [optional] 
 **name** | **String**| Name to give to the bridge being created. | [optional] 

### Return type

[**Bridge**](Bridge.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

<a name="createWithId"></a>
# **createWithId**
> Bridge createWithId(bridgeId, opts)

Create a new bridge or updates an existing one.

This bridge persists until it has been shut down, or Asterisk has been shut down.

### Example
```javascript
import Localhost8088 from 'localhost8088';

let apiInstance = new Localhost8088.BridgesApi();
let bridgeId = "bridgeId_example"; // String | Unique ID to give to the bridge being created.
let opts = { 
  'type': "type_example", // String | Comma separated list of bridge type attributes (mixing, holding, dtmf_events, proxy_media, video_sfu) to set.
  'name': "name_example" // String | Set the name of the bridge.
};
apiInstance.createWithId(bridgeId, opts, (error, data, response) => {
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
 **bridgeId** | **String**| Unique ID to give to the bridge being created. | 
 **type** | **String**| Comma separated list of bridge type attributes (mixing, holding, dtmf_events, proxy_media, video_sfu) to set. | [optional] 
 **name** | **String**| Set the name of the bridge. | [optional] 

### Return type

[**Bridge**](Bridge.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

<a name="destroy"></a>
# **destroy**
> destroy(bridgeId)

Shut down a bridge.

If any channels are in this bridge, they will be removed and resume whatever they were doing beforehand.

### Example
```javascript
import Localhost8088 from 'localhost8088';

let apiInstance = new Localhost8088.BridgesApi();
let bridgeId = "bridgeId_example"; // String | Bridge's id

apiInstance.destroy(bridgeId, (error, data, response) => {
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
 **bridgeId** | **String**| Bridge&#x27;s id | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getbridge"></a>
# **getbridge**
> Bridge getbridge(bridgeId)

Get bridge details.

### Example
```javascript
import Localhost8088 from 'localhost8088';

let apiInstance = new Localhost8088.BridgesApi();
let bridgeId = "bridgeId_example"; // String | Bridge's id

apiInstance.getbridge(bridgeId, (error, data, response) => {
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
 **bridgeId** | **String**| Bridge&#x27;s id | 

### Return type

[**Bridge**](Bridge.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

<a name="listbridges"></a>
# **listbridges**
> [Bridge] listbridges()

List all active bridges in Asterisk.

### Example
```javascript
import Localhost8088 from 'localhost8088';

let apiInstance = new Localhost8088.BridgesApi();
apiInstance.listbridges((error, data, response) => {
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

[**[Bridge]**](Bridge.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

<a name="play"></a>
# **play**
> Playback play(bridgeId, media, opts)

Start playback of media on a bridge.

The media URI may be any of a number of URI&#x27;s. Currently sound:, recording:, number:, digits:, characters:, and tone: URI&#x27;s are supported. This operation creates a playback resource that can be used to control the playback of media (pause, rewind, fast forward, etc.)

### Example
```javascript
import Localhost8088 from 'localhost8088';

let apiInstance = new Localhost8088.BridgesApi();
let bridgeId = "bridgeId_example"; // String | Bridge's id
let media = ["media_example"]; // [String] | Media URIs to play.
let opts = { 
  'lang': "lang_example", // String | For sounds, selects language for sound.
  'offsetms': 0, // Number | Number of milliseconds to skip before playing. Only applies to the first URI if multiple media URIs are specified.
  'skipms': 3000, // Number | Number of milliseconds to skip for forward/reverse operations.
  'playbackId': "playbackId_example" // String | Playback Id.
};
apiInstance.play(bridgeId, media, opts, (error, data, response) => {
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
 **bridgeId** | **String**| Bridge&#x27;s id | 
 **media** | [**[String]**](String.md)| Media URIs to play. | 
 **lang** | **String**| For sounds, selects language for sound. | [optional] 
 **offsetms** | **Number**| Number of milliseconds to skip before playing. Only applies to the first URI if multiple media URIs are specified. | [optional] [default to 0]
 **skipms** | **Number**| Number of milliseconds to skip for forward/reverse operations. | [optional] [default to 3000]
 **playbackId** | **String**| Playback Id. | [optional] 

### Return type

[**Playback**](Playback.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

<a name="playWithId"></a>
# **playWithId**
> Playback playWithId(bridgeId, playbackId, media, opts)

Start playback of media on a bridge.

The media URI may be any of a number of URI&#x27;s. Currently sound:, recording:, number:, digits:, characters:, and tone: URI&#x27;s are supported. This operation creates a playback resource that can be used to control the playback of media (pause, rewind, fast forward, etc.)

### Example
```javascript
import Localhost8088 from 'localhost8088';

let apiInstance = new Localhost8088.BridgesApi();
let bridgeId = "bridgeId_example"; // String | Bridge's id
let playbackId = "playbackId_example"; // String | Playback ID.
let media = ["media_example"]; // [String] | Media URIs to play.
let opts = { 
  'lang': "lang_example", // String | For sounds, selects language for sound.
  'offsetms': 0, // Number | Number of milliseconds to skip before playing. Only applies to the first URI if multiple media URIs are specified.
  'skipms': 3000 // Number | Number of milliseconds to skip for forward/reverse operations.
};
apiInstance.playWithId(bridgeId, playbackId, media, opts, (error, data, response) => {
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
 **bridgeId** | **String**| Bridge&#x27;s id | 
 **playbackId** | **String**| Playback ID. | 
 **media** | [**[String]**](String.md)| Media URIs to play. | 
 **lang** | **String**| For sounds, selects language for sound. | [optional] 
 **offsetms** | **Number**| Number of milliseconds to skip before playing. Only applies to the first URI if multiple media URIs are specified. | [optional] [default to 0]
 **skipms** | **Number**| Number of milliseconds to skip for forward/reverse operations. | [optional] [default to 3000]

### Return type

[**Playback**](Playback.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

<a name="record"></a>
# **record**
> LiveRecording record(bridgeId, name, format, opts)

Start a recording.

This records the mixed audio from all channels participating in this bridge.

### Example
```javascript
import Localhost8088 from 'localhost8088';

let apiInstance = new Localhost8088.BridgesApi();
let bridgeId = "bridgeId_example"; // String | Bridge's id
let name = "name_example"; // String | Recording's filename
let format = "format_example"; // String | Format to encode audio in
let opts = { 
  'maxDurationSeconds': 0, // Number | Maximum duration of the recording, in seconds. 0 for no limit.
  'maxSilenceSeconds': 0, // Number | Maximum duration of silence, in seconds. 0 for no limit.
  'ifExists': "fail", // String | Action to take if a recording with the same name already exists.
  'beep': false, // Boolean | Play beep when recording begins
  'terminateOn': "none" // String | DTMF input to terminate recording.
};
apiInstance.record(bridgeId, name, format, opts, (error, data, response) => {
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
 **bridgeId** | **String**| Bridge&#x27;s id | 
 **name** | **String**| Recording&#x27;s filename | 
 **format** | **String**| Format to encode audio in | 
 **maxDurationSeconds** | **Number**| Maximum duration of the recording, in seconds. 0 for no limit. | [optional] [default to 0]
 **maxSilenceSeconds** | **Number**| Maximum duration of silence, in seconds. 0 for no limit. | [optional] [default to 0]
 **ifExists** | **String**| Action to take if a recording with the same name already exists. | [optional] [default to fail]
 **beep** | **Boolean**| Play beep when recording begins | [optional] [default to false]
 **terminateOn** | **String**| DTMF input to terminate recording. | [optional] [default to none]

### Return type

[**LiveRecording**](LiveRecording.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

<a name="removeChannel"></a>
# **removeChannel**
> removeChannel(bridgeId, channel)

Remove a channel from a bridge.

### Example
```javascript
import Localhost8088 from 'localhost8088';

let apiInstance = new Localhost8088.BridgesApi();
let bridgeId = "bridgeId_example"; // String | Bridge's id
let channel = ["channel_example"]; // [String] | Ids of channels to remove from bridge

apiInstance.removeChannel(bridgeId, channel, (error, data, response) => {
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
 **bridgeId** | **String**| Bridge&#x27;s id | 
 **channel** | [**[String]**](String.md)| Ids of channels to remove from bridge | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="setVideoSource"></a>
# **setVideoSource**
> setVideoSource(bridgeId, channelId)

Set a channel as the video source in a multi-party mixing bridge. This operation has no effect on bridges with two or fewer participants.

### Example
```javascript
import Localhost8088 from 'localhost8088';

let apiInstance = new Localhost8088.BridgesApi();
let bridgeId = "bridgeId_example"; // String | Bridge's id
let channelId = "channelId_example"; // String | Channel's id

apiInstance.setVideoSource(bridgeId, channelId, (error, data, response) => {
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
 **bridgeId** | **String**| Bridge&#x27;s id | 
 **channelId** | **String**| Channel&#x27;s id | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="startMoh"></a>
# **startMoh**
> startMoh(bridgeId, opts)

Play music on hold to a bridge or change the MOH class that is playing.

### Example
```javascript
import Localhost8088 from 'localhost8088';

let apiInstance = new Localhost8088.BridgesApi();
let bridgeId = "bridgeId_example"; // String | Bridge's id
let opts = { 
  'mohClass': "mohClass_example" // String | Channel's id
};
apiInstance.startMoh(bridgeId, opts, (error, data, response) => {
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
 **bridgeId** | **String**| Bridge&#x27;s id | 
 **mohClass** | **String**| Channel&#x27;s id | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="stopMoh"></a>
# **stopMoh**
> stopMoh(bridgeId)

Stop playing music on hold to a bridge.

This will only stop music on hold being played via POST bridges/{bridgeId}/moh.

### Example
```javascript
import Localhost8088 from 'localhost8088';

let apiInstance = new Localhost8088.BridgesApi();
let bridgeId = "bridgeId_example"; // String | Bridge's id

apiInstance.stopMoh(bridgeId, (error, data, response) => {
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
 **bridgeId** | **String**| Bridge&#x27;s id | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


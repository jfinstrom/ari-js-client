# Localhost8088.ChannelsApi

All URIs are relative to *http://localhost:8088/ari*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addMoh**](ChannelsApi.md#addMoh) | **POST** /channels/{channelId}/moh | Play music on hold to a channel.
[**answer**](ChannelsApi.md#answer) | **POST** /channels/{channelId}/answer | Answer a channel.
[**continueInDialplan**](ChannelsApi.md#continueInDialplan) | **POST** /channels/{channelId}/continue | Exit application; continue execution in the dialplan.
[**createchannel**](ChannelsApi.md#createchannel) | **POST** /channels/create | Create channel.
[**deletemoh**](ChannelsApi.md#deletemoh) | **DELETE** /channels/{channelId}/moh | Stop playing music on hold to a channel.
[**dial**](ChannelsApi.md#dial) | **POST** /channels/{channelId}/dial | Dial a created channel.
[**externalMedia**](ChannelsApi.md#externalMedia) | **POST** /channels/externalMedia | Start an External Media session.
[**getChannelVar**](ChannelsApi.md#getChannelVar) | **GET** /channels/{channelId}/variable | Get the value of a channel variable or function.
[**getchannel**](ChannelsApi.md#getchannel) | **GET** /channels/{channelId} | Channel details.
[**hangup**](ChannelsApi.md#hangup) | **DELETE** /channels/{channelId} | Delete (i.e. hangup) a channel.
[**hold**](ChannelsApi.md#hold) | **POST** /channels/{channelId}/hold | Hold a channel.
[**listchannels**](ChannelsApi.md#listchannels) | **GET** /channels | List all active channels in Asterisk.
[**move**](ChannelsApi.md#move) | **POST** /channels/{channelId}/move | Move the channel from one Stasis application to another.
[**mute**](ChannelsApi.md#mute) | **POST** /channels/{channelId}/mute | Mute a channel.
[**originate**](ChannelsApi.md#originate) | **POST** /channels | Create a new channel (originate).
[**originateWithId**](ChannelsApi.md#originateWithId) | **POST** /channels/{channelId} | Create a new channel (originate with id).
[**playSoundWithId**](ChannelsApi.md#playSoundWithId) | **POST** /channels/{channelId}/play/{playbackId} | Start playback of media and specify the playbackId.
[**playsound**](ChannelsApi.md#playsound) | **POST** /channels/{channelId}/play | Start playback of media.
[**recordchannel**](ChannelsApi.md#recordchannel) | **POST** /channels/{channelId}/record | Start a recording.
[**redirect**](ChannelsApi.md#redirect) | **POST** /channels/{channelId}/redirect | Redirect the channel to a different location.
[**ring**](ChannelsApi.md#ring) | **POST** /channels/{channelId}/ring | Indicate ringing to a channel.
[**ringStop**](ChannelsApi.md#ringStop) | **DELETE** /channels/{channelId}/ring | Stop ringing indication on a channel if locally generated.
[**rtpstatistics**](ChannelsApi.md#rtpstatistics) | **GET** /channels/{channelId}/rtp_statistics | RTP stats on a channel.
[**sendDTMF**](ChannelsApi.md#sendDTMF) | **POST** /channels/{channelId}/dtmf | Send provided DTMF to a given channel.
[**setChannelVar**](ChannelsApi.md#setChannelVar) | **POST** /channels/{channelId}/variable | Set the value of a channel variable or function.
[**snoopChannel**](ChannelsApi.md#snoopChannel) | **POST** /channels/{channelId}/snoop | Start snooping.
[**snoopChannelWithId**](ChannelsApi.md#snoopChannelWithId) | **POST** /channels/{channelId}/snoop/{snoopId} | Start snooping.
[**startSilence**](ChannelsApi.md#startSilence) | **POST** /channels/{channelId}/silence | Play silence to a channel.
[**stopSilence**](ChannelsApi.md#stopSilence) | **DELETE** /channels/{channelId}/silence | Stop playing silence to a channel.
[**unhold**](ChannelsApi.md#unhold) | **DELETE** /channels/{channelId}/hold | Remove a channel from hold.
[**unmute**](ChannelsApi.md#unmute) | **DELETE** /channels/{channelId}/mute | Unmute a channel.

<a name="addMoh"></a>
# **addMoh**
> addMoh(channelId, opts)

Play music on hold to a channel.

Using media operations such as /play on a channel playing MOH in this manner will suspend MOH without resuming automatically. If continuing music on hold is desired, the stasis application must reinitiate music on hold.

### Example
```javascript
import Localhost8088 from 'localhost8088';

let apiInstance = new Localhost8088.ChannelsApi();
let channelId = "channelId_example"; // String | Channel's id
let opts = { 
  'mohClass': "mohClass_example" // String | Music on hold class to use
};
apiInstance.addMoh(channelId, opts, (error, data, response) => {
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
 **channelId** | **String**| Channel&#x27;s id | 
 **mohClass** | **String**| Music on hold class to use | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="answer"></a>
# **answer**
> answer(channelId)

Answer a channel.

### Example
```javascript
import Localhost8088 from 'localhost8088';

let apiInstance = new Localhost8088.ChannelsApi();
let channelId = "channelId_example"; // String | Channel's id

apiInstance.answer(channelId, (error, data, response) => {
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
 **channelId** | **String**| Channel&#x27;s id | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="continueInDialplan"></a>
# **continueInDialplan**
> continueInDialplan(channelId, opts)

Exit application; continue execution in the dialplan.

### Example
```javascript
import Localhost8088 from 'localhost8088';

let apiInstance = new Localhost8088.ChannelsApi();
let channelId = "channelId_example"; // String | Channel's id
let opts = { 
  'context': "context_example", // String | The context to continue to.
  'extension': "extension_example", // String | The extension to continue to.
  'priority': 56, // Number | The priority to continue to.
  'label': "label_example" // String | The label to continue to - will supersede 'priority' if both are provided.
};
apiInstance.continueInDialplan(channelId, opts, (error, data, response) => {
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
 **channelId** | **String**| Channel&#x27;s id | 
 **context** | **String**| The context to continue to. | [optional] 
 **extension** | **String**| The extension to continue to. | [optional] 
 **priority** | **Number**| The priority to continue to. | [optional] 
 **label** | **String**| The label to continue to - will supersede &#x27;priority&#x27; if both are provided. | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="createchannel"></a>
# **createchannel**
> Channel createchannel(endpointapp, opts)

Create channel.

### Example
```javascript
import Localhost8088 from 'localhost8088';

let apiInstance = new Localhost8088.ChannelsApi();
let endpoint = "endpoint_example"; // String | Endpoint for channel communication
let app = "app_example"; // String | Stasis Application to place channel into
let opts = { 
  'body': new Localhost8088.Containers() // Containers | The "variables" key in the body object holds variable key/value pairs to set on the channel on creation. Other keys in the body object are interpreted as query parameters. Ex. { "endpoint": "SIP/Alice", "variables": { "CALLERID(name)": "Alice" } }
  'appArgs': "appArgs_example" // String | The application arguments to pass to the Stasis application provided by 'app'. Mutually exclusive with 'context', 'extension', 'priority', and 'label'.
  'channelId': "channelId_example" // String | The unique id to assign the channel on creation.
  'otherChannelId': "otherChannelId_example" // String | The unique id to assign the second channel when using local channels.
  'originator': "originator_example" // String | Unique ID of the calling channel
  'formats': "formats_example" // String | The format name capability list to use if originator is not specified. Ex. \"ulaw,slin16\".  Format names can be found with \"core show codecs\".
};
apiInstance.createchannel(endpointapp, opts, (error, data, response) => {
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
 **endpoint** | **String**| Endpoint for channel communication | 
 **app** | **String**| Stasis Application to place channel into | 
 **body** | [**Containers**](Containers.md)| The &quot;variables&quot; key in the body object holds variable key/value pairs to set on the channel on creation. Other keys in the body object are interpreted as query parameters. Ex. { &quot;endpoint&quot;: &quot;SIP/Alice&quot;, &quot;variables&quot;: { &quot;CALLERID(name)&quot;: &quot;Alice&quot; } } | [optional] 
 **appArgs** | **String**| The application arguments to pass to the Stasis application provided by &#x27;app&#x27;. Mutually exclusive with &#x27;context&#x27;, &#x27;extension&#x27;, &#x27;priority&#x27;, and &#x27;label&#x27;. | [optional] 
 **channelId** | **String**| The unique id to assign the channel on creation. | [optional] 
 **otherChannelId** | **String**| The unique id to assign the second channel when using local channels. | [optional] 
 **originator** | **String**| Unique ID of the calling channel | [optional] 
 **formats** | **String**| The format name capability list to use if originator is not specified. Ex. \&quot;ulaw,slin16\&quot;.  Format names can be found with \&quot;core show codecs\&quot;. | [optional] 

### Return type

[**Channel**](Channel.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: */*
 - **Accept**: */*

<a name="deletemoh"></a>
# **deletemoh**
> deletemoh(channelId)

Stop playing music on hold to a channel.

### Example
```javascript
import Localhost8088 from 'localhost8088';

let apiInstance = new Localhost8088.ChannelsApi();
let channelId = "channelId_example"; // String | Channel's id

apiInstance.deletemoh(channelId, (error, data, response) => {
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
 **channelId** | **String**| Channel&#x27;s id | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="dial"></a>
# **dial**
> dial(channelId, opts)

Dial a created channel.

### Example
```javascript
import Localhost8088 from 'localhost8088';

let apiInstance = new Localhost8088.ChannelsApi();
let channelId = "channelId_example"; // String | Channel's id
let opts = { 
  'caller': "caller_example", // String | Channel ID of caller
  'timeout': 0 // Number | Dial timeout
};
apiInstance.dial(channelId, opts, (error, data, response) => {
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
 **channelId** | **String**| Channel&#x27;s id | 
 **caller** | **String**| Channel ID of caller | [optional] 
 **timeout** | **Number**| Dial timeout | [optional] [default to 0]

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="externalMedia"></a>
# **externalMedia**
> Channel externalMedia(appexternalHostformat, opts)

Start an External Media session.

Create a channel to an External Media source/sink.

### Example
```javascript
import Localhost8088 from 'localhost8088';

let apiInstance = new Localhost8088.ChannelsApi();
let app = "app_example"; // String | Stasis Application to place channel into
let externalHost = "externalHost_example"; // String | Hostname/ip:port of external host
let format = "format_example"; // String | Format to encode audio in
let opts = { 
  'body': new Localhost8088.Containers() // Containers | The "variables" key in the body object holds variable key/value pairs to set on the channel on creation. Other keys in the body object are interpreted as query parameters. Ex. { "endpoint": "SIP/Alice", "variables": { "CALLERID(name)": "Alice" } }
  'channelId': "channelId_example" // String | The unique id to assign the channel on creation.
  'encapsulation': "rtp" // String | Payload encapsulation protocol
  'transport': "udp" // String | Transport protocol
  'connectionType': "client" // String | Connection type (client/server)
  'direction': "both" // String | External media direction
  'data': "data_example" // String | An arbitrary data field
};
apiInstance.externalMedia(appexternalHostformat, opts, (error, data, response) => {
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
 **app** | **String**| Stasis Application to place channel into | 
 **externalHost** | **String**| Hostname/ip:port of external host | 
 **format** | **String**| Format to encode audio in | 
 **body** | [**Containers**](Containers.md)| The &quot;variables&quot; key in the body object holds variable key/value pairs to set on the channel on creation. Other keys in the body object are interpreted as query parameters. Ex. { &quot;endpoint&quot;: &quot;SIP/Alice&quot;, &quot;variables&quot;: { &quot;CALLERID(name)&quot;: &quot;Alice&quot; } } | [optional] 
 **channelId** | **String**| The unique id to assign the channel on creation. | [optional] 
 **encapsulation** | **String**| Payload encapsulation protocol | [optional] [default to rtp]
 **transport** | **String**| Transport protocol | [optional] [default to udp]
 **connectionType** | **String**| Connection type (client/server) | [optional] [default to client]
 **direction** | **String**| External media direction | [optional] [default to both]
 **data** | **String**| An arbitrary data field | [optional] 

### Return type

[**Channel**](Channel.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: */*
 - **Accept**: */*

<a name="getChannelVar"></a>
# **getChannelVar**
> Variable getChannelVar(channelId, variable)

Get the value of a channel variable or function.

### Example
```javascript
import Localhost8088 from 'localhost8088';

let apiInstance = new Localhost8088.ChannelsApi();
let channelId = "channelId_example"; // String | Channel's id
let variable = "variable_example"; // String | The channel variable or function to get

apiInstance.getChannelVar(channelId, variable, (error, data, response) => {
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
 **channelId** | **String**| Channel&#x27;s id | 
 **variable** | **String**| The channel variable or function to get | 

### Return type

[**Variable**](Variable.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

<a name="getchannel"></a>
# **getchannel**
> Channel getchannel(channelId)

Channel details.

### Example
```javascript
import Localhost8088 from 'localhost8088';

let apiInstance = new Localhost8088.ChannelsApi();
let channelId = "channelId_example"; // String | Channel's id

apiInstance.getchannel(channelId, (error, data, response) => {
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
 **channelId** | **String**| Channel&#x27;s id | 

### Return type

[**Channel**](Channel.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

<a name="hangup"></a>
# **hangup**
> hangup(channelId, opts)

Delete (i.e. hangup) a channel.

### Example
```javascript
import Localhost8088 from 'localhost8088';

let apiInstance = new Localhost8088.ChannelsApi();
let channelId = "channelId_example"; // String | Channel's id
let opts = { 
  'reasonCode': "reasonCode_example", // String | The reason code for hanging up the channel for detail use. Mutually exclusive with 'reason'. See detail hangup codes at here. https://wiki.asterisk.org/wiki/display/AST/Hangup+Cause+Mappings
  'reason': "reason_example" // String | Reason for hanging up the channel for simple use. Mutually exclusive with 'reason_code'.
};
apiInstance.hangup(channelId, opts, (error, data, response) => {
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
 **channelId** | **String**| Channel&#x27;s id | 
 **reasonCode** | **String**| The reason code for hanging up the channel for detail use. Mutually exclusive with &#x27;reason&#x27;. See detail hangup codes at here. https://wiki.asterisk.org/wiki/display/AST/Hangup+Cause+Mappings | [optional] 
 **reason** | **String**| Reason for hanging up the channel for simple use. Mutually exclusive with &#x27;reason_code&#x27;. | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="hold"></a>
# **hold**
> hold(channelId)

Hold a channel.

### Example
```javascript
import Localhost8088 from 'localhost8088';

let apiInstance = new Localhost8088.ChannelsApi();
let channelId = "channelId_example"; // String | Channel's id

apiInstance.hold(channelId, (error, data, response) => {
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
 **channelId** | **String**| Channel&#x27;s id | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="listchannels"></a>
# **listchannels**
> [Channel] listchannels()

List all active channels in Asterisk.

### Example
```javascript
import Localhost8088 from 'localhost8088';

let apiInstance = new Localhost8088.ChannelsApi();
apiInstance.listchannels((error, data, response) => {
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

[**[Channel]**](Channel.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

<a name="move"></a>
# **move**
> move(channelId, app, opts)

Move the channel from one Stasis application to another.

### Example
```javascript
import Localhost8088 from 'localhost8088';

let apiInstance = new Localhost8088.ChannelsApi();
let channelId = "channelId_example"; // String | Channel's id
let app = "app_example"; // String | The channel will be passed to this Stasis application.
let opts = { 
  'appArgs': "appArgs_example" // String | The application arguments to pass to the Stasis application provided by 'app'.
};
apiInstance.move(channelId, app, opts, (error, data, response) => {
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
 **channelId** | **String**| Channel&#x27;s id | 
 **app** | **String**| The channel will be passed to this Stasis application. | 
 **appArgs** | **String**| The application arguments to pass to the Stasis application provided by &#x27;app&#x27;. | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="mute"></a>
# **mute**
> mute(channelId, opts)

Mute a channel.

### Example
```javascript
import Localhost8088 from 'localhost8088';

let apiInstance = new Localhost8088.ChannelsApi();
let channelId = "channelId_example"; // String | Channel's id
let opts = { 
  'direction': "both" // String | Direction in which to mute audio
};
apiInstance.mute(channelId, opts, (error, data, response) => {
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
 **channelId** | **String**| Channel&#x27;s id | 
 **direction** | **String**| Direction in which to mute audio | [optional] [default to both]

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="originate"></a>
# **originate**
> Channel originate(endpoint, opts)

Create a new channel (originate).

The new channel is created immediately and a snapshot of it returned. If a Stasis application is provided it will be automatically subscribed to the originated channel for further events and updates.

### Example
```javascript
import Localhost8088 from 'localhost8088';

let apiInstance = new Localhost8088.ChannelsApi();
let endpoint = "endpoint_example"; // String | Endpoint to call.
let opts = { 
  'body': new Localhost8088.Containers() // Containers | The "variables" key in the body object holds variable key/value pairs to set on the channel on creation. Other keys in the body object are interpreted as query parameters. Ex. { "endpoint": "SIP/Alice", "variables": { "CALLERID(name)": "Alice" } }
  'extension': "extension_example" // String | The extension to dial after the endpoint answers. Mutually exclusive with 'app'.
  'context': "context_example" // String | The context to dial after the endpoint answers. If omitted, uses 'default'. Mutually exclusive with 'app'.
  'priority': 789 // Number | The priority to dial after the endpoint answers. If omitted, uses 1. Mutually exclusive with 'app'.
  'label': "label_example" // String | The label to dial after the endpoint answers. Will supersede 'priority' if provided. Mutually exclusive with 'app'.
  'app': "app_example" // String | The application that is subscribed to the originated channel. When the channel is answered, it will be passed to this Stasis application. Mutually exclusive with 'context', 'extension', 'priority', and 'label'.
  'appArgs': "appArgs_example" // String | The application arguments to pass to the Stasis application provided by 'app'. Mutually exclusive with 'context', 'extension', 'priority', and 'label'.
  'callerId': "callerId_example" // String | CallerID to use when dialing the endpoint or extension.
  'timeout': 30 // Number | Timeout (in seconds) before giving up dialing, or -1 for no timeout.
  'channelId': "channelId_example" // String | The unique id to assign the channel on creation.
  'otherChannelId': "otherChannelId_example" // String | The unique id to assign the second channel when using local channels.
  'originator': "originator_example" // String | The unique id of the channel which is originating this one.
  'formats': "formats_example" // String | The format name capability list to use if originator is not specified. Ex. \"ulaw,slin16\".  Format names can be found with \"core show codecs\".
};
apiInstance.originate(endpoint, opts, (error, data, response) => {
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
 **endpoint** | **String**| Endpoint to call. | 
 **body** | [**Containers**](Containers.md)| The &quot;variables&quot; key in the body object holds variable key/value pairs to set on the channel on creation. Other keys in the body object are interpreted as query parameters. Ex. { &quot;endpoint&quot;: &quot;SIP/Alice&quot;, &quot;variables&quot;: { &quot;CALLERID(name)&quot;: &quot;Alice&quot; } } | [optional] 
 **extension** | **String**| The extension to dial after the endpoint answers. Mutually exclusive with &#x27;app&#x27;. | [optional] 
 **context** | **String**| The context to dial after the endpoint answers. If omitted, uses &#x27;default&#x27;. Mutually exclusive with &#x27;app&#x27;. | [optional] 
 **priority** | **Number**| The priority to dial after the endpoint answers. If omitted, uses 1. Mutually exclusive with &#x27;app&#x27;. | [optional] 
 **label** | **String**| The label to dial after the endpoint answers. Will supersede &#x27;priority&#x27; if provided. Mutually exclusive with &#x27;app&#x27;. | [optional] 
 **app** | **String**| The application that is subscribed to the originated channel. When the channel is answered, it will be passed to this Stasis application. Mutually exclusive with &#x27;context&#x27;, &#x27;extension&#x27;, &#x27;priority&#x27;, and &#x27;label&#x27;. | [optional] 
 **appArgs** | **String**| The application arguments to pass to the Stasis application provided by &#x27;app&#x27;. Mutually exclusive with &#x27;context&#x27;, &#x27;extension&#x27;, &#x27;priority&#x27;, and &#x27;label&#x27;. | [optional] 
 **callerId** | **String**| CallerID to use when dialing the endpoint or extension. | [optional] 
 **timeout** | **Number**| Timeout (in seconds) before giving up dialing, or -1 for no timeout. | [optional] [default to 30]
 **channelId** | **String**| The unique id to assign the channel on creation. | [optional] 
 **otherChannelId** | **String**| The unique id to assign the second channel when using local channels. | [optional] 
 **originator** | **String**| The unique id of the channel which is originating this one. | [optional] 
 **formats** | **String**| The format name capability list to use if originator is not specified. Ex. \&quot;ulaw,slin16\&quot;.  Format names can be found with \&quot;core show codecs\&quot;. | [optional] 

### Return type

[**Channel**](Channel.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: */*
 - **Accept**: */*

<a name="originateWithId"></a>
# **originateWithId**
> Channel originateWithId(endpointchannelId, opts)

Create a new channel (originate with id).

The new channel is created immediately and a snapshot of it returned. If a Stasis application is provided it will be automatically subscribed to the originated channel for further events and updates.

### Example
```javascript
import Localhost8088 from 'localhost8088';

let apiInstance = new Localhost8088.ChannelsApi();
let endpoint = "endpoint_example"; // String | Endpoint to call.
let channelId = "channelId_example"; // String | The unique id to assign the channel on creation.
let opts = { 
  'body': new Localhost8088.Containers() // Containers | The "variables" key in the body object holds variable key/value pairs to set on the channel on creation. Other keys in the body object are interpreted as query parameters. Ex. { "endpoint": "SIP/Alice", "variables": { "CALLERID(name)": "Alice" } }
  'extension': "extension_example" // String | The extension to dial after the endpoint answers. Mutually exclusive with 'app'.
  'context': "context_example" // String | The context to dial after the endpoint answers. If omitted, uses 'default'. Mutually exclusive with 'app'.
  'priority': 789 // Number | The priority to dial after the endpoint answers. If omitted, uses 1. Mutually exclusive with 'app'.
  'label': "label_example" // String | The label to dial after the endpoint answers. Will supersede 'priority' if provided. Mutually exclusive with 'app'.
  'app': "app_example" // String | The application that is subscribed to the originated channel. When the channel is answered, it will be passed to this Stasis application. Mutually exclusive with 'context', 'extension', 'priority', and 'label'.
  'appArgs': "appArgs_example" // String | The application arguments to pass to the Stasis application provided by 'app'. Mutually exclusive with 'context', 'extension', 'priority', and 'label'.
  'callerId': "callerId_example" // String | CallerID to use when dialing the endpoint or extension.
  'timeout': 30 // Number | Timeout (in seconds) before giving up dialing, or -1 for no timeout.
  'otherChannelId': "otherChannelId_example" // String | The unique id to assign the second channel when using local channels.
  'originator': "originator_example" // String | The unique id of the channel which is originating this one.
  'formats': "formats_example" // String | The format name capability list to use if originator is not specified. Ex. \"ulaw,slin16\".  Format names can be found with \"core show codecs\".
};
apiInstance.originateWithId(endpointchannelId, opts, (error, data, response) => {
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
 **endpoint** | **String**| Endpoint to call. | 
 **channelId** | **String**| The unique id to assign the channel on creation. | 
 **body** | [**Containers**](Containers.md)| The &quot;variables&quot; key in the body object holds variable key/value pairs to set on the channel on creation. Other keys in the body object are interpreted as query parameters. Ex. { &quot;endpoint&quot;: &quot;SIP/Alice&quot;, &quot;variables&quot;: { &quot;CALLERID(name)&quot;: &quot;Alice&quot; } } | [optional] 
 **extension** | **String**| The extension to dial after the endpoint answers. Mutually exclusive with &#x27;app&#x27;. | [optional] 
 **context** | **String**| The context to dial after the endpoint answers. If omitted, uses &#x27;default&#x27;. Mutually exclusive with &#x27;app&#x27;. | [optional] 
 **priority** | **Number**| The priority to dial after the endpoint answers. If omitted, uses 1. Mutually exclusive with &#x27;app&#x27;. | [optional] 
 **label** | **String**| The label to dial after the endpoint answers. Will supersede &#x27;priority&#x27; if provided. Mutually exclusive with &#x27;app&#x27;. | [optional] 
 **app** | **String**| The application that is subscribed to the originated channel. When the channel is answered, it will be passed to this Stasis application. Mutually exclusive with &#x27;context&#x27;, &#x27;extension&#x27;, &#x27;priority&#x27;, and &#x27;label&#x27;. | [optional] 
 **appArgs** | **String**| The application arguments to pass to the Stasis application provided by &#x27;app&#x27;. Mutually exclusive with &#x27;context&#x27;, &#x27;extension&#x27;, &#x27;priority&#x27;, and &#x27;label&#x27;. | [optional] 
 **callerId** | **String**| CallerID to use when dialing the endpoint or extension. | [optional] 
 **timeout** | **Number**| Timeout (in seconds) before giving up dialing, or -1 for no timeout. | [optional] [default to 30]
 **otherChannelId** | **String**| The unique id to assign the second channel when using local channels. | [optional] 
 **originator** | **String**| The unique id of the channel which is originating this one. | [optional] 
 **formats** | **String**| The format name capability list to use if originator is not specified. Ex. \&quot;ulaw,slin16\&quot;.  Format names can be found with \&quot;core show codecs\&quot;. | [optional] 

### Return type

[**Channel**](Channel.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: */*
 - **Accept**: */*

<a name="playSoundWithId"></a>
# **playSoundWithId**
> Playback playSoundWithId(channelId, playbackId, media, opts)

Start playback of media and specify the playbackId.

The media URI may be any of a number of URI&#x27;s. Currently sound:, recording:, number:, digits:, characters:, and tone: URI&#x27;s are supported. This operation creates a playback resource that can be used to control the playback of media (pause, rewind, fast forward, etc.)

### Example
```javascript
import Localhost8088 from 'localhost8088';

let apiInstance = new Localhost8088.ChannelsApi();
let channelId = "channelId_example"; // String | Channel's id
let playbackId = "playbackId_example"; // String | Playback ID.
let media = ["media_example"]; // [String] | Media URIs to play.
let opts = { 
  'lang': "lang_example", // String | For sounds, selects language for sound.
  'offsetms': 56, // Number | Number of milliseconds to skip before playing. Only applies to the first URI if multiple media URIs are specified.
  'skipms': 3000 // Number | Number of milliseconds to skip for forward/reverse operations.
};
apiInstance.playSoundWithId(channelId, playbackId, media, opts, (error, data, response) => {
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
 **channelId** | **String**| Channel&#x27;s id | 
 **playbackId** | **String**| Playback ID. | 
 **media** | [**[String]**](String.md)| Media URIs to play. | 
 **lang** | **String**| For sounds, selects language for sound. | [optional] 
 **offsetms** | **Number**| Number of milliseconds to skip before playing. Only applies to the first URI if multiple media URIs are specified. | [optional] 
 **skipms** | **Number**| Number of milliseconds to skip for forward/reverse operations. | [optional] [default to 3000]

### Return type

[**Playback**](Playback.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

<a name="playsound"></a>
# **playsound**
> Playback playsound(channelId, media, opts)

Start playback of media.

The media URI may be any of a number of URI&#x27;s. Currently sound:, recording:, number:, digits:, characters:, and tone: URI&#x27;s are supported. This operation creates a playback resource that can be used to control the playback of media (pause, rewind, fast forward, etc.)

### Example
```javascript
import Localhost8088 from 'localhost8088';

let apiInstance = new Localhost8088.ChannelsApi();
let channelId = "channelId_example"; // String | Channel's id
let media = ["media_example"]; // [String] | Media URIs to play.
let opts = { 
  'lang': "lang_example", // String | For sounds, selects language for sound.
  'offsetms': 56, // Number | Number of milliseconds to skip before playing. Only applies to the first URI if multiple media URIs are specified.
  'skipms': 3000, // Number | Number of milliseconds to skip for forward/reverse operations.
  'playbackId': "playbackId_example" // String | Playback ID.
};
apiInstance.playsound(channelId, media, opts, (error, data, response) => {
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
 **channelId** | **String**| Channel&#x27;s id | 
 **media** | [**[String]**](String.md)| Media URIs to play. | 
 **lang** | **String**| For sounds, selects language for sound. | [optional] 
 **offsetms** | **Number**| Number of milliseconds to skip before playing. Only applies to the first URI if multiple media URIs are specified. | [optional] 
 **skipms** | **Number**| Number of milliseconds to skip for forward/reverse operations. | [optional] [default to 3000]
 **playbackId** | **String**| Playback ID. | [optional] 

### Return type

[**Playback**](Playback.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

<a name="recordchannel"></a>
# **recordchannel**
> LiveRecording recordchannel(channelId, name, format, opts)

Start a recording.

Record audio from a channel. Note that this will not capture audio sent to the channel. The bridge itself has a record feature if that&#x27;s what you want.

### Example
```javascript
import Localhost8088 from 'localhost8088';

let apiInstance = new Localhost8088.ChannelsApi();
let channelId = "channelId_example"; // String | Channel's id
let name = "name_example"; // String | Recording's filename
let format = "format_example"; // String | Format to encode audio in
let opts = { 
  'maxDurationSeconds': 0, // Number | Maximum duration of the recording, in seconds. 0 for no limit
  'maxSilenceSeconds': 0, // Number | Maximum duration of silence, in seconds. 0 for no limit
  'ifExists': "fail", // String | Action to take if a recording with the same name already exists.
  'beep': false, // Boolean | Play beep when recording begins
  'terminateOn': "none" // String | DTMF input to terminate recording
};
apiInstance.recordchannel(channelId, name, format, opts, (error, data, response) => {
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
 **channelId** | **String**| Channel&#x27;s id | 
 **name** | **String**| Recording&#x27;s filename | 
 **format** | **String**| Format to encode audio in | 
 **maxDurationSeconds** | **Number**| Maximum duration of the recording, in seconds. 0 for no limit | [optional] [default to 0]
 **maxSilenceSeconds** | **Number**| Maximum duration of silence, in seconds. 0 for no limit | [optional] [default to 0]
 **ifExists** | **String**| Action to take if a recording with the same name already exists. | [optional] [default to fail]
 **beep** | **Boolean**| Play beep when recording begins | [optional] [default to false]
 **terminateOn** | **String**| DTMF input to terminate recording | [optional] [default to none]

### Return type

[**LiveRecording**](LiveRecording.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

<a name="redirect"></a>
# **redirect**
> redirect(channelId, endpoint)

Redirect the channel to a different location.

### Example
```javascript
import Localhost8088 from 'localhost8088';

let apiInstance = new Localhost8088.ChannelsApi();
let channelId = "channelId_example"; // String | Channel's id
let endpoint = "endpoint_example"; // String | The endpoint to redirect the channel to

apiInstance.redirect(channelId, endpoint, (error, data, response) => {
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
 **channelId** | **String**| Channel&#x27;s id | 
 **endpoint** | **String**| The endpoint to redirect the channel to | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="ring"></a>
# **ring**
> ring(channelId)

Indicate ringing to a channel.

### Example
```javascript
import Localhost8088 from 'localhost8088';

let apiInstance = new Localhost8088.ChannelsApi();
let channelId = "channelId_example"; // String | Channel's id

apiInstance.ring(channelId, (error, data, response) => {
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
 **channelId** | **String**| Channel&#x27;s id | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="ringStop"></a>
# **ringStop**
> ringStop(channelId)

Stop ringing indication on a channel if locally generated.

### Example
```javascript
import Localhost8088 from 'localhost8088';

let apiInstance = new Localhost8088.ChannelsApi();
let channelId = "channelId_example"; // String | Channel's id

apiInstance.ringStop(channelId, (error, data, response) => {
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
 **channelId** | **String**| Channel&#x27;s id | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="rtpstatistics"></a>
# **rtpstatistics**
> RTPstat rtpstatistics(channelId)

RTP stats on a channel.

### Example
```javascript
import Localhost8088 from 'localhost8088';

let apiInstance = new Localhost8088.ChannelsApi();
let channelId = "channelId_example"; // String | Channel's id

apiInstance.rtpstatistics(channelId, (error, data, response) => {
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
 **channelId** | **String**| Channel&#x27;s id | 

### Return type

[**RTPstat**](RTPstat.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

<a name="sendDTMF"></a>
# **sendDTMF**
> sendDTMF(channelId, opts)

Send provided DTMF to a given channel.

### Example
```javascript
import Localhost8088 from 'localhost8088';

let apiInstance = new Localhost8088.ChannelsApi();
let channelId = "channelId_example"; // String | Channel's id
let opts = { 
  'dtmf': "dtmf_example", // String | DTMF To send.
  'before': 0, // Number | Amount of time to wait before DTMF digits (specified in milliseconds) start.
  'between': 100, // Number | Amount of time in between DTMF digits (specified in milliseconds).
  'duration': 100, // Number | Length of each DTMF digit (specified in milliseconds).
  'after': 0 // Number | Amount of time to wait after DTMF digits (specified in milliseconds) end.
};
apiInstance.sendDTMF(channelId, opts, (error, data, response) => {
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
 **channelId** | **String**| Channel&#x27;s id | 
 **dtmf** | **String**| DTMF To send. | [optional] 
 **before** | **Number**| Amount of time to wait before DTMF digits (specified in milliseconds) start. | [optional] [default to 0]
 **between** | **Number**| Amount of time in between DTMF digits (specified in milliseconds). | [optional] [default to 100]
 **duration** | **Number**| Length of each DTMF digit (specified in milliseconds). | [optional] [default to 100]
 **after** | **Number**| Amount of time to wait after DTMF digits (specified in milliseconds) end. | [optional] [default to 0]

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="setChannelVar"></a>
# **setChannelVar**
> setChannelVar(channelId, variable, opts)

Set the value of a channel variable or function.

### Example
```javascript
import Localhost8088 from 'localhost8088';

let apiInstance = new Localhost8088.ChannelsApi();
let channelId = "channelId_example"; // String | Channel's id
let variable = "variable_example"; // String | The channel variable or function to set
let opts = { 
  'value': "value_example" // String | The value to set the variable to
};
apiInstance.setChannelVar(channelId, variable, opts, (error, data, response) => {
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
 **channelId** | **String**| Channel&#x27;s id | 
 **variable** | **String**| The channel variable or function to set | 
 **value** | **String**| The value to set the variable to | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="snoopChannel"></a>
# **snoopChannel**
> Channel snoopChannel(channelId, app, opts)

Start snooping.

Snoop (spy/whisper) on a specific channel.

### Example
```javascript
import Localhost8088 from 'localhost8088';

let apiInstance = new Localhost8088.ChannelsApi();
let channelId = "channelId_example"; // String | Channel's id
let app = "app_example"; // String | Application the snooping channel is placed into
let opts = { 
  'spy': "none", // String | Direction of audio to spy on
  'whisper': "none", // String | Direction of audio to whisper into
  'appArgs': "appArgs_example", // String | The application arguments to pass to the Stasis application
  'snoopId': "snoopId_example" // String | Unique ID to assign to snooping channel
};
apiInstance.snoopChannel(channelId, app, opts, (error, data, response) => {
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
 **channelId** | **String**| Channel&#x27;s id | 
 **app** | **String**| Application the snooping channel is placed into | 
 **spy** | **String**| Direction of audio to spy on | [optional] [default to none]
 **whisper** | **String**| Direction of audio to whisper into | [optional] [default to none]
 **appArgs** | **String**| The application arguments to pass to the Stasis application | [optional] 
 **snoopId** | **String**| Unique ID to assign to snooping channel | [optional] 

### Return type

[**Channel**](Channel.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

<a name="snoopChannelWithId"></a>
# **snoopChannelWithId**
> Channel snoopChannelWithId(channelId, snoopId, app, opts)

Start snooping.

Snoop (spy/whisper) on a specific channel.

### Example
```javascript
import Localhost8088 from 'localhost8088';

let apiInstance = new Localhost8088.ChannelsApi();
let channelId = "channelId_example"; // String | Channel's id
let snoopId = "snoopId_example"; // String | Unique ID to assign to snooping channel
let app = "app_example"; // String | Application the snooping channel is placed into
let opts = { 
  'spy': "none", // String | Direction of audio to spy on
  'whisper': "none", // String | Direction of audio to whisper into
  'appArgs': "appArgs_example" // String | The application arguments to pass to the Stasis application
};
apiInstance.snoopChannelWithId(channelId, snoopId, app, opts, (error, data, response) => {
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
 **channelId** | **String**| Channel&#x27;s id | 
 **snoopId** | **String**| Unique ID to assign to snooping channel | 
 **app** | **String**| Application the snooping channel is placed into | 
 **spy** | **String**| Direction of audio to spy on | [optional] [default to none]
 **whisper** | **String**| Direction of audio to whisper into | [optional] [default to none]
 **appArgs** | **String**| The application arguments to pass to the Stasis application | [optional] 

### Return type

[**Channel**](Channel.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

<a name="startSilence"></a>
# **startSilence**
> startSilence(channelId)

Play silence to a channel.

Using media operations such as /play on a channel playing silence in this manner will suspend silence without resuming automatically.

### Example
```javascript
import Localhost8088 from 'localhost8088';

let apiInstance = new Localhost8088.ChannelsApi();
let channelId = "channelId_example"; // String | Channel's id

apiInstance.startSilence(channelId, (error, data, response) => {
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
 **channelId** | **String**| Channel&#x27;s id | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="stopSilence"></a>
# **stopSilence**
> stopSilence(channelId)

Stop playing silence to a channel.

### Example
```javascript
import Localhost8088 from 'localhost8088';

let apiInstance = new Localhost8088.ChannelsApi();
let channelId = "channelId_example"; // String | Channel's id

apiInstance.stopSilence(channelId, (error, data, response) => {
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
 **channelId** | **String**| Channel&#x27;s id | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="unhold"></a>
# **unhold**
> unhold(channelId)

Remove a channel from hold.

### Example
```javascript
import Localhost8088 from 'localhost8088';

let apiInstance = new Localhost8088.ChannelsApi();
let channelId = "channelId_example"; // String | Channel's id

apiInstance.unhold(channelId, (error, data, response) => {
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
 **channelId** | **String**| Channel&#x27;s id | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="unmute"></a>
# **unmute**
> unmute(channelId, opts)

Unmute a channel.

### Example
```javascript
import Localhost8088 from 'localhost8088';

let apiInstance = new Localhost8088.ChannelsApi();
let channelId = "channelId_example"; // String | Channel's id
let opts = { 
  'direction': "both" // String | Direction in which to unmute audio
};
apiInstance.unmute(channelId, opts, (error, data, response) => {
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
 **channelId** | **String**| Channel&#x27;s id | 
 **direction** | **String**| Direction in which to unmute audio | [optional] [default to both]

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


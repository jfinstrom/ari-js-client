# AsteriskAri.SoundsApi

All URIs are relative to *http://localhost:8088/ari*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getsound**](SoundsApi.md#getsound) | **GET** /sounds/{soundId} | Get a sound&#x27;s details.
[**listsounds**](SoundsApi.md#listsounds) | **GET** /sounds | List all sounds.

<a name="getsound"></a>
# **getsound**
> Sound getsound(soundId)

Get a sound&#x27;s details.

### Example
```javascript
import AsteriskAri from 'asterisk_ari';

let apiInstance = new AsteriskAri.SoundsApi();
let soundId = "soundId_example"; // String | Sound's id

apiInstance.getsound(soundId, (error, data, response) => {
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
 **soundId** | **String**| Sound&#x27;s id | 

### Return type

[**Sound**](Sound.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

<a name="listsounds"></a>
# **listsounds**
> [Sound] listsounds(opts)

List all sounds.

### Example
```javascript
import AsteriskAri from 'asterisk_ari';

let apiInstance = new AsteriskAri.SoundsApi();
let opts = { 
  'lang': "lang_example", // String | Lookup sound for a specific language.
  'format': "format_example" // String | Lookup sound in a specific format.
};
apiInstance.listsounds(opts, (error, data, response) => {
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
 **lang** | **String**| Lookup sound for a specific language. | [optional] 
 **format** | **String**| Lookup sound in a specific format. | [optional] 

### Return type

[**[Sound]**](Sound.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*


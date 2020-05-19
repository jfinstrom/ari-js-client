# Localhost8088.DeviceStatesApi

All URIs are relative to *http://localhost:8088/ari*

Method | HTTP request | Description
------------- | ------------- | -------------
[**callDelete**](DeviceStatesApi.md#callDelete) | **DELETE** /deviceStates/{deviceName} | Destroy a device-state controlled by ARI.
[**getdevicestate**](DeviceStatesApi.md#getdevicestate) | **GET** /deviceStates/{deviceName} | Retrieve the current state of a device.
[**listDeviceStates**](DeviceStatesApi.md#listDeviceStates) | **GET** /deviceStates | List all ARI controlled device states.
[**update**](DeviceStatesApi.md#update) | **PUT** /deviceStates/{deviceName} | Change the state of a device controlled by ARI. (Note - implicitly creates the device state).

<a name="callDelete"></a>
# **callDelete**
> callDelete(deviceName)

Destroy a device-state controlled by ARI.

### Example
```javascript
import Localhost8088 from 'localhost8088';

let apiInstance = new Localhost8088.DeviceStatesApi();
let deviceName = "deviceName_example"; // String | Name of the device

apiInstance.callDelete(deviceName, (error, data, response) => {
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
 **deviceName** | **String**| Name of the device | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getdevicestate"></a>
# **getdevicestate**
> DeviceState getdevicestate(deviceName)

Retrieve the current state of a device.

### Example
```javascript
import Localhost8088 from 'localhost8088';

let apiInstance = new Localhost8088.DeviceStatesApi();
let deviceName = "deviceName_example"; // String | Name of the device

apiInstance.getdevicestate(deviceName, (error, data, response) => {
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
 **deviceName** | **String**| Name of the device | 

### Return type

[**DeviceState**](DeviceState.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

<a name="listDeviceStates"></a>
# **listDeviceStates**
> [DeviceState] listDeviceStates()

List all ARI controlled device states.

### Example
```javascript
import Localhost8088 from 'localhost8088';

let apiInstance = new Localhost8088.DeviceStatesApi();
apiInstance.listDeviceStates((error, data, response) => {
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

[**[DeviceState]**](DeviceState.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

<a name="update"></a>
# **update**
> update(deviceName, deviceState)

Change the state of a device controlled by ARI. (Note - implicitly creates the device state).

### Example
```javascript
import Localhost8088 from 'localhost8088';

let apiInstance = new Localhost8088.DeviceStatesApi();
let deviceName = "deviceName_example"; // String | Name of the device
let deviceState = "deviceState_example"; // String | Device state value

apiInstance.update(deviceName, deviceState, (error, data, response) => {
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
 **deviceName** | **String**| Name of the device | 
 **deviceState** | **String**| Device state value | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


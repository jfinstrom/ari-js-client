# Localhost8088.AsteriskApi

All URIs are relative to *http://localhost:8088/ari*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addLog**](AsteriskApi.md#addLog) | **POST** /asterisk/logging/{logChannelName} | Adds a log channel.
[**deleteLog**](AsteriskApi.md#deleteLog) | **DELETE** /asterisk/logging/{logChannelName} | Deletes a log channel.
[**deleteObject**](AsteriskApi.md#deleteObject) | **DELETE** /asterisk/config/dynamic/{configClass}/{objectType}/{id} | Delete a dynamic configuration object.
[**getGlobalVar**](AsteriskApi.md#getGlobalVar) | **GET** /asterisk/variable | Get the value of a global variable.
[**getInfo**](AsteriskApi.md#getInfo) | **GET** /asterisk/info | Gets Asterisk system information.
[**getModule**](AsteriskApi.md#getModule) | **GET** /asterisk/modules/{moduleName} | Get Asterisk module information.
[**getObject**](AsteriskApi.md#getObject) | **GET** /asterisk/config/dynamic/{configClass}/{objectType}/{id} | Retrieve a dynamic configuration object.
[**listLogChannels**](AsteriskApi.md#listLogChannels) | **GET** /asterisk/logging | Gets Asterisk log channel information.
[**listModules**](AsteriskApi.md#listModules) | **GET** /asterisk/modules | List Asterisk modules.
[**loadModule**](AsteriskApi.md#loadModule) | **POST** /asterisk/modules/{moduleName} | Load an Asterisk module.
[**ping**](AsteriskApi.md#ping) | **GET** /asterisk/ping | Response pong message.
[**reloadModule**](AsteriskApi.md#reloadModule) | **PUT** /asterisk/modules/{moduleName} | Reload an Asterisk module.
[**rotateLog**](AsteriskApi.md#rotateLog) | **PUT** /asterisk/logging/{logChannelName}/rotate | Rotates a log channel.
[**setGlobalVar**](AsteriskApi.md#setGlobalVar) | **POST** /asterisk/variable | Set the value of a global variable.
[**unloadModule**](AsteriskApi.md#unloadModule) | **DELETE** /asterisk/modules/{moduleName} | Unload an Asterisk module.
[**updateObject**](AsteriskApi.md#updateObject) | **PUT** /asterisk/config/dynamic/{configClass}/{objectType}/{id} | Create or update a dynamic configuration object.

<a name="addLog"></a>
# **addLog**
> addLog(logChannelName, configuration)

Adds a log channel.

### Example
```javascript
import Localhost8088 from 'localhost8088';

let apiInstance = new Localhost8088.AsteriskApi();
let logChannelName = "logChannelName_example"; // String | The log channel to add
let configuration = "configuration_example"; // String | levels of the log channel

apiInstance.addLog(logChannelName, configuration, (error, data, response) => {
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
 **logChannelName** | **String**| The log channel to add | 
 **configuration** | **String**| levels of the log channel | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="deleteLog"></a>
# **deleteLog**
> deleteLog(logChannelName)

Deletes a log channel.

### Example
```javascript
import Localhost8088 from 'localhost8088';

let apiInstance = new Localhost8088.AsteriskApi();
let logChannelName = "logChannelName_example"; // String | Log channels name

apiInstance.deleteLog(logChannelName, (error, data, response) => {
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
 **logChannelName** | **String**| Log channels name | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="deleteObject"></a>
# **deleteObject**
> deleteObject(configClass, objectType, id)

Delete a dynamic configuration object.

### Example
```javascript
import Localhost8088 from 'localhost8088';

let apiInstance = new Localhost8088.AsteriskApi();
let configClass = "configClass_example"; // String | The configuration class containing dynamic configuration objects.
let objectType = "objectType_example"; // String | The type of configuration object to delete.
let id = "id_example"; // String | The unique identifier of the object to delete.

apiInstance.deleteObject(configClass, objectType, id, (error, data, response) => {
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
 **configClass** | **String**| The configuration class containing dynamic configuration objects. | 
 **objectType** | **String**| The type of configuration object to delete. | 
 **id** | **String**| The unique identifier of the object to delete. | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getGlobalVar"></a>
# **getGlobalVar**
> Variable getGlobalVar(variable)

Get the value of a global variable.

### Example
```javascript
import Localhost8088 from 'localhost8088';

let apiInstance = new Localhost8088.AsteriskApi();
let variable = "variable_example"; // String | The variable to get

apiInstance.getGlobalVar(variable, (error, data, response) => {
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
 **variable** | **String**| The variable to get | 

### Return type

[**Variable**](Variable.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

<a name="getInfo"></a>
# **getInfo**
> AsteriskInfo getInfo(opts)

Gets Asterisk system information.

### Example
```javascript
import Localhost8088 from 'localhost8088';

let apiInstance = new Localhost8088.AsteriskApi();
let opts = { 
  'only': ["only_example"] // [String] | Filter information returned
};
apiInstance.getInfo(opts, (error, data, response) => {
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
 **only** | [**[String]**](String.md)| Filter information returned | [optional] 

### Return type

[**AsteriskInfo**](AsteriskInfo.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

<a name="getModule"></a>
# **getModule**
> Module getModule(moduleName)

Get Asterisk module information.

### Example
```javascript
import Localhost8088 from 'localhost8088';

let apiInstance = new Localhost8088.AsteriskApi();
let moduleName = "moduleName_example"; // String | Module's name

apiInstance.getModule(moduleName, (error, data, response) => {
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
 **moduleName** | **String**| Module&#x27;s name | 

### Return type

[**Module**](Module.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

<a name="getObject"></a>
# **getObject**
> [ConfigTuple] getObject(configClass, objectType, id)

Retrieve a dynamic configuration object.

### Example
```javascript
import Localhost8088 from 'localhost8088';

let apiInstance = new Localhost8088.AsteriskApi();
let configClass = "configClass_example"; // String | The configuration class containing dynamic configuration objects.
let objectType = "objectType_example"; // String | The type of configuration object to retrieve.
let id = "id_example"; // String | The unique identifier of the object to retrieve.

apiInstance.getObject(configClass, objectType, id, (error, data, response) => {
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
 **configClass** | **String**| The configuration class containing dynamic configuration objects. | 
 **objectType** | **String**| The type of configuration object to retrieve. | 
 **id** | **String**| The unique identifier of the object to retrieve. | 

### Return type

[**[ConfigTuple]**](ConfigTuple.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

<a name="listLogChannels"></a>
# **listLogChannels**
> [LogChannel] listLogChannels()

Gets Asterisk log channel information.

### Example
```javascript
import Localhost8088 from 'localhost8088';

let apiInstance = new Localhost8088.AsteriskApi();
apiInstance.listLogChannels((error, data, response) => {
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

[**[LogChannel]**](LogChannel.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

<a name="listModules"></a>
# **listModules**
> [Module] listModules()

List Asterisk modules.

### Example
```javascript
import Localhost8088 from 'localhost8088';

let apiInstance = new Localhost8088.AsteriskApi();
apiInstance.listModules((error, data, response) => {
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

[**[Module]**](Module.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

<a name="loadModule"></a>
# **loadModule**
> loadModule(moduleName)

Load an Asterisk module.

### Example
```javascript
import Localhost8088 from 'localhost8088';

let apiInstance = new Localhost8088.AsteriskApi();
let moduleName = "moduleName_example"; // String | Module's name

apiInstance.loadModule(moduleName, (error, data, response) => {
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
 **moduleName** | **String**| Module&#x27;s name | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="ping"></a>
# **ping**
> AsteriskPing ping()

Response pong message.

### Example
```javascript
import Localhost8088 from 'localhost8088';

let apiInstance = new Localhost8088.AsteriskApi();
apiInstance.ping((error, data, response) => {
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

[**AsteriskPing**](AsteriskPing.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

<a name="reloadModule"></a>
# **reloadModule**
> reloadModule(moduleName)

Reload an Asterisk module.

### Example
```javascript
import Localhost8088 from 'localhost8088';

let apiInstance = new Localhost8088.AsteriskApi();
let moduleName = "moduleName_example"; // String | Module's name

apiInstance.reloadModule(moduleName, (error, data, response) => {
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
 **moduleName** | **String**| Module&#x27;s name | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="rotateLog"></a>
# **rotateLog**
> rotateLog(logChannelName)

Rotates a log channel.

### Example
```javascript
import Localhost8088 from 'localhost8088';

let apiInstance = new Localhost8088.AsteriskApi();
let logChannelName = "logChannelName_example"; // String | Log channel's name

apiInstance.rotateLog(logChannelName, (error, data, response) => {
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
 **logChannelName** | **String**| Log channel&#x27;s name | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="setGlobalVar"></a>
# **setGlobalVar**
> setGlobalVar(variable, opts)

Set the value of a global variable.

### Example
```javascript
import Localhost8088 from 'localhost8088';

let apiInstance = new Localhost8088.AsteriskApi();
let variable = "variable_example"; // String | The variable to set
let opts = { 
  'value': "value_example" // String | The value to set the variable to
};
apiInstance.setGlobalVar(variable, opts, (error, data, response) => {
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
 **variable** | **String**| The variable to set | 
 **value** | **String**| The value to set the variable to | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="unloadModule"></a>
# **unloadModule**
> unloadModule(moduleName)

Unload an Asterisk module.

### Example
```javascript
import Localhost8088 from 'localhost8088';

let apiInstance = new Localhost8088.AsteriskApi();
let moduleName = "moduleName_example"; // String | Module's name

apiInstance.unloadModule(moduleName, (error, data, response) => {
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
 **moduleName** | **String**| Module&#x27;s name | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="updateObject"></a>
# **updateObject**
> [ConfigTuple] updateObject(configClassobjectTypeid, opts)

Create or update a dynamic configuration object.

### Example
```javascript
import Localhost8088 from 'localhost8088';

let apiInstance = new Localhost8088.AsteriskApi();
let configClass = "configClass_example"; // String | The configuration class containing dynamic configuration objects.
let objectType = "objectType_example"; // String | The type of configuration object to create or update.
let id = "id_example"; // String | The unique identifier of the object to create or update.
let opts = { 
  'body': new Localhost8088.Containers() // Containers | The body object should have a value that is a list of ConfigTuples, which provide the fields to update. Ex. [ { "attribute": "directmedia", "value": "false" } ]
};
apiInstance.updateObject(configClassobjectTypeid, opts, (error, data, response) => {
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
 **configClass** | **String**| The configuration class containing dynamic configuration objects. | 
 **objectType** | **String**| The type of configuration object to create or update. | 
 **id** | **String**| The unique identifier of the object to create or update. | 
 **body** | [**Containers**](Containers.md)| The body object should have a value that is a list of ConfigTuples, which provide the fields to update. Ex. [ { &quot;attribute&quot;: &quot;directmedia&quot;, &quot;value&quot;: &quot;false&quot; } ] | [optional] 

### Return type

[**[ConfigTuple]**](ConfigTuple.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: */*
 - **Accept**: */*


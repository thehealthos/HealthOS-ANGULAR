# Getting started

## How to Build

The generated SDK requires AngularJS framework to work. If you do not already have angular downloaded, please go ahead and do it from [here](https://angularjs.org/)

## How to Use

The following section describes how to use the generated SDK in an existing/new project.

### 1. Configure Angular and Generated SDK
Perform the following steps to configure angular and the SDK:
+ Make a `scripts` folder inside the root folder of the project. If you already have a `scripts` folder, skip to the next step.
+ Move the `angular.min.js` file inside the scripts folder. 
+ Move the `healthoslib` folder inside the scripts folder.

![folder-structure-image](https://apidocs.io/illustration/angularjs?step=folderStructure&workspaceFolder=HealthOS-Angular&projectName=HealthOSLib)

### 2. Open Project Folder
Open an IDE/Text Editor for JavaScript like Sublime Text. The basic workflow presented here is also applicable if you prefer using a different editor or IDE.  
Click on `File` and select `Open Folder`

Select the folder of your SDK and click on `Select Folder` to open it up in Sublime Text. The folder will become visible in the bar on the left.

![open-folder-image](https://apidocs.io/illustration/angularjs?step=openFolder&workspaceFolder=HealthOS-Angular)

### 3. Create an Angular Application
Since Angular JS is used for client-side web development, in order to use the generated library, you will have to develop an application first.
If you already have an angular application, [skip to Step 6](#6-include-sdk-references-in-html-file). Otherwise, follow these steps to create one:

+ In the IDE, click on `File` and choose `New File` to create a new file.
+ Add the following starting code in the file:
```js
    var app = angular.module('myApp', []);
    app.controller('testController', function($scope) 
    {

    });
```
+ Save it with the name `app.js` in the `scripts` folder.


### 4. Create HTML File
Skip to the next step if you are working with an existing project and already have an html file. Otherwise follow the steps to create one:
+ Inside the IDE, right click on the project folder name and select the `New File` option to create a new test file.
+ Save it with an appropriate name such as `index.html` in the root of your project folder.
`index.html` should look like this:
```html
	<!DOCTYPE html>
	<html>
	<head>
		<title>Angular Project</title>
		<script></script>
	</head>

	<body>
	</body>

	</html>
```

![initial-html-code-image](https://apidocs.io/illustration/angularjs?step=initialCode&workspaceFolder=HealthOS-Angular)

### 5. Including links to Angular in HTML file
Your HTML file needs to have a link to `angular.min.js` file to use Angular-JS. Add the link using `script` tags inside the `head` section of `index.html` like:
```html
	<script src="scripts/angular.min.js" ></script>
```

### 6. Include SDK references in HTML file
Import the reference to the generated SDK files inside your html file like:
```html
	<head>
		...
		<!-- Helper files -->
		<script src="scripts/healthoslib/Configuration.js"></script>
		<script src="scripts/healthoslib/APIHelper.js"></script>
		<script src="scripts/healthoslib/Http/Client/HttpContext.js"></script>
		<script src="scripts/healthoslib/Http/Client/RequestClient.js"></script>
		<script src="scripts/healthoslib/Http/Request/HttpRequest.js"></script>
		<script src="scripts/healthoslib/Http/Response/HttpResponse.js"></script>

		<!-- API Controllers -->
        <script src="scripts/healthoslib/Controllers/MedicinesController.js"></script>
        <script src="scripts/healthoslib/Controllers/LabTestsController.js"></script>
        <script src="scripts/healthoslib/Controllers/GenericsController.js"></script>
        <script src="scripts/healthoslib/Controllers/FoodController.js"></script>
        <script src="scripts/healthoslib/Controllers/ExercisesController.js"></script>
        <script src="scripts/healthoslib/Controllers/DrugInteractionsController.js"></script>
        <script src="scripts/healthoslib/Controllers/DiseasesController.js"></script>
        <script src="scripts/healthoslib/Controllers/ChatController.js"></script>
        <script src="scripts/healthoslib/Controllers/AutocompleteController.js"></script>
        <script src="scripts/healthoslib/Controllers/AuthenticationController.js"></script>


		<!-- Models -->
        <script src="scripts/healthoslib/Models/BaseModel.js"></script>
        <script src="scripts/healthoslib/Models/RequestAccessTokenRequest.js"></script>
        <script src="scripts/healthoslib/Models/MedicinesResponse.js"></script>
        <script src="scripts/healthoslib/Models/Constituent.js"></script>
        <script src="scripts/healthoslib/Models/Schedule.js"></script>
        <script src="scripts/healthoslib/Models/GenericsResponse.js"></script>
        <script src="scripts/healthoslib/Models/FoodItemsResponse.js"></script>
        <script src="scripts/healthoslib/Models/LabTestsResponse.js"></script>
        <script src="scripts/healthoslib/Models/LabTestData.js"></script>
        <script src="scripts/healthoslib/Models/DiseasesResponse.js"></script>
        <script src="scripts/healthoslib/Models/ExercisesResponse.js"></script>
        <script src="scripts/healthoslib/Models/SearchDiseasesResponse.js"></script>
        <script src="scripts/healthoslib/Models/AllDiseasesResponse.js"></script>
        <script src="scripts/healthoslib/Models/MedicineInteractionsResponse.js"></script>
        <script src="scripts/healthoslib/Models/Interaction.js"></script>
        <script src="scripts/healthoslib/Models/Item.js"></script>
        <script src="scripts/healthoslib/Models/SearchExercisesResponse.js"></script>
        <script src="scripts/healthoslib/Models/SearchExercisesResponse16.js"></script>
        <script src="scripts/healthoslib/Models/AllExercisesResponse.js"></script>
        <script src="scripts/healthoslib/Models/AllExercisesResponse18.js"></script>
        <script src="scripts/healthoslib/Models/SearchFoodItemsResponse.js"></script>
        <script src="scripts/healthoslib/Models/AllFoodItemsResponse.js"></script>
        <script src="scripts/healthoslib/Models/SearchFoodBrandsResponse.js"></script>
        <script src="scripts/healthoslib/Models/AllFoodBrandsResponse.js"></script>
        <script src="scripts/healthoslib/Models/FoodItemsByBrandResponse.js"></script>
        <script src="scripts/healthoslib/Models/SearchFoodRestaurantsResponse.js"></script>
        <script src="scripts/healthoslib/Models/AllFoodRestaurantsResponse.js"></script>
        <script src="scripts/healthoslib/Models/FoodItemsByRestaurantResponse.js"></script>
        <script src="scripts/healthoslib/Models/AllGenericsResponse.js"></script>
        <script src="scripts/healthoslib/Models/MedicinesByGenericResponse.js"></script>
        <script src="scripts/healthoslib/Models/SearchLabTestsResponse.js"></script>
        <script src="scripts/healthoslib/Models/AllLabTestsResponse.js"></script>
        <script src="scripts/healthoslib/Models/LabTestData34.js"></script>
        <script src="scripts/healthoslib/Models/SearchMedicinesResponse.js"></script>
        <script src="scripts/healthoslib/Models/AllMedicinesResponse.js"></script>
        <script src="scripts/healthoslib/Models/AlternativeMedicinesResponse.js"></script>
        <script src="scripts/healthoslib/Models/SimilarMedicinesResponse.js"></script>
        <script src="scripts/healthoslib/Models/PopularUsageResponse.js"></script>
        <script src="scripts/healthoslib/Models/Usage.js"></script>
        <script src="scripts/healthoslib/Models/CommonSideEffectsResponse.js"></script>
        <script src="scripts/healthoslib/Models/SideEffect.js"></script>
        <script src="scripts/healthoslib/Models/SearchManufacturersResponse.js"></script>
        <script src="scripts/healthoslib/Models/AllManufacturersResponse.js"></script>
        <script src="scripts/healthoslib/Models/MedicinesByManufacturerResponse.js"></script>

		...
	</head>
```
> The Configuration.js file should be imported before the other files.

### 7. Including link to `app.js` in HTML file
Link your `app.js` file to your `index.html` file like:
```html
	<head>
		...
		<script src="scripts/app.js"></script>
	</head>
```
> The link to app.js needs to be included at the very end of the head tag, after the SDK references have been added

### 8. Initializing the Angular App
You need to initialize your app and the controller associated with your view inside your `index.html` file. Do so like:
+ Add ng-app directive to initialize your app inside the `body` tag.
```html
	<body ng-app="myApp">
```
+ Add ng-controller directive to initialize your controller and bind it with your view (`index.html` file).
```html
	...
	<body ng-app="myApp">
		<div ng-controller="testController">
			...
		</div>
		...
	</body>
	...
```

### 9. Consuming the SDK 
In order to use the generated SDK's modules, controllers and factories, the project needs to be added as a dependency in your angular app's module. This will be done inside the `app.js` file.
Add the dependency like this:

```js
    var app = angular.module('myApp', ['HealthOSLib']);
```
At this point, the SDK has been successfully included in your project. Further steps include using a service/factory from the generated SDK. To see working example of this, please head on [over here](#list-of-controllers) and choose any class to see its functions and example usage.  

### 10. Running The App
To run the app, simply open up the `index.html` file in a browser.

![app-running](https://apidocs.io/illustration/angularjs?step=appRunning)

## Class Reference

### <a name="list_of_controllers"></a>List of Controllers

* [MedicinesController](#medicines_controller)
* [LabTestsController](#lab_tests_controller)
* [GenericsController](#generics_controller)
* [FoodController](#food_controller)
* [ExercisesController](#exercises_controller)
* [DrugInteractionsController](#drug_interactions_controller)
* [DiseasesController](#diseases_controller)
* [ChatController](#chat_controller)
* [AutocompleteController](#autocomplete_controller)
* [AuthenticationController](#authentication_controller)

### <a name="medicines_controller"></a>![Class: ](https://apidocs.io/img/class.png ".MedicinesController") MedicinesController

#### Get singleton instance

The singleton instance of the ``` MedicinesController ``` class can be accessed via Dependency Injection.

```js
	app.controller("testController", function($scope, MedicinesController,RequestAccessTokenRequest,MedicinesResponse,Constituent,Schedule,GenericsResponse,FoodItemsResponse,LabTestsResponse,LabTestData,DiseasesResponse,ExercisesResponse,SearchDiseasesResponse,AllDiseasesResponse,MedicineInteractionsResponse,Interaction,Item,SearchExercisesResponse,SearchExercisesResponse16,AllExercisesResponse,AllExercisesResponse18,SearchFoodItemsResponse,AllFoodItemsResponse,SearchFoodBrandsResponse,AllFoodBrandsResponse,FoodItemsByBrandResponse,SearchFoodRestaurantsResponse,AllFoodRestaurantsResponse,FoodItemsByRestaurantResponse,AllGenericsResponse,MedicinesByGenericResponse,SearchLabTestsResponse,AllLabTestsResponse,LabTestData34,SearchMedicinesResponse,AllMedicinesResponse,AlternativeMedicinesResponse,SimilarMedicinesResponse,PopularUsageResponse,Usage,CommonSideEffectsResponse,SideEffect,SearchManufacturersResponse,AllManufacturersResponse,MedicinesByManufacturerResponse){
	});
```

#### <a name="get_manufacturer"></a>![Method: ](https://apidocs.io/img/method.png ".MedicinesController.getManufacturer") getManufacturer

> Get a manufacturer by its id


```javascript
function getManufacturer(manufacturerId)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| manufacturerId |  ``` Required ```  | Id of the manufacturer |



#### Example Usage

```javascript


	app.controller("testController", function($scope, MedicinesController,RequestAccessTokenRequest,MedicinesResponse,Constituent,Schedule,GenericsResponse,FoodItemsResponse,LabTestsResponse,LabTestData,DiseasesResponse,ExercisesResponse,SearchDiseasesResponse,AllDiseasesResponse,MedicineInteractionsResponse,Interaction,Item,SearchExercisesResponse,SearchExercisesResponse16,AllExercisesResponse,AllExercisesResponse18,SearchFoodItemsResponse,AllFoodItemsResponse,SearchFoodBrandsResponse,AllFoodBrandsResponse,FoodItemsByBrandResponse,SearchFoodRestaurantsResponse,AllFoodRestaurantsResponse,FoodItemsByRestaurantResponse,AllGenericsResponse,MedicinesByGenericResponse,SearchLabTestsResponse,AllLabTestsResponse,LabTestData34,SearchMedicinesResponse,AllMedicinesResponse,AlternativeMedicinesResponse,SimilarMedicinesResponse,PopularUsageResponse,Usage,CommonSideEffectsResponse,SideEffect,SearchManufacturersResponse,AllManufacturersResponse,MedicinesByManufacturerResponse){
	    var manufacturerId = manufacturer_id;


		var result = MedicinesController.getManufacturer(manufacturerId);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```



#### <a name="search_manufacturers"></a>![Method: ](https://apidocs.io/img/method.png ".MedicinesController.searchManufacturers") searchManufacturers

> Search a manufacturer by its name


```javascript
function searchManufacturers(manufacturerQuery)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| manufacturerQuery |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript


	app.controller("testController", function($scope, MedicinesController,RequestAccessTokenRequest,MedicinesResponse,Constituent,Schedule,GenericsResponse,FoodItemsResponse,LabTestsResponse,LabTestData,DiseasesResponse,ExercisesResponse,SearchDiseasesResponse,AllDiseasesResponse,MedicineInteractionsResponse,Interaction,Item,SearchExercisesResponse,SearchExercisesResponse16,AllExercisesResponse,AllExercisesResponse18,SearchFoodItemsResponse,AllFoodItemsResponse,SearchFoodBrandsResponse,AllFoodBrandsResponse,FoodItemsByBrandResponse,SearchFoodRestaurantsResponse,AllFoodRestaurantsResponse,FoodItemsByRestaurantResponse,AllGenericsResponse,MedicinesByGenericResponse,SearchLabTestsResponse,AllLabTestsResponse,LabTestData34,SearchMedicinesResponse,AllMedicinesResponse,AlternativeMedicinesResponse,SimilarMedicinesResponse,PopularUsageResponse,Usage,CommonSideEffectsResponse,SideEffect,SearchManufacturersResponse,AllManufacturersResponse,MedicinesByManufacturerResponse){
	    var manufacturerQuery = manufacturer_query;


		var result = MedicinesController.searchManufacturers(manufacturerQuery);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```



#### <a name="get_common_side_effects"></a>![Method: ](https://apidocs.io/img/method.png ".MedicinesController.getCommonSideEffects") getCommonSideEffects

> Get common side effects of a medicine


```javascript
function getCommonSideEffects(medicineId)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| medicineId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript


	app.controller("testController", function($scope, MedicinesController,RequestAccessTokenRequest,MedicinesResponse,Constituent,Schedule,GenericsResponse,FoodItemsResponse,LabTestsResponse,LabTestData,DiseasesResponse,ExercisesResponse,SearchDiseasesResponse,AllDiseasesResponse,MedicineInteractionsResponse,Interaction,Item,SearchExercisesResponse,SearchExercisesResponse16,AllExercisesResponse,AllExercisesResponse18,SearchFoodItemsResponse,AllFoodItemsResponse,SearchFoodBrandsResponse,AllFoodBrandsResponse,FoodItemsByBrandResponse,SearchFoodRestaurantsResponse,AllFoodRestaurantsResponse,FoodItemsByRestaurantResponse,AllGenericsResponse,MedicinesByGenericResponse,SearchLabTestsResponse,AllLabTestsResponse,LabTestData34,SearchMedicinesResponse,AllMedicinesResponse,AlternativeMedicinesResponse,SimilarMedicinesResponse,PopularUsageResponse,Usage,CommonSideEffectsResponse,SideEffect,SearchManufacturersResponse,AllManufacturersResponse,MedicinesByManufacturerResponse){
	    var medicineId = medicine_id;


		var result = MedicinesController.getCommonSideEffects(medicineId);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```



#### <a name="get_popular_usage"></a>![Method: ](https://apidocs.io/img/method.png ".MedicinesController.getPopularUsage") getPopularUsage

> Get popular usages of a medicine


```javascript
function getPopularUsage(medicineId)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| medicineId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript


	app.controller("testController", function($scope, MedicinesController,RequestAccessTokenRequest,MedicinesResponse,Constituent,Schedule,GenericsResponse,FoodItemsResponse,LabTestsResponse,LabTestData,DiseasesResponse,ExercisesResponse,SearchDiseasesResponse,AllDiseasesResponse,MedicineInteractionsResponse,Interaction,Item,SearchExercisesResponse,SearchExercisesResponse16,AllExercisesResponse,AllExercisesResponse18,SearchFoodItemsResponse,AllFoodItemsResponse,SearchFoodBrandsResponse,AllFoodBrandsResponse,FoodItemsByBrandResponse,SearchFoodRestaurantsResponse,AllFoodRestaurantsResponse,FoodItemsByRestaurantResponse,AllGenericsResponse,MedicinesByGenericResponse,SearchLabTestsResponse,AllLabTestsResponse,LabTestData34,SearchMedicinesResponse,AllMedicinesResponse,AlternativeMedicinesResponse,SimilarMedicinesResponse,PopularUsageResponse,Usage,CommonSideEffectsResponse,SideEffect,SearchManufacturersResponse,AllManufacturersResponse,MedicinesByManufacturerResponse){
	    var medicineId = medicine_id;


		var result = MedicinesController.getPopularUsage(medicineId);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```



#### <a name="get_medicines_by_manufacturer"></a>![Method: ](https://apidocs.io/img/method.png ".MedicinesController.getMedicinesByManufacturer") getMedicinesByManufacturer

> Get medicines by a manufacturer


```javascript
function getMedicinesByManufacturer(page, size, manufacturerId)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| page |  ``` Required ```  | TODO: Add a parameter description |
| size |  ``` Required ```  | TODO: Add a parameter description |
| manufacturerId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript


	app.controller("testController", function($scope, MedicinesController,RequestAccessTokenRequest,MedicinesResponse,Constituent,Schedule,GenericsResponse,FoodItemsResponse,LabTestsResponse,LabTestData,DiseasesResponse,ExercisesResponse,SearchDiseasesResponse,AllDiseasesResponse,MedicineInteractionsResponse,Interaction,Item,SearchExercisesResponse,SearchExercisesResponse16,AllExercisesResponse,AllExercisesResponse18,SearchFoodItemsResponse,AllFoodItemsResponse,SearchFoodBrandsResponse,AllFoodBrandsResponse,FoodItemsByBrandResponse,SearchFoodRestaurantsResponse,AllFoodRestaurantsResponse,FoodItemsByRestaurantResponse,AllGenericsResponse,MedicinesByGenericResponse,SearchLabTestsResponse,AllLabTestsResponse,LabTestData34,SearchMedicinesResponse,AllMedicinesResponse,AlternativeMedicinesResponse,SimilarMedicinesResponse,PopularUsageResponse,Usage,CommonSideEffectsResponse,SideEffect,SearchManufacturersResponse,AllManufacturersResponse,MedicinesByManufacturerResponse){
	    var page = 57;
    var size = 57;
    var manufacturerId = manufacturer_id;


		var result = MedicinesController.getMedicinesByManufacturer(page, size, manufacturerId);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```



#### <a name="get_similar_medicines"></a>![Method: ](https://apidocs.io/img/method.png ".MedicinesController.getSimilarMedicines") getSimilarMedicines

> Get similar medicines


```javascript
function getSimilarMedicines(medicineId)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| medicineId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript


	app.controller("testController", function($scope, MedicinesController,RequestAccessTokenRequest,MedicinesResponse,Constituent,Schedule,GenericsResponse,FoodItemsResponse,LabTestsResponse,LabTestData,DiseasesResponse,ExercisesResponse,SearchDiseasesResponse,AllDiseasesResponse,MedicineInteractionsResponse,Interaction,Item,SearchExercisesResponse,SearchExercisesResponse16,AllExercisesResponse,AllExercisesResponse18,SearchFoodItemsResponse,AllFoodItemsResponse,SearchFoodBrandsResponse,AllFoodBrandsResponse,FoodItemsByBrandResponse,SearchFoodRestaurantsResponse,AllFoodRestaurantsResponse,FoodItemsByRestaurantResponse,AllGenericsResponse,MedicinesByGenericResponse,SearchLabTestsResponse,AllLabTestsResponse,LabTestData34,SearchMedicinesResponse,AllMedicinesResponse,AlternativeMedicinesResponse,SimilarMedicinesResponse,PopularUsageResponse,Usage,CommonSideEffectsResponse,SideEffect,SearchManufacturersResponse,AllManufacturersResponse,MedicinesByManufacturerResponse){
	    var medicineId = medicine_id;


		var result = MedicinesController.getSimilarMedicines(medicineId);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```



#### <a name="get_medicine"></a>![Method: ](https://apidocs.io/img/method.png ".MedicinesController.getMedicine") getMedicine

> Get a medicine


```javascript
function getMedicine(medicineId)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| medicineId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript


	app.controller("testController", function($scope, MedicinesController,RequestAccessTokenRequest,MedicinesResponse,Constituent,Schedule,GenericsResponse,FoodItemsResponse,LabTestsResponse,LabTestData,DiseasesResponse,ExercisesResponse,SearchDiseasesResponse,AllDiseasesResponse,MedicineInteractionsResponse,Interaction,Item,SearchExercisesResponse,SearchExercisesResponse16,AllExercisesResponse,AllExercisesResponse18,SearchFoodItemsResponse,AllFoodItemsResponse,SearchFoodBrandsResponse,AllFoodBrandsResponse,FoodItemsByBrandResponse,SearchFoodRestaurantsResponse,AllFoodRestaurantsResponse,FoodItemsByRestaurantResponse,AllGenericsResponse,MedicinesByGenericResponse,SearchLabTestsResponse,AllLabTestsResponse,LabTestData34,SearchMedicinesResponse,AllMedicinesResponse,AlternativeMedicinesResponse,SimilarMedicinesResponse,PopularUsageResponse,Usage,CommonSideEffectsResponse,SideEffect,SearchManufacturersResponse,AllManufacturersResponse,MedicinesByManufacturerResponse){
	    var medicineId = medicine_id;


		var result = MedicinesController.getMedicine(medicineId);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```



#### <a name="get_all_medicines"></a>![Method: ](https://apidocs.io/img/method.png ".MedicinesController.getAllMedicines") getAllMedicines

> Get all medicines


```javascript
function getAllMedicines(page, size)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| page |  ``` Required ```  | TODO: Add a parameter description |
| size |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript


	app.controller("testController", function($scope, MedicinesController,RequestAccessTokenRequest,MedicinesResponse,Constituent,Schedule,GenericsResponse,FoodItemsResponse,LabTestsResponse,LabTestData,DiseasesResponse,ExercisesResponse,SearchDiseasesResponse,AllDiseasesResponse,MedicineInteractionsResponse,Interaction,Item,SearchExercisesResponse,SearchExercisesResponse16,AllExercisesResponse,AllExercisesResponse18,SearchFoodItemsResponse,AllFoodItemsResponse,SearchFoodBrandsResponse,AllFoodBrandsResponse,FoodItemsByBrandResponse,SearchFoodRestaurantsResponse,AllFoodRestaurantsResponse,FoodItemsByRestaurantResponse,AllGenericsResponse,MedicinesByGenericResponse,SearchLabTestsResponse,AllLabTestsResponse,LabTestData34,SearchMedicinesResponse,AllMedicinesResponse,AlternativeMedicinesResponse,SimilarMedicinesResponse,PopularUsageResponse,Usage,CommonSideEffectsResponse,SideEffect,SearchManufacturersResponse,AllManufacturersResponse,MedicinesByManufacturerResponse){
	    var page = 1;
    var size = 10;


		var result = MedicinesController.getAllMedicines(page, size);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```



#### <a name="search_medicines"></a>![Method: ](https://apidocs.io/img/method.png ".MedicinesController.searchMedicines") searchMedicines

> Search a medicine by name


```javascript
function searchMedicines(medicineQuery)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| medicineQuery |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript


	app.controller("testController", function($scope, MedicinesController,RequestAccessTokenRequest,MedicinesResponse,Constituent,Schedule,GenericsResponse,FoodItemsResponse,LabTestsResponse,LabTestData,DiseasesResponse,ExercisesResponse,SearchDiseasesResponse,AllDiseasesResponse,MedicineInteractionsResponse,Interaction,Item,SearchExercisesResponse,SearchExercisesResponse16,AllExercisesResponse,AllExercisesResponse18,SearchFoodItemsResponse,AllFoodItemsResponse,SearchFoodBrandsResponse,AllFoodBrandsResponse,FoodItemsByBrandResponse,SearchFoodRestaurantsResponse,AllFoodRestaurantsResponse,FoodItemsByRestaurantResponse,AllGenericsResponse,MedicinesByGenericResponse,SearchLabTestsResponse,AllLabTestsResponse,LabTestData34,SearchMedicinesResponse,AllMedicinesResponse,AlternativeMedicinesResponse,SimilarMedicinesResponse,PopularUsageResponse,Usage,CommonSideEffectsResponse,SideEffect,SearchManufacturersResponse,AllManufacturersResponse,MedicinesByManufacturerResponse){
	    var medicineQuery = medicine_query;


		var result = MedicinesController.searchMedicines(medicineQuery);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```



#### <a name="get_all_manufacturers"></a>![Method: ](https://apidocs.io/img/method.png ".MedicinesController.getAllManufacturers") getAllManufacturers

> Get all manufacturers


```javascript
function getAllManufacturers(page, size)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| page |  ``` Required ```  | TODO: Add a parameter description |
| size |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript


	app.controller("testController", function($scope, MedicinesController,RequestAccessTokenRequest,MedicinesResponse,Constituent,Schedule,GenericsResponse,FoodItemsResponse,LabTestsResponse,LabTestData,DiseasesResponse,ExercisesResponse,SearchDiseasesResponse,AllDiseasesResponse,MedicineInteractionsResponse,Interaction,Item,SearchExercisesResponse,SearchExercisesResponse16,AllExercisesResponse,AllExercisesResponse18,SearchFoodItemsResponse,AllFoodItemsResponse,SearchFoodBrandsResponse,AllFoodBrandsResponse,FoodItemsByBrandResponse,SearchFoodRestaurantsResponse,AllFoodRestaurantsResponse,FoodItemsByRestaurantResponse,AllGenericsResponse,MedicinesByGenericResponse,SearchLabTestsResponse,AllLabTestsResponse,LabTestData34,SearchMedicinesResponse,AllMedicinesResponse,AlternativeMedicinesResponse,SimilarMedicinesResponse,PopularUsageResponse,Usage,CommonSideEffectsResponse,SideEffect,SearchManufacturersResponse,AllManufacturersResponse,MedicinesByManufacturerResponse){
	    var page = 1;
    var size = 10;


		var result = MedicinesController.getAllManufacturers(page, size);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```



#### <a name="get_alternative_medicines"></a>![Method: ](https://apidocs.io/img/method.png ".MedicinesController.getAlternativeMedicines") getAlternativeMedicines

> Get substitutes of a medicine


```javascript
function getAlternativeMedicines(page, size, medicineId)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| page |  ``` Required ```  | TODO: Add a parameter description |
| size |  ``` Required ```  | TODO: Add a parameter description |
| medicineId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript


	app.controller("testController", function($scope, MedicinesController,RequestAccessTokenRequest,MedicinesResponse,Constituent,Schedule,GenericsResponse,FoodItemsResponse,LabTestsResponse,LabTestData,DiseasesResponse,ExercisesResponse,SearchDiseasesResponse,AllDiseasesResponse,MedicineInteractionsResponse,Interaction,Item,SearchExercisesResponse,SearchExercisesResponse16,AllExercisesResponse,AllExercisesResponse18,SearchFoodItemsResponse,AllFoodItemsResponse,SearchFoodBrandsResponse,AllFoodBrandsResponse,FoodItemsByBrandResponse,SearchFoodRestaurantsResponse,AllFoodRestaurantsResponse,FoodItemsByRestaurantResponse,AllGenericsResponse,MedicinesByGenericResponse,SearchLabTestsResponse,AllLabTestsResponse,LabTestData34,SearchMedicinesResponse,AllMedicinesResponse,AlternativeMedicinesResponse,SimilarMedicinesResponse,PopularUsageResponse,Usage,CommonSideEffectsResponse,SideEffect,SearchManufacturersResponse,AllManufacturersResponse,MedicinesByManufacturerResponse){
	    var page = 15;
    var size = 15;
    var medicineId = medicine_id;


		var result = MedicinesController.getAlternativeMedicines(page, size, medicineId);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```



[Back to List of Controllers](#list_of_controllers)

### <a name="lab_tests_controller"></a>![Class: ](https://apidocs.io/img/class.png ".LabTestsController") LabTestsController

#### Get singleton instance

The singleton instance of the ``` LabTestsController ``` class can be accessed via Dependency Injection.

```js
	app.controller("testController", function($scope, LabTestsController,RequestAccessTokenRequest,MedicinesResponse,Constituent,Schedule,GenericsResponse,FoodItemsResponse,LabTestsResponse,LabTestData,DiseasesResponse,ExercisesResponse,SearchDiseasesResponse,AllDiseasesResponse,MedicineInteractionsResponse,Interaction,Item,SearchExercisesResponse,SearchExercisesResponse16,AllExercisesResponse,AllExercisesResponse18,SearchFoodItemsResponse,AllFoodItemsResponse,SearchFoodBrandsResponse,AllFoodBrandsResponse,FoodItemsByBrandResponse,SearchFoodRestaurantsResponse,AllFoodRestaurantsResponse,FoodItemsByRestaurantResponse,AllGenericsResponse,MedicinesByGenericResponse,SearchLabTestsResponse,AllLabTestsResponse,LabTestData34,SearchMedicinesResponse,AllMedicinesResponse,AlternativeMedicinesResponse,SimilarMedicinesResponse,PopularUsageResponse,Usage,CommonSideEffectsResponse,SideEffect,SearchManufacturersResponse,AllManufacturersResponse,MedicinesByManufacturerResponse){
	});
```

#### <a name="get_lab_test"></a>![Method: ](https://apidocs.io/img/method.png ".LabTestsController.getLabTest") getLabTest

> Get labtest by id


```javascript
function getLabTest(labTestId)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| labTestId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript


	app.controller("testController", function($scope, LabTestsController,RequestAccessTokenRequest,MedicinesResponse,Constituent,Schedule,GenericsResponse,FoodItemsResponse,LabTestsResponse,LabTestData,DiseasesResponse,ExercisesResponse,SearchDiseasesResponse,AllDiseasesResponse,MedicineInteractionsResponse,Interaction,Item,SearchExercisesResponse,SearchExercisesResponse16,AllExercisesResponse,AllExercisesResponse18,SearchFoodItemsResponse,AllFoodItemsResponse,SearchFoodBrandsResponse,AllFoodBrandsResponse,FoodItemsByBrandResponse,SearchFoodRestaurantsResponse,AllFoodRestaurantsResponse,FoodItemsByRestaurantResponse,AllGenericsResponse,MedicinesByGenericResponse,SearchLabTestsResponse,AllLabTestsResponse,LabTestData34,SearchMedicinesResponse,AllMedicinesResponse,AlternativeMedicinesResponse,SimilarMedicinesResponse,PopularUsageResponse,Usage,CommonSideEffectsResponse,SideEffect,SearchManufacturersResponse,AllManufacturersResponse,MedicinesByManufacturerResponse){
	    var labTestId = lab_test_id;


		var result = LabTestsController.getLabTest(labTestId);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```



#### <a name="get_all_lab_tests"></a>![Method: ](https://apidocs.io/img/method.png ".LabTestsController.getAllLabTests") getAllLabTests

> All Lab tests


```javascript
function getAllLabTests(page, size)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| page |  ``` Required ```  | TODO: Add a parameter description |
| size |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript


	app.controller("testController", function($scope, LabTestsController,RequestAccessTokenRequest,MedicinesResponse,Constituent,Schedule,GenericsResponse,FoodItemsResponse,LabTestsResponse,LabTestData,DiseasesResponse,ExercisesResponse,SearchDiseasesResponse,AllDiseasesResponse,MedicineInteractionsResponse,Interaction,Item,SearchExercisesResponse,SearchExercisesResponse16,AllExercisesResponse,AllExercisesResponse18,SearchFoodItemsResponse,AllFoodItemsResponse,SearchFoodBrandsResponse,AllFoodBrandsResponse,FoodItemsByBrandResponse,SearchFoodRestaurantsResponse,AllFoodRestaurantsResponse,FoodItemsByRestaurantResponse,AllGenericsResponse,MedicinesByGenericResponse,SearchLabTestsResponse,AllLabTestsResponse,LabTestData34,SearchMedicinesResponse,AllMedicinesResponse,AlternativeMedicinesResponse,SimilarMedicinesResponse,PopularUsageResponse,Usage,CommonSideEffectsResponse,SideEffect,SearchManufacturersResponse,AllManufacturersResponse,MedicinesByManufacturerResponse){
	    var page = 15;
    var size = 15;


		var result = LabTestsController.getAllLabTests(page, size);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```



#### <a name="search_lab_tests"></a>![Method: ](https://apidocs.io/img/method.png ".LabTestsController.searchLabTests") searchLabTests

> Search a lab test by name


```javascript
function searchLabTests(labTestQuery)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| labTestQuery |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript


	app.controller("testController", function($scope, LabTestsController,RequestAccessTokenRequest,MedicinesResponse,Constituent,Schedule,GenericsResponse,FoodItemsResponse,LabTestsResponse,LabTestData,DiseasesResponse,ExercisesResponse,SearchDiseasesResponse,AllDiseasesResponse,MedicineInteractionsResponse,Interaction,Item,SearchExercisesResponse,SearchExercisesResponse16,AllExercisesResponse,AllExercisesResponse18,SearchFoodItemsResponse,AllFoodItemsResponse,SearchFoodBrandsResponse,AllFoodBrandsResponse,FoodItemsByBrandResponse,SearchFoodRestaurantsResponse,AllFoodRestaurantsResponse,FoodItemsByRestaurantResponse,AllGenericsResponse,MedicinesByGenericResponse,SearchLabTestsResponse,AllLabTestsResponse,LabTestData34,SearchMedicinesResponse,AllMedicinesResponse,AlternativeMedicinesResponse,SimilarMedicinesResponse,PopularUsageResponse,Usage,CommonSideEffectsResponse,SideEffect,SearchManufacturersResponse,AllManufacturersResponse,MedicinesByManufacturerResponse){
	    var labTestQuery = lab_test_query;


		var result = LabTestsController.searchLabTests(labTestQuery);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```



[Back to List of Controllers](#list_of_controllers)

### <a name="generics_controller"></a>![Class: ](https://apidocs.io/img/class.png ".GenericsController") GenericsController

#### Get singleton instance

The singleton instance of the ``` GenericsController ``` class can be accessed via Dependency Injection.

```js
	app.controller("testController", function($scope, GenericsController,RequestAccessTokenRequest,MedicinesResponse,Constituent,Schedule,GenericsResponse,FoodItemsResponse,LabTestsResponse,LabTestData,DiseasesResponse,ExercisesResponse,SearchDiseasesResponse,AllDiseasesResponse,MedicineInteractionsResponse,Interaction,Item,SearchExercisesResponse,SearchExercisesResponse16,AllExercisesResponse,AllExercisesResponse18,SearchFoodItemsResponse,AllFoodItemsResponse,SearchFoodBrandsResponse,AllFoodBrandsResponse,FoodItemsByBrandResponse,SearchFoodRestaurantsResponse,AllFoodRestaurantsResponse,FoodItemsByRestaurantResponse,AllGenericsResponse,MedicinesByGenericResponse,SearchLabTestsResponse,AllLabTestsResponse,LabTestData34,SearchMedicinesResponse,AllMedicinesResponse,AlternativeMedicinesResponse,SimilarMedicinesResponse,PopularUsageResponse,Usage,CommonSideEffectsResponse,SideEffect,SearchManufacturersResponse,AllManufacturersResponse,MedicinesByManufacturerResponse){
	});
```

#### <a name="get_generic"></a>![Method: ](https://apidocs.io/img/method.png ".GenericsController.getGeneric") getGeneric

> Get a generic by id


```javascript
function getGeneric(genericId)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| genericId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript


	app.controller("testController", function($scope, GenericsController,RequestAccessTokenRequest,MedicinesResponse,Constituent,Schedule,GenericsResponse,FoodItemsResponse,LabTestsResponse,LabTestData,DiseasesResponse,ExercisesResponse,SearchDiseasesResponse,AllDiseasesResponse,MedicineInteractionsResponse,Interaction,Item,SearchExercisesResponse,SearchExercisesResponse16,AllExercisesResponse,AllExercisesResponse18,SearchFoodItemsResponse,AllFoodItemsResponse,SearchFoodBrandsResponse,AllFoodBrandsResponse,FoodItemsByBrandResponse,SearchFoodRestaurantsResponse,AllFoodRestaurantsResponse,FoodItemsByRestaurantResponse,AllGenericsResponse,MedicinesByGenericResponse,SearchLabTestsResponse,AllLabTestsResponse,LabTestData34,SearchMedicinesResponse,AllMedicinesResponse,AlternativeMedicinesResponse,SimilarMedicinesResponse,PopularUsageResponse,Usage,CommonSideEffectsResponse,SideEffect,SearchManufacturersResponse,AllManufacturersResponse,MedicinesByManufacturerResponse){
	    var genericId = generic_id;


		var result = GenericsController.getGeneric(genericId);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```



#### <a name="get_medicines_by_generic"></a>![Method: ](https://apidocs.io/img/method.png ".GenericsController.getMedicinesByGeneric") getMedicinesByGeneric

> Get medicines containing the generic


```javascript
function getMedicinesByGeneric(page, size, exclusive, genericId)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| page |  ``` Required ```  | TODO: Add a parameter description |
| size |  ``` Required ```  | TODO: Add a parameter description |
| exclusive |  ``` Required ```  | TODO: Add a parameter description |
| genericId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript


	app.controller("testController", function($scope, GenericsController,RequestAccessTokenRequest,MedicinesResponse,Constituent,Schedule,GenericsResponse,FoodItemsResponse,LabTestsResponse,LabTestData,DiseasesResponse,ExercisesResponse,SearchDiseasesResponse,AllDiseasesResponse,MedicineInteractionsResponse,Interaction,Item,SearchExercisesResponse,SearchExercisesResponse16,AllExercisesResponse,AllExercisesResponse18,SearchFoodItemsResponse,AllFoodItemsResponse,SearchFoodBrandsResponse,AllFoodBrandsResponse,FoodItemsByBrandResponse,SearchFoodRestaurantsResponse,AllFoodRestaurantsResponse,FoodItemsByRestaurantResponse,AllGenericsResponse,MedicinesByGenericResponse,SearchLabTestsResponse,AllLabTestsResponse,LabTestData34,SearchMedicinesResponse,AllMedicinesResponse,AlternativeMedicinesResponse,SimilarMedicinesResponse,PopularUsageResponse,Usage,CommonSideEffectsResponse,SideEffect,SearchManufacturersResponse,AllManufacturersResponse,MedicinesByManufacturerResponse){
	    var page = 15;
    var size = 15;
    var exclusive = false;
    var genericId = generic_id;


		var result = GenericsController.getMedicinesByGeneric(page, size, exclusive, genericId);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```



#### <a name="get_all_generics"></a>![Method: ](https://apidocs.io/img/method.png ".GenericsController.getAllGenerics") getAllGenerics

> All generics


```javascript
function getAllGenerics(page, size)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| page |  ``` Required ```  | TODO: Add a parameter description |
| size |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript


	app.controller("testController", function($scope, GenericsController,RequestAccessTokenRequest,MedicinesResponse,Constituent,Schedule,GenericsResponse,FoodItemsResponse,LabTestsResponse,LabTestData,DiseasesResponse,ExercisesResponse,SearchDiseasesResponse,AllDiseasesResponse,MedicineInteractionsResponse,Interaction,Item,SearchExercisesResponse,SearchExercisesResponse16,AllExercisesResponse,AllExercisesResponse18,SearchFoodItemsResponse,AllFoodItemsResponse,SearchFoodBrandsResponse,AllFoodBrandsResponse,FoodItemsByBrandResponse,SearchFoodRestaurantsResponse,AllFoodRestaurantsResponse,FoodItemsByRestaurantResponse,AllGenericsResponse,MedicinesByGenericResponse,SearchLabTestsResponse,AllLabTestsResponse,LabTestData34,SearchMedicinesResponse,AllMedicinesResponse,AlternativeMedicinesResponse,SimilarMedicinesResponse,PopularUsageResponse,Usage,CommonSideEffectsResponse,SideEffect,SearchManufacturersResponse,AllManufacturersResponse,MedicinesByManufacturerResponse){
	    var page = 15;
    var size = 15;


		var result = GenericsController.getAllGenerics(page, size);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```



#### <a name="search_generics"></a>![Method: ](https://apidocs.io/img/method.png ".GenericsController.searchGenerics") searchGenerics

> Search a generic by name


```javascript
function searchGenerics(genericQuery)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| genericQuery |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript


	app.controller("testController", function($scope, GenericsController,RequestAccessTokenRequest,MedicinesResponse,Constituent,Schedule,GenericsResponse,FoodItemsResponse,LabTestsResponse,LabTestData,DiseasesResponse,ExercisesResponse,SearchDiseasesResponse,AllDiseasesResponse,MedicineInteractionsResponse,Interaction,Item,SearchExercisesResponse,SearchExercisesResponse16,AllExercisesResponse,AllExercisesResponse18,SearchFoodItemsResponse,AllFoodItemsResponse,SearchFoodBrandsResponse,AllFoodBrandsResponse,FoodItemsByBrandResponse,SearchFoodRestaurantsResponse,AllFoodRestaurantsResponse,FoodItemsByRestaurantResponse,AllGenericsResponse,MedicinesByGenericResponse,SearchLabTestsResponse,AllLabTestsResponse,LabTestData34,SearchMedicinesResponse,AllMedicinesResponse,AlternativeMedicinesResponse,SimilarMedicinesResponse,PopularUsageResponse,Usage,CommonSideEffectsResponse,SideEffect,SearchManufacturersResponse,AllManufacturersResponse,MedicinesByManufacturerResponse){
	    var genericQuery = generic_query;


		var result = GenericsController.searchGenerics(genericQuery);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```



[Back to List of Controllers](#list_of_controllers)

### <a name="food_controller"></a>![Class: ](https://apidocs.io/img/class.png ".FoodController") FoodController

#### Get singleton instance

The singleton instance of the ``` FoodController ``` class can be accessed via Dependency Injection.

```js
	app.controller("testController", function($scope, FoodController,RequestAccessTokenRequest,MedicinesResponse,Constituent,Schedule,GenericsResponse,FoodItemsResponse,LabTestsResponse,LabTestData,DiseasesResponse,ExercisesResponse,SearchDiseasesResponse,AllDiseasesResponse,MedicineInteractionsResponse,Interaction,Item,SearchExercisesResponse,SearchExercisesResponse16,AllExercisesResponse,AllExercisesResponse18,SearchFoodItemsResponse,AllFoodItemsResponse,SearchFoodBrandsResponse,AllFoodBrandsResponse,FoodItemsByBrandResponse,SearchFoodRestaurantsResponse,AllFoodRestaurantsResponse,FoodItemsByRestaurantResponse,AllGenericsResponse,MedicinesByGenericResponse,SearchLabTestsResponse,AllLabTestsResponse,LabTestData34,SearchMedicinesResponse,AllMedicinesResponse,AlternativeMedicinesResponse,SimilarMedicinesResponse,PopularUsageResponse,Usage,CommonSideEffectsResponse,SideEffect,SearchManufacturersResponse,AllManufacturersResponse,MedicinesByManufacturerResponse){
	});
```

#### <a name="search_food_restaurants"></a>![Method: ](https://apidocs.io/img/method.png ".FoodController.searchFoodRestaurants") searchFoodRestaurants

> TODO: Add Description


```javascript
function searchFoodRestaurants(foodRestaurantQuery)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| foodRestaurantQuery |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript


	app.controller("testController", function($scope, FoodController,RequestAccessTokenRequest,MedicinesResponse,Constituent,Schedule,GenericsResponse,FoodItemsResponse,LabTestsResponse,LabTestData,DiseasesResponse,ExercisesResponse,SearchDiseasesResponse,AllDiseasesResponse,MedicineInteractionsResponse,Interaction,Item,SearchExercisesResponse,SearchExercisesResponse16,AllExercisesResponse,AllExercisesResponse18,SearchFoodItemsResponse,AllFoodItemsResponse,SearchFoodBrandsResponse,AllFoodBrandsResponse,FoodItemsByBrandResponse,SearchFoodRestaurantsResponse,AllFoodRestaurantsResponse,FoodItemsByRestaurantResponse,AllGenericsResponse,MedicinesByGenericResponse,SearchLabTestsResponse,AllLabTestsResponse,LabTestData34,SearchMedicinesResponse,AllMedicinesResponse,AlternativeMedicinesResponse,SimilarMedicinesResponse,PopularUsageResponse,Usage,CommonSideEffectsResponse,SideEffect,SearchManufacturersResponse,AllManufacturersResponse,MedicinesByManufacturerResponse){
	    var foodRestaurantQuery = food_restaurant_query;


		var result = FoodController.searchFoodRestaurants(foodRestaurantQuery);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```



#### <a name="get_all_food_brands"></a>![Method: ](https://apidocs.io/img/method.png ".FoodController.getAllFoodBrands") getAllFoodBrands

> TODO: Add Description


```javascript
function getAllFoodBrands(page, size)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| page |  ``` Required ```  | TODO: Add a parameter description |
| size |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript


	app.controller("testController", function($scope, FoodController,RequestAccessTokenRequest,MedicinesResponse,Constituent,Schedule,GenericsResponse,FoodItemsResponse,LabTestsResponse,LabTestData,DiseasesResponse,ExercisesResponse,SearchDiseasesResponse,AllDiseasesResponse,MedicineInteractionsResponse,Interaction,Item,SearchExercisesResponse,SearchExercisesResponse16,AllExercisesResponse,AllExercisesResponse18,SearchFoodItemsResponse,AllFoodItemsResponse,SearchFoodBrandsResponse,AllFoodBrandsResponse,FoodItemsByBrandResponse,SearchFoodRestaurantsResponse,AllFoodRestaurantsResponse,FoodItemsByRestaurantResponse,AllGenericsResponse,MedicinesByGenericResponse,SearchLabTestsResponse,AllLabTestsResponse,LabTestData34,SearchMedicinesResponse,AllMedicinesResponse,AlternativeMedicinesResponse,SimilarMedicinesResponse,PopularUsageResponse,Usage,CommonSideEffectsResponse,SideEffect,SearchManufacturersResponse,AllManufacturersResponse,MedicinesByManufacturerResponse){
	    var page = 1;
    var size = 10;


		var result = FoodController.getAllFoodBrands(page, size);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```



#### <a name="get_food_items_by_restaurant"></a>![Method: ](https://apidocs.io/img/method.png ".FoodController.getFoodItemsByRestaurant") getFoodItemsByRestaurant

> TODO: Add Description


```javascript
function getFoodItemsByRestaurant(page, size, foodRestaurantId)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| page |  ``` Required ```  | TODO: Add a parameter description |
| size |  ``` Required ```  | TODO: Add a parameter description |
| foodRestaurantId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript


	app.controller("testController", function($scope, FoodController,RequestAccessTokenRequest,MedicinesResponse,Constituent,Schedule,GenericsResponse,FoodItemsResponse,LabTestsResponse,LabTestData,DiseasesResponse,ExercisesResponse,SearchDiseasesResponse,AllDiseasesResponse,MedicineInteractionsResponse,Interaction,Item,SearchExercisesResponse,SearchExercisesResponse16,AllExercisesResponse,AllExercisesResponse18,SearchFoodItemsResponse,AllFoodItemsResponse,SearchFoodBrandsResponse,AllFoodBrandsResponse,FoodItemsByBrandResponse,SearchFoodRestaurantsResponse,AllFoodRestaurantsResponse,FoodItemsByRestaurantResponse,AllGenericsResponse,MedicinesByGenericResponse,SearchLabTestsResponse,AllLabTestsResponse,LabTestData34,SearchMedicinesResponse,AllMedicinesResponse,AlternativeMedicinesResponse,SimilarMedicinesResponse,PopularUsageResponse,Usage,CommonSideEffectsResponse,SideEffect,SearchManufacturersResponse,AllManufacturersResponse,MedicinesByManufacturerResponse){
	    var page = 15;
    var size = 15;
    var foodRestaurantId = food_restaurant_id;


		var result = FoodController.getFoodItemsByRestaurant(page, size, foodRestaurantId);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```



#### <a name="search_food_brands"></a>![Method: ](https://apidocs.io/img/method.png ".FoodController.searchFoodBrands") searchFoodBrands

> TODO: Add Description


```javascript
function searchFoodBrands(foodBrandQuery)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| foodBrandQuery |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript


	app.controller("testController", function($scope, FoodController,RequestAccessTokenRequest,MedicinesResponse,Constituent,Schedule,GenericsResponse,FoodItemsResponse,LabTestsResponse,LabTestData,DiseasesResponse,ExercisesResponse,SearchDiseasesResponse,AllDiseasesResponse,MedicineInteractionsResponse,Interaction,Item,SearchExercisesResponse,SearchExercisesResponse16,AllExercisesResponse,AllExercisesResponse18,SearchFoodItemsResponse,AllFoodItemsResponse,SearchFoodBrandsResponse,AllFoodBrandsResponse,FoodItemsByBrandResponse,SearchFoodRestaurantsResponse,AllFoodRestaurantsResponse,FoodItemsByRestaurantResponse,AllGenericsResponse,MedicinesByGenericResponse,SearchLabTestsResponse,AllLabTestsResponse,LabTestData34,SearchMedicinesResponse,AllMedicinesResponse,AlternativeMedicinesResponse,SimilarMedicinesResponse,PopularUsageResponse,Usage,CommonSideEffectsResponse,SideEffect,SearchManufacturersResponse,AllManufacturersResponse,MedicinesByManufacturerResponse){
	    var foodBrandQuery = food_brand_query;


		var result = FoodController.searchFoodBrands(foodBrandQuery);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```



#### <a name="get_food_item"></a>![Method: ](https://apidocs.io/img/method.png ".FoodController.getFoodItem") getFoodItem

> TODO: Add Description


```javascript
function getFoodItem(foodItemId)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| foodItemId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript


	app.controller("testController", function($scope, FoodController,RequestAccessTokenRequest,MedicinesResponse,Constituent,Schedule,GenericsResponse,FoodItemsResponse,LabTestsResponse,LabTestData,DiseasesResponse,ExercisesResponse,SearchDiseasesResponse,AllDiseasesResponse,MedicineInteractionsResponse,Interaction,Item,SearchExercisesResponse,SearchExercisesResponse16,AllExercisesResponse,AllExercisesResponse18,SearchFoodItemsResponse,AllFoodItemsResponse,SearchFoodBrandsResponse,AllFoodBrandsResponse,FoodItemsByBrandResponse,SearchFoodRestaurantsResponse,AllFoodRestaurantsResponse,FoodItemsByRestaurantResponse,AllGenericsResponse,MedicinesByGenericResponse,SearchLabTestsResponse,AllLabTestsResponse,LabTestData34,SearchMedicinesResponse,AllMedicinesResponse,AlternativeMedicinesResponse,SimilarMedicinesResponse,PopularUsageResponse,Usage,CommonSideEffectsResponse,SideEffect,SearchManufacturersResponse,AllManufacturersResponse,MedicinesByManufacturerResponse){
	    var foodItemId = food_item_id;


		var result = FoodController.getFoodItem(foodItemId);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```



#### <a name="get_all_food_items"></a>![Method: ](https://apidocs.io/img/method.png ".FoodController.getAllFoodItems") getAllFoodItems

> TODO: Add Description


```javascript
function getAllFoodItems(page, size)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| page |  ``` Required ```  | TODO: Add a parameter description |
| size |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript


	app.controller("testController", function($scope, FoodController,RequestAccessTokenRequest,MedicinesResponse,Constituent,Schedule,GenericsResponse,FoodItemsResponse,LabTestsResponse,LabTestData,DiseasesResponse,ExercisesResponse,SearchDiseasesResponse,AllDiseasesResponse,MedicineInteractionsResponse,Interaction,Item,SearchExercisesResponse,SearchExercisesResponse16,AllExercisesResponse,AllExercisesResponse18,SearchFoodItemsResponse,AllFoodItemsResponse,SearchFoodBrandsResponse,AllFoodBrandsResponse,FoodItemsByBrandResponse,SearchFoodRestaurantsResponse,AllFoodRestaurantsResponse,FoodItemsByRestaurantResponse,AllGenericsResponse,MedicinesByGenericResponse,SearchLabTestsResponse,AllLabTestsResponse,LabTestData34,SearchMedicinesResponse,AllMedicinesResponse,AlternativeMedicinesResponse,SimilarMedicinesResponse,PopularUsageResponse,Usage,CommonSideEffectsResponse,SideEffect,SearchManufacturersResponse,AllManufacturersResponse,MedicinesByManufacturerResponse){
	    var page = 15;
    var size = 15;


		var result = FoodController.getAllFoodItems(page, size);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```



#### <a name="search_food_items"></a>![Method: ](https://apidocs.io/img/method.png ".FoodController.searchFoodItems") searchFoodItems

> TODO: Add Description


```javascript
function searchFoodItems(foodItemQuery)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| foodItemQuery |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript


	app.controller("testController", function($scope, FoodController,RequestAccessTokenRequest,MedicinesResponse,Constituent,Schedule,GenericsResponse,FoodItemsResponse,LabTestsResponse,LabTestData,DiseasesResponse,ExercisesResponse,SearchDiseasesResponse,AllDiseasesResponse,MedicineInteractionsResponse,Interaction,Item,SearchExercisesResponse,SearchExercisesResponse16,AllExercisesResponse,AllExercisesResponse18,SearchFoodItemsResponse,AllFoodItemsResponse,SearchFoodBrandsResponse,AllFoodBrandsResponse,FoodItemsByBrandResponse,SearchFoodRestaurantsResponse,AllFoodRestaurantsResponse,FoodItemsByRestaurantResponse,AllGenericsResponse,MedicinesByGenericResponse,SearchLabTestsResponse,AllLabTestsResponse,LabTestData34,SearchMedicinesResponse,AllMedicinesResponse,AlternativeMedicinesResponse,SimilarMedicinesResponse,PopularUsageResponse,Usage,CommonSideEffectsResponse,SideEffect,SearchManufacturersResponse,AllManufacturersResponse,MedicinesByManufacturerResponse){
	    var foodItemQuery = food_item_query;


		var result = FoodController.searchFoodItems(foodItemQuery);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```



#### <a name="get_all_food_restaurants"></a>![Method: ](https://apidocs.io/img/method.png ".FoodController.getAllFoodRestaurants") getAllFoodRestaurants

> TODO: Add Description


```javascript
function getAllFoodRestaurants(page, size)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| page |  ``` Required ```  | TODO: Add a parameter description |
| size |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript


	app.controller("testController", function($scope, FoodController,RequestAccessTokenRequest,MedicinesResponse,Constituent,Schedule,GenericsResponse,FoodItemsResponse,LabTestsResponse,LabTestData,DiseasesResponse,ExercisesResponse,SearchDiseasesResponse,AllDiseasesResponse,MedicineInteractionsResponse,Interaction,Item,SearchExercisesResponse,SearchExercisesResponse16,AllExercisesResponse,AllExercisesResponse18,SearchFoodItemsResponse,AllFoodItemsResponse,SearchFoodBrandsResponse,AllFoodBrandsResponse,FoodItemsByBrandResponse,SearchFoodRestaurantsResponse,AllFoodRestaurantsResponse,FoodItemsByRestaurantResponse,AllGenericsResponse,MedicinesByGenericResponse,SearchLabTestsResponse,AllLabTestsResponse,LabTestData34,SearchMedicinesResponse,AllMedicinesResponse,AlternativeMedicinesResponse,SimilarMedicinesResponse,PopularUsageResponse,Usage,CommonSideEffectsResponse,SideEffect,SearchManufacturersResponse,AllManufacturersResponse,MedicinesByManufacturerResponse){
	    var page = 1;
    var size = 10;


		var result = FoodController.getAllFoodRestaurants(page, size);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```



#### <a name="get_food_items_by_brand"></a>![Method: ](https://apidocs.io/img/method.png ".FoodController.getFoodItemsByBrand") getFoodItemsByBrand

> TODO: Add Description


```javascript
function getFoodItemsByBrand(page, size, foodBrandId)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| page |  ``` Required ```  | TODO: Add a parameter description |
| size |  ``` Required ```  | TODO: Add a parameter description |
| foodBrandId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript


	app.controller("testController", function($scope, FoodController,RequestAccessTokenRequest,MedicinesResponse,Constituent,Schedule,GenericsResponse,FoodItemsResponse,LabTestsResponse,LabTestData,DiseasesResponse,ExercisesResponse,SearchDiseasesResponse,AllDiseasesResponse,MedicineInteractionsResponse,Interaction,Item,SearchExercisesResponse,SearchExercisesResponse16,AllExercisesResponse,AllExercisesResponse18,SearchFoodItemsResponse,AllFoodItemsResponse,SearchFoodBrandsResponse,AllFoodBrandsResponse,FoodItemsByBrandResponse,SearchFoodRestaurantsResponse,AllFoodRestaurantsResponse,FoodItemsByRestaurantResponse,AllGenericsResponse,MedicinesByGenericResponse,SearchLabTestsResponse,AllLabTestsResponse,LabTestData34,SearchMedicinesResponse,AllMedicinesResponse,AlternativeMedicinesResponse,SimilarMedicinesResponse,PopularUsageResponse,Usage,CommonSideEffectsResponse,SideEffect,SearchManufacturersResponse,AllManufacturersResponse,MedicinesByManufacturerResponse){
	    var page = 15;
    var size = 15;
    var foodBrandId = food_brand_id;


		var result = FoodController.getFoodItemsByBrand(page, size, foodBrandId);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```



[Back to List of Controllers](#list_of_controllers)

### <a name="exercises_controller"></a>![Class: ](https://apidocs.io/img/class.png ".ExercisesController") ExercisesController

#### Get singleton instance

The singleton instance of the ``` ExercisesController ``` class can be accessed via Dependency Injection.

```js
	app.controller("testController", function($scope, ExercisesController,RequestAccessTokenRequest,MedicinesResponse,Constituent,Schedule,GenericsResponse,FoodItemsResponse,LabTestsResponse,LabTestData,DiseasesResponse,ExercisesResponse,SearchDiseasesResponse,AllDiseasesResponse,MedicineInteractionsResponse,Interaction,Item,SearchExercisesResponse,SearchExercisesResponse16,AllExercisesResponse,AllExercisesResponse18,SearchFoodItemsResponse,AllFoodItemsResponse,SearchFoodBrandsResponse,AllFoodBrandsResponse,FoodItemsByBrandResponse,SearchFoodRestaurantsResponse,AllFoodRestaurantsResponse,FoodItemsByRestaurantResponse,AllGenericsResponse,MedicinesByGenericResponse,SearchLabTestsResponse,AllLabTestsResponse,LabTestData34,SearchMedicinesResponse,AllMedicinesResponse,AlternativeMedicinesResponse,SimilarMedicinesResponse,PopularUsageResponse,Usage,CommonSideEffectsResponse,SideEffect,SearchManufacturersResponse,AllManufacturersResponse,MedicinesByManufacturerResponse){
	});
```

#### <a name="get_exercise"></a>![Method: ](https://apidocs.io/img/method.png ".ExercisesController.getExercise") getExercise

> TODO: Add Description


```javascript
function getExercise(exerciseId)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| exerciseId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript


	app.controller("testController", function($scope, ExercisesController,RequestAccessTokenRequest,MedicinesResponse,Constituent,Schedule,GenericsResponse,FoodItemsResponse,LabTestsResponse,LabTestData,DiseasesResponse,ExercisesResponse,SearchDiseasesResponse,AllDiseasesResponse,MedicineInteractionsResponse,Interaction,Item,SearchExercisesResponse,SearchExercisesResponse16,AllExercisesResponse,AllExercisesResponse18,SearchFoodItemsResponse,AllFoodItemsResponse,SearchFoodBrandsResponse,AllFoodBrandsResponse,FoodItemsByBrandResponse,SearchFoodRestaurantsResponse,AllFoodRestaurantsResponse,FoodItemsByRestaurantResponse,AllGenericsResponse,MedicinesByGenericResponse,SearchLabTestsResponse,AllLabTestsResponse,LabTestData34,SearchMedicinesResponse,AllMedicinesResponse,AlternativeMedicinesResponse,SimilarMedicinesResponse,PopularUsageResponse,Usage,CommonSideEffectsResponse,SideEffect,SearchManufacturersResponse,AllManufacturersResponse,MedicinesByManufacturerResponse){
	    var exerciseId = exercise_id;


		var result = ExercisesController.getExercise(exerciseId);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```



#### <a name="get_all_exercises"></a>![Method: ](https://apidocs.io/img/method.png ".ExercisesController.getAllExercises") getAllExercises

> TODO: Add Description


```javascript
function getAllExercises(page, size)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| page |  ``` Required ```  | TODO: Add a parameter description |
| size |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript


	app.controller("testController", function($scope, ExercisesController,RequestAccessTokenRequest,MedicinesResponse,Constituent,Schedule,GenericsResponse,FoodItemsResponse,LabTestsResponse,LabTestData,DiseasesResponse,ExercisesResponse,SearchDiseasesResponse,AllDiseasesResponse,MedicineInteractionsResponse,Interaction,Item,SearchExercisesResponse,SearchExercisesResponse16,AllExercisesResponse,AllExercisesResponse18,SearchFoodItemsResponse,AllFoodItemsResponse,SearchFoodBrandsResponse,AllFoodBrandsResponse,FoodItemsByBrandResponse,SearchFoodRestaurantsResponse,AllFoodRestaurantsResponse,FoodItemsByRestaurantResponse,AllGenericsResponse,MedicinesByGenericResponse,SearchLabTestsResponse,AllLabTestsResponse,LabTestData34,SearchMedicinesResponse,AllMedicinesResponse,AlternativeMedicinesResponse,SimilarMedicinesResponse,PopularUsageResponse,Usage,CommonSideEffectsResponse,SideEffect,SearchManufacturersResponse,AllManufacturersResponse,MedicinesByManufacturerResponse){
	    var page = 1;
    var size = 10;


		var result = ExercisesController.getAllExercises(page, size);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```



#### <a name="search_exercises"></a>![Method: ](https://apidocs.io/img/method.png ".ExercisesController.searchExercises") searchExercises

> TODO: Add Description


```javascript
function searchExercises(exerciseQuery)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| exerciseQuery |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript


	app.controller("testController", function($scope, ExercisesController,RequestAccessTokenRequest,MedicinesResponse,Constituent,Schedule,GenericsResponse,FoodItemsResponse,LabTestsResponse,LabTestData,DiseasesResponse,ExercisesResponse,SearchDiseasesResponse,AllDiseasesResponse,MedicineInteractionsResponse,Interaction,Item,SearchExercisesResponse,SearchExercisesResponse16,AllExercisesResponse,AllExercisesResponse18,SearchFoodItemsResponse,AllFoodItemsResponse,SearchFoodBrandsResponse,AllFoodBrandsResponse,FoodItemsByBrandResponse,SearchFoodRestaurantsResponse,AllFoodRestaurantsResponse,FoodItemsByRestaurantResponse,AllGenericsResponse,MedicinesByGenericResponse,SearchLabTestsResponse,AllLabTestsResponse,LabTestData34,SearchMedicinesResponse,AllMedicinesResponse,AlternativeMedicinesResponse,SimilarMedicinesResponse,PopularUsageResponse,Usage,CommonSideEffectsResponse,SideEffect,SearchManufacturersResponse,AllManufacturersResponse,MedicinesByManufacturerResponse){
	    var exerciseQuery = exercise_query;


		var result = ExercisesController.searchExercises(exerciseQuery);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```



[Back to List of Controllers](#list_of_controllers)

### <a name="drug_interactions_controller"></a>![Class: ](https://apidocs.io/img/class.png ".DrugInteractionsController") DrugInteractionsController

#### Get singleton instance

The singleton instance of the ``` DrugInteractionsController ``` class can be accessed via Dependency Injection.

```js
	app.controller("testController", function($scope, DrugInteractionsController,RequestAccessTokenRequest,MedicinesResponse,Constituent,Schedule,GenericsResponse,FoodItemsResponse,LabTestsResponse,LabTestData,DiseasesResponse,ExercisesResponse,SearchDiseasesResponse,AllDiseasesResponse,MedicineInteractionsResponse,Interaction,Item,SearchExercisesResponse,SearchExercisesResponse16,AllExercisesResponse,AllExercisesResponse18,SearchFoodItemsResponse,AllFoodItemsResponse,SearchFoodBrandsResponse,AllFoodBrandsResponse,FoodItemsByBrandResponse,SearchFoodRestaurantsResponse,AllFoodRestaurantsResponse,FoodItemsByRestaurantResponse,AllGenericsResponse,MedicinesByGenericResponse,SearchLabTestsResponse,AllLabTestsResponse,LabTestData34,SearchMedicinesResponse,AllMedicinesResponse,AlternativeMedicinesResponse,SimilarMedicinesResponse,PopularUsageResponse,Usage,CommonSideEffectsResponse,SideEffect,SearchManufacturersResponse,AllManufacturersResponse,MedicinesByManufacturerResponse){
	});
```

#### <a name="get_generics_interactions"></a>![Method: ](https://apidocs.io/img/method.png ".DrugInteractionsController.getGenericsInteractions") getGenericsInteractions

> TODO: Add Description


```javascript
function getGenericsInteractions(genericId)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| genericId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript


	app.controller("testController", function($scope, DrugInteractionsController,RequestAccessTokenRequest,MedicinesResponse,Constituent,Schedule,GenericsResponse,FoodItemsResponse,LabTestsResponse,LabTestData,DiseasesResponse,ExercisesResponse,SearchDiseasesResponse,AllDiseasesResponse,MedicineInteractionsResponse,Interaction,Item,SearchExercisesResponse,SearchExercisesResponse16,AllExercisesResponse,AllExercisesResponse18,SearchFoodItemsResponse,AllFoodItemsResponse,SearchFoodBrandsResponse,AllFoodBrandsResponse,FoodItemsByBrandResponse,SearchFoodRestaurantsResponse,AllFoodRestaurantsResponse,FoodItemsByRestaurantResponse,AllGenericsResponse,MedicinesByGenericResponse,SearchLabTestsResponse,AllLabTestsResponse,LabTestData34,SearchMedicinesResponse,AllMedicinesResponse,AlternativeMedicinesResponse,SimilarMedicinesResponse,PopularUsageResponse,Usage,CommonSideEffectsResponse,SideEffect,SearchManufacturersResponse,AllManufacturersResponse,MedicinesByManufacturerResponse){
	    var genericId = generic_id;


		var result = DrugInteractionsController.getGenericsInteractions(genericId);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```



#### <a name="get_medicine_interactions"></a>![Method: ](https://apidocs.io/img/method.png ".DrugInteractionsController.getMedicineInteractions") getMedicineInteractions

> TODO: Add Description


```javascript
function getMedicineInteractions(medicineId)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| medicineId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript


	app.controller("testController", function($scope, DrugInteractionsController,RequestAccessTokenRequest,MedicinesResponse,Constituent,Schedule,GenericsResponse,FoodItemsResponse,LabTestsResponse,LabTestData,DiseasesResponse,ExercisesResponse,SearchDiseasesResponse,AllDiseasesResponse,MedicineInteractionsResponse,Interaction,Item,SearchExercisesResponse,SearchExercisesResponse16,AllExercisesResponse,AllExercisesResponse18,SearchFoodItemsResponse,AllFoodItemsResponse,SearchFoodBrandsResponse,AllFoodBrandsResponse,FoodItemsByBrandResponse,SearchFoodRestaurantsResponse,AllFoodRestaurantsResponse,FoodItemsByRestaurantResponse,AllGenericsResponse,MedicinesByGenericResponse,SearchLabTestsResponse,AllLabTestsResponse,LabTestData34,SearchMedicinesResponse,AllMedicinesResponse,AlternativeMedicinesResponse,SimilarMedicinesResponse,PopularUsageResponse,Usage,CommonSideEffectsResponse,SideEffect,SearchManufacturersResponse,AllManufacturersResponse,MedicinesByManufacturerResponse){
	    var medicineId = medicine_id;


		var result = DrugInteractionsController.getMedicineInteractions(medicineId);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```



[Back to List of Controllers](#list_of_controllers)

### <a name="diseases_controller"></a>![Class: ](https://apidocs.io/img/class.png ".DiseasesController") DiseasesController

#### Get singleton instance

The singleton instance of the ``` DiseasesController ``` class can be accessed via Dependency Injection.

```js
	app.controller("testController", function($scope, DiseasesController,RequestAccessTokenRequest,MedicinesResponse,Constituent,Schedule,GenericsResponse,FoodItemsResponse,LabTestsResponse,LabTestData,DiseasesResponse,ExercisesResponse,SearchDiseasesResponse,AllDiseasesResponse,MedicineInteractionsResponse,Interaction,Item,SearchExercisesResponse,SearchExercisesResponse16,AllExercisesResponse,AllExercisesResponse18,SearchFoodItemsResponse,AllFoodItemsResponse,SearchFoodBrandsResponse,AllFoodBrandsResponse,FoodItemsByBrandResponse,SearchFoodRestaurantsResponse,AllFoodRestaurantsResponse,FoodItemsByRestaurantResponse,AllGenericsResponse,MedicinesByGenericResponse,SearchLabTestsResponse,AllLabTestsResponse,LabTestData34,SearchMedicinesResponse,AllMedicinesResponse,AlternativeMedicinesResponse,SimilarMedicinesResponse,PopularUsageResponse,Usage,CommonSideEffectsResponse,SideEffect,SearchManufacturersResponse,AllManufacturersResponse,MedicinesByManufacturerResponse){
	});
```

#### <a name="get_disease"></a>![Method: ](https://apidocs.io/img/method.png ".DiseasesController.getDisease") getDisease

> TODO: Add Description


```javascript
function getDisease(diseaseId)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| diseaseId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript


	app.controller("testController", function($scope, DiseasesController,RequestAccessTokenRequest,MedicinesResponse,Constituent,Schedule,GenericsResponse,FoodItemsResponse,LabTestsResponse,LabTestData,DiseasesResponse,ExercisesResponse,SearchDiseasesResponse,AllDiseasesResponse,MedicineInteractionsResponse,Interaction,Item,SearchExercisesResponse,SearchExercisesResponse16,AllExercisesResponse,AllExercisesResponse18,SearchFoodItemsResponse,AllFoodItemsResponse,SearchFoodBrandsResponse,AllFoodBrandsResponse,FoodItemsByBrandResponse,SearchFoodRestaurantsResponse,AllFoodRestaurantsResponse,FoodItemsByRestaurantResponse,AllGenericsResponse,MedicinesByGenericResponse,SearchLabTestsResponse,AllLabTestsResponse,LabTestData34,SearchMedicinesResponse,AllMedicinesResponse,AlternativeMedicinesResponse,SimilarMedicinesResponse,PopularUsageResponse,Usage,CommonSideEffectsResponse,SideEffect,SearchManufacturersResponse,AllManufacturersResponse,MedicinesByManufacturerResponse){
	    var diseaseId = disease_id;


		var result = DiseasesController.getDisease(diseaseId);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```



#### <a name="get_all_diseases"></a>![Method: ](https://apidocs.io/img/method.png ".DiseasesController.getAllDiseases") getAllDiseases

> TODO: Add Description


```javascript
function getAllDiseases(page, size)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| page |  ``` Required ```  | TODO: Add a parameter description |
| size |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript


	app.controller("testController", function($scope, DiseasesController,RequestAccessTokenRequest,MedicinesResponse,Constituent,Schedule,GenericsResponse,FoodItemsResponse,LabTestsResponse,LabTestData,DiseasesResponse,ExercisesResponse,SearchDiseasesResponse,AllDiseasesResponse,MedicineInteractionsResponse,Interaction,Item,SearchExercisesResponse,SearchExercisesResponse16,AllExercisesResponse,AllExercisesResponse18,SearchFoodItemsResponse,AllFoodItemsResponse,SearchFoodBrandsResponse,AllFoodBrandsResponse,FoodItemsByBrandResponse,SearchFoodRestaurantsResponse,AllFoodRestaurantsResponse,FoodItemsByRestaurantResponse,AllGenericsResponse,MedicinesByGenericResponse,SearchLabTestsResponse,AllLabTestsResponse,LabTestData34,SearchMedicinesResponse,AllMedicinesResponse,AlternativeMedicinesResponse,SimilarMedicinesResponse,PopularUsageResponse,Usage,CommonSideEffectsResponse,SideEffect,SearchManufacturersResponse,AllManufacturersResponse,MedicinesByManufacturerResponse){
	    var page = 1;
    var size = 10;


		var result = DiseasesController.getAllDiseases(page, size);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```



#### <a name="search_diseases"></a>![Method: ](https://apidocs.io/img/method.png ".DiseasesController.searchDiseases") searchDiseases

> TODO: Add Description


```javascript
function searchDiseases(diseaseQuery)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| diseaseQuery |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript


	app.controller("testController", function($scope, DiseasesController,RequestAccessTokenRequest,MedicinesResponse,Constituent,Schedule,GenericsResponse,FoodItemsResponse,LabTestsResponse,LabTestData,DiseasesResponse,ExercisesResponse,SearchDiseasesResponse,AllDiseasesResponse,MedicineInteractionsResponse,Interaction,Item,SearchExercisesResponse,SearchExercisesResponse16,AllExercisesResponse,AllExercisesResponse18,SearchFoodItemsResponse,AllFoodItemsResponse,SearchFoodBrandsResponse,AllFoodBrandsResponse,FoodItemsByBrandResponse,SearchFoodRestaurantsResponse,AllFoodRestaurantsResponse,FoodItemsByRestaurantResponse,AllGenericsResponse,MedicinesByGenericResponse,SearchLabTestsResponse,AllLabTestsResponse,LabTestData34,SearchMedicinesResponse,AllMedicinesResponse,AlternativeMedicinesResponse,SimilarMedicinesResponse,PopularUsageResponse,Usage,CommonSideEffectsResponse,SideEffect,SearchManufacturersResponse,AllManufacturersResponse,MedicinesByManufacturerResponse){
	    var diseaseQuery = disease_query;


		var result = DiseasesController.searchDiseases(diseaseQuery);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```



[Back to List of Controllers](#list_of_controllers)

### <a name="chat_controller"></a>![Class: ](https://apidocs.io/img/class.png ".ChatController") ChatController

#### Get singleton instance

The singleton instance of the ``` ChatController ``` class can be accessed via Dependency Injection.

```js
	app.controller("testController", function($scope, ChatController,RequestAccessTokenRequest,MedicinesResponse,Constituent,Schedule,GenericsResponse,FoodItemsResponse,LabTestsResponse,LabTestData,DiseasesResponse,ExercisesResponse,SearchDiseasesResponse,AllDiseasesResponse,MedicineInteractionsResponse,Interaction,Item,SearchExercisesResponse,SearchExercisesResponse16,AllExercisesResponse,AllExercisesResponse18,SearchFoodItemsResponse,AllFoodItemsResponse,SearchFoodBrandsResponse,AllFoodBrandsResponse,FoodItemsByBrandResponse,SearchFoodRestaurantsResponse,AllFoodRestaurantsResponse,FoodItemsByRestaurantResponse,AllGenericsResponse,MedicinesByGenericResponse,SearchLabTestsResponse,AllLabTestsResponse,LabTestData34,SearchMedicinesResponse,AllMedicinesResponse,AlternativeMedicinesResponse,SimilarMedicinesResponse,PopularUsageResponse,Usage,CommonSideEffectsResponse,SideEffect,SearchManufacturersResponse,AllManufacturersResponse,MedicinesByManufacturerResponse){
	});
```

#### <a name="get_excercises_chat"></a>![Method: ](https://apidocs.io/img/method.png ".ChatController.getExcercisesChat") getExcercisesChat

> TODO: Add Description


```javascript
function getExcercisesChat()
```

#### Example Usage

```javascript


	app.controller("testController", function($scope, ChatController,RequestAccessTokenRequest,MedicinesResponse,Constituent,Schedule,GenericsResponse,FoodItemsResponse,LabTestsResponse,LabTestData,DiseasesResponse,ExercisesResponse,SearchDiseasesResponse,AllDiseasesResponse,MedicineInteractionsResponse,Interaction,Item,SearchExercisesResponse,SearchExercisesResponse16,AllExercisesResponse,AllExercisesResponse18,SearchFoodItemsResponse,AllFoodItemsResponse,SearchFoodBrandsResponse,AllFoodBrandsResponse,FoodItemsByBrandResponse,SearchFoodRestaurantsResponse,AllFoodRestaurantsResponse,FoodItemsByRestaurantResponse,AllGenericsResponse,MedicinesByGenericResponse,SearchLabTestsResponse,AllLabTestsResponse,LabTestData34,SearchMedicinesResponse,AllMedicinesResponse,AlternativeMedicinesResponse,SimilarMedicinesResponse,PopularUsageResponse,Usage,CommonSideEffectsResponse,SideEffect,SearchManufacturersResponse,AllManufacturersResponse,MedicinesByManufacturerResponse){
	

		var result = ChatController.getExcercisesChat();
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```



#### <a name="get_food_items_chat"></a>![Method: ](https://apidocs.io/img/method.png ".ChatController.getFoodItemsChat") getFoodItemsChat

> TODO: Add Description


```javascript
function getFoodItemsChat()
```

#### Example Usage

```javascript


	app.controller("testController", function($scope, ChatController,RequestAccessTokenRequest,MedicinesResponse,Constituent,Schedule,GenericsResponse,FoodItemsResponse,LabTestsResponse,LabTestData,DiseasesResponse,ExercisesResponse,SearchDiseasesResponse,AllDiseasesResponse,MedicineInteractionsResponse,Interaction,Item,SearchExercisesResponse,SearchExercisesResponse16,AllExercisesResponse,AllExercisesResponse18,SearchFoodItemsResponse,AllFoodItemsResponse,SearchFoodBrandsResponse,AllFoodBrandsResponse,FoodItemsByBrandResponse,SearchFoodRestaurantsResponse,AllFoodRestaurantsResponse,FoodItemsByRestaurantResponse,AllGenericsResponse,MedicinesByGenericResponse,SearchLabTestsResponse,AllLabTestsResponse,LabTestData34,SearchMedicinesResponse,AllMedicinesResponse,AlternativeMedicinesResponse,SimilarMedicinesResponse,PopularUsageResponse,Usage,CommonSideEffectsResponse,SideEffect,SearchManufacturersResponse,AllManufacturersResponse,MedicinesByManufacturerResponse){
	

		var result = ChatController.getFoodItemsChat();
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```



#### <a name="get_medicine_chat"></a>![Method: ](https://apidocs.io/img/method.png ".ChatController.getMedicineChat") getMedicineChat

> TODO: Add Description


```javascript
function getMedicineChat()
```

#### Example Usage

```javascript


	app.controller("testController", function($scope, ChatController,RequestAccessTokenRequest,MedicinesResponse,Constituent,Schedule,GenericsResponse,FoodItemsResponse,LabTestsResponse,LabTestData,DiseasesResponse,ExercisesResponse,SearchDiseasesResponse,AllDiseasesResponse,MedicineInteractionsResponse,Interaction,Item,SearchExercisesResponse,SearchExercisesResponse16,AllExercisesResponse,AllExercisesResponse18,SearchFoodItemsResponse,AllFoodItemsResponse,SearchFoodBrandsResponse,AllFoodBrandsResponse,FoodItemsByBrandResponse,SearchFoodRestaurantsResponse,AllFoodRestaurantsResponse,FoodItemsByRestaurantResponse,AllGenericsResponse,MedicinesByGenericResponse,SearchLabTestsResponse,AllLabTestsResponse,LabTestData34,SearchMedicinesResponse,AllMedicinesResponse,AlternativeMedicinesResponse,SimilarMedicinesResponse,PopularUsageResponse,Usage,CommonSideEffectsResponse,SideEffect,SearchManufacturersResponse,AllManufacturersResponse,MedicinesByManufacturerResponse){
	

		var result = ChatController.getMedicineChat();
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```



[Back to List of Controllers](#list_of_controllers)

### <a name="autocomplete_controller"></a>![Class: ](https://apidocs.io/img/class.png ".AutocompleteController") AutocompleteController

#### Get singleton instance

The singleton instance of the ``` AutocompleteController ``` class can be accessed via Dependency Injection.

```js
	app.controller("testController", function($scope, AutocompleteController,RequestAccessTokenRequest,MedicinesResponse,Constituent,Schedule,GenericsResponse,FoodItemsResponse,LabTestsResponse,LabTestData,DiseasesResponse,ExercisesResponse,SearchDiseasesResponse,AllDiseasesResponse,MedicineInteractionsResponse,Interaction,Item,SearchExercisesResponse,SearchExercisesResponse16,AllExercisesResponse,AllExercisesResponse18,SearchFoodItemsResponse,AllFoodItemsResponse,SearchFoodBrandsResponse,AllFoodBrandsResponse,FoodItemsByBrandResponse,SearchFoodRestaurantsResponse,AllFoodRestaurantsResponse,FoodItemsByRestaurantResponse,AllGenericsResponse,MedicinesByGenericResponse,SearchLabTestsResponse,AllLabTestsResponse,LabTestData34,SearchMedicinesResponse,AllMedicinesResponse,AlternativeMedicinesResponse,SimilarMedicinesResponse,PopularUsageResponse,Usage,CommonSideEffectsResponse,SideEffect,SearchManufacturersResponse,AllManufacturersResponse,MedicinesByManufacturerResponse){
	});
```

#### <a name="get_exercises"></a>![Method: ](https://apidocs.io/img/method.png ".AutocompleteController.getExercises") getExercises

> TODO: Add Description


```javascript
function getExercises(exerciseQuery)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| exerciseQuery |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript


	app.controller("testController", function($scope, AutocompleteController,RequestAccessTokenRequest,MedicinesResponse,Constituent,Schedule,GenericsResponse,FoodItemsResponse,LabTestsResponse,LabTestData,DiseasesResponse,ExercisesResponse,SearchDiseasesResponse,AllDiseasesResponse,MedicineInteractionsResponse,Interaction,Item,SearchExercisesResponse,SearchExercisesResponse16,AllExercisesResponse,AllExercisesResponse18,SearchFoodItemsResponse,AllFoodItemsResponse,SearchFoodBrandsResponse,AllFoodBrandsResponse,FoodItemsByBrandResponse,SearchFoodRestaurantsResponse,AllFoodRestaurantsResponse,FoodItemsByRestaurantResponse,AllGenericsResponse,MedicinesByGenericResponse,SearchLabTestsResponse,AllLabTestsResponse,LabTestData34,SearchMedicinesResponse,AllMedicinesResponse,AlternativeMedicinesResponse,SimilarMedicinesResponse,PopularUsageResponse,Usage,CommonSideEffectsResponse,SideEffect,SearchManufacturersResponse,AllManufacturersResponse,MedicinesByManufacturerResponse){
	    var exerciseQuery = exercise_query;


		var result = AutocompleteController.getExercises(exerciseQuery);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```



#### <a name="get_diseases"></a>![Method: ](https://apidocs.io/img/method.png ".AutocompleteController.getDiseases") getDiseases

> TODO: Add Description


```javascript
function getDiseases(diseaseQuery)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| diseaseQuery |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript


	app.controller("testController", function($scope, AutocompleteController,RequestAccessTokenRequest,MedicinesResponse,Constituent,Schedule,GenericsResponse,FoodItemsResponse,LabTestsResponse,LabTestData,DiseasesResponse,ExercisesResponse,SearchDiseasesResponse,AllDiseasesResponse,MedicineInteractionsResponse,Interaction,Item,SearchExercisesResponse,SearchExercisesResponse16,AllExercisesResponse,AllExercisesResponse18,SearchFoodItemsResponse,AllFoodItemsResponse,SearchFoodBrandsResponse,AllFoodBrandsResponse,FoodItemsByBrandResponse,SearchFoodRestaurantsResponse,AllFoodRestaurantsResponse,FoodItemsByRestaurantResponse,AllGenericsResponse,MedicinesByGenericResponse,SearchLabTestsResponse,AllLabTestsResponse,LabTestData34,SearchMedicinesResponse,AllMedicinesResponse,AlternativeMedicinesResponse,SimilarMedicinesResponse,PopularUsageResponse,Usage,CommonSideEffectsResponse,SideEffect,SearchManufacturersResponse,AllManufacturersResponse,MedicinesByManufacturerResponse){
	    var diseaseQuery = disease_query;


		var result = AutocompleteController.getDiseases(diseaseQuery);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```



#### <a name="get_lab_tests"></a>![Method: ](https://apidocs.io/img/method.png ".AutocompleteController.getLabTests") getLabTests

> TODO: Add Description


```javascript
function getLabTests(labTestQuery)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| labTestQuery |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript


	app.controller("testController", function($scope, AutocompleteController,RequestAccessTokenRequest,MedicinesResponse,Constituent,Schedule,GenericsResponse,FoodItemsResponse,LabTestsResponse,LabTestData,DiseasesResponse,ExercisesResponse,SearchDiseasesResponse,AllDiseasesResponse,MedicineInteractionsResponse,Interaction,Item,SearchExercisesResponse,SearchExercisesResponse16,AllExercisesResponse,AllExercisesResponse18,SearchFoodItemsResponse,AllFoodItemsResponse,SearchFoodBrandsResponse,AllFoodBrandsResponse,FoodItemsByBrandResponse,SearchFoodRestaurantsResponse,AllFoodRestaurantsResponse,FoodItemsByRestaurantResponse,AllGenericsResponse,MedicinesByGenericResponse,SearchLabTestsResponse,AllLabTestsResponse,LabTestData34,SearchMedicinesResponse,AllMedicinesResponse,AlternativeMedicinesResponse,SimilarMedicinesResponse,PopularUsageResponse,Usage,CommonSideEffectsResponse,SideEffect,SearchManufacturersResponse,AllManufacturersResponse,MedicinesByManufacturerResponse){
	    var labTestQuery = lab_test_query;


		var result = AutocompleteController.getLabTests(labTestQuery);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```



#### <a name="get_food_items"></a>![Method: ](https://apidocs.io/img/method.png ".AutocompleteController.getFoodItems") getFoodItems

> TODO: Add Description


```javascript
function getFoodItems(foodItemQuery)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| foodItemQuery |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript


	app.controller("testController", function($scope, AutocompleteController,RequestAccessTokenRequest,MedicinesResponse,Constituent,Schedule,GenericsResponse,FoodItemsResponse,LabTestsResponse,LabTestData,DiseasesResponse,ExercisesResponse,SearchDiseasesResponse,AllDiseasesResponse,MedicineInteractionsResponse,Interaction,Item,SearchExercisesResponse,SearchExercisesResponse16,AllExercisesResponse,AllExercisesResponse18,SearchFoodItemsResponse,AllFoodItemsResponse,SearchFoodBrandsResponse,AllFoodBrandsResponse,FoodItemsByBrandResponse,SearchFoodRestaurantsResponse,AllFoodRestaurantsResponse,FoodItemsByRestaurantResponse,AllGenericsResponse,MedicinesByGenericResponse,SearchLabTestsResponse,AllLabTestsResponse,LabTestData34,SearchMedicinesResponse,AllMedicinesResponse,AlternativeMedicinesResponse,SimilarMedicinesResponse,PopularUsageResponse,Usage,CommonSideEffectsResponse,SideEffect,SearchManufacturersResponse,AllManufacturersResponse,MedicinesByManufacturerResponse){
	    var foodItemQuery = food_item_query;


		var result = AutocompleteController.getFoodItems(foodItemQuery);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```



#### <a name="get_generics"></a>![Method: ](https://apidocs.io/img/method.png ".AutocompleteController.getGenerics") getGenerics

> TODO: Add Description


```javascript
function getGenerics(genericQuery)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| genericQuery |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript


	app.controller("testController", function($scope, AutocompleteController,RequestAccessTokenRequest,MedicinesResponse,Constituent,Schedule,GenericsResponse,FoodItemsResponse,LabTestsResponse,LabTestData,DiseasesResponse,ExercisesResponse,SearchDiseasesResponse,AllDiseasesResponse,MedicineInteractionsResponse,Interaction,Item,SearchExercisesResponse,SearchExercisesResponse16,AllExercisesResponse,AllExercisesResponse18,SearchFoodItemsResponse,AllFoodItemsResponse,SearchFoodBrandsResponse,AllFoodBrandsResponse,FoodItemsByBrandResponse,SearchFoodRestaurantsResponse,AllFoodRestaurantsResponse,FoodItemsByRestaurantResponse,AllGenericsResponse,MedicinesByGenericResponse,SearchLabTestsResponse,AllLabTestsResponse,LabTestData34,SearchMedicinesResponse,AllMedicinesResponse,AlternativeMedicinesResponse,SimilarMedicinesResponse,PopularUsageResponse,Usage,CommonSideEffectsResponse,SideEffect,SearchManufacturersResponse,AllManufacturersResponse,MedicinesByManufacturerResponse){
	    var genericQuery = generic_query;


		var result = AutocompleteController.getGenerics(genericQuery);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```



#### <a name="get_medicines"></a>![Method: ](https://apidocs.io/img/method.png ".AutocompleteController.getMedicines") getMedicines

> TODO: Add Description


```javascript
function getMedicines(medicineQuery)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| medicineQuery |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript


	app.controller("testController", function($scope, AutocompleteController,RequestAccessTokenRequest,MedicinesResponse,Constituent,Schedule,GenericsResponse,FoodItemsResponse,LabTestsResponse,LabTestData,DiseasesResponse,ExercisesResponse,SearchDiseasesResponse,AllDiseasesResponse,MedicineInteractionsResponse,Interaction,Item,SearchExercisesResponse,SearchExercisesResponse16,AllExercisesResponse,AllExercisesResponse18,SearchFoodItemsResponse,AllFoodItemsResponse,SearchFoodBrandsResponse,AllFoodBrandsResponse,FoodItemsByBrandResponse,SearchFoodRestaurantsResponse,AllFoodRestaurantsResponse,FoodItemsByRestaurantResponse,AllGenericsResponse,MedicinesByGenericResponse,SearchLabTestsResponse,AllLabTestsResponse,LabTestData34,SearchMedicinesResponse,AllMedicinesResponse,AlternativeMedicinesResponse,SimilarMedicinesResponse,PopularUsageResponse,Usage,CommonSideEffectsResponse,SideEffect,SearchManufacturersResponse,AllManufacturersResponse,MedicinesByManufacturerResponse){
	    var medicineQuery = medicine_query;


		var result = AutocompleteController.getMedicines(medicineQuery);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```



[Back to List of Controllers](#list_of_controllers)

### <a name="authentication_controller"></a>![Class: ](https://apidocs.io/img/class.png ".AuthenticationController") AuthenticationController

#### Get singleton instance

The singleton instance of the ``` AuthenticationController ``` class can be accessed via Dependency Injection.

```js
	app.controller("testController", function($scope, AuthenticationController,RequestAccessTokenRequest,MedicinesResponse,Constituent,Schedule,GenericsResponse,FoodItemsResponse,LabTestsResponse,LabTestData,DiseasesResponse,ExercisesResponse,SearchDiseasesResponse,AllDiseasesResponse,MedicineInteractionsResponse,Interaction,Item,SearchExercisesResponse,SearchExercisesResponse16,AllExercisesResponse,AllExercisesResponse18,SearchFoodItemsResponse,AllFoodItemsResponse,SearchFoodBrandsResponse,AllFoodBrandsResponse,FoodItemsByBrandResponse,SearchFoodRestaurantsResponse,AllFoodRestaurantsResponse,FoodItemsByRestaurantResponse,AllGenericsResponse,MedicinesByGenericResponse,SearchLabTestsResponse,AllLabTestsResponse,LabTestData34,SearchMedicinesResponse,AllMedicinesResponse,AlternativeMedicinesResponse,SimilarMedicinesResponse,PopularUsageResponse,Usage,CommonSideEffectsResponse,SideEffect,SearchManufacturersResponse,AllManufacturersResponse,MedicinesByManufacturerResponse){
	});
```

#### <a name="create_request_access_token"></a>![Method: ](https://apidocs.io/img/method.png ".AuthenticationController.createRequestAccessToken") createRequestAccessToken

> *Tags:*  ``` Skips Authentication ``` 

> TODO: Add Description


```javascript
function createRequestAccessToken(body)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| body |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript


	app.controller("testController", function($scope, AuthenticationController,RequestAccessTokenRequest,MedicinesResponse,Constituent,Schedule,GenericsResponse,FoodItemsResponse,LabTestsResponse,LabTestData,DiseasesResponse,ExercisesResponse,SearchDiseasesResponse,AllDiseasesResponse,MedicineInteractionsResponse,Interaction,Item,SearchExercisesResponse,SearchExercisesResponse16,AllExercisesResponse,AllExercisesResponse18,SearchFoodItemsResponse,AllFoodItemsResponse,SearchFoodBrandsResponse,AllFoodBrandsResponse,FoodItemsByBrandResponse,SearchFoodRestaurantsResponse,AllFoodRestaurantsResponse,FoodItemsByRestaurantResponse,AllGenericsResponse,MedicinesByGenericResponse,SearchLabTestsResponse,AllLabTestsResponse,LabTestData34,SearchMedicinesResponse,AllMedicinesResponse,AlternativeMedicinesResponse,SimilarMedicinesResponse,PopularUsageResponse,Usage,CommonSideEffectsResponse,SideEffect,SearchManufacturersResponse,AllManufacturersResponse,MedicinesByManufacturerResponse){
	    var body = new RequestAccessTokenRequest({
  "grant_type": "client_credentials",
  "client_id": "{{client_id}}",
  "client_secret": "{{client_secret}}",
  "scope": "public read write"
});


		var result = AuthenticationController.createRequestAccessToken(body);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 401 | Unauthorized |




[Back to List of Controllers](#list_of_controllers)




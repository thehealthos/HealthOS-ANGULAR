/**
 * HealthOSLib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io )
 */

;(function (angular) {
'use strict';

/**
 * Creates a instance of AllFoodBrandsResponse
 *
 * @constructor
 */
angular.module('HealthOSLib')
    .factory('AllFoodBrandsResponse', ['BaseModel',
        function (BaseModel) {
            var AllFoodBrandsResponse = function (obj) {
                if (!obj) {
                    this.brandName = null;
                    this.foodBrandId = null;
        
                    // Append to variable dictionary
                    this._variableDict['brandName'] = 'brand_name';
                    this._variableDict['foodBrandId'] = 'food_brand_id';
                } else {
                    this.brandName = obj.brand_name;
                    this.foodBrandId = obj.food_brand_id;
            
                    // Append to variable dictionary
                    this._variableDict['brandName'] = 'brand_name';
                    this._variableDict['foodBrandId'] = 'food_brand_id';
                }
            }
    
            AllFoodBrandsResponse.prototype = new BaseModel();
            AllFoodBrandsResponse.prototype.constructor = AllFoodBrandsResponse;
        
            /**
             * TODO: Write general description for this method
             *
             * @return {string}
             */
            AllFoodBrandsResponse.prototype.getBrandName = function () {
                return this.brandName;
            };
        
            /**
             * Setter for BrandName
             * 
             * @param {string} value 
             */
            AllFoodBrandsResponse.prototype.setBrandName = function (value) {
                this.brandName = value;
            };
        
            /**
             * TODO: Write general description for this method
             *
             * @return {string}
             */
            AllFoodBrandsResponse.prototype.getFoodBrandId = function () {
                return this.foodBrandId;
            };
        
            /**
             * Setter for FoodBrandId
             * 
             * @param {string} value 
             */
            AllFoodBrandsResponse.prototype.setFoodBrandId = function (value) {
                this.foodBrandId = value;
            };
        
            return AllFoodBrandsResponse;
        }
    ]);

}(angular));

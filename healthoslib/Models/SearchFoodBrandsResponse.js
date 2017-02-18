/**
 * HealthOSLib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io )
 */

;(function (angular) {
'use strict';

/**
 * Creates a instance of SearchFoodBrandsResponse
 *
 * @constructor
 */
angular.module('HealthOSLib')
    .factory('SearchFoodBrandsResponse', ['BaseModel',
        function (BaseModel) {
            var SearchFoodBrandsResponse = function (obj) {
                if (!obj) {
                    this.logo = null;
                    this.name = null;
                    this.foodBrandId = null;
                    this.searchScore = null;
        
                    // Append to variable dictionary
                    this._variableDict['foodBrandId'] = 'food_brand_id';
                    this._variableDict['searchScore'] = 'search_score';
                } else {
                    this.logo = obj.logo;
                    this.name = obj.name;
                    this.foodBrandId = obj.food_brand_id;
                    this.searchScore = obj.search_score;
            
                    // Append to variable dictionary
                    this._variableDict['foodBrandId'] = 'food_brand_id';
                    this._variableDict['searchScore'] = 'search_score';
                }
            }
    
            SearchFoodBrandsResponse.prototype = new BaseModel();
            SearchFoodBrandsResponse.prototype.constructor = SearchFoodBrandsResponse;
        
            /**
             * TODO: Write general description for this method
             *
             * @return {string}
             */
            SearchFoodBrandsResponse.prototype.getLogo = function () {
                return this.logo;
            };
        
            /**
             * Setter for Logo
             * 
             * @param {string} value 
             */
            SearchFoodBrandsResponse.prototype.setLogo = function (value) {
                this.logo = value;
            };
        
            /**
             * TODO: Write general description for this method
             *
             * @return {string}
             */
            SearchFoodBrandsResponse.prototype.getName = function () {
                return this.name;
            };
        
            /**
             * Setter for Name
             * 
             * @param {string} value 
             */
            SearchFoodBrandsResponse.prototype.setName = function (value) {
                this.name = value;
            };
        
            /**
             * TODO: Write general description for this method
             *
             * @return {string}
             */
            SearchFoodBrandsResponse.prototype.getFoodBrandId = function () {
                return this.foodBrandId;
            };
        
            /**
             * Setter for FoodBrandId
             * 
             * @param {string} value 
             */
            SearchFoodBrandsResponse.prototype.setFoodBrandId = function (value) {
                this.foodBrandId = value;
            };
        
            /**
             * TODO: Write general description for this method
             *
             * @return {double}
             */
            SearchFoodBrandsResponse.prototype.getSearchScore = function () {
                return this.searchScore;
            };
        
            /**
             * Setter for SearchScore
             * 
             * @param {double} value 
             */
            SearchFoodBrandsResponse.prototype.setSearchScore = function (value) {
                this.searchScore = value;
            };
        
            return SearchFoodBrandsResponse;
        }
    ]);

}(angular));

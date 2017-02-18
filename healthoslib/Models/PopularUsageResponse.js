/**
 * HealthOSLib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io )
 */

;(function (angular) {
'use strict';

/**
 * Creates a instance of PopularUsageResponse
 *
 * @constructor
 */
angular.module('HealthOSLib')
    .factory('PopularUsageResponse', ['BaseModel', 'Usage',
        function (BaseModel, Usage) {
            var PopularUsageResponse = function (obj) {
                if (!obj) {
                    this.generic = null;
                    this.usages = null;
                } else {
                    this.generic = obj.generic;
                    this.usages = obj.usages.map(function (model) {
                        return new Usage(model);
                    });
                }
            }
    
            PopularUsageResponse.prototype = new BaseModel();
            PopularUsageResponse.prototype.constructor = PopularUsageResponse;
        
            /**
             * TODO: Write general description for this method
             *
             * @return {string}
             */
            PopularUsageResponse.prototype.getGeneric = function () {
                return this.generic;
            };
        
            /**
             * Setter for Generic
             * 
             * @param {string} value 
             */
            PopularUsageResponse.prototype.setGeneric = function (value) {
                this.generic = value;
            };
        
            /**
             * TODO: Write general description for this method
             *
             * @return {array}
             */
            PopularUsageResponse.prototype.getUsages = function () {
                return this.usages;
            };
        
            /**
             * Setter for Usages
             * 
             * @param {array} value 
             */
            PopularUsageResponse.prototype.setUsages = function (value) {
                this.usages = value;
            };
        
            return PopularUsageResponse;
        }
    ]);

}(angular));

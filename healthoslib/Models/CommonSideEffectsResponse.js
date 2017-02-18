/**
 * HealthOSLib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io )
 */

;(function (angular) {
'use strict';

/**
 * Creates a instance of CommonSideEffectsResponse
 *
 * @constructor
 */
angular.module('HealthOSLib')
    .factory('CommonSideEffectsResponse', ['BaseModel', 'SideEffect',
        function (BaseModel, SideEffect) {
            var CommonSideEffectsResponse = function (obj) {
                if (!obj) {
                    this.generic = null;
                    this.sideEffects = null;
        
                    // Append to variable dictionary
                    this._variableDict['sideEffects'] = 'side_effects';
                } else {
                    this.generic = obj.generic;
                    this.sideEffects = obj.side_effects.map(function (model) {
                        return new SideEffect(model);
                    });
            
                    // Append to variable dictionary
                    this._variableDict['sideEffects'] = 'side_effects';
                }
            }
    
            CommonSideEffectsResponse.prototype = new BaseModel();
            CommonSideEffectsResponse.prototype.constructor = CommonSideEffectsResponse;
        
            /**
             * TODO: Write general description for this method
             *
             * @return {string}
             */
            CommonSideEffectsResponse.prototype.getGeneric = function () {
                return this.generic;
            };
        
            /**
             * Setter for Generic
             * 
             * @param {string} value 
             */
            CommonSideEffectsResponse.prototype.setGeneric = function (value) {
                this.generic = value;
            };
        
            /**
             * TODO: Write general description for this method
             *
             * @return {array}
             */
            CommonSideEffectsResponse.prototype.getSideEffects = function () {
                return this.sideEffects;
            };
        
            /**
             * Setter for SideEffects
             * 
             * @param {array} value 
             */
            CommonSideEffectsResponse.prototype.setSideEffects = function (value) {
                this.sideEffects = value;
            };
        
            return CommonSideEffectsResponse;
        }
    ]);

}(angular));

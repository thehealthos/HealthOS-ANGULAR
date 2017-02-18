/**
 * HealthOSLib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io )
 */

;(function (angular) {
'use strict';

/**
 * Creates a instance of LabTestData
 *
 * @constructor
 */
angular.module('HealthOSLib')
    .factory('LabTestData', ['BaseModel',
        function (BaseModel) {
            var LabTestData = function (obj) {
                if (!obj) {
                    this.orderingInformation = null;
                    this.alternateNames = null;
                    this.laboratory = null;
                    this.testCode = null;
                    this.specimenTypes = null;
                    this.containerTypes = null;
                    this.minimumAdultVolume = null;
                    this.frequency = null;
                    this.externalLaboratory = null;
        
                    // Append to variable dictionary
                    this._variableDict['orderingInformation'] = 'Ordering information';
                    this._variableDict['alternateNames'] = 'Alternate names';
                    this._variableDict['laboratory'] = 'Laboratory';
                    this._variableDict['testCode'] = 'Test Code';
                    this._variableDict['specimenTypes'] = 'Specimen types';
                    this._variableDict['containerTypes'] = 'Container types';
                    this._variableDict['minimumAdultVolume'] = 'Minimum Adult Volume';
                    this._variableDict['frequency'] = 'Frequency';
                    this._variableDict['externalLaboratory'] = 'External Laboratory';
                } else {
                    this.orderingInformation = obj.Ordering information;
                    this.alternateNames = obj.Alternate names;
                    this.laboratory = obj.Laboratory;
                    this.testCode = obj.Test Code;
                    this.specimenTypes = obj.Specimen types;
                    this.containerTypes = obj.Container types;
                    this.minimumAdultVolume = obj.Minimum Adult Volume;
                    this.frequency = obj.Frequency;
                    this.externalLaboratory = obj.External Laboratory;
            
                    // Append to variable dictionary
                    this._variableDict['orderingInformation'] = 'Ordering information';
                    this._variableDict['alternateNames'] = 'Alternate names';
                    this._variableDict['laboratory'] = 'Laboratory';
                    this._variableDict['testCode'] = 'Test Code';
                    this._variableDict['specimenTypes'] = 'Specimen types';
                    this._variableDict['containerTypes'] = 'Container types';
                    this._variableDict['minimumAdultVolume'] = 'Minimum Adult Volume';
                    this._variableDict['frequency'] = 'Frequency';
                    this._variableDict['externalLaboratory'] = 'External Laboratory';
                }
            }
    
            LabTestData.prototype = new BaseModel();
            LabTestData.prototype.constructor = LabTestData;
        
            /**
             * TODO: Write general description for this method
             *
             * @return {string}
             */
            LabTestData.prototype.getOrderingInformation = function () {
                return this.orderingInformation;
            };
        
            /**
             * Setter for OrderingInformation
             * 
             * @param {string} value 
             */
            LabTestData.prototype.setOrderingInformation = function (value) {
                this.orderingInformation = value;
            };
        
            /**
             * TODO: Write general description for this method
             *
             * @return {string}
             */
            LabTestData.prototype.getAlternateNames = function () {
                return this.alternateNames;
            };
        
            /**
             * Setter for AlternateNames
             * 
             * @param {string} value 
             */
            LabTestData.prototype.setAlternateNames = function (value) {
                this.alternateNames = value;
            };
        
            /**
             * TODO: Write general description for this method
             *
             * @return {string}
             */
            LabTestData.prototype.getLaboratory = function () {
                return this.laboratory;
            };
        
            /**
             * Setter for Laboratory
             * 
             * @param {string} value 
             */
            LabTestData.prototype.setLaboratory = function (value) {
                this.laboratory = value;
            };
        
            /**
             * TODO: Write general description for this method
             *
             * @return {string}
             */
            LabTestData.prototype.getTestCode = function () {
                return this.testCode;
            };
        
            /**
             * Setter for TestCode
             * 
             * @param {string} value 
             */
            LabTestData.prototype.setTestCode = function (value) {
                this.testCode = value;
            };
        
            /**
             * TODO: Write general description for this method
             *
             * @return {string}
             */
            LabTestData.prototype.getSpecimenTypes = function () {
                return this.specimenTypes;
            };
        
            /**
             * Setter for SpecimenTypes
             * 
             * @param {string} value 
             */
            LabTestData.prototype.setSpecimenTypes = function (value) {
                this.specimenTypes = value;
            };
        
            /**
             * TODO: Write general description for this method
             *
             * @return {string}
             */
            LabTestData.prototype.getContainerTypes = function () {
                return this.containerTypes;
            };
        
            /**
             * Setter for ContainerTypes
             * 
             * @param {string} value 
             */
            LabTestData.prototype.setContainerTypes = function (value) {
                this.containerTypes = value;
            };
        
            /**
             * TODO: Write general description for this method
             *
             * @return {string}
             */
            LabTestData.prototype.getMinimumAdultVolume = function () {
                return this.minimumAdultVolume;
            };
        
            /**
             * Setter for MinimumAdultVolume
             * 
             * @param {string} value 
             */
            LabTestData.prototype.setMinimumAdultVolume = function (value) {
                this.minimumAdultVolume = value;
            };
        
            /**
             * TODO: Write general description for this method
             *
             * @return {string}
             */
            LabTestData.prototype.getFrequency = function () {
                return this.frequency;
            };
        
            /**
             * Setter for Frequency
             * 
             * @param {string} value 
             */
            LabTestData.prototype.setFrequency = function (value) {
                this.frequency = value;
            };
        
            /**
             * TODO: Write general description for this method
             *
             * @return {string}
             */
            LabTestData.prototype.getExternalLaboratory = function () {
                return this.externalLaboratory;
            };
        
            /**
             * Setter for ExternalLaboratory
             * 
             * @param {string} value 
             */
            LabTestData.prototype.setExternalLaboratory = function (value) {
                this.externalLaboratory = value;
            };
        
            return LabTestData;
        }
    ]);

}(angular));

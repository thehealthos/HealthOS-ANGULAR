/**
 * HealthOSLib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io )
 */

;(function (angular) {
'use strict';

/**
 * Creates a instance of AllMedicinesResponse
 *
 * @constructor
 */
angular.module('HealthOSLib')
    .factory('AllMedicinesResponse', ['BaseModel', 'Constituent', 'Schedule',
        function (BaseModel, Constituent, Schedule) {
            var AllMedicinesResponse = function (obj) {
                if (!obj) {
                    this.name = null;
                    this.form = null;
                    this.standardUnits = null;
                    this.packageForm = null;
                    this.price = null;
                    this.size = null;
                    this.manufacturer = null;
                    this.constituents = null;
                    this.schedule = null;
                    this.medicineId = null;
        
                    // Append to variable dictionary
                    this._variableDict['medicineId'] = 'medicine_id';
                } else {
                    this.name = obj.name;
                    this.form = obj.form;
                    this.standardUnits = obj.standardUnits;
                    this.packageForm = obj.packageForm;
                    this.price = obj.price;
                    this.size = obj.size;
                    this.manufacturer = obj.manufacturer;
                    this.constituents = obj.constituents.map(function (model) {
                        return new Constituent(model);
                    });
                    this.schedule = new Schedule(obj.schedule);
                    this.medicineId = obj.medicine_id;
            
                    // Append to variable dictionary
                    this._variableDict['medicineId'] = 'medicine_id';
                }
            }
    
            AllMedicinesResponse.prototype = new BaseModel();
            AllMedicinesResponse.prototype.constructor = AllMedicinesResponse;
        
            /**
             * TODO: Write general description for this method
             *
             * @return {string}
             */
            AllMedicinesResponse.prototype.getName = function () {
                return this.name;
            };
        
            /**
             * Setter for Name
             * 
             * @param {string} value 
             */
            AllMedicinesResponse.prototype.setName = function (value) {
                this.name = value;
            };
        
            /**
             * TODO: Write general description for this method
             *
             * @return {string}
             */
            AllMedicinesResponse.prototype.getForm = function () {
                return this.form;
            };
        
            /**
             * Setter for Form
             * 
             * @param {string} value 
             */
            AllMedicinesResponse.prototype.setForm = function (value) {
                this.form = value;
            };
        
            /**
             * TODO: Write general description for this method
             *
             * @return {int}
             */
            AllMedicinesResponse.prototype.getStandardUnits = function () {
                return this.standardUnits;
            };
        
            /**
             * Setter for StandardUnits
             * 
             * @param {int} value 
             */
            AllMedicinesResponse.prototype.setStandardUnits = function (value) {
                this.standardUnits = value;
            };
        
            /**
             * TODO: Write general description for this method
             *
             * @return {string}
             */
            AllMedicinesResponse.prototype.getPackageForm = function () {
                return this.packageForm;
            };
        
            /**
             * Setter for PackageForm
             * 
             * @param {string} value 
             */
            AllMedicinesResponse.prototype.setPackageForm = function (value) {
                this.packageForm = value;
            };
        
            /**
             * TODO: Write general description for this method
             *
             * @return {double}
             */
            AllMedicinesResponse.prototype.getPrice = function () {
                return this.price;
            };
        
            /**
             * Setter for Price
             * 
             * @param {double} value 
             */
            AllMedicinesResponse.prototype.setPrice = function (value) {
                this.price = value;
            };
        
            /**
             * TODO: Write general description for this method
             *
             * @return {string}
             */
            AllMedicinesResponse.prototype.getSize = function () {
                return this.size;
            };
        
            /**
             * Setter for Size
             * 
             * @param {string} value 
             */
            AllMedicinesResponse.prototype.setSize = function (value) {
                this.size = value;
            };
        
            /**
             * TODO: Write general description for this method
             *
             * @return {string}
             */
            AllMedicinesResponse.prototype.getManufacturer = function () {
                return this.manufacturer;
            };
        
            /**
             * Setter for Manufacturer
             * 
             * @param {string} value 
             */
            AllMedicinesResponse.prototype.setManufacturer = function (value) {
                this.manufacturer = value;
            };
        
            /**
             * TODO: Write general description for this method
             *
             * @return {array}
             */
            AllMedicinesResponse.prototype.getConstituents = function () {
                return this.constituents;
            };
        
            /**
             * Setter for Constituents
             * 
             * @param {array} value 
             */
            AllMedicinesResponse.prototype.setConstituents = function (value) {
                this.constituents = value;
            };
        
            /**
             * TODO: Write general description for this method
             *
             * @return {Schedule}
             */
            AllMedicinesResponse.prototype.getSchedule = function () {
                return this.schedule;
            };
        
            /**
             * Setter for Schedule
             * 
             * @param {Schedule} value 
             */
            AllMedicinesResponse.prototype.setSchedule = function (value) {
                this.schedule = value;
            };
        
            /**
             * TODO: Write general description for this method
             *
             * @return {string}
             */
            AllMedicinesResponse.prototype.getMedicineId = function () {
                return this.medicineId;
            };
        
            /**
             * Setter for MedicineId
             * 
             * @param {string} value 
             */
            AllMedicinesResponse.prototype.setMedicineId = function (value) {
                this.medicineId = value;
            };
        
            return AllMedicinesResponse;
        }
    ]);

}(angular));

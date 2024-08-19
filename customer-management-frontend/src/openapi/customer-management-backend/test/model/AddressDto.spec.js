/**
 * Customer Management API
 * This API allows call center operators to interact with customers and to edit their user profiles.
 *
 * The version of the OpenAPI document: v1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.CustomerManagementApi);
  }
}(this, function(expect, CustomerManagementApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new CustomerManagementApi.AddressDto();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('AddressDto', function() {
    it('should create an instance of AddressDto', function() {
      // uncomment below and update the code to test AddressDto
      //var instance = new CustomerManagementApi.AddressDto();
      //expect(instance).to.be.a(CustomerManagementApi.AddressDto);
    });

    it('should have the property streetAddress (base name: "streetAddress")', function() {
      // uncomment below and update the code to test the property streetAddress
      //var instance = new CustomerManagementApi.AddressDto();
      //expect(instance).to.be();
    });

    it('should have the property postalCode (base name: "postalCode")', function() {
      // uncomment below and update the code to test the property postalCode
      //var instance = new CustomerManagementApi.AddressDto();
      //expect(instance).to.be();
    });

    it('should have the property city (base name: "city")', function() {
      // uncomment below and update the code to test the property city
      //var instance = new CustomerManagementApi.AddressDto();
      //expect(instance).to.be();
    });

  });

}));

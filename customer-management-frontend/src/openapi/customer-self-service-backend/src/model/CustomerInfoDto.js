/**
 * Customer Self-Service API
 * This API allows customers of Lakeside Mutual to sign up, log in and manage their policies and user profile themselves.
 *
 * The version of the OpenAPI document: v1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import AddressDto from './AddressDto';

/**
 * The CustomerInfoDto model module.
 * @module model/CustomerInfoDto
 * @version v1.0.0
 */
class CustomerInfoDto {
    /**
     * Constructs a new <code>CustomerInfoDto</code>.
     * @alias module:model/CustomerInfoDto
     * @param customerId {String} 
     * @param firstname {String} 
     * @param lastname {String} 
     * @param contactAddress {module:model/AddressDto} 
     * @param billingAddress {module:model/AddressDto} 
     */
    constructor(customerId, firstname, lastname, contactAddress, billingAddress) { 
        
        CustomerInfoDto.initialize(this, customerId, firstname, lastname, contactAddress, billingAddress);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, customerId, firstname, lastname, contactAddress, billingAddress) { 
        obj['customerId'] = customerId;
        obj['firstname'] = firstname;
        obj['lastname'] = lastname;
        obj['contactAddress'] = contactAddress;
        obj['billingAddress'] = billingAddress;
    }

    /**
     * Constructs a <code>CustomerInfoDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CustomerInfoDto} obj Optional instance to populate.
     * @return {module:model/CustomerInfoDto} The populated <code>CustomerInfoDto</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CustomerInfoDto();

            if (data.hasOwnProperty('customerId')) {
                obj['customerId'] = ApiClient.convertToType(data['customerId'], 'String');
            }
            if (data.hasOwnProperty('firstname')) {
                obj['firstname'] = ApiClient.convertToType(data['firstname'], 'String');
            }
            if (data.hasOwnProperty('lastname')) {
                obj['lastname'] = ApiClient.convertToType(data['lastname'], 'String');
            }
            if (data.hasOwnProperty('contactAddress')) {
                obj['contactAddress'] = AddressDto.constructFromObject(data['contactAddress']);
            }
            if (data.hasOwnProperty('billingAddress')) {
                obj['billingAddress'] = AddressDto.constructFromObject(data['billingAddress']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CustomerInfoDto</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CustomerInfoDto</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of CustomerInfoDto.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['customerId'] && !(typeof data['customerId'] === 'string' || data['customerId'] instanceof String)) {
            throw new Error("Expected the field `customerId` to be a primitive type in the JSON string but got " + data['customerId']);
        }
        // ensure the json data is a string
        if (data['firstname'] && !(typeof data['firstname'] === 'string' || data['firstname'] instanceof String)) {
            throw new Error("Expected the field `firstname` to be a primitive type in the JSON string but got " + data['firstname']);
        }
        // ensure the json data is a string
        if (data['lastname'] && !(typeof data['lastname'] === 'string' || data['lastname'] instanceof String)) {
            throw new Error("Expected the field `lastname` to be a primitive type in the JSON string but got " + data['lastname']);
        }
        // validate the optional field `contactAddress`
        if (data['contactAddress']) { // data not null
          AddressDto.validateJSON(data['contactAddress']);
        }
        // validate the optional field `billingAddress`
        if (data['billingAddress']) { // data not null
          AddressDto.validateJSON(data['billingAddress']);
        }

        return true;
    }


}

CustomerInfoDto.RequiredProperties = ["customerId", "firstname", "lastname", "contactAddress", "billingAddress"];

/**
 * @member {String} customerId
 */
CustomerInfoDto.prototype['customerId'] = undefined;

/**
 * @member {String} firstname
 */
CustomerInfoDto.prototype['firstname'] = undefined;

/**
 * @member {String} lastname
 */
CustomerInfoDto.prototype['lastname'] = undefined;

/**
 * @member {module:model/AddressDto} contactAddress
 */
CustomerInfoDto.prototype['contactAddress'] = undefined;

/**
 * @member {module:model/AddressDto} billingAddress
 */
CustomerInfoDto.prototype['billingAddress'] = undefined;






export default CustomerInfoDto;


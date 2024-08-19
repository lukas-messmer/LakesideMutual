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

/**
 * The AuthenticationRequestDto model module.
 * @module model/AuthenticationRequestDto
 * @version v1.0.0
 */
class AuthenticationRequestDto {
    /**
     * Constructs a new <code>AuthenticationRequestDto</code>.
     * the email and password used to authenticate the user
     * @alias module:model/AuthenticationRequestDto
     */
    constructor() { 
        
        AuthenticationRequestDto.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AuthenticationRequestDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AuthenticationRequestDto} obj Optional instance to populate.
     * @return {module:model/AuthenticationRequestDto} The populated <code>AuthenticationRequestDto</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AuthenticationRequestDto();

            if (data.hasOwnProperty('email')) {
                obj['email'] = ApiClient.convertToType(data['email'], 'String');
            }
            if (data.hasOwnProperty('password')) {
                obj['password'] = ApiClient.convertToType(data['password'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>AuthenticationRequestDto</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>AuthenticationRequestDto</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['email'] && !(typeof data['email'] === 'string' || data['email'] instanceof String)) {
            throw new Error("Expected the field `email` to be a primitive type in the JSON string but got " + data['email']);
        }
        // ensure the json data is a string
        if (data['password'] && !(typeof data['password'] === 'string' || data['password'] instanceof String)) {
            throw new Error("Expected the field `password` to be a primitive type in the JSON string but got " + data['password']);
        }

        return true;
    }


}



/**
 * @member {String} email
 */
AuthenticationRequestDto.prototype['email'] = undefined;

/**
 * @member {String} password
 */
AuthenticationRequestDto.prototype['password'] = undefined;






export default AuthenticationRequestDto;


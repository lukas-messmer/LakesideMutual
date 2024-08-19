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
 * The MoneyAmountDto model module.
 * @module model/MoneyAmountDto
 * @version v1.0.0
 */
class MoneyAmountDto {
    /**
     * Constructs a new <code>MoneyAmountDto</code>.
     * @alias module:model/MoneyAmountDto
     * @param amount {Number} 
     * @param currency {String} 
     */
    constructor(amount, currency) { 
        
        MoneyAmountDto.initialize(this, amount, currency);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, amount, currency) { 
        obj['amount'] = amount;
        obj['currency'] = currency;
    }

    /**
     * Constructs a <code>MoneyAmountDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MoneyAmountDto} obj Optional instance to populate.
     * @return {module:model/MoneyAmountDto} The populated <code>MoneyAmountDto</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MoneyAmountDto();

            if (data.hasOwnProperty('amount')) {
                obj['amount'] = ApiClient.convertToType(data['amount'], 'Number');
            }
            if (data.hasOwnProperty('currency')) {
                obj['currency'] = ApiClient.convertToType(data['currency'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>MoneyAmountDto</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>MoneyAmountDto</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of MoneyAmountDto.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['currency'] && !(typeof data['currency'] === 'string' || data['currency'] instanceof String)) {
            throw new Error("Expected the field `currency` to be a primitive type in the JSON string but got " + data['currency']);
        }

        return true;
    }


}

MoneyAmountDto.RequiredProperties = ["amount", "currency"];

/**
 * @member {Number} amount
 */
MoneyAmountDto.prototype['amount'] = undefined;

/**
 * @member {String} currency
 */
MoneyAmountDto.prototype['currency'] = undefined;






export default MoneyAmountDto;


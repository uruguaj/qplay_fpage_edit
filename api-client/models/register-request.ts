/* tslint:disable */
/* eslint-disable */
/**
 * OpenAPI definition
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

/**
 *
 * @export
 * @interface RegisterRequest
 */
export interface RegisterRequest {
  /**
   *
   * @type {string}
   * @memberof RegisterRequest
   */
  sessionUuid?: string;
  /**
   *
   * @type {string}
   * @memberof RegisterRequest
   */
  premiumUuid?: string;
  /**
   *
   * @type {string}
   * @memberof RegisterRequest
   */
  nick?: string;
  /**
   *
   * @type {string}
   * @memberof RegisterRequest
   */
  code?: string;
  /**
   *
   * @type {string}
   * @memberof RegisterRequest
   */
  captcha: string;
  /**
   *
   * @type {string}
   * @memberof RegisterRequest
   */
  email: string;
  /**
   *
   * @type {string}
   * @memberof RegisterRequest
   */
  password: string;
  /**
   *
   * @type {boolean}
   * @memberof RegisterRequest
   */
  agreement: boolean;
}

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

import { CoinsTransactionLogDTO } from "./coins-transaction-log-dto";

/**
 *
 * @export
 * @interface ResponsePageCoinsTransactionLogDTO
 */
export interface ResponsePageCoinsTransactionLogDTO {
  /**
   *
   * @type {number}
   * @memberof ResponsePageCoinsTransactionLogDTO
   */
  totalPages: number;
  /**
   *
   * @type {number}
   * @memberof ResponsePageCoinsTransactionLogDTO
   */
  totalElements: number;
  /**
   *
   * @type {Array<CoinsTransactionLogDTO>}
   * @memberof ResponsePageCoinsTransactionLogDTO
   */
  content: Array<CoinsTransactionLogDTO>;
}

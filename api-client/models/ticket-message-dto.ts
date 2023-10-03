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

import { UserTuple } from "./user-tuple";
import { WrappedMessage } from "./wrapped-message";

/**
 *
 * @export
 * @interface TicketMessageDTO
 */
export interface TicketMessageDTO {
  /**
   *
   * @type {string}
   * @memberof TicketMessageDTO
   */
  uid: string;
  /**
   *
   * @type {UserTuple}
   * @memberof TicketMessageDTO
   */
  sender: UserTuple;
  /**
   *
   * @type {string}
   * @memberof TicketMessageDTO
   */
  date: string;
  /**
   *
   * @type {WrappedMessage}
   * @memberof TicketMessageDTO
   */
  content: WrappedMessage;
  /**
   *
   * @type {string}
   * @memberof TicketMessageDTO
   */
  verifiedContent?: string;
  /**
   *
   * @type {string}
   * @memberof TicketMessageDTO
   */
  ip?: string;
  /**
   *
   * @type {number}
   * @memberof TicketMessageDTO
   */
  predefinedMessage: number;
  /**
   *
   * @type {string}
   * @memberof TicketMessageDTO
   */
  edited?: string;
  /**
   *
   * @type {Array<string>}
   * @memberof TicketMessageDTO
   */
  attachments: Array<string>;
}

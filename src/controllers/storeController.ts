/**
 * Swagger Petstore - OpenAPI 3.0Lib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiResponse, RequestOptions } from '../core';
import { Order, orderSchema } from '../models/order';
import { StatusEnum, statusEnumSchema } from '../models/statusEnum';
import { bigint, boolean, dict, number, optional, string } from '../schema';
import { BaseController } from './baseController';
import { ApiError } from '@apimatic/core';

export class StoreController extends BaseController {
  /**
   * Returns a map of status codes to quantities.
   *
   * @return Response from the API call
   */
  async getInventory(
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<Record<string, number>>> {
    const req = this.createRequest('GET', '/store/inventory');
    req.defaultToError(ApiError, 'Unexpected error');
    req.authenticate([{ apiKey: true }]);
    return req.callAsJson(dict(number()), requestOptions);
  }

  /**
   * Place a new order in the store.
   *
   * @param id
   * @param petId
   * @param quantity
   * @param shipDate
   * @param status       Order Status
   * @param complete
   * @return Response from the API call
   */
  async placeOrder(
    id?: bigint,
    petId?: bigint,
    quantity?: number,
    shipDate?: string,
    status?: StatusEnum,
    complete?: boolean,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<Order>> {
    const req = this.createRequest('POST', '/store/order');
    const mapped = req.prepareArgs({
      id: [id, optional(bigint())],
      petId: [petId, optional(bigint())],
      quantity: [quantity, optional(number())],
      shipDate: [shipDate, optional(string())],
      status: [status, optional(statusEnumSchema)],
      complete: [complete, optional(boolean())],
    });
    req.header('Content-Type', 'application/x-www-form-urlencoded');
    req.form({
      id: mapped.id,
      petId: mapped.petId,
      quantity: mapped.quantity,
      shipDate: mapped.shipDate,
      status: mapped.status,
      complete: mapped.complete,
    });
    req.throwOn(400, ApiError, 'Invalid input');
    req.throwOn(422, ApiError, 'Validation exception');
    req.defaultToError(ApiError, 'Unexpected error');
    req.authenticate([]);
    return req.callAsJson(orderSchema, requestOptions);
  }

  /**
   * For valid response try integer IDs with value <= 5 or > 10. Other values will generate exceptions.
   *
   * @param orderId ID of order that needs to be fetched
   * @return Response from the API call
   */
  async getOrderById(
    orderId: bigint,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<Order>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({ orderId: [orderId, bigint()] });
    req.appendTemplatePath`/store/order/${mapped.orderId}`;
    req.throwOn(400, ApiError, 'Invalid ID supplied');
    req.throwOn(404, ApiError, 'Order not found');
    req.defaultToError(ApiError, 'Unexpected error');
    req.authenticate([]);
    return req.callAsJson(orderSchema, requestOptions);
  }

  /**
   * For valid response try integer IDs with value < 1000. Anything above 1000 or non-integers will
   * generate API errors.
   *
   * @param orderId ID of the order that needs to be deleted
   * @return Response from the API call
   */
  async deleteOrder(
    orderId: bigint,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<void>> {
    const req = this.createRequest('DELETE');
    const mapped = req.prepareArgs({ orderId: [orderId, bigint()] });
    req.appendTemplatePath`/store/order/${mapped.orderId}`;
    req.throwOn(400, ApiError, 'Invalid ID supplied');
    req.throwOn(404, ApiError, 'Order not found');
    req.defaultToError(ApiError, 'Unexpected error');
    req.authenticate([]);
    return req.call(requestOptions);
  }
}

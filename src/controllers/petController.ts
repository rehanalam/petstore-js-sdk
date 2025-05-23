/**
 * Swagger Petstore - OpenAPI 3.0Lib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiResponse, FileWrapper, RequestOptions } from '../core';
import { Category, categorySchema } from '../models/category';
import { MApiResponse, mApiResponseSchema } from '../models/mApiResponse';
import { Pet, petSchema } from '../models/pet';
import { Status1Enum, status1EnumSchema } from '../models/status1Enum';
import { Status2Enum, status2EnumSchema } from '../models/status2Enum';
import { Tag, tagSchema } from '../models/tag';
import { array, bigint, optional, string } from '../schema';
import { BaseController } from './baseController';
import { ApiError } from '@apimatic/core';

export class PetController extends BaseController {
  /**
   * Update an existing pet by Id.
   *
   * @param name
   * @param photoUrls
   * @param id
   * @param category
   * @param tags
   * @param status       pet status in the store
   * @return Response from the API call
   */
  async updatePet(
    name: string,
    photoUrls: string[],
    id?: bigint,
    category?: Category,
    tags?: Tag[],
    status?: Status1Enum,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<Pet>> {
    const req = this.createRequest('PUT', '/pet');
    const mapped = req.prepareArgs({
      name: [name, string()],
      photoUrls: [photoUrls, array(string(), { xmlItemName: 'photoUrl' })],
      id: [id, optional(bigint())],
      category: [category, optional(categorySchema)],
      tags: [tags, optional(array(tagSchema, { xmlItemName: 'tag' }))],
      status: [status, optional(status1EnumSchema)],
    });
    req.header('Content-Type', 'application/x-www-form-urlencoded');
    req.form({
      name: mapped.name,
      photoUrls: mapped.photoUrls,
      id: mapped.id,
      category: mapped.category,
      tags: mapped.tags,
      status: mapped.status,
    });
    req.throwOn(400, ApiError, 'Invalid ID supplied');
    req.throwOn(404, ApiError, 'Pet not found');
    req.throwOn(422, ApiError, 'Validation exception');
    req.defaultToError(ApiError, 'Unexpected error');
    req.authenticate([{ petstoreAuth: true }]);
    return req.callAsJson(petSchema, requestOptions);
  }

  /**
   * Add a new pet to the store.
   *
   * @param name
   * @param photoUrls
   * @param id
   * @param category
   * @param tags
   * @param status       pet status in the store
   * @return Response from the API call
   */
  async addPet(
    name: string,
    photoUrls: string[],
    id?: bigint,
    category?: Category,
    tags?: Tag[],
    status?: Status1Enum,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<Pet>> {
    const req = this.createRequest('POST', '/pet');
    const mapped = req.prepareArgs({
      name: [name, string()],
      photoUrls: [photoUrls, array(string(), { xmlItemName: 'photoUrl' })],
      id: [id, optional(bigint())],
      category: [category, optional(categorySchema)],
      tags: [tags, optional(array(tagSchema, { xmlItemName: 'tag' }))],
      status: [status, optional(status1EnumSchema)],
    });
    req.header('Content-Type', 'application/x-www-form-urlencoded');
    req.form({
      name: mapped.name,
      photoUrls: mapped.photoUrls,
      id: mapped.id,
      category: mapped.category,
      tags: mapped.tags,
      status: mapped.status,
    });
    req.throwOn(400, ApiError, 'Invalid input');
    req.throwOn(422, ApiError, 'Validation exception');
    req.defaultToError(ApiError, 'Unexpected error');
    req.authenticate([{ petstoreAuth: true }]);
    return req.callAsJson(petSchema, requestOptions);
  }

  /**
   * Multiple status values can be provided with comma separated strings.
   *
   * @param status Status values that need to be considered for filter
   * @return Response from the API call
   */
  async findPetsByStatus(
    status?: Status2Enum,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<Pet[]>> {
    const req = this.createRequest('GET', '/pet/findByStatus');
    const mapped = req.prepareArgs({
      status: [status, optional(status2EnumSchema)],
    });
    req.query('status', mapped.status);
    req.throwOn(400, ApiError, 'Invalid status value');
    req.defaultToError(ApiError, 'Unexpected error');
    req.authenticate([{ petstoreAuth: true }]);
    return req.callAsJson(array(petSchema), requestOptions);
  }

  /**
   * Multiple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing.
   *
   * @param tags Tags to filter by
   * @return Response from the API call
   */
  async findPetsByTags(
    tags?: string[],
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<Pet[]>> {
    const req = this.createRequest('GET', '/pet/findByTags');
    const mapped = req.prepareArgs({ tags: [tags, optional(array(string()))] });
    req.query('tags', mapped.tags);
    req.throwOn(400, ApiError, 'Invalid tag value');
    req.defaultToError(ApiError, 'Unexpected error');
    req.authenticate([{ petstoreAuth: true }]);
    return req.callAsJson(array(petSchema), requestOptions);
  }

  /**
   * Returns a single pet.
   *
   * @param petId ID of pet to return
   * @return Response from the API call
   */
  async getPetById(
    petId: bigint,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<Pet>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({ petId: [petId, bigint()] });
    req.appendTemplatePath`/pet/${mapped.petId}`;
    req.throwOn(400, ApiError, 'Invalid ID supplied');
    req.throwOn(404, ApiError, 'Pet not found');
    req.defaultToError(ApiError, 'Unexpected error');
    req.authenticate([{ apiKey: true }, { petstoreAuth: true }]);
    return req.callAsJson(petSchema, requestOptions);
  }

  /**
   * Updates a pet resource based on the form data.
   *
   * @param petId  ID of pet that needs to be updated
   * @param name   Name of pet that needs to be updated
   * @param status Status of pet that needs to be updated
   * @return Response from the API call
   */
  async updatePetWithForm(
    petId: bigint,
    name?: string,
    status?: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<Pet>> {
    const req = this.createRequest('POST');
    const mapped = req.prepareArgs({
      petId: [petId, bigint()],
      name: [name, optional(string())],
      status: [status, optional(string())],
    });
    req.query('name', mapped.name);
    req.query('status', mapped.status);
    req.appendTemplatePath`/pet/${mapped.petId}`;
    req.throwOn(400, ApiError, 'Invalid input');
    req.defaultToError(ApiError, 'Unexpected error');
    req.authenticate([{ petstoreAuth: true }]);
    return req.callAsJson(petSchema, requestOptions);
  }

  /**
   * Delete a pet.
   *
   * @param petId   Pet id to delete
   * @param apiKey
   * @return Response from the API call
   */
  async deletePet(
    petId: bigint,
    apiKey?: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<void>> {
    const req = this.createRequest('DELETE');
    const mapped = req.prepareArgs({
      petId: [petId, bigint()],
      apiKey: [apiKey, optional(string())],
    });
    req.header('api_key', mapped.apiKey);
    req.appendTemplatePath`/pet/${mapped.petId}`;
    req.throwOn(400, ApiError, 'Invalid pet value');
    req.defaultToError(ApiError, 'Unexpected error');
    req.authenticate([{ petstoreAuth: true }]);
    return req.call(requestOptions);
  }

  /**
   * Upload image of the pet.
   *
   * @param petId              ID of pet to update
   * @param additionalMetadata Additional Metadata
   * @param body
   * @return Response from the API call
   */
  async uploadFile(
    petId: bigint,
    additionalMetadata?: string,
    body?: FileWrapper,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<MApiResponse>> {
    const req = this.createRequest('POST');
    const mapped = req.prepareArgs({
      petId: [petId, bigint()],
      additionalMetadata: [additionalMetadata, optional(string())],
    });
    req.header('Content-Type', 'application/octet-stream');
    req.query('additionalMetadata', mapped.additionalMetadata);
    req.formData({ body: body });
    req.appendTemplatePath`/pet/${mapped.petId}/uploadImage`;
    req.throwOn(400, ApiError, 'No file uploaded');
    req.throwOn(404, ApiError, 'Pet not found');
    req.defaultToError(ApiError, 'Unexpected error');
    req.authenticate([{ petstoreAuth: true }]);
    return req.callAsJson(mApiResponseSchema, requestOptions);
  }
}

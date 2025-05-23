/**
 * Swagger Petstore - OpenAPI 3.0Lib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { isExpired, isValid } from './authentication';
import { OAuthToken } from './models/oAuthToken';
import { OAuthScopePetstoreAuthEnum } from './models/oAuthScopePetstoreAuthEnum';

export class PetstoreAuthManager {
  private _oAuthClientId: string;
  private _oAuthRedirectUri: string;
  private _oAuthScopes?: OAuthScopePetstoreAuthEnum[];
  private _oAuthClockSkew?: number;

  private _baseUri: string;

  constructor(
    {
      oAuthClientId,
      oAuthRedirectUri,
      oAuthScopes,
      oAuthClockSkew,
    }: {
      oAuthClientId: string;
      oAuthRedirectUri: string;
      oAuthScopes?: OAuthScopePetstoreAuthEnum[];
      oAuthClockSkew?: number;
    },
    baseUri: string
  ) {
    this._oAuthClientId = oAuthClientId;
    this._oAuthRedirectUri = oAuthRedirectUri;
    this._oAuthScopes = oAuthScopes;
    this._oAuthClockSkew = oAuthClockSkew;

    this._baseUri = baseUri;
  }

  public buildAuthorizationUrl(
    state: string,
    additionalParams?: Record<string, string>
  ): string {
    let query = this._baseUri + '/authorize';
    const queryParams: Record<string, string | undefined> = {
      response_type: 'code',
      client_id: this._oAuthClientId,
      redirect_uri: this._oAuthRedirectUri,
      scope: this._oAuthScopes?.join(' '),
      state: state,
      ...additionalParams,
    };
    const queryString: string[] = [];
    for (const key of Object.keys(queryParams)) {
      const value = queryParams[key];
      if (value !== undefined && value !== null) {
        queryString.push(
          `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
        );
      }
    }
    return (query +=
      (query.indexOf('?') === -1 ? '?' : '&') + queryString.join('&'));
  }

  public isValid(oAuthToken: OAuthToken | undefined): oAuthToken is OAuthToken {
    return isValid(oAuthToken);
  }

  public isExpired(oAuthToken: OAuthToken) {
    return isExpired(oAuthToken, this._oAuthClockSkew);
  }
}

/* tslint:disable */
import {InjectionToken} from '@angular/core';
import {environment} from '../environments/environment';

export class Constants {
  public static readonly ETAG_CACHE_LIFETIME = 120000;
  public static readonly DEFAULT_TENANT = 'guest';
  public static readonly API_SERVER_URL_LOCAL = `http://185.162.251.243:9123/api/v1/tenants/${Constants.DEFAULT_TENANT}`;
  public static readonly API_SERVER_URL_PAAS = `http://185.162.251.243:9123/api/v1/tenants/${Constants.DEFAULT_TENANT}`;
  public static readonly API_BASE_URL_LOCAL = `http://185.162.251.243:9123/api/v1/tenants/${Constants.DEFAULT_TENANT}`;
  public static readonly API_BASE_URL_PAAS = `http://185.162.251.243:9123/api/v1/tenants/${Constants.DEFAULT_TENANT}`;
  //public static readonly API_SERVER_URL_LOCAL = `http://localhost:9123/api/v1/tenants/${Constants.DEFAULT_TENANT}`;
  // public static readonly API_SERVER_URL_PAAS = `http://localhost:9123/api/v1/tenants/${Constants.DEFAULT_TENANT}`;
  // public static readonly API_BASE_URL_LOCAL = `http://localhost:9123/api/v1/tenants/${Constants.DEFAULT_TENANT}`;
  // public static readonly API_BASE_URL_PAAS = `http://localhost:9123/api/v1/tenants/${Constants.DEFAULT_TENANT}`;

}

/* tslint:enable */
export const BASE_URL_RBL = new InjectionToken<string>('baseUrl');

export function baseUrlFactoryRBL() {
  return environment.production ? Constants.API_BASE_URL_PAAS : Constants.API_BASE_URL_LOCAL;
}

export const API_SERVER_URL_RBL = new InjectionToken<string>('apiServerUrl');

export function apiServerUrlFactoryRBL() {
  return environment.production ? Constants.API_SERVER_URL_PAAS : Constants.API_SERVER_URL_LOCAL;
}

export const ETAG_CACHE_LIFETIME = new InjectionToken<number>('etagCacheLifetime');

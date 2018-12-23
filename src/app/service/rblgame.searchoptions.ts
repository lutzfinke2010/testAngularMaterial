import {Inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {RBLGameSearchOption} from '../models/RBLGameSearchOption';
import {RBLRule} from '../models/RBLRule';
import {API_SERVER_URL_RBL, BASE_URL_RBL} from '../constants';


@Injectable()
export class RblSearchOptionsService {

  readonly apiPath: string;
  readonly MODULE_ID_FOR_ETAGS = 'INVENTORYTROUBLE';

  constructor(private http: HttpClient,
              @Inject(BASE_URL_RBL) private apiBasePath,
              @Inject(API_SERVER_URL_RBL) private apiServerUrl,
  ) {

  }

  public getRBLGameNames(): Promise<string[]> {
    return this.http.get<string[]>(this.apiServerUrl + '/gamenames').toPromise();
  }

  public getSearchOptions(): Promise<RBLGameSearchOption[]> {
    return this.http.get<RBLGameSearchOption[]>(this.apiServerUrl + '/searchoptions').toPromise();
  }

  public setSearchOptions(searchOption: RBLGameSearchOption): Promise<void> {
    return this.http.put<void>(this.apiServerUrl + '/searchoptionschange', searchOption).toPromise();
  }

  public getRules(): Promise<RBLRule[]> {
    return this.http.get<RBLRule[]>(this.apiServerUrl + '/rule').toPromise();
  }

  public showAsWarning = false;

  public getClassForRuleName(gameName: string, rule: RBLRule): string {
    return 'btn btn-success btn-lg';
  }
}

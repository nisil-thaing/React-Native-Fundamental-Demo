import * as axios from 'axios';
import { from, throwError } from 'rxjs';
import { catchError, first, map, publishLast, refCount } from 'rxjs/operators';
import { HTTP_STATUS_CODE } from '../shared/Constant';

export default class ApiClient {
  fetchData(url, options) {
    return from(axios.get(url, options))
              .pipe(
                first(),
                publishLast(),
                refCount(),
                map(res => {
                  if (res.status !== HTTP_STATUS_CODE.OK) throw new Error('Something wrong');;

                  return res.data;
                }),
                catchError(err => throwError(err))
              );
  }
}
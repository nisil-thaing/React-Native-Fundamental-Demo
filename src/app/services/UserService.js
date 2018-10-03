import { AsyncStorage } from 'react-native';
import { from, throwError } from 'rxjs';
import { take, map, switchMap, catchError } from 'rxjs/operators';

import ApiClient from './Api';

export default class UserService {
  constructor() {
    this.api = new ApiClient();
  }

  registerAccount(user) {
    const {
      username,
      password,
      passwordConfirm
    } = user || {};

    if (!username || !password || password !== passwordConfirm) throwError('Registration failed!');

    return from(AsyncStorage.getItem(username))
              .pipe(
                take(1),
                switchMap((result, err) => {
                  if (err || result) {
                    return throwError(`${ username } has already existed!`);
                  }

                  return from(AsyncStorage.setItem(username, password))
                            .pipe(
                              take(1),
                              map((postErr, postResult) => {
                                if (postErr) throw new Error(postErr);

                                return postResult;
                              })
                            )
                }),
                catchError(err => throwError(err))
              );
  }
}
import { HttpInterceptorFn } from '@angular/common/http';
import { storage, isBrowser } from '../utils/storage';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { errorSignal } from '../utils/error.signal';

export const authTokenInterceptor: HttpInterceptorFn = (req, next) => {
  if (!isBrowser()) return next(req);

  const token = storage.get('token');
  if (token) {
    req = req.clone({
      setHeaders: { Authorization: `Bearer ${token}` }
    });
  }

  return next(req).pipe(
    catchError((error) => {
      let message = 'An unexpected error occurred.';
      if (error.status === 0) message = 'Network error. Please check your connection.';
      else if (error.status >= 400 && error.status < 500) message = 'Request failed. Please try again.';
      else if (error.status >= 500) message = 'Server error. Please try later.';

      // Update the shared signal
      errorSignal.set(message);

      // Optionally, clear the error after some time
      setTimeout(() => errorSignal.set(null), 5000);

      return throwError(() => error);
    })
  );
};

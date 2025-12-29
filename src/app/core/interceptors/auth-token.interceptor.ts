import { HttpInterceptorFn } from '@angular/common/http';
import { storage, isBrowser } from '../utils/storage';

export const authTokenInterceptor: HttpInterceptorFn = (req, next) => {
  if (!isBrowser()) return next(req);

  const token = storage.get('token');
  if (token) {
    req = req.clone({
      setHeaders: { Authorization: `Bearer ${token}` }
    });
  }
  return next(req);
};


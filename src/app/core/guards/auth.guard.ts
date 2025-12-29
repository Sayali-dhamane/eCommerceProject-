import { CanActivateFn, Router } from '@angular/router';
import { storage } from '../utils/storage';
import { inject } from '@angular/core';
export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  if (storage.get('token')) return true;
  router.navigate(['/login']); return false;
};

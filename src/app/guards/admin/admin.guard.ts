import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UserService } from 'src/app/services/user/user.service';

export const adminGuard: CanActivateFn = (route, state) => {
  const userIsAdmin = inject(UserService).user.email;
  return userIsAdmin === 'admin@admin.com'
    ? true
    : inject(Router).createUrlTree(['']);
};

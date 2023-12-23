import { CanActivateFn, Router } from '@angular/router';

import { UserService } from 'src/app/shared/services/user/user.service';
import { inject } from '@angular/core';

export const adminGuard: CanActivateFn = (route, state) => {
  const userIsAdmin = inject(UserService).user.email;
  return userIsAdmin === 'admin@admin.com'
    ? true
    : inject(Router).createUrlTree(['']);
};

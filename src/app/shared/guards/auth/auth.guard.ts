import { CanActivateFn, Router } from '@angular/router';

import { UserService } from 'src/app/shared/services/user/user.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  const userIsAuthenticated = inject(UserService).user; //userIsAuthenticated don't work
  return userIsAuthenticated ? true : inject(Router).createUrlTree(['/auth']);
};

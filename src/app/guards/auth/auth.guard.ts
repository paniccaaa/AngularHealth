import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UserService } from 'src/app/services/user/user.service';

export const authGuard: CanActivateFn = (route, state) => {
  const userIsAuthenticated = inject(UserService).user;
  return userIsAuthenticated ? true : inject(Router).createUrlTree(['/auth']);
};

import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { tap } from 'rxjs';

// guard must return one of the following:
// Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree
export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService) // inject is used to inject a service into a function
  const routerService = inject(Router)

  return authService.isLoggedIn$.pipe(
    tap((isLoggedIn: boolean) => !isLoggedIn && routerService.navigate(['/login']))
  )
};

// this is the long version of the above
// if(isLoggedIn) {
//   return true
// } else {
//   routerService.navigate(['/login'])
//   return false
// }

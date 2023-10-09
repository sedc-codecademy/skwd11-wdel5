import { Injectable } from '@angular/core'
import { Login, Register } from '../types/interfaces/auth.interface'
import { HttpClient } from '@angular/common/http'
import { Observable, catchError, of, tap } from 'rxjs'
import { environment } from '../../environments/environment'
import { MatSnackBar } from '@angular/material/snack-bar'
import { Router } from '@angular/router'

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    constructor(
        private http: HttpClient,
        private snackBar: MatSnackBar,
        private router: Router
    ) {}

    register(registerCredentials: Register): Observable<any> {
        console.log(registerCredentials)

        return this.http
            .post(`${environment.apiUrl}/User/register`, registerCredentials)
            .pipe(
                tap(() => {
                    this.snackBar.open(
                        'You have successfully registered!',
                        'Close',
                        environment.snackBarConfig
                    )
                    this.router.navigate(['/login'])
                }),
                catchError((error) => {
                    if (error) {
                        console.log(error)
                        this.snackBar.open(
                            error?.error?.errors?.[0] ||
                                'Error while registering',
                            'Close',
                            environment.snackBarConfig
                        )
                    }

                    return of(null)
                })
            )
    }

    login(loginCredentials: Login): Observable<any> {
        console.log(loginCredentials)

        return this.http
            .post(`${environment.apiUrl}/User/login`, loginCredentials)
            .pipe(
                tap(() => {
                    this.snackBar.open(
                        'You have successfully logged in!',
                        'Close',
                        environment.snackBarConfig
                    )
                    this.router.navigate(['/'])
                }),
                catchError((error) => {
                    if (error) {
                        this.snackBar.open(
                            error?.error?.errors?.[0] ||
                                'Error while logging in!',
                            'Close',
                            environment.snackBarConfig
                        )
                    }

                    return of(null)
                })
            )
    }
}

import { Subscription } from 'rxjs'
import { Component, OnDestroy } from '@angular/core'
import { CommonModule } from '@angular/common'
import {
    FormControl,
    FormGroup,
    ReactiveFormsModule,
    Validators,
} from '@angular/forms'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon'
import { AuthService } from 'src/app/services/auth.service'
import { Login } from '../../types/interfaces/auth.interface'

@Component({
    selector: 'app-login',
    standalone: true,
    imports: [
        CommonModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatIconModule,
    ],
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnDestroy {
    hidePassword: boolean = true
    subscription: Subscription = new Subscription()

    loginForm = new FormGroup({
        username: new FormControl<string>('', Validators.required),
        password: new FormControl<string>('', Validators.required),
    })

    get hasNameRequiredError(): boolean {
        return !!(
            this.loginForm.get('username')?.hasError('required') &&
            (this.loginForm.get('username')?.touched ||
                this.loginForm.get('username')?.dirty)
        )
    }

    get hasPasswordRequiredError(): boolean {
        return !!(
            this.loginForm.get('password')?.hasError('required') &&
            (this.loginForm.get('password')?.touched ||
                this.loginForm.get('password')?.dirty)
        )
    }

    constructor(private authService: AuthService) {}

    onLogin() {
        this.subscription = this.authService
            .login(this.loginForm.value as Login)
            .subscribe()
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe()
    }
}

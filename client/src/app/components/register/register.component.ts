import { AuthService } from './../../services/auth.service'
import { Component, OnDestroy } from '@angular/core'
import { CommonModule } from '@angular/common'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import {
    FormControl,
    FormGroup,
    ReactiveFormsModule,
    Validators,
} from '@angular/forms'
import { MatIconModule } from '@angular/material/icon'
import { MatButtonModule } from '@angular/material/button'
import { Register } from '../../types/interfaces/auth.interface'
import { Subscription } from 'rxjs'

@Component({
    selector: 'app-register',
    standalone: true,
    imports: [
        CommonModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatIconModule,
        MatButtonModule,
    ],
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnDestroy {
    hidePassword: boolean = true

    subscription: Subscription = new Subscription()

    registerForm: FormGroup = new FormGroup({
        username: new FormControl<string>('', Validators.required),
        email: new FormControl<string>(
            '',
            Validators.compose([Validators.required, Validators.email])
        ),
        password: new FormControl<string>(
            '',
            Validators.compose([Validators.required, Validators.minLength(8)])
        ),
    })

    get hasNameRequiredError(): boolean {
        return !!(
            this.registerForm.get('username')?.hasError('required') &&
            (this.registerForm.get('username')?.touched ||
                this.registerForm.get('username')?.dirty)
        )
    }

    get hasEmailError(): boolean {
        return !!(
            this.registerForm.get('email')?.hasError('email') &&
            (this.registerForm.get('email')?.touched ||
                this.registerForm.get('email')?.dirty)
        )
    }

    get hasEmailRequiredError(): boolean {
        return !!(
            this.registerForm.get('email')?.hasError('required') &&
            (this.registerForm.get('email')?.touched ||
                this.registerForm.get('email')?.dirty)
        )
    }

    get hasPasswordRequiredError(): boolean {
        return !!(
            this.registerForm.get('password')?.hasError('required') &&
            (this.registerForm.get('password')?.touched ||
                this.registerForm.get('password')?.dirty)
        )
    }

    get hasPasswordMinLengthError(): boolean {
        return !!(
            this.registerForm.get('password')?.hasError('minlength') &&
            (this.registerForm.get('password')?.touched ||
                this.registerForm.get('password')?.dirty)
        )
    }

    constructor(private authService: AuthService) {}

    onRegister() {
        // console.log('submitted form', this.registerForm.value)
        this.subscription = this.authService
            .register(this.registerForm.value as Register)
            .subscribe()
        // this.registerForm.valueChanges.subscribe((value) => console.log(value))
    }

    ngOnDestroy() {
        this.subscription.unsubscribe()
    }
}

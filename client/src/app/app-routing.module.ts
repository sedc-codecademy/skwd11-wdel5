import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { HomeComponent } from './components/home/home.component'

// we list all routes here to have a Single Page Application
const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent }, // example: Vising localhost:4200/home will render the HomeComponent
    {
        path: 'pizza-maker',
        loadComponent: () =>
            import('./components/pizza-maker/pizza-maker.component').then(
                (module) => module.PizzaMakerComponent
            ),
    },
    {
        path: 'login',
        loadComponent: () =>
            import('./components/login/login.component').then(
                (module) => module.LoginComponent
            ),
    },
    {
        path: 'register',
        loadComponent: () =>
            import('./components/register/register.component').then(
                (module) => module.RegisterComponent
            ),
    },
]

@NgModule({
    imports: [RouterModule.forRoot(routes)], // We import the RouterModule with our routes, basic configuration that is not changed, and we can use it as it is
    exports: [RouterModule],
})
export class AppRoutingModule {}

// Without Lazy Loading
// { path: 'pizza-maker', component: PizzaMakerComponent },
// { path: 'login', component: LoginComponent },
// { path: 'register', component: RegisterComponent },

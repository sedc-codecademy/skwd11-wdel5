export interface Login {
    username: string
    password: string
}

export interface Register extends Login {
    // username: string
    // password: string
    email: string
}

export interface LoginResponse {
    token: string
    validTo: string
}

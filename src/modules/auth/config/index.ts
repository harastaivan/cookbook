export enum LoginFormField {
    Email = 'email',
    Password = 'password',
}

export interface LoginFormValues {
    [LoginFormField.Email]: string;
    [LoginFormField.Password]: string;
}
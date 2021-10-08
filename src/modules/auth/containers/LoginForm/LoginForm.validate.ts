import { LoginFormField } from '../../config';
import type { LoginFormValues } from '../../config';

export default function validate(values: LoginFormValues, { intl }) {
    const errors: Partial<Record<LoginFormField, string>> = {};

    if (!values.email) {
        errors.email = 'Required';
    }
    if (!values.password) {
        errors.password = 'Required';
    }

    return errors;
}

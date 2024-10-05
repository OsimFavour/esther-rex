import * as yup from 'yup'

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
// min 5 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit.

export const signUpSchema = yup.object({
    username: yup
        .string()
        .min(3, "Username must be at least 3 characters long")
        .required('User Name is Required'),
    email: yup
        .string()
        .email('Email Should Be Valid')
        .required('Email Address is Required'),
    password: yup
        .string()
        .min(5)
        .matches(passwordRules, { message: "Please create a stronger password" })
        .required('Password is Required'),
    confirm_password: yup
        .string()
        .oneOf([yup.ref('password'), null], 'Passwords must match')
        .required('Confirm Password is Required')
});


export const loginSchema = yup.object({
    email: yup.string()
    .email('Email Should Be Valid')
    .required('Email Address is Required'),
    password: yup.string()
    .required('Password is Required')
})
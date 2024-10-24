import * as yup from 'yup'

// min 5 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit.
const passwordMatch = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

const phoneNumberMatch = /^[0-9]+$/

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
        .matches(passwordMatch, { message: "Please create a stronger password" })
        .required('Password is Required'),
    confirm_password: yup
        .string()
        .oneOf([yup.ref('password'), null], 'Passwords must match')
        .required('Confirm Password is Required')
});


export const loginSchema = yup.object({
    email: yup
        .string()
        .email('Email Should Be Valid')
        .required('Email Address is Required'),
    password: yup
        .string()
        .min(5)
        .required('Password is Required')
})


export const academyRegistrationSchema = yup.object({
    name: yup
        .string()
        .required('Name is required'),
    phoneNumber: yup
        .string()
        .matches(phoneNumberMatch, 'Phone number is not valid')
        .required('Phone number is required'),
    email: yup
        .string()
        .email('Invalid email address')
        .required('Email is required'),
    maritalStatus: yup
        .string()
        .required('Marital status is required'),
    ageBracket: yup
        .string()
        .required('Age bracket is required'),
    churchMinistry: yup
        .string()
        .required('Church/Ministry name is required'),
    businessName: yup
        .string()
        .required('Business name is required'),
    mentors: yup
        .string()
        .required('Mentors are required'),
    majorCourses: yup
        .array()
        .min(1, 'You must choose at least one course')
        .required('At least one course is required'),
    expectations: yup
        .string()
        .required('Expectations are required'),
    intention: yup
        .string()
        .required('Please specify your intention'),
    additionalComment: yup
        .string()
  });
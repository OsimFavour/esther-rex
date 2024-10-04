
import { useState } from 'react'
import { Link } from 'react-router-dom'

import * as yup from 'yup'
import { useFormik } from 'formik'

import Button from '../../components/button/button.component'
import CustomInput from '../../components/custom-input/custom-input.component'

import { ReactComponent as GoogleIcon } from '../../assets/google-icon.svg'

import { authenticateWithGooglePopup, createAuthUserWithEmailAndPassword } from '../../utils/firebase/firebase.utils'


import './sign-up.styles.scss'


const signUpSchema = yup.object({
    username: yup.string().required('User Name is Required'),
    email: yup.string().email('Email Should Be Valid')
        .required('Email Address is Required'),
    password: yup.string().required('Password is Required'),
    confirm_password: yup.string()
        .oneOf([yup.ref('password'), null], 'Passwords must match')
});


const defaultFormFields = {
    username: "",
    email: "",
    password: "",
    confirm_password: ""
}


const SignUp = () => {

    const [formFields, setFormFields] = useState(defaultFormFields)

    const { username, email, password, confirm_password } = formFields


    const handleSubmit = async (values) => {
        const { email, password } = values
        try {
            const response = await createAuthUserWithEmailAndPassword(email, password)
            console.log(`Auth User Response: ${response}`);
            
        } catch (error) {
            console.log(`Error Message: ${error}`);
            
        }

    }

    const authenticateWithGoogle = async () => {
        const response = await authenticateWithGooglePopup()
        console.log(response);
        
    }

    const formik = useFormik({
        initialValues: {
            username: '',
            email: '',
            password: '',
            confirm_password: ''
        },
        validationSchema: signUpSchema,
        onSubmit: handleSubmit
    })


    return (
        <section className='sign-up-container'>
            <div className="container py-5">
                <div className="row d-flex align-items-center justify-content-center">
               
                <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
                    <div className='pb-3 text-center'>Welcome! please sign up here.</div>
                    <form
                        action=''
                        onSubmit={formik.handleSubmit}
                    >


                    <div>
                        <CustomInput
                            type='name' 
                            name='username' 
                            placeholder='User Name'
                            value={formik.values.username}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />

                        <div className="error">
                            {formik.touched.username && formik.errors.username}
                        </div>
                    </div>

                    <div>
                        <CustomInput
                            type='email' 
                            name='email' 
                            placeholder='Your Email' 
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />

                        <div className="error">
                            {formik.touched.email && formik.errors.email}
                        </div>
                    </div>

                    <div>

                        <CustomInput 
                            type='password' 
                            name='password' 
                            placeholder='Your Password'
                            value={formik.values.password}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />

                        <div className="error">
                            {formik.touched.password && formik.errors.password}
                        </div>
                    </div>

                    <div>

                        <CustomInput 
                            type='password' 
                            name='confirm_password' 
                            placeholder='Confirm Password'
                            value={formik.values.confirm_password}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />

                        <div className="error">
                            {formik.touched.confirm_password && formik.errors.confirm_password}
                        </div>
                        
                    </div>

                    <Button type="submit">
                        <div className="button-text">Sign up</div>
                    </Button>

                    <div className="divider d-flex align-items-center my-4">
                        <p className="text-center fw-bold mx-3 mb-0 text-muted">OR</p>
                    </div>

                    <Button buttonType='google' type='button' onClick={authenticateWithGoogle}>
                        <span className="icon"><GoogleIcon/></span>
                        <span className="button-text">Sign Up With Google</span>
                    </Button>

                    <div className='mt-4'>
                        <span>Already have an account? 
                            <Link to="/sign-in" className='text-dark'> Sign in here</Link>
                        </span>
                        
                    </div>

                    </form>
                </div>
                </div>
            </div>
        </section>
    )
}

export default SignUp
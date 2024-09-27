import { Link } from 'react-router-dom'

import * as yup from 'yup'
import { useFormik } from 'formik'

import CustomInput from '../../components/custom-input/custom-input.component'

import { ReactComponent as GoogleIcon } from '../../assets/google-icon.svg'
import Button from '../../components/button/button.component'
import { authenticateWithGooglePopup } from '../../utils/firebase/firebase.utils'


const loginSchema = yup.object({
    email: yup.string()
    .email('Email Should Be Valid')
    .required('Email Address is Required'),
    password: yup.string()
    .required('Password is Required')
})

const SignIn = () => {
    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validationSchema: loginSchema,
        onSubmit: values => {
            console.log(values);
            
        }
    })

    const authenticateWithGoogle = async () => {
        const response = await authenticateWithGooglePopup()
        console.log(response);
        
    }
    return (
        
        <div className='sign-in-container'>
            <div className="container py-5 mt-5">
                <div className="row d-flex align-items-center justify-content-center mt-5">
                {/* <div className="col-md-8 col-lg-7 col-xl-6">
                    <img src={AuthImage}
                    className="img-fluid" alt="AuthImg"/>
                </div> */}
                <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">

                    <div className='pb-3 text-center'>Welcome! please enter your details.</div>
                    <form 
                        action=''
                        onSubmit={formik.handleSubmit}
                    >

                        <div>
                            <CustomInput
                                type='email' 
                                name='email' 
                                placeholder='Your Email' 
                                value={formik.values.email}
                                onChange={formik.handleChange('email')}
                                onBlur={formik.handleBlur('email')}
                            />

                            <div className="error">
                                {formik.touched.email && formik.errors.email}
                            </div>
                        </div>

                        <div className="">

                            <CustomInput
                                type='password' 
                                name='password' 
                                placeholder='Your Password'
                                value={formik.values.password}
                                onChange={formik.handleChange('password')}
                                onBlur={formik.handleBlur('password')}
                            />

                            <div className="error">
                                {formik.touched.password && formik.errors.password}
                            </div>

                        </div>

                        <div className='mb-2'>
                            <Link to="/forgot-password" className='text-dark'>Forgot password?</Link>
                        </div>

                        <Button type="submit">
                            <div className="button-text">Sign In</div>
                        </Button>

                        <div className="divider d-flex align-items-center my-4">
                            <p className="text-center fw-bold mx-3 mb-0 text-muted">OR</p>
                        </div>


                        <Button buttonType='google' type='button' onClick={authenticateWithGoogle}>
                            <span className="icon"><GoogleIcon/></span>
                            <span className="button-text">Sign In With Google</span>
                        </Button>
                        
                        <div className='mt-4'>
                            <span>Don't have an account? 
                                <Link to="/sign-up" className='text-dark'> Sign up here</Link>
                            </span>
                            
                        </div>

                    </form>
                </div>
                </div>
            </div>
        </div>
    )
}

export default SignIn
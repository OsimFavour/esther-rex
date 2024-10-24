import { Link, useNavigate } from 'react-router-dom'

import { useFormik } from 'formik'

import Button from '../../components/button/button.component'
import CustomInput from '../../components/custom-input/custom-input.component'

import { ReactComponent as GoogleIcon } from '../../assets/google-icon.svg'

import { authenticateWithGooglePopup, signInAuthUserWithEmailAndPassword } from '../../utils/firebase/firebase.utils'
import { loginSchema } from '../../utils/schemas/schema.utlis'
import { toast } from 'react-toastify'


const SignIn = () => {
    const navigate = useNavigate()

    const onSubmit = async (values, actions) => {
        const { email, password } = values

        try {
            const response = await signInAuthUserWithEmailAndPassword(email, password)
            if (response) {
                alert('Success')
            }
            actions.resetForm()
        } catch (error) {
           
            console.log(`Sign In Auth Error Message: ${error}`)
        }
    }


    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validationSchema: loginSchema,
        onSubmit
    })

    const authenticateWithGoogle = async () => {
        const response = await authenticateWithGooglePopup()

        if (response.userExists) {
            toast.success('Welcome back!')
            navigate('/')
        } else {
            toast.info("You'll need to sign up here")
            navigate('/sign-up')
        }
        
    }
    return (
        
        <div className='sign-in-container'>
            <div className="container py-5 mt-5">
                <div className="row d-flex align-items-center justify-content-center mt-5">
                
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
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                className={formik.touched.email && formik.errors.email ? "input-error" : ""}
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
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                className={formik.touched.password && formik.errors.password ? "input-error" : ""}
                            />

                            <div className="error">
                                {formik.touched.password && formik.errors.password}
                            </div>

                        </div>

                        <div className='mb-2'>
                            <Link to="/forgot-password" className='text-dark'>Forgot password?</Link>
                        </div>

                        <Button type="submit" disabled={formik.isSubmitting}>
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
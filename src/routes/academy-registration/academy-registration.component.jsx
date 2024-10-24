import { Link } from 'react-router-dom'

import { useFormik } from 'formik'
// import { toast } from 'react-toastify'

import Button from '../../components/button/button.component'
import CustomInput from '../../components/custom-input/custom-input.component'


import { academyRegistrationSchema } from '../../utils/schemas/schema.utlis'



const AcademyRegistration = () => {

    const onSubmit = async (values, actions) => {
    

    }

    const formik = useFormik({
        initialValues: {
            name: '',
            phoneNumber: '',
            email: '',
            maritalStatus: '',
            ageBracket: '',
            churchMinistry: '',
            businessName: '',
            mentors: '',
            majorCourses: [],
            expectations: '',
            intention: '',
            additionalComment: ''
        },
        validationSchema: academyRegistrationSchema,
        onSubmit
    })

    console.log(formik);

    console.log('Initial Value: ', formik.initialValues);
    console.log('Current Value: ', formik.values);
    


    return (
        <section className='sign-up-container'>
            <div className="container py-5">
                <div className="row d-flex align-items-center justify-content-center">
               
                <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
                    <div className='pb-3 text-center'>Welcome! please register for the academy here.</div>
                    <form
                        action=''
                        onSubmit={formik.handleSubmit}
                    >


                    <div>
                        <CustomInput
                            type='text' 
                            name='name' 
                            placeholder='Your Name'
                            value={formik.values.name}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            className={formik.touched.name && formik.errors.name ? "input-error" : ""}
                        />

                        <div className="error">
                            {formik.touched.name && formik.errors.name}
                        </div>
                    </div>



                    <div>
                        <CustomInput
                            type='text' 
                            name='phoneNumber' 
                            placeholder='Phone Number' 
                            value={formik.values.phoneNumber}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            className={formik.touched.phoneNumber && formik.errors.phoneNumber ? "input-error" : ""}
                        />

                        <div className="error">
                            {formik.touched.phoneNumber && formik.errors.phoneNumber}
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
                            className={formik.touched.email && formik.errors.email ? "input-error" : ""}
                        />

                        <div className="error">
                            {formik.touched.email && formik.errors.email}
                        </div>
                    </div>



                    <div>
                        <CustomInput
                            type='text' 
                            name='maritalStatus' 
                            placeholder='Marital Status' 
                            value={formik.values.maritalStatus}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            className={formik.touched.maritalStatus && formik.errors.maritalStatus ? "input-error" : ""}
                        />

                        <div className="error">
                            {formik.touched.maritalStatus && formik.errors.maritalStatus}
                        </div>
                    </div>


                    <div>
                        <label>Marital Status:</label>
                        <div className='radio-group'>
                            {['Single', 'Married', 'Divorced', 'Widow'].map((status) => (
                                <label key={status}>
                                    <CustomInput 
                                        type='radio'
                                        name='maritalStatus' 
                                        value={status}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        checked={formik.values.maritalStatus === status} 
                                        className={formik.touched.maritalStatus && formik.errors.maritalStatus ? "input-error" : ""}  
                                    />
                                </label>
                            ))}
                        </div>

                        <div className='error'>
                            {formik.touched.maritalStatus && formik.errors.maritalStatus}
                        </div>
                    </div>



                    <div>
                        <CustomInput
                            type='number' 
                            name='ageBracket' 
                            placeholder='Age Bracket' 
                            value={formik.values.ageBracket}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            className={formik.touched.ageBracket && formik.errors.ageBracket ? "input-error" : ""}
                        />

                        <div className="error">
                            {formik.touched.ageBracket && formik.errors.ageBracket}
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
                            className={formik.touched.email && formik.errors.email ? "input-error" : ""}
                        />

                        <div className="error">
                            {formik.touched.email && formik.errors.email}
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
                            className={formik.touched.email && formik.errors.email ? "input-error" : ""}
                        />

                        <div className="error">
                            {formik.touched.email && formik.errors.email}
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
                            className={formik.touched.email && formik.errors.email ? "input-error" : ""}
                        />

                        <div className="error">
                            {formik.touched.email && formik.errors.email}
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
                            className={formik.touched.email && formik.errors.email ? "input-error" : ""}
                        />

                        <div className="error">
                            {formik.touched.email && formik.errors.email}
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
                            className={formik.touched.email && formik.errors.email ? "input-error" : ""}
                        />

                        <div className="error">
                            {formik.touched.email && formik.errors.email}
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
                            className={formik.touched.email && formik.errors.email ? "input-error" : ""}
                        />

                        <div className="error">
                            {formik.touched.email && formik.errors.email}
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
                            className={formik.touched.email && formik.errors.email ? "input-error" : ""}
                        />

                        <div className="error">
                            {formik.touched.email && formik.errors.email}
                        </div>
                    </div>




                    <Button type="submit" disabled={formik.isSubmitting}>
                        <div className="button-text">Sign up</div>
                    </Button>

                    <div className="divider d-flex align-items-center my-4">
                        <p className="text-center fw-bold mx-3 mb-0 text-muted">OR</p>
                    </div>

                    <Button buttonType='google' type='button' >
                        <span className="icon">
                            {/* <GoogleIcon/> */}
                        </span>
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

export default AcademyRegistration
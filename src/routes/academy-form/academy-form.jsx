import React from 'react';
import { useFormik } from 'formik';
import './academy-form.scss';
import { academyRegistrationSchema } from '../../utils/schemas/schema.utlis';

const AcademyForm = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      phoneNumber: '',
      email: '',
      address: '',
      maritalStatus: '',
      ageBracket: '',
      church: '',
      business: '',
      mentors: '',
      coursesOfInterest: [],
      expectations: '',
      intentions: '',
    },
    validationSchema: academyRegistrationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="registration-form">
      <h1>Esther's Wisdom Academy: Women of Impact School for Development of Ministries</h1>

      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
        />
        {formik.touched.name && formik.errors.name ? <div className="error">{formik.errors.name}</div> : null}
      </div>

      <div className="form-group">
        <label htmlFor="phoneNumber">Phone Number:</label>
        <input
          type="text"
          id="phoneNumber"
          name="phoneNumber"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.phoneNumber}
        />
        {formik.touched.phoneNumber && formik.errors.phoneNumber ? <div className="error">{formik.errors.phoneNumber}</div> : null}
      </div>

      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email ? <div className="error">{formik.errors.email}</div> : null}
      </div>

      <div className="form-group">
        <label htmlFor="address">Address:</label>
        <input
          type="text"
          id="address"
          name="address"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.address}
        />
        {formik.touched.address && formik.errors.address ? <div className="error">{formik.errors.address}</div> : null}
      </div>

      <div className="form-group">
        <label>Marital Status:</label>
        <div className="radio-group">
          {['Single', 'Married', 'Divorced', 'Widow'].map((status) => (
            <label key={status}>
              <input
                type="radio"
                name="maritalStatus"
                value={status}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                checked={formik.values.maritalStatus === status}
              />
              {status}
            </label>
          ))}
        </div>
        {formik.touched.maritalStatus && formik.errors.maritalStatus ? (
          <div className="error">{formik.errors.maritalStatus}</div>
        ) : null}
      </div>

      <div className="form-group">
        <label>Age Bracket:</label>
        <div className="radio-group">
          {['15 - 25', '26 - 35', '36 - 45', '46 - 55', '56 - 65', '66 - 75'].map((age) => (
            <label key={age}>
              <input
                type="radio"
                name="ageBracket"
                value={age}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                checked={formik.values.ageBracket === age}
              />
              {age}
            </label>
          ))}
        </div>
        {formik.touched.ageBracket && formik.errors.ageBracket ? (
          <div className="error">{formik.errors.ageBracket}</div>
        ) : null}
      </div>

      <div className="form-group">
        <label htmlFor="church">Name of Church/Ministry:</label>
        <input
          type="text"
          id="church"
          name="church"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.church}
        />
        {formik.touched.church && formik.errors.church ? <div className="error">{formik.errors.church}</div> : null}
      </div>

      <div className="form-group">
        <label htmlFor="business">Name of Business:</label>
        <input
          type="text"
          id="business"
          name="business"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.business}
        />
        {formik.touched.business && formik.errors.business ? <div className="error">{formik.errors.business}</div> : null}
      </div>

      <div className="form-group">
        <label htmlFor="mentors">Who are your mentors?</label>
        <input
          type="text"
          id="mentors"
          name="mentors"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.mentors}
        />
        {formik.touched.mentors && formik.errors.mentors ? <div className="error">{formik.errors.mentors}</div> : null}
      </div>

      <div className="form-group">
        <label>Course(s) of Interest:</label>
        <div className="checkbox-group">
          {[
            'Effective Prayer Ministry',
            'Effective Pastoring and Mentoring',
            'Effective Leadership',
            'The Great Commission',
            'Children and Youth Ministry',
            'Marriage Mentoring',
            'Ministerial Help',
            'Ministry of Help',
            'Teaching Ministry/Effective Communication',
            'Healing and Deliverance Ministry',
            'The Creative Writing Ministry',
            'Strategic Music Ministry',
          ].map((course) => (
            <label key={course}>
              <input
                type="checkbox"
                name="coursesOfInterest"
                value={course}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                checked={formik.values.coursesOfInterest.includes(course)}
              />
              {course}
            </label>
          ))}
        </div>
        {formik.touched.coursesOfInterest && formik.errors.coursesOfInterest ? (
          <div className="error">{formik.errors.coursesOfInterest}</div>
        ) : null}
      </div>

      <div className="form-group">
        <label htmlFor="expectations">What are your expectations for this school?</label>
        <textarea
          id="expectations"
          name="expectations"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.expectations}
        />
        {formik.touched.expectations && formik.errors.expectations ? <div className="error">{formik.errors.expectations}</div> : null}
      </div>

      <div className="form-group">
        <label htmlFor="intentions">What do you intend to do with the knowledge from this course?</label>
        <textarea
          id="intentions"
          name="intentions"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.intentions}
        />
        {formik.touched.intentions && formik.errors.intentions ? <div className="error">{formik.errors.intentions}</div> : null}
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default AcademyForm;

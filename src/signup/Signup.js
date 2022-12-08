import { Formik } from 'formik'
import React from 'react'
import * as  Yup from "yup"
import "./Signup.css"
import Button from "react-bootstrap/Button";

const schema = Yup.object().shape({
  name: Yup.string().required("Please enter a name"),
  surname: Yup.string().required("Please enter a surname"),
  gender: Yup.string().required().oneOf(["Male", "Female", "Other"]),
  username: Yup.string().required("Please enter a username"),
  email: Yup.string().required("Please enter a email"),
  password: Yup.string().required("Please enter a password"),
  country: Yup.string(),
  city: Yup.string()
});

function Signup() {
  return (
    <>


      <Formik
        // Başlangıç değerleri
        initialValues={{
          name: "",
          surname: "",
          gender: "",
          username: "",
          email: "",
          password: "",
          country: "",
          city: ""
        }}
        //Yup ile form alanlarının kontrolü
        validationSchema={schema}
        //Butona tıklandığında yapılacaklar
        onSubmit={(values, { resetForm, setSubmitting }) => {
          console.log(values);
          setTimeout(() => {
            resetForm();
            setSubmitting(false);
          })
        }
        }
      >
        {({
          values,
          handleChange,
          handleSubmit,
          dirty,
          isSubmitting
        }) => (
          <div className="signup">
            <div className='form'>
              <form noValidate onSubmit={handleSubmit}>
                <span>SignUp</span>
                <input id='name' type="text" placeholder='name' className='input' value={values.name} onChange={handleChange} />
                <input id='surname' type="text" placeholder='surname' className='input' value={values.surname} onChange={handleChange} />
                <select id='gender' type="checkbox" value={values.gender} onChange={handleChange}>
                  <option value="" label="Select gender" />
                  <option value="Male" label="Male" />
                  <option value="Female" label="Female" />
                  <option value="Other" label="Other" />
                </select>
                <input id='username' type="text" placeholder='username' className='input' value={values.username} onChange={handleChange} />
                <input id='email' type="email" placeholder='email' className='input' value={values.email} onChange={handleChange} />
                <input id='password' type="password" placeholder='password' className='input' value={values.password} onChange={handleChange} />
                <input id='country' type="text" placeholder='country' className='input' value={values.country} onChange={handleChange} />
                <input id='city' type="text" placeholder='city' className='input' value={values.city} onChange={handleChange} />

                <Button type="submit" disabled={!dirty || isSubmitting} className="btn btn-success">Submit</Button>

              </form>
            </div>
          </div>
        )}

      </Formik>
    </>
  )
}

export default Signup
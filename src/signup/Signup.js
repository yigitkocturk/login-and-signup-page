import { Formik } from 'formik'
import React from 'react'
import * as  Yup from "yup"
import "./Signup.css"
import Button from "react-bootstrap/Button";

function Signup() {
  return (
    <div >
      <div className='App-header'>
        <h1>Sign Up</h1>
      </div>
      <div className="form-box">
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
        validationSchema={Yup.object({
          name: Yup.string().required("Please enter a name"),
          surname: Yup.string().required("Please enter a surname"),
          gender: Yup.string().required().oneOf(["Male", "Female", "Other"]),
          username: Yup.string().required("Please enter a username"),
          email: Yup.string().required("Please enter a email"),
          password: Yup.string().required("Please enter a password"),
          country: Yup.string(),
          city: Yup.string()
        })}
        //Butona tıklandığında yapılacaklar
        onSubmit={(values) => {
          console.log(values);
        }
        }
      >
        {({
          values,
          handleChange,
          handleSubmit,
          handleReset,
          dirty,
          isSubmitting
        }) => (
          
          <form className="form-element" onSubmit={handleSubmit}>
            
            <div>
            <label htmlFor='name'>Name</label>
            <input id='name' type="text" placeholder='name' className='input' value={values.name} onChange={handleChange} />
            <br /><br />
            <label htmlFor='surname'>Surname</label>
            <input id='surname' type="text" placeholder='surname' className='input' value={values.surname} onChange={handleChange} />
            <br /><br />
            <label htmlFor='gender'>Gender</label>
            <select id='gender' type="checkbox" value={values.gender} onChange={handleChange}>
              <option value="" label="Select gender" />
              <option value="Male" label="Male" />
              <option value="Female" label="Female" />
              <option value="Other" label="Other" />
            </select>
            <br /><br />
            <label htmlFor='username'>Username</label>
            <input id='username' type="text" placeholder='username' className='input' value={values.username} onChange={handleChange} />
            <br /><br />
            <label htmlFor='email'>Email</label>
            <input id='email' type="email" placeholder='email' className='input' value={values.email} onChange={handleChange} />
            <br /><br />
            <label htmlFor='password'>Password</label>
            <input id='password' type="password" placeholder='password' className='input' value={values.password} onChange={handleChange} />
            <br /><br />
            <label htmlFor='country'>Country</label>
            <input id='country' type="text" placeholder='country' className='input' value={values.country} onChange={handleChange} />
            <br /><br />
            <label htmlFor='city'>City</label>
            <input id='city' type="text" placeholder='city' className='input' value={values.city} onChange={handleChange} />
            <br /><br />
            <Button type="submit" disabled={!dirty || isSubmitting} className="btn btn-success">Submit</Button>
            </div>
          </form>
        )}

      </Formik>
      </div>
    </div>
  )
}

export default Signup
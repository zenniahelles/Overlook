import React from 'react'
import { useFormik } from 'formik'

const initialValues = {
    name: '',
    email: '',
    comments: '',
    select: '',
    radio: '',
    checkbox: '',
    lastname: '',
    phone: '',
    people:'',
    destination:''
}

const onSubmit = (values, onSubmitProps) => {
    // console.log('Form data', values)
    alert('Du har indsendt følgende information: ' + JSON.stringify(values, null, 2))
    onSubmitProps.resetForm()
}

const validate = values => {
    //values.name values.email values.channel

    let errors = {}
//if there is nothing in values.name, set arrows.name to required
    if(!values.name) {
        errors.name = 'Du skal udfylde dette felt!'
    }
    if(!values.lastname) {
        errors.lastname = 'Du skal udfylde dette felt!'
    }
    if(!values.email) {
        errors.email = 'Du skal udfylde dette felt!'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email format'
    }
    if(!values.phone) {
        errors.phone = 'Du skal udfylde dette felt!'
    }
    if(!values.comments) {
        errors.comments = 'Du skal udfylde dette felt!'
    }
    if(!values.destination) {
        errors.destination = 'Du skal vælge noget!'
    }
    if(!values.select) {
        errors.select = 'Du skal udfylde dette felt!'
    }
    if(!values.people) {
        errors.people = 'Vælg antal personer!'
    }
    if(!values.radio) {
        errors.radio = 'Vælg noget!'
    }
    if(!values.checkbox) {
        errors.checkbox = 'Vælg noget!'
    }
    return errors
}

function Form() {

    const formik = useFormik({
        initialValues,
        onSubmit,
        validate
    })

    // console.log('Form values', formik.values)

    return (
        <div>
            <form className="kontaktform" onSubmit={formik.handleSubmit}>
            <div className='form-control'>
                <label htmlFor='destination'>Destination/Hotel:</label>
                <select type='select' id='destination' name='destination' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.destination}>
                <option key='' value=''></option>
                <option value="Overlook Crown, Sverige">Overlook Crown, Sverige</option>
                <option value="Overlook Europa, Sverige">Overlook Europa, Sverige</option>
                <option value="Overlook Grand Central, Sverige">Overlook Grand Central, Sverige</option>
                <option value="Haymarket By Overlook, Sverige">Haymarket By Overlook, Sverige</option>
                <option value="Overlook Portalen, Sverige">Overlook Portalen, Sverige</option>
                <option value="Overlook Grand Marina, Finland">Overlook Grand Marina, Finland</option>
                <option value="Overlook Seurahuone Helsinki, Finland">Overlook Seurahuone Helsinki, Finland</option>
                <option value="Overlook Rauma, Finland">Overlook Rauma, Finland</option>
                <option value="Overlook Webers, Danmark">Overlook Webers, Danmark</option>
                <option value="Overlook Aalborg City, Danmark">Overlook Aalborg City, Danmark</option>
                <option value="Overlook Aalborg Øst, Danmark">Overlook Aalborg Øst, Danmark</option>
                <option value="Overlook Silkeborg, Danmark">Overlook Silkeborg, Danmark</option>
                <option value="Overlook The Mayor, Danmark">Overlook The Mayor, Danmark</option>
                <option value="Overlook Aarhus City, Danmark">Overlook Aarhus City, Danmark</option>
                <option value="Overlook Hafjell, Norge">Overlook Hafjell, Norge</option>
                <option value="Overlook Victoria, Norge">Overlook Victoria, Norge</option>
                <option value="Overlook Ishavshotel, Norge">Overlook Ishavshotel, Norge</option>
                <option value="Overlook Grand Tromsø, Norge">Overlook Grand Tromsø, Norge</option>
                <option value="Overlook Berlin Kurfurstendamm, Tyskland">Overlook Berlin Kurfurstendamm, Tyskland</option>
                <option value="Overlook Hamburg Emporio">Overlook Hamburg Emporio</option>
                <option value="Overlook Frankfurt Museumsufer">Overlook Frankfurt Museumsufer</option>
                <option value="Overlook Gdansk, Polen">Overlook Gdansk, Polen</option>
                <option value="Overlook Wroclaw, Polen">Overlook Wroclaw, Polen</option>
                <option value="Overlook Grand Hotel Reykjavik, Island">Overlook Grand Hotel Reykjavik, Island</option>
                <option value="Overlook Blue Lagoon, Island">Overlook Blue Lagoon, Island</option>
                </select>
                {formik.touched.destination && formik.errors.destination ? <div className='error'>{formik.errors.destination}</div> : null}
                </div>

                <div className='form-control'>
                <label htmlFor='select'>Værelsestype:</label>
                <select type='select' id='select' name='select' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.select}>
                <option key='' value=''></option>
                <option value="Standard Single">Standard Single</option>
                <option value="Standard">Standard</option>
                <option value="Economy">Economy</option>
                <option value="Superior">Superior</option>
                <option value="Superior Plus">Superior Plus</option>
                <option value="Junior Suite">Junior Suite</option>
                <option value="Presidential Suite">Presidential Suite</option>
                </select>
                {formik.touched.select && formik.errors.select ? <div className='error'>{formik.errors.select}</div> : null}
                </div>

                <div className='form-control'>
                <label htmlFor='select'>Antal Personer:</label>
                <select type='select' id='people' name='people' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.people}>
                <option key='' value=''></option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                </select>
                {formik.touched.people && formik.errors.people ? <div className='error'>{formik.errors.people}</div> : null}
                </div>

                <div className='form-control buttons radiobutton'>
                <label htmlFor='radio'>Prisklasse:</label>
                <fieldset onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.radio}>
                <input type='radio' id='radio1' name='radio' value='Normal pris'  /><span>Normal Pris</span><br/>
                <input type='radio' id='radio2' name='radio' value='Flex pris'  /><span>Flex Pris</span>
                </fieldset>{formik.touched.radio && formik.errors.radio ? <div className='error'>{formik.errors.radio}</div> : null}
                </div>

                <div className='form-control'>
                <label htmlFor='name'>Fornavn:</label>
                <input type='text' id='name' name='name' placeholder='Your name' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.name} />
                {formik.touched.name && formik.errors.name ? <div className='error'>{formik.errors.name}</div> : null}
                </div>

                <div className='form-control'>
                <label htmlFor='lastname'>Efternavn:</label>
                <input type='text' id='lastname' name='lastname' placeholder='Your name' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.lastname} />
                {formik.touched.lastname && formik.errors.lastname ? <div className='error'>{formik.errors.lastname}</div> : null}
                </div>

                <div className='form-control'>
                <label htmlFor='email'>E-mail:</label>
                <input type='email' id='email' name='email' placeholder='Your e-mail' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email} />
                {formik.touched.email && formik.errors.email ? <div className='error'>{formik.errors.email}</div> : null}    
                </div>

                <div className='form-control'>
                <label htmlFor='phone'>Telefonnummer:</label>
                <input type='text' id='phone' name='phone' placeholder='Your phone' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.phone} />
                {formik.touched.phone && formik.errors.phone ? <div className='error'>{formik.errors.phone}</div> : null}
                </div>

                <div className='form-control'>
                <label htmlFor='kommentar'>Eventuelle anmodninger eller kommentarer:</label>
                <textarea type='textarea' id='comments' name='comments' placeholder='Your comments here' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.comments} />
                {formik.touched.comments && formik.errors.comments ? <div className='error'>{formik.errors.comments}</div> : null}
                </div>

                <div className='form-control buttons checkbutton'>
                <fieldset onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.checkbox}>
                <input type='checkbox' id='checkbox1' name='checkbox' value='Check1'  /><span>Jeg accepterer hermed Overlooks betingelser (Sæt kryds)</span><br/>
                </fieldset>{formik.touched.checkbox && formik.errors.checkbox ? <div className='error'>{formik.errors.checkbox}</div> : null}
                </div>
<br/>
            <button type='submit'>Send reservation</button>
            </form>
        </div>
    )
}

export default Form

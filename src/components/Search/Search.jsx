import React from 'react'
import './Search.scss'
import { useFormik } from 'formik'
import CheckIn from './CheckIn'
import CheckOut from './CheckOut'

const initialValues = {
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
    if(!values.destination) {
        errors.destination = 'Du skal vælge noget!'
    }
    if(!values.people) {
        errors.people = 'Vælg antal personer!'
    }
    return errors
}

export default function Search(props) {

    const formik = useFormik({
        initialValues,
        onSubmit,
        validate
    })
    return (
        <div className="Search">
            <div className="SearchGrid">
            <div className="SearchLeft"><h3>Find dit værelse</h3><p>Hvor vil du hen og hvornår vil du se det?</p></div>
            <div className="SearchRight">
                
                <form className="searchform" onSubmit={formik.handleSubmit}>
                
                <div className='form-control'>
                <label htmlFor='destination'>Destination:</label>
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

                <div ClassName="form-control">
                <CheckIn id='checkin' name='checkin' />
                </div>

                <div ClassName="form-control">
                <CheckOut />
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

                <button className="submitbutton" type='submit'>Søg</button>
            </form>

                
                </div>
            </div>
        </div>
    )
}

import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import './Search.scss'

function CheckOut() {
const [selectedDate, setSelectedDate] = useState(null)
return (
    <div>
    <label>Check-out:</label>
        <DatePicker 
        selected={selectedDate} 
        onChange={date => setSelectedDate(date)} 
        dateFormat='dd/MM/yyyy'
        />
</div>
    )
}

export default CheckOut
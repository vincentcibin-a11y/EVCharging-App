import axios from 'axios'
import React, { useState } from 'react'

const AddBooking = () => {

    const [booking, setBooking] = useState({
        bookingId: "",
        ownerName: "",
        email: "",
        phone: "",
        vehicleRegistrationNumber: "",
        vehicleBrand: "",
        vehicleModel: "",
        batteryCapacity: "",
        connectorType: "",
        chargingDate: "",
        timeSlot: "",
        estimatedUnits: "",
        chargingBayNumber: ""
    })

    const inputHandler = (event) => {
        setBooking({ ...booking, [event.target.name]: event.target.value })
    }

    const readValues = () => {
        console.log(booking)

        axios.post("http://localhost:3000/addbooking", booking)
            .then((response) => {
                if (response.data.status === "success") {
                    alert("Booking Added Successfully")
                } else {
                    alert("Failed to Add Booking")
                }
            })
            .catch((error) => {
                console.log(error)
                alert("Something went wrong")
            })
    }

    return (
        <div>
            <div className="container">
                <div className="row g-3 mt-3">

                    <div className="col-12">
                        <h2 className="text-center">Add Vehicle Booking</h2>
                    </div>

                    <div className="col-md-6">
                        <label className="form-label">Booking ID</label>
                        <input type="text" className="form-control" name="bookingId" value={booking.bookingId} onChange={inputHandler} />
                    </div>

                    <div className="col-md-6">
                        <label className="form-label">Owner Name</label>
                        <input type="text" className="form-control" name="ownerName" value={booking.ownerName} onChange={inputHandler} />
                    </div>

                    <div className="col-md-6">
                        <label className="form-label">Email</label>
                        <input type="email" className="form-control" name="email" value={booking.email} onChange={inputHandler} />
                    </div>

                    <div className="col-md-6">
                        <label className="form-label">Phone</label>
                        <input type="text" className="form-control" name="phone" value={booking.phone} onChange={inputHandler} />
                    </div>

                    <div className="col-md-6">
                        <label className="form-label">Vehicle Registration Number</label>
                        <input type="text" className="form-control" name="vehicleRegistrationNumber" value={booking.vehicleRegistrationNumber} onChange={inputHandler} />
                    </div>

                    <div className="col-md-6">
                        <label className="form-label">Vehicle Brand</label>
                        <input type="text" className="form-control" name="vehicleBrand" value={booking.vehicleBrand} onChange={inputHandler} />
                    </div>

                    <div className="col-md-6">
                        <label className="form-label">Vehicle Model</label>
                        <input type="text" className="form-control" name="vehicleModel" value={booking.vehicleModel} onChange={inputHandler} />
                    </div>

                    <div className="col-md-6">
                        <label className="form-label">Battery Capacity (kWh)</label>
                        <input type="text" className="form-control" name="batteryCapacity" value={booking.batteryCapacity} onChange={inputHandler} />
                    </div>

                    <div className="col-md-6">
                        <label className="form-label">Connector Type</label>
                        <input type="text" className="form-control" name="connectorType" value={booking.connectorType} onChange={inputHandler} />
                    </div>

                    <div className="col-md-6">
                        <label className="form-label">Charging Date</label>
                        <input type="date" className="form-control" name="chargingDate" value={booking.chargingDate} onChange={inputHandler} />
                    </div>

                    <div className="col-md-6">
                        <label className="form-label">Time Slot</label>
                        <input type="text" className="form-control" name="timeSlot" value={booking.timeSlot} onChange={inputHandler} />
                    </div>

                    <div className="col-md-6">
                        <label className="form-label">Estimated Units (kWh)</label>
                        <input type="text" className="form-control" name="estimatedUnits" value={booking.estimatedUnits} onChange={inputHandler} />
                    </div>

                    <div className="col-md-6">
                        <label className="form-label">Charging Bay Number</label>
                        <input type="text" className="form-control" name="chargingBayNumber" value={booking.chargingBayNumber} onChange={inputHandler} />
                    </div>

                    <div className="col-12 text-center">
                        <button className="btn btn-success" onClick={readValues}>
                            Add Booking
                        </button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default AddBooking
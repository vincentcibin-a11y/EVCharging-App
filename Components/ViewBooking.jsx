import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ViewBooking = () => {

    const [bookingData, setBookingData] = useState([])
    const fetchData = () => {

        axios.post("http://localhost:3000/viewbooking", {})
            .then((response) => {

                setBookingData(response.data)

            })
            .catch((error) => {

                console.log(error)
                alert("Error fetching data")

            })

    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div>
            <div className="container mt-4">
                <h2 className="text-center mb-4">View All Vehicle Bookings</h2>

                <div className="table-responsive">
                    <table className="table table-bordered table-striped table-hover">
                        <thead className="table-dark">
                            <tr>
                                <th>Booking ID</th>
                                <th>Owner Name</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Vehicle Reg. No.</th>
                                <th>Brand</th>
                                <th>Model</th>
                                <th>Battery (kWh)</th>
                                <th>Connector</th>
                                <th>Charging Date</th>
                                <th>Time Slot</th>
                                <th>Estimated Units</th>
                                <th>Charging Bay</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                bookingData.map((value, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{value.bookingId}</td>
                                            <td>{value.ownerName}</td>
                                            <td>{value.email}</td>
                                            <td>{value.phone}</td>
                                            <td>{value.vehicleRegistrationNumber}</td>
                                            <td>{value.vehicleBrand}</td>
                                            <td>{value.vehicleModel}</td>
                                            <td>{value.batteryCapacity}</td>
                                            <td>{value.connectorType}</td>
                                            <td>{value.chargingDate}</td>
                                            <td>{value.timeSlot}</td>
                                            <td>{value.estimatedUnits}</td>
                                            <td>{value.chargingBayNumber}</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default ViewBooking
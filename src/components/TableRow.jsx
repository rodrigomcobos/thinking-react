import ModeButtons from './ModeButtons';
import DescriptionCell from './DescriptionCell';
import RateCell from './RateCell';
import HoursCell from './HoursCell';
import { useState } from 'react';
import axios from 'axios';
import formatCurrency from '../utils/formatCurrency';

function TableRow({ initialIsEditing, initialInvoiceData, deleteFunc }) {

    // const description = initialInvoiceData.description
    // const rate = initialInvoiceData.rate
    // const hours = initialInvoiceData.hours


    // const { description, rate, hours } = initialInvoiceData //destructured
    const [editMode, setEditMode] = useState(initialIsEditing)
    const [description, setDescription] = useState(initialInvoiceData.description)
    const [rate, setRate] = useState(initialInvoiceData.rate)
    const [hours, setHours] = useState(initialInvoiceData.hours)



    //Define functions to set editMode back and forth
    const changeEditMode = () => setEditMode(true) //function to set editMode to true
    const changeNoEditMode = () => {
        const bodyObj = {
            id: initialInvoiceData.id,
            description: description,
            rate: rate,
            hours: hours
        }

        axios.put('/api/editInvoice', bodyObj)
            .then((res) => {
                setDescription(res.data.updatedInvoice.description)
                setRate(res.data.updatedInvoice.rate)
                setHours(res.data.updatedInvoice.hours)

                setEditMode(false)
            })
        // .catch((err) => console.log(err))

    } //function to set editMode to false


    return (
        <tr>
            <ModeButtons
                isEditing={editMode}
                editClick={changeEditMode}
                saveClick={changeNoEditMode}
                deleteFunc={deleteFunc} />

            <DescriptionCell
                isEditing={editMode}
                value={description}
                onValueChange={setDescription} />

            <RateCell
                isEditing={editMode}
                value={formatCurrency(rate)}
                onValueChange={setRate} />

            <HoursCell
                isEditing={editMode}
                value={`${hours}/hr`}
                onValueChange={setHours} />

            <td>{formatCurrency(rate * hours)}</td>
        </tr>
    )
}

export default TableRow
import ModeButtons from './ModeButtons';
import DescriptionCell from './DescriptionCell';
import RateCell from './RateCell';
import HoursCell from './HoursCell';
import { useState } from 'react';

function TableRow({ initialIsEditing, initialInvoiceData }) {

    // const description = initialInvoiceData.description
    // const rate = initialInvoiceData.rate
    // const hours = initialInvoiceData.hours

    const { description, rate, hours } = initialInvoiceData //destructured
    const [editMode, setEditMode] = useState(initialIsEditing)

    //Define functions to set editMode back and forth
    const changeEditMode = () => setEditMode(true) //function to set editMode to true
    const changeNoEditMode = () => setEditMode(false) //function to set editMode to false


    return (
        <tr>
            <ModeButtons
                isEditing={editMode}
                editClick={changeEditMode}
                saveClick={changeNoEditMode} />

            <DescriptionCell
                isEditing={editMode}
                value={description} />

            <RateCell
                isEditing={editMode}
                value={rate} />

            <HoursCell
                isEditing={editMode}
                value={hours} />
        </tr>
    )
}

export default TableRow
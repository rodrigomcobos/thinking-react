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

    return (
        <tr>
            <ModeButtons isEditing={initialIsEditing} />
            <DescriptionCell isEditing={initialIsEditing} value={description} />
            <RateCell isEditing={initialIsEditing} value={rate} />
            <HoursCell isEditing={initialIsEditing} value={hours} />
        </tr>
    )
}

export default TableRow
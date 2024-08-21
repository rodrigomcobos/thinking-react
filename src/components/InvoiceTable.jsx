import './InvoiceTable.css';
import TableHeader from './TableHeader';
import TableRow from './TableRow';
import AddRowButton from './AddRowButton';
import { useState } from 'react';


const InvoiceTable = ({ initialData }) => {

    const [currentData, setCurrentData] = useState(initialData)

    const rows = currentData.map((InvoiceItem) => {
        return (
            <TableRow
                key={InvoiceItem.id}
                initialInvoiceData={InvoiceItem}
                initialIsEditing={false}
                deleteFunc={() => deleteRow(InvoiceItem.id)}
            />
        )
    })

    // in order to give our addRowButton the ability to add value to currentData, we'll need a function
    const addRow = () => {
        //create a new object to represent the new row
        const newRow = {
            id: currentData.length,
            description: 'Description',
            rate: '',
            hours: ''
        }
        //add the new row to currentData
        setCurrentData([...currentData, newRow])
    }

    //delete function
    const deleteRow = (id) => {
        const filteredData = currentData.filter((el) => el.id !== id)
        setCurrentData(filteredData)
    }


    return (
        <div>
            <table>
                <thead>
                    <TableHeader />
                </thead>

                <tbody>
                    {rows}
                </tbody>

                <tfoot>
                    <AddRowButton addClick={addRow} />
                </tfoot>
            </table>
        </div>

    )
}

export default InvoiceTable
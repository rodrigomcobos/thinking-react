import './InvoiceTable.css';
import TableHeader from './TableHeader';
import TableRow from './TableRow';
import AddRowButton from './AddRowButton';
import { useState, useEffect } from 'react';
import axios from 'axios';


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
    useEffect(() => {
        setCurrentData(initialData)
    }, [initialData])

    // in order to give our addRowButton the ability to add value to currentData, we'll need a function
    const addRow = () => {
        //create a new object to represent the new row
        const newRow = {
            description: 'Description Placeholder',
            rate: '1',
            hours: '1'
        }

        axios.post('/api/addInvoice', newRow)
            .then((res) => {
                setCurrentData([...currentData, res.data.newInvoice])
            })
    }

    //delete function
    const deleteRow = (id) => {
        // const filteredData = currentData.filter((el) => el.id !== id)
        // setCurrentData(filteredData)
        axios.delete(`/api/deleteInvoice/${id}`)
            .then((res) => {
                setCurrentData(res.data.invoices)
            })
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
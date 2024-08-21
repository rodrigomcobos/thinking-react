import './InvoiceTable.css';
import TableHeader from './TableHeader';
import TableRow from './TableRow';
import AddRowButton from './AddRowButton';

const InvoiceTable = ({ initialData }) => {

    const rows = initialData.map((InvoiceItem) => {
        return (
            <TableRow
                key={InvoiceItem.id}
                initialInvoiceData={InvoiceItem}
                initialIsEditing={false}
            />
        )
    })

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
                    <AddRowButton />
                </tfoot>
            </table>
        </div>

    )
}

export default InvoiceTable
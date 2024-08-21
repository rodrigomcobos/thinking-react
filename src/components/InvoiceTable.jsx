import './InvoiceTable.css';

import TableHeader from './TableHeader';
import TableRow from './TableRow';
import AddRowButton from './AddRowButton';

const InvoiceTable = () => {
    return (
        <div>
            <table>
                <thead>
                    <TableHeader />
                </thead>

                <tbody>
                    <TableRow initialIsEditing={false}
                        description={"Test description"}
                        rate={50}
                        hours={40}
                    />
                </tbody>

                <tfoot>
                    <AddRowButton />
                </tfoot>
            </table>
        </div>

    )
}

export default InvoiceTable
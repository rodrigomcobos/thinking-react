import './InvoiceTable.css';
import ModeButtons from './ModeButtons';
import DescriptionCell from './DescriptionCell';
import RateCell from './RateCell';
import HoursCell from './HoursCell';
import TableHeader from './TableHeader';
import TableRow from './TableRow';
import AddRowButton from './AddRowButton';

const InvoiceTable = () => {
    return (
        <div>
            <table>
                {/* <thead>

                </thead> */}

                <tbody>
                    <tr>
                        <ModeButtons isEditing={false} />
                        <DescriptionCell isEditing={false} value={'Web Developer'} />
                        <RateCell isEditing={false} value={50} />
                        <HoursCell isEditing={false} value={40} />
                    </tr>
                    <tr>
                        <ModeButtons isEditing={true} />
                        <DescriptionCell isEditing={true} value={'Zookeeper'} />
                        <RateCell isEditing={true} value={50} />
                        <HoursCell isEditing={true} value={40} />
                    </tr>
                </tbody>

                {/* <tfoot>

                </tfoot> */}
            </table>
        </div>

    )
}

export default InvoiceTable
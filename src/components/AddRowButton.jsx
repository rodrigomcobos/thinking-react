

function AddRowButton({ addClick }) {
    return (
        <tr>
            <td>
                {/* this stays empty */}
            </td>
            <td colSpan={4}>
                <button onClick={addClick}>Add Row</button>
            </td>
        </tr>
    )
}

export default AddRowButton
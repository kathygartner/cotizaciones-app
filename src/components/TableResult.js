const TableResult = (props) => {
    return(
        <table>
            <tbody className="table"></tbody>
            <tbody className="tableLoaded"></tbody>
            {props.info.map(value => (
                <tr>
                    <td><img src={value.image}/></td>
                    <td><p>{value.currency}</p></td>
                    <td><p>{value.value}</p></td>
                </tr>
            ))}
        </table>
    )
};

export default TableResult;
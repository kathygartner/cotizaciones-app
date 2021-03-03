const TableResult = (props) => {
    return(
        <table>
            <tbody className="table"></tbody>
            <tbody className="tableLoaded"></tbody>
            {props.info.map(valor => (
                <tr>
                    <td><img src={valor.imagen}/></td>
                    <td><p>{valor.moneda}</p></td>
                    <td><p>{valor.valor}</p></td>
                </tr>
            ))}
        </table>
    )
};

export default TableResult;
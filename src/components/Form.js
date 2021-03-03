const Form = (props) => {
    return(
        <>
            <div className="selector">
                <label className="selector__label" for="">Selecciona la moneda de referencia</label>
                <select className="selector__select" defaultValue={props.currency} onChange={props.handleMoney}>
                    <option value="CAD">Dólar canadiense</option>
                    <option value="GBP">Libra</option>
                    <option value="USD" selected>Dólar americano</option>
                    <option value="EUR">Euro</option>
                </select>
            </div>

            <div className="calendar">
                <label className="calendar__label" for="myDate">Ingresa la fecha de cotización</label>
                <input className="calendar__input" type="date" name="myDate" min="1999-01-01" max={props.dateToday()} defaultValue={props.date}  onChange={props.handleDate} />
            </div>
        </>
    )
};

export default Form;
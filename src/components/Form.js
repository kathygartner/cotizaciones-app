import { useState } from "react";

const Form = () => {

    const [currency, setCurrency] = useState('USD');
    const handleMoney = (e) => setCurrency(e.target.value);

    
    const formatNumber = (date) => {
        if (date < 10) {
            return '0' + date;
        } else {
            return date;
        }
    } 
    const dateToday = () => {
        const now = new Date();
        const today = `${now.getFullYear()}-${formatNumber(now.getMonth())}-${formatNumber(now.getDate())}`;
        return today;
    }

    const [date, setDate] = useState(dateToday());


    return(
        <>
            <div className="selector">
                <label className="selector__label" for="">Selecciona la moneda de referencia</label>
                <select className="selector__select" defaultValue={currency} onChange={handleMoney}>
                    <option value="CAD">Dólar canadiense</option>
                    <option value="GBP">Libra</option>
                    <option value="USD" selected>Dólar americano</option>
                    <option value="EUR">Euro</option>
                </select>
            </div>

            <div className="calendar">
                <label className="calendar__label" for="myDate">Ingresa la fecha de cotización</label>
                <input className="calendar__input" type="date" name="myDate" min="1999-01-01" max={dateToday()} defaultValue={date} />
            </div>
        </>
    )
};

export default Form;
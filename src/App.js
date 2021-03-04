import { useState, useEffect } from "react";
import Form from './components/Form';
import TableResult from './components/TableResult';
import ButtonSearch from './components/ButtonSearch';
import ButtonMore from './components/ButtonMore';
import './App.scss';

function App() {
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
  const handleDate = (e) => setDate(e.target.value);

  const [rates, setRates] = useState([]);

  const getResult = async () => {
    const valueCurrency = currency;
    const valueDate = date;
    const result = await fetch('https://api.exchangeratesapi.io/' + valueDate + '?base=' + valueCurrency).then(response => response.json());
    return result;
  }

  const cotizacionesInfo = (rates) => {
    return [
        {
            image: 'https://img.flaticon.com/icons/png/512/197/197430.png?size=1200x630f&pad=10,10,10,10&ext=png&bg=FFFFFFFF',
            currency: 'CAD',
            value: rates['CAD'],
        },
        {
            image: 'https://i.pinimg.com/originals/6e/d6/d5/6ed6d5f4ad65d31dd9a8547e09d9c0e3.jpg',
            currency: 'GBP',
            value: rates['GBP'],
        },
        {
            image: 'https://image.freepik.com/vector-gratis/original-simple-bandera-estados-unidos-america_100456-79.jpg',
            currency: 'USD',
            value: rates['USD'],
        },
        {
            image: 'https://farm2.static.flickr.com/1002/4729644300_fdd184e0a3.jpg',
            currency: 'EUR',
            value: rates['EUR'],
        }
    ]
}

  const buscarCotizacion = async () => {
    const result = await getResult();
    setRates(cotizacionesInfo(result.rates));
  }

  const loadMoreValues = (rates) => {
  return [
    {
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Brazil.svg/300px-Flag_of_Brazil.svg.png',
        currency: 'BRL',
        value: rates['BRL'],
    },
    {
        image: 'https://www.banderas-mundo.es/data/flags/w580/au.png',
        currency: 'AUD',
        value: rates['AUD'],
    },
    {
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Flag_of_New_Zealand.svg/1200px-Flag_of_New_Zealand.svg.png',
        currency: 'NZD',
        value: rates['NZD'],
    },
    {
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyfhDt5Qq_paIIwcOFE2kX_FlNMlcEow-9KQ&usqp=CAU',
        currency: 'MXN',
        value: rates['MXN'],
    }
  ]
}

const loadMore = async() => {
  const result = await getResult();
  setRates([...cotizacionesInfo(result.rates), ...loadMoreValues(result.rates)]);
}

useEffect( async() => {
    await buscarCotizacion();
  }, []);

  return (
    <div className="App">
        <div className="conversion">

          <div className="conversion-wrap">
            <h1 className="conversion-wrap__title">Histórico de cotizaciones</h1>

            <div className="conversion-wrap__content">

              <Form currency={currency} handleMoney={handleMoney} date={date} dateToday={dateToday} handleDate={handleDate}/>
              <ButtonSearch search={buscarCotizacion} />

              <TableResult info={rates} />
              <ButtonMore loadMore={loadMore}/>
            </div>
          </div>

          <div className="footer">
          </div>
        </div>
    </div>
  );
}

export default App;

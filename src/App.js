import './App.scss';
import Form from './components/Form';
import TableResult from './components/TableResult';
import ButtonSearch from './components/ButtonSearch';
import ButtonMore from './components/ButtonMore';

function App() {
  return (
    <div className="App">
      <body onload="cargaInicial()">

        <div className="conversion">

          <div className="conversion-wrap">
            <h1 className="conversion-wrap__title">Histórico de cotizaciones</h1>

            <div className="conversion-wrap__content">
              <form>
                <Form />
                <ButtonSearch search={() => console.log('hola')} />
              </form>

              <TableResult />
              <ButtonMore />
            </div>
          </div>

          <div className="footer">
          </div>
        </div>

        <script type="text/javascript" src="script.js"></script>
      </body>
    </div>
  );
}

export default App;

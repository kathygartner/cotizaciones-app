const ButtonSearch = (props) => {

    return(
        <div>
            <button className="btn btn--primary" onClick={props.search}>Buscar cotizaciones</button>
        </div>
    )
};

export default ButtonSearch;
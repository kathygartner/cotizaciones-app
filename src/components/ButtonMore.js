const ButtonMore = (props) => {
    return(
        <div>
            <button id="loadMore" className="btn btn--secondary" onClick={props.loadMore}>Ver más cotizaciones</button>
        </div>
    )
};

export default ButtonMore;
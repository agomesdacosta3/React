const State = () => {

 const nb = 0 ;


const augmenter = () => {
    const nb = document.querySelector(".badge").innerHTML
    document.querySelector(".badge").innerHTML = parseInt(nb) + 1
}

    return ( 
        <div className="col-3 mt-3">
            <button className="btn btn-warning" onClick={augmenter}>Augmenter</button>
            <span className="badge bg-primary m-2">{nb}</span>
        </div>
     );
}
 
export default State;
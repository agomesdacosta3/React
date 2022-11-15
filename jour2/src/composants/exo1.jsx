const Exo1 = () => {
    const articles = [
        {id : 1 , titre : "article 1", publie : true },
        {id : 2 , titre : "article 2", publie : false },
        {id : 3 , titre : "article 3", publie : false },
        {id : 4 , titre : "article 4", publie : true },
    ] 
    return ( 
        <div>
            <h1>Exo 1</h1>
            <ul>
                {articles[0].publie && <li> { articles[0].titre } </li>}
                {articles[1].publie && <li> { articles[1].titre } </li>}
                {articles[2].publie && <li> { articles[2].titre } </li>}
                {articles[3].publie && <li> { articles[3].titre } </li>}
            </ul>
        </div>
        
     );
}
 
export default Exo1;
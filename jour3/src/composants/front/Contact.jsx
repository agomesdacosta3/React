import { useContext } from "react"
import { PanierContext } from "../../contexts/UsePanier";

const Contact = () => {
    const {panier , ajouterPanier} = useContext(PanierContext)

    return ( <div>
        Page contact
        {
            panier.map((produit , index) => {
                return <div key={index}>{JSON.stringify(produit)}</div>
            })
        }
        <button onClick={ () => { ajouterPanier({id : 3 , prix : 40}) }}>ajouter</button>
    </div> );
}
 
export default Contact;
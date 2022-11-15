export const BoucleCondition = () => {
    const etudiants = [
        {id : 1 , nom : "Alain" , isStagiaire : true },
        {id : 1 , nom : "Benoit" , isStagiaire : false },
        {id : 1 , nom : "Céline" , isStagiaire : true },
        {id : 1 , nom : "Damien" , isStagiaire : true },
        
    ]
    return ( <div>
        <h1>Première manière</h1>
        <ul>
            <li>{ etudiants[0].nom }</li>
            <li>{ etudiants[1].nom }</li>
            <li>{ etudiants[2].nom }</li>
            <li>{ etudiants[3].nom }</li>
        </ul>
        <h1>Deuxième manière</h1>
        <ul>
            { etudiants.map(function(etudiant, index){
                return <li key = {index}> {etudiant.nom}</li>
            }
            )}
        </ul>
        <h1>Trosième manière</h1>
        <ul>
            { etudiants.map ( (etudiant , index) => <li key = {index}> { etudiant.nom } </li> ) }
        </ul>

        <h2>Condition</h2>
        {etudiants[0].isStagiaire && <p> { etudiants[0].nom } </p>}
        {etudiants[1].isStagiaire && <p> { etudiants[0].nom } </p>}

        { (etudiants[1].isStagiaire) ?
            <p> { etudiants[1].nom } </p> :
            <p> { etudiants[1].nom } n'est pas un stagiaire </p>
        }

        <h2>boucle et Condition</h2>
        {etudiants.map((etudiant, index) => etudiant.isStagiaire ? 
            <li key = {index}>{etudiant.nom}</li> :
            null
        )}
    </div> );
}
 
// export default BoucleCondition;
import moment from 'moment' ;

import {useState} from "react" ;

const Calendrier = () => {

    const [currentDate, setDate] = useState ({
        day : parseInt(moment().format("DD")),
        month : parseInt(moment().format("MM")),
        year : parseInt(moment().format("YYYY"))
    }) 

    const setPreviousMonth = () => {

        if (currentDate.month === 1) {
            setDate({month : 12, year : currentDate.year - 1 })
        } else {
            setDate({month : currentDate.month - 1, year : currentDate.year})
        }
    }
    
    const setNextMonth = () => {

        if (currentDate.month === 12) {
            setDate({month : 1, year : currentDate.year + 1})
        } else {
            setDate({month : currentDate.month + 1, year : currentDate.year})
        }

    }

    const setPreviousYear = () => {
        setDate({month : currentDate.month, year : currentDate.year - 1})
    }
        
    const setNextYear = () => {
        setDate({month : currentDate.month, year : currentDate.year + 1})
    }

    function convertMonth(monthNumber) {

        switch(monthNumber){
            
           case 1 : 
               return "Janvier";
           case 2 : 
               return "Février";
           case 3 : 
               return "Mars";
           case 4 : 
               return "April";
           case 5 : 
               return "Mai";
           case 6 :         
               return "Juin";
           case 7 : 
               return "Juillet";
           case 8 : 
               return "Août";
           case 9 : 
               return "Septembre";
           case 10 : 
               return "Octobre";
           case 11 : 
               return "Novembre";
           case 12 : 
               return "Décembre";
           default : 
               return "Erreur lors de la détermination du mois" ;
        }

    }

    return (
        <>
            <h1>Bienvenue dans votre Calendar</h1>

            <p>Marquez vos rendez-vous en cliquant sur la date qui vous intéresse</p>
            
            <table>
                <thead>

                    <tr>
                        <th> <button onClick={setPreviousMonth}>Précédent</button> </th>
                        <th> {convertMonth(currentDate.month)}</th>
                        <th> <button onClick={setNextMonth}>Suivant</button> </th>
                    </tr>

                    <tr>
                        <th> <button onClick={setPreviousYear}>Précédent</button> </th>
                        <th> {currentDate.year}</th>
                        <th> <button onClick={setNextYear}>Suivant</button> </th>
                    </tr>

                    <tr>
                        <th>Lundi</th>
                        <th>Mardi</th>
                        <th>Mercredi</th>
                        <th>Jeudi</th>
                        <th>Vendredi</th>
                        <th>Samemi</th>
                        <th>Dimanche</th>
                    </tr>
                    
                </thead>
                <tbody>
                
                
                </tbody>
            </table>
        </>
     );
}
 
export default Calendrier;
import moment from 'moment' ;

import {useState} from "react" ;

const Calendrier = () => {

    var lastDayNumber = 0 ;

    const [currentDate, setCurrentDate] = useState ({
        day : parseInt(moment().format("DD")),
        month : parseInt(moment().format("MM")),
        year : parseInt(moment().format("YYYY"))
    }) 

    const numDayWeek = [1,2,3,4,5,6,7]

    const regularWeeks = [1,2,3,4,5]

    const fillWeeks = () => {

        const firstDayMonth = 
        {day : 1,
         month : currentDate.month, // 3
         year : currentDate.year, // 2000
         dayName : moment().date(1).month(currentDate.month -1).year(currentDate.year).format("dddd") } // Monday
         
         console.log("dayCurrent is " + currentDate.day)
         console.log("monthCurrent is " + currentDate.month)
         console.log("yearCurrent is " + currentDate.year)

         console.log("day is " + firstDayMonth.day)
         console.log("month is " + firstDayMonth.month)
         console.log("year is " + firstDayMonth.year)
         console.log("DayName is " + firstDayMonth.dayName)

        if (firstDayMonth.dayName === "Monday" ) {
            lastDayNumber = 7
            return (
                <>  
                    <tr>
                        <td><button onClick={""}>1</button></td>
                        <td><button onClick={""}>2</button></td>
                        <td><button onClick={""}>3</button></td>
                        <td><button onClick={""}>4</button></td>
                        <td><button onClick={""}>5</button></td>
                        <td><button onClick={""}>6</button></td>
                        <td><button onClick={""}>7</button></td>
                    </tr>

                    { regularWeeks.map ( (regularWeek , index) => 
                        <tr key={index}>
                            
                            { numDayWeek.map ( (daysNum , index) => getMaxMonth(currentDate.month) > lastDayNumber ?
                            <td key={index}>
                                <button onClick={""}>{lastDayNumber = lastDayNumber + 1}</button>
                            </td> :
                            null
                            )}

                        </tr> 
                    )}
                </>
            )
        } else if (firstDayMonth.dayName === "Tuesday" ) {
            lastDayNumber = 6
            return (
                <>
                    <tr>
                        <td></td>
                        <td><button onClick={""}>1</button></td>
                        <td><button onClick={""}>2</button></td>
                        <td><button onClick={""}>3</button></td>
                        <td><button onClick={""}>4</button></td>
                        <td><button onClick={""}>5</button></td>
                        <td><button onClick={""}>6</button></td>
                    </tr>
                    { regularWeeks.map ( (regularWeek , index) => 
                        <tr key={index}>
                            
                            { numDayWeek.map ( (daysNum , index) => getMaxMonth(currentDate.month) > lastDayNumber ?
                            <td key={index}>
                                <button onClick={""}>{lastDayNumber = lastDayNumber + 1}</button>
                            </td> :
                            null
                            )}

                        </tr> 
                    )}
                </>
            )
                    
        } else if (firstDayMonth.dayName === "Wednesday" ) {
            lastDayNumber = 5
            return (
                <>  
                    <tr>
                        <td></td>
                        <td></td>
                        <td><button onClick={""}>1</button></td>
                        <td><button onClick={""}>2</button></td>
                        <td><button onClick={""}>3</button></td>
                        <td><button onClick={""}>4</button></td>
                        <td><button onClick={""}>5</button></td>
                        
                    </tr>

                    { regularWeeks.map ( (regularWeek , index) => 
                        <tr key={index}>
                            
                            { numDayWeek.map ( (daysNum , index) => getMaxMonth(currentDate.month) > lastDayNumber ?
                            <td key={index}>
                                <button onClick={""}>{lastDayNumber = lastDayNumber + 1}</button>
                            </td> :
                            null
                            )}

                        </tr> 
                    )}
                </>
            )
        } else if (firstDayMonth.dayName === "Thursday" ) {
            lastDayNumber = 4
            return (
                <>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td><button onClick={""}>1</button></td>
                        <td><button onClick={""}>2</button></td>
                        <td><button onClick={""}>3</button></td>
                        <td><button onClick={""}>4</button></td>
                    </tr>
                    { regularWeeks.map ( (regularWeek , index) => 
                        <tr key={index}>
                            
                            { numDayWeek.map ( (daysNum , index) => getMaxMonth(currentDate.month) > lastDayNumber ?
                            <td key={index}>
                                <button onClick={""}>{lastDayNumber = lastDayNumber + 1}</button>
                            </td> :
                            null
                            )}

                        </tr> 
                    )}
                </>
            )

        } else if (firstDayMonth.dayName === "Friday" ) {
            lastDayNumber = 3
            return (
                <>  
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td><button onClick={""}>1</button></td>
                        <td><button onClick={""}>2</button></td>
                        <td><button onClick={""}>3</button></td>
                        
                    </tr>

                    { regularWeeks.map ( (regularWeek , index) => 
                        <tr key={index}>
                            
                            { numDayWeek.map ( (daysNum , index) => getMaxMonth(currentDate.month) > lastDayNumber ?
                            <td key={index}>
                                <button onClick={""}>{lastDayNumber = lastDayNumber + 1}</button>
                            </td> :
                            null
                            )}

                        </tr> 
                    )}
                </>
            )
        } else if (firstDayMonth.dayName === "Saturday" ) {
            lastDayNumber = 2
            return (
                <>  
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td><button onClick={""}>1</button></td>
                        <td><button onClick={""}>2</button></td>
                        
                    </tr>

                    { regularWeeks.map ( (regularWeek , index) => 
                        <tr key={index}>
                            
                            { numDayWeek.map ( (daysNum , index) => getMaxMonth(currentDate.month) > lastDayNumber ?
                            <td key={index}>
                                <button onClick={""}>{lastDayNumber = lastDayNumber + 1}</button>
                            </td> :
                            null
                            )}

                        </tr> 
                    )}
                </>
            )
        } else if (firstDayMonth.dayName === "Sunday" ) {
            lastDayNumber = 1
            return (
                <>  
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td><button onClick={""}>1</button></td>
                        
                    </tr>

                    { regularWeeks.map ( (regularWeek , index) => 
                        <tr key={index}>
                            
                            { numDayWeek.map ( (daysNum , index) => getMaxMonth(currentDate.month) > lastDayNumber ?
                            <td key={index}>
                                <button onClick={""}>{lastDayNumber = lastDayNumber + 1}</button>
                            </td> :
                            null
                            )}

                        </tr> 
                    )}
                </>
            )
        } else {
            return (
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>)
        }      
    }

    const getMaxMonth = monthNumber => {

        switch(monthNumber){
            case 1 : 
                return 31
            case 2 : 
                if (currentDate.year % 4 === 0) {
                    return 29
                } else {
                    return 28
                }
            case 3 : 
                return 31
            case 4 : 
                return 30
            case 5 : 
                return 31
            case 6 :         
                return 30
            case 7 : 
                return 31;
            case 8 : 
                return 31
            case 9 : 
                return 30
            case 10 : 
                return 31
            case 11 : 
            console.log("Novenmbre choisi donc retourne 30")
                return 30
            case 12 : 
                return 31
            default : 
                return "Erreur lors de la détermination du max du mois" ;
         }
    }

    const setPreviousMonth = () => {

        if (currentDate.month === 1) {
            setCurrentDate({day : currentDate.day, month : 12, year : currentDate.year - 1 }) 
        } else {
            setCurrentDate({day : currentDate.day, month : currentDate.month - 1, year : currentDate.year})
        }
    }
    
    const setNextMonth = () => {

        if (currentDate.month === 12) {
            setCurrentDate({day : currentDate.day, month : 1, year : currentDate.year + 1})
            generateCalendar()
            
        } else {
            setCurrentDate({day : currentDate.day, month : currentDate.month + 1, year : currentDate.year})
            generateCalendar()
           
        }

    }

    const setPreviousYear = () => {
        setCurrentDate({day : currentDate.day, month : currentDate.month, year : currentDate.year - 1})
    }
        
    const setNextYear = () => {
        setCurrentDate({day : currentDate.day, month : currentDate.month, year : currentDate.year + 1})
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

    function generateCalendar() {
        return (
            <table className='Calendar'>
                <thead>
                    <tr>
                        <td> <button onClick={setPreviousMonth}>Précédent</button> </td>
                        <td> {convertMonth(currentDate.month)}</td>
                        <td> <button onClick={setNextMonth}>Suivant</button> </td>
                    </tr>

                    <tr>
                        <td> <button onClick={setPreviousYear}>Précédent</button> </td>
                        <td> {currentDate.year}</td>
                        <td> <button onClick={setNextYear}>Suivant</button> </td>
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
                    {fillWeeks()}
                </tbody>

            </table>
        );
    }

    return (
        <>
            <h1>Bienvenue dans votre Calendar</h1>

            <p>Marquez vos rendez-vous en cliquant sur la date qui vous intéresse</p>

            {generateCalendar()}
            
        </>
     );
}
 
export default Calendrier;
//npm install moment --save

import moment from 'moment' ; 

import "bootstrap/dist/css/bootstrap.min.css";

import {useState, useRef} from "react" ;

const Calendrier = () => {

    var lastDayNumber = 0 ; // compteur utilisé pour remplir chaque jour du mois sur le calendrier

    /*Récuperation des champs à remplir dans le formulaire de prise de rendez-vous*/

    const meetingTitleRef = useRef()
    const meetingCommentRef= useRef()
    const meetingDateRef = useRef()

    var lastMeetingId = 0 ;

    const [currentDate, setCurrentDate] = useState ({
        day : parseInt(moment().format("DD")),
        month : parseInt(moment().format("MM")),
        year : parseInt(moment().format("YYYY"))
    }) ;

    const meetings = [] // tableau contenant tous les rendez-vous enrengistrés dans le localStorage

    /* Dans fillWeeks remplit la 1ère semaine en prenant compte de bien placer le 1er jour
        puis on remplit les autres jours du mois sur les autres semaines */

    const fillWeeks = () => {

        const numDayWeek = [1,2,3,4,5,6,7] ;
        const regularWeeks = [1,2,3,4,5] ;

        const firstDayMonth = 
        {day : 1,
         month : currentDate.month, // 3
         year : currentDate.year, // 2000
         dayName : moment().date(1).month(currentDate.month - 1).year(currentDate.year).format("dddd") } // Monday

        if (firstDayMonth.dayName === "Monday" ) {

            setLastDayNumber(7)

            return (
                <>  
                    <tr>
                        <td>
                            {(1 === currentDate.day) &&
                                 (parseInt(moment().format("MM")) === currentDate.month) && 
                                 (parseInt(moment().format("YYYY")) === currentDate.year)
                                 
                                ?<button className="currentDay" id= "1" value= "1" onClick={searchMeeting}>1</button>
                                :<button id= "1" value= "1" onClick={searchMeeting}>1</button>
                            }
                        </td>

                        <td>
                            {(2 === currentDate.day) &&
                                 (parseInt(moment().format("MM")) === currentDate.month) && 
                                 (parseInt(moment().format("YYYY")) === currentDate.year)
                                 
                                ?<button className="currentDay" id= "2" value= "2" onClick={searchMeeting}>2</button>
                                :<button id= "2" value= "2" onClick={searchMeeting}>2</button>
                            }
                        </td>

                        <td>
                            {(3 === currentDate.day) &&
                                 (parseInt(moment().format("MM")) === currentDate.month) && 
                                 (parseInt(moment().format("YYYY")) === currentDate.year)
                                 
                                ?<button className="currentDay" id= "3" value= "3" onClick={searchMeeting}>3</button>
                                :<button id= "3" value= "3" onClick={searchMeeting}>3</button>
                            }
                        </td>
                        
                        <td>
                            {(4 === currentDate.day) &&
                                 (parseInt(moment().format("MM")) === currentDate.month) && 
                                 (parseInt(moment().format("YYYY")) === currentDate.year)
                                 
                                ?<button className="currentDay" id= "4" value= "4" onClick={searchMeeting}>4</button>
                                :<button id= "4" value= "4" onClick={searchMeeting}>4</button>
                            }
                        </td>
                        
                        <td>
                            {(5 === currentDate.day) &&
                                 (parseInt(moment().format("MM")) === currentDate.month) && 
                                 (parseInt(moment().format("YYYY")) === currentDate.year)
                                 
                                ?<button className="currentDay" id= "5" value= "5" onClick={searchMeeting}>5</button>
                                :<button id= "5" value= "5" onClick={searchMeeting}>5</button>
                            }
                        </td>
                        
                        <td>
                            {(6 === currentDate.day) &&
                                 (parseInt(moment().format("MM")) === currentDate.month) && 
                                 (parseInt(moment().format("YYYY")) === currentDate.year)
                                 
                                ?<button className="currentDay" id= "6" value= "6" onClick={searchMeeting}>6</button>
                                :<button id= "6" value= "6" onClick={searchMeeting}>6</button>
                            }
                        </td>
                        
                        <td>
                            {(7 === currentDate.day) &&
                                 (parseInt(moment().format("MM")) === currentDate.month) && 
                                 (parseInt(moment().format("YYYY")) === currentDate.year)
                                 
                                ?<button className="currentDay" id= "7" value= "7" onClick={searchMeeting}>7</button>
                                :<button id= "7" value= "7" onClick={searchMeeting}>7</button>
                            }
                        </td>
                        

                    </tr>

                    { regularWeeks.map ( (regularWeek , index) => 

                        <tr key={index}>

                            { numDayWeek.map ( (daysNum , index) => getMaxMonth(currentDate.month) > lastDayNumber ?
                            <td key={index}> 
                            {setLastDayNumber(lastDayNumber+1)}
                                {(lastDayNumber === currentDate.day) &&
                                 (parseInt(moment().format("MM")) === currentDate.month) && 
                                 (parseInt(moment().format("YYYY")) === currentDate.year)
                                 
                                ?<button className="currentDay" id= {(lastDayNumber)} value= {(lastDayNumber)} onClick={searchMeeting}>{lastDayNumber}</button>
                                :<button id= {(lastDayNumber)} value= {(lastDayNumber)} onClick={searchMeeting}>{lastDayNumber}</button>
                                }
                            </td> :
                            null
                            )}

                        </tr> 
                    )}
                </>
            )
        } else if (firstDayMonth.dayName === "Tuesday" ) {

            setLastDayNumber(6)

            return (
                <>
                    <tr>
                        <td></td>

                        <td>
                            {(1 === currentDate.day) &&
                                 (parseInt(moment().format("MM")) === currentDate.month) && 
                                 (parseInt(moment().format("YYYY")) === currentDate.year)
                                 
                                ?<button className="currentDay" id= "1" value= "1" onClick={searchMeeting}>1</button>
                                :<button id= "1" value= "1" onClick={searchMeeting}>1</button>
                            }
                        </td>

                        <td>
                            {(2 === currentDate.day) &&
                                 (parseInt(moment().format("MM")) === currentDate.month) && 
                                 (parseInt(moment().format("YYYY")) === currentDate.year)
                                 
                                ?<button className="currentDay" id= "2" value= "2" onClick={searchMeeting}>2</button>
                                :<button id= "2" value= "2" onClick={searchMeeting}>2</button>
                            }
                        </td>

                        <td>
                            {(3 === currentDate.day) &&
                                 (parseInt(moment().format("MM")) === currentDate.month) && 
                                 (parseInt(moment().format("YYYY")) === currentDate.year)
                                 
                                ?<button className="currentDay" id= "3" value= "3" onClick={searchMeeting}>3</button>
                                :<button id= "3" value= "3" onClick={searchMeeting}>3</button>
                            }
                        </td>
                        
                        <td>
                            {(4 === currentDate.day) &&
                                 (parseInt(moment().format("MM")) === currentDate.month) && 
                                 (parseInt(moment().format("YYYY")) === currentDate.year)
                                 
                                ?<button className="currentDay" id= "4" value= "4" onClick={searchMeeting}>4</button>
                                :<button id= "4" value= "4" onClick={searchMeeting}>4</button>
                            }
                        </td>
                        
                        <td>
                            {(5 === currentDate.day) &&
                                 (parseInt(moment().format("MM")) === currentDate.month) && 
                                 (parseInt(moment().format("YYYY")) === currentDate.year)
                                 
                                ?<button className="currentDay" id= "5" value= "5" onClick={searchMeeting}>5</button>
                                :<button id= "5" value= "5" onClick={searchMeeting}>5</button>
                            }
                        </td>
                        
                        <td>
                            {(6 === currentDate.day) &&
                                 (parseInt(moment().format("MM")) === currentDate.month) && 
                                 (parseInt(moment().format("YYYY")) === currentDate.year)
                                 
                                ?<button className="currentDay" id= "6" value= "6" onClick={searchMeeting}>6</button>
                                :<button id= "6" value= "6" onClick={searchMeeting}>6</button>
                            }
                        </td>

                    </tr>
                    { regularWeeks.map ( (regularWeek , index) => 

                        <tr key={index}>

                            { numDayWeek.map ( (daysNum , index) => getMaxMonth(currentDate.month) > lastDayNumber ?
                            <td key={index}> 
                            {setLastDayNumber(lastDayNumber+1)}
                                {(lastDayNumber === currentDate.day) &&
                                 (parseInt(moment().format("MM")) === currentDate.month) && 
                                 (parseInt(moment().format("YYYY")) === currentDate.year)
                                ?<button className="currentDay" id= {(lastDayNumber)} value= {(lastDayNumber)} onClick={searchMeeting}>{lastDayNumber}</button>
                                :<button id= {(lastDayNumber)} value= {(lastDayNumber)} onClick={searchMeeting}>{lastDayNumber}</button>
                                }
                            </td> :
                            null
                            )}

                        </tr> 
                    )}
                </>
            )
                    
        } else if (firstDayMonth.dayName === "Wednesday" ) {

            setLastDayNumber(5)

            return (
                <>  
                    <tr>
                        <td></td>
                        <td></td>
                        <td>
                            {(1 === currentDate.day) &&
                                 (parseInt(moment().format("MM")) === currentDate.month) && 
                                 (parseInt(moment().format("YYYY")) === currentDate.year)
                                 
                                ?<button className="currentDay" id= "1" value= "1" onClick={searchMeeting}>1</button>
                                :<button id= "1" value= "1" onClick={searchMeeting}>1</button>
                            }
                        </td>

                        <td>
                            {(2 === currentDate.day) &&
                                 (parseInt(moment().format("MM")) === currentDate.month) && 
                                 (parseInt(moment().format("YYYY")) === currentDate.year)
                                 
                                ?<button className="currentDay" id= "2" value= "2" onClick={searchMeeting}>2</button>
                                :<button id= "2" value= "2" onClick={searchMeeting}>2</button>
                            }
                        </td>

                        <td>
                            {(3 === currentDate.day) &&
                                 (parseInt(moment().format("MM")) === currentDate.month) && 
                                 (parseInt(moment().format("YYYY")) === currentDate.year)
                                 
                                ?<button className="currentDay" id= "3" value= "3" onClick={searchMeeting}>3</button>
                                :<button id= "3" value= "3" onClick={searchMeeting}>3</button>
                            }
                        </td>
                        
                        <td>
                            {(4 === currentDate.day) &&
                                 (parseInt(moment().format("MM")) === currentDate.month) && 
                                 (parseInt(moment().format("YYYY")) === currentDate.year)
                                 
                                ?<button className="currentDay" id= "4" value= "4" onClick={searchMeeting}>4</button>
                                :<button id= "4" value= "4" onClick={searchMeeting}>4</button>
                            }
                        </td>
                        
                        <td>
                            {(5 === currentDate.day) &&
                                 (parseInt(moment().format("MM")) === currentDate.month) && 
                                 (parseInt(moment().format("YYYY")) === currentDate.year)
                                 
                                ?<button className="currentDay" id= "5" value= "5" onClick={searchMeeting}>5</button>
                                :<button id= "5" value= "5" onClick={searchMeeting}>5</button>
                            }
                        </td>
                    </tr>

                    { regularWeeks.map ( (regularWeek , index) => 

                        <tr key={index}>

                            { numDayWeek.map ( (daysNum , index) => getMaxMonth(currentDate.month) > lastDayNumber ?
                            <td key={index}> 
                            {setLastDayNumber(lastDayNumber+1)}
                                {(lastDayNumber === currentDate.day) &&
                                 (parseInt(moment().format("MM")) === currentDate.month) && 
                                 (parseInt(moment().format("YYYY")) === currentDate.year)
                                ?<button className="currentDay" id= {(lastDayNumber)} value= {(lastDayNumber)} onClick={searchMeeting}>{lastDayNumber}</button>
                                :<button id= {(lastDayNumber)} value= {(lastDayNumber)} onClick={searchMeeting}>{lastDayNumber}</button>
                                }
                            </td> :
                            null
                            )}

                        </tr> 
                    )}
                </>
            )
        } else if (firstDayMonth.dayName === "Thursday" ) {
            
            setLastDayNumber(4)

            return (
                <>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>
                            {(1 === currentDate.day) &&
                                 (parseInt(moment().format("MM")) === currentDate.month) && 
                                 (parseInt(moment().format("YYYY")) === currentDate.year)
                                 
                                ?<button className="currentDay" id= "1" value= "1" onClick={searchMeeting}>1</button>
                                :<button id= "1" value= "1" onClick={searchMeeting}>1</button>
                            }
                        </td>

                        <td>
                            {(2 === currentDate.day) &&
                                 (parseInt(moment().format("MM")) === currentDate.month) && 
                                 (parseInt(moment().format("YYYY")) === currentDate.year)
                                 
                                ?<button className="currentDay" id= "2" value= "2" onClick={searchMeeting}>2</button>
                                :<button id= "2" value= "2" onClick={searchMeeting}>2</button>
                            }
                        </td>

                        <td>
                            {(3 === currentDate.day) &&
                                 (parseInt(moment().format("MM")) === currentDate.month) && 
                                 (parseInt(moment().format("YYYY")) === currentDate.year)
                                 
                                ?<button className="currentDay" id= "3" value= "3" onClick={searchMeeting}>3</button>
                                :<button id= "3" value= "3" onClick={searchMeeting}>3</button>
                            }
                        </td>
                        
                        <td>
                            {(4 === currentDate.day) &&
                                 (parseInt(moment().format("MM")) === currentDate.month) && 
                                 (parseInt(moment().format("YYYY")) === currentDate.year)
                                 
                                ?<button className="currentDay" id= "4" value= "4" onClick={searchMeeting}>4</button>
                                :<button id= "4" value= "4" onClick={searchMeeting}>4</button>
                            }
                        </td>
                    </tr>

                    { regularWeeks.map ( (regularWeek , index) => 

                        <tr key={index}>

                            { numDayWeek.map ( (daysNum , index) => getMaxMonth(currentDate.month) > lastDayNumber ?
                            <td key={index}> 
                            {setLastDayNumber(lastDayNumber+1)}
                                {(lastDayNumber === currentDate.day) &&
                                 (parseInt(moment().format("MM")) === currentDate.month) && 
                                 (parseInt(moment().format("YYYY")) === currentDate.year)
                                ?<button className="currentDay" id= {(lastDayNumber)} value= {(lastDayNumber)} onClick={searchMeeting}>{lastDayNumber}</button>
                                :<button id= {(lastDayNumber)} value= {(lastDayNumber)} onClick={searchMeeting}>{lastDayNumber}</button>
                                }
                            </td> :
                            null
                            )}

                        </tr> 
                    )}
                </>
            )

        } else if (firstDayMonth.dayName === "Friday" ) {

            setLastDayNumber(3)

            return (
                <>  
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>
                            {(1 === currentDate.day) &&
                                 (parseInt(moment().format("MM")) === currentDate.month) && 
                                 (parseInt(moment().format("YYYY")) === currentDate.year)
                                 
                                ?<button className="currentDay" id= "1" value= "1" onClick={searchMeeting}>1</button>
                                :<button id= "1" value= "1" onClick={searchMeeting}>1</button>
                            }
                        </td>

                        <td>
                            {(2 === currentDate.day) &&
                                 (parseInt(moment().format("MM")) === currentDate.month) && 
                                 (parseInt(moment().format("YYYY")) === currentDate.year)
                                 
                                ?<button className="currentDay" id= "2" value= "2" onClick={searchMeeting}>2</button>
                                :<button id= "2" value= "2" onClick={searchMeeting}>2</button>
                            }
                        </td>

                        <td>
                            {(3 === currentDate.day) &&
                                 (parseInt(moment().format("MM")) === currentDate.month) && 
                                 (parseInt(moment().format("YYYY")) === currentDate.year)
                                 
                                ?<button className="currentDay" id= "3" value= "3" onClick={searchMeeting}>3</button>
                                :<button id= "3" value= "3" onClick={searchMeeting}>3</button>
                            }
                        </td>
                        
                    </tr>

                    { regularWeeks.map ( (regularWeek , index) => 

                        <tr key={index}>

                            { numDayWeek.map ( (daysNum , index) => getMaxMonth(currentDate.month) > lastDayNumber ?
                            <td key={index}> 
                            {setLastDayNumber(lastDayNumber+1)}
                                {(lastDayNumber === currentDate.day) &&
                                 (parseInt(moment().format("MM")) === currentDate.month) && 
                                 (parseInt(moment().format("YYYY")) === currentDate.year)
                                ?<button className="currentDay" id= {(lastDayNumber)} value= {(lastDayNumber)} onClick={searchMeeting}>{lastDayNumber}</button>
                                :<button id= {(lastDayNumber)} value= {(lastDayNumber)} onClick={searchMeeting}>{lastDayNumber}</button>
                                }
                            </td> :
                            null
                            )}

                        </tr> 
                    )}
                </>
            )
        } else if (firstDayMonth.dayName === "Saturday" ) {
            
            setLastDayNumber(2)

            return (
                <>  
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>
                            {(1 === currentDate.day) &&
                                 (parseInt(moment().format("MM")) === currentDate.month) && 
                                 (parseInt(moment().format("YYYY")) === currentDate.year)
                                 
                                ?<button className="currentDay" id= "1" value= "1" onClick={searchMeeting}>1</button>
                                :<button id= "1" value= "1" onClick={searchMeeting}>1</button>
                            }
                        </td>

                        <td>
                            {(2 === currentDate.day) &&
                                 (parseInt(moment().format("MM")) === currentDate.month) && 
                                 (parseInt(moment().format("YYYY")) === currentDate.year)
                                 
                                ?<button className="currentDay" id= "2" value= "2" onClick={searchMeeting}>2</button>
                                :<button id= "2" value= "2" onClick={searchMeeting}>2</button>
                            }
                        </td>
                        
                    </tr>

                    { regularWeeks.map ( (regularWeek , index) => 

                        <tr key={index}>

                            { numDayWeek.map ( (daysNum , index) => getMaxMonth(currentDate.month) > lastDayNumber ?
                            <td key={index}> 
                            {setLastDayNumber(lastDayNumber+1)}
                                {(lastDayNumber === currentDate.day) &&
                                 (parseInt(moment().format("MM")) === currentDate.month) && 
                                 (parseInt(moment().format("YYYY")) === currentDate.year)
                                ?<button className="currentDay" id= {(lastDayNumber)} value= {(lastDayNumber)} onClick={searchMeeting}>{lastDayNumber}</button>
                                :<button id= {(lastDayNumber)} value= {(lastDayNumber)} onClick={searchMeeting}>{lastDayNumber}</button>
                                }
                            </td> :
                            null
                            )}

                        </tr> 
                    )}
                </>
            )
        } else if (firstDayMonth.dayName === "Sunday" ) {
           
            setLastDayNumber(1)

            return (
                <>  
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>
                            {(1 === currentDate.day) &&
                                 (parseInt(moment().format("MM")) === currentDate.month) && 
                                 (parseInt(moment().format("YYYY")) === currentDate.year)
                                 
                                ?<button className="currentDay" id= "1" value= "1" onClick={searchMeeting}>1</button>
                                :<button id= "1" value= "1" onClick={searchMeeting}>1</button>
                            }
                        </td>
                        
                    </tr>

                    { regularWeeks.map ( (regularWeek , index) => 

                        <tr key={index}>

                            { numDayWeek.map ( (daysNum , index) => getMaxMonth(currentDate.month) > lastDayNumber ?
                            <td key={index}> 
                            {setLastDayNumber(lastDayNumber+1)}
                                {(lastDayNumber === currentDate.day) &&
                                 (parseInt(moment().format("MM")) === currentDate.month) && 
                                 (parseInt(moment().format("YYYY")) === currentDate.year)
                                ?<button className="currentDay" id= {(lastDayNumber)} value= {(lastDayNumber)} onClick={searchMeeting}>{lastDayNumber}</button>
                                :<button id= {(lastDayNumber)} value= {(lastDayNumber)} onClick={searchMeeting}>{lastDayNumber}</button>
                                }
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

    /* getMaxMonth sert à déterminer le type du mois qui lui est donné (exemple : janvier est un mois à 31 jours) */
    
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
                return 30
            case 12 : 
                return 31
            default : 
                return "Erreur lors de la détermination du max du mois" ;
         }
    }

    /* setPreviousMonth sert à actualiser le calendrier au mois précédent */

    const setPreviousMonth = () => {

        if (currentDate.month === 1) {
            setCurrentDate({day : currentDate.day, month : 12, year : currentDate.year - 1 }) 
        } else {
            setCurrentDate({day : currentDate.day, month : currentDate.month - 1, year : currentDate.year})
        }
    }
    
    /* setNextMonth sert à actualiser le calendrier au mois suivant */

    const setNextMonth = () => {

        if (currentDate.month === 12) {
            setCurrentDate({day : currentDate.day, month : 1, year : currentDate.year + 1})
            generateCalendar()
            
        } else {
            setCurrentDate({day : currentDate.day, month : currentDate.month + 1, year : currentDate.year})
            generateCalendar()
           
        }

    }

    /* setPreviousYear sert à actualiser le calendrier à l'année précédente */

    const setPreviousYear = () => {
        setCurrentDate({day : currentDate.day, month : currentDate.month, year : currentDate.year - 1})
    }
   
    /* setNextYear sert à actualiser le calendrier à l'année suivante */
    
    const setNextYear = () => {
        setCurrentDate({day : currentDate.day, month : currentDate.month, year : currentDate.year + 1})
    }

    /* convertMonth sert à afficher le nom du mois dans le calendrier */

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

    /* convertDate sert à convertir le format Date utilisé dans le forlumaire de prise de rendez-vous au format
    date utilisé dans le composant Calendrier */

    function convertDate (dateFromForm) {

        const splitDate = dateFromForm.split("-");
        const dayFromFrom = splitDate[2]
        const monthFromForm = splitDate[1]
        const yearFromForm = splitDate[0]

        return {day : dayFromFrom,
                month : monthFromForm,
                year : yearFromForm
        }
    }

    /* generateCalendar() sert à afficher le calendrier */
    
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

    /* addMeeting sert à ajouter un rendez-vous */

    const addMeeting = e => {

        e.preventDefault() ;

        const formDate = convertDate(meetingDateRef.current.value) ;

        const meeting = {
            id: lastMeetingId + 1,
            title:meetingTitleRef.current.value,
            comment:meetingCommentRef.current.value,
            date : formDate,
        }

        localStorage.setItem(meeting.id, JSON.stringify(meeting));

        lastMeetingId += 1 ;

        meetingTitleRef.current.value = "";
        meetingCommentRef.current.value = "";
        meetingDateRef.current.value = "";
    }

    /* loadMeetings sert à récupérer les rendez-vous du localStorage
        et à afficher les rendez-vous de la date sélectionné */

    function loadMeetings (selectedDate) {

        for (let i = 1; i <= localStorage.length ; i++) {
        
            const element = JSON.parse(localStorage.getItem(i))

            if ((parseInt(element.date.day)) === (parseInt(selectedDate.day)) && 
                (parseInt(element.date.month)) === (parseInt(selectedDate.month)) && 
                (parseInt(element.date.year)) === (parseInt(selectedDate.year))  ) {
            
                meetings.push(element)
                alert("Titre du RDV " + i + " : " + element.title + "\nCommentaire du RDV " + i + " : " + element.comment +"\n\n")

            }
        }

        if (meetings.length < 1) {
            alert("Aucun rendez-vous pris à cette date");
        }
    
    }

    /* searchMeeting sert à définir la date sélectionné qui sera donné à la fonction loadMeetings */
    
    const searchMeeting = e => {

        const selectedDate = {
            day : e.currentTarget.id,
            month : currentDate.month,
            year : currentDate.year,
        }
        meetings.splice(0,meetings.length) // vide tous les rendez-vous afin de ne pas perturber le rechargement des rendez-vous
        loadMeetings(selectedDate)
        
    }

    function setLastDayNumber (newValue) {
        lastDayNumber = newValue ;
    }

    return (
        <>
            <h1>Bienvenue dans votre Calendar</h1>

            <p>Pour voir un rendez-vous qui vous intéresse cliquez sur la date qui lui est associé </p>
            <p>La date d'aujourd'hui est celle sur fond bleu </p>

            {generateCalendar()}
            
            <div id="MeetingForm">
                <h2 className="text-center my-5">Marquer un rendez-vous</h2>

                <div className="d-flex justify-content-center">

                    <form className="w-50" onSubmit= {addMeeting}>
                        
                        <input required type="text" name="meeting_title" className="form-control" placeholder="Titre" ref={meetingTitleRef} />
                        <input required type="text" name="meeting_comment" className="form-control my-3" placeholder="Commentaire" ref={meetingCommentRef} />
                        <input required type="date" name="meeting_date" className="form-control my-3" placeholder="Date" ref={meetingDateRef} />
                        
                        <div className="text-center">
                            <input type="submit" className="btn btn-outline-dark" value="Ajouter" />
                        </div>
                        
                    </form>
                </div>
            
            </div>
            
        </>
     );
}
 
export default Calendrier;


function GetCalender(){
    const WeekVal = {
        'sunday':0,
        'monday':1,
        'tuesday':2 ,
        'wednesday':3,
        'thursday':4,
        'fryday':5,
        'saturday':6
    }
    const months = {
        1: "January",
        2: "February",
        3: "March",
        4: "April",
        5: "May",
        6: "June",
        7: "July",
        8: "August",
        9: "September",
        10: "October",
        11:"November",
        12: "December",
      };

var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

today = mm + '/' + dd + '/' + yyyy;
function getDayName(dateStr, locale)
{
    var date = new Date(dateStr);
    return date.toLocaleDateString(locale, { weekday: 'long' });        
}
    let weekdays = []
    
    const weekday = getDayName(today)
    let weekstartday = dd - WeekVal[weekday.toLocaleLowerCase()]
   
    for(let i = 0 ; i<7 ; ++i){
        weekdays.push(weekstartday+i)
    }


    const ret = {
        "date":dd,
        "year":yyyy,
        "week-start":weekstartday,
        "month": months[Math.ceil((mm+1)/12)],
        "week-days": weekdays,
        "date-index":WeekVal[weekday.toLocaleLowerCase()]
    }

    return {
        ret

    }

}
export default GetCalender;

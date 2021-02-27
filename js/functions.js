//Call the datepicker from the form
let datefield = document.getElementById('datepicker')
const picker = datepicker(datefield)




function prediction(){
    //Gets the license plate data
    let letters = document.getElementById('plateLetters').value
    let numbers = document.getElementById('plateNumbers').value
    let date = document.getElementById('datepicker').value
    let time = document.getElementById('timepicker').value
    let output =''
    let day = String(date).substr(0,3)
    let lastdigit = String(numbers).substr(3,1)
    lastdigit = parseInt(lastdigit)
    
    letters = letters.toUpperCase();
    
    if(letters=='' || numbers==''){
        alert('Inorrect input - You must provide a correct license plate');
    }else if (isNaN(letters) && letters != ''){
        console.log('Correct input - just letters')
        var licensePlate = letters
    }else{
        alert('Inorrect input - You must put letters on the first input');
    }

    if(isNaN(numbers) || numbers==''){
        alert('Inorrect input - You must provide a correct license plate');
    }else{
        console.log('Correct input - just numbers')
        licensePlate = licensePlate+'-'+numbers
    
    }

    //Verify the day and conditions to apply pico y placa
    switch(day){
        case 'Mon':
            if((lastdigit== 1 || lastdigit==2 ) && (time=='7:00'||time=='7:30'||time=='8:00'||time=='8:30'||time=='9:00'||time=='9:30'||time=='16:00'||time=='16:30'
                || time=='17:00'||time=='17:30'||time=='18:00'||time=='18:30'||time=='19:00'||time=='19:30')){
                    console.log('Your car with plates: '+ licensePlate + 'cannot circulate at '+ time)
                    output = 'Your car cannot circulate at this date and time'
                    fillData(licensePlate,date,time,output)
            }else if((lastdigit==0 || (2>lastdigit<=9))){
                console.log('Your car with plates: '+ licensePlate + 'can circulate at '+ time)
                output = 'Your car can circulate at this date and time'
                fillData(licensePlate,date,time,output)
            }else{
                console.log('Your car with plates: '+ licensePlate + 'can circulate at '+ time)
                output = 'Your car with plates: '+ licensePlate + 'can circulate at '+ time
                fillData(licensePlate,date,time,output)
            }
        break;
        case 'Tue':
            if((lastdigit== 3 || lastdigit==4 ) && (time=='7:00'||time=='7:30'||time=='8:00'||time=='8:30'||time=='9:00'||time=='9:30'||time=='16:00'||time=='16:30'
                || time=='17:00'||time=='17:30'||time=='18:00'||time=='18:30'||time=='19:00'||time=='19:30')){
                    console.log('Your car with plates: '+ licensePlate + 'cannot circulate at '+ time)
                    output = 'Your car cannot circulate at this date and time'
                    fillData(licensePlate,date,time,output)
            }else if(((5>lastdigit<=9) || (0>=lastdigit<3) )){
                console.log('Your car with plates: '+ licensePlate + 'can circulate at '+ time)
                output = 'Your car can circulate at this date and time'
                fillData(licensePlate,date,time,output)
            }else{
                console.log('Your car with plates: '+ licensePlate + 'can circulate at '+ time)
                output = 'Your car can circulate at this date and time'
                fillData(licensePlate,date,time,output)
            }
            break;
        case 'Wed':
            if((lastdigit==5 || lastdigit==6 ) && (time=='7:00'||time=='7:30'||time=='8:00'||time=='8:30'||time=='9:00'||time=='9:30'||time=='16:00'||time=='16:30'
            || time=='17:00'||time=='17:30'||time=='18:00'||time=='18:30'||time=='19:00'||time=='19:30')){
                console.log('Your car with plates: '+ licensePlate + 'cannot circulate at '+ time)
                output = 'Your car cannot circulate at this date and time'
                fillData(licensePlate,date,time,output)
            }else if(((6>lastdigit<=9) || (0>=lastdigit<5))){
                console.log('Your car with plates: '+ licensePlate + 'can circulate at '+ time)
                output = 'Your car can circulate at this date and time'
                fillData(licensePlate,date,time,output)
            }else{
                console.log('Your car with plates: '+ licensePlate + 'can circulate at '+ time)
                output = 'Your car can circulate at this date and time'
                fillData(licensePlate,date,time,output)
            }
            break;
        case 'Thu':
            if((lastdigit==7 || lastdigit==8 ) && (time=='7:00'||time=='7:30'||time=='8:00'||time=='8:30'||time=='9:00'||time=='9:30'||time=='16:00'||time=='16:30'
            || time=='17:00'||time=='17:30'||time=='18:00'||time=='18:30'||time=='19:00'||time=='19:30')){
                console.log('Your car with plates: '+ licensePlate + 'cannot circulate at '+ time)
                output = 'Your car cannot circulate at this date and time'
                fillData(licensePlate,date,time,output)
            }else if((lastdigit==9 || (0>=lastdigit<6))){
                console.log('Your car with plates: '+ licensePlate + 'can circulate at '+ time)
                output = 'Your car can circulate at this date and time'
                fillData(licensePlate,date,time,output)
            }else{
                console.log('Your car with plates: '+ licensePlate + 'can circulate at '+ time)
                output = 'Your car with plates: '+ licensePlate + 'can circulate at '+ time
                output = 'Your car can circulate at this date and time'
                fillData(licensePlate,date,time,output)
            }
            break;
            case 'Fry':
                if((lastdigit==9 || lastdigit==0)&& (time=='7:00'||time=='7:30'||time=='8:00'||time=='8:30'||time=='9:00'||time=='9:30'||time=='16:00'||time=='16:30'
                || time=='17:00'||time=='17:30'||time=='18:00'||time=='18:30'||time=='19:00'||time=='19:30')){
                    console.log('Your car with plates: '+ licensePlate + 'cannot circulate at '+ time)
                    output = 'Your car cannot circulate at this date and time'
                    fillData(licensePlate,date,time,output)
                }else if(0>lastdigit<9){
                    console.log('Your car with plates: '+ licensePlate + 'can circulate at '+ time)
                    output = 'Your car can circulate at this date and time'
                    fillData(licensePlate,date,time,output)
                }else{
                    console.log('Your car with plates: '+ licensePlate + 'can circulate at '+ time)
                    output = 'Your car with plates: '+ licensePlate + 'can circulate at '+ time
                    output = 'Your car can circulate at this date and time'
                    fillData(licensePlate,date,time,output)
                }
            break;
            case 'Sat':
                    console.log('Your car with plates: '+ licensePlate + 'can circulate at '+ time)
                    output = 'Your car with plates: '+ licensePlate + 'can circulate at '+ time
                    output = 'Your car can circulate at this date and time'
                    fillData(licensePlate,date,time,output)
            break;
            case 'Sun':
                    console.log('Your car with plates: '+ licensePlate + 'can circulate at '+ time)
                    output = 'Your car with plates: '+ licensePlate + 'can circulate at '+ time
                    output = 'Your car can circulate at this date and time'
                    fillData(licensePlate,date,time,output)
            break;

                 

    }
    
      
}

function fillData(licensePlateX,dateX, timeX,outputX){
    document.getElementById('outLicensePlate').innerHTML = licensePlateX
    document.getElementById('outDate').innerHTML = dateX
    document.getElementById('outTime').innerHTML = timeX
    document.getElementById('output').innerHTML = outputX
}
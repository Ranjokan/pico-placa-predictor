//Call the datepicker from the form
let datefield = document.getElementById('datepicker')
const picker = datepicker(datefield)




function prediction(){
    //Gets the license plate data
    let letters = document.getElementById('plateLetters').value
    let numbers = document.getElementById('plateNumbers').value
    let date = document.getElementById('datepicker').value
    let time = document.getElementById('timepicker').value
    let day = String(date).substr(0,3)
    let lastdigit = String(numbers).substr(3,1)
    
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

   

    console.log(day + '-' + lastdigit)
    console.log('License Plate:' +licensePlate)
      
}
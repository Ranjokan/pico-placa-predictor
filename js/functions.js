//Call the datepicker from the form
let datefield = document.getElementById('datepicker')
const picker = datepicker(datefield)




function prediction(){
    //Gets the license plate data
    let letters = document.getElementById('plateLetters').value
    let numbers = document.getElementById('plateNumbers').value
    let date = document.getElementById('datepicker').value
    let time = document.getElementById('timepicker').value
    
    console.log(time)
    letters = letters.toUpperCase();

    if (isNaN(letters)){
        console.log('Correct input - just letters')
        var licensePlate = letters
    }else{
        alert('Inorrect input - You must put letters on the first input');
    }

    if(isNaN(numbers)){
        alert('You must put numbers on the second input') 
    }else{
        licensePlate = licensePlate+'-'+numbers
        console.log('Correct input - just numbers')
    
    }
    console.log('License Plate:' +licensePlate)
       
}
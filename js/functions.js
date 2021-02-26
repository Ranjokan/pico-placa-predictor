function prediction(){
    //Gets the license plate data
    let letters = document.getElementById('plateLetters').value
    let numbers = document.getElementById('plateNumbers').value
    
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

//Call the datepicker from the form
let datefield = document.getElementById('datepicker')

let picker = datepicker(datefield, {

    formatter: (input, date, instance) => {

    input.value = date.toDateString()
    selection = input.value
    console.log('SELECTED DATE: '+ selection)   
},  

})
  


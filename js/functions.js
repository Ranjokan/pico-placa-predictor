//Call the datepicker from the form
const datefield = document.getElementById('datepicker')
const picker = datepicker(datefield, {onSelect: instance => {
    // Show which date was selected.
    console.log("This is the selected date" + instance.dateSelected)
  }
})



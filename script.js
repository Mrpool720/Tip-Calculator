// global access to all inputs and divs
const billInput = document.getElementById('billTotalInput')
const tipInput = document.getElementById('tipInput')
const numberOfPeopleDiv = document.getElementById('numberOfPeople')
const perPersonTotalDiv = document.getElementById('perPersonTotal')

// number of people from number of people div
let numberOfPeople = Number(numberOfPeopleDiv.innerText)

// Calculate the total bill per person 
const calculateBill = () => {

    // get the bill
    const bill = Number(billInput.value)

    //get the tip and convert it into a percentage
    const tipPercentage = Number(tipInput.value) / 100

    //total tip
    const tipAmount = bill * tipPercentage

    // total bill
    const totalBill = bill + tipAmount

    // per person total 
    const perPersonTotal = totalBill / numberOfPeople

    // update the perpersontotal on DOM
    perPersonTotalDiv.innerText = `$${perPersonTotal.toFixed(2)}`
}

// split the bill with people(Increase)
const increasePeople = () => {

    // increase the number of People
    numberOfPeople += 1

    // update the DOM with new number of people
    numberOfPeopleDiv.innerText = numberOfPeople

    // calculate the amount with incereased people
    calculateBill()
}

// split the bill with people(Decrease)
const decreasePeople = () => {

    // if 1 person then return
    if (numberOfPeople <= 1) {
        alert('Hey!, You cannot split bill, You are alone..')
        return
    }

    // else
    numberOfPeople -= 1

    // update the DOM with new number of people
    numberOfPeopleDiv.innerText = numberOfPeople

    //calculate the amount
    calculateBill()
}
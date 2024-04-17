let inputName = document.querySelector('#input-name')
let inputEmail = document.querySelector('#input-email')
let btnSendSubscription = document.querySelector('.sendsubscription')

let tbodyCont = document.querySelector('.tbody-table')

let participants = []

btnSendSubscription.addEventListener('click', sendSubscription)

function sendSubscription() {
    let name = inputName.value  
    let email = inputEmail.value

    participants.push({name: name, email: email})

    inputName.value = ''
    inputEmail.value = ''

    registerIntoTable()
}

console.log(participants)

function registerIntoTable() {
    let eachParticipantRow = document.createElement('tr')
    eachParticipantRow.style.width = '100%'
    eachParticipantRow.style.border = '1px solid brown'
    eachParticipantRow.style.height = '100px'
    
        let eachParticipantCell = document.createElement('td')
        eachParticipantCell.textContent= `OI`
        eachParticipantCell.style.width = '100%'
        eachParticipantCell.style.height = '100%'
   
    eachParticipantRow.appendChild(eachParticipantCell)

    tbodyCont.appendChild(eachParticipantRow)
}

let inputName = document.querySelector('#input-name')
let inputEmail = document.querySelector('#input-email')
let btnSendSubscription = document.querySelector('.sendsubscription')

let tbodyCont = document.querySelector('.tbody-table')

let currentIndex = 0

let participants = []

btnSendSubscription.addEventListener('click', sendSubscription)

function sendSubscription() {
    let userName = inputName.value  
    let userEmail = inputEmail.value

    participants.push({name: userName, email: userEmail})

    inputName.value = ''
    inputEmail.value = ''

    currentIndex++
    registerIntoTable()
}

console.log(participants)

function registerIntoTable() {

    let eachParticipantRow = document.createElement('tr')
    eachParticipantRow.style.width = '100%'
    eachParticipantRow.style.border = '1px solid brown'
    eachParticipantRow.style.height = '55px'

    
        let eachParticipantCell = document.createElement('td')
        let eachSubscriptionDateCell = document.createElement('td')
        let eachCheckInDateCell = document.createElement('td')

        participants.forEach(participant => {
            /*eachParticipantCell.textContent = `${participant.name} - ${participant.email}` */
            eachParticipantCell.innerHTML = `
            <div class="cont-row" style="display: flex; flex-direction: column; width: 100%; height: 100%">
                <div class="p-namecont">${participant.name}</div>
                <div class="p-emailcont">${participant.email}</div>
            </div>`

            let randomNumb = Math.floor(Math.random() * 60) + 1
            console.log(randomNumb)

            eachSubscriptionDateCell.innerHTML = `
            <div class="cont-row" style="display: flex; flex-direction: column; width: 100%; height: 100%">
                <div class="p-namecont"><span>há ${randomNumb} minutos</span></div>
            </div>
                `
        })
        /*  eachParticipantCell.textContent= `OI`
        eachParticipantCell.style.width = '100%'
        eachParticipantCell.style.height = '100%' tabela */
   
    eachParticipantRow.appendChild(eachParticipantCell)
    eachParticipantRow.appendChild(eachSubscriptionDateCell)

    tbodyCont.appendChild(eachParticipantRow)
}

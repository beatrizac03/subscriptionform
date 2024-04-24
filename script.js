let inputName = document.querySelector('#input-name')
let inputEmail = document.querySelector('#input-email')
let btnSendSubscription = document.querySelector('.sendsubscription')

let tbody = document.querySelector('.tbody-participantdata')

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

    function applyRowStyle(element) {
        element.style.width = '100%';
        element.style.border = '1px solid brown';
        element.style.height = '55px';
    }

    let rowParticipant = document.createElement('tr');
    applyRowStyle(rowParticipant);
    
        let eachParticipantCell = document.createElement('td')
        let eachSubscriptionDateCell = document.createElement('td')
        let eachCheckInDateCell = document.createElement('td')

        participants.forEach(participant => {
            eachParticipantCell.innerHTML = `
            <div class="cont-row" style="flex-direction: column; width: 100%; height: 100%">
                <div class="p-namecont">${participant.name}</div>
                <div class="p-emailcont">${participant.email}</div>
            </div>`

            let randomNumb = Math.floor(Math.random() * 60) + 1
            eachSubscriptionDateCell.innerHTML = `
            <div class="cont-row" style="flex-direction: column; width: 100%; height: 100%">
                  <div class="p-namecont"><span>há ${randomNumb} minutos</span></div>
               </div>`

            eachCheckInDateCell.innerHTML = `
            <div class="cont-row" style="flex-direction: column; width: 100%; height: 100%">
                <div class="p-namecont"><span class="span-checkin" style="color: var(--green); cursor: pointer;">Confirmar check-in</span></div>
            </div>`
            let spanCheckIn = eachCheckInDateCell.querySelector('.cont-row .p-namecont .span-checkin');
            spanCheckIn.addEventListener('click', confirmCheckIn) 
            function confirmCheckIn(event) {
                let spanClicked = event.target
                spanClicked.innerHTML = `Confirmado!`
            }
            
        })

        rowParticipant.appendChild(eachParticipantCell)
        rowParticipant.appendChild(eachSubscriptionDateCell)
        rowParticipant.appendChild(eachCheckInDateCell)

        tbody.appendChild(rowParticipant)
}



let inputName = document.querySelector('#input-name')
let inputEmail = document.querySelector('#input-email')
let btnSendSubscription = document.querySelector('.sendsubscription')

let tbodyColumnParticipant = document.querySelector('.tbody-columnparticipant')
let tbodyColumnSubscDate = document.querySelector('.tbody-columnsubscripdate')
let tbodyColumnCheckinDate = document.querySelector('.tbody-columncheckindate')


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

    let rowParticipantData = document.createElement('tr');
    applyCommonStyle(rowParticipantData);

    let rowSubscriptionDate = document.createElement('tr');
    applyCommonStyle(rowSubscriptionDate);

    
        let eachParticipantCell = document.createElement('td')
        let eachSubscriptionDateCell = document.createElement('td')
        let eachCheckInDateCell = document.createElement('td')

        participants.forEach(participant => {
            eachParticipantCell.innerHTML = `
            <div class="cont-row" style="display: flex; flex-direction: column; width: 100%; height: 100%">
                <div class="p-namecont">${participant.name}</div>
                <div class="p-emailcont">${participant.email}</div>
            </div>`

            
        })
        //  let randomNumb = Math.floor(Math.random() * 60) + 1
        //  eachSubscriptionDateCell.innerHTML = `
         //     <div class="cont-row" style="display: flex; flex-direction: column; width: 100%; height: 100%">
           //       <div class="p-namecont"><span>há ${randomNumb} minutos</span></div>
        //      </div>`
   
    rowParticipantData.appendChild(eachParticipantCell)
    rowParticipantData.appendChild(eachSubscriptionDateCell)
    // rowParticipantData.appendChild(eachCheckInDateCell)

    tbodyColumnParticipant.appendChild(rowParticipantData)
}

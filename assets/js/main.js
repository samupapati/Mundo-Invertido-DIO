
import { getHellFireClubSubscriptions, subscribeToHellfireclub } from "./firebase/hellfire-clube.js"

const txtName = document.getElementById('txtName')
const txtEmail = document.getElementById('txtEmail')
const txtLevel = document.getElementById('txtLevel')
const txtCharacter = document.getElementById('txtCharacter')
const btnSubscribe = document.getElementById('btnSubscribe')

const subscriptionsList = document.getElementById('subscriptions')

btnSubscribe.addEventListener('click', async () => {
    const subscription = {
        name: txtName.value,
        email: txtEmail.value,
        level: txtLevel.value,
        character: txtCharacter.value
    }

   //Salvar no banco de dados
    const subscriptionId = await subscribeToHellfireclub(subscription)
    console.log("Inscrito com sucesso: " + subscriptionId)
})

async function loadSubscriptions(){
    const subscriptions = await getHellFireClubSubscriptions();
    
    //inserindo os dados do db na página
    subscriptionsList.innerHTML = subscriptions.map(sub => `
        <li>
            ${sub.name}
        </li>
    `).join('')
    console.log(subscriptions)
}

loadSubscriptions();
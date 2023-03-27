import app from "./app.js"
import { getFirestore, collection, addDoc, getDocs } from 'https://www.gstatic.com/firebasejs/9.9.3/firebase-firestore.js'

export async function subscribeToHellfireclub(subscription){
    const db = getFirestore(app)
    const hellfireClubColletion = collection(db, 'hellfire-clube')
    const docRef = await addDoc(hellfireClubColletion, subscription)
    return docRef.id
}

//Pegando os dados do database
export async function getHellFireClubSubscriptions(){
    const db = getFirestore(app)
    const hellfireClubColletion = collection(db, 'hellfire-clube')
    const hellfireClubColletionSnapshot = await getDocs(hellfireClubColletion);
    const subscriptions = hellfireClubColletionSnapshot.docs.map(doc => doc.data());
    return subscriptions;
}

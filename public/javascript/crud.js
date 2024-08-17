

import { addDoc, collection, db, getDocs, doc, updateDoc } from "./firebase.js"


async function formSubmit() {
    console.log("formSubmit()")
    const obj = {
        userName: "Abid",
        age: 20
    }
  
    try {
        const docRef = await addDoc(collection(db, "users"), obj);
        console.log(docRef, "docRef")
    } catch (error) {
        console.log("error", error.message)
    }


}


const editForm = async () => {
    try {
        const userCollection = doc(db, "users", "8Y29Xl9GDsUWfp7bTNNN")
        await updateDoc(userCollection, {
            userName: "Abid Ali"
        })

    } catch (error) {
        console.log("error editForm ", error.message)
    }
}

window.addEventListener("load", async () => {
    try {
        const querySnapshot = await getDocs(collection(db, "users"))
        querySnapshot.forEach((doc) => {
            console.log("doc", doc.data())
        })

    } catch (error) {

    }
})

window.editForm = editForm
window.formSubmit = formSubmit
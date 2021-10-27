// check react routing from iceland codealong

import firestore from "./firestore";

// clean a student record,
const cleanRecord = (docSnapshot) => ({
    id: docSnapshot.id,
    ...docSnapshot.data(),
});

const cleanRecords = (querySnapshot) => {
    return querySnapshot.docs.map(cleanRecord);
};

// get all products from firestore

export const getProducts = async () => {
    // CollectionReference
    const colRef = firestore.collection("products");
    const snapshot = await colRef.get();

    return cleanRecords(snapshot);
};

export const findProduct = async (id) => {
    // collection reference
    const colRef = firestore.collection("products");
    // document reference with specified id
    const docRef = colRef.doc(id);
    // document snapshot - returns a promise
    const docSnap = await docRef.get();
    // now clean record with data we want
    return cleanRecord(docSnap);
};

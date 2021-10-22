// check react routing from iceland codealong

import firestore from "./firestore";

const cleanRecords = (querySnapshot) => {
    return querySnapshot.docs.map(cleanRecord);
};

export const getProducts = async () => {
    // Collection reference
    const colRef = firestore.collection("products");
    // Promise<QuerySnapshot> -> QuerySnapshot // returns up to date object, returning a promise so we need await
    const snapshot = await colRef.get();

    return cleanRecords(snapshot);
};

getProducts();

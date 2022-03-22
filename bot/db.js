require("dotenv").config();
//En el config esta el TOKEN y GOOGLE_APPLICATION_CREDENTIALS conforme a la documentacion de firebase
// https://firebase.google.com/docs/admin/setup?hl=es-419#node.js
const { initializeApp, applicationDefault } = require("firebase-admin/app");
const { getFirestore } = require("firebase-admin/firestore");

initializeApp({
    credential: applicationDefault(),
});

const db = getFirestore();

module.exports = {
    db,
};
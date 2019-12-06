const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");
var firebaseConfig = {
    apiKey: "AIzaSyBY_CEQqrnmHUo5ig06lDbXwCvnR0NOQdk",
    authDomain: "todoapp-a6d6e.firebaseapp.com",
    databaseURL: "https://todoapp-a6d6e.firebaseio.com",
    projectId: "todoapp-a6d6e",
    storageBucket: "todoapp-a6d6e.appspot.com",
    messagingSenderId: "569108416927",
    appId: "1:569108416927:web:2cb9379e663e4b8cf0d5aa"
};
firebase.initializeApp(firebaseConfig);

const firebaseDB = (function () {
let db = firebase.firestore();
return {
    write: async function (collection, obj){
        let id = "";
        await db.collection(collection)
        .add(obj)
        .then(function(docRef) {
            id = docRef.id;
        })
        .catch(function(error) {
            console.error("Error adding document: ", error);
        });
        return id;
    },
     read: async function (collection, id){
        let col = db.collection(collection);
        if (id){
            col = col.doc(id);
        }
        let data = [];
        await col.get().then(function(docs){
                docs.forEach(x=> data.push({...x.data(),...{id:x.id}}));
            }).catch(function(error) {
                console.log("Error getting document:", error);
            });
        return data;

    },
    delete: async function (collection,id){
        let col = db.collection(collection);
        await col.doc(id).delete();
    },
    update: async function (collection, obj){
        let col = db.collection(collection);
        await col.doc(obj.id).set(obj);
    }
};

})();
export default firebaseDB;


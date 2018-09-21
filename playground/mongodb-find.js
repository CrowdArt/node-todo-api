// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID}= require('mongodb');


// connect to database
MongoClient.connect('mongodb://localhost:27017/ToDoApp', (err, db) => {
    if (err) {
      return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    db.collection('Todos').find().toArray().then((docs) => {
        console.log('Todos');
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log('Unable to fetch todos', err);
    });

    //db.close();
});
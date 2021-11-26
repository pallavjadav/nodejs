const { MongoClient } = require('mongodb');
// or as an es module:
// import { MongoClient } from 'mongodb'

// Connection URL
const url = 'mongodb+srv://sapbtpuser:0oLjjgGniuwz5K91@sapbtp-dev-cluster.fypxk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const client = new MongoClient(url);

// Database Name
const dbName = 'Weights';

async function main() {
    // Use connect method to connect to the server
    await client.connect();
    //console.log('Connected successfully to server');
    const db = client.db(dbName);
    const collection = db.collection('Employees');
    //collection.insertOne({empName:"Sally", empPass:"Punch123", date:new Date()});
    //insert data
    // const insertResult = await collection.insertMany([{ a: 1 }, { a: 2 }, { a: 3 }]);
    // console.log('Inserted documents =>', insertResult);
    //find data
    // const findResult = await collection.find({}).toArray();
    // console.log('Found documents =>', findResult);
    // const deleteResult = await collection.deleteMany({ a: 3 });
    // console.log('Deleted documents =>', deleteResult);
    // the following code examples can be pasted here...
    const find = await collection.find({}).toArray();
        console.log('Found Results', find );

    //const update = await collection.updateOne({empName:"Juhi"},{$set:{empPass:"Juhi", empSurname:"Ekbote", empExperience:"4 Years"}});

    return 'done.';
}

main()
    .then(console.log)
    .catch(console.error)
    .finally(() => client.close());
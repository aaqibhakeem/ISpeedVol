const express = require('express');
const router = express.Router();
const MongoClient = require('mongodb').MongoClient;

router.post('/api/hireform', (req, res) => {
    try {
        const url = process.env.MONGO_URI; // No need for quotes around process.env.MONGO_URI
        MongoClient.connect(url, function (err, db) {
            if (err) throw err;
            const dbo = db.db("organization");
            const myobj = { name: req.body.name };
            dbo.collection("events").insertOne(myobj, function (err, result) {
                if (err) throw err;
                console.log("1 document inserted");
                db.close();
                res.status(201).send("Event inserted successfully"); // Sending response
            });
        });
    } catch (err) {
        console.error(err);
        res.status(500).send("Internal Server Error");
    }
});

module.exports = router;

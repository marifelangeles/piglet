const functions = require("firebase-functions");
const admin = require("firebase-admin");

admin.initializeApp();

const express = require("express");
const app = express();

app.get("/sleep", (req, res) => {
  admin
    .firestore()
    .collection("Sleep")
    .get()
    .then((data) => {
      let sleep = [];
      data.forEach((doc) => {
        sleep.push({
          sleepId: doc.id,
          start: doc.data().start,
          end: doc.data().end,
        });
      });
      return res.json(sleep);
    })
    .catch((err) => console.error(err));
});

app.post("/sleep", (req, res) => {
  const newSleep = {
    start: req.body.start,
    end: req.body.end,
  };

  admin
    .firestore()
    .collection("sleep")
    .add(newSleep)
    .then((doc) => {
      res.json({ message: `document ${doc.id} created successfully` });
    })
    .catch((err) => {
      res.status(500).json({ error: "post /sleep error" });
      console.error(err);
    });
});

exports.api = functions.https.onRequest(app);

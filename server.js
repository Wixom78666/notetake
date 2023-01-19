const fs = require("fs");
const path = require("path");
const express = require("express");
const app = express();
const notesData = require("./db/db.json");
const PORT = process.env.PORT || 3001;

app.use(express.static("public"));

app.use(express.urlencoded({extended: true}));

app.use(express.json());

app.get("/api/notes", (req, res) => {
    res.json(notesData.slice(1));
});

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "./public/index.html"));
});

app.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "./public/notes.html"));
});

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "./public/index.html"));
});

app.listen(PORT, () => {
    console.log(`SERVER LISTENIING ON PORT: ${PORT}`);
});

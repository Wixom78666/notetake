const fs = require("fs");
const path = require("path");
const express = require("express");
const app = express();
const notesData = require("./db/db.json");
const PORT = process.env.PORT || 3001;

app.use(express.static("public"));

app.use(express.urlencoded({extended: true}));

app.use(express.json());



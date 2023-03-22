const express = require('express');
const app = express();
const PORT = 3000;
const cors = require('cors');

app.use(cors());

app.listen(PORT, () => {
  console.log('Taking scenes!');
});

const sceneList = require("./scenes/scenes.js");

// Get entire Scenelist
app.get('/callAll', sceneList.getAll)

//Get Specific Scene
app.get('/callScene/:count/:location', sceneList.getScene)
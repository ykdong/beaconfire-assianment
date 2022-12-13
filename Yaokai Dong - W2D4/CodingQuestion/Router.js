const router = require('express').Router();
const path = require('path');
const fs = require('fs/promises');

router.get('/todo/:filename', (req, res) => {
  // get the correct query parameter
  const fileName = req.params.filename;
  const filePath = path.join(__dirname, `${fileName}.json`);
  
  // read file helper function
  async function readFile(filePath) {
    try {
      const stats = await fs.stat(filePath);
      if (stats) {
        const data = await fs.readFile(filePath);
        return JSON.parse(data.toString());
      }
    } catch(error) {
      return error;
    }
  }
  // read the file data and send back the correct information
  // with properly error handling
  readFile(filePath).then(result => {
    if (result.code === "ENOENT") {
      res.status(500).send(`Error: can not read file for file named: ${fileName}`);
    } else {
      res.status(200).send(result)
    }
  })
});

router.post('/todo/:filename', (req, res) => {
  // get the correct request body data
  const data = req.body;
  // set correct "time stamp" propetry for the todo file
  data.timeStamp = `${new Date().toLocaleTimeString()} at ${new Date().toLocaleDateString()}`;

  // get correct file directory
  const fileName = req.params.filename;
  const filePath = path.join(__dirname, `${fileName}.json`);

  // check existance of requested file
  async function readFile(filePath) { 
    try {
      return await fs.stat(filePath);
    } catch (error) {
      return error;
    }
  }

  // write file with correct data and with properly error handling
  readFile(filePath).then(async (result) => {
    // rquested file does not exist 
    if (result.code === "ENOENT") {
      try {
        // append the new file directly
        await fs.writeFile(filePath, JSON.stringify([data]));
        return [data];
      } catch (error) {
        return error;
      }
    // requested file exists
    } else {
      try {
        // get old items and append the new item
        let oldItems = await fs.readFile(filePath);
        let jsonItems = JSON.parse(oldItems);
        jsonItems.push(data);
        await fs.writeFile(filePath, JSON.stringify(jsonItems));
        return jsonItems; // in json format
      } catch (error) {
        return error;
      }
    }
  }).then(result => {
    if (result.code === "ENOENT") {
      res.status(500).send(`Error: can not read file for file named: ${fileName}`);
    } else {
      res.status(200).send(result);
    }
  });
});

router.put('/todo/:filename', (req, res) => {
  // get the correct query parameter
  const fileName = req.params.filename;
  const filePath = path.join(__dirname, `${fileName}.json`);

  // get the correct request body data
  const data = req.body;
  // set correct "time stamp" propetry for the todo file
  data.timeStamp = `${new Date().toLocaleTimeString()} at ${new Date().toLocaleDateString()}`;

  // check existance of requested file
  async function readFile(filePath) { 
    try {
      return await fs.stat(filePath);
    } catch (error) {
      return error;
    }
  }

  // write file with correct data and with properly error handling
  readFile(filePath).then(async (result) => {
    // rquested file does not exist 
    if (result.code === "ENOENT") {
      return result;

    // requested file exists
    } else {
      try {
        // get old items and updata the requested item
        let oldItems = await fs.readFile(filePath);
        let jsonItems = JSON.parse(oldItems);

        // find the requested item
        let itemIndex = jsonItems.findIndex(obj => obj.title === data.title);
        // set correct data
        jsonItems[itemIndex] = {
          "title": data.newTitle,
          "description": data.description,
          "status": data.status,
          "priority": data.priority,
          "timeStamp": data.timeStamp
        };
        await fs.writeFile(filePath, JSON.stringify(jsonItems));
        return jsonItems; // in json format
      } catch (error) {
        return error;
      }
    }
  }).then(result => {
    if (result.code === "ENOENT") {
      res.status(500).send(`Error: can not read file for file named: ${fileName}`);
    } else {
      res.status(200).send(result);
    }
  });
});

router.delete('/todo/:filename', (req, res) => {
  // get the correct query parameter
  const fileName = req.params.filename;
  const filePath = path.join(__dirname, `${fileName}.json`);

  // get the correct request item title
  const title = req.body.title;

  // check existance of requested file
  async function readFile(filePath) { 
    try {
      return await fs.stat(filePath);
    } catch (error) {
      return error;
    }
  }

  // write file with correct data and with properly error handling
  readFile(filePath).then(async (result) => {
    // rquested file does not exist 
    if (result.code === "ENOENT") {
      return result;

    // requested file exists
    } else {
      try {
        // get old items and updata the requested item
        let oldItems = await fs.readFile(filePath);
        let jsonItems = JSON.parse(oldItems);

        // find the requested item
        let itemIndex = jsonItems.findIndex(obj => obj.title === title);
        // delete certain item based on the request data title
        jsonItems.splice(itemIndex, 1);
        await fs.writeFile(filePath, JSON.stringify(jsonItems));
        return jsonItems; // in json format
      } catch (error) {
        return error;
      }
    }
  }).then(result => {
    if (result.code === "ENOENT") {
      res.status(500).send(`Error: can not read file for file named: ${fileName}`);
    } else {
      res.status(200).send(result);
    }
  });
});

module.exports = router;

const todoList = require("../model/model");

exports.get_item = (req, res) => {
  // read collection helper function
  async function readCollection() {
    try {
      const documents = await todoList.find({});
      if (documents) {
        return documents;
      }
    } catch(error) {
      return error;
    }
  }
  // read the collections and send back the correct information
  // with proper error handling
  readCollection().then(result => {
    if (result.length) {
      res.render('index', {statusCode: 200, result: result, message: "Successfully load the to do list"});
    } else {
      res.render('index', {statusCode: 500, message: "Can not read the to do list, Please try again"});
    }
  })
};

exports.create_item = (req, res) => {
  // get the correct request body data
  const data = req.body;
  // set correct "time stamp" propetry for the todo file
  data.timeStamp = `${new Date().toLocaleTimeString()} at ${new Date().toLocaleDateString()}`;

  // helper function to create new document
  async function createDocument (document) {
    try {
      // write new document to db
      const result = await todoList.create(document);
      // return new collection after create new document
      const newCollection = await todoList.find({});
      return newCollection; 
    } catch (error) {
      return error;
    }
  };
  // write document to db with correct data and with proper error handling
  createDocument(data).then(result => {
    if (result.length) {
      res.render('index', {statusCode: 200, result: result, message: "Successfully load the to do list"});
    } else {
      res.render('index', {statusCode: 500, message: "Can not read the to do list, Please try again"});
    }
  });
};

exports.modify_item = (req, res) => {
  // get the correct request body data
  const data = req.body;
  // set correct "time stamp" propetry for the todo file
  data.timeStamp = `${new Date().toLocaleTimeString()} at ${new Date().toLocaleDateString()}`;

  // helper function for update certain document 
  async function updateDoc(document) { 
    try {
      return await todoList.updateOne({ title: document.oldTitle}, {
        title: document.newTitle,
        description: document.newDescription,
        status: document.newStatus,
        priority: document.newPriority,
        timeStamp: document.timeStamp
      });
    } catch (error) {
      return error;
    }
  }

  // update document with correct data and with proper error handling
  updateDoc(data).then(result => {
    if (result) {
      res.render('index', {statusCode: 200, result: result, message: "Successfully load the to do list"});
    } else {
      res.render('index', {statusCode: 500, message: "Can not read the to do list, Please try again"});
    }
  });
  
};

exports.delete_item = (req, res) => {
  // get the correct request item title
  const TITLE = req.body.title;

  // helper function for delete the requested document
  async function deleteDoc(title) {
    try {
      return await todoList.deleteOne({ title: title });
    } catch(error) {
      return error;
    }
  };
  // delete requested document with proper error handling
  deleteDoc(TITLE).then(result => {
    if (result) {
      res.render('index', {statusCode: 200, result: result, message: "Successfully load the to do list"});
    } else {
      res.render('index', {statusCode: 500, message: "Can not read the to do list, Please try again"});
    };
  });
};

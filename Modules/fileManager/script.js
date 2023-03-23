const fs = require("fs");
const process = require("process");
const path = require("path");
const {
  read,
  create,
  del,
  update,
  createFolder,
  deleteFolder,
  readFolder,
  renameFolder,
} = require("./operations");
let args = process.argv;
let directory = path.dirname(args[1]) + "/";

function print() {
  console.log("");
  console.log("---------------------------------");
  console.log("node script.js 1 : READ FILE ");
  console.log("node script.js 2 : CREATE FILE");
  console.log("node script.js 3 : UPDATE FILE");
  console.log("node script.js 4 : DELETE FILE");
  console.log("node script.js 5 : CREATE FOLDER");
  console.log("node script.js 6 : DELETE FOLDER");
  console.log("node script.js 7 : READ FOLDER");
  console.log("node script.js 8 : UPDATE FOLDER");
  console.log("node script.js 9 : EXIT");
  console.log("---------------------------------  \n");
}

if (process.argv[2] === undefined) {
  print();
} else {
  if (args[2] === "1") {
    console.log('node script.js readFile "Filename" ');
  }
  if (args[2] === "2") {
    console.log(
      'node script.js createFile "Foldername" "Filename" "Enter the File Content" '
    );
  }
  if (args[2] === "3") {
    console.log(
      'node script.js updateFile "Foldername" "Filename" "Enter the updated File Content"'
    );
  }
  if (args[2] === "4") {
    console.log('node script.js deleteFile "Foldername" "Filename" ');
  }
  if (args[2] === "5") {
    console.log('node script.js makeDir "Foldername" "path/"');
  }
  if (args[2] === "6") {
    console.log('node script.js delDir "Foldername" "path/"');
  }
  if (args[2] === "7") {
    console.log('node script.js readDir "Foldername" "path/"');
  }
  if (args[2] === "8") {
    console.log(
      'node script.js renameDir "Old Foldername" "New Foldername" "path/"'
    );
  }
  if (args[2] === "9") {
    process.exit();
  }

  if (args[2] === "readFile") {
    try {
      read();
    } catch (err) {
      console.error(err);
    }
  }

  if (args[2] === "createFile") {
    try {
      create();
    } catch (err) {
      console.error(err);
    }
    print();
  }

  if (args[2] === "deleteFile") {
    try {
      del();
    } catch (err) {
      console.error(err);
    }
    print();
  }
  if (args[2] === "updateFile") {
    try {
      update();
    } catch (err) {
      console.error(err);
    }
    print();
  }
  if (args[2] === "makeDir") {
    try {
      createFolder();
    } catch (err) {
      console.error(err);
    }
    print();
  }
  if (args[2] === "delDir") {
    try {
      deleteFolder();
    } catch (err) {
      console.error(err);
    }
    print();
  }
  if (args[2] === "readDir") {
    try {
      readFolder();
    } catch (err) {
      console.error(err);
    }
    print();
  }
  if (args[2] === "renameDir") {
    try {
      renameFolder();
    } catch (err) {
      console.error(err);
    }
    print();
  }
}

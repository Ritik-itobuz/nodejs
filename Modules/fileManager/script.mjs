import * as fs from "fs";
import process from "process";
import path from "path";
import {
  readFile,
  createFile,
  deleteFile,
  updateFile,
  createFolder,
  deleteFolder,
  readFolder,
  renameFolder,
} from "./operations.mjs";
let args = process.argv;
let directory = path.dirname(args[1]) + "/";

function print() {
  console.log("");
  console.log("---------------------------------");
  console.log("node script.mjs 1 : READ FILE ");
  console.log("node script.mjs 2 : CREATE FILE");
  console.log("node script.mjs 3 : UPDATE FILE");
  console.log("node script.mjs 4 : DELETE FILE");
  console.log("node script.mjs 5 : CREATE FOLDER");
  console.log("node script.mjs 6 : DELETE FOLDER");
  console.log("node script.mjs 7 : READ FOLDER");
  console.log("node script.mjs 8 : UPDATE FOLDER");
  console.log("node script.mjs 9 : EXIT");
  console.log("---------------------------------  \n");
}

if (process.argv[2] === undefined) {
  print();
} else {
  if (args[2] === "1") {
    console.log('node script.mjs readFile "Filename" ');
  }
  if (args[2] === "2") {
    console.log(
      'node script.mjs createFile "Foldername" "Filename" "Enter the File Content" '
    );
  }
  if (args[2] === "3") {
    console.log(
      'node script.mjs updateFile "Foldername" "Filename" "Enter the updated File Content"'
    );
  }
  if (args[2] === "4") {
    console.log('node script.mjs deleteFile "Foldername" "Filename" ');
  }
  if (args[2] === "5") {
    console.log('node script.mjs makeDir "Foldername" "path/"');
  }
  if (args[2] === "6") {
    console.log('node script.mjs delDir "Foldername" "path/"');
  }
  if (args[2] === "7") {
    console.log('node script.mjs readDir "Foldername" "path/"');
  }
  if (args[2] === "8") {
    console.log(
      'node script.mjs renameDir "Old Foldername" "New Foldername" "path/"'
    );
  }
  if (args[2] === "9") {
    process.exit();
  }

  if (args[2] === "readFile") {
    try {
      readFile();
    } catch (err) {
      console.error(err);
    }
  }

  if (args[2] === "createFile") {
    try {
      createFile();
    } catch (err) {
      console.error(err);
    }
    print();
  }

  if (args[2] === "deleteFile") {
    try {
      deleteFile();
    } catch (err) {
      console.error(err);
    }
    print();
  }
  if (args[2] === "updateFile") {
    try {
      updateFile();
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

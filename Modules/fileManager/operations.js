const fs = require("fs");
const process = require("process");
const path = require("path");

let args = process.argv;
let directory = path.dirname(args[1]) + "/";

const read = () => {
  const data = fs.readFileSync(args[3], "utf8");
  console.log(data);
};

const create = () => {
  var str = "";
  for (let index = 5; index < args.length; index++) {
    str = str + " " + args[index];
  }
  fs.writeFileSync(
    directory + args[3] + "/" + args[4],
    str,
    console.log("File is created successfully!")
  );
};
const del = () => {
  fs.unlinkSync(directory + args[3] + "/" + args[4]);
  console.log("File deleted successfully!");
};

const update = () => {
  var str = "";
  for (let index = 5; index < args.length; index++) {
    str = str + " " + args[index];
  }
  fs.writeFileSync(
    directory + args[3] + "/" + args[4],
    str,
    console.log("File is updated successfully!")
  );
};

const createFolder = () => {
  if (!fs.existsSync(directory + args[4] + args[3])) {
    fs.mkdirSync(directory + args[4] + args[3]);
  }
  console.log("Directory is created successfully!");
};

const deleteFolder = () => {
  fs.rmdir(directory + args[4] + args[3], (err) => {
    if (err) {
      throw err;
    }
    console.log(`Directory ${args[3]} is deleted!`);
  });
};

const readFolder = () => {
  console.log("\n The " + args[3] + " directory consists : ");
  console.log(fs.readdirSync(directory + args[4] + args[3]));
};

const renameFolder = () => {
  fs.rename(
    directory + args[5] + args[3],
    directory + args[5] + args[4],
    (err) => {
      if (err) {
        console.error(err);
      }
    }
  );
  console.log("Folder name is updated successfully!");
};

module.exports = {
  read,
  create,
  del,
  update,
  createFolder,
  deleteFolder,
  readFolder,
  renameFolder,
};

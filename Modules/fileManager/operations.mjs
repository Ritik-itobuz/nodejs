import * as fs from "fs";
import process from "process";
import path from "path";
import dir from "console";
import resolve from "path";
let args = process.argv;
let directory = path.dirname(args[1]) + "/";

export const readFile = async () => {
  return new Promise((resolve, reject) => {
    resolve = fs.readFile(args[3], "utf-8", (err, data) => {
      if (err) {
        console.error(err);
        return;
      }
      console.log(data);
    });
  });
};

export const createFile = async () => {
  try {
    let str = "";
    for (let i = 5; i < args.length; i++) {
      str = str + " " + args[i];
    }
    await fs.writeFile(
      directory + args[3] + "/" + args[4],
      str,
      (err, data) => {
        if (err) {
          console.log(err);
        }
        console.log("FILE HAS BEEN CREATED");
      }
    );
  } catch (err) {
    console.log(err);
  }
};

export const deleteFile = async () => {
  return new Promise((resolve, reject) => {
    resolve = fs.unlink(directory + args[3] + "/" + args[4], (err, data) => {
      if (err) {
        console.error(err);
        return;
      }
      console.log("FILE HAS BEEN DELETED");
    });
  });
};

export const updateFile = async () => {
  try {
    let str = "";
    for (let i = 5; i < args.length; i++) {
      str = str + " " + args[i];
    }
    await fs.writeFile(
      directory + args[3] + "/" + args[4],
      str,
      (err, data) => {
        if (err) {
          console.log(err);
        }
        console.log("FILE HAS BEEN UPDATED");
      }
    );
  } catch (err) {
    console.log(err);
  }
};

export const createFolder = async () => {
  return new Promise((resolve, reject) => {
    if (!fs.existsSync(directory + args[4] + args[3])) {
      resolve = fs.mkdir(directory + args[4] + args[3], (err, data) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log("FOLDER HAS BEEN CREATED");
      });
    }
  });
};

export const deleteFolder = async () => {
  return new Promise((resolve, reject) => {
    resolve = fs.rmdir(directory + args[4] + args[3], (err, data) => {
      if (err) {
        console.log(err);
        return;
      }
      console.log("FOLDER HAS BEEN DELETED");
    });
  });
};

export const readFolder = () => {
  console.log("\n The " + args[3] + " directory consists : ");
  console.log(fs.readdirSync(directory + args[4] + args[3]));
};

export const renameFolder = () => {
  fs.rename(
    directory + args[5] + args[3],
    directory + args[5] + args[4],
    (err) => {
      if (err) {
        console.error(err);
      }
    }
  );
  console.log("FOLDER NAME HAS BEEN UPDATED");
};

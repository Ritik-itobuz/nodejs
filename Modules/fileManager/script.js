const fs = require('fs');
const process = require("process");
const path = require("path");

var args = process.argv;
var directory = path.dirname(args[1])+'/'


function print(){
    console.log("");
    console.log('---------------------------------'); 
    console.log('node script.js 1 : READ FILE '); 
    console.log('node script.js 2 : CREATE FILE');
    console.log('node script.js 3 : UPDATE FILE');  
    console.log('node script.js 4 : DELETE FILE'); 
    console.log('node script.js 5 : CREATE FOLDER'); 
    console.log('node script.js 6 : DELETE FOLDER'); 
    console.log('node script.js 7 : READ FOLDER');
    console.log('node script.js 8 : UPDATE FOLDER'); 
    console.log('node script.js 9 : EXIT'); 
    console.log('---------------------------------  \n'); 
}
if (process.argv[2] === undefined) { 
    print()
   }
else { 
    if (args[2] === '1'){
        console.log('node script.js readFile "Filename" ')}
    if (args[2] === '2'){
        console.log('node script.js createFile "Foldername" "Filename" "text that the file will contain" ')}
    if (args[2] === '3'){
        console.log('node script.js updateFile "Foldername" "Filename" "text that will be updated in the file"')}
    if (args[2] === '4'){
        console.log('node script.js deleteFile "Foldername" "Filename" ')}
    if (args[2] === '5'){
        console.log('node script.js makeDir "Foldername" "path/"')}
    if (args[2] === '6'){
        console.log('node script.js delDir "Foldername" "path/"')}
    if (args[2] === '7'){
        console.log('node script.js readDir "Foldername" "path/"')}
    if (args[2] === '8'){
        console.log('node script.js renameDir "Old Foldername" "New Foldername" "path/"')}
    if (args[2] === '9'){
        process.exit()
    }
    
    if (args[2] === 'readFile'){
        try {
            const data = fs.readFileSync(args[3], 'utf8');
            console.log(data);
          } catch (err) {
            console.error(err);
          }
          print()
    }

    if (args[2] === 'createFile'){
        var str=""
        for (let index = 5; index < args.length; index++) {
            str = str + " " + args[index];
        }
        fs.writeFileSync(directory + args[3] + '/' + args[4], str, 
        console.log('File is created successfully!')
        )
        print();
    }

    if (args[2] === 'deleteFile'){
        fs.unlinkSync(directory + args[3] + '/' + args[4]);
        console.log('File deleted successfully!')
        print()
    }
    if (args[2] === 'updateFile'){
        var str=""
        for (let index = 5; index < args.length; index++) {
            str = str + " " + args[index];
        }
        fs.writeFileSync(directory + args[3] + '/' + args[4], str, 
        console.log('File is updated successfully!')
        );
        print()
    }
    if(args[2] === 'makeDir'){
        if (!fs.existsSync(directory + args[4] + args[3])) {
            fs.mkdirSync(directory + args[4] + args[3]);
        }
            console.log('Directory is created successfully!')
            print()
    } 
    if(args[2] === 'delDir'){
        fs.rmdir(directory + args[4] + args[3], err => {
            if (err) {
              throw err;
            }
            console.log(`Directory ${args[3]} is deleted!`);
        });
        print()
    }
    if(args[2] === 'readDir'){
        console.log('\n The '+ args[3] + ' directory consists : ');
        console.log(fs.readdirSync(directory + args[4] + args[3]));
        print()
    }
    if(args[2] === 'renameDir'){
        fs.rename(directory + args[5] + args[3], directory + args[5] + args[4], err => {
            if (err) {
            console.error(err);
            }
        });
        console.log('Folder name is updated successfully!');
        print()
        }
}
    

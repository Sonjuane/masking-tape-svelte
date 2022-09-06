
const path = require('path')
const fs = require('fs');
const { readdirSync } = require('fs');
const directory = path.join('./', 'src', 'lib');

const args = process.argv.slice(2);
//console.log('args:', args, args[0], directory);
console.log('env', process.env.WEB_COMPONENTS); // works

const getFileList = (dirName, filter = '.') => {
    let files = [];
    const items = readdirSync(dirName, { withFileTypes: true });
    let regex = new RegExp(filter, 'gmi')

    for (const item of items) {
        if (item.isDirectory()) {
            files = [...files, ...getFileList(`${dirName}/${item.name}`, filter)];
        } else if (regex.test(item.name)) {
            files.push(`${dirName}/${item.name}`);
        }
    }

    return files;
};
async function buildWebComponents(enable = true) {
    const files = await getFileList(directory, 'svelte');

    // create temp directory
    await fs.mkdir('./.wc-build-temp', (error) => {
        if (error) {
            console.log(error);
        } else {
            console.log("New Directory created successfully !!");
        }
    });

    for (const file of files) {
        let fileName = file.substring(file.lastIndexOf('/') + 1);
        console.log(file)
        console.log(fileName)

        const buffer = await fs.readFileSync("./" + file);
        let fileContent = buffer.toString();

        let replace = '<svelte-disabled:options'
        if (enable) replace = '<svelte:options'

        fileContent = await fileContent.replace(/<svelte(.*)(?<=:options)/gmi, replace)

        // await fs.writeFileSync(`wc-build-temp/${fileName}`, fileContent, function (err) {
        //     if (err) {
        //         return console.log(err);
        //     }
        //     if (enable) console.log(`${file} [SAVED!]`);
        // });


        try {
            //await fs.mkdir('./wc-build-temp')




            await fs.writeFileSync('./.wc-build-temp/' + fileName, fileContent, {
                encoding: "utf8",
                flag: "a+",
                mode: 0o666
            })
        } catch (error) {
            console.log(error);
        }

        // await fs.writeFile(file, fileContent, function (err) {
        //     if (err) {
        //         return console.log(err);
        //     }
        //     if (enable) console.log(`${file} [SAVED!]`);
        // });
    }
}

if (args[0] == 'wc') {
    // ENABLE SVELTE WEB COMPONENTS BY CHANGE <svelet:options tag
    console.log('enabled')
    buildWebComponents(true);
} else {
    // DISABLE SVELTE WEB COMPONENTS BY CHANGING <svelete:options to <svelte-disabled:
    console.log('disabled')
    buildWebComponents(false);
}








const path = require('path')
const fs = require('fs');
const { readdirSync } = require('fs');

// BUILD VARIABLES
const directory = path.join('./', 'src', 'lib'); // Component Source Directory
const wcTempDir = './.wc-build-temp'; // Web Component Temp Directory
const compArray = [];
let buildFileContent = ""
let readMeContent = "# FOLLOWING COMPONENTS WERE CREATED \n\n ```\n"

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
    const regex = /<svelte(.*)(?<=:options)/gmi
    const files = await getFileList(directory, 'svelte');

    // DELETE TEMP DIR IF EXISTS [RESET]
    if (fs.existsSync(wcTempDir)) {
        console.log('temp dir delete')
        await fs.rmdirSync(wcTempDir, { recursive: true })
    }
    // CREATE BUILD TEMP DIRECTORY
    await fs.mkdir(wcTempDir, (error) => {
        if (error) {
            console.log(error);
        } else {
            console.log("Temp Directory created successfully !!");
        }
    });
    // LOOP THROUGH FILES IN COMPONENT SOURCE DIRECTORY
    for (const file of files) {
        let fileName = file.substring(file.lastIndexOf('/') + 1);
        let compName = fileName.replace('.svelte', '');

        buildFileContent += `import ${compName} from "./${fileName}";\n`
        // console.log(file)
        // console.log(fileName)
        const buffer = await fs.readFileSync("./" + file);
        let fileContent = buffer.toString();

        let replace = '<svelte-disabled:options'
        if (enable) replace = '<svelte:options'

        if (fileContent.search(regex) != -1) {
            // replace disabled <svelte:options /> tag
            const compRegex = /(?<=:options[\s]tag=")(.*?)(?=")/gm;
            fileContent = await fileContent.replace(regex, replace)
            let _compName = fileContent.match(compRegex)[0]
            readMeContent += `- <${_compName}></${_compName}>\n`;

        } else {
            // create <svelte:options /> tag
            let dashCase = compName.replace(/[A-Z]/g, m => "-" + m.toLowerCase()).replace(/^-/, '');
            fileContent = `<svelte:options tag="${dashCase}" />` + fileContent;
            readMeContent += `- <${dashCase}></${dashCase}>\n`;
        }

        // SAVE COMPONENT
        try {
            await fs.writeFileSync(`${wcTempDir}/${fileName}`, fileContent, {
                encoding: "utf8",
                flag: "a+",
                mode: 0o666
            })
        } catch (error) {
            console.log(error);
        }
    }
    // CREATE BUILD FILE
    try {
        await fs.writeFileSync(`${wcTempDir}/build.wc.js`, buildFileContent, {
            encoding: "utf8",
            flag: "a+",
            mode: 0o666
        })
    } catch (error) {
        console.log(error);
    }
    // CREATE ReadMe.md FILE
    try {
        readMeContent += "```"
        await fs.writeFileSync(`${wcTempDir}/README.md`, readMeContent, {
            encoding: "utf8",
            flag: "a+",
            mode: 0o666
        })
    } catch (error) {
        console.log(error);
    }
};

buildWebComponents(true);
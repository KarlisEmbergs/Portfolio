// ** CREATES A FOLDER WITH CONNECTED HTML, CSS AND JS FILES **
// ** RUN IN NODE **
const fs = require('fs')
const folderName = process.argv[2] || 'Boilerplate'

try {
    fs.mkdirSync(folderName);
    fs.writeFileSync(`${folderName}/index.html`, `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="app.css">
    <title>Document</title>
</head>

<body>

    <script src="app.js"></script>
</body>

</html>`)
    fs.writeFileSync(`${folderName}/app.js`, '')
    fs.writeFileSync(`${folderName}/app.css`, '')
    console.log('** DONE **')
} catch (e) {
    console.log('** ERROR **');
    console.log(e)
}

function Read(fs,filePath){
    fs.readFile(filePath, 'utf8', (err, content) => {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }
    console.log('File content:', content);
    });
}
module.exports = Read;

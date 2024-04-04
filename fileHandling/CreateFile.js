
function Create(fs,filePath){
const data1="hello this is Amit. I am a student at chandigarh university";
fs.writeFile(filePath, data1, (err) => {
    if (err) {
        console.error('Error creating file:', err);
        return;
    }
    console.log('File created successfully.');
});
}
module.exports = CreateFile;

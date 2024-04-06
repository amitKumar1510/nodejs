
function Update(fs,filePath){
const upd='\n and I want to be an MERN stack developer.';
    fs.appendFile(filePath, upd , (err) => {
    if (err) {
        console.error('Error appending to file:', err);
        return;
    }
    console.log('File updated successfully.');
    });
}
module.exports = Update;

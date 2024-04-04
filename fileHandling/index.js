const fs = require('fs');
const Create = require('./CreateFile');
const Read = require('./Read');
const Update = require('./Update');
const Delete = require('./Delete');

const filePath = 'demofile.txt';

Create(fs,filePath);
Update(fs,filePath);
Read(fs,filePath);
Delete(fs,filePath);


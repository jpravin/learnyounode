var fs = require("fs");
var buf = fs.readFileSync(process.argv[2]);
var file = buf.toString();
var len = file.split('\n').length;
if(len > 0) {
	len =  len - 1;
}else {
	len = 0;
}
console.log(len);

var fs = require('fs');
var path = require('path');
module.exports = function filterFilesinDirByExt(pathDir, ext, callback){
	fs.readdir( pathDir, function (err, data){
		if(err){
			callback(err)
		}else{
        		data = data.filter(function(d){
                		return (path.extname(d) === ('.'+ ext))
                	});
			callback(null, data);
		}
});
}

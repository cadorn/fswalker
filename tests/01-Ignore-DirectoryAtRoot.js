
const PATH = require("path");
const FSWALKER = require("..");


var path = __filename.replace(/\.js$/, "/fixture");

var walker = new FSWALKER.Walker(path);
return walker.walk({
    returnIgnoredFiles: false,
    returnIgnoredFilesInPaths: false,
    includeDependencies: false,
    respectDistignore: true,
    respectNestedIgnore: true,
    respectGitignore: true,
    excludeMtime: false
}, function (err, paths, summary) {
    if (err)  {
        throw err;
    }

console.log("paths", paths);
console.log("summary", summary);

    return null;
});

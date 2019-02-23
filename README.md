fswalker
========

Usage
-----

```
var walker = new FSWALKER.Walker(sourcePath);
var opts = {
    ignore: [
        "/node_modules/"
    ],
    returnIgnoredFiles: false,
    returnIgnoredFilesInPaths: false,
    includeDependencies: false,
    respectDistignore: true,
    respectNestedIgnore: true,
    respectGitignore: true,
    excludeMtime: false
};
return walker.walk(opts, function (err, paths, summary) {
    if (err) throw err;

    console.log("paths", sourcePath, paths);
    console.log("summary", summary);
});
```

# `_.map()` vs `[].map()`
It is a resource comparation between `_.map()` and `[].map()`, by headling an json with 10,000 data

## Generating json file with 10,000 data
```
$ node gen
```

## Run test
```
$ node vs
// name           for.js         _.js
// -------------  -------------  ------------
// diffRAM        724            6076
// diffHeapTotal  0              3152
// diffHeapUsed   834.4140625    3647.6796875
// diffExternal   97.6572265625  0
// diffCPU        4.349          24.695
// diffTime       5              24
//
```

## Remark 
`_.map()` uses heavy resource 
 - CPU(6x)
 - RAM(8.5x)
 - time(5x)
 
 to handle the same amount of data than ES6 `[...].map()`
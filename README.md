# `_.map()` vs `[].map()`
It is a resource comparation between `_.map()` and `[].map()`, by headling an json with 10,000 data

## Generating json file with 30,000 objects array
```
$ node gen
```

## Run test
```
$ node vs
// name           for.js        _.js
// -------------  ------------  ----------
// diffRAM        7480          8748
// diffHeapTotal  4176          5712
// diffHeapUsed   5597.4609375  6089.78125
// diffExternal   820.15625     820.15625
// diffCPU        27.681        29.031
// diffTime       28            29
// 
```

## Remark 
`_.map()` uses tiny bit more resource 
 - CPU(4%)
 - RAM(14%)
 - time(same)

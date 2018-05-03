(async function(){
    const cTable = require('console.table')
    const pMg = require('./lib/processManager')
        
    const fileA = 'for.js'
    const fileB = '_.js'
    
    await pMg.execPromise(`node meter ${fileA}`)
    await pMg.execPromise(`node meter ${fileB}`)
    
    const reportA = require('./report/'+fileA+'.json')
    const reportB = require('./report/'+fileB+'.json')
    
    const finalReport = []
    Object.entries(reportA).forEach(([key, val])=>{
        const row = {
            name: key,
            [fileA]: reportA[key],
            [fileB]: reportB[key]
        }
        finalReport.push(row)
    })
    console.table(finalReport)
})()
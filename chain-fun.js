const flow = await Functions.makeHttpRequest({ 
    // API Docs: https://docs.coincap.io/#ee30bea9-bb6b-469d-958a-d3e35d442d7a
    url: `http://localhost:3000/api/chainfun`,
    // "Flow-API-Key": `${secrets.flowKey}`,
    method: "POST",
    headers: {
    "Content-Type": "application/json",
    },
    data: {
        "method": "trigger_flow",
        "args": args,
        "key": `${secrets.flowKey}`
},}
)

// const flow = await Functions.makeHttpRequest({ 
//     // API Docs: https://docs.coincap.io/#ee30bea9-bb6b-469d-958a-d3e35d442d7a
//     url: `https://flow.hydragpt.xyz/api/chainfun`,
//     "Flow-API-Key": `${secrets.flowKey}`,
//     method: "POST",
//     headers: {
//     "Content-Type": "application/json",
//     },
//     data: {
//         "method": "trigger_flow",
//         "args": args,
// },}
// )

const resp = await flow

console.log(resp)
// console.log("ARGS", args)
return Functions.encodeString(resp.status.toString()+"|"+resp.data.args[0].toString())
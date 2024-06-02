const flow = await Functions.makeHttpRequest({ 
    // url: `https://flow.hydragpt.xyz/api/chainfun`,
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


const resp = await flow

console.log("CHAINFUN")
console.log(resp)

// && resp.data.message === "flow completed"
// console.log("ARGS", args)
if (resp.status != 200 ) {
    return "Error Occured",resp
}
else{
    return Functions.encodeString(resp.status.toString()+"|"+resp.data.message.toString())
}
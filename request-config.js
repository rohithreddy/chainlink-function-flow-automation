const fs = require("fs")
const { Location, ReturnType, CodeLanguage } = require("@chainlink/functions-toolkit")

// configures request: via settings in the fields below
const requestConfig = {

    // source code location (inline only)
    codeLocation: Location.Inline,
    
    // (optional) if secrets are expected in the sourceLocation of secrets (only Remote or DONHosted is supported)
    secretsLocation: Location.DONHosted,
    
    // source code to be executed
    source: fs.readFileSync("./chain-fun.js").toString(),

    // (optional) accessed within the source code with `secrets.varName` (ie: secrets.apiKey), must be a string.
    secrets: { 
        flowKey: process.env.FLOW_KEY
    },

    // args (array[""]): source code accesses via `args[index]`.
    args: [
        "gkoh471v79v6er1qt1ct73a7y",
        "10810810899112287108108108108",
        "Crash + null + void + matter + flow + 108 + 144 + 99"
        // flow id             [0]
        // "data:[1,2,4]",               // interval             [1]
        // "6",                // precision            [2]
        // "naive",            // forecast method      [3]
        // "30",               // historical days      [4]
    ],

    // code language (JavaScript only)
    codeLanguage: CodeLanguage.JavaScript,

    // shows: expected type of the returned value.
    expectedReturnType: ReturnType.string,
}

module.exports = requestConfig
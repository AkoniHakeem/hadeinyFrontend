/* 
 * Manges the environments variable
*/

//  Dependencies
const config = {}

config.environments = {
    "development" : {
        backendUrl: process.env.backendUrl || "http://localhost:3001"
    },
    "staging" : {
        backendUrl: process.env.backendUrl || "http://localhost:3001"
    },
    "production" : { // We should set the https port always here
        backendUrl: process.env.Hadeiny_BackendUrl
    }
}

const envName = process.env.NODE_ENV? process.env.NODE_ENV.trim().toLocaleLowerCase() : "staging";
const environment = typeof(config.environments[envName]) == "object"? config.environments[envName] : config.environments.staging ;

module.exports = environment   
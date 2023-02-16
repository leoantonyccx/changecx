"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var server_1 = require("@apollo/server");
var standalone_1 = require("@apollo/server/standalone");
var dotenv_1 = __importDefault(require("dotenv"));
var schema_1 = require("./src/schema");
dotenv_1["default"].config();
var apolloServer = new server_1.ApolloServer({
    schema: schema_1.schema
});
var port = process.env.PORT || 4000;
(0, standalone_1.startStandaloneServer)(apolloServer, {
    listen: { port: port }
}).then(function (engine) { return console.log("Server ready at: ".concat(engine === null || engine === void 0 ? void 0 : engine.url)); });
//# sourceMappingURL=index.js.map
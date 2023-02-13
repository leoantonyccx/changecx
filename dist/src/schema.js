"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
exports.__esModule = true;
exports.schema = exports.DateTime = void 0;
var nexus_1 = require("nexus");
var path_1 = require("path");
var types = __importStar(require("./graphql/types"));
var graphql_iso_date_1 = require("graphql-iso-date");
exports.DateTime = graphql_iso_date_1.GraphQLDateTime;
exports.schema = (0, nexus_1.makeSchema)({
    types: [types, exports.DateTime],
    outputs: {
        typegen: (0, path_1.join)(__dirname, "./graphql", "nexus-typegen.ts"),
        schema: (0, path_1.join)(__dirname, "./graphql", "schema.graphql")
    }
});
//# sourceMappingURL=schema.js.map
"use strict";
exports.__esModule = true;
exports.prismaErr = void 0;
var runtime_1 = require("@prisma/client/runtime");
var prismaErr = function (err) {
    if (err instanceof runtime_1.PrismaClientKnownRequestError) {
        throw new Error(err.message);
    }
    if (err instanceof runtime_1.PrismaClientUnknownRequestError) {
        throw new Error(err.message);
    }
    return Promise.reject("Invalid Connection");
};
exports.prismaErr = prismaErr;
//# sourceMappingURL=prismaError.js.map
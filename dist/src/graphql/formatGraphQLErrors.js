"use strict";
exports.__esModule = true;
var formatGraphQLErrors = function (error) {
    var _a, _b;
    // @ts-ignore
    var errorDetails = (_b = (_a = error.originalError) === null || _a === void 0 ? void 0 : _a.response) === null || _b === void 0 ? void 0 : _b.data;
    try {
        if (errorDetails)
            return errorDetails;
    }
    catch (e) { }
    if (error.message)
        return error.message;
    return null;
};
exports["default"] = formatGraphQLErrors;
//# sourceMappingURL=formatGraphQLErrors.js.map
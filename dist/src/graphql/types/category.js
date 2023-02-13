"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.searchCategory = exports.deleteCategory = exports.editCategory = exports.addCategory = exports.getCategory = exports.allCategories = exports.Categories = void 0;
var nexus_1 = require("nexus");
var prismaError_1 = require("../prismaError");
var client_1 = require("@prisma/client");
var prisma = new client_1.PrismaClient();
exports.Categories = (0, nexus_1.objectType)({
    name: "Categories",
    definition: function (t) {
        t.string("id");
        t.string("name");
        t.list.field("skills", { type: "CategoriesOnSkills" });
        t.field("createdAt", { type: "DateTime" });
        t.field("updatedAt", { type: "DateTime" });
    }
});
exports.allCategories = (0, nexus_1.extendType)({
    type: "Query",
    definition: function (t) {
        t.list.field("categories", {
            type: "Categories",
            resolve: function (_root, args) {
                return __awaiter(this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, prisma.categories.findMany({
                                    include: {
                                        skills: {
                                            include: {
                                                category: true,
                                                skill: true,
                                                employeeSkills: {
                                                    include: {
                                                        certificate: true,
                                                        employee: true,
                                                        skill: {
                                                            include: {
                                                                category: true,
                                                                skill: true
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                })];
                            case 1: return [2 /*return*/, _a.sent()];
                        }
                    });
                });
            }
        });
    }
});
exports.getCategory = (0, nexus_1.extendType)({
    type: "Query",
    definition: function (t) {
        t.field("category", {
            type: "Categories",
            args: {
                id: (0, nexus_1.nonNull)((0, nexus_1.stringArg)())
            },
            resolve: function (_root, args) {
                return __awaiter(this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, prisma.categories
                                    .findUnique({
                                    where: {
                                        id: args.id
                                    },
                                    include: {
                                        skills: {
                                            include: {
                                                category: true,
                                                skill: true,
                                                employeeSkills: {
                                                    include: {
                                                        certificate: true,
                                                        employee: true,
                                                        skill: {
                                                            include: {
                                                                category: true,
                                                                skill: true
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                })["catch"](prismaError_1.prismaErr)];
                            case 1: return [2 /*return*/, _a.sent()];
                        }
                    });
                });
            }
        });
    }
});
exports.addCategory = (0, nexus_1.extendType)({
    type: "Mutation",
    definition: function (t) {
        t.list.field("addCategory", {
            type: "Categories",
            args: {
                id: (0, nexus_1.stringArg)(),
                name: (0, nexus_1.nonNull)((0, nexus_1.stringArg)())
            },
            resolve: function (_root, args) {
                var _a;
                return __awaiter(this, void 0, void 0, function () {
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0: return [4 /*yield*/, prisma.categories
                                    .upsert({
                                    where: {
                                        id: (_a = args.id) !== null && _a !== void 0 ? _a : ""
                                    },
                                    update: {
                                        name: args.name
                                    },
                                    create: {
                                        name: args.name
                                    }
                                })["catch"](prismaError_1.prismaErr)];
                            case 1:
                                _b.sent();
                                return [4 /*yield*/, prisma.categories.findMany({
                                        include: {
                                            skills: {
                                                include: {
                                                    category: true,
                                                    skill: true,
                                                    employeeSkills: {
                                                        include: {
                                                            certificate: true,
                                                            employee: true,
                                                            skill: {
                                                                include: {
                                                                    category: true,
                                                                    skill: true
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    })];
                            case 2: return [2 /*return*/, _b.sent()];
                        }
                    });
                });
            }
        });
    }
});
exports.editCategory = (0, nexus_1.extendType)({
    type: "Mutation",
    definition: function (t) {
        t.field("editCategory", {
            type: "Categories",
            args: {
                id: (0, nexus_1.nonNull)((0, nexus_1.stringArg)()),
                name: (0, nexus_1.stringArg)()
            },
            resolve: function (_root, args) {
                var _a, _b;
                return __awaiter(this, void 0, void 0, function () {
                    return __generator(this, function (_c) {
                        switch (_c.label) {
                            case 0: return [4 /*yield*/, prisma.categories
                                    .update({
                                    where: {
                                        id: (_a = args.id) !== null && _a !== void 0 ? _a : ""
                                    },
                                    data: {
                                        name: (_b = args.name) !== null && _b !== void 0 ? _b : ""
                                    }
                                })["catch"](prismaError_1.prismaErr)];
                            case 1: return [2 /*return*/, _c.sent()];
                        }
                    });
                });
            }
        });
    }
});
exports.deleteCategory = (0, nexus_1.extendType)({
    type: "Mutation",
    definition: function (t) {
        t.list.field("deleteCategory", {
            type: "Categories",
            args: {
                id: (0, nexus_1.nonNull)((0, nexus_1.stringArg)())
            },
            resolve: function (_root, args) {
                return __awaiter(this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, prisma.categories["delete"]({
                                    where: {
                                        id: args.id
                                    }
                                })["catch"](prismaError_1.prismaErr)];
                            case 1:
                                _a.sent();
                                return [4 /*yield*/, prisma.categories.findMany({
                                        include: {
                                            skills: {
                                                include: {
                                                    category: true,
                                                    skill: true,
                                                    employeeSkills: {
                                                        include: {
                                                            certificate: true,
                                                            employee: true,
                                                            skill: {
                                                                include: {
                                                                    category: true,
                                                                    skill: true
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    })];
                            case 2: return [2 /*return*/, _a.sent()];
                        }
                    });
                });
            }
        });
    }
});
exports.searchCategory = (0, nexus_1.extendType)({
    type: "Query",
    definition: function (t) {
        t.list.field("searchCategory", {
            type: "Categories",
            args: {
                word: (0, nexus_1.nonNull)((0, nexus_1.stringArg)())
            },
            resolve: function (_root, args) {
                return __awaiter(this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, prisma.categories
                                    .findMany({
                                    where: {
                                        name: {
                                            contains: args.word,
                                            mode: "insensitive"
                                        }
                                    },
                                    include: {
                                        skills: {
                                            include: {
                                                category: true,
                                                skill: true,
                                                employeeSkills: {
                                                    include: {
                                                        certificate: true,
                                                        employee: true,
                                                        skill: {
                                                            include: {
                                                                category: true,
                                                                skill: true
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                })["catch"](prismaError_1.prismaErr)];
                            case 1: return [2 /*return*/, _a.sent()];
                        }
                    });
                });
            }
        });
    }
});
//# sourceMappingURL=category.js.map
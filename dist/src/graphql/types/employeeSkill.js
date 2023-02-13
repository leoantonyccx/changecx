"use strict";
exports.__esModule = true;
exports.EmployeeSkills = void 0;
var nexus_1 = require("nexus");
var client_1 = require("@prisma/client");
var prisma = new client_1.PrismaClient();
exports.EmployeeSkills = (0, nexus_1.objectType)({
    name: "EmployeeSkills",
    definition: function (t) {
        t.string("id");
        t.field("employee", { type: "Employee" });
        t.string("employeeId");
        t.field("skill", { type: "CategoriesOnSkills" });
        t.string("skillId");
        t.field("certificate", { type: "Certificates" });
        t.string("level");
        t.list.string("updateLog");
        t.field("createdAt", { type: "DateTime" });
        t.field("updatedAt", { type: "DateTime" });
    }
});
var LEVEL;
(function (LEVEL) {
    LEVEL[LEVEL["MINIMAL"] = 0] = "MINIMAL";
    LEVEL[LEVEL["BASIC"] = 1] = "BASIC";
    LEVEL[LEVEL["INTERMEDIATE"] = 2] = "INTERMEDIATE";
    LEVEL[LEVEL["ADVANCED"] = 3] = "ADVANCED";
})(LEVEL || (LEVEL = {}));
// export const allEmployeeSkills = extendType({
//   type: "Query",
//   definition(t) {
//     t.list.field("employeeSkills", {
//       type: "EmployeeSkills",
//       async resolve(_root, args) {
//         return await prisma.employeeSkills.findMany({
//           include: {
//             certificate: true,
//             skill: {
//               include: {
//                 skill: true,
//                 category: true,
//               },
//             },
//           },
//         });
//       },
//     });
//   },
// });
// export const getEmployeeSkills = extendType({
//   type: "Query",
//   definition(t) {
//     t.list.field("employeeSkill", {
//       type: "EmployeeSkills",
//       args: {
//         employeeId: nonNull(stringArg()),
//       },
//       async resolve(_root, args) {
//         return await prisma.employeeSkills.findMany({
//           where: {
//             employeeId: args.employeeId,
//           },
//           include: {
//             certificate: true,
//             skill: {
//               include: {
//                 skill: true,
//                 category: true,
//               },
//             },
//             employee: true,
//           },
//         });
//       },
//     });
//   },
// });
// export const addEmployeeSkill = extendType({
//   type: "Mutation",
//   definition(t) {
//     t.field("addEmployeeSkill", {
//       type: "Employee",
//       args: {
//         employeeId: nonNull(stringArg()),
//         coskillId: nonNull(stringArg()),
//         level: nonNull(stringArg()),
//       },
//       async resolve(_root, args) {
//         // let existingSkill = await prisma.employeeSkills
//         //   .findFirstOrThrow({
//         //     where: {
//         //       skillId: args.coskillId,
//         //     },
//         //   })
//         //   .catch(prismaErr);
//         // if (existingSkill == null) {
//         let es = await prisma.employeeSkills
//           .create({
//             data: {
//               employeeId: args.employeeId,
//               skillId: args.coskillId,
//               level: args.level,
//             },
//           })
//           .catch(prismaErr);
//         return await prisma.employee
//           .findUniqueOrThrow({
//             where: {
//               id: args.employeeId,
//             },
//             include: {
//               employeeSkills: {
//                 include: {
//                   certificate: true,
//                   skill: {
//                     include: {
//                       skill: true,
//                       category: true,
//                     },
//                   },
//                 },
//               },
//             },
//           })
//           .catch(prismaErr);
//         // }
//       },
//     });
//   },
// });
// export const deleteEmployeeSkills = extendType({
//   type: "Mutation",
//   definition(t) {
//     t.field("deleteEmployeeSkill", {
//       type: "Employee",
//       args: {
//         employeeId: nonNull(stringArg()),
//         eskillId: nonNull(stringArg()),
//       },
//       async resolve(_root, args) {
//         await prisma.employeeSkills
//           .delete({
//             where: {
//               id: args.eskillId,
//             },
//           })
//           .catch(prismaErr);
//         return await prisma.employee
//           .findUniqueOrThrow({
//             where: {
//               id: args.employeeId,
//             },
//             include: {
//               employeeSkills: {
//                 include: {
//                   certificate: true,
//                   skill: {
//                     include: {
//                       skill: true,
//                       category: true,
//                     },
//                   },
//                 },
//               },
//             },
//           })
//           .catch(prismaErr);
//       },
//     });
//   },
// });
//# sourceMappingURL=employeeSkill.js.map
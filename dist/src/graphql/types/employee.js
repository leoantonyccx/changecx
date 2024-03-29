"use strict";
exports.__esModule = true;
exports.Employee = void 0;
var nexus_1 = require("nexus");
var client_1 = require("@prisma/client");
var prisma = new client_1.PrismaClient();
exports.Employee = (0, nexus_1.objectType)({
    name: "Employee",
    definition: function (t) {
        t.string("id");
        t.string("name");
        t.string("email");
        t.string("photo");
        t.string("role");
        t.boolean("isManager");
        t.list.field("employeeSkills", { type: "EmployeeSkills" });
        t.string("accessToken");
        t.field("createdAt", { type: "DateTime" });
        t.field("updatedAt", { type: "DateTime" });
        t.string("displayName");
        t.string("jobTitle");
        t.string("mobileNumber");
        t.string("department");
        t.string("location");
        t.string("division");
        t.string("manager");
    }
});
// export const allEmployees = extendType({
//   type: "Query",
//   definition(t) {
//     t.list.field("employees", {
//       type: "Employee",
//       async resolve(_root, args, ctx) {
//         return await prisma.employee.findMany({
//           include: {
//             employeeSkills: {
//               include: {
//                 certificate: true,
//                 skill: {
//                   include: {
//                     category: true,
//                     skill: true,
//                   },
//                 },
//               },
//             },
//           },
//         });
//       },
//     });
//   },
// });
// export const searchEmployee = extendType({
//   type: "Query",
//   definition(t) {
//     t.list.field("searchEmployee", {
//       type: "Employee",
//       args: {
//         word: nonNull(stringArg()),
//       },
//       async resolve(_root, args, ctx) {
//         return await prisma.employee.findMany({
//           where: {
//             OR: [
//               {
//                 email: {
//                   contains: args.word,
//                   mode: "insensitive",
//                 },
//                 name: {
//                   contains: args.word,
//                   mode: "insensitive",
//                 },
//               },
//             ],
//           },
//           include: {
//             employeeSkills: {
//               include: {
//                 certificate: true,
//                 skill: {
//                   include: {
//                     category: true,
//                     skill: true,
//                   },
//                 },
//               },
//             },
//           },
//         });
//       },
//     });
//   },
// });
// export const searchEmployeeBySkill = extendType({
//   type: "Query",
//   definition(t) {
//     t.list.field("searchEmployeeBySkill", {
//       type: "Employee",
//       args: {
//         word: nonNull(stringArg()),
//       },
//       async resolve(_root, args) {
//         return await prisma.employee.findMany({
//           where: {
//             employeeSkills: {
//               some: {
//                 skill: {
//                   skill: {
//                     name: {
//                       contains: args.word,
//                       mode: "insensitive",
//                     },
//                   },
//                 },
//               },
//             },
//           },
//           include: {
//             employeeSkills: {
//               include: {
//                 certificate: true,
//                 skill: {
//                   include: {
//                     category: true,
//                     skill: true,
//                   },
//                 },
//               },
//             },
//           },
//         });
//       },
//     });
//   },
// });
// export const searchEmployeeByCategory = extendType({
//   type: "Query",
//   definition(t) {
//     t.list.field("searchEmployeeByCategory", {
//       type: "Employee",
//       args: {
//         word: nonNull(stringArg()),
//       },
//       async resolve(_root, args) {
//         return await prisma.employee.findMany({
//           where: {
//             employeeSkills: {
//               some: {
//                 skill: {
//                   category: {
//                     name: {
//                       contains: args.word,
//                       mode: "insensitive",
//                     },
//                   },
//                 },
//               },
//             },
//           },
//           include: {
//             employeeSkills: {
//               include: {
//                 certificate: true,
//                 skill: {
//                   include: {
//                     category: true,
//                     skill: true,
//                   },
//                 },
//               },
//             },
//           },
//         });
//       },
//     });
//   },
// });
// export const getEmployee = extendType({
//   type: "Query",
//   definition(t) {
//     t.field("employee", {
//       type: "Employee",
//       args: {
//         email: nonNull(stringArg()),
//       },
//       async resolve(_root, args, ctx) {
//         return await prisma.employee
//           .findUnique({
//             where: {
//               email: args.email,
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
// export const employeeLogin = extendType({
//   type: "Mutation",
//   definition(t) {
//     t.field("employeeLogin", {
//       type: "Employee",
//       args: {
//         email: nonNull(stringArg()),
//         password: nonNull(stringArg()),
//       },
//       async resolve(_root, args, ctx) {
//         const dbEmployee = await prisma.employee
//           .findFirst({
//             where: {
//               AND: {
//                 email: args.email,
//                 password: args.password,
//               },
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
//         // const pwVerify = await bcrypt.compare(args.password, employee.password);
//         if (dbEmployee) {
//           const { data } = await axios.get(
//             "https://44d4dec71a54a30986f0ea0a5ddf944ae84a58ec:x@api.bamboohr.com/api/gateway.php/changecx/v1/employees/directory"
//           );
//           const options = {
//             ignoreAttributes: true,
//           };
//           const parser = new XMLParser(options);
//           let employees = parser.parse(data);
//           let existingEmployee =
//             employees?.directory?.employees?.employee?.find(
//               (e: any) => e?.field[6] === args.email
//             );
//           if (existingEmployee) {
//             const accessToken = jwt.sign(
//               { email: args.email },
//               process.env.SECRET_TOKEN as string,
//               { expiresIn: "10m" }
//             );
//             let employee = {
//               ...dbEmployee,
//               displayName: existingEmployee?.field[0],
//               jobTitle: existingEmployee?.field[4],
//               mobileNumber: existingEmployee?.field[5],
//               department: existingEmployee?.field[7],
//               location: existingEmployee?.field[8],
//               division: existingEmployee?.field[9],
//               manager: existingEmployee?.field[12],
//               photo: existingEmployee?.field[14],
//             };
//             return {
//               ...employee,
//               accessToken,
//             };
//           }
//           // else return "Invalid Credentials";
//         }
//         return {};
//       },
//     });
//   },
// });
// export const addEmployee = extendType({
//   type: "Mutation",
//   definition(t) {
//     t.field("addEmployee", {
//       type: "Employee",
//       args: {
//         name: nonNull(stringArg()),
//         email: nonNull(stringArg()),
//         password: nonNull(stringArg()),
//         photo: stringArg(),
//         role: stringArg(),
//         isManager: booleanArg(),
//       },
//       async resolve(_root, args, ctx) {
//         const existingEmployee = await prisma.employee.findUnique({
//           where: {
//             email: args.email,
//           },
//         });
//         if (!existingEmployee) {
//           // const salt = await bcrypt.genSalt(10);
//           // const hash = await bcrypt.hash(args.password, salt);
//           const dbEmployee = await prisma.employee
//             .create({
//               data: {
//                 name: args.name,
//                 email: args.email,
//                 password: args.password,
//                 photo: args.photo,
//                 role: args.role,
//                 isManager: args.isManager ?? false,
//               },
//               include: {
//                 employeeSkills: {
//                   include: {
//                     certificate: true,
//                     skill: {
//                       include: {
//                         skill: true,
//                         category: true,
//                       },
//                     },
//                   },
//                 },
//               },
//             })
//             .catch(prismaErr);
//           if (dbEmployee) {
//             const { data } = await axios.get(
//               "https://44d4dec71a54a30986f0ea0a5ddf944ae84a58ec:x@api.bamboohr.com/api/gateway.php/changecx/v1/employees/directory"
//             );
//             const options = {
//               ignoreAttributes: true,
//             };
//             const parser = new XMLParser(options);
//             let employees = parser.parse(data);
//             let existingEmployee =
//               employees?.directory?.employees?.employee?.find(
//                 (e: any) => e?.field[6] === args.email
//               );
//             if (existingEmployee) {
//               const accessToken = jwt.sign(
//                 { email: args.email },
//                 process.env.SECRET_TOKEN as string,
//                 { expiresIn: "10m" }
//               );
//               let employee = {
//                 ...dbEmployee,
//                 displayName: existingEmployee?.field[0],
//                 jobTitle: existingEmployee?.field[4],
//                 mobileNumber: existingEmployee?.field[5],
//                 department: existingEmployee?.field[7],
//                 location: existingEmployee?.field[8],
//                 division: existingEmployee?.field[9],
//                 manager: existingEmployee?.field[12],
//                 photo: existingEmployee?.field[14],
//               };
//               return {
//                 ...employee,
//                 accessToken,
//               };
//             }
//             // else return "Invalid Credentials";
//           }
//         }
//         return {};
//       },
//     });
//   },
// });
// export const editEmployee = extendType({
//   type: "Mutation",
//   definition(t) {
//     t.field("editEmployee", {
//       type: "Employee",
//       args: {
//         id: nonNull(stringArg()),
//         name: stringArg(),
//         email: nonNull(stringArg()),
//         password: stringArg(),
//         photo: stringArg(),
//         role: stringArg(),
//         isManager: stringArg(),
//       },
//       async resolve(_root, args: any, ctx) {
//         const { id, ...data } = args;
//         await prisma.employee
//           .update({
//             where: {
//               id: args.id,
//             },
//             data: data,
//           })
//           .catch(prismaErr);
//         return await prisma.employee
//           .findUnique({
//             where: {
//               id: args.id,
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
// export const deleteEmployee = extendType({
//   type: "Mutation",
//   definition(t) {
//     t.field("deleteEmployee", {
//       type: "Employee",
//       args: {
//         id: nonNull(stringArg()),
//       },
//       async resolve(_root, args, ctx) {
//         return await prisma.employee
//           .delete({
//             where: {
//               id: args.id,
//             },
//           })
//           .catch(prismaErr);
//       },
//     });
//   },
// });
//# sourceMappingURL=employee.js.map
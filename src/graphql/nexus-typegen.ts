/**
 * This file was generated by Nexus Schema
 * Do not make changes to this file directly
 */







declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
}

export interface NexusGenEnums {
}

export interface NexusGenScalars {
  String: string
  Int: number
  Float: number
  Boolean: boolean
  ID: string
  DateTime: any
}

export interface NexusGenObjects {
  Categories: { // root type
    createdAt?: NexusGenScalars['DateTime'] | null; // DateTime
    id?: string | null; // String
    name?: string | null; // String
    skills?: Array<NexusGenRootTypes['CategoriesOnSkills'] | null> | null; // [CategoriesOnSkills]
    updatedAt?: NexusGenScalars['DateTime'] | null; // DateTime
  }
  CategoriesOnSkills: { // root type
    category?: NexusGenRootTypes['Categories'] | null; // Categories
    categoryId?: string | null; // String
    createdAt?: NexusGenScalars['DateTime'] | null; // DateTime
    employeeSkills?: Array<NexusGenRootTypes['EmployeeSkills'] | null> | null; // [EmployeeSkills]
    id?: string | null; // String
    skill?: NexusGenRootTypes['Skills'] | null; // Skills
    skillId?: string | null; // String
    updatedAt?: NexusGenScalars['DateTime'] | null; // DateTime
  }
  Certificates: { // root type
    createdAt?: NexusGenScalars['DateTime'] | null; // DateTime
    employeeSkill?: NexusGenRootTypes['EmployeeSkills'] | null; // EmployeeSkills
    employeeSkillId?: string | null; // String
    expiry?: string | null; // String
    id?: string | null; // String
    name?: string | null; // String
    photo?: string | null; // String
    publisher?: NexusGenRootTypes['Publishers'] | null; // Publishers
    publisherId?: string | null; // String
    updatedAt?: NexusGenScalars['DateTime'] | null; // DateTime
  }
  Employee: { // root type
    accessToken?: string | null; // String
    createdAt?: NexusGenScalars['DateTime'] | null; // DateTime
    department?: string | null; // String
    displayName?: string | null; // String
    division?: string | null; // String
    email?: string | null; // String
    employeeSkills?: Array<NexusGenRootTypes['EmployeeSkills'] | null> | null; // [EmployeeSkills]
    id?: string | null; // String
    isManager?: boolean | null; // Boolean
    jobTitle?: string | null; // String
    location?: string | null; // String
    manager?: string | null; // String
    mobileNumber?: string | null; // String
    name?: string | null; // String
    photo?: string | null; // String
    role?: string | null; // String
    updatedAt?: NexusGenScalars['DateTime'] | null; // DateTime
  }
  EmployeeSkills: { // root type
    certificate?: NexusGenRootTypes['Certificates'] | null; // Certificates
    createdAt?: NexusGenScalars['DateTime'] | null; // DateTime
    employee?: NexusGenRootTypes['Employee'] | null; // Employee
    employeeId?: string | null; // String
    id?: string | null; // String
    level?: string | null; // String
    skill?: NexusGenRootTypes['CategoriesOnSkills'] | null; // CategoriesOnSkills
    skillId?: string | null; // String
    updateLog?: Array<string | null> | null; // [String]
    updatedAt?: NexusGenScalars['DateTime'] | null; // DateTime
  }
  Mutation: {};
  Publishers: { // root type
    certificates?: Array<NexusGenRootTypes['Certificates'] | null> | null; // [Certificates]
    createdAt?: NexusGenScalars['DateTime'] | null; // DateTime
    id?: string | null; // String
    name?: string | null; // String
    updatedAt?: NexusGenScalars['DateTime'] | null; // DateTime
  }
  Query: {};
  Skills: { // root type
    categories?: Array<NexusGenRootTypes['CategoriesOnSkills'] | null> | null; // [CategoriesOnSkills]
    createdAt?: NexusGenScalars['DateTime'] | null; // DateTime
    id?: string | null; // String
    name?: string | null; // String
    updatedAt?: NexusGenScalars['DateTime'] | null; // DateTime
  }
}

export interface NexusGenInterfaces {
}

export interface NexusGenUnions {
}

export type NexusGenRootTypes = NexusGenObjects

export type NexusGenAllTypes = NexusGenRootTypes & NexusGenScalars

export interface NexusGenFieldTypes {
  Categories: { // field return type
    createdAt: NexusGenScalars['DateTime'] | null; // DateTime
    id: string | null; // String
    name: string | null; // String
    skills: Array<NexusGenRootTypes['CategoriesOnSkills'] | null> | null; // [CategoriesOnSkills]
    updatedAt: NexusGenScalars['DateTime'] | null; // DateTime
  }
  CategoriesOnSkills: { // field return type
    category: NexusGenRootTypes['Categories'] | null; // Categories
    categoryId: string | null; // String
    createdAt: NexusGenScalars['DateTime'] | null; // DateTime
    employeeSkills: Array<NexusGenRootTypes['EmployeeSkills'] | null> | null; // [EmployeeSkills]
    id: string | null; // String
    skill: NexusGenRootTypes['Skills'] | null; // Skills
    skillId: string | null; // String
    updatedAt: NexusGenScalars['DateTime'] | null; // DateTime
  }
  Certificates: { // field return type
    createdAt: NexusGenScalars['DateTime'] | null; // DateTime
    employeeSkill: NexusGenRootTypes['EmployeeSkills'] | null; // EmployeeSkills
    employeeSkillId: string | null; // String
    expiry: string | null; // String
    id: string | null; // String
    name: string | null; // String
    photo: string | null; // String
    publisher: NexusGenRootTypes['Publishers'] | null; // Publishers
    publisherId: string | null; // String
    updatedAt: NexusGenScalars['DateTime'] | null; // DateTime
  }
  Employee: { // field return type
    accessToken: string | null; // String
    createdAt: NexusGenScalars['DateTime'] | null; // DateTime
    department: string | null; // String
    displayName: string | null; // String
    division: string | null; // String
    email: string | null; // String
    employeeSkills: Array<NexusGenRootTypes['EmployeeSkills'] | null> | null; // [EmployeeSkills]
    id: string | null; // String
    isManager: boolean | null; // Boolean
    jobTitle: string | null; // String
    location: string | null; // String
    manager: string | null; // String
    mobileNumber: string | null; // String
    name: string | null; // String
    photo: string | null; // String
    role: string | null; // String
    updatedAt: NexusGenScalars['DateTime'] | null; // DateTime
  }
  EmployeeSkills: { // field return type
    certificate: NexusGenRootTypes['Certificates'] | null; // Certificates
    createdAt: NexusGenScalars['DateTime'] | null; // DateTime
    employee: NexusGenRootTypes['Employee'] | null; // Employee
    employeeId: string | null; // String
    id: string | null; // String
    level: string | null; // String
    skill: NexusGenRootTypes['CategoriesOnSkills'] | null; // CategoriesOnSkills
    skillId: string | null; // String
    updateLog: Array<string | null> | null; // [String]
    updatedAt: NexusGenScalars['DateTime'] | null; // DateTime
  }
  Mutation: { // field return type
    addCategory: Array<NexusGenRootTypes['Categories'] | null> | null; // [Categories]
    addCertificate: NexusGenRootTypes['Employee'] | null; // Employee
    addEmployee: NexusGenRootTypes['Employee'] | null; // Employee
    addEmployeeSkill: NexusGenRootTypes['Employee'] | null; // Employee
    addPublisher: Array<NexusGenRootTypes['Publishers'] | null> | null; // [Publishers]
    addSkill: Array<NexusGenRootTypes['CategoriesOnSkills'] | null> | null; // [CategoriesOnSkills]
    deleteCategory: Array<NexusGenRootTypes['Categories'] | null> | null; // [Categories]
    deleteCertificate: NexusGenRootTypes['Employee'] | null; // Employee
    deleteEmployeeSkill: NexusGenRootTypes['Employee'] | null; // Employee
    deletePublisher: Array<NexusGenRootTypes['Publishers'] | null> | null; // [Publishers]
    deleteSkill: Array<NexusGenRootTypes['CategoriesOnSkills'] | null> | null; // [CategoriesOnSkills]
    editCategory: NexusGenRootTypes['Categories'] | null; // Categories
    editEmployee: NexusGenRootTypes['Employee'] | null; // Employee
    editSkill: Array<NexusGenRootTypes['CategoriesOnSkills'] | null> | null; // [CategoriesOnSkills]
    employeeLogin: NexusGenRootTypes['Employee'] | null; // Employee
  }
  Publishers: { // field return type
    certificates: Array<NexusGenRootTypes['Certificates'] | null> | null; // [Certificates]
    createdAt: NexusGenScalars['DateTime'] | null; // DateTime
    id: string | null; // String
    name: string | null; // String
    updatedAt: NexusGenScalars['DateTime'] | null; // DateTime
  }
  Query: { // field return type
    allCOS: Array<NexusGenRootTypes['CategoriesOnSkills'] | null> | null; // [CategoriesOnSkills]
    categories: Array<NexusGenRootTypes['Categories'] | null> | null; // [Categories]
    category: NexusGenRootTypes['Categories'] | null; // Categories
    certificates: Array<NexusGenRootTypes['Certificates'] | null> | null; // [Certificates]
    cos: Array<NexusGenRootTypes['CategoriesOnSkills'] | null> | null; // [CategoriesOnSkills]
    employees: Array<NexusGenRootTypes['Employee'] | null> | null; // [Employee]
    publishers: Array<NexusGenRootTypes['Publishers'] | null> | null; // [Publishers]
    searchCategory: Array<NexusGenRootTypes['Categories'] | null> | null; // [Categories]
    searchCertificate: Array<NexusGenRootTypes['Certificates'] | null> | null; // [Certificates]
    searchCertificateByPublisher: Array<NexusGenRootTypes['Certificates'] | null> | null; // [Certificates]
    searchEmployee: Array<NexusGenRootTypes['Employee'] | null> | null; // [Employee]
    searchEmployeeByCategory: Array<NexusGenRootTypes['Employee'] | null> | null; // [Employee]
    searchEmployeeBySkill: Array<NexusGenRootTypes['Employee'] | null> | null; // [Employee]
    searchSkill: Array<NexusGenRootTypes['CategoriesOnSkills'] | null> | null; // [CategoriesOnSkills]
    skill: NexusGenRootTypes['Skills'] | null; // Skills
    skills: Array<NexusGenRootTypes['Skills'] | null> | null; // [Skills]
  }
  Skills: { // field return type
    categories: Array<NexusGenRootTypes['CategoriesOnSkills'] | null> | null; // [CategoriesOnSkills]
    createdAt: NexusGenScalars['DateTime'] | null; // DateTime
    id: string | null; // String
    name: string | null; // String
    updatedAt: NexusGenScalars['DateTime'] | null; // DateTime
  }
}

export interface NexusGenFieldTypeNames {
  Categories: { // field return type name
    createdAt: 'DateTime'
    id: 'String'
    name: 'String'
    skills: 'CategoriesOnSkills'
    updatedAt: 'DateTime'
  }
  CategoriesOnSkills: { // field return type name
    category: 'Categories'
    categoryId: 'String'
    createdAt: 'DateTime'
    employeeSkills: 'EmployeeSkills'
    id: 'String'
    skill: 'Skills'
    skillId: 'String'
    updatedAt: 'DateTime'
  }
  Certificates: { // field return type name
    createdAt: 'DateTime'
    employeeSkill: 'EmployeeSkills'
    employeeSkillId: 'String'
    expiry: 'String'
    id: 'String'
    name: 'String'
    photo: 'String'
    publisher: 'Publishers'
    publisherId: 'String'
    updatedAt: 'DateTime'
  }
  Employee: { // field return type name
    accessToken: 'String'
    createdAt: 'DateTime'
    department: 'String'
    displayName: 'String'
    division: 'String'
    email: 'String'
    employeeSkills: 'EmployeeSkills'
    id: 'String'
    isManager: 'Boolean'
    jobTitle: 'String'
    location: 'String'
    manager: 'String'
    mobileNumber: 'String'
    name: 'String'
    photo: 'String'
    role: 'String'
    updatedAt: 'DateTime'
  }
  EmployeeSkills: { // field return type name
    certificate: 'Certificates'
    createdAt: 'DateTime'
    employee: 'Employee'
    employeeId: 'String'
    id: 'String'
    level: 'String'
    skill: 'CategoriesOnSkills'
    skillId: 'String'
    updateLog: 'String'
    updatedAt: 'DateTime'
  }
  Mutation: { // field return type name
    addCategory: 'Categories'
    addCertificate: 'Employee'
    addEmployee: 'Employee'
    addEmployeeSkill: 'Employee'
    addPublisher: 'Publishers'
    addSkill: 'CategoriesOnSkills'
    deleteCategory: 'Categories'
    deleteCertificate: 'Employee'
    deleteEmployeeSkill: 'Employee'
    deletePublisher: 'Publishers'
    deleteSkill: 'CategoriesOnSkills'
    editCategory: 'Categories'
    editEmployee: 'Employee'
    editSkill: 'CategoriesOnSkills'
    employeeLogin: 'Employee'
  }
  Publishers: { // field return type name
    certificates: 'Certificates'
    createdAt: 'DateTime'
    id: 'String'
    name: 'String'
    updatedAt: 'DateTime'
  }
  Query: { // field return type name
    allCOS: 'CategoriesOnSkills'
    categories: 'Categories'
    category: 'Categories'
    certificates: 'Certificates'
    cos: 'CategoriesOnSkills'
    employees: 'Employee'
    publishers: 'Publishers'
    searchCategory: 'Categories'
    searchCertificate: 'Certificates'
    searchCertificateByPublisher: 'Certificates'
    searchEmployee: 'Employee'
    searchEmployeeByCategory: 'Employee'
    searchEmployeeBySkill: 'Employee'
    searchSkill: 'CategoriesOnSkills'
    skill: 'Skills'
    skills: 'Skills'
  }
  Skills: { // field return type name
    categories: 'CategoriesOnSkills'
    createdAt: 'DateTime'
    id: 'String'
    name: 'String'
    updatedAt: 'DateTime'
  }
}

export interface NexusGenArgTypes {
  Mutation: {
    addCategory: { // args
      id?: string | null; // String
      name: string; // String!
    }
    addCertificate: { // args
      employeeId: string; // String!
      employeeSkillId: string; // String!
      expiry?: string | null; // String
      id?: string | null; // String
      name: string; // String!
      photo: string; // String!
      publisherId: string; // String!
    }
    addEmployee: { // args
      email: string; // String!
      isManager?: boolean | null; // Boolean
      name: string; // String!
      password: string; // String!
      photo?: string | null; // String
      role?: string | null; // String
    }
    addEmployeeSkill: { // args
      coskillId: string; // String!
      employeeId: string; // String!
      level: string; // String!
    }
    addPublisher: { // args
      id: string; // String!
      name: string; // String!
    }
    addSkill: { // args
      categoryId: string; // String!
      name: string; // String!
    }
    deleteCategory: { // args
      id: string; // String!
    }
    deleteCertificate: { // args
      employeeId: string; // String!
      id: string; // String!
    }
    deleteEmployeeSkill: { // args
      employeeId: string; // String!
      eskillId: string; // String!
    }
    deletePublisher: { // args
      id: string; // String!
    }
    deleteSkill: { // args
      coskillId: string; // String!
      id: string; // String!
    }
    editCategory: { // args
      id: string; // String!
      name?: string | null; // String
    }
    editEmployee: { // args
      email: string; // String!
      id: string; // String!
      name: string; // String!
      photo?: string | null; // String
    }
    editSkill: { // args
      categoryId: string; // String!
      id: string; // String!
      name: string; // String!
      skillId: string; // String!
    }
    employeeLogin: { // args
      email: string; // String!
      password: string; // String!
    }
  }
  Query: {
    category: { // args
      id: string; // String!
    }
    cos: { // args
      skillId: string; // String!
    }
    searchCategory: { // args
      word: string; // String!
    }
    searchCertificate: { // args
      word: string; // String!
    }
    searchCertificateByPublisher: { // args
      word: string; // String!
    }
    searchEmployee: { // args
      word: string; // String!
    }
    searchEmployeeByCategory: { // args
      word: string; // String!
    }
    searchEmployeeBySkill: { // args
      word: string; // String!
    }
    searchSkill: { // args
      word: string; // String!
    }
    skill: { // args
      id: string; // String!
    }
  }
}

export interface NexusGenAbstractTypeMembers {
}

export interface NexusGenTypeInterfaces {
}

export type NexusGenObjectNames = keyof NexusGenObjects;

export type NexusGenInputNames = never;

export type NexusGenEnumNames = never;

export type NexusGenInterfaceNames = never;

export type NexusGenScalarNames = keyof NexusGenScalars;

export type NexusGenUnionNames = never;

export type NexusGenObjectsUsingAbstractStrategyIsTypeOf = never;

export type NexusGenAbstractsUsingStrategyResolveType = never;

export type NexusGenFeaturesConfig = {
  abstractTypeStrategies: {
    isTypeOf: false
    resolveType: true
    __typename: false
  }
}

export interface NexusGenTypes {
  context: any;
  inputTypes: NexusGenInputs;
  rootTypes: NexusGenRootTypes;
  inputTypeShapes: NexusGenInputs & NexusGenEnums & NexusGenScalars;
  argTypes: NexusGenArgTypes;
  fieldTypes: NexusGenFieldTypes;
  fieldTypeNames: NexusGenFieldTypeNames;
  allTypes: NexusGenAllTypes;
  typeInterfaces: NexusGenTypeInterfaces;
  objectNames: NexusGenObjectNames;
  inputNames: NexusGenInputNames;
  enumNames: NexusGenEnumNames;
  interfaceNames: NexusGenInterfaceNames;
  scalarNames: NexusGenScalarNames;
  unionNames: NexusGenUnionNames;
  allInputTypes: NexusGenTypes['inputNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['scalarNames'];
  allOutputTypes: NexusGenTypes['objectNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['unionNames'] | NexusGenTypes['interfaceNames'] | NexusGenTypes['scalarNames'];
  allNamedTypes: NexusGenTypes['allInputTypes'] | NexusGenTypes['allOutputTypes']
  abstractTypes: NexusGenTypes['interfaceNames'] | NexusGenTypes['unionNames'];
  abstractTypeMembers: NexusGenAbstractTypeMembers;
  objectsUsingAbstractStrategyIsTypeOf: NexusGenObjectsUsingAbstractStrategyIsTypeOf;
  abstractsUsingStrategyResolveType: NexusGenAbstractsUsingStrategyResolveType;
  features: NexusGenFeaturesConfig;
}


declare global {
  interface NexusGenPluginTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginInputTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginInputFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginSchemaConfig {
  }
  interface NexusGenPluginArgConfig {
  }
}
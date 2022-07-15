// <auto-generated/>
// Contents of: hl7.fhir.r3.core version: 3.0.2
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/library-type|3.0.2

import { CodingArgs } from '../fhir/Coding.js'

/**
 * The type of knowledge asset this library contains
 */
export type LibraryTypeCodingType = {
  /**
   * asset-collection: The resource is a collection of knowledge assets
   */
  AssetCollection: CodingArgs;
  /**
   * logic-library: The resource is a shareable library of formalized knowledge
   */
  LogicLibrary: CodingArgs;
  /**
   * model-definition: The resource is a definition of an information model
   */
  ModelDefinition: CodingArgs;
  /**
   * module-definition: The resource defines the dependencies, parameters, and data requirements for a particular module or evaluation context
   */
  ModuleDefinition: CodingArgs;
}

/**
 * The type of knowledge asset this library contains
 */
export const LibraryTypeCodings:LibraryTypeCodingType = {
  /**
   * asset-collection: The resource is a collection of knowledge assets
   */
  AssetCollection: {
    display: "Asset Collection",
    code: "asset-collection",
    system: "http://hl7.org/fhir/library-type",
  },
  /**
   * logic-library: The resource is a shareable library of formalized knowledge
   */
  LogicLibrary: {
    display: "Logic Library",
    code: "logic-library",
    system: "http://hl7.org/fhir/library-type",
  },
  /**
   * model-definition: The resource is a definition of an information model
   */
  ModelDefinition: {
    display: "Model Definition",
    code: "model-definition",
    system: "http://hl7.org/fhir/library-type",
  },
  /**
   * module-definition: The resource defines the dependencies, parameters, and data requirements for a particular module or evaluation context
   */
  ModuleDefinition: {
    display: "Module Definition",
    code: "module-definition",
    system: "http://hl7.org/fhir/library-type",
  },
} as const;

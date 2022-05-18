// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/product-category|4.0.1

import { Coding } from '../fhir/Coding.js'

/**
 * Biologically Derived Product Category.
 */
export const ProductCategoryCodings = {
  /**
   * biologicalAgent: Biological agent of unspecified type.
   */
  BiologicalAgent: new Coding({
    display: "BiologicalAgent",
    code: "biologicalAgent",
    system: "http://hl7.org/fhir/product-category",
  }),
  /**
   * cells: Collection of cells.
   */
  Cells: new Coding({
    display: "Cells",
    code: "cells",
    system: "http://hl7.org/fhir/product-category",
  }),
  /**
   * fluid: Body fluid.
   */
  Fluid: new Coding({
    display: "Fluid",
    code: "fluid",
    system: "http://hl7.org/fhir/product-category",
  }),
  /**
   * organ: A collection of tissues joined in a structural unit to serve a common function.
   */
  Organ: new Coding({
    display: "Organ",
    code: "organ",
    system: "http://hl7.org/fhir/product-category",
  }),
  /**
   * tissue: An ensemble of similar cells and their extracellular matrix from the same origin that together carry out a specific function.
   */
  Tissue: new Coding({
    display: "Tissue",
    code: "tissue",
    system: "http://hl7.org/fhir/product-category",
  }),
} as const;

/**
 * Biologically Derived Product Category.
 */
export type ProductCategoryCodingType = typeof ProductCategoryCodings;
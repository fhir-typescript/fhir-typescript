// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ComplexType: Expression

import * as fhir from '../fhir.js';

// @ts-ignore
import { ExpressionLanguageCodings, ExpressionLanguageCodingType,} from '../fhirValueSets/ExpressionLanguageCodings.js';
// @ts-ignore
import { ExpressionLanguageCodes,  ExpressionLanguageCodeType } from '../fhirValueSets/ExpressionLanguageCodes.js';
/**
 * Valid arguments for the Expression type.
 */
export interface ExpressionArgs extends fhir.FhirElementArgs {
  /**
   * A brief, natural language description of the condition that effectively communicates the intended semantics.
   */
  description?: fhir.FhirString|string|undefined;
  /**
   * Extended properties for primitive element: Expression.description
   */
  _description?:fhir.FhirElementArgs;
  /**
   * A short name assigned to the expression to allow for multiple reuse of the expression in the context where it is defined.
   */
  name?: fhir.FhirId|string|undefined;
  /**
   * Extended properties for primitive element: Expression.name
   */
  _name?:fhir.FhirElementArgs;
  /**
   * The media type of the language for the expression.
   */
  language: fhir.FhirCode|string|undefined;
  /**
   * Extended properties for primitive element: Expression.language
   */
  _language?:fhir.FhirElementArgs;
  /**
   * An expression in the specified language that returns a value.
   */
  expression?: fhir.FhirString|string|undefined;
  /**
   * Extended properties for primitive element: Expression.expression
   */
  _expression?:fhir.FhirElementArgs;
  /**
   * If both a reference and an expression is found, the reference SHALL point to the same expression.
   */
  reference?: fhir.FhirUri|string|undefined;
  /**
   * Extended properties for primitive element: Expression.reference
   */
  _reference?:fhir.FhirElementArgs;
}

/**
 * A expression that is evaluated in a specified context and returns a value. The context of use of the expression must specify the context in which the expression is evaluated, and how the result of the expression is used.
 */
export class Expression extends fhir.FhirElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'Expression';
  /**
   * A brief, natural language description of the condition that effectively communicates the intended semantics.
   */
  public description?: fhir.FhirString|undefined;
  /**
   * A short name assigned to the expression to allow for multiple reuse of the expression in the context where it is defined.
   */
  public name?: fhir.FhirId|undefined;
  /**
   * The media type of the language for the expression.
   */
  public language: fhir.FhirCode|null;
  /**
   * An expression in the specified language that returns a value.
   */
  public expression?: fhir.FhirString|undefined;
  /**
   * If both a reference and an expression is found, the reference SHALL point to the same expression.
   */
  public reference?: fhir.FhirUri|undefined;
  /**
   * Default constructor for Expression - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<ExpressionArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['description']) { this.description = new fhir.FhirString({value: source.description}); }
    if (source['_description']) {
      if (this.description) { this.description.addExtendedProperties(source._description!); }
      else { this.description = new fhir.FhirString(source._description as Partial<fhir.FhirStringArgs>); }
    }
    if (source['name']) { this.name = new fhir.FhirId({value: source.name}); }
    if (source['_name']) {
      if (this.name) { this.name.addExtendedProperties(source._name!); }
      else { this.name = new fhir.FhirId(source._name as Partial<fhir.FhirIdArgs>); }
    }
    if (source['language']) { this.language = new fhir.FhirCode({value: source.language}); }
    else { this.language = null; }
    if (source['_language']) {
      if (this.language) { this.language.addExtendedProperties(source._language!); }
      else { this.language = new fhir.FhirCode(source._language as Partial<fhir.FhirCodeArgs>); }
    }
    if (source['expression']) { this.expression = new fhir.FhirString({value: source.expression}); }
    if (source['_expression']) {
      if (this.expression) { this.expression.addExtendedProperties(source._expression!); }
      else { this.expression = new fhir.FhirString(source._expression as Partial<fhir.FhirStringArgs>); }
    }
    if (source['reference']) { this.reference = new fhir.FhirUri({value: source.reference}); }
    if (source['_reference']) {
      if (this.reference) { this.reference.addExtendedProperties(source._reference!); }
      else { this.reference = new fhir.FhirUri(source._reference as Partial<fhir.FhirUriArgs>); }
    }
  }
  /**
   * Extensible-bound Value Set for language (Expression.language)
   */
  public static get languageExtensibleCodings():ExpressionLanguageCodingType {
    return ExpressionLanguageCodings;
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(expression:string = ''):fhir.FtsIssue[] {
    let issues:fhir.FtsIssue[] = super.doModelValidation(expression);
    if (expression === '') { expression = 'Expression' }
    if (this["description"]) { issues.push(...this.description.doModelValidation(expression+'.description')); }
    if (this["name"]) { issues.push(...this.name.doModelValidation(expression+'.name')); }
    if (!this['language']) {
      issues.push({ severity: 'error', code: 'required', diagnostics: 'Missing required property language fhir: Expression.language:code', expression: [expression] });
    }
    if (this["language"]) { issues.push(...this.language.doModelValidation(expression+'.language')); }
    if (this["expression"]) { issues.push(...this.expression.doModelValidation(expression+'.expression')); }
    if (this["reference"]) { issues.push(...this.reference.doModelValidation(expression+'.reference')); }
    return issues;
  }
}

import * as fhir from '../fhirJson.js';
/**
 * A expression that is evaluated in a specified context and returns a value. The context of use of the expression must specify the context in which the expression is evaluated, and how the result of the expression is used.
 */
export interface Expression extends fhir.FhirElement {
    /**
     * A brief, natural language description of the condition that effectively communicates the intended semantics.
     */
    description?: string | undefined;
    /**
     * Extended properties for primitive element: Expression.description
     */
    _description?: fhir.FhirElement;
    /**
     * A short name assigned to the expression to allow for multiple reuse of the expression in the context where it is defined.
     */
    name?: string | undefined;
    /**
     * Extended properties for primitive element: Expression.name
     */
    _name?: fhir.FhirElement;
    /**
     * The media type of the language for the expression.
     */
    language: string | null;
    /**
     * Extended properties for primitive element: Expression.language
     */
    _language?: fhir.FhirElement;
    /**
     * An expression in the specified language that returns a value.
     */
    expression?: string | undefined;
    /**
     * Extended properties for primitive element: Expression.expression
     */
    _expression?: fhir.FhirElement;
    /**
     * If both a reference and an expression is found, the reference SHALL point to the same expression.
     */
    reference?: string | undefined;
    /**
     * Extended properties for primitive element: Expression.reference
     */
    _reference?: fhir.FhirElement;
}
//# sourceMappingURL=Expression.d.ts.map
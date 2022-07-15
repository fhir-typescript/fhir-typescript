import * as fhir from '../fhir.js';
import { IdentifierUseCodeType } from '../fhirValueSets/IdentifierUseCodes.js';
/**
 * Valid arguments for the Identifier type.
 */
export interface IdentifierArgs extends fhir.FhirElementArgs {
    /**
     * Allows the appropriate identifier for a particular context of use to be selected from among a set of identifiers.
     */
    use?: fhir.FhirCode<IdentifierUseCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: Identifier.use
     */
    _use?: fhir.FhirElementArgs;
    /**
     * Allows users to make use of identifiers when the identifier system is not known.
     */
    type?: fhir.CodeableConceptArgs | undefined;
    /**
     * There are many sequences of identifiers.  To perform matching, we need to know what sequence we're dealing with. The system identifies a particular sequence or set of unique identifiers.
     */
    system?: fhir.FhirUri | string | undefined;
    /**
     * Extended properties for primitive element: Identifier.system
     */
    _system?: fhir.FhirElementArgs;
    /**
     * The portion of the identifier typically displayed to the user and which is unique within the context of the system.
     */
    value?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: Identifier.value
     */
    _value?: fhir.FhirElementArgs;
    /**
     * Time period during which identifier is/was valid for use.
     */
    period?: fhir.PeriodArgs | undefined;
    /**
     * Organization that issued/manages the identifier.
     */
    assigner?: fhir.ReferenceArgs | undefined;
}
/**
 * A technical identifier - identifies some entity uniquely and unambiguously.
 */
export declare class Identifier extends fhir.FhirElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Allows the appropriate identifier for a particular context of use to be selected from among a set of identifiers.
     */
    use?: fhir.FhirCode<IdentifierUseCodeType> | undefined;
    /**
     * Allows users to make use of identifiers when the identifier system is not known.
     */
    type?: fhir.CodeableConcept | undefined;
    /**
     * There are many sequences of identifiers.  To perform matching, we need to know what sequence we're dealing with. The system identifies a particular sequence or set of unique identifiers.
     */
    system?: fhir.FhirUri | undefined;
    /**
     * The portion of the identifier typically displayed to the user and which is unique within the context of the system.
     */
    value?: fhir.FhirString | undefined;
    /**
     * Time period during which identifier is/was valid for use.
     */
    period?: fhir.Period | undefined;
    /**
     * Organization that issued/manages the identifier.
     */
    assigner?: fhir.Reference | undefined;
    /**
     * Default constructor for Identifier - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IdentifierArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
//# sourceMappingURL=Identifier.d.ts.map
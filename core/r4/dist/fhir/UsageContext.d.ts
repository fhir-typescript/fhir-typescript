import * as fhir from '../fhir.js';
import { UsageContextTypeCodingType } from '../fhirValueSets/UsageContextTypeCodings.js';
/**
 * Valid arguments for the UsageContext type.
 */
export interface UsageContextArgs extends fhir.FhirElementArgs {
    /**
     * A code that identifies the type of context being specified by this usage context.
     */
    code: fhir.CodingArgs | null;
    /**
     * A value that defines the context specified in this context of use. The interpretation of the value is defined by the code.
     */
    value?: fhir.CodeableConcept | fhir.Quantity | fhir.Range | fhir.Reference | undefined;
    /**
     * A value that defines the context specified in this context of use. The interpretation of the value is defined by the code.
     */
    valueCodeableConcept?: fhir.CodeableConceptArgs | undefined;
    /**
     * A value that defines the context specified in this context of use. The interpretation of the value is defined by the code.
     */
    valueQuantity?: fhir.QuantityArgs | undefined;
    /**
     * A value that defines the context specified in this context of use. The interpretation of the value is defined by the code.
     */
    valueRange?: fhir.RangeArgs | undefined;
    /**
     * A value that defines the context specified in this context of use. The interpretation of the value is defined by the code.
     */
    valueReference?: fhir.ReferenceArgs | undefined;
}
/**
 * Specifies clinical/business/etc. metadata that can be used to retrieve, index and/or categorize an artifact. This metadata can either be specific to the applicable population (e.g., age category, DRG) or the specific context of care (e.g., venue, care setting, provider of care).
 */
export declare class UsageContext extends fhir.FhirElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * A code that identifies the type of context being specified by this usage context.
     */
    code: fhir.Coding | null;
    /**
     * A value that defines the context specified in this context of use. The interpretation of the value is defined by the code.
     */
    value: (fhir.CodeableConcept | fhir.Quantity | fhir.Range | fhir.Reference) | null;
    /**
     * Internal flag to properly serialize choice-type element UsageContext.value[x]
     */
    protected static readonly _fts_valueIsChoice: true;
    /**
     * Default constructor for UsageContext - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<UsageContextArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Extensible-bound Value Set for code (UsageContext.code)
     */
    static get codeExtensibleCodings(): UsageContextTypeCodingType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.FtsIssue[];
}
//# sourceMappingURL=UsageContext.d.ts.map
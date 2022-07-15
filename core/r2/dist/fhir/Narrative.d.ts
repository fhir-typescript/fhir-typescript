import * as fhir from '../fhir.js';
import { NarrativeStatusCodeType } from '../fhirValueSets/NarrativeStatusCodes.js';
/**
 * Valid arguments for the Narrative type.
 */
export interface NarrativeArgs extends fhir.FhirElementArgs {
    /**
     * The status of the narrative - whether it's entirely generated (from just the defined data or the extensions too), or whether a human authored it and it may contain additional data.
     */
    status: fhir.FhirCode<NarrativeStatusCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: Narrative.status
     */
    _status?: fhir.FhirElementArgs;
    /**
     * The actual narrative content, a stripped down version of XHTML.
     */
    div: fhir.FhirXhtml | string | undefined;
    /**
     * Extended properties for primitive element: Narrative.div
     */
    _div?: fhir.FhirElementArgs;
}
/**
 * A human-readable formatted text, including images.
 */
export declare class Narrative extends fhir.FhirElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * The status of the narrative - whether it's entirely generated (from just the defined data or the extensions too), or whether a human authored it and it may contain additional data.
     */
    status: fhir.FhirCode<NarrativeStatusCodeType> | null;
    /**
     * The actual narrative content, a stripped down version of XHTML.
     */
    div: fhir.FhirXhtml | null;
    /**
     * Default constructor for Narrative - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<NarrativeArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
//# sourceMappingURL=Narrative.d.ts.map
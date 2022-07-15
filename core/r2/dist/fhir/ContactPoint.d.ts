import * as fhir from '../fhir.js';
import { ContactPointSystemCodeType } from '../fhirValueSets/ContactPointSystemCodes.js';
import { ContactPointUseCodeType } from '../fhirValueSets/ContactPointUseCodes.js';
/**
 * Valid arguments for the ContactPoint type.
 */
export interface ContactPointArgs extends fhir.FhirElementArgs {
    /**
     * Telecommunications form for contact point - what communications system is required to make use of the contact.
     */
    system?: fhir.FhirCode<ContactPointSystemCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: ContactPoint.system
     */
    _system?: fhir.FhirElementArgs;
    /**
     * Need to support legacy numbers that are not in a tightly controlled format.
     */
    value?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: ContactPoint.value
     */
    _value?: fhir.FhirElementArgs;
    /**
     * Need to track the way a person uses this contact, so a user can choose which is appropriate for their purpose.
     */
    use?: fhir.FhirCode<ContactPointUseCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: ContactPoint.use
     */
    _use?: fhir.FhirElementArgs;
    /**
     * Specifies a preferred order in which to use a set of contacts. Contacts are ranked with lower values coming before higher values.
     */
    rank?: fhir.FhirPositiveInt | number | undefined;
    /**
     * Extended properties for primitive element: ContactPoint.rank
     */
    _rank?: fhir.FhirElementArgs;
    /**
     * Time period when the contact point was/is in use.
     */
    period?: fhir.PeriodArgs | undefined;
}
/**
 * Details for all kinds of technology mediated contact points for a person or organization, including telephone, email, etc.
 */
export declare class ContactPoint extends fhir.FhirElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Telecommunications form for contact point - what communications system is required to make use of the contact.
     */
    system?: fhir.FhirCode<ContactPointSystemCodeType> | undefined;
    /**
     * Need to support legacy numbers that are not in a tightly controlled format.
     */
    value?: fhir.FhirString | undefined;
    /**
     * Need to track the way a person uses this contact, so a user can choose which is appropriate for their purpose.
     */
    use?: fhir.FhirCode<ContactPointUseCodeType> | undefined;
    /**
     * Specifies a preferred order in which to use a set of contacts. Contacts are ranked with lower values coming before higher values.
     */
    rank?: fhir.FhirPositiveInt | undefined;
    /**
     * Time period when the contact point was/is in use.
     */
    period?: fhir.Period | undefined;
    /**
     * Default constructor for ContactPoint - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ContactPointArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
//# sourceMappingURL=ContactPoint.d.ts.map
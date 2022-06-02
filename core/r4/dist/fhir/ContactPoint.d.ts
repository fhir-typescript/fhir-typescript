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
     * Additional text data such as phone extension numbers, or notes about use of the contact are sometimes included in the value.
     */
    value?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: ContactPoint.value
     */
    _value?: fhir.FhirElementArgs;
    /**
     * Applications can assume that a contact is current unless it explicitly says that it is temporary or old.
     */
    use?: fhir.FhirCode<ContactPointUseCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: ContactPoint.use
     */
    _use?: fhir.FhirElementArgs;
    /**
     * Note that rank does not necessarily follow the order in which the contacts are represented in the instance.
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
     * Additional text data such as phone extension numbers, or notes about use of the contact are sometimes included in the value.
     */
    value?: fhir.FhirString | undefined;
    /**
     * Applications can assume that a contact is current unless it explicitly says that it is temporary or old.
     */
    use?: fhir.FhirCode<ContactPointUseCodeType> | undefined;
    /**
     * Note that rank does not necessarily follow the order in which the contacts are represented in the instance.
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
     * Required-bound Value Set for system (ContactPoint.system)
     */
    static get systemRequiredCodes(): {
        readonly Email: "email";
        readonly Fax: "fax";
        readonly Other: "other";
        readonly Pager: "pager";
        readonly Phone: "phone";
        readonly SMS: "sms";
        readonly URL: "url";
    };
    /**
     * Required-bound Value Set for use (ContactPoint.use)
     */
    static get useRequiredCodes(): {
        readonly Home: "home";
        readonly Mobile: "mobile";
        readonly Old: "old";
        readonly Temp: "temp";
        readonly Work: "work";
    };
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(expression?: string): fhir.FtsIssue[];
}
//# sourceMappingURL=ContactPoint.d.ts.map
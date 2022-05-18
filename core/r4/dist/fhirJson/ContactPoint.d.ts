import * as fhir from '../fhirJson.js';
/**
 * Details for all kinds of technology mediated contact points for a person or organization, including telephone, email, etc.
 */
export interface ContactPoint extends fhir.FhirElement {
    /**
     * Telecommunications form for contact point - what communications system is required to make use of the contact.
     */
    system?: 'email' | 'fax' | 'other' | 'pager' | 'phone' | 'sms' | 'url' | undefined;
    /**
     * Additional text data such as phone extension numbers, or notes about use of the contact are sometimes included in the value.
     */
    value?: string | undefined;
    /**
     * Extended properties for primitive element: ContactPoint.value
     */
    _value?: fhir.FhirElement;
    /**
     * Applications can assume that a contact is current unless it explicitly says that it is temporary or old.
     */
    use?: 'home' | 'mobile' | 'old' | 'temp' | 'work' | undefined;
    /**
     * Note that rank does not necessarily follow the order in which the contacts are represented in the instance.
     */
    rank?: number | undefined;
    /**
     * Extended properties for primitive element: ContactPoint.rank
     */
    _rank?: fhir.FhirElement;
    /**
     * Time period when the contact point was/is in use.
     */
    period?: fhir.Period | undefined;
}
//# sourceMappingURL=ContactPoint.d.ts.map
import * as fhir from '../fhirJson.js';
/**
 * Details for all kinds of technology mediated contact points for a person or organization, including telephone, email, etc.
 */
export interface ContactPoint extends fhir.FhirElement {
    /**
     * Telecommunications form for contact point - what communications system is required to make use of the contact.
     */
    system?: 'email' | 'fax' | 'other' | 'pager' | 'phone' | undefined;
    /**
     * Extended properties for primitive element: ContactPoint.system
     */
    _system?: fhir.FhirElement;
    /**
     * Need to support legacy numbers that are not in a tightly controlled format.
     */
    value?: string | undefined;
    /**
     * Extended properties for primitive element: ContactPoint.value
     */
    _value?: fhir.FhirElement;
    /**
     * Need to track the way a person uses this contact, so a user can choose which is appropriate for their purpose.
     */
    use?: 'home' | 'mobile' | 'old' | 'temp' | 'work' | undefined;
    /**
     * Extended properties for primitive element: ContactPoint.use
     */
    _use?: fhir.FhirElement;
    /**
     * Specifies a preferred order in which to use a set of contacts. Contacts are ranked with lower values coming before higher values.
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
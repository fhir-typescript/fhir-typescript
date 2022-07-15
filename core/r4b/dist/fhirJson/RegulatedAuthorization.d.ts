import * as fhir from '../fhirJson.js';
/**
 * The case or regulatory procedure for granting or amending a regulated authorization. An authorization is granted in response to submissions/applications by those seeking authorization. A case is the administrative process that deals with the application(s) that relate to this and assesses them. Note: This area is subject to ongoing review and the workgroup is seeking implementer feedback on its use (see link at bottom of page).
 */
export interface RegulatedAuthorizationCase extends fhir.BackboneElement {
    /**
     * Identifier by which this case can be referenced.
     */
    identifier?: fhir.Identifier | undefined;
    /**
     * The defining type of case.
     */
    type?: fhir.CodeableConcept | undefined;
    /**
     * The status associated with the case.
     */
    status?: fhir.CodeableConcept | undefined;
    /**
     * Relevant date for this case.
     */
    datePeriod?: fhir.Period | undefined;
    /**
     * Relevant date for this case.
     */
    dateDateTime?: string | undefined;
    /**
     * Extended properties for primitive element: RegulatedAuthorization.case.date[x]
     */
    _dateDateTime?: fhir.FhirElement;
    /**
     * A regulatory submission from an organization to a regulator, as part of an assessing case. Multiple applications may occur over time, with more or different information to support or modify the submission or the authorization. The applications can be considered as steps within the longer running case or procedure for this authorization process.
     */
    application?: (fhir.RegulatedAuthorizationCase | null)[] | undefined;
}
/**
 * Regulatory approval, clearance or licencing related to a regulated product, treatment, facility or activity that is cited in a guidance, regulation, rule or legislative act. An example is Market Authorization relating to a Medicinal Product.
 */
export interface RegulatedAuthorization extends fhir.DomainResource {
    /**
     * Resource Type Name
     */
    resourceType: "RegulatedAuthorization" | null;
    /**
     * Business identifier for the authorization, typically assigned by the authorizing body.
     */
    identifier?: (fhir.Identifier | null)[] | undefined;
    /**
     * The product type, treatment, facility or activity that is being authorized.
     */
    subject?: (fhir.Reference | null)[] | undefined;
    /**
     * Overall type of this authorization, for example drug marketing approval, orphan drug designation.
     */
    type?: fhir.CodeableConcept | undefined;
    /**
     * General textual supporting information.
     */
    description?: string | undefined;
    /**
     * Extended properties for primitive element: RegulatedAuthorization.description
     */
    _description?: fhir.FhirElement;
    /**
     * The territory (e.g., country, jurisdiction etc.) in which the authorization has been granted.
     */
    region?: (fhir.CodeableConcept | null)[] | undefined;
    /**
     * The status that is authorised e.g. approved. Intermediate states and actions can be tracked with cases and applications.
     */
    status?: fhir.CodeableConcept | undefined;
    /**
     * The date at which the current status was assigned.
     */
    statusDate?: string | undefined;
    /**
     * Extended properties for primitive element: RegulatedAuthorization.statusDate
     */
    _statusDate?: fhir.FhirElement;
    /**
     * The time period in which the regulatory approval, clearance or licencing is in effect. As an example, a Marketing Authorization includes the date of authorization and/or an expiration date.
     */
    validityPeriod?: fhir.Period | undefined;
    /**
     * Condition for which the use of the regulated product applies.
     */
    indication?: fhir.CodeableReference | undefined;
    /**
     * The intended use of the product, e.g. prevention, treatment, diagnosis.
     */
    intendedUse?: fhir.CodeableConcept | undefined;
    /**
     * The legal or regulatory framework against which this authorization is granted, or other reasons for it.
     */
    basis?: (fhir.CodeableConcept | null)[] | undefined;
    /**
     * The organization that has been granted this authorization, by some authoritative body (the 'regulator').
     */
    holder?: fhir.Reference | undefined;
    /**
     * The regulatory authority or authorizing body granting the authorization. For example, European Medicines Agency (EMA), Food and Drug Administration (FDA), Health Canada (HC), etc.
     */
    regulator?: fhir.Reference | undefined;
    /**
     * The case or regulatory procedure for granting or amending a regulated authorization. An authorization is granted in response to submissions/applications by those seeking authorization. A case is the administrative process that deals with the application(s) that relate to this and assesses them. Note: This area is subject to ongoing review and the workgroup is seeking implementer feedback on its use (see link at bottom of page).
     */
    case?: fhir.RegulatedAuthorizationCase | undefined;
}
//# sourceMappingURL=RegulatedAuthorization.d.ts.map
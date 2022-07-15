import * as fhir from '../fhir.js';
/**
 * Valid arguments for the RegulatedAuthorizationCase type.
 */
export interface RegulatedAuthorizationCaseArgs extends fhir.BackboneElementArgs {
    /**
     * Identifier by which this case can be referenced.
     */
    identifier?: fhir.IdentifierArgs | undefined;
    /**
     * The defining type of case.
     */
    type?: fhir.CodeableConceptArgs | undefined;
    /**
     * The status associated with the case.
     */
    status?: fhir.CodeableConceptArgs | undefined;
    /**
     * Relevant date for this case.
     */
    date?: fhir.Period | fhir.FhirDateTime | undefined;
    /**
     * Relevant date for this case.
     */
    datePeriod?: fhir.PeriodArgs | undefined;
    /**
     * Relevant date for this case.
     */
    dateDateTime?: fhir.FhirDateTime | string | undefined;
    /**
     * A regulatory submission from an organization to a regulator, as part of an assessing case. Multiple applications may occur over time, with more or different information to support or modify the submission or the authorization. The applications can be considered as steps within the longer running case or procedure for this authorization process.
     */
    application?: fhir.RegulatedAuthorizationCaseArgs[] | undefined;
}
/**
 * The case or regulatory procedure for granting or amending a regulated authorization. An authorization is granted in response to submissions/applications by those seeking authorization. A case is the administrative process that deals with the application(s) that relate to this and assesses them. Note: This area is subject to ongoing review and the workgroup is seeking implementer feedback on its use (see link at bottom of page).
 */
export declare class RegulatedAuthorizationCase extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
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
    date?: (fhir.Period | fhir.FhirDateTime) | undefined;
    /**
     * Internal flag to properly serialize choice-type element RegulatedAuthorization.case.date[x]
     */
    protected static readonly _fts_dateIsChoice: true;
    /**
     * A regulatory submission from an organization to a regulator, as part of an assessing case. Multiple applications may occur over time, with more or different information to support or modify the submission or the authorization. The applications can be considered as steps within the longer running case or procedure for this authorization process.
     */
    application: fhir.RegulatedAuthorizationCase[];
    /**
     * Default constructor for RegulatedAuthorizationCase - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<RegulatedAuthorizationCaseArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the RegulatedAuthorization type.
 */
export interface RegulatedAuthorizationArgs extends fhir.DomainResourceArgs {
    /**
     * Resource Type Name
     */
    resourceType: "RegulatedAuthorization" | undefined;
    /**
     * Business identifier for the authorization, typically assigned by the authorizing body.
     */
    identifier?: fhir.IdentifierArgs[] | undefined;
    /**
     * The product type, treatment, facility or activity that is being authorized.
     */
    subject?: fhir.ReferenceArgs[] | undefined;
    /**
     * Overall type of this authorization, for example drug marketing approval, orphan drug designation.
     */
    type?: fhir.CodeableConceptArgs | undefined;
    /**
     * General textual supporting information.
     */
    description?: fhir.FhirMarkdown | string | undefined;
    /**
     * Extended properties for primitive element: RegulatedAuthorization.description
     */
    _description?: fhir.FhirElementArgs;
    /**
     * The territory (e.g., country, jurisdiction etc.) in which the authorization has been granted.
     */
    region?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * The status that is authorised e.g. approved. Intermediate states and actions can be tracked with cases and applications.
     */
    status?: fhir.CodeableConceptArgs | undefined;
    /**
     * The date at which the current status was assigned.
     */
    statusDate?: fhir.FhirDateTime | string | undefined;
    /**
     * Extended properties for primitive element: RegulatedAuthorization.statusDate
     */
    _statusDate?: fhir.FhirElementArgs;
    /**
     * The time period in which the regulatory approval, clearance or licencing is in effect. As an example, a Marketing Authorization includes the date of authorization and/or an expiration date.
     */
    validityPeriod?: fhir.PeriodArgs | undefined;
    /**
     * Condition for which the use of the regulated product applies.
     */
    indication?: fhir.CodeableReferenceArgs | undefined;
    /**
     * The intended use of the product, e.g. prevention, treatment, diagnosis.
     */
    intendedUse?: fhir.CodeableConceptArgs | undefined;
    /**
     * The legal or regulatory framework against which this authorization is granted, or other reasons for it.
     */
    basis?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * The organization that has been granted this authorization, by some authoritative body (the 'regulator').
     */
    holder?: fhir.ReferenceArgs | undefined;
    /**
     * The regulatory authority or authorizing body granting the authorization. For example, European Medicines Agency (EMA), Food and Drug Administration (FDA), Health Canada (HC), etc.
     */
    regulator?: fhir.ReferenceArgs | undefined;
    /**
     * The case or regulatory procedure for granting or amending a regulated authorization. An authorization is granted in response to submissions/applications by those seeking authorization. A case is the administrative process that deals with the application(s) that relate to this and assesses them. Note: This area is subject to ongoing review and the workgroup is seeking implementer feedback on its use (see link at bottom of page).
     */
    case?: fhir.RegulatedAuthorizationCaseArgs | undefined;
}
/**
 * Regulatory approval, clearance or licencing related to a regulated product, treatment, facility or activity that is cited in a guidance, regulation, rule or legislative act. An example is Market Authorization relating to a Medicinal Product.
 */
export declare class RegulatedAuthorization extends fhir.DomainResource {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Resource Type Name
     */
    resourceType: "RegulatedAuthorization";
    /**
     * Business identifier for the authorization, typically assigned by the authorizing body.
     */
    identifier: fhir.Identifier[];
    /**
     * The product type, treatment, facility or activity that is being authorized.
     */
    subject: fhir.Reference[];
    /**
     * Overall type of this authorization, for example drug marketing approval, orphan drug designation.
     */
    type?: fhir.CodeableConcept | undefined;
    /**
     * General textual supporting information.
     */
    description?: fhir.FhirMarkdown | undefined;
    /**
     * The territory (e.g., country, jurisdiction etc.) in which the authorization has been granted.
     */
    region: fhir.CodeableConcept[];
    /**
     * The status that is authorised e.g. approved. Intermediate states and actions can be tracked with cases and applications.
     */
    status?: fhir.CodeableConcept | undefined;
    /**
     * The date at which the current status was assigned.
     */
    statusDate?: fhir.FhirDateTime | undefined;
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
    basis: fhir.CodeableConcept[];
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
    /**
     * Default constructor for RegulatedAuthorization - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<RegulatedAuthorizationArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
//# sourceMappingURL=RegulatedAuthorization.d.ts.map
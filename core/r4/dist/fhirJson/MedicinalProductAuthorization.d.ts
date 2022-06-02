import * as fhir from '../fhirJson.js';
/**
 * Authorization in areas within a country.
 */
export interface MedicinalProductAuthorizationJurisdictionalAuthorization extends fhir.BackboneElement {
    /**
     * The assigned number for the marketing authorization.
     */
    identifier?: (fhir.Identifier | null)[] | undefined;
    /**
     * Country of authorization.
     */
    country?: fhir.CodeableConcept | undefined;
    /**
     * Jurisdiction within a country.
     */
    jurisdiction?: (fhir.CodeableConcept | null)[] | undefined;
    /**
     * The legal status of supply in a jurisdiction or region.
     */
    legalStatusOfSupply?: fhir.CodeableConcept | undefined;
    /**
     * The start and expected end date of the authorization.
     */
    validityPeriod?: fhir.Period | undefined;
}
/**
 * The regulatory procedure for granting or amending a marketing authorization.
 */
export interface MedicinalProductAuthorizationProcedure extends fhir.BackboneElement {
    /**
     * Identifier for this procedure.
     */
    identifier?: fhir.Identifier | undefined;
    /**
     * Type of procedure.
     */
    type: fhir.CodeableConcept | null;
    /**
     * Date of procedure.
     */
    datePeriod?: fhir.Period | undefined;
    /**
     * Date of procedure.
     */
    dateDateTime?: string | undefined;
    /**
     * Extended properties for primitive element: MedicinalProductAuthorization.procedure.date[x]
     */
    _dateDateTime?: fhir.FhirElement;
    /**
     * Applcations submitted to obtain a marketing authorization.
     */
    application?: (fhir.MedicinalProductAuthorizationProcedure | null)[] | undefined;
}
/**
 * The regulatory authorization of a medicinal product.
 */
export interface MedicinalProductAuthorization extends fhir.DomainResource {
    /**
     * Resource Type Name
     */
    resourceType: "MedicinalProductAuthorization" | null;
    /**
     * Business identifier for the marketing authorization, as assigned by a regulator.
     */
    identifier?: (fhir.Identifier | null)[] | undefined;
    /**
     * The medicinal product that is being authorized.
     */
    subject?: fhir.Reference | undefined;
    /**
     * The country in which the marketing authorization has been granted.
     */
    country?: (fhir.CodeableConcept | null)[] | undefined;
    /**
     * Jurisdiction within a country.
     */
    jurisdiction?: (fhir.CodeableConcept | null)[] | undefined;
    /**
     * The status of the marketing authorization.
     */
    status?: fhir.CodeableConcept | undefined;
    /**
     * The date at which the given status has become applicable.
     */
    statusDate?: string | undefined;
    /**
     * Extended properties for primitive element: MedicinalProductAuthorization.statusDate
     */
    _statusDate?: fhir.FhirElement;
    /**
     * The date when a suspended the marketing or the marketing authorization of the product is anticipated to be restored.
     */
    restoreDate?: string | undefined;
    /**
     * Extended properties for primitive element: MedicinalProductAuthorization.restoreDate
     */
    _restoreDate?: fhir.FhirElement;
    /**
     * The beginning of the time period in which the marketing authorization is in the specific status shall be specified A complete date consisting of day, month and year shall be specified using the ISO 8601 date format.
     */
    validityPeriod?: fhir.Period | undefined;
    /**
     * A period of time after authorization before generic product applicatiosn can be submitted.
     */
    dataExclusivityPeriod?: fhir.Period | undefined;
    /**
     * The date when the first authorization was granted by a Medicines Regulatory Agency.
     */
    dateOfFirstAuthorization?: string | undefined;
    /**
     * Extended properties for primitive element: MedicinalProductAuthorization.dateOfFirstAuthorization
     */
    _dateOfFirstAuthorization?: fhir.FhirElement;
    /**
     * Date of first marketing authorization for a company's new medicinal product in any country in the World.
     */
    internationalBirthDate?: string | undefined;
    /**
     * Extended properties for primitive element: MedicinalProductAuthorization.internationalBirthDate
     */
    _internationalBirthDate?: fhir.FhirElement;
    /**
     * The legal framework against which this authorization is granted.
     */
    legalBasis?: fhir.CodeableConcept | undefined;
    /**
     * Authorization in areas within a country.
     */
    jurisdictionalAuthorization?: (fhir.MedicinalProductAuthorizationJurisdictionalAuthorization | null)[] | undefined;
    /**
     * Marketing Authorization Holder.
     */
    holder?: fhir.Reference | undefined;
    /**
     * Medicines Regulatory Agency.
     */
    regulator?: fhir.Reference | undefined;
    /**
     * The regulatory procedure for granting or amending a marketing authorization.
     */
    procedure?: fhir.MedicinalProductAuthorizationProcedure | undefined;
}
//# sourceMappingURL=MedicinalProductAuthorization.d.ts.map
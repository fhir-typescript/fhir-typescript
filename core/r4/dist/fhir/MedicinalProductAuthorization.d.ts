import * as fhir from '../fhir.js';
/**
 * Valid arguments for the MedicinalProductAuthorizationJurisdictionalAuthorization type.
 */
export interface MedicinalProductAuthorizationJurisdictionalAuthorizationArgs extends fhir.BackboneElementArgs {
    /**
     * The assigned number for the marketing authorization.
     */
    identifier?: fhir.IdentifierArgs[] | undefined;
    /**
     * Country of authorization.
     */
    country?: fhir.CodeableConceptArgs | undefined;
    /**
     * Jurisdiction within a country.
     */
    jurisdiction?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * The legal status of supply in a jurisdiction or region.
     */
    legalStatusOfSupply?: fhir.CodeableConceptArgs | undefined;
    /**
     * The start and expected end date of the authorization.
     */
    validityPeriod?: fhir.PeriodArgs | undefined;
}
/**
 * Authorization in areas within a country.
 */
export declare class MedicinalProductAuthorizationJurisdictionalAuthorization extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * The assigned number for the marketing authorization.
     */
    identifier: fhir.Identifier[];
    /**
     * Country of authorization.
     */
    country?: fhir.CodeableConcept | undefined;
    /**
     * Jurisdiction within a country.
     */
    jurisdiction: fhir.CodeableConcept[];
    /**
     * The legal status of supply in a jurisdiction or region.
     */
    legalStatusOfSupply?: fhir.CodeableConcept | undefined;
    /**
     * The start and expected end date of the authorization.
     */
    validityPeriod?: fhir.Period | undefined;
    /**
     * Default constructor for MedicinalProductAuthorizationJurisdictionalAuthorization - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<MedicinalProductAuthorizationJurisdictionalAuthorizationArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.FtsIssue[];
}
/**
 * Valid arguments for the MedicinalProductAuthorizationProcedure type.
 */
export interface MedicinalProductAuthorizationProcedureArgs extends fhir.BackboneElementArgs {
    /**
     * Identifier for this procedure.
     */
    identifier?: fhir.IdentifierArgs | undefined;
    /**
     * Type of procedure.
     */
    type: fhir.CodeableConceptArgs | null;
    /**
     * Date of procedure.
     */
    date?: fhir.Period | fhir.FhirDateTime | undefined;
    /**
     * Date of procedure.
     */
    datePeriod?: fhir.PeriodArgs | undefined;
    /**
     * Date of procedure.
     */
    dateDateTime?: fhir.FhirDateTime | string | undefined;
    /**
     * Applcations submitted to obtain a marketing authorization.
     */
    application?: fhir.MedicinalProductAuthorizationProcedureArgs[] | undefined;
}
/**
 * The regulatory procedure for granting or amending a marketing authorization.
 */
export declare class MedicinalProductAuthorizationProcedure extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
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
    date?: (fhir.Period | fhir.FhirDateTime) | undefined;
    /**
     * Internal flag to properly serialize choice-type element MedicinalProductAuthorization.procedure.date[x]
     */
    protected static readonly _fts_dateIsChoice: true;
    /**
     * Applcations submitted to obtain a marketing authorization.
     */
    application: fhir.MedicinalProductAuthorizationProcedure[];
    /**
     * Default constructor for MedicinalProductAuthorizationProcedure - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<MedicinalProductAuthorizationProcedureArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.FtsIssue[];
}
/**
 * Valid arguments for the MedicinalProductAuthorization type.
 */
export interface MedicinalProductAuthorizationArgs extends fhir.DomainResourceArgs {
    /**
     * Resource Type Name
     */
    resourceType: "MedicinalProductAuthorization" | undefined;
    /**
     * Business identifier for the marketing authorization, as assigned by a regulator.
     */
    identifier?: fhir.IdentifierArgs[] | undefined;
    /**
     * The medicinal product that is being authorized.
     */
    subject?: fhir.ReferenceArgs | undefined;
    /**
     * The country in which the marketing authorization has been granted.
     */
    country?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * Jurisdiction within a country.
     */
    jurisdiction?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * The status of the marketing authorization.
     */
    status?: fhir.CodeableConceptArgs | undefined;
    /**
     * The date at which the given status has become applicable.
     */
    statusDate?: fhir.FhirDateTime | string | undefined;
    /**
     * The date when a suspended the marketing or the marketing authorization of the product is anticipated to be restored.
     */
    restoreDate?: fhir.FhirDateTime | string | undefined;
    /**
     * The beginning of the time period in which the marketing authorization is in the specific status shall be specified A complete date consisting of day, month and year shall be specified using the ISO 8601 date format.
     */
    validityPeriod?: fhir.PeriodArgs | undefined;
    /**
     * A period of time after authorization before generic product applicatiosn can be submitted.
     */
    dataExclusivityPeriod?: fhir.PeriodArgs | undefined;
    /**
     * The date when the first authorization was granted by a Medicines Regulatory Agency.
     */
    dateOfFirstAuthorization?: fhir.FhirDateTime | string | undefined;
    /**
     * Date of first marketing authorization for a company's new medicinal product in any country in the World.
     */
    internationalBirthDate?: fhir.FhirDateTime | string | undefined;
    /**
     * The legal framework against which this authorization is granted.
     */
    legalBasis?: fhir.CodeableConceptArgs | undefined;
    /**
     * Authorization in areas within a country.
     */
    jurisdictionalAuthorization?: fhir.MedicinalProductAuthorizationJurisdictionalAuthorizationArgs[] | undefined;
    /**
     * Marketing Authorization Holder.
     */
    holder?: fhir.ReferenceArgs | undefined;
    /**
     * Medicines Regulatory Agency.
     */
    regulator?: fhir.ReferenceArgs | undefined;
    /**
     * The regulatory procedure for granting or amending a marketing authorization.
     */
    procedure?: fhir.MedicinalProductAuthorizationProcedureArgs | undefined;
}
/**
 * The regulatory authorization of a medicinal product.
 */
export declare class MedicinalProductAuthorization extends fhir.DomainResource {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Resource Type Name
     */
    resourceType: "MedicinalProductAuthorization";
    /**
     * Business identifier for the marketing authorization, as assigned by a regulator.
     */
    identifier: fhir.Identifier[];
    /**
     * The medicinal product that is being authorized.
     */
    subject?: fhir.Reference | undefined;
    /**
     * The country in which the marketing authorization has been granted.
     */
    country: fhir.CodeableConcept[];
    /**
     * Jurisdiction within a country.
     */
    jurisdiction: fhir.CodeableConcept[];
    /**
     * The status of the marketing authorization.
     */
    status?: fhir.CodeableConcept | undefined;
    /**
     * The date at which the given status has become applicable.
     */
    statusDate?: fhir.FhirDateTime | undefined;
    /**
     * The date when a suspended the marketing or the marketing authorization of the product is anticipated to be restored.
     */
    restoreDate?: fhir.FhirDateTime | undefined;
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
    dateOfFirstAuthorization?: fhir.FhirDateTime | undefined;
    /**
     * Date of first marketing authorization for a company's new medicinal product in any country in the World.
     */
    internationalBirthDate?: fhir.FhirDateTime | undefined;
    /**
     * The legal framework against which this authorization is granted.
     */
    legalBasis?: fhir.CodeableConcept | undefined;
    /**
     * Authorization in areas within a country.
     */
    jurisdictionalAuthorization: fhir.MedicinalProductAuthorizationJurisdictionalAuthorization[];
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
    /**
     * Default constructor for MedicinalProductAuthorization - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<MedicinalProductAuthorizationArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.FtsIssue[];
}
//# sourceMappingURL=MedicinalProductAuthorization.d.ts.map
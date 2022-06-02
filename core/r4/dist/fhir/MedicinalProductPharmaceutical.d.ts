import * as fhir from '../fhir.js';
/**
 * Valid arguments for the MedicinalProductPharmaceuticalCharacteristics type.
 */
export interface MedicinalProductPharmaceuticalCharacteristicsArgs extends fhir.BackboneElementArgs {
    /**
     * A coded characteristic.
     */
    code: fhir.CodeableConceptArgs | null;
    /**
     * The status of characteristic e.g. assigned or pending.
     */
    status?: fhir.CodeableConceptArgs | undefined;
}
/**
 * Characteristics e.g. a products onset of action.
 */
export declare class MedicinalProductPharmaceuticalCharacteristics extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * A coded characteristic.
     */
    code: fhir.CodeableConcept | null;
    /**
     * The status of characteristic e.g. assigned or pending.
     */
    status?: fhir.CodeableConcept | undefined;
    /**
     * Default constructor for MedicinalProductPharmaceuticalCharacteristics - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<MedicinalProductPharmaceuticalCharacteristicsArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(expression?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesWithdrawalPeriod type.
 */
export interface MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesWithdrawalPeriodArgs extends fhir.BackboneElementArgs {
    /**
     * Coded expression for the type of tissue for which the withdrawal period applues, e.g. meat, milk.
     */
    tissue: fhir.CodeableConceptArgs | null;
    /**
     * A value for the time.
     */
    value: fhir.QuantityArgs | null;
    /**
     * Extra information about the withdrawal period.
     */
    supportingInformation?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: MedicinalProductPharmaceutical.routeOfAdministration.targetSpecies.withdrawalPeriod.supportingInformation
     */
    _supportingInformation?: fhir.FhirElementArgs;
}
/**
 * A species specific time during which consumption of animal product is not appropriate.
 */
export declare class MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesWithdrawalPeriod extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Coded expression for the type of tissue for which the withdrawal period applues, e.g. meat, milk.
     */
    tissue: fhir.CodeableConcept | null;
    /**
     * A value for the time.
     */
    value: fhir.Quantity | null;
    /**
     * Extra information about the withdrawal period.
     */
    supportingInformation?: fhir.FhirString | undefined;
    /**
     * Default constructor for MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesWithdrawalPeriod - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesWithdrawalPeriodArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(expression?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpecies type.
 */
export interface MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesArgs extends fhir.BackboneElementArgs {
    /**
     * Coded expression for the species.
     */
    code: fhir.CodeableConceptArgs | null;
    /**
     * A species specific time during which consumption of animal product is not appropriate.
     */
    withdrawalPeriod?: fhir.MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesWithdrawalPeriodArgs[] | undefined;
}
/**
 * A species for which this route applies.
 */
export declare class MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpecies extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Coded expression for the species.
     */
    code: fhir.CodeableConcept | null;
    /**
     * A species specific time during which consumption of animal product is not appropriate.
     */
    withdrawalPeriod: fhir.MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesWithdrawalPeriod[];
    /**
     * Default constructor for MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpecies - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(expression?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the MedicinalProductPharmaceuticalRouteOfAdministration type.
 */
export interface MedicinalProductPharmaceuticalRouteOfAdministrationArgs extends fhir.BackboneElementArgs {
    /**
     * Coded expression for the route.
     */
    code: fhir.CodeableConceptArgs | null;
    /**
     * The first dose (dose quantity) administered in humans can be specified, for a product under investigation, using a numerical value and its unit of measurement.
     */
    firstDose?: fhir.QuantityArgs | undefined;
    /**
     * The maximum single dose that can be administered as per the protocol of a clinical trial can be specified using a numerical value and its unit of measurement.
     */
    maxSingleDose?: fhir.QuantityArgs | undefined;
    /**
     * The maximum dose per day (maximum dose quantity to be administered in any one 24-h period) that can be administered as per the protocol referenced in the clinical trial authorisation.
     */
    maxDosePerDay?: fhir.QuantityArgs | undefined;
    /**
     * The maximum dose per treatment period that can be administered as per the protocol referenced in the clinical trial authorisation.
     */
    maxDosePerTreatmentPeriod?: fhir.RatioArgs | undefined;
    /**
     * The maximum treatment period during which an Investigational Medicinal Product can be administered as per the protocol referenced in the clinical trial authorisation.
     */
    maxTreatmentPeriod?: fhir.DurationArgs | undefined;
    /**
     * A species for which this route applies.
     */
    targetSpecies?: fhir.MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesArgs[] | undefined;
}
/**
 * The path by which the pharmaceutical product is taken into or makes contact with the body.
 */
export declare class MedicinalProductPharmaceuticalRouteOfAdministration extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Coded expression for the route.
     */
    code: fhir.CodeableConcept | null;
    /**
     * The first dose (dose quantity) administered in humans can be specified, for a product under investigation, using a numerical value and its unit of measurement.
     */
    firstDose?: fhir.Quantity | undefined;
    /**
     * The maximum single dose that can be administered as per the protocol of a clinical trial can be specified using a numerical value and its unit of measurement.
     */
    maxSingleDose?: fhir.Quantity | undefined;
    /**
     * The maximum dose per day (maximum dose quantity to be administered in any one 24-h period) that can be administered as per the protocol referenced in the clinical trial authorisation.
     */
    maxDosePerDay?: fhir.Quantity | undefined;
    /**
     * The maximum dose per treatment period that can be administered as per the protocol referenced in the clinical trial authorisation.
     */
    maxDosePerTreatmentPeriod?: fhir.Ratio | undefined;
    /**
     * The maximum treatment period during which an Investigational Medicinal Product can be administered as per the protocol referenced in the clinical trial authorisation.
     */
    maxTreatmentPeriod?: fhir.Duration | undefined;
    /**
     * A species for which this route applies.
     */
    targetSpecies: fhir.MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpecies[];
    /**
     * Default constructor for MedicinalProductPharmaceuticalRouteOfAdministration - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<MedicinalProductPharmaceuticalRouteOfAdministrationArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(expression?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the MedicinalProductPharmaceutical type.
 */
export interface MedicinalProductPharmaceuticalArgs extends fhir.DomainResourceArgs {
    /**
     * Resource Type Name
     */
    resourceType: "MedicinalProductPharmaceutical" | undefined;
    /**
     * An identifier for the pharmaceutical medicinal product.
     */
    identifier?: fhir.IdentifierArgs[] | undefined;
    /**
     * The administrable dose form, after necessary reconstitution.
     */
    administrableDoseForm: fhir.CodeableConceptArgs | null;
    /**
     * Todo.
     */
    unitOfPresentation?: fhir.CodeableConceptArgs | undefined;
    /**
     * Ingredient.
     */
    ingredient?: fhir.ReferenceArgs[] | undefined;
    /**
     * Accompanying device.
     */
    device?: fhir.ReferenceArgs[] | undefined;
    /**
     * Characteristics e.g. a products onset of action.
     */
    characteristics?: fhir.MedicinalProductPharmaceuticalCharacteristicsArgs[] | undefined;
    /**
     * The path by which the pharmaceutical product is taken into or makes contact with the body.
     */
    routeOfAdministration: fhir.MedicinalProductPharmaceuticalRouteOfAdministrationArgs[] | null;
}
/**
 * A pharmaceutical product described in terms of its composition and dose form.
 */
export declare class MedicinalProductPharmaceutical extends fhir.DomainResource {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Resource Type Name
     */
    resourceType: "MedicinalProductPharmaceutical";
    /**
     * An identifier for the pharmaceutical medicinal product.
     */
    identifier: fhir.Identifier[];
    /**
     * The administrable dose form, after necessary reconstitution.
     */
    administrableDoseForm: fhir.CodeableConcept | null;
    /**
     * Todo.
     */
    unitOfPresentation?: fhir.CodeableConcept | undefined;
    /**
     * Ingredient.
     */
    ingredient: fhir.Reference[];
    /**
     * Accompanying device.
     */
    device: fhir.Reference[];
    /**
     * Characteristics e.g. a products onset of action.
     */
    characteristics: fhir.MedicinalProductPharmaceuticalCharacteristics[];
    /**
     * The path by which the pharmaceutical product is taken into or makes contact with the body.
     */
    routeOfAdministration: fhir.MedicinalProductPharmaceuticalRouteOfAdministration[];
    /**
     * Default constructor for MedicinalProductPharmaceutical - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<MedicinalProductPharmaceuticalArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(expression?: string): fhir.FtsIssue[];
}
//# sourceMappingURL=MedicinalProductPharmaceutical.d.ts.map
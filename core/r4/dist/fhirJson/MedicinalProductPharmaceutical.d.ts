import * as fhir from '../fhirJson.js';
/**
 * Characteristics e.g. a products onset of action.
 */
export interface MedicinalProductPharmaceuticalCharacteristics extends fhir.BackboneElement {
    /**
     * A coded characteristic.
     */
    code: fhir.CodeableConcept | null;
    /**
     * The status of characteristic e.g. assigned or pending.
     */
    status?: fhir.CodeableConcept | undefined;
}
/**
 * A species specific time during which consumption of animal product is not appropriate.
 */
export interface MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesWithdrawalPeriod extends fhir.BackboneElement {
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
    supportingInformation?: string | undefined;
    /**
     * Extended properties for primitive element: MedicinalProductPharmaceutical.routeOfAdministration.targetSpecies.withdrawalPeriod.supportingInformation
     */
    _supportingInformation?: fhir.FhirElement;
}
/**
 * A species for which this route applies.
 */
export interface MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpecies extends fhir.BackboneElement {
    /**
     * Coded expression for the species.
     */
    code: fhir.CodeableConcept | null;
    /**
     * A species specific time during which consumption of animal product is not appropriate.
     */
    withdrawalPeriod?: (fhir.MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesWithdrawalPeriod | null)[] | undefined;
}
/**
 * The path by which the pharmaceutical product is taken into or makes contact with the body.
 */
export interface MedicinalProductPharmaceuticalRouteOfAdministration extends fhir.BackboneElement {
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
    targetSpecies?: (fhir.MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpecies | null)[] | undefined;
}
/**
 * A pharmaceutical product described in terms of its composition and dose form.
 */
export interface MedicinalProductPharmaceutical extends fhir.DomainResource {
    /**
     * Resource Type Name
     */
    resourceType: "MedicinalProductPharmaceutical" | null;
    /**
     * An identifier for the pharmaceutical medicinal product.
     */
    identifier?: (fhir.Identifier | null)[] | undefined;
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
    ingredient?: (fhir.Reference | null)[] | undefined;
    /**
     * Accompanying device.
     */
    device?: (fhir.Reference | null)[] | undefined;
    /**
     * Characteristics e.g. a products onset of action.
     */
    characteristics?: (fhir.MedicinalProductPharmaceuticalCharacteristics | null)[] | undefined;
    /**
     * The path by which the pharmaceutical product is taken into or makes contact with the body.
     */
    routeOfAdministration: (fhir.MedicinalProductPharmaceuticalRouteOfAdministration | null)[] | null;
}
//# sourceMappingURL=MedicinalProductPharmaceutical.d.ts.map
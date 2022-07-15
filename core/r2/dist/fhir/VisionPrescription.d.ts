import * as fhir from '../fhir.js';
import { VisionEyeCodeType } from '../fhirValueSets/VisionEyeCodes.js';
import { VisionBaseCodeType } from '../fhirValueSets/VisionBaseCodes.js';
/**
 * Valid arguments for the VisionPrescriptionDispense type.
 */
export interface VisionPrescriptionDispenseArgs extends fhir.BackboneElementArgs {
    /**
     * Identifies the type of vision correction product which is required for the patient.
     */
    product: fhir.CodingArgs | null;
    /**
     * The eye for which the lens applies.
     */
    eye?: fhir.FhirCode<VisionEyeCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: VisionPrescription.dispense.eye
     */
    _eye?: fhir.FhirElementArgs;
    /**
     * Lens power measured in diopters (0.25 units).
     */
    sphere?: fhir.FhirDecimal | number | undefined;
    /**
     * Extended properties for primitive element: VisionPrescription.dispense.sphere
     */
    _sphere?: fhir.FhirElementArgs;
    /**
     * Power adjustment for astigmatism measured in diopters (0.25 units).
     */
    cylinder?: fhir.FhirDecimal | number | undefined;
    /**
     * Extended properties for primitive element: VisionPrescription.dispense.cylinder
     */
    _cylinder?: fhir.FhirElementArgs;
    /**
     * Adjustment for astigmatism measured in integer degrees.
     */
    axis?: fhir.FhirInteger | number | undefined;
    /**
     * Extended properties for primitive element: VisionPrescription.dispense.axis
     */
    _axis?: fhir.FhirElementArgs;
    /**
     * Amount of prism to compensate for eye alignment in fractional units.
     */
    prism?: fhir.FhirDecimal | number | undefined;
    /**
     * Extended properties for primitive element: VisionPrescription.dispense.prism
     */
    _prism?: fhir.FhirElementArgs;
    /**
     * The relative base, or reference lens edge, for the prism.
     */
    base?: fhir.FhirCode<VisionBaseCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: VisionPrescription.dispense.base
     */
    _base?: fhir.FhirElementArgs;
    /**
     * Power adjustment for multifocal lenses measured in diopters (0.25 units).
     */
    add?: fhir.FhirDecimal | number | undefined;
    /**
     * Extended properties for primitive element: VisionPrescription.dispense.add
     */
    _add?: fhir.FhirElementArgs;
    /**
     * Contact lens power measured in diopters (0.25 units).
     */
    power?: fhir.FhirDecimal | number | undefined;
    /**
     * Extended properties for primitive element: VisionPrescription.dispense.power
     */
    _power?: fhir.FhirElementArgs;
    /**
     * Back curvature measured in millimeters.
     */
    backCurve?: fhir.FhirDecimal | number | undefined;
    /**
     * Extended properties for primitive element: VisionPrescription.dispense.backCurve
     */
    _backCurve?: fhir.FhirElementArgs;
    /**
     * Contact lens diameter measured in millimeters.
     */
    diameter?: fhir.FhirDecimal | number | undefined;
    /**
     * Extended properties for primitive element: VisionPrescription.dispense.diameter
     */
    _diameter?: fhir.FhirElementArgs;
    /**
     * The recommended maximum wear period for the lens.
     */
    duration?: fhir.QuantityArgs | undefined;
    /**
     * Special color or pattern.
     */
    color?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: VisionPrescription.dispense.color
     */
    _color?: fhir.FhirElementArgs;
    /**
     * Brand recommendations or restrictions.
     */
    brand?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: VisionPrescription.dispense.brand
     */
    _brand?: fhir.FhirElementArgs;
    /**
     * Notes for special requirements such as coatings and lens materials.
     */
    notes?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: VisionPrescription.dispense.notes
     */
    _notes?: fhir.FhirElementArgs;
}
/**
 * Deals with details of the dispense part of the supply specification.
 */
export declare class VisionPrescriptionDispense extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Identifies the type of vision correction product which is required for the patient.
     */
    product: fhir.Coding | null;
    /**
     * The eye for which the lens applies.
     */
    eye?: fhir.FhirCode<VisionEyeCodeType> | undefined;
    /**
     * Lens power measured in diopters (0.25 units).
     */
    sphere?: fhir.FhirDecimal | undefined;
    /**
     * Power adjustment for astigmatism measured in diopters (0.25 units).
     */
    cylinder?: fhir.FhirDecimal | undefined;
    /**
     * Adjustment for astigmatism measured in integer degrees.
     */
    axis?: fhir.FhirInteger | undefined;
    /**
     * Amount of prism to compensate for eye alignment in fractional units.
     */
    prism?: fhir.FhirDecimal | undefined;
    /**
     * The relative base, or reference lens edge, for the prism.
     */
    base?: fhir.FhirCode<VisionBaseCodeType> | undefined;
    /**
     * Power adjustment for multifocal lenses measured in diopters (0.25 units).
     */
    add?: fhir.FhirDecimal | undefined;
    /**
     * Contact lens power measured in diopters (0.25 units).
     */
    power?: fhir.FhirDecimal | undefined;
    /**
     * Back curvature measured in millimeters.
     */
    backCurve?: fhir.FhirDecimal | undefined;
    /**
     * Contact lens diameter measured in millimeters.
     */
    diameter?: fhir.FhirDecimal | undefined;
    /**
     * The recommended maximum wear period for the lens.
     */
    duration?: fhir.Quantity | undefined;
    /**
     * Special color or pattern.
     */
    color?: fhir.FhirString | undefined;
    /**
     * Brand recommendations or restrictions.
     */
    brand?: fhir.FhirString | undefined;
    /**
     * Notes for special requirements such as coatings and lens materials.
     */
    notes?: fhir.FhirString | undefined;
    /**
     * Default constructor for VisionPrescriptionDispense - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<VisionPrescriptionDispenseArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the VisionPrescription type.
 */
export interface VisionPrescriptionArgs extends fhir.DomainResourceArgs {
    /**
     * Resource Type Name
     */
    resourceType: "VisionPrescription" | undefined;
    /**
     * Business identifier which may be used by other parties to reference or identify the prescription.
     */
    identifier?: fhir.IdentifierArgs[] | undefined;
    /**
     * The date (and perhaps time) when the prescription was written.
     */
    dateWritten?: fhir.FhirDateTime | string | undefined;
    /**
     * Extended properties for primitive element: VisionPrescription.dateWritten
     */
    _dateWritten?: fhir.FhirElementArgs;
    /**
     * A link to a resource representing the person to whom the vision products will be supplied.
     */
    patient?: fhir.ReferenceArgs | undefined;
    /**
     * The healthcare professional responsible for authorizing the prescription.
     */
    prescriber?: fhir.ReferenceArgs | undefined;
    /**
     * A link to a resource that identifies the particular occurrence of contact between patient and health care provider.
     */
    encounter?: fhir.ReferenceArgs | undefined;
    /**
     * Can be the reason or the indication for writing the prescription.
     */
    reason?: fhir.CodeableConcept | fhir.Reference | undefined;
    /**
     * Can be the reason or the indication for writing the prescription.
     */
    reasonCodeableConcept?: fhir.CodeableConceptArgs | undefined;
    /**
     * Can be the reason or the indication for writing the prescription.
     */
    reasonReference?: fhir.ReferenceArgs | undefined;
    /**
     * Deals with details of the dispense part of the supply specification.
     */
    dispense?: fhir.VisionPrescriptionDispenseArgs[] | undefined;
}
/**
 * An authorization for the supply of glasses and/or contact lenses to a patient.
 */
export declare class VisionPrescription extends fhir.DomainResource {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Resource Type Name
     */
    resourceType: "VisionPrescription";
    /**
     * Business identifier which may be used by other parties to reference or identify the prescription.
     */
    identifier: fhir.Identifier[];
    /**
     * The date (and perhaps time) when the prescription was written.
     */
    dateWritten?: fhir.FhirDateTime | undefined;
    /**
     * A link to a resource representing the person to whom the vision products will be supplied.
     */
    patient?: fhir.Reference | undefined;
    /**
     * The healthcare professional responsible for authorizing the prescription.
     */
    prescriber?: fhir.Reference | undefined;
    /**
     * A link to a resource that identifies the particular occurrence of contact between patient and health care provider.
     */
    encounter?: fhir.Reference | undefined;
    /**
     * Can be the reason or the indication for writing the prescription.
     */
    reason?: (fhir.CodeableConcept | fhir.Reference) | undefined;
    /**
     * Internal flag to properly serialize choice-type element VisionPrescription.reason[x]
     */
    protected static readonly _fts_reasonIsChoice: true;
    /**
     * Deals with details of the dispense part of the supply specification.
     */
    dispense: fhir.VisionPrescriptionDispense[];
    /**
     * Default constructor for VisionPrescription - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<VisionPrescriptionArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
//# sourceMappingURL=VisionPrescription.d.ts.map
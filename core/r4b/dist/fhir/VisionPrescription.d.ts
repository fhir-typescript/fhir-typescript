import * as fhir from '../fhir.js';
import { VisionBaseCodeType } from '../fhirValueSets/VisionBaseCodes.js';
import { VisionEyeCodeType } from '../fhirValueSets/VisionEyeCodes.js';
import { FmStatusCodeType } from '../fhirValueSets/FmStatusCodes.js';
/**
 * Valid arguments for the VisionPrescriptionLensSpecificationPrism type.
 */
export interface VisionPrescriptionLensSpecificationPrismArgs extends fhir.BackboneElementArgs {
    /**
     * Amount of prism to compensate for eye alignment in fractional units.
     */
    amount: fhir.FhirDecimal | number | undefined;
    /**
     * Extended properties for primitive element: VisionPrescription.lensSpecification.prism.amount
     */
    _amount?: fhir.FhirElementArgs;
    /**
     * The relative base, or reference lens edge, for the prism.
     */
    base: fhir.FhirCode<VisionBaseCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: VisionPrescription.lensSpecification.prism.base
     */
    _base?: fhir.FhirElementArgs;
}
/**
 * Allows for adjustment on two axis.
 */
export declare class VisionPrescriptionLensSpecificationPrism extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Amount of prism to compensate for eye alignment in fractional units.
     */
    amount: fhir.FhirDecimal | null;
    /**
     * The relative base, or reference lens edge, for the prism.
     */
    base: fhir.FhirCode<VisionBaseCodeType> | null;
    /**
     * Default constructor for VisionPrescriptionLensSpecificationPrism - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<VisionPrescriptionLensSpecificationPrismArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the VisionPrescriptionLensSpecification type.
 */
export interface VisionPrescriptionLensSpecificationArgs extends fhir.BackboneElementArgs {
    /**
     * Identifies the type of vision correction product which is required for the patient.
     */
    product: fhir.CodeableConceptArgs | null;
    /**
     * May also appear as OD (oculus dexter) for the right eye and OS (oculus siniter) for the left eye.
     */
    eye: fhir.FhirCode<VisionEyeCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: VisionPrescription.lensSpecification.eye
     */
    _eye?: fhir.FhirElementArgs;
    /**
     * The value is negative for near-sighted and positive for far sighted.
     * Often insurance will not cover a lens with power between +75 and -75.
     */
    sphere?: fhir.FhirDecimal | number | undefined;
    /**
     * Extended properties for primitive element: VisionPrescription.lensSpecification.sphere
     */
    _sphere?: fhir.FhirElementArgs;
    /**
     * Power adjustment for astigmatism measured in dioptres (0.25 units).
     */
    cylinder?: fhir.FhirDecimal | number | undefined;
    /**
     * Extended properties for primitive element: VisionPrescription.lensSpecification.cylinder
     */
    _cylinder?: fhir.FhirElementArgs;
    /**
     * The limits are +180 and -180 degrees.
     */
    axis?: fhir.FhirInteger | number | undefined;
    /**
     * Extended properties for primitive element: VisionPrescription.lensSpecification.axis
     */
    _axis?: fhir.FhirElementArgs;
    /**
     * Allows for adjustment on two axis.
     */
    prism?: fhir.VisionPrescriptionLensSpecificationPrismArgs[] | undefined;
    /**
     * Power adjustment for multifocal lenses measured in dioptres (0.25 units).
     */
    add?: fhir.FhirDecimal | number | undefined;
    /**
     * Extended properties for primitive element: VisionPrescription.lensSpecification.add
     */
    _add?: fhir.FhirElementArgs;
    /**
     * Contact lens power measured in dioptres (0.25 units).
     */
    power?: fhir.FhirDecimal | number | undefined;
    /**
     * Extended properties for primitive element: VisionPrescription.lensSpecification.power
     */
    _power?: fhir.FhirElementArgs;
    /**
     * Back curvature measured in millimetres.
     */
    backCurve?: fhir.FhirDecimal | number | undefined;
    /**
     * Extended properties for primitive element: VisionPrescription.lensSpecification.backCurve
     */
    _backCurve?: fhir.FhirElementArgs;
    /**
     * Contact lens diameter measured in millimetres.
     */
    diameter?: fhir.FhirDecimal | number | undefined;
    /**
     * Extended properties for primitive element: VisionPrescription.lensSpecification.diameter
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
     * Extended properties for primitive element: VisionPrescription.lensSpecification.color
     */
    _color?: fhir.FhirElementArgs;
    /**
     * Brand recommendations or restrictions.
     */
    brand?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: VisionPrescription.lensSpecification.brand
     */
    _brand?: fhir.FhirElementArgs;
    /**
     * Notes for special requirements such as coatings and lens materials.
     */
    note?: fhir.AnnotationArgs[] | undefined;
}
/**
 * Contain the details of  the individual lens specifications and serves as the authorization for the fullfillment by certified professionals.
 */
export declare class VisionPrescriptionLensSpecification extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Identifies the type of vision correction product which is required for the patient.
     */
    product: fhir.CodeableConcept | null;
    /**
     * May also appear as OD (oculus dexter) for the right eye and OS (oculus siniter) for the left eye.
     */
    eye: fhir.FhirCode<VisionEyeCodeType> | null;
    /**
     * The value is negative for near-sighted and positive for far sighted.
     * Often insurance will not cover a lens with power between +75 and -75.
     */
    sphere?: fhir.FhirDecimal | undefined;
    /**
     * Power adjustment for astigmatism measured in dioptres (0.25 units).
     */
    cylinder?: fhir.FhirDecimal | undefined;
    /**
     * The limits are +180 and -180 degrees.
     */
    axis?: fhir.FhirInteger | undefined;
    /**
     * Allows for adjustment on two axis.
     */
    prism: fhir.VisionPrescriptionLensSpecificationPrism[];
    /**
     * Power adjustment for multifocal lenses measured in dioptres (0.25 units).
     */
    add?: fhir.FhirDecimal | undefined;
    /**
     * Contact lens power measured in dioptres (0.25 units).
     */
    power?: fhir.FhirDecimal | undefined;
    /**
     * Back curvature measured in millimetres.
     */
    backCurve?: fhir.FhirDecimal | undefined;
    /**
     * Contact lens diameter measured in millimetres.
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
    note: fhir.Annotation[];
    /**
     * Default constructor for VisionPrescriptionLensSpecification - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<VisionPrescriptionLensSpecificationArgs>, options?: fhir.FhirConstructorOptions);
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
     * A unique identifier assigned to this vision prescription.
     */
    identifier?: fhir.IdentifierArgs[] | undefined;
    /**
     * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
     */
    status: fhir.FhirCode<FmStatusCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: VisionPrescription.status
     */
    _status?: fhir.FhirElementArgs;
    /**
     * The date this resource was created.
     */
    created: fhir.FhirDateTime | string | undefined;
    /**
     * Extended properties for primitive element: VisionPrescription.created
     */
    _created?: fhir.FhirElementArgs;
    /**
     * A resource reference to the person to whom the vision prescription applies.
     */
    patient: fhir.ReferenceArgs | null;
    /**
     * A reference to a resource that identifies the particular occurrence of contact between patient and health care provider during which the prescription was issued.
     */
    encounter?: fhir.ReferenceArgs | undefined;
    /**
     * Jurisdictions determine the valid lifetime of a prescription. Typically vision prescriptions are valid for two years from the date written.
     */
    dateWritten: fhir.FhirDateTime | string | undefined;
    /**
     * Extended properties for primitive element: VisionPrescription.dateWritten
     */
    _dateWritten?: fhir.FhirElementArgs;
    /**
     * The healthcare professional responsible for authorizing the prescription.
     */
    prescriber: fhir.ReferenceArgs | null;
    /**
     * Contain the details of  the individual lens specifications and serves as the authorization for the fullfillment by certified professionals.
     */
    lensSpecification: fhir.VisionPrescriptionLensSpecificationArgs[] | null;
}
/**
 * An authorization for the provision of glasses and/or contact lenses to a patient.
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
     * A unique identifier assigned to this vision prescription.
     */
    identifier: fhir.Identifier[];
    /**
     * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
     */
    status: fhir.FhirCode<FmStatusCodeType> | null;
    /**
     * The date this resource was created.
     */
    created: fhir.FhirDateTime | null;
    /**
     * A resource reference to the person to whom the vision prescription applies.
     */
    patient: fhir.Reference | null;
    /**
     * A reference to a resource that identifies the particular occurrence of contact between patient and health care provider during which the prescription was issued.
     */
    encounter?: fhir.Reference | undefined;
    /**
     * Jurisdictions determine the valid lifetime of a prescription. Typically vision prescriptions are valid for two years from the date written.
     */
    dateWritten: fhir.FhirDateTime | null;
    /**
     * The healthcare professional responsible for authorizing the prescription.
     */
    prescriber: fhir.Reference | null;
    /**
     * Contain the details of  the individual lens specifications and serves as the authorization for the fullfillment by certified professionals.
     */
    lensSpecification: fhir.VisionPrescriptionLensSpecification[];
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
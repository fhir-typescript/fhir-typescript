import * as fhir from '../fhirJson.js';
/**
 * Allows for adjustment on two axis.
 */
export interface VisionPrescriptionLensSpecificationPrism extends fhir.BackboneElement {
    /**
     * Amount of prism to compensate for eye alignment in fractional units.
     */
    amount: number | null;
    /**
     * Extended properties for primitive element: VisionPrescription.lensSpecification.prism.amount
     */
    _amount?: fhir.FhirElement;
    /**
     * The relative base, or reference lens edge, for the prism.
     */
    base: 'down' | 'in' | 'out' | 'up' | null;
    /**
     * Extended properties for primitive element: VisionPrescription.lensSpecification.prism.base
     */
    _base?: fhir.FhirElement;
}
/**
 * Contain the details of  the individual lens specifications and serves as the authorization for the fullfillment by certified professionals.
 */
export interface VisionPrescriptionLensSpecification extends fhir.BackboneElement {
    /**
     * Identifies the type of vision correction product which is required for the patient.
     */
    product: fhir.CodeableConcept | null;
    /**
     * May also appear as OD (oculus dexter) for the right eye and OS (oculus siniter) for the left eye.
     */
    eye: 'left' | 'right' | null;
    /**
     * Extended properties for primitive element: VisionPrescription.lensSpecification.eye
     */
    _eye?: fhir.FhirElement;
    /**
     * The value is negative for near-sighted and positive for far sighted.
     * Often insurance will not cover a lens with power between +75 and -75.
     */
    sphere?: number | undefined;
    /**
     * Extended properties for primitive element: VisionPrescription.lensSpecification.sphere
     */
    _sphere?: fhir.FhirElement;
    /**
     * Power adjustment for astigmatism measured in dioptres (0.25 units).
     */
    cylinder?: number | undefined;
    /**
     * Extended properties for primitive element: VisionPrescription.lensSpecification.cylinder
     */
    _cylinder?: fhir.FhirElement;
    /**
     * The limits are +180 and -180 degrees.
     */
    axis?: number | undefined;
    /**
     * Extended properties for primitive element: VisionPrescription.lensSpecification.axis
     */
    _axis?: fhir.FhirElement;
    /**
     * Allows for adjustment on two axis.
     */
    prism?: fhir.VisionPrescriptionLensSpecificationPrism[] | undefined;
    /**
     * Power adjustment for multifocal lenses measured in dioptres (0.25 units).
     */
    add?: number | undefined;
    /**
     * Extended properties for primitive element: VisionPrescription.lensSpecification.add
     */
    _add?: fhir.FhirElement;
    /**
     * Contact lens power measured in dioptres (0.25 units).
     */
    power?: number | undefined;
    /**
     * Extended properties for primitive element: VisionPrescription.lensSpecification.power
     */
    _power?: fhir.FhirElement;
    /**
     * Back curvature measured in millimetres.
     */
    backCurve?: number | undefined;
    /**
     * Extended properties for primitive element: VisionPrescription.lensSpecification.backCurve
     */
    _backCurve?: fhir.FhirElement;
    /**
     * Contact lens diameter measured in millimetres.
     */
    diameter?: number | undefined;
    /**
     * Extended properties for primitive element: VisionPrescription.lensSpecification.diameter
     */
    _diameter?: fhir.FhirElement;
    /**
     * The recommended maximum wear period for the lens.
     */
    duration?: fhir.Quantity | undefined;
    /**
     * Special color or pattern.
     */
    color?: string | undefined;
    /**
     * Extended properties for primitive element: VisionPrescription.lensSpecification.color
     */
    _color?: fhir.FhirElement;
    /**
     * Brand recommendations or restrictions.
     */
    brand?: string | undefined;
    /**
     * Extended properties for primitive element: VisionPrescription.lensSpecification.brand
     */
    _brand?: fhir.FhirElement;
    /**
     * Notes for special requirements such as coatings and lens materials.
     */
    note?: fhir.Annotation[] | undefined;
}
/**
 * An authorization for the provision of glasses and/or contact lenses to a patient.
 */
export interface VisionPrescription extends fhir.DomainResource {
    /**
     * Resource Type Name
     */
    resourceType: "VisionPrescription";
    /**
     * A unique identifier assigned to this vision prescription.
     */
    identifier?: fhir.Identifier[] | undefined;
    /**
     * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
     */
    status: 'active' | 'cancelled' | 'draft' | 'entered-in-error' | null;
    /**
     * Extended properties for primitive element: VisionPrescription.status
     */
    _status?: fhir.FhirElement;
    /**
     * The date this resource was created.
     */
    created: string | null;
    /**
     * Extended properties for primitive element: VisionPrescription.created
     */
    _created?: fhir.FhirElement;
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
    dateWritten: string | null;
    /**
     * Extended properties for primitive element: VisionPrescription.dateWritten
     */
    _dateWritten?: fhir.FhirElement;
    /**
     * The healthcare professional responsible for authorizing the prescription.
     */
    prescriber: fhir.Reference | null;
    /**
     * Contain the details of  the individual lens specifications and serves as the authorization for the fullfillment by certified professionals.
     */
    lensSpecification: fhir.VisionPrescriptionLensSpecification[] | null;
}
//# sourceMappingURL=VisionPrescription.d.ts.map
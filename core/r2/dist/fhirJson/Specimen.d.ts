import * as fhir from '../fhirJson.js';
/**
 * Details concerning the specimen collection.
 */
export interface SpecimenCollection extends fhir.BackboneElement {
    /**
     * Person who collected the specimen.
     */
    collector?: fhir.Reference | undefined;
    /**
     * To communicate any details or issues encountered during the specimen collection procedure.
     */
    comment?: (string | null)[] | undefined;
    /**
     * Extended properties for primitive element: Specimen.collection.comment
     */
    _comment?: (fhir.FhirElement | null)[];
    /**
     * Time when specimen was collected from subject - the physiologically relevant time.
     */
    collectedDateTime?: string | undefined;
    /**
     * Extended properties for primitive element: Specimen.collection.collected[x]
     */
    _collectedDateTime?: fhir.FhirElement;
    /**
     * Time when specimen was collected from subject - the physiologically relevant time.
     */
    collectedPeriod?: fhir.Period | undefined;
    /**
     * The quantity of specimen collected; for instance the volume of a blood sample, or the physical measurement of an anatomic pathology sample.
     */
    quantity?: fhir.Quantity | undefined;
    /**
     * A coded value specifying the technique that is used to perform the procedure.
     */
    method?: fhir.CodeableConcept | undefined;
    /**
     * Anatomical location from which the specimen was collected (if subject is a patient). This is the target site.  This element is not used for environmental specimens.
     */
    bodySite?: fhir.CodeableConcept | undefined;
}
/**
 * Details concerning treatment and processing steps for the specimen.
 */
export interface SpecimenTreatment extends fhir.BackboneElement {
    /**
     * Textual description of procedure.
     */
    description?: string | undefined;
    /**
     * Extended properties for primitive element: Specimen.treatment.description
     */
    _description?: fhir.FhirElement;
    /**
     * A coded value specifying the procedure used to process the specimen.
     */
    procedure?: fhir.CodeableConcept | undefined;
    /**
     * Material used in the processing step.
     */
    additive?: (fhir.Reference | null)[] | undefined;
}
/**
 * The container holding the specimen.  The recursive nature of containers; i.e. blood in tube in tray in rack is not addressed here.
 */
export interface SpecimenContainer extends fhir.BackboneElement {
    /**
     * Id for container. There may be multiple; a manufacturer's bar code, lab assigned identifier, etc. The container ID may differ from the specimen id in some circumstances.
     */
    identifier?: (fhir.Identifier | null)[] | undefined;
    /**
     * Textual description of the container.
     */
    description?: string | undefined;
    /**
     * Extended properties for primitive element: Specimen.container.description
     */
    _description?: fhir.FhirElement;
    /**
     * The type of container associated with the specimen (e.g. slide, aliquot, etc.).
     */
    type?: fhir.CodeableConcept | undefined;
    /**
     * The capacity (volume or other measure) the container may contain.
     */
    capacity?: fhir.Quantity | undefined;
    /**
     * The quantity of specimen in the container; may be volume, dimensions, or other appropriate measurements, depending on the specimen type.
     */
    specimenQuantity?: fhir.Quantity | undefined;
    /**
     * Introduced substance to preserve, maintain or enhance the specimen. Examples: Formalin, Citrate, EDTA.
     */
    additiveCodeableConcept?: fhir.CodeableConcept | undefined;
    /**
     * Introduced substance to preserve, maintain or enhance the specimen. Examples: Formalin, Citrate, EDTA.
     */
    additiveReference?: fhir.Reference | undefined;
}
/**
 * A sample to be used for analysis.
 */
export interface Specimen extends fhir.DomainResource {
    /**
     * Resource Type Name
     */
    resourceType: "Specimen" | null;
    /**
     * Id for specimen.
     */
    identifier?: (fhir.Identifier | null)[] | undefined;
    /**
     * The availability of the specimen.
     */
    status?: 'available' | 'entered-in-error' | 'unavailable' | 'unsatisfactory' | undefined;
    /**
     * Extended properties for primitive element: Specimen.status
     */
    _status?: fhir.FhirElement;
    /**
     * The kind of material that forms the specimen.
     */
    type?: fhir.CodeableConcept | undefined;
    /**
     * Reference to the parent (source) specimen which is used when the specimen was either derived from or a component of another specimen.
     */
    parent?: (fhir.Reference | null)[] | undefined;
    /**
     * Must know the subject context.
     */
    subject: fhir.Reference | null;
    /**
     * The identifier assigned by the lab when accessioning specimen(s). This is not necessarily the same as the specimen identifier, depending on local lab procedures.
     */
    accessionIdentifier?: fhir.Identifier | undefined;
    /**
     * Time when specimen was received for processing or testing.
     */
    receivedTime?: string | undefined;
    /**
     * Extended properties for primitive element: Specimen.receivedTime
     */
    _receivedTime?: fhir.FhirElement;
    /**
     * Details concerning the specimen collection.
     */
    collection?: fhir.SpecimenCollection | undefined;
    /**
     * Details concerning treatment and processing steps for the specimen.
     */
    treatment?: (fhir.SpecimenTreatment | null)[] | undefined;
    /**
     * The container holding the specimen.  The recursive nature of containers; i.e. blood in tube in tray in rack is not addressed here.
     */
    container?: (fhir.SpecimenContainer | null)[] | undefined;
}
//# sourceMappingURL=Specimen.d.ts.map
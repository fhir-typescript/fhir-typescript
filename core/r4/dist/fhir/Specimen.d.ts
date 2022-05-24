import * as fhir from '../fhir.js';
import { SpecimenStatusCodeType } from '../fhirValueSets/SpecimenStatusCodes.js';
import { V20493CodingType } from '../fhirValueSets/V20493Codings.js';
/**
 * Valid arguments for the SpecimenCollection type.
 */
export interface SpecimenCollectionArgs extends fhir.BackboneElementArgs {
    /**
     * Person who collected the specimen.
     */
    collector?: fhir.ReferenceArgs | undefined;
    /**
     * Time when specimen was collected from subject - the physiologically relevant time.
     */
    collected?: fhir.FhirDateTime | fhir.Period | undefined;
    /**
     * Time when specimen was collected from subject - the physiologically relevant time.
     */
    collectedDateTime?: fhir.FhirDateTime | string | undefined;
    /**
     * Time when specimen was collected from subject - the physiologically relevant time.
     */
    collectedPeriod?: fhir.PeriodArgs | undefined;
    /**
     * The span of time over which the collection of a specimen occurred.
     */
    duration?: fhir.DurationArgs | undefined;
    /**
     * The quantity of specimen collected; for instance the volume of a blood sample, or the physical measurement of an anatomic pathology sample.
     */
    quantity?: fhir.QuantityArgs | undefined;
    /**
     * A coded value specifying the technique that is used to perform the procedure.
     */
    method?: fhir.CodeableConceptArgs | undefined;
    /**
     * If the use case requires  BodySite to be handled as a separate resource instead of an inline coded element (e.g. to identify and track separately)  then use the standard extension [bodySite](extension-bodysite.html).
     */
    bodySite?: fhir.CodeableConceptArgs | undefined;
    /**
     * Representing fasting status using this element is preferred to representing it with an observation using a 'pre-coordinated code'  such as  LOINC 2005-7 (Calcium [Moles/​time] in 2 hour Urine --12 hours fasting), or  using  a component observation ` such as `Observation.component code`  = LOINC 49541-6 (Fasting status - Reported).
     */
    fastingStatus?: fhir.CodeableConcept | fhir.Duration | undefined;
    /**
     * Representing fasting status using this element is preferred to representing it with an observation using a 'pre-coordinated code'  such as  LOINC 2005-7 (Calcium [Moles/​time] in 2 hour Urine --12 hours fasting), or  using  a component observation ` such as `Observation.component code`  = LOINC 49541-6 (Fasting status - Reported).
     */
    fastingStatusCodeableConcept?: fhir.CodeableConceptArgs | undefined;
    /**
     * Representing fasting status using this element is preferred to representing it with an observation using a 'pre-coordinated code'  such as  LOINC 2005-7 (Calcium [Moles/​time] in 2 hour Urine --12 hours fasting), or  using  a component observation ` such as `Observation.component code`  = LOINC 49541-6 (Fasting status - Reported).
     */
    fastingStatusDuration?: fhir.DurationArgs | undefined;
}
/**
 * Details concerning the specimen collection.
 */
export declare class SpecimenCollection extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Person who collected the specimen.
     */
    collector?: fhir.Reference | undefined;
    /**
     * Time when specimen was collected from subject - the physiologically relevant time.
     */
    collected?: (fhir.FhirDateTime | fhir.Period) | undefined;
    /**
     * Internal flag to properly serialize choice-type element Specimen.collection.collected[x]
     */
    protected static readonly _fts_collectedIsChoice: true;
    /**
     * The span of time over which the collection of a specimen occurred.
     */
    duration?: fhir.Duration | undefined;
    /**
     * The quantity of specimen collected; for instance the volume of a blood sample, or the physical measurement of an anatomic pathology sample.
     */
    quantity?: fhir.Quantity | undefined;
    /**
     * A coded value specifying the technique that is used to perform the procedure.
     */
    method?: fhir.CodeableConcept | undefined;
    /**
     * If the use case requires  BodySite to be handled as a separate resource instead of an inline coded element (e.g. to identify and track separately)  then use the standard extension [bodySite](extension-bodysite.html).
     */
    bodySite?: fhir.CodeableConcept | undefined;
    /**
     * Representing fasting status using this element is preferred to representing it with an observation using a 'pre-coordinated code'  such as  LOINC 2005-7 (Calcium [Moles/​time] in 2 hour Urine --12 hours fasting), or  using  a component observation ` such as `Observation.component code`  = LOINC 49541-6 (Fasting status - Reported).
     */
    fastingStatus?: (fhir.CodeableConcept | fhir.Duration) | undefined;
    /**
     * Internal flag to properly serialize choice-type element Specimen.collection.fastingStatus[x]
     */
    protected static readonly _fts_fastingStatusIsChoice: true;
    /**
     * Default constructor for SpecimenCollection - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<SpecimenCollectionArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.FtsIssue[];
}
/**
 * Valid arguments for the SpecimenProcessing type.
 */
export interface SpecimenProcessingArgs extends fhir.BackboneElementArgs {
    /**
     * Textual description of procedure.
     */
    description?: fhir.FhirString | string | undefined;
    /**
     * A coded value specifying the procedure used to process the specimen.
     */
    procedure?: fhir.CodeableConceptArgs | undefined;
    /**
     * Material used in the processing step.
     */
    additive?: fhir.ReferenceArgs[] | undefined;
    /**
     * A record of the time or period when the specimen processing occurred.  For example the time of sample fixation or the period of time the sample was in formalin.
     */
    time?: fhir.FhirDateTime | fhir.Period | undefined;
    /**
     * A record of the time or period when the specimen processing occurred.  For example the time of sample fixation or the period of time the sample was in formalin.
     */
    timeDateTime?: fhir.FhirDateTime | string | undefined;
    /**
     * A record of the time or period when the specimen processing occurred.  For example the time of sample fixation or the period of time the sample was in formalin.
     */
    timePeriod?: fhir.PeriodArgs | undefined;
}
/**
 * Details concerning processing and processing steps for the specimen.
 */
export declare class SpecimenProcessing extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Textual description of procedure.
     */
    description?: fhir.FhirString | undefined;
    /**
     * A coded value specifying the procedure used to process the specimen.
     */
    procedure?: fhir.CodeableConcept | undefined;
    /**
     * Material used in the processing step.
     */
    additive: fhir.Reference[];
    /**
     * A record of the time or period when the specimen processing occurred.  For example the time of sample fixation or the period of time the sample was in formalin.
     */
    time?: (fhir.FhirDateTime | fhir.Period) | undefined;
    /**
     * Internal flag to properly serialize choice-type element Specimen.processing.time[x]
     */
    protected static readonly _fts_timeIsChoice: true;
    /**
     * Default constructor for SpecimenProcessing - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<SpecimenProcessingArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.FtsIssue[];
}
/**
 * Valid arguments for the SpecimenContainer type.
 */
export interface SpecimenContainerArgs extends fhir.BackboneElementArgs {
    /**
     * Id for container. There may be multiple; a manufacturer's bar code, lab assigned identifier, etc. The container ID may differ from the specimen id in some circumstances.
     */
    identifier?: fhir.IdentifierArgs[] | undefined;
    /**
     * Textual description of the container.
     */
    description?: fhir.FhirString | string | undefined;
    /**
     * The type of container associated with the specimen (e.g. slide, aliquot, etc.).
     */
    type?: fhir.CodeableConceptArgs | undefined;
    /**
     * The capacity (volume or other measure) the container may contain.
     */
    capacity?: fhir.QuantityArgs | undefined;
    /**
     * The quantity of specimen in the container; may be volume, dimensions, or other appropriate measurements, depending on the specimen type.
     */
    specimenQuantity?: fhir.QuantityArgs | undefined;
    /**
     * Introduced substance to preserve, maintain or enhance the specimen. Examples: Formalin, Citrate, EDTA.
     */
    additive?: fhir.CodeableConcept | fhir.Reference | undefined;
    /**
     * Introduced substance to preserve, maintain or enhance the specimen. Examples: Formalin, Citrate, EDTA.
     */
    additiveCodeableConcept?: fhir.CodeableConceptArgs | undefined;
    /**
     * Introduced substance to preserve, maintain or enhance the specimen. Examples: Formalin, Citrate, EDTA.
     */
    additiveReference?: fhir.ReferenceArgs | undefined;
}
/**
 * The container holding the specimen.  The recursive nature of containers; i.e. blood in tube in tray in rack is not addressed here.
 */
export declare class SpecimenContainer extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Id for container. There may be multiple; a manufacturer's bar code, lab assigned identifier, etc. The container ID may differ from the specimen id in some circumstances.
     */
    identifier: fhir.Identifier[];
    /**
     * Textual description of the container.
     */
    description?: fhir.FhirString | undefined;
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
    additive?: (fhir.CodeableConcept | fhir.Reference) | undefined;
    /**
     * Internal flag to properly serialize choice-type element Specimen.container.additive[x]
     */
    protected static readonly _fts_additiveIsChoice: true;
    /**
     * Default constructor for SpecimenContainer - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<SpecimenContainerArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.FtsIssue[];
}
/**
 * Valid arguments for the Specimen type.
 */
export interface SpecimenArgs extends fhir.DomainResourceArgs {
    /**
     * Resource Type Name
     */
    resourceType: "Specimen" | undefined;
    /**
     * Id for specimen.
     */
    identifier?: fhir.IdentifierArgs[] | undefined;
    /**
     * The identifier assigned by the lab when accessioning specimen(s). This is not necessarily the same as the specimen identifier, depending on local lab procedures.
     */
    accessionIdentifier?: fhir.IdentifierArgs | undefined;
    /**
     * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
     */
    status?: fhir.FhirCode<SpecimenStatusCodeType> | string | undefined;
    /**
     * The type can change the way that a specimen is handled and drives what kind of analyses can properly be performed on the specimen. It is frequently used in diagnostic work flow decision making systems.
     */
    type?: fhir.CodeableConceptArgs | undefined;
    /**
     * Where the specimen came from. This may be from patient(s), from a location (e.g., the source of an environmental sample), or a sampling of a substance or a device.
     */
    subject?: fhir.ReferenceArgs | undefined;
    /**
     * Time when specimen was received for processing or testing.
     */
    receivedTime?: fhir.FhirDateTime | string | undefined;
    /**
     * The parent specimen could be the source from which the current specimen is derived by some processing step (e.g. an aliquot or isolate or extracted nucleic acids from clinical samples) or one of many specimens that were combined to create a pooled sample.
     */
    parent?: fhir.ReferenceArgs[] | undefined;
    /**
     * The request may be explicit or implied such with a ServiceRequest that requires a blood draw.
     */
    request?: fhir.ReferenceArgs[] | undefined;
    /**
     * Details concerning the specimen collection.
     */
    collection?: fhir.SpecimenCollectionArgs | undefined;
    /**
     * Details concerning processing and processing steps for the specimen.
     */
    processing?: fhir.SpecimenProcessingArgs[] | undefined;
    /**
     * The container holding the specimen.  The recursive nature of containers; i.e. blood in tube in tray in rack is not addressed here.
     */
    container?: fhir.SpecimenContainerArgs[] | undefined;
    /**
     * Specimen condition is an observation made about the specimen.  It's a point-in-time assessment.  It can be used to assess its quality or appropriateness for a specific test.
     */
    condition?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * To communicate any details or issues about the specimen or during the specimen collection. (for example: broken vial, sent with patient, frozen).
     */
    note?: fhir.AnnotationArgs[] | undefined;
}
/**
 * A sample to be used for analysis.
 */
export declare class Specimen extends fhir.DomainResource {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Resource Type Name
     */
    resourceType: "Specimen";
    /**
     * Id for specimen.
     */
    identifier: fhir.Identifier[];
    /**
     * The identifier assigned by the lab when accessioning specimen(s). This is not necessarily the same as the specimen identifier, depending on local lab procedures.
     */
    accessionIdentifier?: fhir.Identifier | undefined;
    /**
     * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
     */
    status?: fhir.FhirCode<SpecimenStatusCodeType> | undefined;
    /**
     * The type can change the way that a specimen is handled and drives what kind of analyses can properly be performed on the specimen. It is frequently used in diagnostic work flow decision making systems.
     */
    type?: fhir.CodeableConcept | undefined;
    /**
     * Where the specimen came from. This may be from patient(s), from a location (e.g., the source of an environmental sample), or a sampling of a substance or a device.
     */
    subject?: fhir.Reference | undefined;
    /**
     * Time when specimen was received for processing or testing.
     */
    receivedTime?: fhir.FhirDateTime | undefined;
    /**
     * The parent specimen could be the source from which the current specimen is derived by some processing step (e.g. an aliquot or isolate or extracted nucleic acids from clinical samples) or one of many specimens that were combined to create a pooled sample.
     */
    parent: fhir.Reference[];
    /**
     * The request may be explicit or implied such with a ServiceRequest that requires a blood draw.
     */
    request: fhir.Reference[];
    /**
     * Details concerning the specimen collection.
     */
    collection?: fhir.SpecimenCollection | undefined;
    /**
     * Details concerning processing and processing steps for the specimen.
     */
    processing: fhir.SpecimenProcessing[];
    /**
     * The container holding the specimen.  The recursive nature of containers; i.e. blood in tube in tray in rack is not addressed here.
     */
    container: fhir.SpecimenContainer[];
    /**
     * Specimen condition is an observation made about the specimen.  It's a point-in-time assessment.  It can be used to assess its quality or appropriateness for a specific test.
     */
    condition: fhir.CodeableConcept[];
    /**
     * To communicate any details or issues about the specimen or during the specimen collection. (for example: broken vial, sent with patient, frozen).
     */
    note: fhir.Annotation[];
    /**
     * Default constructor for Specimen - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<SpecimenArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Required-bound Value Set for status (Specimen.status)
     */
    static get statusRequiredCodes(): {
        readonly Available: "available";
        readonly EnteredInError: "entered-in-error";
        readonly Unavailable: "unavailable";
        readonly Unsatisfactory: "unsatisfactory";
    };
    /**
     * Extensible-bound Value Set for condition (Specimen.condition)
     */
    static get conditionExtensibleCodings(): V20493CodingType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.FtsIssue[];
}
//# sourceMappingURL=Specimen.d.ts.map
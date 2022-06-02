import * as fhir from '../fhirJson.js';
/**
 * Substance introduced in the kind of container to preserve, maintain or enhance the specimen. Examples: Formalin, Citrate, EDTA.
 */
export interface SpecimenDefinitionTypeTestedContainerAdditive extends fhir.BackboneElement {
    /**
     * Substance introduced in the kind of container to preserve, maintain or enhance the specimen. Examples: Formalin, Citrate, EDTA.
     */
    additiveCodeableConcept?: fhir.CodeableConcept | undefined;
    /**
     * Substance introduced in the kind of container to preserve, maintain or enhance the specimen. Examples: Formalin, Citrate, EDTA.
     */
    additiveReference?: fhir.Reference | undefined;
}
/**
 * The specimen's container.
 */
export interface SpecimenDefinitionTypeTestedContainer extends fhir.BackboneElement {
    /**
     * The type of material of the container.
     */
    material?: fhir.CodeableConcept | undefined;
    /**
     * The type of container used to contain this kind of specimen.
     */
    type?: fhir.CodeableConcept | undefined;
    /**
     * Color of container cap.
     */
    cap?: fhir.CodeableConcept | undefined;
    /**
     * The textual description of the kind of container.
     */
    description?: string | undefined;
    /**
     * Extended properties for primitive element: SpecimenDefinition.typeTested.container.description
     */
    _description?: fhir.FhirElement;
    /**
     * The capacity (volume or other measure) of this kind of container.
     */
    capacity?: fhir.Quantity | undefined;
    /**
     * The minimum volume to be conditioned in the container.
     */
    minimumVolumeQuantity?: fhir.Quantity | undefined;
    /**
     * The minimum volume to be conditioned in the container.
     */
    minimumVolumeString?: string | undefined;
    /**
     * Extended properties for primitive element: SpecimenDefinition.typeTested.container.minimumVolume[x]
     */
    _minimumVolumeString?: fhir.FhirElement;
    /**
     * Substance introduced in the kind of container to preserve, maintain or enhance the specimen. Examples: Formalin, Citrate, EDTA.
     */
    additive?: (fhir.SpecimenDefinitionTypeTestedContainerAdditive | null)[] | undefined;
    /**
     * Special processing that should be applied to the container for this kind of specimen.
     */
    preparation?: string | undefined;
    /**
     * Extended properties for primitive element: SpecimenDefinition.typeTested.container.preparation
     */
    _preparation?: fhir.FhirElement;
}
/**
 * Set of instructions for preservation/transport of the specimen at a defined temperature interval, prior the testing process.
 */
export interface SpecimenDefinitionTypeTestedHandling extends fhir.BackboneElement {
    /**
     * It qualifies the interval of temperature, which characterizes an occurrence of handling. Conditions that are not related to temperature may be handled in the instruction element.
     */
    temperatureQualifier?: fhir.CodeableConcept | undefined;
    /**
     * The temperature interval for this set of handling instructions.
     */
    temperatureRange?: fhir.Range | undefined;
    /**
     * The maximum time interval of preservation of the specimen with these conditions.
     */
    maxDuration?: fhir.Duration | undefined;
    /**
     * Additional textual instructions for the preservation or transport of the specimen. For instance, 'Protect from light exposure'.
     */
    instruction?: string | undefined;
    /**
     * Extended properties for primitive element: SpecimenDefinition.typeTested.handling.instruction
     */
    _instruction?: fhir.FhirElement;
}
/**
 * Specimen conditioned in a container as expected by the testing laboratory.
 */
export interface SpecimenDefinitionTypeTested extends fhir.BackboneElement {
    /**
     * Primary of secondary specimen.
     */
    isDerived?: boolean | undefined;
    /**
     * Extended properties for primitive element: SpecimenDefinition.typeTested.isDerived
     */
    _isDerived?: fhir.FhirElement;
    /**
     * The kind of specimen conditioned for testing expected by lab.
     */
    type?: fhir.CodeableConcept | undefined;
    /**
     * The preference for this type of conditioned specimen.
     */
    preference: 'alternate' | 'preferred' | null;
    /**
     * Extended properties for primitive element: SpecimenDefinition.typeTested.preference
     */
    _preference?: fhir.FhirElement;
    /**
     * The specimen's container.
     */
    container?: fhir.SpecimenDefinitionTypeTestedContainer | undefined;
    /**
     * Requirements for delivery and special handling of this kind of conditioned specimen.
     */
    requirement?: string | undefined;
    /**
     * Extended properties for primitive element: SpecimenDefinition.typeTested.requirement
     */
    _requirement?: fhir.FhirElement;
    /**
     * The usual time that a specimen of this kind is retained after the ordered tests are completed, for the purpose of additional testing.
     */
    retentionTime?: fhir.Duration | undefined;
    /**
     * Criterion for rejection of the specimen in its container by the laboratory.
     */
    rejectionCriterion?: (fhir.CodeableConcept | null)[] | undefined;
    /**
     * Set of instructions for preservation/transport of the specimen at a defined temperature interval, prior the testing process.
     */
    handling?: (fhir.SpecimenDefinitionTypeTestedHandling | null)[] | undefined;
}
/**
 * A kind of specimen with associated set of requirements.
 */
export interface SpecimenDefinition extends fhir.DomainResource {
    /**
     * Resource Type Name
     */
    resourceType: "SpecimenDefinition" | null;
    /**
     * A business identifier associated with the kind of specimen.
     */
    identifier?: fhir.Identifier | undefined;
    /**
     * The kind of material to be collected.
     */
    typeCollected?: fhir.CodeableConcept | undefined;
    /**
     * Preparation of the patient for specimen collection.
     */
    patientPreparation?: (fhir.CodeableConcept | null)[] | undefined;
    /**
     * Time aspect of specimen collection (duration or offset).
     */
    timeAspect?: string | undefined;
    /**
     * Extended properties for primitive element: SpecimenDefinition.timeAspect
     */
    _timeAspect?: fhir.FhirElement;
    /**
     * The action to be performed for collecting the specimen.
     */
    collection?: (fhir.CodeableConcept | null)[] | undefined;
    /**
     * Specimen conditioned in a container as expected by the testing laboratory.
     */
    typeTested?: (fhir.SpecimenDefinitionTypeTested | null)[] | undefined;
}
//# sourceMappingURL=SpecimenDefinition.d.ts.map
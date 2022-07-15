import { CodingArgs } from '../fhir/Coding.js';
/**
 * How the referenced structure is used in this mapping
 */
export declare type MapModelModeCodingType = {
    /**
     * produced: This structure describes an instance that the mapping engine may ask to create that is used a target of data
     */
    ProducedStructureDefinition: CodingArgs;
    /**
     * queried: This structure describes an instance that the mapping engine may ask for that is used a source of data
     */
    QueriedStructureDefinition: CodingArgs;
    /**
     * source: This structure describes an instance passed to the mapping engine that is used a source of data
     */
    SourceStructureDefinition: CodingArgs;
    /**
     * target: This structure describes an instance passed to the mapping engine that is used a target of data
     */
    TargetStructureDefinition: CodingArgs;
};
/**
 * How the referenced structure is used in this mapping
 */
export declare const MapModelModeCodings: MapModelModeCodingType;
//# sourceMappingURL=MapModelModeCodings.d.ts.map
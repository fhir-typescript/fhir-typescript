import { Coding } from '../fhir/Coding.js';
/**
 * The workflow/clinical status of the composition.
 */
export declare const CompositionStatusCodings: {
    /**
     * amended: The composition content or the referenced resources have been modified (edited or added to) subsequent to being released as "final" and the composition is complete and verified by an authorized person.
     */
    readonly Amended: Coding;
    /**
     * entered-in-error: The composition or document was originally created/issued in error, and this is an amendment that marks that the entire series should not be considered as valid.
     */
    readonly EnteredInError: Coding;
    /**
     * final: This version of the composition is complete and verified by an appropriate person and no further work is planned. Any subsequent updates would be on a new version of the composition.
     */
    readonly Final: Coding;
    /**
     * preliminary: This is a preliminary composition or document (also known as initial or interim). The content may be incomplete or unverified.
     */
    readonly Preliminary: Coding;
};
/**
 * The workflow/clinical status of the composition.
 */
export declare type CompositionStatusCodingType = typeof CompositionStatusCodings;
//# sourceMappingURL=CompositionStatusCodings.d.ts.map
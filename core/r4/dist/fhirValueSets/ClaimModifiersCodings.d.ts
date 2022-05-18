import { Coding } from '../fhir/Coding.js';
/**
 * This value set includes sample Modifier type codes.
 */
export declare const ClaimModifiersCodings: {
    /**
     * a: Repair of prior service or installation.
     */
    readonly RepairOfPriorServiceOrInstallation: Coding;
    /**
     * b: Temporary service or installation.
     */
    readonly TemporaryServiceOrInstallation: Coding;
    /**
     * c: Treatment associated with TMJ.
     */
    readonly TMJTreatment: Coding;
    /**
     * e: Implant or associated with an implant.
     */
    readonly ImplantOrAssociatedWithAnImplant: Coding;
    /**
     * rooh: A Rush service or service performed outside of normal office hours.
     */
    readonly RushOrOutsideOfOfficeHours: Coding;
    /**
     * x: None.
     */
    readonly None: Coding;
};
/**
 * This value set includes sample Modifier type codes.
 */
export declare type ClaimModifiersCodingType = typeof ClaimModifiersCodings;
//# sourceMappingURL=ClaimModifiersCodings.d.ts.map
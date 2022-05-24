import { CodingArgs } from '../fhir/Coding.js';
/**
 * MedicationAdministration Performer Function Codes
 */
export declare type MedAdminPerformFunctionCodingType = {
    /**
     * performer: A person, non-person living subject, organization or device that who actually and principally carries out the action
     */
    Performer: CodingArgs;
    /**
     * verifier: A person who verifies the correctness and appropriateness of the service (plan, order, event, etc.) and hence takes on accountability.
     */
    Verifier: CodingArgs;
    /**
     * witness: A person witnessing the action happening without doing anything. A witness is not necessarily aware, much less approves of anything stated in the service event. Example for a witness is students watching an operation or an advanced directive witness.
     */
    Witness: CodingArgs;
};
/**
 * MedicationAdministration Performer Function Codes
 */
export declare const MedAdminPerformFunctionCodings: MedAdminPerformFunctionCodingType;
//# sourceMappingURL=MedAdminPerformFunctionCodings.d.ts.map
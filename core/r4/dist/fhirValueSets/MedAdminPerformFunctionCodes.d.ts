/**
 * MedicationAdministration Performer Function Codes
 */
export declare const MedAdminPerformFunctionCodes: {
    /**
     * performer: A person, non-person living subject, organization or device that who actually and principally carries out the action
     */
    readonly Performer: "performer";
    /**
     * verifier: A person who verifies the correctness and appropriateness of the service (plan, order, event, etc.) and hence takes on accountability.
     */
    readonly Verifier: "verifier";
    /**
     * witness: A person witnessing the action happening without doing anything. A witness is not necessarily aware, much less approves of anything stated in the service event. Example for a witness is students watching an operation or an advanced directive witness.
     */
    readonly Witness: "witness";
};
/**
 * MedicationAdministration Performer Function Codes
 */
export declare type MedAdminPerformFunctionCodeType = typeof MedAdminPerformFunctionCodes[keyof typeof MedAdminPerformFunctionCodes];
//# sourceMappingURL=MedAdminPerformFunctionCodes.d.ts.map
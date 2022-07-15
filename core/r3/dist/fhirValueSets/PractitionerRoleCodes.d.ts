/**
 * This example value set defines a set of codes that can be used to indicate the role of a Practitioner.
 */
export declare const PractitionerRoleCodes: {
    /**
     * doctor: A qualified/registered medical practitioner
     */
    readonly Doctor: "doctor";
    /**
     * ict: Someone who is qualified in Information and Communication Technologies
     */
    readonly ICTProfessional: "ict";
    /**
     * nurse: A practitoner with nursing experience that may be qualified/registered
     */
    readonly Nurse: "nurse";
    /**
     * pharmacist: A qualified/registered/licensed pharmacist
     */
    readonly Pharmacist: "pharmacist";
    /**
     * researcher: A practitioner that may perform research
     */
    readonly Researcher: "researcher";
    /**
     * teacher: Someone who is able to provide educational services
     */
    readonly TeacherEducator: "teacher";
};
/**
 * This example value set defines a set of codes that can be used to indicate the role of a Practitioner.
 */
export declare type PractitionerRoleCodeType = typeof PractitionerRoleCodes[keyof typeof PractitionerRoleCodes];
//# sourceMappingURL=PractitionerRoleCodes.d.ts.map
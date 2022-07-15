import { CodingArgs } from '../fhir/Coding.js';
/**
 * This example value set defines a set of codes that can be used to indicate the role of a Practitioner.
 */
export declare type PractitionerRoleCodingType = {
    /**
     * doctor: A qualified/registered medical practitioner
     */
    Doctor: CodingArgs;
    /**
     * ict: Someone who is qualified in Information and Communication Technologies
     */
    ICTProfessional: CodingArgs;
    /**
     * nurse: A practitoner with nursing experience that may be qualified/registered
     */
    Nurse: CodingArgs;
    /**
     * pharmacist: A qualified/registered/licensed pharmacist
     */
    Pharmacist: CodingArgs;
    /**
     * researcher: A practitioner that may perform research
     */
    Researcher: CodingArgs;
    /**
     * teacher: Someone who is able to provide educational services
     */
    TeacherEducator: CodingArgs;
};
/**
 * This example value set defines a set of codes that can be used to indicate the role of a Practitioner.
 */
export declare const PractitionerRoleCodings: PractitionerRoleCodingType;
//# sourceMappingURL=PractitionerRoleCodings.d.ts.map
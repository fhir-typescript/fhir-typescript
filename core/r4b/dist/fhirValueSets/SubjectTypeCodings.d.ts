import { CodingArgs } from '../fhir/Coding.js';
/**
 * Possible types of subjects.
 */
export declare type SubjectTypeCodingType = {
    /**
     * Device: A type of a manufactured item that is used in the provision of healthcare without being substantially changed through that activity. The device may be a medical or non-medical device.
     */
    Device: CodingArgs;
    /**
     * Location: Details and position information for a physical place where services are provided and resources and participants may be stored, found, contained, or accommodated.
     */
    Location: CodingArgs;
    /**
     * Organization: A formally or informally recognized grouping of people or organizations formed for the purpose of achieving some form of collective action.  Includes companies, institutions, corporations, departments, community groups, healthcare practice groups, payer/insurer, etc.
     */
    Organization: CodingArgs;
    /**
     * Patient: Demographics and other administrative information about an individual or animal receiving care or other health-related services.
     */
    Patient: CodingArgs;
    /**
     * Practitioner: A person who is directly or indirectly involved in the provisioning of healthcare.
     */
    Practitioner: CodingArgs;
};
/**
 * Possible types of subjects.
 */
export declare const SubjectTypeCodings: SubjectTypeCodingType;
//# sourceMappingURL=SubjectTypeCodings.d.ts.map
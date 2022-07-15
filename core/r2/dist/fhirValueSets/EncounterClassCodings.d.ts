import { CodingArgs } from '../fhir/Coding.js';
/**
 * Classification of the encounter
 */
export declare type EncounterClassCodingType = {
    /**
     * ambulatory: An encounter where the patient visits the practitioner in his/her office, e.g. a G.P. visit.
     */
    Ambulatory: CodingArgs;
    /**
     * daytime: An encounter where the patient needs more prolonged treatment or investigations than outpatients, but who do not need to stay in the hospital overnight.
     */
    Daytime: CodingArgs;
    /**
     * emergency: An encounter in the Emergency Care Department.
     */
    Emergency: CodingArgs;
    /**
     * field: An encounter taking place outside the regular environment for giving care.
     */
    Field: CodingArgs;
    /**
     * home: An encounter where the practitioner visits the patient at his/her home.
     */
    Home: CodingArgs;
    /**
     * inpatient: An encounter during which the patient is hospitalized and stays overnight.
     */
    Inpatient: CodingArgs;
    /**
     * other: Any other encounter type that is not described by one of the other values. Where this is used it is expected that an implementer will include an extension value to define what the actual other type is.
     */
    Other: CodingArgs;
    /**
     * outpatient: An encounter during which the patient is not hospitalized overnight.
     */
    Outpatient: CodingArgs;
    /**
     * virtual: An encounter that takes place where the patient and practitioner do not physically meet but use electronic means for contact.
     */
    Virtual: CodingArgs;
};
/**
 * Classification of the encounter
 */
export declare const EncounterClassCodings: EncounterClassCodingType;
//# sourceMappingURL=EncounterClassCodings.d.ts.map
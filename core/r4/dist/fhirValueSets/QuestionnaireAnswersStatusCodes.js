/*! @fhir-typescript/r4-core v0.0.11-beta.2 2022-05-18 */
'use strict';
// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/questionnaire-answers-status|4.0.1
/**
 * Lifecycle status of the questionnaire response.
 */
var QuestionnaireAnswersStatusCodes = {
    /**
     * amended: This QuestionnaireResponse has been filled out with answers, then marked as complete, yet changes or additions have been made to it afterwards.
     */
    Amended: "amended",
    /**
     * completed: This QuestionnaireResponse has been filled out with answers and the current content is regarded as definitive.
     */
    Completed: "completed",
    /**
     * entered-in-error: This QuestionnaireResponse was entered in error and voided.
     */
    EnteredInError: "entered-in-error",
    /**
     * in-progress: This QuestionnaireResponse has been partially filled out with answers but changes or additions are still expected to be made to it.
     */
    InProgress: "in-progress",
    /**
     * stopped: This QuestionnaireResponse has been partially filled out with answers but has been abandoned. It is unknown whether changes or additions are expected to be made to it.
     */
    Stopped: "stopped",
};

export { QuestionnaireAnswersStatusCodes };
//# sourceMappingURL=QuestionnaireAnswersStatusCodes.js.map

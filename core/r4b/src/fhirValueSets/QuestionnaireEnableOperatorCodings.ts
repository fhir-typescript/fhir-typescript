// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/questionnaire-enable-operator|4.3.0

import { CodingArgs } from '../fhir/Coding.js'

/**
 * The criteria by which a question is enabled.
 */
export type QuestionnaireEnableOperatorCodingType = {
  /**
   * !=: True if whether at least no answer has a value that is equal to the enableWhen answer.
   */
  NotEquals: CodingArgs;
  /**
   * &lt;: True if whether at least no answer has a value that is less than the enableWhen answer.
   */
  LessThan: CodingArgs;
  /**
   * &lt;=: True if whether at least no answer has a value that is less or equal to the enableWhen answer.
   */
  LessOrEquals: CodingArgs;
  /**
   * =: True if whether at least one answer has a value that is equal to the enableWhen answer.
   */
  Equals: CodingArgs;
  /**
   * &gt;: True if whether at least no answer has a value that is greater than the enableWhen answer.
   */
  GreaterThan: CodingArgs;
  /**
   * &gt;=: True if whether at least no answer has a value that is greater or equal to the enableWhen answer.
   */
  GreaterOrEquals: CodingArgs;
  /**
   * exists: True if whether an answer exists is equal to the enableWhen answer (which must be a boolean).
   */
  Exists: CodingArgs;
}

/**
 * The criteria by which a question is enabled.
 */
export const QuestionnaireEnableOperatorCodings:QuestionnaireEnableOperatorCodingType = {
  /**
   * !=: True if whether at least no answer has a value that is equal to the enableWhen answer.
   */
  NotEquals: {
    display: "Not Equals",
    code: "!=",
    system: "http://hl7.org/fhir/questionnaire-enable-operator",
  },
  /**
   * &lt;: True if whether at least no answer has a value that is less than the enableWhen answer.
   */
  LessThan: {
    display: "Less Than",
    code: "<",
    system: "http://hl7.org/fhir/questionnaire-enable-operator",
  },
  /**
   * &lt;=: True if whether at least no answer has a value that is less or equal to the enableWhen answer.
   */
  LessOrEquals: {
    display: "Less or Equals",
    code: "<=",
    system: "http://hl7.org/fhir/questionnaire-enable-operator",
  },
  /**
   * =: True if whether at least one answer has a value that is equal to the enableWhen answer.
   */
  Equals: {
    display: "Equals",
    code: "=",
    system: "http://hl7.org/fhir/questionnaire-enable-operator",
  },
  /**
   * &gt;: True if whether at least no answer has a value that is greater than the enableWhen answer.
   */
  GreaterThan: {
    display: "Greater Than",
    code: ">",
    system: "http://hl7.org/fhir/questionnaire-enable-operator",
  },
  /**
   * &gt;=: True if whether at least no answer has a value that is greater or equal to the enableWhen answer.
   */
  GreaterOrEquals: {
    display: "Greater or Equals",
    code: ">=",
    system: "http://hl7.org/fhir/questionnaire-enable-operator",
  },
  /**
   * exists: True if whether an answer exists is equal to the enableWhen answer (which must be a boolean).
   */
  Exists: {
    display: "Exists",
    code: "exists",
    system: "http://hl7.org/fhir/questionnaire-enable-operator",
  },
} as const;

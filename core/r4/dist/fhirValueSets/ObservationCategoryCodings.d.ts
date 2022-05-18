import { Coding } from '../fhir/Coding.js';
/**
 * Observation Category codes.
 */
export declare const ObservationCategoryCodings: {
    /**
     * activity: Observations that measure or record any bodily activity that enhances or maintains physical fitness and overall health and wellness.  Not under direct supervision of practitioner such as a physical therapist. (e.g., laps swum, steps, sleep data)
     */
    readonly Activity: Coding;
    /**
     * exam: Observations generated by physical exam findings including direct observations made by a clinician and use of simple instruments and the result of simple maneuvers performed directly on the patient's body.
     */
    readonly Exam: Coding;
    /**
     * imaging: Observations generated by imaging. The scope includes observations regarding plain x-ray, ultrasound, CT, MRI, angiography, echocardiography, and nuclear medicine.
     */
    readonly Imaging: Coding;
    /**
     * laboratory: The results of observations generated by laboratories.  Laboratory results are typically generated by laboratories providing analytic services in areas such as chemistry, hematology, serology, histology, cytology, anatomic pathology (including digital pathology), microbiology, and/or virology. These observations are based on analysis of specimens obtained from the patient and submitted to the laboratory.
     */
    readonly Laboratory: Coding;
    /**
     * procedure: Observations generated by other procedures.  This category includes observations resulting from interventional and non-interventional procedures excluding laboratory and imaging (e.g., cardiology catheterization, endoscopy, electrodiagnostics, etc.).  Procedure results are typically generated by a clinician to provide more granular information about component observations made during a procedure.  An example would be when a gastroenterologist reports the size of a polyp observed during a colonoscopy.
     */
    readonly Procedure: Coding;
    /**
     * social-history: Social History Observations define the patient's occupational, personal (e.g., lifestyle), social, familial, and environmental history and health risk factors that may impact the patient's health.
     */
    readonly SocialHistory: Coding;
    /**
     * survey: Assessment tool/survey instrument observations (e.g., Apgar Scores, Montreal Cognitive Assessment (MoCA)).
     */
    readonly Survey: Coding;
    /**
     * therapy: Observations generated by non-interventional treatment protocols (e.g. occupational, physical, radiation, nutritional and medication therapy)
     */
    readonly Therapy: Coding;
    /**
     * vital-signs:  Clinical observations measure the body's basic functions such as blood pressure, heart rate, respiratory rate, height, weight, body mass index, head circumference, pulse oximetry, temperature, and body surface area.
     */
    readonly VitalSigns: Coding;
};
/**
 * Observation Category codes.
 */
export declare type ObservationCategoryCodingType = typeof ObservationCategoryCodings;
//# sourceMappingURL=ObservationCategoryCodings.d.ts.map
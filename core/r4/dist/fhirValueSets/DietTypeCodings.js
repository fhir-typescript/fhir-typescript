/*! @fhir-typescript/r4-core v0.0.11-beta.2 2022-05-18 */
'use strict';
import { Coding } from '../fhir/Coding.js';

// <auto-generated/>
/**
 * Codes that can be used to indicate the type of food being ordered for a patient. This value set is provided as a suggestive example. It includes codes from [SNOMED CT](http://snomed.info/sct) where concept is-a 182922004 (Dietary regime (regime/therapy))
 */
var DietTypeCodings = {
    /**
     * Code: 1151000175103
     */
    DietaryApproachesToStopHypertensionDiet: new Coding({
        display: "Dietary Approaches to Stop Hypertension diet",
        code: "1151000175103",
        system: "http://snomed.info/sct",
    }),
    /**
     * Code: 182954008
     */
    DietaryProphylaxis: new Coding({
        display: "Dietary prophylaxis",
        code: "182954008",
        system: "http://snomed.info/sct",
    }),
    /**
     * Code: 182955009
     */
    LowCarbohydrateDietProphylaxis: new Coding({
        display: "Low carbohydrate diet - prophylaxis",
        code: "182955009",
        system: "http://snomed.info/sct",
    }),
    /**
     * Code: 182956005
     */
    LowCalorieDietProphylaxis: new Coding({
        display: "Low calorie diet - prophylaxis",
        code: "182956005",
        system: "http://snomed.info/sct",
    }),
    /**
     * Code: 182957001
     */
    LowSaltDietProphylaxis: new Coding({
        display: "Low salt diet - prophylaxis",
        code: "182957001",
        system: "http://snomed.info/sct",
    }),
    /**
     * Code: 182958006
     */
    SaltFreeDietProphylaxis: new Coding({
        display: "Salt free diet - prophylaxis",
        code: "182958006",
        system: "http://snomed.info/sct",
    }),
    /**
     * Code: 182959003
     */
    LowProteinDietProphylaxis: new Coding({
        display: "Low protein diet - prophylaxis",
        code: "182959003",
        system: "http://snomed.info/sct",
    }),
    /**
     * Code: 182960008
     */
    UnsaturatedFatDietProphylaxis: new Coding({
        display: "Unsaturated fat diet - prophylaxis",
        code: "182960008",
        system: "http://snomed.info/sct",
    }),
    /**
     * Code: 183028005
     */
    EnteralTubeFeeding: new Coding({
        display: "Enteral tube feeding",
        code: "183028005",
        system: "http://snomed.info/sct",
    }),
    /**
     * Code: 223456000
     */
    ProvisionOfASpecialDiet: new Coding({
        display: "Provision of a special diet",
        code: "223456000",
        system: "http://snomed.info/sct",
    }),
    /**
     * Code: 225373002
     */
    PEGPercutaneousEndoscopicGastrostomyFeeding: new Coding({
        display: "PEG - Percutaneous endoscopic gastrostomy feeding",
        code: "225373002",
        system: "http://snomed.info/sct",
    }),
    /**
     * Code: 225374008
     */
    JejunostomyFeeding: new Coding({
        display: "Jejunostomy feeding",
        code: "225374008",
        system: "http://snomed.info/sct",
    }),
    /**
     * Code: 229912004
     */
    EnteralTubeFeeding_229912004: new Coding({
        display: "Enteral tube feeding",
        code: "229912004",
        system: "http://snomed.info/sct",
    }),
    /**
     * Code: 229913009
     */
    OralTubeFeeding: new Coding({
        display: "Oral tube feeding",
        code: "229913009",
        system: "http://snomed.info/sct",
    }),
    /**
     * Code: 229914003
     */
    NasogastricTubeFeeding: new Coding({
        display: "Nasogastric tube feeding",
        code: "229914003",
        system: "http://snomed.info/sct",
    }),
    /**
     * Code: 229915002
     */
    NasoduodenalFeeding: new Coding({
        display: "Nasoduodenal feeding",
        code: "229915002",
        system: "http://snomed.info/sct",
    }),
    /**
     * Code: 229916001
     */
    EsophagostomyFeeding: new Coding({
        display: "Esophagostomy feeding",
        code: "229916001",
        system: "http://snomed.info/sct",
    }),
    /**
     * Code: 229917005
     */
    GastrostomyFeeding: new Coding({
        display: "Gastrostomy feeding",
        code: "229917005",
        system: "http://snomed.info/sct",
    }),
    /**
     * Code: 284071006
     */
    DietaryTreatmentForDisorder: new Coding({
        display: "Dietary treatment for disorder",
        code: "284071006",
        system: "http://snomed.info/sct",
    }),
    /**
     * Code: 289133003
     */
    BalloonGastrostomyFeeding: new Coding({
        display: "Balloon gastrostomy feeding",
        code: "289133003",
        system: "http://snomed.info/sct",
    }),
    /**
     * Code: 310244003
     */
    NasojejunalFeeding: new Coding({
        display: "Nasojejunal feeding",
        code: "310244003",
        system: "http://snomed.info/sct",
    }),
    /**
     * Code: 361231003
     */
    PrescribedDietaryIntake: new Coding({
        display: "Prescribed dietary intake",
        code: "361231003",
        system: "http://snomed.info/sct",
    }),
    /**
     * Code: 386261001
     */
    DietStaging: new Coding({
        display: "Diet staging",
        code: "386261001",
        system: "http://snomed.info/sct",
    }),
    /**
     * Code: 38903004
     */
    TubeFeedingBySyringeMethod: new Coding({
        display: "Tube feeding by syringe method",
        code: "38903004",
        system: "http://snomed.info/sct",
    }),
    /**
     * Code: 404919001
     */
    WheatFreeDiet: new Coding({
        display: "Wheat-free diet",
        code: "404919001",
        system: "http://snomed.info/sct",
    }),
    /**
     * Code: 422972009
     */
    AdvanceDietAsTolerated: new Coding({
        display: "Advance diet as tolerated",
        code: "422972009",
        system: "http://snomed.info/sct",
    }),
    /**
     * Code: 425458000
     */
    LactoseFreeDiet: new Coding({
        display: "Lactose-free diet",
        code: "425458000",
        system: "http://snomed.info/sct",
    }),
    /**
     * Code: 50712000
     */
    TubeFeedingByBarronPump: new Coding({
        display: "Tube feeding by Barron pump",
        code: "50712000",
        system: "http://snomed.info/sct",
    }),
    /**
     * Code: 56948003
     */
    TubeFeedingByDripMethod: new Coding({
        display: "Tube feeding by drip method",
        code: "56948003",
        system: "http://snomed.info/sct",
    }),
    /**
     * Code: 61420007
     */
    TubeFeedingOfPatient: new Coding({
        display: "Tube feeding of patient",
        code: "61420007",
        system: "http://snomed.info/sct",
    }),
};

export { DietTypeCodings };
//# sourceMappingURL=DietTypeCodings.js.map

/*! @fhir-typescript/r4-core v0.0.11-beta.2 2022-05-18 */
'use strict';
import { Coding } from '../fhir/Coding.js';

// <auto-generated/>
/**
 * The possible sort directions, ascending or descending.
 */
var SortDirectionCodings = {
    /**
     * ascending: Sort by the value ascending, so that lower values appear first.
     */
    Ascending: new Coding({
        display: "Ascending",
        code: "ascending",
        system: "http://hl7.org/fhir/sort-direction",
    }),
    /**
     * descending: Sort by the value descending, so that lower values appear last.
     */
    Descending: new Coding({
        display: "Descending",
        code: "descending",
        system: "http://hl7.org/fhir/sort-direction",
    }),
};

export { SortDirectionCodings };
//# sourceMappingURL=SortDirectionCodings.js.map

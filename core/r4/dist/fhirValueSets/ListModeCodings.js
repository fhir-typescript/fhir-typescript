/*! @fhir-typescript/r4-core v0.0.11-beta.2 2022-05-18 */
'use strict';
import { Coding } from '../fhir/Coding.js';

// <auto-generated/>
/**
 * The processing mode that applies to this list.
 */
var ListModeCodings = {
    /**
     * changes: A point-in-time list that shows what changes have been made or recommended.  E.g. a discharge medication list showing what was added and removed during an encounter.
     */
    ChangeList: new Coding({
        display: "Change List",
        code: "changes",
        system: "http://hl7.org/fhir/list-mode",
    }),
    /**
     * snapshot: This list was prepared as a snapshot. It should not be assumed to be current.
     */
    SnapshotList: new Coding({
        display: "Snapshot List",
        code: "snapshot",
        system: "http://hl7.org/fhir/list-mode",
    }),
    /**
     * working: This list is the master list, maintained in an ongoing fashion with regular updates as the real world list it is tracking changes.
     */
    WorkingList: new Coding({
        display: "Working List",
        code: "working",
        system: "http://hl7.org/fhir/list-mode",
    }),
};

export { ListModeCodings };
//# sourceMappingURL=ListModeCodings.js.map

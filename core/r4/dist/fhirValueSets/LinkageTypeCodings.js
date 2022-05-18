/*! @fhir-typescript/r4-core v0.0.11-beta.2 2022-05-18 */
'use strict';
import { Coding } from '../fhir/Coding.js';

// <auto-generated/>
/**
 * Used to distinguish different roles a resource can play within a set of linked resources.
 */
var LinkageTypeCodings = {
    /**
     * alternate: The resource represents an alternative view of the underlying event/condition/etc.  The resource may still be actively maintained, even though it is not considered to be the source of truth.
     */
    AlternateRecord: new Coding({
        display: "Alternate Record",
        code: "alternate",
        system: "http://hl7.org/fhir/linkage-type",
    }),
    /**
     * historical: The resource represents an obsolete record of the underlying event/condition/etc.  It is not expected to be actively maintained.
     */
    HistoricalObsoleteRecord: new Coding({
        display: "Historical/Obsolete Record",
        code: "historical",
        system: "http://hl7.org/fhir/linkage-type",
    }),
    /**
     * source: The resource represents the "source of truth" (from the perspective of this Linkage resource) for the underlying event/condition/etc.
     */
    SourceOfTruth: new Coding({
        display: "Source of Truth",
        code: "source",
        system: "http://hl7.org/fhir/linkage-type",
    }),
};

export { LinkageTypeCodings };
//# sourceMappingURL=LinkageTypeCodings.js.map

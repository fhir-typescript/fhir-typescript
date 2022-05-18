/*! @fhir-typescript/r4-core v0.0.11-beta.2 2022-05-18 */
'use strict';
import { Coding } from '../fhir/Coding.js';

// <auto-generated/>
/**
 * The type of relationship between documents.
 */
var DocumentRelationshipTypeCodings = {
    /**
     * appends: This document adds additional information to the target document.
     */
    Appends: new Coding({
        display: "Appends",
        code: "appends",
        system: "http://hl7.org/fhir/document-relationship-type",
    }),
    /**
     * replaces: This document logically replaces or supersedes the target document.
     */
    Replaces: new Coding({
        display: "Replaces",
        code: "replaces",
        system: "http://hl7.org/fhir/document-relationship-type",
    }),
    /**
     * signs: This document is a signature of the target document.
     */
    Signs: new Coding({
        display: "Signs",
        code: "signs",
        system: "http://hl7.org/fhir/document-relationship-type",
    }),
    /**
     * transforms: This document was generated by transforming the target document (e.g. format or language conversion).
     */
    Transforms: new Coding({
        display: "Transforms",
        code: "transforms",
        system: "http://hl7.org/fhir/document-relationship-type",
    }),
};

export { DocumentRelationshipTypeCodings };
//# sourceMappingURL=DocumentRelationshipTypeCodings.js.map
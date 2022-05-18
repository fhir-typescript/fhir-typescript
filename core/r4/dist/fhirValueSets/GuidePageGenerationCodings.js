/*! @fhir-typescript/r4-core v0.0.11-beta.2 2022-05-18 */
'use strict';
import { Coding } from '../fhir/Coding.js';

// <auto-generated/>
/**
 * A code that indicates how the page is generated.
 */
var GuidePageGenerationCodings = {
    /**
     * generated: Page will be generated by the publication process - no source to bring across.
     */
    Generated: new Coding({
        display: "Generated",
        code: "generated",
        system: "http://hl7.org/fhir/guide-page-generation",
    }),
    /**
     * html: Page is proper xhtml with no templating.  Will be brought across unchanged for standard post-processing.
     */
    HTML: new Coding({
        display: "HTML",
        code: "html",
        system: "http://hl7.org/fhir/guide-page-generation",
    }),
    /**
     * markdown: Page is markdown with templating.  Will use the template to create a file that imports the markdown file prior to post-processing.
     */
    Markdown: new Coding({
        display: "Markdown",
        code: "markdown",
        system: "http://hl7.org/fhir/guide-page-generation",
    }),
    /**
     * xml: Page is xml with templating.  Will use the template to create a file that imports the source file and run the nominated XSLT transform (see parameters) if present prior to post-processing.
     */
    XML: new Coding({
        display: "XML",
        code: "xml",
        system: "http://hl7.org/fhir/guide-page-generation",
    }),
};

export { GuidePageGenerationCodings };
//# sourceMappingURL=GuidePageGenerationCodings.js.map

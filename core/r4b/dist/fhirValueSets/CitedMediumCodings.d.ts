import { CodingArgs } from '../fhir/Coding.js';
/**
 * NLM codes Internet or Print.
 */
export declare type CitedMediumCodingType = {
    /**
     * internet: Online publication in a periodic release. Used to match NLM JournalIssue CitedMedium code for online version.
     */
    Internet: CodingArgs;
    /**
     * internet-without-issue: Online publication without any periodic release. Used for article specific publication date which could be the same as or different from journal issue publication date.
     */
    InternetWithoutIssue: CodingArgs;
    /**
     * offline-digital-storage: Publication in a physical device for electronic data storage, organized in issues for periodic release.
     */
    OfflineDigitalStorage: CodingArgs;
    /**
     * offline-digital-storage-without-issue: Publication in a physical device for electronic data storage, without any periodic release.
     */
    OfflineDigitalStorageWithoutIssue: CodingArgs;
    /**
     * print: Print publication in a periodic release. Used to match NLM JournalIssue CitedMedium code for print version.
     */
    Print: CodingArgs;
    /**
     * print-without-issue: Print publication without any periodic release.
     */
    PrintWithoutIssue: CodingArgs;
};
/**
 * NLM codes Internet or Print.
 */
export declare const CitedMediumCodings: CitedMediumCodingType;
//# sourceMappingURL=CitedMediumCodings.d.ts.map
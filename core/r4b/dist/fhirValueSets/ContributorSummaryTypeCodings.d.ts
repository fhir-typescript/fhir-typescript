import { CodingArgs } from '../fhir/Coding.js';
/**
 * Used to code author list statement, contributorship statement, and such.
 */
export declare type ContributorSummaryTypeCodingType = {
    /**
     * acknowledgement-list: Display of the list of acknowledged parties as a complete string.
     */
    AcknowledgmentList: CodingArgs;
    /**
     * acknowledgment-statement: Statement of acknowledgment of contributions beyond those compiled for formal contributorship statements.
     */
    AcknowledgmentStatement: CodingArgs;
    /**
     * author-string: Display of the author list as a complete string.
     */
    AuthorString: CodingArgs;
    /**
     * competing-interests-statement: Statement of completing interests related to the creation of the cited artifact. Also called conflicts of interest or declaration of interests.
     */
    CompetingInterestsStatement: CodingArgs;
    /**
     * contributorship-list: Display of the list of contributors as a complete string.
     */
    ContributorshipList: CodingArgs;
    /**
     * contributorship-statement: Compiled summary of contributions.
     */
    ContributorshipStatement: CodingArgs;
    /**
     * funding-statement: Statement of financial support for the creation of the cited artifact.
     */
    FundingStatement: CodingArgs;
};
/**
 * Used to code author list statement, contributorship statement, and such.
 */
export declare const ContributorSummaryTypeCodings: ContributorSummaryTypeCodingType;
//# sourceMappingURL=ContributorSummaryTypeCodings.d.ts.map
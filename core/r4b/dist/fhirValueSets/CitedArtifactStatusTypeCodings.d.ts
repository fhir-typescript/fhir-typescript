import { CodingArgs } from '../fhir/Coding.js';
/**
 * Cited Artifact Status Type
 */
export declare type CitedArtifactStatusTypeCodingType = {
    /**
     * accepted: The content that was not published yet has been approved for publication by the publisher and/or editor.
     */
    Accepted: CodingArgs;
    /**
     * active: The content is considered complete for its current state by the content creator.
     */
    Active: CodingArgs;
    /**
     * approved: The content has been approved for a state transition, with the focus of approval described in the text associated with this coding.
     */
    Approved: CodingArgs;
    /**
     * archived: The content is retired or considered no longer current but still available as part of the public record.
     */
    Archived: CodingArgs;
    /**
     * created: The content was originally constructed or composed.
     */
    Created: CodingArgs;
    /**
     * draft: The content is considered unfinished or incomplete and not representative of the current state desired by the content creator.
     */
    Draft: CodingArgs;
    /**
     * post-review-pre-published: The content is in a state between the review(s) being completed and being published.
     */
    PostReviewPrePublished: CodingArgs;
    /**
     * pre-review: The content is awaiting assignment and delivery to reviewer(s).
     */
    PreReview: CodingArgs;
    /**
     * published-early-form: The content is published but future changes to the published version are expected.
     */
    PublishedEarlyForm: CodingArgs;
    /**
     * published-final-form: The content is published and further changes to the content are not expected.
     */
    PublishedFinalForm: CodingArgs;
    /**
     * rejected: The content that was not published has been removed from consideration for publishing by a publisher or editor.
     */
    Rejected: CodingArgs;
    /**
     * retracted: The content that was published is removed from publication and should no longer be considered part of the public record.
     */
    Retracted: CodingArgs;
    /**
     * submitted: The content was sent to the publisher for consideration of publication.
     */
    Submitted: CodingArgs;
    /**
     * under-review: The content is in a state of being reviewed.
     */
    UnderReview: CodingArgs;
    /**
     * withdrawn: The content that was not published has been removed from consideration for publishing by the submitter.
     */
    Withdrawn: CodingArgs;
};
/**
 * Cited Artifact Status Type
 */
export declare const CitedArtifactStatusTypeCodings: CitedArtifactStatusTypeCodingType;
//# sourceMappingURL=CitedArtifactStatusTypeCodings.d.ts.map
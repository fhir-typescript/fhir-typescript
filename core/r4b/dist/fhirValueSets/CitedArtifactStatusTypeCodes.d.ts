/**
 * Cited Artifact Status Type
 */
export declare const CitedArtifactStatusTypeCodes: {
    /**
     * accepted: The content that was not published yet has been approved for publication by the publisher and/or editor.
     */
    readonly Accepted: "accepted";
    /**
     * active: The content is considered complete for its current state by the content creator.
     */
    readonly Active: "active";
    /**
     * approved: The content has been approved for a state transition, with the focus of approval described in the text associated with this coding.
     */
    readonly Approved: "approved";
    /**
     * archived: The content is retired or considered no longer current but still available as part of the public record.
     */
    readonly Archived: "archived";
    /**
     * created: The content was originally constructed or composed.
     */
    readonly Created: "created";
    /**
     * draft: The content is considered unfinished or incomplete and not representative of the current state desired by the content creator.
     */
    readonly Draft: "draft";
    /**
     * post-review-pre-published: The content is in a state between the review(s) being completed and being published.
     */
    readonly PostReviewPrePublished: "post-review-pre-published";
    /**
     * pre-review: The content is awaiting assignment and delivery to reviewer(s).
     */
    readonly PreReview: "pre-review";
    /**
     * published-early-form: The content is published but future changes to the published version are expected.
     */
    readonly PublishedEarlyForm: "published-early-form";
    /**
     * published-final-form: The content is published and further changes to the content are not expected.
     */
    readonly PublishedFinalForm: "published-final-form";
    /**
     * rejected: The content that was not published has been removed from consideration for publishing by a publisher or editor.
     */
    readonly Rejected: "rejected";
    /**
     * retracted: The content that was published is removed from publication and should no longer be considered part of the public record.
     */
    readonly Retracted: "retracted";
    /**
     * submitted: The content was sent to the publisher for consideration of publication.
     */
    readonly Submitted: "submitted";
    /**
     * under-review: The content is in a state of being reviewed.
     */
    readonly UnderReview: "under-review";
    /**
     * withdrawn: The content that was not published has been removed from consideration for publishing by the submitter.
     */
    readonly Withdrawn: "withdrawn";
};
/**
 * Cited Artifact Status Type
 */
export declare type CitedArtifactStatusTypeCodeType = typeof CitedArtifactStatusTypeCodes[keyof typeof CitedArtifactStatusTypeCodes];
//# sourceMappingURL=CitedArtifactStatusTypeCodes.d.ts.map
import { Coding } from '../fhir/Coding.js';
/**
 * Base values for the order of the items in a list resource.
 */
export declare const ListOrderCodings: {
    /**
     * alphabetic: The list is sorted alphabetically by an unspecified property of the items in the list.
     */
    readonly SortedAlphabetically: Coding;
    /**
     * category: The list is sorted categorically by an unspecified property of the items in the list.
     */
    readonly SortedByCategory: Coding;
    /**
     * entry-date: The list is sorted by the date the item was added to the list. Note that the date added to the list is not explicit in the list itself.
     */
    readonly SortedByItemDate: Coding;
    /**
     * event-date: The list is sorted by the data of the event. This can be used when the list has items which are dates with past or future events.
     */
    readonly SortedByEventDate: Coding;
    /**
     * patient: The list is sorted by patient, with items for each patient grouped together.
     */
    readonly SortedByPatient: Coding;
    /**
     * priority: The list is sorted by priority. The exact method in which priority has been determined is not specified.
     */
    readonly SortedByPriority: Coding;
    /**
     * system: The list was sorted by the system. The criteria the user used are not specified; define additional codes to specify a particular order (or use other defined codes).
     */
    readonly SortedBySystem: Coding;
    /**
     * user: The list was sorted by a user. The criteria the user used are not specified.
     */
    readonly SortedByUser: Coding;
};
/**
 * Base values for the order of the items in a list resource.
 */
export declare type ListOrderCodingType = typeof ListOrderCodings;
//# sourceMappingURL=ListOrderCodings.d.ts.map
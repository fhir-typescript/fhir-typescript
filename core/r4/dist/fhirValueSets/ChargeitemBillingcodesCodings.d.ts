import { Coding } from '../fhir/Coding.js';
/**
 * Example set of codes that can be used for billing purposes.
 */
export declare const ChargeitemBillingcodesCodings: {
    /**
     * 1100: From German EBM billing system:
     * Unvorhergesehene Inanspruchnahme des Vertragsarztes durch einen Patienten;zwischen 19:00 und 22:00 Uhr;an Samstagen, Sonntagen und gesetzlichen Feiertagen, am 24.12. und 31.12. zwischen 07:00 und 19:00 Uhr.
     */
    readonly UnvorhergeseheneInanspruchnahme: Coding;
    /**
     * 1210: From German EBM billing system:
     * Notfallpauschale im organisierten Not(-fall)dienst und für nicht an der vertragsärztlichen Versorgung teilnehmende Ärzte, Institute und Krankenhäuser bei Inanspruchnahme;zwischen 07:00 und 19:00 Uhr.
     */
    readonly Notfallpauschale: Coding;
    /**
     * 1320: From German EBM billing system:
     * Grundpauschale für Ärzte, Institute und Krankenhäuser, die zur Erbringung von Leistungen innerhalb mindestens eines der Fachgebiete Anästhesiologie, Frauenheilkunde und Geburtshilfe, Haut- und Geschlechtskrankheiten, Mund-, Kiefer- und Gesichtschirurgie und Humangenetik ermächtigt sind.
     */
    readonly Grundpauschale: Coding;
};
/**
 * Example set of codes that can be used for billing purposes.
 */
export declare type ChargeitemBillingcodesCodingType = typeof ChargeitemBillingcodesCodings;
//# sourceMappingURL=ChargeitemBillingcodesCodings.d.ts.map
/*! @fhir-typescript/r4-core v0.0.11-beta.2 2022-05-18 */
'use strict';
import { Coding } from '../fhir/Coding.js';

// <auto-generated/>
/**
 * The value set to instantiate this attribute should be drawn from a terminologically robust code system that consists of or contains concepts to support describing the administrative routes used during vaccination. This value set is provided as a suggestive example.
 */
var ImmunizationRouteCodings = {
    /**
     * IDINJ: Injection, intradermal
     */
    InjectionIntradermal: new Coding({
        display: "Injection, intradermal",
        code: "IDINJ",
        system: "http://terminology.hl7.org/CodeSystem/v3-RouteOfAdministration",
    }),
    /**
     * IM: Injection, intramuscular
     */
    InjectionIntramuscular: new Coding({
        display: "Injection, intramuscular",
        code: "IM",
        system: "http://terminology.hl7.org/CodeSystem/v3-RouteOfAdministration",
    }),
    /**
     * IVINJ: Injection, intravenous
     */
    InjectionIntravenous: new Coding({
        display: "Injection, intravenous",
        code: "IVINJ",
        system: "http://terminology.hl7.org/CodeSystem/v3-RouteOfAdministration",
    }),
    /**
     * NASINHLC: Inhalation, nasal, prongs
     */
    InhalationNasalCannula: new Coding({
        display: "Inhalation, nasal cannula",
        code: "NASINHLC",
        system: "http://terminology.hl7.org/CodeSystem/v3-RouteOfAdministration",
    }),
    /**
     * PO: Swallow, oral
     */
    SwallowOral: new Coding({
        display: "Swallow, oral",
        code: "PO",
        system: "http://terminology.hl7.org/CodeSystem/v3-RouteOfAdministration",
    }),
    /**
     * SQ: Injection, subcutaneous
     */
    InjectionSubcutaneous: new Coding({
        display: "Injection, subcutaneous",
        code: "SQ",
        system: "http://terminology.hl7.org/CodeSystem/v3-RouteOfAdministration",
    }),
    /**
     * TRNSDERM: Transdermal
     */
    Transdermal: new Coding({
        display: "Transdermal",
        code: "TRNSDERM",
        system: "http://terminology.hl7.org/CodeSystem/v3-RouteOfAdministration",
    }),
};

export { ImmunizationRouteCodings };
//# sourceMappingURL=ImmunizationRouteCodings.js.map
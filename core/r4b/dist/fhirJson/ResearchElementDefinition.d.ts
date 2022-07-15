import * as fhir from '../fhirJson.js';
/**
 * Characteristics can be defined flexibly to accommodate different use cases for membership criteria, ranging from simple codes, all the way to using an expression language to express the criteria.
 */
export interface ResearchElementDefinitionCharacteristic extends fhir.BackboneElement {
    /**
     * Define members of the research element using Codes (such as condition, medication, or observation), Expressions ( using an expression language such as FHIRPath or CQL) or DataRequirements (such as Diabetes diagnosis onset in the last year).
     */
    definitionCodeableConcept?: fhir.CodeableConcept | undefined;
    /**
     * Define members of the research element using Codes (such as condition, medication, or observation), Expressions ( using an expression language such as FHIRPath or CQL) or DataRequirements (such as Diabetes diagnosis onset in the last year).
     */
    definitionCanonical?: string | undefined;
    /**
     * Extended properties for primitive element: ResearchElementDefinition.characteristic.definition[x]
     */
    _definitionCanonical?: fhir.FhirElement;
    /**
     * Define members of the research element using Codes (such as condition, medication, or observation), Expressions ( using an expression language such as FHIRPath or CQL) or DataRequirements (such as Diabetes diagnosis onset in the last year).
     */
    definitionExpression?: fhir.Expression | undefined;
    /**
     * Define members of the research element using Codes (such as condition, medication, or observation), Expressions ( using an expression language such as FHIRPath or CQL) or DataRequirements (such as Diabetes diagnosis onset in the last year).
     */
    definitionDataRequirement?: fhir.DataRequirement | undefined;
    /**
     * Use UsageContext to define the members of the population, such as Age Ranges, Genders, Settings.
     */
    usageContext?: (fhir.UsageContext | null)[] | undefined;
    /**
     * When true, members with this characteristic are excluded from the element.
     */
    exclude?: boolean | undefined;
    /**
     * Extended properties for primitive element: ResearchElementDefinition.characteristic.exclude
     */
    _exclude?: fhir.FhirElement;
    /**
     * Specifies the UCUM unit for the outcome.
     */
    unitOfMeasure?: '\'' | '\'\'' | '[acr_br]' | '[acr_us]' | '[Amb\'a\'1\'U]' | '[APL\'U]' | '[APL\'U]/mL' | '[arb\'U]' | '[arb\'U]/L' | '[arb\'U]/mL' | '[AU]' | '[BAU]' | '[bbl_us]' | '[bdsk\'U]' | '[beth\'U]' | '[bf_i]' | '[Btu_39]' | '[Btu_59]' | '[Btu_60]' | '[Btu_IT]' | '[Btu_m]' | '[Btu_th]' | '[Btu]' | '[bu_br]' | '[bu_us]' | '[c]' | '[Cal]' | '[car_Au]' | '[car_m]' | '[CCID_50]' | '[cft_i]' | '[CFU]' | '[CFU]/L' | '[CFU]/mL' | '[ch_br]' | '[ch_us]' | '[Ch]' | '[cicero]' | '[cin_i]' | '[cml_i]' | '[cr_i]' | '[crd_us]' | '[cup_us]' | '[cyd_i]' | '[D\'ag\'U]' | '[degF]' | '[didot]' | '[diop]' | '[dpt_us]' | '[dqt_us]' | '[dr_ap]' | '[dr_av]' | '[drp]' | '[drp]/[HPF]' | '[drp]/h' | '[drp]/min' | '[drp]/mL' | '[drp]/s' | '[dye\'U]' | '[e]' | '[eps_0]' | '[fdr_br]' | '[fdr_us]' | '[FFU]' | '[foz_br]' | '[foz_us]' | '[ft_br]' | '[ft_i]' | '[ft_us]' | '[fth_br]' | '[fth_i]' | '[fth_us]' | '[fur_us]' | '[G]' | '[gal_br]' | '[gal_us]' | '[gal_wi]' | '[gil_br]' | '[gil_us]' | '[GPL\'U]' | '[GPL\'U]/mL' | '[gr]' | '[h]' | '[hd_i]' | '[hnsf\'U]' | '[hp_C]' | '[hp_M]' | '[hp_Q]' | '[hp_X]' | '[HP]' | '[HPF]' | '[in_br]' | '[in_i\'H2O]' | '[in_i\'Hg]' | '[in_i]' | '[in_us]' | '[iU]' | '[IU]' | '[IU]/(2.h)' | '[IU]/(24.h)' | '[IU]/10*9{RBCs}' | '[IU]/d' | '[iU]/dL' | '[IU]/dL' | '[iU]/g' | '[IU]/g' | '[IU]/g{Hb}' | '[iU]/g{Hgb}' | '[IU]/h' | '[iU]/kg' | '[IU]/kg' | '[IU]/kg/d' | '[iU]/L' | '[IU]/L' | '[IU]/L{37Cel}' | '[IU]/mg{creat}' | '[IU]/min' | '[iU]/mL' | '[IU]/mL' | '[k]' | '[ka\'U]' | '[kn_br]' | '[kn_i]' | '[knk\'U]' | '[lb_ap]' | '[lb_av]' | '[lb_tr]' | '[lbf_av]' | '[lcwt_av]' | '[Lf]' | '[ligne]' | '[lk_br]' | '[lk_us]' | '[lne]' | '[LPF]' | '[lton_av]' | '[ly]' | '[m_e]' | '[m_p]' | '[mclg\'U]' | '[mesh_i]' | '[MET]' | '[mi_br]' | '[mi_i]' | '[mi_us]' | '[mil_i]' | '[mil_us]' | '[min_br]' | '[min_us]' | '[MPL\'U]' | '[MPL\'U]/mL' | '[mu_0]' | '[nmi_br]' | '[nmi_i]' | '[oz_ap]' | '[oz_av]' | '[oz_tr]' | '[p\'diop]' | '[pc_br]' | '[pca_pr]' | '[pca]' | '[PFU]' | '[pH]' | '[pi]' | '[pi].rad/min' | '[pied]' | '[pk_br]' | '[pk_us]' | '[pnt_pr]' | '[pnt]' | '[PNU]' | '[pouce]' | '[ppb]' | '[ppm]' | '[ppm]{v/v}' | '[ppth]' | '[pptr]' | '[PRU]' | '[psi]' | '[pt_br]' | '[pt_us]' | '[pwt_tr]' | '[qt_br]' | '[qt_us]' | '[rch_us]' | '[rd_br]' | '[rd_us]' | '[rlk_us]' | '[S]' | '[sc_ap]' | '[sct]' | '[scwt_av]' | '[sft_i]' | '[sin_i]' | '[smgy\'U]' | '[smi_us]' | '[smoot]' | '[srd_us]' | '[ston_av]' | '[stone_av]' | '[syd_i]' | '[tb\'U]' | '[tbs_us]' | '[TCID_50]' | '[todd\'U]' | '[tsp_us]' | '[twp]' | '[USP\'U]' | '[yd_br]' | '[yd_i]' | '[yd_us]' | '{# of calculi}' | '{# of donor informative markers}' | '{# of fetuses}' | '{# of informative markers}' | '{#}' | '{#}/[HPF]' | '{#}/[LPF]' | '{#}/L' | '{#}/min' | '{#}/mL' | '{#}/uL' | '{2 or 3 times}/d' | '{3 times}/d' | '{4 times}/d' | '{5 times}/d' | '{Absorbance\'U}' | '{Absorbance\'U}/mL' | '{absorbance}' | '{activity}' | '{ActivityCoefficient}' | '{AHF\'U}' | '{AntibodyResponse\'U}' | '{Applicator}' | '{APS\'U}' | '{ARU}' | '{AspirinReaction\'U}' | '{Bead}' | '{beats}/min' | '{Beats}/min' | '{binding_index}' | '{Bottle}' | '{Bowls}/d' | '{Breaths}/min' | '{CAE\'U}' | '{CAG_repeats}' | '{CagRepeat}' | '{Can}' | '{Cans}/wk' | '{Capsule}' | '{Cell}' | '{cells}' | '{cells}/[HPF]' | '{Cells}/mL' | '{cells}/uL' | '{Cells}/uL' | '{CfTiter}' | '{cfu}' | '{cfu}/mL' | '{CGG_repeats}' | '{CGG}' | '{CH100\'U}' | '{clock time}' | '{clock_time}' | '{ComplementActivityEnzyme\'U}' | '{ComplementCH100\'U}' | '{ComplementCH50\'U}' | '{copies}' | '{copies}/mL' | '{Copies}/mL' | '{copies}/ug' | '{Copies}/uL' | '{count}' | '{Count}' | '{Counts}/min' | '{CPM}' | '{CPM}/10*3{cell}' | '{Ct}' | '{Dalton}' | '{DdTiter}' | '{delta_OD}' | '{DeltaOpticalDensity}' | '{dilution}' | '{Dilution}' | '{Disintegrations}/min' | '{Dose}' | '{Drinks}/d' | '{Each}' | '{Ehrlich_U}/dL' | '{Ehrlich\'U}' | '{Ehrlich\'U}/(2.h)' | '{Ehrlich\'U}/100.g' | '{Ehrlich\'U}/d' | '{Ehrlich\'U}/dL' | '{Ehrlich\'U}/mL' | '{EhrlichU}/dL' | '{EIA_index}' | '{EIA_titer}' | '{EIA\'U}' | '{EIA\'U}/U' | '{EIAIndex}' | '{EIATiter}' | '{Elisa_U}/mL' | '{ELISA\'U}' | '{Elisa\'U}/mL' | '{ElisaIndex}' | '{ElisaU}/mL' | '{ElisaValue}' | '{ERY}/uL' | '{EV}' | '{Events}' | '{FIU}' | '{FluorescenceIntensity\'U}' | '{fraction}' | '{G-PortionPhospholipids}' | '{GAA_repeats}' | '{genomes}/mL' | '{GliadinIndexValue}' | '{Globules}/[HPF]' | '{GPS\'U}' | '{HA_titer}' | '{HaTiter}' | '{IFA_index}' | '{IFA_titer}' | '{IfaIndex}' | '{IfaTiter}' | '{IgAAntiphosphatidyleserine\'U}' | '{IgAPhospholipid\'U}' | '{IgGAntiphosphatidyleserine\'U}' | '{IgGIndex}' | '{IgMAntiphosphatidyleserine\'U}' | '{IgMIndex}' | '{ImmuneComplex\'U}' | '{ImmuneStatusRatio}' | '{Immunity}' | '{index_val}' | '{Index_val}' | '{index}' | '{IndexValue}' | '{InhaledTobaccoUseAmountYears}' | '{InhaledTobaccoUsePacks}/d' | '{INR\'unit}' | '{INR}' | '{ISR}' | '{JDF\'U}' | '{JDF\'U}/L' | '{JuvenileDiabetesFound\'U}' | '{KCT\'U}' | '{kp_C}' | '{KRONU\'U}/L' | '{KRONU\'U}/mL' | '{lgCopies}/ml' | '{log_copies}/mL' | '{Log_copies}/mL' | '{Log_IU}' | '{log_IU}/mL' | '{Log_IU}/mL' | '{Log}' | '{Lyme_index_value}' | '{LymeIndexValue}' | '{M-PortionPhospholipids}' | '{M.o.M.}' | '{M.o.M}' | '{Markers}' | '{minidrop}/min' | '{minidrop}/s' | '{minidrp}' | '{mm/dd/yyyy}' | '{molecule}/{platelet}' | '{Molecule}/{Platelet}' | '{MPS\'U}' | '{MPS\'U}/mL' | '{MultOfMean}' | '{mutation}' | '{NonspecificOunce}' | '{Number}' | '{OD_unit}' | '{Once}/d' | '{OpticalDensity}' | '{OpticalDensityIndex}' | '{OpticalDensityRatio}' | '{P2Y12 Reaction Units}' | '{Package}' | '{Packs}/d' | '{PackYears}' | '{Pan_Bio\'U}' | '{Patch}' | '{percentile}' | '{Percentile}' | '{phenotype}' | '{Pill}' | '{Pouches}/wk' | '{RadioactiveT3UptakeRatio}' | '{ratio}' | '{rbc}' | '{RBC}/uL' | '{RecTiter}' | '{relative_saturation}' | '{Relative\'U}' | '{RelativeViscosity}' | '{RPI\'U}' | '{Rubella_virus}' | '{RubellaVirus}' | '{s_co_ratio}' | '{SatIndex}' | '{saturation}' | '{Scoop}' | '{ScoreOf}' | '{shift}' | '{spermatozoa}/mL' | '{Spermatozoa}/mL' | '{spray}' | '{StandardDeviation}' | '{StandardIgA\'U}' | '{StandardIgG\'U}' | '{StandardIgM\'U}' | '{StdDeviation\'U}' | '{STDV}' | '{StimulatingIndex}' | '{Streptozyme\'U}' | '{tbl}' | '{ThyroxinUptake\'U}' | '{TIBC\'U}' | '{Times}/wk' | '{Tine\'U}' | '{titer}' | '{tot}' | '{ToxoplasmaIndexValue}' | '{TSI_index}' | '{Vial}' | '{Volume}/{Vvolume}' | '{WBCs}' | '{WeeksDays}' | '{WhiteBloodCell}' | '/(12.h)' | '/[arb\'U]' | '/[HPF]' | '/[iU]' | '/[IU]' | '/[LPF]' | '/{entity}' | '/{Entity}' | '/{oif}' | '/{OIF}' | '/{Specimen}' | '/{tot}' | '/10*10' | '/10*12' | '/10*12{rbc}' | '/10*12{RBCs}' | '/10*3' | '/10*3.{RBCs}' | '/10*4{RBCs}' | '/10*6' | '/10*9' | '/100' | '/100{cells}' | '/100{neutrophils}' | '/100{spermatozoa}' | '/100{Spermatozoa}' | '/100{WBC}' | '/100{WBCs}' | '/a' | '/cm[H2O]' | '/d' | '/dL' | '/g' | '/g{creat}' | '/g{Hb}' | '/g{hgb}' | '/g{HGB}' | '/g{tot_nit}' | '/g{tot_prot}' | '/g{tot\'nit}' | '/g{tot\'prot}' | '/g{wet_tis}' | '/g{wet\'tis}' | '/h' | '/kg' | '/kg{body_wt}' | '/kg{body\'wt}' | '/L' | '/m2' | '/m3' | '/mg' | '/min' | '/mL' | '/mm' | '/mm3' | '/mmol' | '/mmol{creat}' | '/mo' | '/s' | '/U' | '/ug' | '/uL' | '/wk' | '%' | '%[slope]' | '%{0to3Hours}' | '%{abnormal}' | '%{Abnormal}' | '%{activity}' | '%{Activity}' | '%{aggregation}' | '%{at_60_min}' | '%{bacteria}' | '%{basal_activity}' | '%{BasalActivity}' | '%{baseline}' | '%{binding}' | '%{Binding}' | '%{blockade}' | '%{Blockade}' | '%{blocked}' | '%{bound}' | '%{Bound}' | '%{breakdown}' | '%{Carboxyhemoglobin}' | '%{cells}' | '%{Conversion}' | '%{Cound}' | '%{deficient}' | '%{dose}' | '%{EosSeen}' | '%{excretion}' | '%{Excretion}' | '%{Fat}' | '%{FetalErythrocytes}' | '%{Hb}' | '%{Hemoglobin}' | '%{HemoglobinA1C}' | '%{HemoglobinSaturation}' | '%{hemolysis}' | '%{Hemolysis}' | '%{HumanResponse}' | '%{index}' | '%{Index}' | '%{inhibition}' | '%{Inhibition}' | '%{Live}' | '%{loss_AChR}' | '%{loss}' | '%{lysis}' | '%{Negative Control}' | '%{normal_pooled_plasma}' | '%{normal}' | '%{Normal}' | '%{NormalControl}' | '%{NormalPooledPlasma}' | '%{ofAvailable}' | '%{ofBacteria}' | '%{OfLymphocytes}' | '%{OfWBCs}' | '%{Oxygen}' | '%{penetration}' | '%{positive}' | '%{Positive}' | '%{Precipitate}' | '%{RBCs}' | '%{reactive}' | '%{Reactivity}' | '%{recovery}' | '%{reference}' | '%{relative}' | '%{residual}' | '%{response}' | '%{risk}' | '%{saturation}' | '%{SpermMotility}' | '%{Tot\'Cholesterol}' | '%{Tot\'Hgb}' | '%{total}' | '%{Total}' | '%{TotalProtein}' | '%{uptake}' | '%{Uptake}' | '%{viable}' | '%{vol}' | '%{WBCs}' | '%{WeightToWeight}' | '%/100{WBC}' | '1' | '1/d' | '1/min' | '10.L/(min.m2)' | '10.L/min' | '10.uN.s/(cm.m2)' | '10.uN.s/(cm5.m2)' | '10.uN.s/cm' | '10.uN.s/cm2' | '10*' | '10*-3{Polarization\'U}' | '10*-6{Immunofluorescence\'U}' | '10*12/L' | '10*3' | '10*3.{RBC}' | '10*3.U' | '10*3{copies}/mL' | '10*3{Copies}/mL' | '10*3{RBCs}' | '10*3/L' | '10*3/mL' | '10*3/uL' | '10*4/uL' | '10*5' | '10*6' | '10*6.[CFU]/L' | '10*6.[iU]' | '10*6.[IU]' | '10*6.eq/mL' | '10*6.U' | '10*6/(24.h)' | '10*6/{Specimen}' | '10*6/kg' | '10*6/L' | '10*6/mL' | '10*6/mm3' | '10*6/uL' | '10*8' | '10*9/L' | '10*9/mL' | '10*9/uL' | '10^' | '24.h' | 'a' | 'A' | 'a_g' | 'a_j' | 'a_t' | 'A/m' | 'ag/{cell}' | 'Ao' | 'ar' | 'atm' | 'att' | 'AU' | 'b' | 'B' | 'B[kW]' | 'B[mV]' | 'B[SPL]' | 'B[uV]' | 'B[V]' | 'B[W]' | 'bar' | 'Bd' | 'Bi' | 'bit' | 'bit_s' | 'Bq' | 'By' | 'C' | 'cal' | 'cal_[15]' | 'cal_[20]' | 'cal_IT' | 'cal_m' | 'cal_th' | 'cd' | 'Cel' | 'cg' | 'Ci' | 'circ' | 'cL' | 'cm' | 'cm[H2O]' | 'cm[H2O]/(s.m)' | 'cm[H2O]/L/s' | 'cm[H2O]/s/m' | 'cm[Hg]' | 'cm2' | 'cm2/s' | 'cm3' | 'cP' | 'cSt' | 'd' | 'daL/min' | 'daL/min/m2' | 'dB' | 'deg' | 'deg/s' | 'dg' | 'dL' | 'dm' | 'dm2/s2' | 'dyn' | 'dyn.s/(cm.m2)' | 'dyn.s/cm' | 'eq' | 'eq/L' | 'eq/mL' | 'eq/mmol' | 'eq/umol' | 'erg' | 'eV' | 'F' | 'fg' | 'fL' | 'fL/nL' | 'fm' | 'fmol' | 'fmol/g' | 'fmol/L' | 'fmol/mg' | 'fmol/mg{cytosol_protein}' | 'fmol/mg{protein}' | 'fmol/mL' | 'g' | 'G' | 'g.m' | 'g.m/({hb}.m2)' | 'g.m/{beat}' | 'g.m/{H.B.}' | 'g.m/{hb}' | 'g{creat}' | 'g{Hb}' | 'g{total_nit}' | 'g{total_prot}' | 'g{wet_tissue}' | 'g/(100.g)' | 'g/(12.h)' | 'g/(24.h)' | 'g/(3.d)' | 'g/(4.h)' | 'g/(48.h)' | 'g/(5.h)' | 'g/(6.h)' | 'g/(72.h)' | 'g/(8.h)' | 'g/(8.h){shift}' | 'g/(8.kg.h)' | 'g/(kg.h)' | 'g/(kg.min)' | 'g/{specimen}' | 'g/{total_output}' | 'g/{total_weight}' | 'g/{TotalWeight}' | 'g/cm3' | 'g/d' | 'g/dL' | 'g/g' | 'g/g{Cre}' | 'g/g{creat}' | 'g/g{globulin}' | 'g/g{tissue}' | 'g/h' | 'g/h/m2' | 'g/kg' | 'g/kg/(8.h)' | 'g/kg/(8.h){shift}' | 'g/kg/d' | 'g/kg/h' | 'g/kg/min' | 'g/L' | 'g/m2' | 'g/mg' | 'g/min' | 'g/mL' | 'g/mmol' | 'g/mmol{creat}' | 'g/mol' | 'g/mol{creat}' | 'g%' | 'Gal' | 'Gb' | 'GBq' | 'gf' | 'gon' | 'Gy' | 'h' | 'H' | 'hL' | 'Hz' | 'J' | 'J/L' | 'K' | 'k[IU]/L' | 'k[iU]/mL' | 'k[IU]/mL' | 'K/W' | 'kat' | 'kat/kg' | 'kat/L' | 'kBq' | 'kcal' | 'kcal/(8.h)' | 'kcal/[oz_av]' | 'kcal/d' | 'kcal/h' | 'kcal/kg/(24.h)' | 'kg' | 'kg.m/s' | 'kg{wet\'tis}' | 'kg/(s.m2)' | 'kg/h' | 'kg/L' | 'kg/m2' | 'kg/m3' | 'kg/min' | 'kg/mol' | 'kg/s' | 'kL' | 'km' | 'kPa' | 'ks' | 'kU' | 'kU/g' | 'kU/h' | 'kU/L' | 'kU/L{class}' | 'kU/mL' | 'Ky' | 'L' | 'L.s2/s' | 'L/(24.h)' | 'L/(8.h)' | 'L/(min.m2)' | 'L/d' | 'L/h' | 'L/kg' | 'L/L' | 'L/min' | 'L/s' | 'L/s/s2' | 'lm' | 'lm.m2' | 'lm/m2' | 'Lmb' | 'lx' | 'm' | 'm[H2O]' | 'm[Hg]' | 'm[iU]' | 'm[IU]/L' | 'm[IU]/mL' | 'm/s' | 'm/s2' | 'm2' | 'm2/s' | 'm3/s' | 'mA' | 'mbar' | 'mbar.s/L' | 'mbar/L/s' | 'MBq' | 'mCi' | 'meq' | 'meq/(12.h)' | 'meq/(2.h)' | 'meq/(24.h)' | 'meq/(8.h.kg)' | 'meq/(8.h)' | 'meq/(kg.d)' | 'meq/{specimen}' | 'meq/{Specimen}' | 'meq/{total_volume}' | 'meq/d' | 'meq/dL' | 'meq/g' | 'meq/g{Cre}' | 'meq/g{creat}' | 'meq/h' | 'meq/kg' | 'meq/kg/h' | 'meq/kg/min' | 'meq/L' | 'meq/m2' | 'meq/min' | 'meq/mL' | 'mg' | 'mg{creat}' | 'mg{FEU}/L' | 'mg{Phenylketones}/dL' | 'mg/(10.h)' | 'mg/(12.h)' | 'mg/(18.h)' | 'mg/(2.h)' | 'mg/(24.h)' | 'mg/(6.h)' | 'mg/(72.h)' | 'mg/(8.h.kg)' | 'mg/(8.h)' | 'mg/(kg.h)' | 'mg/{collection}' | 'mg/{Hgb}/g' | 'mg/{specimen}' | 'mg/{Specimen}' | 'mg/{Tot\'Volume}' | 'mg/{total_output}' | 'mg/{total_volume}' | 'mg/{TotalVolume}' | 'mg/{Volume}' | 'mg/d' | 'mg/d/(173.10*-2.m2)' | 'mg/d/{1.73_m2}' | 'mg/dL' | 'mg/dL{RBCs}' | 'mg/g' | 'mg/g{Cre}' | 'mg/g{creat}' | 'mg/g{dry_tissue}' | 'mg/g{feces}' | 'mg/g{tissue}' | 'mg/g{wet_tissue}' | 'mg/h' | 'mg/kg' | 'mg/kg/(24.h)' | 'mg/kg/(8.h)' | 'mg/kg/d' | 'mg/kg/h' | 'mg/kg/min' | 'mg/L' | 'mg/L{RBCs}' | 'mg/m2' | 'mg/m3' | 'mg/mg' | 'mg/mg{cre}' | 'mg/mg{Cre}' | 'mg/mg{creat}' | 'mg/min' | 'mg/mL' | 'mg/mmol' | 'mg/mmol{Cre}' | 'mg/mmol{creat}' | 'mg/wk' | 'mho' | 'min' | 'mL' | 'mL{fetal_RBCs}' | 'mL/({h\'b}.m2)' | 'mL/(10.h)' | 'mL/(12.h)' | 'mL/(2.h)' | 'mL/(24.h)' | 'mL/(4.h)' | 'mL/(5.h)' | 'mL/(6.h)' | 'mL/(72.h)' | 'mL/(8.h)' | 'mL/(kg.min)' | 'mL/[sin_i]' | 'mL/{beat}' | 'mL/{beat}/m2' | 'mL/{h\'b}' | 'mL/cm[H2O]' | 'mL/d' | 'mL/dL' | 'mL/h' | 'mL/kg' | 'mL/kg/(8.h)' | 'mL/kg/d' | 'mL/kg/h' | 'mL/kg/min' | 'mL/L' | 'mL/m2' | 'mL/mbar' | 'mL/min' | 'mL/min/(173.10*-2.m2)' | 'mL/min/{1.73_m2}' | 'mL/min/m2' | 'mL/mm' | 'mL/s' | 'mm' | 'mm[H2O]' | 'mm[Hg]' | 'mm/h' | 'mm/min' | 'mm2' | 'mm3' | 'mmol' | 'mmol/(12.h)' | 'mmol/(18.h)' | 'mmol/(2.h)' | 'mmol/(24.h)' | 'mmol/(5.h)' | 'mmol/(6.h)' | 'mmol/(8.h.kg)' | 'mmol/(8.h)' | 'mmol/{ejaculate}' | 'mmol/{specimen}' | 'mmol/{Tot\'Volume}' | 'mmol/{total_vol}' | 'mmol/{TotalVolume}' | 'mmol/d' | 'mmol/dL' | 'mmol/g' | 'mmol/g{creat}' | 'mmol/g{hemoglobin}' | 'mmol/h' | 'mmol/h/mg{Hb}' | 'mmol/h/mg{protein}' | 'mmol/kg' | 'mmol/kg{H2O}' | 'mmol/kg/(8.h)' | 'mmol/kg/d' | 'mmol/kg/h' | 'mmol/kg/min' | 'mmol/L' | 'mmol/L{RBCs}' | 'mmol/L/s' | 'mmol/m' | 'mmol/m2' | 'mmol/min' | 'mmol/mmol' | 'mmol/mmol{creat}' | 'mmol/mmol{urea}' | 'mmol/mol' | 'mmol/mol{Cre}' | 'mmol/mol{creat}' | 'mmol/s/L' | 'mo' | 'mo_g' | 'mo_j' | 'mo_s' | 'mol' | 'mol/d' | 'mol/kg' | 'mol/kg/s' | 'mol/L' | 'mol/m3' | 'mol/mL' | 'mol/mol' | 'mol/mol{creat}' | 'mol/s' | 'mosm' | 'mosm/kg' | 'mosm/L' | 'mPa' | 'mPa.s' | 'ms' | 'Ms' | 'mU' | 'mU/g' | 'mU/g{Hb}' | 'mU/g{Hgb}' | 'mU/g{protein}' | 'mU/L' | 'mU/mg' | 'mU/mg{Cre}' | 'mU/mg{creat}' | 'mU/min' | 'mU/mL' | 'mU/mL/min' | 'mU/mmol{creat}' | 'mU/mmol{creatinine}' | 'mU/mmol{RBCs}' | 'mV' | 'Mx' | 'N' | 'N.cm' | 'N.s' | 'nCi' | 'ng' | 'ng{FEU}/mL' | 'ng/(24.h)' | 'ng/(8.h.kg)' | 'ng/(8.h)' | 'ng/(kg.d)' | 'ng/(kg.h)' | 'ng/(kg.min)' | 'ng/10*6' | 'ng/10*6{RBCs}' | 'ng/d' | 'ng/dL' | 'ng/dL/h' | 'ng/g' | 'ng/g{Cre}' | 'ng/g{creat}' | 'ng/h' | 'ng/kg' | 'ng/kg/(8.h)' | 'ng/kg/h' | 'ng/kg/min' | 'ng/L' | 'ng/m2' | 'ng/mg' | 'ng/mg{creat}' | 'ng/mg{protein}' | 'ng/mg{Protein}' | 'ng/mg/h' | 'ng/min' | 'ng/mL' | 'ng/mL{rbc}' | 'ng/mL{RBCs}' | 'ng/mL/h' | 'ng/s' | 'ng/U' | 'nkat' | 'nL' | 'nm' | 'nm/s/L' | 'nmol' | 'nmol{1/2cys}/mg{protein}' | 'nmol{ATP}' | 'nmol{BCE}' | 'nmol{BCE}/L' | 'nmol{BCE}/mmol{creat}' | 'nmol/(24.h)' | 'nmol/d' | 'nmol/dL' | 'nmol/dL{GF}' | 'nmol/g' | 'nmol/g{Cre}' | 'nmol/g{creat}' | 'nmol/g{dry_wt}' | 'nmol/h/L' | 'nmol/h/mg{protein}' | 'nmol/h/mL' | 'nmol/L' | 'nmol/L{RBCs}' | 'nmol/L/mmol{creat}' | 'nmol/L/s' | 'nmol/m/mg{protein}' | 'nmol/mg' | 'nmol/mg{creat}' | 'nmol/mg{protein}' | 'nmol/mg{protein}/h' | 'nmol/mg/h' | 'nmol/min' | 'nmol/min/10*6{cells}' | 'nmol/min/mg{Hb}' | 'nmol/min/mg{hemoglobin}' | 'nmol/min/mg{protein}' | 'nmol/min/mL' | 'nmol/mL' | 'nmol/mL/h' | 'nmol/mL/min' | 'nmol/mmol' | 'nmol/mmol{Cre}' | 'nmol/mmol{creat}' | 'nmol/mol' | 'nmol/nmol' | 'nmol/s' | 'nmol/s/L' | 'nmol/umol{creat}' | 'Np' | 'ns' | 'nU/{RBC}' | 'nU/mL' | 'Oe' | 'Ohm' | 'Ohm.m' | 'osm' | 'osm/kg' | 'osm/L' | 'P' | 'pA' | 'Pa' | 'pc' | 'pg' | 'pg/{cell}' | 'pg/{RBC}' | 'pg/dL' | 'pg/L' | 'pg/mg' | 'pg/mg{creat}' | 'pg/mL' | 'pg/mm' | 'ph' | 'pkat' | 'pL' | 'pm' | 'pmol' | 'pmol/(24.h)' | 'pmol/{RBC}' | 'pmol/d' | 'pmol/dL' | 'pmol/g' | 'pmol/h/mg{protein}' | 'pmol/h/mL' | 'pmol/L' | 'pmol/mg{protein}' | 'pmol/min' | 'pmol/min/mg{protein}' | 'pmol/mL' | 'pmol/mmol' | 'pmol/mmol{creat}' | 'pmol/mol' | 'pmol/umol' | 'pmol/umol{creat}' | 'ps' | 'pT' | 'R' | 'rad' | 'RAD' | 'REM' | 's' | 'S' | 's/{control}' | 'sb' | 'sph' | 'sr' | 'st' | 'St' | 'Sv' | 't' | 'T' | 'u' | 'U' | 'u[IU]' | 'u[IU]/L' | 'u[IU]/mL' | 'U{25Cel}/L' | 'U{37Cel}/L' | 'U{G}' | 'U/(1.h)' | 'U/(10.g){feces}' | 'U/(12.h)' | 'U/(18.h)' | 'U/(2.h)' | 'U/(24.h)' | 'U/10' | 'U/10*10' | 'U/10*10{cells}' | 'U/10*12' | 'U/10*12{RBCs}' | 'U/10*6' | 'U/10*9' | 'U/d' | 'U/dL' | 'U/g' | 'U/g{Cre}' | 'U/g{creat}' | 'U/g{Hb}' | 'U/g{hemoglobin}' | 'U/g{Hgb}' | 'U/g{protein}' | 'U/h' | 'U/kg{Hb}' | 'U/kg{hemoglobin}' | 'U/kg/h' | 'U/L' | 'U/min' | 'U/mL' | 'U/mL{RBC}' | 'U/mL{RBCs}' | 'U/mmol{creat}' | 'U/mol' | 'U/s' | 'U/umol' | 'uCi' | 'ueq' | 'ueq/L' | 'ueq/mL' | 'ug' | 'ug{FEU}/mL' | 'ug{T4}/dL' | 'ug/(100.g)' | 'ug/(24.h)' | 'ug/(8.h)' | 'ug/(kg.d)' | 'ug/(kg.h)' | 'ug/[sft_i]' | 'ug/{specimen}' | 'ug/{Specimen}' | 'ug/{TotalVolume}' | 'ug/d' | 'ug/dL' | 'ug/dL{rbc}' | 'ug/dL{RBCs}' | 'ug/g' | 'ug/g{Cre}' | 'ug/g{creat}' | 'ug/g{dry_tissue}' | 'ug/g{dry_wt}' | 'ug/g{DryWeight}' | 'ug/g{feces}' | 'ug/g{hair}' | 'ug/g{Hb}' | 'ug/g{Hgb}' | 'ug/g{tissue}' | 'ug/g{Tissue}' | 'ug/h' | 'ug/kg' | 'ug/kg/(8.h)' | 'ug/kg/d' | 'ug/kg/h' | 'ug/kg/min' | 'ug/L' | 'ug/L{DDU}' | 'ug/L{RBCs}' | 'ug/L/(24.h)' | 'ug/m2' | 'ug/m3' | 'ug/mg' | 'ug/mg{Cre}' | 'ug/mg{creat}' | 'ug/min' | 'ug/mL' | 'ug/mL{class}' | 'ug/mL{eqv}' | 'ug/mL{FEU}' | 'ug/mmol' | 'ug/mmol{creat}' | 'ug/ng' | 'ukat' | 'uL' | 'uL/(2.h)' | 'uL/h' | 'um' | 'um/s' | 'umol' | 'umol{BCE}/mol' | 'umol/(2.h)' | 'umol/(24.h)' | 'umol/(8.h)' | 'umol/d' | 'umol/dL' | 'umol/dL{GF}' | 'umol/g' | 'umol/g{Cre}' | 'umol/g{creat}' | 'umol/g{Hb}' | 'umol/g{hemoglobin}' | 'umol/g{Hgb}' | 'umol/h' | 'umol/h/g' | 'umol/h/L' | 'umol/h/mg{protein}' | 'umol/kg' | 'umol/kg{feces}' | 'umol/L' | 'umol/L{rbc}' | 'umol/L{RBCs}' | 'umol/L/h' | 'umol/m' | 'umol/mg' | 'umol/mg{Cre}' | 'umol/mg{creat}' | 'umol/min' | 'umol/min/g' | 'umol/min/g{mucosa}' | 'umol/min/g{prot}' | 'umol/min/g{protein}' | 'umol/min/L' | 'umol/mL' | 'umol/mL/min' | 'umol/mmol' | 'umol/mmol{creat}' | 'umol/mol' | 'umol/mol{Cre}' | 'umol/mol{creat}' | 'umol/mol{Hb}' | 'umol/umol' | 'umol/umol{creat}' | 'uOhm' | 'us' | 'uU' | 'uU/g' | 'uU/L' | 'uU/mL' | 'uV' | 'V' | 'W' | 'Wb' | 'wk' | undefined;
    /**
     * A narrative description of the time period the study covers.
     */
    studyEffectiveDescription?: string | undefined;
    /**
     * Extended properties for primitive element: ResearchElementDefinition.characteristic.studyEffectiveDescription
     */
    _studyEffectiveDescription?: fhir.FhirElement;
    /**
     * Indicates what effective period the study covers.
     */
    studyEffectiveDateTime?: string | undefined;
    /**
     * Extended properties for primitive element: ResearchElementDefinition.characteristic.studyEffective[x]
     */
    _studyEffectiveDateTime?: fhir.FhirElement;
    /**
     * Indicates what effective period the study covers.
     */
    studyEffectivePeriod?: fhir.Period | undefined;
    /**
     * Indicates what effective period the study covers.
     */
    studyEffectiveDuration?: fhir.Duration | undefined;
    /**
     * Indicates what effective period the study covers.
     */
    studyEffectiveTiming?: fhir.Timing | undefined;
    /**
     * Indicates duration from the study initiation.
     */
    studyEffectiveTimeFromStart?: fhir.Duration | undefined;
    /**
     * Indicates how elements are aggregated within the study effective period.
     */
    studyEffectiveGroupMeasure?: 'mean' | 'mean-of-mean' | 'mean-of-median' | 'median' | 'median-of-mean' | 'median-of-median' | undefined;
    /**
     * Extended properties for primitive element: ResearchElementDefinition.characteristic.studyEffectiveGroupMeasure
     */
    _studyEffectiveGroupMeasure?: fhir.FhirElement;
    /**
     * A narrative description of the time period the study covers.
     */
    participantEffectiveDescription?: string | undefined;
    /**
     * Extended properties for primitive element: ResearchElementDefinition.characteristic.participantEffectiveDescription
     */
    _participantEffectiveDescription?: fhir.FhirElement;
    /**
     * Indicates what effective period the study covers.
     */
    participantEffectiveDateTime?: string | undefined;
    /**
     * Extended properties for primitive element: ResearchElementDefinition.characteristic.participantEffective[x]
     */
    _participantEffectiveDateTime?: fhir.FhirElement;
    /**
     * Indicates what effective period the study covers.
     */
    participantEffectivePeriod?: fhir.Period | undefined;
    /**
     * Indicates what effective period the study covers.
     */
    participantEffectiveDuration?: fhir.Duration | undefined;
    /**
     * Indicates what effective period the study covers.
     */
    participantEffectiveTiming?: fhir.Timing | undefined;
    /**
     * Indicates duration from the participant's study entry.
     */
    participantEffectiveTimeFromStart?: fhir.Duration | undefined;
    /**
     * Indicates how elements are aggregated within the study effective period.
     */
    participantEffectiveGroupMeasure?: 'mean' | 'mean-of-mean' | 'mean-of-median' | 'median' | 'median-of-mean' | 'median-of-median' | undefined;
    /**
     * Extended properties for primitive element: ResearchElementDefinition.characteristic.participantEffectiveGroupMeasure
     */
    _participantEffectiveGroupMeasure?: fhir.FhirElement;
}
/**
 * The ResearchElementDefinition resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about.
 */
export interface ResearchElementDefinition extends fhir.DomainResource {
    /**
     * Resource Type Name
     */
    resourceType: "ResearchElementDefinition" | null;
    /**
     * Can be a urn:uuid: or a urn:oid: but real http: addresses are preferred.  Multiple instances may share the same URL if they have a distinct version.
     * The determination of when to create a new version of a resource (same url, new version) vs. defining a new artifact is up to the author.  Considerations for making this decision are found in [Technical and Business Versions](resource.html#versions).
     * In some cases, the resource can no longer be found at the stated url, but the url itself cannot change. Implementations can use the [meta.source](resource.html#meta) element to indicate where the current master source of the resource can be found.
     */
    url?: string | undefined;
    /**
     * Extended properties for primitive element: ResearchElementDefinition.url
     */
    _url?: fhir.FhirElement;
    /**
     * Typically, this is used for identifiers that can go in an HL7 V3 II (instance identifier) data type, and can then identify this research element definition outside of FHIR, where it is not possible to use the logical URI.
     */
    identifier?: (fhir.Identifier | null)[] | undefined;
    /**
     * There may be different research element definition instances that have the same identifier but different versions.  The version can be appended to the url in a reference to allow a reference to a particular business version of the research element definition with the format [url]|[version].
     */
    version?: string | undefined;
    /**
     * Extended properties for primitive element: ResearchElementDefinition.version
     */
    _version?: fhir.FhirElement;
    /**
     * The name is not expected to be globally unique. The name should be a simple alphanumeric type name to ensure that it is machine-processing friendly.
     */
    name?: string | undefined;
    /**
     * Extended properties for primitive element: ResearchElementDefinition.name
     */
    _name?: fhir.FhirElement;
    /**
     * This name does not need to be machine-processing friendly and may contain punctuation, white-space, etc.
     */
    title?: string | undefined;
    /**
     * Extended properties for primitive element: ResearchElementDefinition.title
     */
    _title?: fhir.FhirElement;
    /**
     * The short title provides an alternate title for use in informal descriptive contexts where the full, formal title is not necessary.
     */
    shortTitle?: string | undefined;
    /**
     * Extended properties for primitive element: ResearchElementDefinition.shortTitle
     */
    _shortTitle?: fhir.FhirElement;
    /**
     * An explanatory or alternate title for the ResearchElementDefinition giving additional information about its content.
     */
    subtitle?: string | undefined;
    /**
     * Extended properties for primitive element: ResearchElementDefinition.subtitle
     */
    _subtitle?: fhir.FhirElement;
    /**
     * Allows filtering of research element definitions that are appropriate for use versus not.
     */
    status: 'active' | 'draft' | 'retired' | 'unknown' | null;
    /**
     * Extended properties for primitive element: ResearchElementDefinition.status
     */
    _status?: fhir.FhirElement;
    /**
     * Allows filtering of research element definitions that are appropriate for use versus not.
     */
    experimental?: boolean | undefined;
    /**
     * Extended properties for primitive element: ResearchElementDefinition.experimental
     */
    _experimental?: fhir.FhirElement;
    /**
     * The subject of the ResearchElementDefinition is critical in interpreting the criteria definitions, as the logic in the ResearchElementDefinitions is evaluated with respect to a particular subject. This corresponds roughly to the notion of a Compartment in that it limits what content is available based on its relationship to the subject. In CQL, this corresponds to the context declaration.
     */
    subjectCodeableConcept?: fhir.CodeableConcept | undefined;
    /**
     * The subject of the ResearchElementDefinition is critical in interpreting the criteria definitions, as the logic in the ResearchElementDefinitions is evaluated with respect to a particular subject. This corresponds roughly to the notion of a Compartment in that it limits what content is available based on its relationship to the subject. In CQL, this corresponds to the context declaration.
     */
    subjectReference?: fhir.Reference | undefined;
    /**
     * Note that this is not the same as the resource last-modified-date, since the resource may be a secondary representation of the research element definition. Additional specific dates may be added as extensions or be found by consulting Provenances associated with past versions of the resource.
     */
    date?: string | undefined;
    /**
     * Extended properties for primitive element: ResearchElementDefinition.date
     */
    _date?: fhir.FhirElement;
    /**
     * Usually an organization but may be an individual. The publisher (or steward) of the research element definition is the organization or individual primarily responsible for the maintenance and upkeep of the research element definition. This is not necessarily the same individual or organization that developed and initially authored the content. The publisher is the primary point of contact for questions or issues with the research element definition. This item SHOULD be populated unless the information is available from context.
     */
    publisher?: string | undefined;
    /**
     * Extended properties for primitive element: ResearchElementDefinition.publisher
     */
    _publisher?: fhir.FhirElement;
    /**
     * May be a web site, an email address, a telephone number, etc.
     */
    contact?: (fhir.ContactDetail | null)[] | undefined;
    /**
     * This description can be used to capture details such as why the research element definition was built, comments about misuse, instructions for clinical use and interpretation, literature references, examples from the paper world, etc. It is not a rendering of the research element definition as conveyed in the 'text' field of the resource itself. This item SHOULD be populated unless the information is available from context (e.g. the language of the research element definition is presumed to be the predominant language in the place the research element definition was created).
     */
    description?: string | undefined;
    /**
     * Extended properties for primitive element: ResearchElementDefinition.description
     */
    _description?: fhir.FhirElement;
    /**
     * A human-readable string to clarify or explain concepts about the resource.
     */
    comment?: (string | null)[] | undefined;
    /**
     * Extended properties for primitive element: ResearchElementDefinition.comment
     */
    _comment?: (fhir.FhirElement | null)[];
    /**
     * When multiple useContexts are specified, there is no expectation that all or any of the contexts apply.
     */
    useContext?: (fhir.UsageContext | null)[] | undefined;
    /**
     * It may be possible for the research element definition to be used in jurisdictions other than those for which it was originally designed or intended.
     */
    jurisdiction?: (fhir.CodeableConcept | null)[] | undefined;
    /**
     * This element does not describe the usage of the research element definition. Instead, it provides traceability of ''why'' the resource is either needed or ''why'' it is defined as it is.  This may be used to point to source materials or specifications that drove the structure of this research element definition.
     */
    purpose?: string | undefined;
    /**
     * Extended properties for primitive element: ResearchElementDefinition.purpose
     */
    _purpose?: fhir.FhirElement;
    /**
     * A detailed description, from a clinical perspective, of how the ResearchElementDefinition is used.
     */
    usage?: string | undefined;
    /**
     * Extended properties for primitive element: ResearchElementDefinition.usage
     */
    _usage?: fhir.FhirElement;
    /**
     * A copyright statement relating to the research element definition and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the research element definition.
     */
    copyright?: string | undefined;
    /**
     * Extended properties for primitive element: ResearchElementDefinition.copyright
     */
    _copyright?: fhir.FhirElement;
    /**
     * The 'date' element may be more recent than the approval date because of minor changes or editorial corrections.
     */
    approvalDate?: string | undefined;
    /**
     * Extended properties for primitive element: ResearchElementDefinition.approvalDate
     */
    _approvalDate?: fhir.FhirElement;
    /**
     * If specified, this date follows the original approval date.
     */
    lastReviewDate?: string | undefined;
    /**
     * Extended properties for primitive element: ResearchElementDefinition.lastReviewDate
     */
    _lastReviewDate?: fhir.FhirElement;
    /**
     * The effective period for a research element definition  determines when the content is applicable for usage and is independent of publication and review dates. For example, a measure intended to be used for the year 2016 might be published in 2015.
     */
    effectivePeriod?: fhir.Period | undefined;
    /**
     * Descriptive topics related to the content of the ResearchElementDefinition. Topics provide a high-level categorization grouping types of ResearchElementDefinitions that can be useful for filtering and searching.
     */
    topic?: (fhir.CodeableConcept | null)[] | undefined;
    /**
     * An individiual or organization primarily involved in the creation and maintenance of the content.
     */
    author?: (fhir.ContactDetail | null)[] | undefined;
    /**
     * An individual or organization primarily responsible for internal coherence of the content.
     */
    editor?: (fhir.ContactDetail | null)[] | undefined;
    /**
     * An individual or organization primarily responsible for review of some aspect of the content.
     */
    reviewer?: (fhir.ContactDetail | null)[] | undefined;
    /**
     * An individual or organization responsible for officially endorsing the content for use in some setting.
     */
    endorser?: (fhir.ContactDetail | null)[] | undefined;
    /**
     * Each related artifact is either an attachment, or a reference to another resource, but not both.
     */
    relatedArtifact?: (fhir.RelatedArtifact | null)[] | undefined;
    /**
     * A reference to a Library resource containing the formal logic used by the ResearchElementDefinition.
     */
    library?: (string | null)[] | undefined;
    /**
     * Extended properties for primitive element: ResearchElementDefinition.library
     */
    _library?: (fhir.FhirElement | null)[];
    /**
     * The type of research element, a population, an exposure, or an outcome.
     */
    type: 'exposure' | 'outcome' | 'population' | null;
    /**
     * Extended properties for primitive element: ResearchElementDefinition.type
     */
    _type?: fhir.FhirElement;
    /**
     * The type of the outcome (e.g. Dichotomous, Continuous, or Descriptive).
     */
    variableType?: 'continuous' | 'descriptive' | 'dichotomous' | undefined;
    /**
     * Extended properties for primitive element: ResearchElementDefinition.variableType
     */
    _variableType?: fhir.FhirElement;
    /**
     * Characteristics can be defined flexibly to accommodate different use cases for membership criteria, ranging from simple codes, all the way to using an expression language to express the criteria.
     */
    characteristic: (fhir.ResearchElementDefinitionCharacteristic | null)[] | null;
}
//# sourceMappingURL=ResearchElementDefinition.d.ts.map
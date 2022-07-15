import { CodingArgs } from '../fhir/Coding.js';
/**
 * This value set includes Coverage Type codes.
 */
export declare type CoverageTypeCodingType = {
    /**
     * ANNU: Definition: A policy that, after an initial premium or premiums, pays out a sum at pre-determined intervals.
     *
     *                         For example, a policy holder may pay $10,000, and in return receive $150 each month until he dies; or $1,000 for each of 14 years or death benefits if he dies before the full term of the annuity has elapsed.
     */
    AnnuityPolicy: CodingArgs;
    /**
     * AUTOPOL: Insurance policy for injuries sustained in an automobile accident.  Will also typically covered non-named parties to the policy, such as pedestrians 	and passengers.
     */
    Automobile: CodingArgs;
    /**
     * CANPRG: Definition: A program that provides low-income, uninsured, and underserved women access to timely, high-quality screening and diagnostic services, to detect breast and cervical cancer at the earliest stages.
     *
     *
     *                            Example: To improve women's access to screening for breast and cervical cancers, Congress passed the Breast and Cervical Cancer Mortality Prevention Act of 1990, which guided CDC in creating the National Breast and Cervical Cancer Early Detection Program (NBCCEDP), which  provides access to critical breast and cervical cancer screening services for underserved women in the United States.  An estimated 7 to 10% of U.S. women of screening age are eligible to receive NBCCEDP services. Federal guidelines establish an eligibility baseline to direct services to uninsured and underinsured women at or below 250% of federal poverty level; ages 18 to 64 for cervical screening; ages 40 to 64 for breast screening.
     */
    WomenQuoteSCancerDetectionProgram: CodingArgs;
    /**
     * CHAR: Definition: A program that covers the cost of services provided directly to a beneficiary who typically has no other source of coverage without charge.
     */
    CharityProgram: CodingArgs;
    /**
     * COL: Definition: An automobile insurance policy under which the insurance company will cover the cost of damages to an automobile owned by the named insured that are caused by accident or intentionally by another party.
     */
    CollisionCoveragePolicy: CodingArgs;
    /**
     * CRIME: Definition: A program that covers the cost of services provided to crime victims for injuries or losses related to the occurrence of a crime.
     */
    CrimeVictimProgram: CodingArgs;
    /**
     * DENTAL: Definition: A health insurance policy that that covers benefits for dental services.
     */
    DentalCarePolicy: CodingArgs;
    /**
     * DENTPRG: Definition: A public or government health program that administers and funds coverage for dental care to assist program eligible who meet financial and health status criteria.
     */
    DentalProgram: CodingArgs;
    /**
     * DIS: Definition: An insurance policy that provides a regular payment to compensate for income lost due to the covered party's inability to work because of illness or injury.
     */
    DisabilityInsurancePolicy: CodingArgs;
    /**
     * DISEASE: Definition: A health insurance policy that covers benefits for healthcare services provided for named conditions under the policy, e.g., cancer, diabetes, or HIV-AIDS.
     */
    DiseaseSpecificPolicy: CodingArgs;
    /**
     * DISEASEPRG: Definition: A public or government health program that administers and funds coverage for health and social services to assist program eligible who meet financial and health status criteria related to a particular disease.
     *
     *
     *                            Example: Reproductive health, sexually transmitted disease, and end renal disease programs.
     */
    PublicHealthProgram: CodingArgs;
    /**
     * DRUGPOL: Definition: A health insurance policy that covers benefits for prescription drugs, pharmaceuticals, and supplies.
     */
    DrugPolicy: CodingArgs;
    /**
     * EAP: Definition: An employee assistance program is run by an employer or employee organization for the purpose of providing benefits and covering all or part of the cost for employees to receive counseling, referrals, and advice in dealing with stressful issues in their lives. These may include substance abuse, bereavement, marital problems, weight issues, or general wellness issues.  The services are usually provided by a third-party, rather than the company itself, and the company receives only summary statistical data from the service provider. Employee's names and services received are kept confidential.
     */
    EmployeeAssistanceProgram: CodingArgs;
    /**
     * EHCPOL: Private insurance policy that provides coverage in addition to other policies (e.g. in addition to a Public Healthcare insurance policy).
     */
    ExtendedHealthcare: CodingArgs;
    /**
     * ENDRENAL: Definition: A public or government program that administers publicly funded coverage of kidney dialysis and kidney transplant services.
     *
     *                         Example: In the U.S., the Medicare End-stage Renal Disease program (ESRD), the National Kidney Foundation (NKF) American Kidney Fund (AKF) The Organ Transplant Fund.
     */
    EndRenalProgram: CodingArgs;
    /**
     * EWB: Definition: An insurance policy under a benefit plan run by an employer or employee organization for the purpose of providing benefits other than pension-related to employees and their families. Typically provides health-related benefits, benefits for disability, disease or unemployment, or day care and scholarship benefits, among others.  An employer sponsored health policy includes coverage of health care expenses arising from sickness or accidental injury, coverage for on-site medical clinics or for dental or vision benefits, which are typically provided under a separate policy.  Coverage excludes health care expenses covered by accident or disability, workers' compensation, liability or automobile insurance.
     */
    EmployeeWelfareBenefitPlanPolicy: CodingArgs;
    /**
     * FLEXP: Definition:  An insurance policy that covers qualified benefits under a Flexible Benefit plan such as group medical insurance, long and short term disability income insurance, group term life insurance for employees only up to $50,000 face amount, specified disease coverage such as a cancer policy, dental and/or vision insurance, hospital indemnity insurance, accidental death and dismemberment insurance, a medical expense reimbursement plan and a dependent care reimbursement plan.
     *
     *
     *                             Discussion: See UnderwriterRoleTypeCode flexible benefit plan which is defined as a benefit plan that allows employees to choose from several life, health, disability, dental, and other insurance plans according to their individual needs. Also known as cafeteria plans.  Authorized under Section 125 of the Revenue Act of 1978.
     */
    FlexibleBenefitPlanPolicy: CodingArgs;
    /**
     * GOVEMP: Definition: A set of codes used to indicate a government program that is an organized structure for administering and funding coverage of a benefit package for covered parties meeting eligibility criteria, typically related to employment, health and financial status. Government programs are established or permitted by legislation with provisions for ongoing government oversight.  Regulation mandates the structure of the program, the manner in which it is funded and administered, covered benefits, provider types, eligibility criteria and financial participation. A government agency is charged with implementing the program in accordance to the regulation
     *
     *
     *                            Example: Federal employee health benefit program in the U.S.
     */
    GovernmentEmployeeHealthProgram: CodingArgs;
    /**
     * HIP: Definition: A health insurance policy that covers healthcare benefits by protecting covered parties from medical expenses arising from health conditions, sickness, or accidental injury as well as preventive care. Health insurance policies explicitly exclude coverage for losses insured under a disability policy, workers' compensation program, liability insurance (including automobile insurance); or for medical expenses, coverage for on-site medical clinics or for limited dental or vision benefits when these are provided under a separate policy.
     *
     *
     *                            Discussion: Health insurance policies are offered by health insurance plans that typically reimburse providers for covered services on a fee-for-service basis, that is, a fee that is the allowable amount that a provider may charge.  This is in contrast to managed care plans, which typically prepay providers a per-member/per-month amount or capitation as reimbursement for all covered services rendered.  Health insurance plans include indemnity and healthcare services plans.
     */
    HealthInsurancePlanPolicy: CodingArgs;
    /**
     * HIRISK: Definition: A government program that provides health coverage to individuals who are considered medically uninsurable or high risk, and who have been denied health insurance due to a serious health condition. In certain cases, it also applies to those who have been quoted very high premiums a" again, due to a serious health condition.  The pool charges premiums for coverage.  Because the pool covers high-risk people, it incurs a higher level of claims than premiums can cover. The insurance industry pays into the pool to make up the difference and help it remain viable.
     */
    HighRiskPoolProgram: CodingArgs;
    /**
     * HIVAIDS: Definition: Government administered and funded HIV-AIDS program for beneficiaries meeting financial and health status criteria.  Administration, funding levels, eligibility criteria, covered benefits, provider types, and financial participation are typically set by a regulatory process.  Payer responsibilities for administering the program may be delegated to contractors.
     *
     *
     *                            Example: In the U.S., the Ryan White program, which is administered by the Health Resources and Services Administration.
     */
    HIVAIDSProgram: CodingArgs;
    /**
     * HMO: Definition: A policy for a health plan that provides coverage for health care only through contracted or employed physicians and hospitals located in particular geographic or service areas.  HMOs emphasize prevention and early detection of illness. Eligibility to enroll in an HMO is determined by where a covered party lives or works.
     */
    HealthMaintenanceOrganizationPolicy: CodingArgs;
    /**
     * HSAPOL: Insurance policy that provides for an allotment of funds replenished on a periodic (e.g. annual) basis. The use of the funds under this policy is at the 	discretion of the covered party.
     */
    HealthSpendingAccount: CodingArgs;
    /**
     * IND: Definition: Services provided directly and through contracted and operated indigenous peoples health programs.
     *
     *
     *                            Example: Indian Health Service in the U.S.
     */
    IndigenousPeoplesHealthProgram: CodingArgs;
    /**
     * LIFE: Definition: A policy under which the insurer agrees to pay a sum of money upon the occurrence of the covered partys death. In return, the policyholder agrees to pay a stipulated amount called a premium at regular intervals.  Life insurance indemnifies the beneficiary for the loss of the insurable interest that a beneficiary has in the life of a covered party.  For persons related by blood, a substantial interest established through love and affection, and for all other persons, a lawful and substantial economic interest in having the life of the insured continue. An insurable interest is required when purchasing life insurance on another person. Specific exclusions are often written into the contract to limit the liability of the insurer; for example claims resulting from suicide or relating to war, riot and civil commotion.
     *
     *
     *                            Discussion:A life insurance policy may be used by the covered party as a source of health care coverage in the case of  a viatical settlement, which is the sale of a life insurance policy by the policy owner, before the policy matures. Such a sale, at a price discounted from the face amount of the policy but usually in excess of the premiums paid or current cash surrender value, provides the seller an immediate cash settlement. Generally, viatical settlements involve insured individuals with a life expectancy of less than two years. In countries without state-subsidized healthcare and high healthcare costs (e.g. United States), this is a practical way to pay extremely high health insurance premiums that severely ill people face. Some people are also familiar with life settlements, which are similar transactions but involve insureds with longer life expectancies (two to fifteen years).
     */
    LifeInsurancePolicy: CodingArgs;
    /**
     * LTC: Definition: An insurance policy that covers benefits for long-term care services people need when they no longer can care for themselves. This may be due to an accident, disability, prolonged illness or the simple process of aging. Long-term care services assist with activities of daily living including:
     *
     *
     *
     *                               Help at home with day-to-day activities, such as cooking, cleaning, bathing and dressing
     *
     *
     *
     *                               Care in the community, such as in an adult day care facility
     *
     *
     *
     *                               Supervised care provided in an assisted living facility
     *
     *
     *
     *                               Skilled care provided in a nursing home
     */
    LongTermCarePolicy: CodingArgs;
    /**
     * MANDPOL: mandatory health program
     */
    MandatoryHealthProgram: CodingArgs;
    /**
     * MCPOL: Definition: Government mandated program providing coverage, disability income, and vocational rehabilitation for injuries sustained in the work place or in the course of employment.  Employers may either self-fund the program, purchase commercial coverage, or pay a premium to a government entity that administers the program.  Employees may be required to pay premiums toward the cost of coverage as well.
     *
     *                         Managed care policies specifically exclude coverage for losses insured under a disability policy, workers' compensation program, liability insurance (including automobile insurance); or for medical expenses, coverage for on-site medical clinics or for limited dental or vision benefits when these are provided under a separate policy.
     *
     *
     *                            Discussion: Managed care policies are offered by managed care plans that contract with selected providers or health care organizations to provide comprehensive health care at a discount to covered parties and coordinate the financing and delivery of health care. Managed care uses medical protocols and procedures agreed on by the medical profession to be cost effective, also known as medical practice guidelines. Providers are typically reimbursed for covered services by a capitated amount on a per member per month basis that may reflect difference in the health status and level of services anticipated to be needed by the member.
     */
    ManagedCarePolicy: CodingArgs;
    /**
     * MENTPOL: Definition: A health insurance policy that covers benefits for mental health services and prescriptions.
     */
    MentalHealthPolicy: CodingArgs;
    /**
     * MENTPRG: Definition: Government administered and funded mental health program for beneficiaries meeting financial and mental health status criteria.  Administration, funding levels, eligibility criteria, covered benefits, provider types, and financial participation are typically set by a regulatory process.  Payer responsibilities for administering the program may be delegated to contractors.
     *
     *
     *                            Example: In the U.S., states receive funding for substance use programs from the Substance Abuse Mental Health Administration (SAMHSA).
     */
    MentalHealthProgram: CodingArgs;
    /**
     * MILITARY: Definition: A government program that provides coverage for health services to military personnel, retirees, and dependents.  A covered party who is a subscriber can choose from among Fee-for-Service (FFS) plans, and their Preferred Provider Organizations (PPO), or Plans offering a Point of Service (POS) Product, or Health Maintenance Organizations.
     *
     *
     *                            Example: In the U.S., TRICARE, CHAMPUS.
     */
    MilitaryHealthProgram: CodingArgs;
    /**
     * pay: An individual or oraganization is paying directly for goods and services.
     */
    Pay: CodingArgs;
    /**
     * PNC: Definition: A type of insurance that covers damage to or loss of the policyholderaTMs property by providing payments for damages to property damage or the injury or death of living subjects.  The terms "casualty" and "liability" insurance are often used interchangeably. Both cover the policyholder's legal liability for damages caused to other persons and/or their property.
     */
    PropertyAndCasualtyInsurancePolicy: CodingArgs;
    /**
     * POS: Definition: A policy for a health plan that has features of both an HMO and a FFS plan.  Like an HMO, a POS plan encourages the use its HMO network to maintain discounted fees with participating providers, but recognizes that sometimes covered parties want to choose their own provider.  The POS plan allows a covered party to use providers who are not part of the HMO network (non-participating providers).  However, there is a greater cost associated with choosing these non-network providers. A covered party will usually pay deductibles and coinsurances that are substantially higher than the payments when he or she uses a plan provider. Use of non-participating providers often requires the covered party to pay the provider directly and then to file a claim for reimbursement, like in an FFS plan.
     */
    PointOfServicePolicy: CodingArgs;
    /**
     * PPO: Definition: A network-based, managed care plan that allows a covered party to choose any health care provider. However, if care is received from a "preferred" (participating in-network) provider, there are generally higher benefit coverage and lower deductibles.
     */
    PreferredProviderOrganizationPolicy: CodingArgs;
    /**
     * PUBLICPOL: Insurance policy funded by a public health system such as a provincial or national health plan.  Examples include BC MSP (British Columbia 	Medical Services Plan) OHIP (Ontario Health Insurance Plan), NHS (National Health Service).
     */
    PublicHealthcare: CodingArgs;
    /**
     * REI: Definition: An agreement between two or more insurance companies by which the risk of loss is proportioned. Thus the risk of loss is spread and a disproportionately large loss under a single policy does not fall on one insurance company. Acceptance by an insurer, called a reinsurer, of all or part of the risk of loss of another insurance company.
     *
     *
     *                            Discussion: Reinsurance is a means by which an insurance company can protect itself against the risk of losses with other insurance companies. Individuals and corporations obtain insurance policies to provide protection for various risks (hurricanes, earthquakes, lawsuits, collisions, sickness and death, etc.). Reinsurers, in turn, provide insurance to insurance companies.
     *
     *                         For example, an HMO may purchase a reinsurance policy to protect itself from losing too much money from one insured's particularly expensive health care costs. An insurance company issuing an automobile liability policy, with a limit of $100,000 per accident may reinsure its liability in excess of $10,000. A fire insurance company which issues a large policy generally reinsures a portion of the risk with one or several other companies. Also called risk control insurance or stop-loss insurance.
     */
    ReinsurancePolicy: CodingArgs;
    /**
     * RETIRE: Definition: A government mandated program with specific eligibility requirements based on premium contributions made during employment, length of employment, age, and employment status, e.g., being retired, disabled, or a dependent of a covered party under this program.   Benefits typically include ambulatory, inpatient, and long-term care, such as hospice care, home health care and respite care.
     */
    RetireeHealthProgram: CodingArgs;
    /**
     * SAFNET: Definition: Government administered and funded program to support provision of care to underserved populations through safety net clinics.
     *
     *
     *                            Example: In the U.S., safety net providers such as federally qualified health centers (FQHC) receive funding under PHSA Section 330 grants administered by the Health Resources and Services Administration.
     */
    SafetyNetClinicProgram: CodingArgs;
    /**
     * SOCIAL: Definition: A social service program funded by a public or governmental entity.
     *
     *
     *                            Example: Programs providing habilitation, food, lodging, medicine, transportation, equipment, devices, products, education, training, counseling, alteration of living or work space, and other resources to persons meeting eligibility criteria.
     */
    SocialServiceProgram: CodingArgs;
    /**
     * SUBPOL: Definition: A health insurance policy that covers benefits for substance use services.
     */
    SubstanceUsePolicy: CodingArgs;
    /**
     * SUBPRG: Definition: Government administered and funded substance use program for beneficiaries meeting financial, substance use behavior, and health status criteria.  Beneficiaries may be required to enroll as a result of legal proceedings.  Administration, funding levels, eligibility criteria, covered benefits, provider types, and financial participation are typically set by a regulatory process.  Payer responsibilities for administering the program may be delegated to contractors.
     *
     *
     *                            Example: In the U.S., states receive funding for substance use programs from the Substance Abuse Mental Health Administration (SAMHSA).
     */
    SubstanceUseProgram: CodingArgs;
    /**
     * SUBSIDIZ: Definition: A government health program that provides coverage for health services to persons meeting eligibility criteria such as income, location of residence, access to other coverages, health condition, and age, the cost of which is to some extent subsidized by public funds.
     */
    SubsidizedHealthProgram: CodingArgs;
    /**
     * SUBSIDMC: Definition: A government health program that provides coverage through managed care contracts for health services to persons meeting eligibility criteria such as income, location of residence, access to other coverages, health condition, and age, the cost of which is to some extent subsidized by public funds.
     *
     *
     *                            Discussion: The structure and business processes for underwriting and administering a subsidized managed care program is further specified by the Underwriter and Payer Role.class and Role.code.
     */
    SubsidizedManagedCareProgram: CodingArgs;
    /**
     * SUBSUPP: Definition: A government health program that provides coverage for health services to persons meeting eligibility criteria for a supplemental health policy or program such as income, location of residence, access to other coverages, health condition, and age, the cost of which is to some extent subsidized by public funds.
     *
     *
     *                            Example:  Supplemental health coverage program may cover the cost of a health program or policy financial participations, such as the copays and the premiums, and may provide coverage for services in addition to those covered under the supplemented health program or policy.  In the U.S., Medicaid programs may pay the premium for a covered party who is also covered under the  Medicare program or a private health policy.
     *
     *
     *                            Discussion: The structure and business processes for underwriting and administering a subsidized supplemental retiree health program is further specified by the Underwriter and Payer Role.class and Role.code.
     */
    SubsidizedSupplementalHealthProgram: CodingArgs;
    /**
     * SURPL: Definition:
     *
     *
     *
     *
     *                               A risk or part of a risk for which there is no normal insurance market available.
     *
     *
     *
     *                               Insurance written by unauthorized insurance companies. Surplus lines insurance is insurance placed with unauthorized insurance companies through licensed surplus lines agents or brokers.
     */
    SurplusLineInsurancePolicy: CodingArgs;
    /**
     * TLIFE: Definition: Life insurance under which the benefit is payable only if the insured dies during a specified period. If an insured dies during that period, the beneficiary receives the death payments. If the insured survives, the policy ends and the beneficiary receives nothing.
     */
    TermLifeInsurancePolicy: CodingArgs;
    /**
     * ULIFE: Definition: Life insurance under which the benefit is payable upon the insuredaTMs death or diagnosis of a terminal illness.  If an insured dies during that period, the beneficiary receives the death payments. If the insured survives, the policy ends and the beneficiary receives nothing
     */
    UniversalLifeInsurancePolicy: CodingArgs;
    /**
     * UMBRL: Definition: A form of insurance protection that provides additional liability coverage after the limits of your underlying policy are reached. An umbrella liability policy also protects you (the insured) in many situations not covered by the usual liability policies.
     */
    UmbrellaLiabilityInsurancePolicy: CodingArgs;
    /**
     * UNINSMOT: Definition: An automobile insurance policy under which the insurance company will indemnify a loss for which another motorist is liable if that motorist is unable to pay because he or she is uninsured.  Coverage under the policy applies to bodily injury damages only.  Injuries to the covered party caused by a hit-and-run driver are also covered.
     */
    UninsuredMotoristPolicy: CodingArgs;
    /**
     * VET: Definition: Services provided directly and through contracted and operated veteran health programs.
     */
    VeteranHealthProgram: CodingArgs;
    /**
     * VISPOL: Definition: Set of codes for a policy that provides coverage for health care expenses arising from vision services.
     *
     *                         A health insurance policy that covers benefits for vision care services, prescriptions, and products.
     */
    VisionCarePolicy: CodingArgs;
    /**
     * WCBPOL: Insurance policy for injuries sustained in the work place or in the course of employment.
     */
    WorkerQuoteSCompensation: CodingArgs;
};
/**
 * This value set includes Coverage Type codes.
 */
export declare const CoverageTypeCodings: CoverageTypeCodingType;
//# sourceMappingURL=CoverageTypeCodings.d.ts.map
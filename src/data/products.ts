export interface SafetyInfo {
  contraindications: string[];
  warnings: string[];
  sideEffects: string[];
  drugInteractions: string[];
  disclaimer: string;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  category: string;
  tagline: string;
  description: string;
  mechanism: string;
  benefits: string[];
  administration: string;
  protocol: string;
  whoItsFor: string;
  whoItsNotFor: string;
  price: string; // Placeholder "$—"
  safetyInfo: SafetyInfo;
  relatedKBSlugs: string[];
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  longDescription: string;
  gradientFrom: string;
  gradientTo: string;
  colorName: string;
}

export const CATEGORIES: Category[] = [
  {
    id: "weight-loss",
    name: "Weight & Metabolic",
    slug: "weight-loss",
    description: "GLP-1 therapies and lipotropic compounds for metabolic optimization and healthy weight management.",
    longDescription: "Our metabolic therapies focus on restoring blood sugar sensitivity, optimizing cellular energy expenditure, and supporting sustainable body composition under physician oversight.",
    gradientFrom: "from-[#B89968]",
    gradientTo: "to-[#EFE8DA]",
    colorName: "gold"
  },
  {
    id: "longevity",
    name: "Longevity & Anti-Aging",
    slug: "longevity",
    description: "NAD+ therapies and pineal-gland bioregulators designed to support cellular health and mitochondrial longevity.",
    longDescription: "As we age, cellular signaling and repair mechanisms decline. These therapies are selected to assist biological longevity, cellular resilience, and optimal mitochondrial repair.",
    gradientFrom: "from-[#B89968]",
    gradientTo: "to-[#F8F4EC]",
    colorName: "gold"
  },
  {
    id: "hormonal",
    name: "Growth Hormone & Hormonal",
    slug: "hormonal",
    description: "Growth hormone secretagogues and hypothalamic peptides to support natural endocrine balance.",
    longDescription: "Hormonal peptides stimulate your pituitary gland to release natural growth hormone pulses. Rather than importing foreign hormones, they prompt your endocrine system to produce its own.",
    gradientFrom: "from-[#8E7449]",
    gradientTo: "to-[#EFE8DA]",
    colorName: "deep-gold"
  },
  {
    id: "recovery",
    name: "Recovery & Healing",
    slug: "recovery",
    description: "Tissue protection and repair compounds (BPC-157, TB-500) to support soft-tissue recovery and gut integrity.",
    longDescription: "Targeted cellular repair peptides encourage angiogenesis, collagen synthesis, and cell migration to heal ligaments, joints, muscles, and restore the gastrointestinal barrier.",
    gradientFrom: "from-[#A8B59A]",
    gradientTo: "to-[#F8F4EC]",
    colorName: "sage"
  },
  {
    id: "cognitive",
    name: "Cognitive & Mood",
    slug: "cognitive",
    description: "Nootropic peptides to optimize focus, neuroprotection, sleep architecture, and neurotransmitter balance.",
    longDescription: "Nootropic peptides cross the blood-brain barrier to upregulate brain-derived neurotrophic factor (BDNF), balance neurotransmitters, and assist in cognitive repair and emotional stability.",
    gradientFrom: "from-[#B89968]",
    gradientTo: "to-[#EFE8DA]",
    colorName: "gold"
  },
  {
    id: "sexual-wellness",
    name: "Sexual Wellness",
    slug: "sexual-wellness",
    description: "Melanocortin receptor agonists and gonadotropin-releasing analogues to assist libido and hormonal response.",
    longDescription: "Clinical peptide therapies target the central nervous system and upstream hormone cascades to naturally stimulate libido, blood flow, and reproductive energy.",
    gradientFrom: "from-[#8E7449]",
    gradientTo: "to-[#F8F4EC]",
    colorName: "deep-gold"
  },
  {
    id: "beauty-skin",
    name: "Beauty & Skin",
    slug: "beauty-skin",
    description: "Topical and aesthetic peptide therapies focused on collagen remodeling and micro-muscle relaxation.",
    longDescription: "Aesthetic peptides target fine lines, skin elasticity, and structural repair, mimicking natural cell signals to stimulate dermal collagen and relax expressions.",
    gradientFrom: "from-[#C9A695]",
    gradientTo: "to-[#F8F4EC]",
    colorName: "clay"
  },
  {
    id: "bioregulators",
    name: "Bioregulators (Khavinson)",
    slug: "bioregulators",
    description: "Short chain Khavinson peptides designed for tissue-specific DNA regulation and cellular aging support.",
    longDescription: "Khavinson peptide bioregulators are ultra-short chains (2-4 amino acids) that interact directly with DNA to support tissue-specific gene expression and restore organ systems.",
    gradientFrom: "from-[#A8B59A]",
    gradientTo: "to-[#EFE8DA]",
    colorName: "sage"
  }
];

export const PRODUCTS: Product[] = [
  // ==========================
  // WEIGHT LOSS / METABOLIC
  // ==========================
  {
    id: "semaglutide",
    slug: "semaglutide",
    name: "SEMA-X (GLP-1)",
    category: "weight-loss",
    tagline: "Precision metabolic optimization and appetite control. (Metabolic 03)",
    description: "A once-weekly glucagon-like peptide-1 (GLP-1) receptor agonist that helps regulate insulin secretion, slows gastric emptying, and balances hunger signaling to support body composition goals.",
    mechanism: "Semaglutide acts as a GLP-1 mimetic, binding to receptors in the pancreas and brain. It prompts natural insulin release in response to glucose, reduces glucagon levels, and delays stomach emptying, signaling satiety to the hypothalamus to naturally decrease caloric intake.",
    benefits: [
      "Significant support for body weight reduction",
      "Reduces chronic food cravings and 'food noise'",
      "Improves insulin sensitivity and blood glucose markers",
      "Supports healthy cardiovascular risk profiles",
      "Helps establish sustainable dietary control",
      "Offers clinical-grade metabolic correction"
    ],
    administration: "Subcutaneous Injection",
    protocol: "Once-weekly injection, starting at 0.25mg and titrating up based on tolerance and physician review.",
    whoItsFor: "Individuals seeking clinical support for weight reduction and metabolic correction, particularly those with insulin resistance or chronic cravings.",
    whoItsNotFor: "Active thyroid cancer history, multiple endocrine neoplasia type 2 (MEN 2), history of pancreatitis, pregnant or breastfeeding women.",
    price: "$—", // // TODO: pricing
    safetyInfo: {
      contraindications: [
        "Personal or family history of Medullary Thyroid Carcinoma (MTC)",
        "Multiple Endocrine Neoplasia syndrome type 2 (MEN 2)",
        "Known hypersensitivity to Semaglutide or formulation components",
        "Pregnancy, planned pregnancy, or lactation"
      ],
      warnings: [
        "Risk of thyroid C-cell tumors based on animal models",
        "Acute pancreatitis has occurred in clinical trials; discontinue immediately if severe abdominal pain occurs",
        "Monitor for hypoglycemia if combined with insulin secretagogues",
        "Acute gallbladder disease or kidney impairment risks"
      ],
      sideEffects: [
        "Nausea, vomiting, diarrhea, or constipation",
        "Abdominal discomfort and indigestion",
        "Mild fatigue or headache, particularly during titration",
        "Injection site tenderness"
      ],
      drugInteractions: [
        "May delay absorption of oral medications due to slowed gastric emptying",
        "Enhanced hypoglycemic risk when taken with sulfonylureas or insulin"
      ],
      disclaimer: "Compounded medications are prepared under custom prescriptions and are not FDA-reviewed for safety or effectiveness compared to commercial equivalents."
    },
    relatedKBSlugs: ["glp1s-explained", "peptide-safety-sourcing"]
  },
  {
    id: "tirzepatide",
    slug: "tirzepatide",
    name: "Tirzepatide (GLP-1/GIP)",
    category: "weight-loss",
    tagline: "Dual-action metabolic agonist for optimal weight care.",
    description: "A novel once-weekly dual GIP and GLP-1 receptor agonist that targets two distinct metabolic signaling pathways to regulate appetite and improve metabolic efficiency.",
    mechanism: "Tirzepatide mimics both Glucagon-like Peptide-1 (GLP-1) and Glucose-dependent Insulinotropic Polypeptide (GIP) hormones. This dual action synergizes in the brain and fat tissue, improving insulin sensitivity, metabolic rate, and satiety signaling more effectively than single-receptor agonists.",
    benefits: [
      "Exceptional support for sustainable weight management",
      "Dual GIP/GLP-1 pathway regulation",
      "Reduces sweet cravings and regulates appetite",
      "Improves glycemic control and lipid profiles",
      "Saves lean mass relative to fat loss",
      "Physician-supervised weekly protocol"
    ],
    administration: "Subcutaneous Injection",
    protocol: "Once-weekly injection, starting at 2.5mg and adjusting under physician supervision.",
    whoItsFor: "Clients requiring advanced metabolic support who may benefit from dual hormone receptor activation.",
    whoItsNotFor: "Individuals with MTC or MEN 2 history, pregnancy, history of severe gastrointestinal disease.",
    price: "$—", // // TODO: pricing
    safetyInfo: {
      contraindications: [
        "Personal or family history of Medullary Thyroid Carcinoma (MTC)",
        "Multiple Endocrine Neoplasia syndrome type 2 (MEN 2)",
        "Pregnancy or breastfeeding"
      ],
      warnings: [
        "Black-box warning for thyroid C-cell tumor risk",
        "Risk of pancreatitis and severe gastrointestinal events",
        "Potential for acute kidney injury secondary to dehydration"
      ],
      sideEffects: [
        "Nausea, diarrhea, decreased appetite",
        "Vomiting, constipation, dyspepsia",
        "Abdominal pain, acid reflux"
      ],
      drugInteractions: [
        "Slowed gastric emptying may affect absorption of oral contraceptives; non-oral backup recommended",
        "Increased risk of low blood sugar when used with other insulin secretagogues"
      ],
      disclaimer: "This compounded preparation is not FDA-reviewed. Consult your Valara physician for commercial alternative options."
    },
    relatedKBSlugs: ["glp1s-explained", "peptide-safety-sourcing"]
  },
  {
    id: "aod-9604",
    slug: "aod-9604",
    name: "AOD 9604",
    category: "weight-loss",
    tagline: "Targeted lipolysis support without glycemic side effects.",
    description: "A modified peptide fragment derived from human growth hormone (hGH C-terminal fragment) designed to stimulate fat metabolism without affecting growth or insulin resistance.",
    mechanism: "AOD 9604 stimulates lipolysis (the breakdown of fat) and inhibits lipogenesis (the accumulation of fat) by mimicking hGH's fat-reducing pathway, while specifically omitting the N-terminal sequences that cause insulin resistance and tissue growth.",
    benefits: [
      "Promotes breakdown of stored adipose tissue",
      "Does not increase blood glucose or insulin resistance",
      "Encourages fat burning in high-stubbornness areas",
      "Does not stimulate insulin-like growth factor-1 (IGF-1)",
      "Assists in overall metabolic efficiency"
    ],
    administration: "Subcutaneous Injection",
    protocol: "Daily injection of 250–500mcg taken in a fasted state, typically in the morning.",
    whoItsFor: "Active adults looking to target localized fat deposits and enhance lean body composition without affecting their glycemic profile.",
    whoItsNotFor: "Pregnant or lactating women, individuals under 18.",
    price: "$—", // // TODO: pricing
    safetyInfo: {
      contraindications: ["Pregnancy or breastfeeding", "Hypersensitivity to hGH derivatives"],
      warnings: ["Monitor overall metabolic markers", "Sourced from compliant sterile compounding pharmacies"],
      sideEffects: ["Mild injection site redness", "Headache or minor chest tightness in rare cases", "Nausea or lightheadedness if taken close to food"],
      drugInteractions: ["No major documented interactions, but review with your physician"],
      disclaimer: "Compounded formulation designed for custom clinical support."
    },
    relatedKBSlugs: ["peptide-safety-sourcing", "peptide-stacks"]
  },
  {
    id: "adipotide",
    slug: "adipotide",
    name: "Adipotide (FTPP)",
    category: "weight-loss",
    tagline: "Targeted vasculature signaling for adipose tissue.",
    description: "An experimental peptidomimetic designed to selectively target and disrupt the blood supply of white fat cells, prompting apoptosis and fat volume reduction.",
    mechanism: "Adipotide binds to specific receptors (prohibitin and annexin A5) on the blood vessel walls feeding white adipose tissue. By cutting off blood flow, it induces programmed cell death of fat cells, which are then cleared by the body's lymphatic system.",
    benefits: [
      "Direct targeting of white adipose tissue vasculature",
      "Promotes rapid reduction in fat tissue mass in studies",
      "Supports significant waist circumference changes",
      "Assists cellular clearing of stubborn fat deposits"
    ],
    administration: "Subcutaneous Injection",
    protocol: "Short, highly monitored clinical protocols set individually by your physician.",
    whoItsFor: "Clinically monitored patients under direct medical supervision seeking targeted fat vascular management.",
    whoItsNotFor: "Renal insufficiency, history of kidney stones, active systemic diseases, pregnancy.",
    price: "$—", // // TODO: pricing
    safetyInfo: {
      contraindications: ["Renal failure or severe kidney diseases", "Pregnancy", "Cardiovascular issues"],
      warnings: ["Requires frequent renal function monitoring (BUN and Creatinine)", "High risk of dehydration and electrolyte imbalances"],
      sideEffects: ["Increased urination, dry mouth", "Elevated serum creatinine", "Fatigue, mild kidney discomfort"],
      drugInteractions: ["Nephrotoxic drugs must be avoided"],
      disclaimer: "Highly restricted compounded agent requiring strict medical compliance."
    },
    relatedKBSlugs: ["peptide-safety-sourcing"]
  },
  {
    id: "fragment-176-191",
    slug: "fragment-176-191",
    name: "Fragment 176-191",
    category: "weight-loss",
    tagline: "The fat-burning segment of human growth hormone.",
    description: "A stabilized peptide fragment representing amino acids 176–191 of human growth hormone, optimized for fat loss and lipid metabolism.",
    mechanism: "Similar to hGH, the 176-191 fragment stimulates lipolysis and inhibits lipogenesis. However, it lacks the growth-promoting and insulin-blocking properties of full-length hGH, preventing hyperglycemia.",
    benefits: [
      "Powerful fat-burning stimulation",
      "No impact on insulin levels or blood sugar",
      "Helps release fatty acids from storage cells",
      "Maintains overall muscle definition during deficits"
    ],
    administration: "Subcutaneous Injection",
    protocol: "Daily injection of 250–500mcg, administered on an empty stomach.",
    whoItsFor: "Fitness-oriented individuals wanting to target adipose tissue while preserving lean muscle.",
    whoItsNotFor: "Pregnant women, individuals with severe glucose intolerance.",
    price: "$—", // // TODO: pricing
    safetyInfo: {
      contraindications: ["Pregnancy", "Active cancers"],
      warnings: ["Must be sourced from certified sterile pharmacies to prevent degradation"],
      sideEffects: ["Transient injection site reactions", "Mild lethargy immediately after injection"],
      drugInteractions: ["No major documented interactions"],
      disclaimer: "Compounded medication prescribed under medical supervision."
    },
    relatedKBSlugs: ["peptide-stacks"]
  },
  {
    id: "mic-b12",
    slug: "mic-b12",
    name: "MIC + B12 Lipotropic Injection",
    category: "weight-loss",
    tagline: "Fat-metabolism support and cellular energy.",
    description: "A combination of fat-metabolizing lipotropics (Methionine, Inositol, Choline) and Methylcobalamin (B12) designed to support liver function and boost energy.",
    mechanism: "Methionine helps process fats; Inositol aids cell structure and fat transport; Choline supports liver health. Vitamin B12 provides a direct cofactor for red blood cell production and mitochondrial energy synthesis.",
    benefits: [
      "Enhances natural liver detoxification of lipids",
      "Supports cellular fat burning",
      "Promotes sustained physical and mental energy",
      "Assists in clearing brain fog",
      "Complements GLP-1 weight management protocols"
    ],
    administration: "Intramuscular Injection",
    protocol: "Once-weekly intramuscular injection, usually in the deltoid or gluteal muscle.",
    whoItsFor: "Clients looking to overcome weight plateaus, support liver function, and boost metabolic energy.",
    whoItsNotFor: "Sulfa allergies (Methionine contains sulfur), renal failure, cobalt sensitivity.",
    price: "$—", // // TODO: pricing
    safetyInfo: {
      contraindications: ["Sulfa allergies", "Cobalt or Leber's disease sensitivity"],
      warnings: ["Ensure aseptic injection technique", "Report severe muscle cramping"],
      sideEffects: ["Mild muscle soreness at injection site", "Energy rush or mild insomnia if taken late", "Red-colored urine due to B12 clearance (harmless)"],
      drugInteractions: ["Certain medications like metformin can decrease B12 levels"],
      disclaimer: "Compounded wellness injection."
    },
    relatedKBSlugs: ["subcutaneous-vs-intramuscular", "peptide-stacks"]
  },

  // ==========================
  // LONGEVITY / ANTI-AGING
  // ==========================
  {
    id: "nad-plus",
    slug: "nad-plus",
    name: "NAD+ (Longevity 02)",
    category: "longevity",
    tagline: "Coenzyme cellular restoration and mitochondrial power.",
    description: "Nicotinamide Adenine Dinucleotide (NAD+) is an essential coenzyme found in all living cells, supporting ATP production, DNA repair, and sirtuin activation.",
    mechanism: "NAD+ acts as a critical electron carrier in the mitochondrial respiratory chain, generating ATP. It also serves as a substrate for DNA repair enzymes (PARPs) and sirtuins, which regulate gene expression, cellular aging, and inflammatory pathways.",
    benefits: [
      "Supports cellular repair and DNA integrity",
      "Enhances mitochondrial output and mental energy",
      "Promotes mental clarity, focus, and neuro-resilience",
      "Aids in metabolic function and fat oxidation",
      "Assists sirtuin activation for cellular defense"
    ],
    administration: "Subcutaneous Injection / Nasal Spray",
    protocol: "Dosage ranges from 50mg to 250mg 2-3 times per week based on doctor protocol. 750mg options for deep restoration schedules.",
    whoItsFor: "Individuals experiencing age-related fatigue, cognitive slowdown, or those seeking systematic cellular rejuvenation.",
    whoItsNotFor: "Active cancer, severe acute infections, pregnant women.",
    price: "$—", // // TODO: pricing
    safetyInfo: {
      contraindications: ["Active oncological conditions", "Hypersensitivity to NAD+"],
      warnings: ["Rapid administration or high dose can cause chest pressure, flush, or nausea", "Start with lower dosages to test individual tolerance"],
      sideEffects: ["Transient chest tightness, shortness of breath or flush during injection", "Abdominal cramping", "Mild injection site bruising"],
      drugInteractions: ["No major interactions, but review general supplements"],
      disclaimer: "Compounded NAD+ coenzyme injection."
    },
    relatedKBSlugs: ["science-nad-cellular-aging", "peptide-safety-sourcing"]
  },
  {
    id: "epithalon",
    slug: "epithalon",
    name: "Epithalon",
    category: "longevity",
    tagline: "Telomerase activation and pineal gland support.",
    description: "A synthetic tetrapeptide that stimulates natural telomerase activity, supporting telomere length and circadian rhythm regulation.",
    mechanism: "Epithalon acts on the pineal gland, enhancing melatonin synthesis and restoring sensitivity to hypothalamic signaling. It also upregulates telomerase, an enzyme that elongates telomeric repeat sequences at chromosome ends, extending cellular life spans.",
    benefits: [
      "Promotes telomerase activity to support cellular lifespan",
      "Helps restore normal sleep-wake cycles (circadian rhythms)",
      "Supports endocrine and melatonin regulation",
      "Enhances antioxidant enzyme capacity (SOD, catalase)",
      "Assists cellular immunity"
    ],
    administration: "Subcutaneous Injection",
    protocol: "10-day cycles of 5–10mg daily, repeated once or twice a year under physician guidance.",
    whoItsFor: "Longevity-focused individuals looking for systematic aging care and circadian restoration.",
    whoItsNotFor: "Pregnant women, children, active cancer patients.",
    price: "$—", // // TODO: pricing
    safetyInfo: {
      contraindications: ["Pregnancy", "History of hormone-sensitive cancers"],
      warnings: ["Do not exceed recommended annual cycles", "Quality control is vital for sterile pineal peptides"],
      sideEffects: ["Occasional mild headache", "Drowsiness (if taken during daytime)"],
      drugInteractions: ["May interact with sedatives or exogenous melatonin"],
      disclaimer: "Compounded bio-regulatory peptide."
    },
    relatedKBSlugs: ["bioregulators-khavinson-protocol", "science-nad-cellular-aging"]
  },
  {
    id: "humanin",
    slug: "humanin",
    name: "Humanin",
    category: "longevity",
    tagline: "Mitochondrial-derived peptide for neuroprotection.",
    description: "An micro-peptide encoded in the mitochondrial genome that acts as a cytoprotective agent, shielding brain, vascular, and cardiac tissue from stress.",
    mechanism: "Humanin binds to cell-surface receptors and inhibits apoptosis by blocking Bax activation, preventing cell death under oxidative stress. It also preserves mitochondrial membrane potential and reduces inflammatory cytokines in vascular cells.",
    benefits: [
      "Protects neuronal cells from beta-amyloid toxicity",
      "Supports cardiovascular and endothelial tissue health",
      "Improves mitochondrial survival under oxidative stress",
      "Enhances insulin sensitivity in metabolic tissues",
      "Reduces cell apoptosis in systemic tissues"
    ],
    administration: "Subcutaneous Injection",
    protocol: "Daily or alternate-day injections of 1–3mg on a periodic cycle.",
    whoItsFor: "Individuals interested in neurological longevity, brain health, and metabolic defense.",
    whoItsNotFor: "Pregnancy, active neoplasms, acute inflammatory conditions.",
    price: "$—", // // TODO: pricing
    safetyInfo: {
      contraindications: ["Pregnancy", "Hypersensitivity to mitochondrial peptides"],
      warnings: ["Requires careful baseline medical review", "Not evaluated for acute traumatic brain injury"],
      sideEffects: ["Mild local swelling", "Rare transient fatigue"],
      drugInteractions: ["No known major interactions"],
      disclaimer: "Compounded peptide for mitochondrial health."
    },
    relatedKBSlugs: ["science-nad-cellular-aging"]
  },
  {
    id: "foxo4-dri",
    slug: "foxo4-dri",
    name: "FOXO4-DRI",
    category: "longevity",
    tagline: "Selective senolytic clearance of aging cells.",
    description: "A designer peptide designed to selectively target and clear senescent cells, promoting tissue regeneration and systemic aging markers improvement.",
    mechanism: "FOXO4-DRI disrupts the interaction between the FOXO4 transcription factor and p53. By freeing p53 from this complex, it allows p53 to migrate to the mitochondria and trigger apoptosis specifically in senescent ('zombie') cells while leaving healthy cells unharmed.",
    benefits: [
      "Clears accumulated, non-functioning senescent cells",
      "Supports muscle strength and tissue density recovery",
      "Reduces systemic inflammatory secretions (SASP)",
      "Encourages stem cell-mediated tissue renewal",
      "Assists in systemic biological age optimization"
    ],
    administration: "Subcutaneous Injection",
    protocol: "Periodic brief cycles (e.g., 3 doses over 5 days) under strict physician supervision.",
    whoItsFor: "Longevity optimization clients with high baseline markers of cellular senescence and biological aging.",
    whoItsNotFor: "Severe kidney disease, active pregnancy, children.",
    price: "$—", // // TODO: pricing
    safetyInfo: {
      contraindications: ["Pregnancy", "Severe hepatic or renal dysfunction"],
      warnings: ["Senolytic clearance can be inflammatory; stay hydrated", "Strict protocol adherence is mandatory"],
      sideEffects: ["Temporary muscle aches", "Mild joint stiffness", "Low-grade fatigue during active clearance"],
      drugInteractions: ["Do not stack with other experimental senolytic drugs unless authorized"],
      disclaimer: "Advanced compounded senolytic peptide."
    },
    relatedKBSlugs: ["science-nad-cellular-aging", "peptide-stacks"]
  },
  {
    id: "mots-c",
    slug: "mots-c",
    name: "MOTS-C",
    category: "longevity",
    tagline: "Mitochondrial metabolic coordinator and exercise mimetic.",
    description: "A mitochondrial-derived peptide that regulates metabolic homeostasis, physical performance, insulin sensitivity, and cell viability.",
    mechanism: "MOTS-c translocates to the nucleus during metabolic stress and regulates nuclear gene expression. It activates AMPK (AMP-activated protein kinase), increases GLUT4 expression, and enhances glucose uptake in skeletal muscle, mimicking many benefits of exercise.",
    benefits: [
      "Upregulates glucose uptake and fatty acid oxidation",
      "Improves insulin sensitivity and metabolic adaptability",
      "Enhances physical endurance, energy, and muscle strength",
      "Supports mitochondrial health and respiration",
      "Aids in prevention of metabolic bone density loss"
    ],
    administration: "Subcutaneous Injection",
    protocol: "5-10mg injected twice weekly for a 4–6 week cycle.",
    whoItsFor: "Aged or metabolic-challenged adults seeking metabolic resilience, energy boost, and exercise optimization.",
    whoItsNotFor: "Pregnancy, active severe metabolic crisis, advanced kidney disease.",
    price: "$—", // // TODO: pricing
    safetyInfo: {
      contraindications: ["Pregnancy or lactation", "Uncontrolled severe hyperglycemia"],
      warnings: ["May affect glucose monitoring; monitor blood sugar levels closely if diabetic"],
      sideEffects: ["Mild flush", "Local injection pain", "Increased heart rate during active phase (transient)"],
      drugInteractions: ["Hypoglycemic agents may require dose adjustment"],
      disclaimer: "Compounded mitochondrial peptide."
    },
    relatedKBSlugs: ["science-nad-cellular-aging", "peptide-stacks"]
  },
  {
    id: "thymalin",
    slug: "thymalin",
    name: "Thymalin",
    category: "longevity",
    tagline: "Thymus bioregulation and immune restoration.",
    description: "A pineal-thymus regulatory peptide chain that helps restore T-cell function and balances the immune response.",
    mechanism: "Thymalin stimulates the differentiation and proliferation of T-lymphocytes, modulates cellular immune responses, and supports pineal endocrine function, helping reverse age-related thymus involution.",
    benefits: [
      "Restores cellular immune system markers",
      "Enhances cellular resilience against pathogens",
      "Aids in systemic cardiovascular regulation",
      "Regulates neuroendocrine system interaction",
      "Supports overall immune senescence mitigation"
    ],
    administration: "Subcutaneous Injection",
    protocol: "10mg daily for 10 days, repeated 1-2 times per year.",
    whoItsFor: "Clients wanting to maintain strong cellular immunity and address age-related decline in immune function.",
    whoItsNotFor: "Autoimmune conditions (requires careful physician triage), pregnancy, organ transplant recipients.",
    price: "$—", // // TODO: pricing
    safetyInfo: {
      contraindications: ["Organ transplant history", "Pregnancy", "Severe active autoimmune flare"],
      warnings: ["Monitor white blood cell counts if on immunomodulators"],
      sideEffects: ["Mild local reaction", "Temporary low-grade fever (immune activation)"],
      drugInteractions: ["Immunosuppressive drugs"],
      disclaimer: "Compounded immunomodulatory peptide."
    },
    relatedKBSlugs: ["bioregulators-khavinson-protocol", "peptide-safety-sourcing"]
  },
  {
    id: "thymosin-alpha-1",
    slug: "thymosin-alpha-1",
    name: "Thymosin Alpha-1",
    category: "longevity",
    tagline: "Advanced immune defense and cytokine balance.",
    description: "A peptide naturally occurring in the thymus gland that plays a vital role in modulating the immune response, fighting infections, and controlling inflammation.",
    mechanism: "Thymosin Alpha-1 stimulates lymphoid stem cells to mature into T-cells, enhances antibody production, and modulates cytokine secretion (increasing IFN-gamma and IL-2) to optimize pathogen clearance without overactivating the inflammatory cascade.",
    benefits: [
      "Broad-spectrum support for T-cell production",
      "Assists cellular defense against chronic viral pathogens",
      "Helps balance inflammatory cytokine markers",
      "Supports tissue recovery after immune strain",
      "Promotes general immune system resilience"
    ],
    administration: "Subcutaneous Injection",
    protocol: "1.5mg injected twice weekly, typically in a 4–12 week cycle.",
    whoItsFor: "Individuals with compromised immune responses, chronic stress, or those seeking robust seasonal defense.",
    whoItsNotFor: "Immunosuppressed transplant patients, pregnancy.",
    price: "$—", // // TODO: pricing
    safetyInfo: {
      contraindications: ["Organ transplantation", "Hypersensitivity to thymic peptides", "Pregnancy"],
      warnings: ["Evaluate baseline immune status before starting"],
      sideEffects: ["Mild injection-site erythema", "Transient joint discomfort", "Mild fatigue"],
      drugInteractions: ["May reduce the efficacy of immunosuppressive drugs"],
      disclaimer: "Compounded sterile thymic peptide."
    },
    relatedKBSlugs: ["peptide-safety-sourcing"]
  },

  // ==========================
  // GROWTH HORMONE / HORMONAL
  // ==========================
  {
    id: "sermorelin",
    slug: "sermorelin",
    name: "Sermorelin",
    category: "hormonal",
    tagline: "Natural growth hormone secretagogue for youth repair.",
    description: "A growth hormone-releasing hormone (GHRH) analogue that stimulates the pituitary gland to produce and secrete growth hormone naturally, improving body composition and sleep.",
    mechanism: "Sermorelin binds to GHRH receptors on pituitary somatotropes, triggering the production and pulsatile release of endogenous growth hormone. This maintains the body's natural negative-feedback loop, avoiding pituitary burnout or IGF-1 spikes.",
    benefits: [
      "Promotes deep, restorative slow-wave sleep",
      "Supports muscle definition and lean tissue preservation",
      "Aids in metabolic speed and fat mass reduction",
      "Improves skin thickness, elasticity, and collagen",
      "Accelerates recovery from physical exertion",
      "Supports cognitive focus and vitality"
    ],
    administration: "Subcutaneous Injection",
    protocol: "Daily injection of 300–500mcg before bedtime to sync with natural nocturnal pulses.",
    whoItsFor: "Adults seeking systemic rejuvenation, better sleep, recovery support, and general body composition assistance.",
    whoItsNotFor: "Active malignancy, history of intracranial tumors, pregnant women.",
    price: "$—", // // TODO: pricing
    safetyInfo: {
      contraindications: ["Active neoplastic diseases", "Hypersensitivity to sermorelin", "Pregnancy"],
      warnings: ["Monitor thyroid function (can suppress thyroid hormone synthesis in rare cases)", "Avoid high sugar intake near administration as it blunts hGH response"],
      sideEffects: ["Mild flushing", "Headache or dizziness immediately after", "Local injection pain", "Increased hunger"],
      drugInteractions: ["Corticosteroids can inhibit hGH stimulation"],
      disclaimer: "Compounded growth hormone secretagogue."
    },
    relatedKBSlugs: ["growth-hormone-peptides", "storage-reconstitution-handling"]
  },
  {
    id: "ipamorelin",
    slug: "ipamorelin",
    name: "Ipamorelin",
    category: "hormonal",
    tagline: "Highly selective growth hormone secretagogue.",
    description: "A pentapeptide ghrelin receptor agonist that stimulates growth hormone release without increasing appetite, cortisol, or prolactin.",
    mechanism: "Ipamorelin mimics ghrelin to activate the growth hormone secretagogue receptor (GHSR) on somatotropes. It is highly selective, meaning it avoids stimulating adrenal cortisol release or pituitary prolactin, providing a clean growth hormone pulse.",
    benefits: [
      "Stimulates clean, pulsatile growth hormone release",
      "No increase in cortisol, ACTH, or prolactin levels",
      "Does not stimulate excessive appetite or hunger",
      "Supports physical recovery and joint healing",
      "Aids in muscle preservation and fat metabolism"
    ],
    administration: "Subcutaneous Injection",
    protocol: "200–300mcg daily at night or twice daily, taken on an empty stomach.",
    whoItsFor: "Individuals wanting growth hormone benefits without appetite stimulation or stress hormone elevation.",
    whoItsNotFor: "Pregnancy, active oncological conditions.",
    price: "$—", // // TODO: pricing
    safetyInfo: {
      contraindications: ["Pregnancy", "Active neoplasm"],
      warnings: ["Ensure fasted state (2 hours post-meal) for optimal hormone response"],
      sideEffects: ["Mild headache", "Water retention (transient)", "Mild lethargy"],
      drugInteractions: ["None major, avoid stacking with steroids without supervision"],
      disclaimer: "Compounded peptide for endocrine support."
    },
    relatedKBSlugs: ["growth-hormone-peptides"]
  },
  {
    id: "cjc-1295-with-dac",
    slug: "cjc-1295-with-dac",
    name: "CJC-1295 (with DAC)",
    category: "hormonal",
    tagline: "Extended half-life growth hormone stimulation.",
    description: "A modified GHRH analogue with Drug Affinity Complex (DAC) that extends the peptide's active lifespan, providing continuous growth hormone stimulation.",
    mechanism: "CJC-1295 with DAC binds to blood albumin, preventing rapid enzymatic degradation. This extends the half-life from minutes to up to 8 days, leading to a steady, elevated baseline of growth hormone and IGF-1.",
    benefits: [
      "Continuous support for growth hormone release",
      "Infrequent dosing (once or twice weekly)",
      "Aids in systemic fat loss and muscle building",
      "Supports bone density and joint repair",
      "Improves overall cellular healing capacity"
    ],
    administration: "Subcutaneous Injection",
    protocol: "1–2mg weekly, injected once or split into two doses.",
    whoItsFor: "Clients looking for long-acting growth hormone elevation without the need for daily injections.",
    whoItsNotFor: "Active cancer history, diabetic retinopathy, pregnant or nursing mothers.",
    price: "$—", // // TODO: pricing
    safetyInfo: {
      contraindications: ["Active malignancy", "Severe uncontrolled diabetes", "Pregnancy"],
      warnings: ["Increases baseline IGF-1 levels significantly; requires regular bloodwork check", "Can cause significant water retention"],
      sideEffects: ["Head flush or warmth", "Swelling in hands/feet", "Lethargy", "Aching joints"],
      drugInteractions: ["Insulin adjustments may be needed due to glycemic changes"],
      disclaimer: "Compounded extended hGH secretagogue."
    },
    relatedKBSlugs: ["growth-hormone-peptides", "peptide-therapy-bloodwork"]
  },
  {
    id: "cjc-1295-no-dac",
    slug: "cjc-1295-no-dac",
    name: "CJC-1295 (no DAC)",
    category: "hormonal",
    tagline: "Pulsatile growth hormone stimulation.",
    description: "A short-acting growth hormone-releasing factor analog (also known as Mod GRF 1-29) designed to stimulate natural, pulsatile growth hormone release.",
    mechanism: "By mimicking endogenous GHRH without long-acting carrier complexes, CJC-1295 no DAC prompts the pituitary gland to release hGH in sharp, physiological pulses, keeping somatotrope receptor sensitivity intact.",
    benefits: [
      "Promotes physiologic, pulsatile hGH release",
      "Short active half-life mimics natural body cycles",
      "Supports fat loss and lean tissue development",
      "Encourages cell repair and deep sleep patterns",
      "Reduces risks of hormone desensitization"
    ],
    administration: "Subcutaneous Injection",
    protocol: "100mcg 1-3 times daily, taken on an empty stomach.",
    whoItsFor: "Athletes and wellness clients seeking controlled, pulsatile hormone secretagogue management.",
    whoItsNotFor: "Pregnancy, active tumor history.",
    price: "$—", // // TODO: pricing
    safetyInfo: {
      contraindications: ["Pregnancy", "Active neoplasm"],
      warnings: ["Administer in a fasted state (30 min pre-meal or 2 hours post-meal)"],
      sideEffects: ["Mild face flush", "Temporary injection site itchiness", "Mild fatigue"],
      drugInteractions: ["No major documented interactions"],
      disclaimer: "Compounded secretagogue."
    },
    relatedKBSlugs: ["growth-hormone-peptides"]
  },
  {
    id: "tesamorelin",
    slug: "tesamorelin",
    name: "Tesamorelin",
    category: "hormonal",
    tagline: "Targeted abdominal fat reduction and GH release.",
    description: "A stabilized GHRH analogue approved in commercial forms to reduce visceral adipose tissue in patients, highly valued for stubborn abdominal fat care.",
    mechanism: "Tesamorelin stimulates pituitary release of growth hormone, which then acts on liver somatotropes to release IGF-1. IGF-1 stimulates fat lipolysis, targeting visceral (deep abdominal) fat cells specifically.",
    benefits: [
      "Upregulates visceral fat breakdown",
      "Supports lean mass preservation",
      "Encourages healthy lipid and cholesterol profiles",
      "Assists in muscle recovery",
      "Improves metabolic syndrome markers"
    ],
    administration: "Subcutaneous Injection",
    protocol: "1–2mg daily, injected in the abdomen, 5 days on, 2 days off.",
    whoItsFor: "Individuals with significant deposits of deep visceral abdominal fat looking to improve body composition.",
    whoItsNotFor: "Active malignancy, pregnant women, pituitary disorders.",
    price: "$—", // // TODO: pricing
    safetyInfo: {
      contraindications: ["Active malignancy", "Pregnancy", "Hypersensitivity to Tesamorelin"],
      warnings: ["May cause glucose intolerance; check HbA1c", "IGF-1 levels must be monitored periodically"],
      sideEffects: ["Joint pain", "Muscle stiffness", "Fluid retention", "Injection site irritation"],
      drugInteractions: ["CYP450 metabolized drugs may require monitoring"],
      disclaimer: "Compounded metabolic peptide."
    },
    relatedKBSlugs: ["growth-hormone-peptides", "peptide-therapy-bloodwork"]
  },
  {
    id: "hexarelin",
    slug: "hexarelin",
    name: "Hexarelin",
    category: "hormonal",
    tagline: "Potent growth hormone release and cardioprotective signaling.",
    description: "A synthetic hexapeptide growth hormone secretagogue (GHS) known for its high potency and research-backed cardiotonic properties.",
    mechanism: "Hexarelin binds to the GHSR (ghrelin receptor) and CD36 receptors on cardiac cells. It triggers a strong growth hormone pulse while protecting heart tissue from ischemic damage and supporting myocardial contraction.",
    benefits: [
      "Very high peak growth hormone release",
      "Supports cardiac cell survival and vascular elasticity",
      "Promotes joint and connective tissue recovery",
      "Aids in skeletal muscle synthesis"
    ],
    administration: "Subcutaneous Injection",
    protocol: "100mcg daily or twice daily on an empty stomach for cycles of 4–6 weeks.",
    whoItsFor: "Advanced clients needing strong tissue recovery and cardiac health support.",
    whoItsNotFor: "Pregnancy, active cancer, individuals prone to anxiety or cortisol spikes.",
    price: "$—", // // TODO: pricing
    safetyInfo: {
      contraindications: ["Pregnancy", "Active neoplasm", "Adrenal disorders"],
      warnings: ["Can raise cortisol and prolactin at high doses", "Limit cycle lengths to avoid receptor desensitization"],
      sideEffects: ["Facial flushing", "Mild lethargy", "Slight increase in blood pressure during active phase"],
      drugInteractions: ["No major interactions documented"],
      disclaimer: "Compounded secretagogue."
    },
    relatedKBSlugs: ["growth-hormone-peptides"]
  },
  {
    id: "ghrp-2",
    slug: "ghrp-2",
    name: "GHRP-2",
    category: "hormonal",
    tagline: "Hormone secretion peptide with moderate appetite support.",
    description: "Growth Hormone Releasing Peptide-2 (GHRP-2) stimulates the pituitary gland to release hGH while moderately encouraging hunger.",
    mechanism: "Acts as a ghrelin agonist to stimulate growth hormone secretagogue receptors, causing a significant pulse of growth hormone and mild activation of appetite pathways in the hypothalamus.",
    benefits: [
      "Stimulates robust growth hormone pulses",
      "Assists in muscle repair and bone density",
      "Moderately supports appetite (helpful for recovering strength)",
      "Improves sleep patterns and energy levels"
    ],
    administration: "Subcutaneous Injection",
    protocol: "100–150mcg 1-3 times daily on an empty stomach.",
    whoItsFor: "Wellness clients wanting recovery, muscle mass support, and a moderate appetite stimulus.",
    whoItsNotFor: "Active cancer, severe diabetes, pregnancy.",
    price: "$—", // // TODO: pricing
    safetyInfo: {
      contraindications: ["Active neoplasms", "Pregnancy"],
      warnings: ["May cause slight elevations in cortisol and prolactin"],
      sideEffects: ["Mild hunger", "Water retention", "Mild face flush"],
      drugInteractions: ["No major documented interactions"],
      disclaimer: "Compounded peptide."
    },
    relatedKBSlugs: ["growth-hormone-peptides"]
  },
  {
    id: "ghrp-6",
    slug: "ghrp-6",
    name: "GHRP-6",
    category: "hormonal",
    tagline: "GH release with strong appetite stimulation.",
    description: "A hexapeptide that stimulates growth hormone release while acting as a strong appetite stimulant, ideal for recovery and mass rebuild.",
    mechanism: "By binding to the ghrelin receptor, GHRP-6 induces a large GH release and a strong gastric motility response, promoting hunger and metabolic uptake.",
    benefits: [
      "Substantial growth hormone pulse release",
      "Strong appetite stimulation",
      "Improves joint lubrication and tissue recovery",
      "Assists in healthy weight and strength gain"
    ],
    administration: "Subcutaneous Injection",
    protocol: "100mcg 2-3 times daily, taken 2 hours after/before eating.",
    whoItsFor: "Clients needing to regain lean weight, recover from injury, or boost metabolic absorption.",
    whoItsNotFor: "Obesity, glucose intolerance, active tumors, pregnancy.",
    price: "$—", // // TODO: pricing
    safetyInfo: {
      contraindications: ["Pregnancy", "Metabolic syndrome / Obesity", "Active tumor"],
      warnings: ["Requires careful glucose monitoring due to high appetite and eating changes"],
      sideEffects: ["Extreme hunger", "Tiredness", "Mild water retention"],
      drugInteractions: ["May affect glucose-lowering drugs"],
      disclaimer: "Compounded secretagogue."
    },
    relatedKBSlugs: ["growth-hormone-peptides"]
  },
  {
    id: "mod-grf-1-29",
    slug: "mod-grf-1-29",
    name: "Mod GRF 1-29",
    category: "hormonal",
    tagline: "Short-acting GHRH analogue for precise cellular repair.",
    description: "A modified 29-amino acid segment of growth hormone-releasing hormone, optimized for metabolic stability and pulsatile GH release.",
    mechanism: "Binds to GHRH receptors in the pituitary gland to stimulate pulsatile GH release, modified to prevent rapid clearance compared to native GRF 1-29.",
    benefits: [
      "Stimulates natural growth hormone secretion",
      "Short, controlled action matches body cycles",
      "Preserves pituitary receptor sensitivity",
      "Aids in tissue healing, skin quality, and sleep"
    ],
    administration: "Subcutaneous Injection",
    protocol: "100mcg injected 1-2 times daily on an empty stomach.",
    whoItsFor: "Wellness clients seeking precise, clinical-grade hormonal signaling optimization.",
    whoItsNotFor: "Pregnancy, active endocrine cancers.",
    price: "$—", // // TODO: pricing
    safetyInfo: {
      contraindications: ["Active neoplastic disease", "Pregnancy"],
      warnings: ["Administer while fasting for maximum hormone pulse efficacy"],
      sideEffects: ["Facial flushing", "Mild dizziness", "Tingling in extremities"],
      drugInteractions: ["No major documented interactions"],
      disclaimer: "Compounded secretagogue peptide."
    },
    relatedKBSlugs: ["growth-hormone-peptides"]
  },
  {
    id: "gonadorelin",
    slug: "gonadorelin",
    name: "Gonadorelin",
    category: "hormonal",
    tagline: "Hypothalamic signaling for testosterone support.",
    description: "A synthetic gonadotropin-releasing hormone (GnRH) peptide that prompts the pituitary gland to release LH and FSH, supporting natural testosterone production.",
    mechanism: "Gonadorelin binds to GnRH receptors in the anterior pituitary, stimulating the pulsatile release of Luteinizing Hormone (LH) and Follicle-Stimulating Hormone (FSH), which in turn tell the testes to produce testosterone and maintain spermatogenesis.",
    benefits: [
      "Stimulates natural LH and FSH secretion",
      "Supports testicular size and function during TRT",
      "Encourages endogenous testosterone production",
      "Maintains fertility pathways under physician care"
    ],
    administration: "Subcutaneous Injection",
    protocol: "100–200mcg injected 2-3 times per week, directed by your physician.",
    whoItsFor: "Men on testosterone replacement therapy (TRT) looking to preserve fertility and testicular volume.",
    whoItsNotFor: "Prostate cancer history, pituitary adenomas, women (unless specific fertility protocols apply).",
    price: "$—", // // TODO: pricing
    safetyInfo: {
      contraindications: ["Prostate cancer or hormone-sensitive tumors", "Pituitary gland tumors"],
      warnings: ["Continuous high-dose administration can suppress gonadal function (downregulation); must be used in low, pulsatile doses"],
      sideEffects: ["Mild headache", "Flushing", "Testicular ache", "Libido fluctuations"],
      drugInteractions: ["Hormone therapies may require titration"],
      disclaimer: "Compounded GnRH analogue."
    },
    relatedKBSlugs: ["peptide-therapy-bloodwork"]
  },
  {
    id: "sermorelin-ipamorelin-blend",
    slug: "sermorelin-ipamorelin-blend",
    name: "Sermorelin + Ipamorelin Blend",
    category: "hormonal",
    tagline: "Synergistic growth hormone releasing secretagogues.",
    description: "A dual-action blend combining Sermorelin and Ipamorelin to leverage two distinct pathways for natural growth hormone release.",
    mechanism: "Sermorelin acts as a GHRH analogue to stimulate somatotropes directly, while Ipamorelin acts as a ghrelin receptor agonist to suppress somatostatin (which blocks GH release). Together, they produce a highly synergistic GH pulse.",
    benefits: [
      "Double pathway stimulation of growth hormone",
      "Deep, restful sleep recovery support",
      "Accelerated muscle recovery and joint comfort",
      "Promotes skin health and cell remodeling",
      "No appetite spikes or stress hormone release"
    ],
    administration: "Subcutaneous Injection",
    protocol: "300mcg total blend injected daily before bed on an empty stomach.",
    whoItsFor: "Wellness clients wanting maximum synergistic recovery, sleep, and anti-aging benefits.",
    whoItsNotFor: "Pregnancy, active neoplasms.",
    price: "$—", // // TODO: pricing
    safetyInfo: {
      contraindications: ["Active cancer", "Pregnancy"],
      warnings: ["Fasting state before injection is required for maximum efficacy"],
      sideEffects: ["Mild facial flushing", "Mild drowsiness", "Temporary local itching"],
      drugInteractions: ["Corticosteroids may blunt response"],
      disclaimer: "Compounded synergistic peptide blend."
    },
    relatedKBSlugs: ["growth-hormone-peptides", "peptide-stacks"]
  },
  {
    id: "cjc-1295-ipamorelin-blend",
    slug: "cjc-1295-ipamorelin-blend",
    name: "CJC-1295 + Ipamorelin Blend",
    category: "hormonal",
    tagline: "Peak anti-aging and tissue repair stack.",
    description: "One of the most popular peptide stacks, combining GHRH (CJC-1295 no DAC) and GHRP (Ipamorelin) for powerful, natural endocrine optimization.",
    mechanism: "CJC-1295 stimulates growth hormone production, and Ipamorelin amplifies the pulse by blocking somatostatin, resulting in a clean, highly effective pulse of growth hormone.",
    benefits: [
      "Powerful synergistic pulse of growth hormone",
      "Aids in body composition optimization",
      "Significantly improves sleep quality and morning energy",
      "Supports connective tissue and skin health",
      "Maintains natural endocrine feedback loops"
    ],
    administration: "Subcutaneous Injection",
    protocol: "200–300mcg total blend injected nightly on an empty stomach.",
    whoItsFor: "Active adults looking to rebuild lean muscle, burn visceral fat, and recover like a younger individual.",
    whoItsNotFor: "Pregnancy, active tumors.",
    price: "$—", // // TODO: pricing
    safetyInfo: {
      contraindications: ["Pregnancy", "Active neoplasm"],
      warnings: ["Must be taken at least 2 hours after eating to prevent glucose interference"],
      sideEffects: ["Head flush immediately after injection", "Temporary finger numbness or water retention", "Mild tiredness"],
      drugInteractions: ["None major, consult with your physician"],
      disclaimer: "Compounded secretagogue blend."
    },
    relatedKBSlugs: ["growth-hormone-peptides", "peptide-stacks"]
  },
  {
    id: "testosterone-cypionate",
    slug: "testosterone-cypionate",
    name: "Testosterone Cypionate",
    category: "hormonal",
    tagline: "Clinical support for testosterone optimization.",
    description: "An esterified form of testosterone designed for intramuscular or subcutaneous administration, providing a sustained release to support healthy male hormone levels.",
    mechanism: "Binds to androgen receptors, promoting protein synthesis, muscle retention, metabolic regulation, and red blood cell production, helping restore normal male endocrine profiles.",
    benefits: [
      "Optimizes serum testosterone levels",
      "Supports muscle mass retention and strength",
      "Enhances metabolic rate and energy levels",
      "Aids in cognitive focus and emotional balance",
      "Improves recovery times and physical stamina"
    ],
    administration: "Subcutaneous / Intramuscular Injection",
    protocol: "Typically administered once or twice weekly, with dosing customized under physician supervision based on serum lab markers.",
    whoItsFor: "Men diagnosed with clinical hypogonadism or certified testosterone deficiency seeking physiological restoration.",
    whoItsNotFor: "Active prostate or breast cancer, elevated hematocrit, uncontrolled congestive heart failure, or those planning fertility in the near term.",
    price: "$—",
    safetyInfo: {
      contraindications: ["Prostate cancer or male breast cancer", "Pregnancy or breastfeeding", "Severe hepatic, renal, or cardiac disease"],
      warnings: ["Monitor hematocrit, PSA, and serum lipid levels regularly", "May suppress endogenous spermatogenesis"],
      sideEffects: ["Mild acne", "Water retention", "Localized site discomfort", "Increased red blood cell count"],
      drugInteractions: ["May increase sensitivity to oral anticoagulants", "May affect insulin requirements in diabetic patients"],
      disclaimer: "Compounded androgen preparation."
    },
    relatedKBSlugs: ["peptide-safety-sourcing", "peptide-stacks"]
  },

  // ==========================
  // RECOVERY / HEALING
  // ==========================
  {
    id: "bpc-157",
    slug: "bpc-157",
    name: "BPC-157 (Recovery 01)",
    category: "recovery",
    tagline: "The healing peptide for tissue and gut repair.",
    description: "A sequence of 15 amino acids derived from human gastric juice, widely utilized to accelerate the healing of tendons, ligaments, muscles, and the digestive tract.",
    mechanism: "BPC-157 upregulates growth factors involved in angiogenesis (the formation of new blood vessels), speeding up cell delivery to injury sites. It also modulates nitric oxide pathways, protects endothelial tissue, and promotes extracellular matrix collagen organization.",
    benefits: [
      "Accelerates repair of tendons, ligaments, and skeletal muscle",
      "Reduces chronic localized tissue inflammation",
      "Supports gut lining integrity (addresses leaky gut, ulcers, IBS)",
      "Promotes joint comfort and range of motion",
      "Encourages vascular angiogenesis in damaged tissue",
      "Supports neural tissue repair and comfort"
    ],
    administration: "Subcutaneous Injection / Oral Capsule",
    protocol: "250–500mcg injected daily or taken orally, typically for a 4–8 week cycle.",
    whoItsFor: "Athletes recovering from sprains/strains, individuals with chronic joint wear, post-surgical patients, or those with inflammatory bowel complaints.",
    whoItsNotFor: "Active cancer history (without clear oncologist approval), pregnancy, breastfeeding.",
    price: "$—", // // TODO: pricing
    safetyInfo: {
      contraindications: ["Active neoplastic diseases", "Pregnancy", "Hypersensitivity to BPC-157"],
      warnings: ["Angiogenic promotion must be avoided in patients with vascular cancers", "Ensure sterility of compounding pharmacy"],
      sideEffects: ["Mild nausea if taken without food", "Local injection site tenderness", "Occasional mild headache"],
      drugInteractions: ["No major documented interactions; use caution with anticoagulants"],
      disclaimer: "Compounded tissue-repair peptide."
    },
    relatedKBSlugs: ["bpc157-healing-peptide", "tb500-vs-bpc157", "peptide-stacks"]
  },
  {
    id: "tb-500",
    slug: "tb-500",
    name: "TB-500 (Thymosin Beta-4)",
    category: "recovery",
    tagline: "Systemic recovery and muscle tissue remodeling.",
    description: "A synthetic version of Thymosin Beta-4, a naturally occurring peptide that promotes cell migration, muscle recovery, and wound healing throughout the body.",
    mechanism: "TB-500 binds to actin, the cell's structural protein, promoting cell migration, tissue remodeling, and new blood vessel formation. Because of its low molecular weight, it diffuses easily through tissues, allowing systemic healing of hard-to-reach areas like ligaments and cartilage.",
    benefits: [
      "Promotes systemic healing of soft tissues and skin",
      "Accelerates muscle repair and tissue rebuilding",
      "Reduces inflammation in joints and connective tissue",
      "Encourages collagen deposition and tissue elasticity",
      "Supports recovery from chronic tendonitis and joint wear"
    ],
    administration: "Subcutaneous Injection",
    protocol: "2.5–5mg injected twice weekly for 4–6 weeks, followed by a lower maintenance dose.",
    whoItsFor: "Individuals with systemic injuries, joint wear, or tissue damage requiring deep, structural repair.",
    whoItsNotFor: "Pregnancy, active malignancy, history of blood clots.",
    price: "$—", // // TODO: pricing
    safetyInfo: {
      contraindications: ["Active cancer", "Pregnancy", "Severe hematological issues"],
      warnings: ["Monitor systemic inflammation markers if on extended cycles"],
      sideEffects: ["Mild lethargy after injection", "Temporary lightheadedness", "Mild injection irritation"],
      drugInteractions: ["No major interactions documented"],
      disclaimer: "Compounded regenerative peptide."
    },
    relatedKBSlugs: ["tb500-vs-bpc157", "bpc157-healing-peptide"]
  },
  {
    id: "bpc-157-tb-500-blend",
    slug: "bpc-157-tb-500-blend",
    name: "BPC-157 + TB-500 Blend",
    category: "recovery",
    tagline: "The gold standard recovery stack.",
    description: "A synergistic blend combining BPC-157 and TB-500 to target both localized tissue repair and systemic healing pathways.",
    mechanism: "BPC-157 provides localized angiogenic and collagen-organizing signals, while TB-500 uses actin-binding properties to promote cell migration and systemic tissue remodeling. Together, they accelerate healing of complex injuries.",
    benefits: [
      "Synergistic healing for tendons, muscles, and ligaments",
      "Simultaneous localized and systemic anti-inflammatory action",
      "Improves range of motion and joint comfort",
      "Supports gut lining and vascular health",
      "Speeds recovery from acute trauma or surgeries"
    ],
    administration: "Subcutaneous Injection",
    protocol: "500mcg BPC-157 + 500mcg TB-500 daily or 3 times weekly, adjusted by your physician.",
    whoItsFor: "Active adults, athletes, and patients needing comprehensive recovery from soft tissue injuries or joint wear.",
    whoItsNotFor: "Active cancer, pregnancy.",
    price: "$—", // // TODO: pricing
    safetyInfo: {
      contraindications: ["Active malignancy", "Pregnancy"],
      warnings: ["Avoid if there is a history of vascular tissue tumors"],
      sideEffects: ["Mild fatigue", "Local redness or mild itching at injection site", "Headache"],
      drugInteractions: ["None major, consult with your physician"],
      disclaimer: "Compounded recovery blend."
    },
    relatedKBSlugs: ["tb500-vs-bpc157", "bpc157-healing-peptide", "peptide-stacks"]
  },
  {
    id: "bpc157-tb500-ghkcu-blend",
    slug: "bpc-157-tb-500-ghk-cu-blend",
    name: "BPC-157 + TB-500 + GHK-Cu Blend",
    category: "recovery",
    tagline: "Ultimate regenerative tissue and collagen stack.",
    description: "An advanced recovery blend combining BPC-157, TB-500, and Copper Peptide (GHK-Cu) to support deep tissue repair and collagen remodeling.",
    mechanism: "This blend combines BPC-157 and TB-500's tissue repair pathways with GHK-Cu's copper-mediated collagen remodeling, helping repair skin, connective tissues, and joints.",
    benefits: [
      "Complete soft tissue and joint matrix support",
      "Upregulates collagen synthesis and fiber cross-linking",
      "Reduces scar tissue formation while improving repair quality",
      "Supports skin rejuvenation and tissue healing",
      "Powerful systemic recovery signaling"
    ],
    administration: "Subcutaneous Injection",
    protocol: "Inject daily for 4–8 weeks under medical guidance.",
    whoItsFor: "Individuals with severe tendon injuries, joint issues, or those seeking advanced tissue healing and collagen support.",
    whoItsNotFor: "Copper metabolism disorders (Wilson's disease), active cancers, pregnancy.",
    price: "$—", // // TODO: pricing
    safetyInfo: {
      contraindications: ["Wilson's disease or copper storage issues", "Active malignancy", "Pregnancy"],
      warnings: ["GHK-Cu can cause a stinging sensation at the injection site; rotate sites regularly", "Ensure regular zinc-copper ratio monitoring if used long-term"],
      sideEffects: ["Injection site stinging and soreness", "Mild fatigue", "Metallic taste in mouth"],
      drugInteractions: ["Zinc supplements (may compete for absorption if taken orally)"],
      disclaimer: "Advanced compounded regenerative blend."
    },
    relatedKBSlugs: ["tb500-vs-bpc157", "ghkcu-copper-peptides", "peptide-stacks"]
  },
  {
    id: "ghk-cu-injectable",
    slug: "ghk-cu-injectable",
    name: "GHK-Cu (Copper Peptide)",
    category: "recovery",
    tagline: "Systemic collagen remodeling and tissue repair.",
    description: "An injectable copper-binding tripeptide that supports collagen synthesis, skin elasticity, hair follicle health, and general wound healing.",
    mechanism: "GHK-Cu regulates copper levels in tissues, stimulating collagen, elastin, and glycosaminoglycan production. It also acts as an anti-inflammatory agent, neutralizes free radicals, and supports healthy stem cell function.",
    benefits: [
      "Stimulates systemic collagen and elastin production",
      "Supports tissue remodeling and reduces scar formation",
      "Promotes vascular health and microcirculation",
      "Aids in hair growth and follicle health",
      "Enhances antioxidant defenses"
    ],
    administration: "Subcutaneous Injection",
    protocol: "2–5mg injected daily or every other day, in cycles of 4–8 weeks.",
    whoItsFor: "Longevity and recovery clients looking to support skin thickness, hair density, and joint integrity.",
    whoItsNotFor: "Wilson's disease, pregnancy, active cancer.",
    price: "$—", // // TODO: pricing
    safetyInfo: {
      contraindications: ["Wilson's disease", "Pregnancy"],
      warnings: ["Can sting significantly upon injection; dilute as directed", "Monitor copper/zinc levels on extended protocols"],
      sideEffects: ["Local stinging or burning", "Injection site redness", "Mild headache"],
      drugInteractions: ["High-dose oral zinc"],
      disclaimer: "Compounded cosmetic and tissue peptide."
    },
    relatedKBSlugs: ["ghkcu-copper-peptides"]
  },
  {
    id: "kpv",
    slug: "kpv",
    name: "KPV",
    category: "recovery",
    tagline: "Potent anti-inflammatory tripeptide.",
    description: "A naturally occurring peptide fragment of alpha-MSH known for its strong anti-inflammatory and antimicrobial properties, particularly in gut health.",
    mechanism: "KPV enters cells to block inflammatory signaling pathways (NF-kappaB). This reduces the production of inflammatory cytokines and supports gut and skin health without suppressing the broader immune system.",
    benefits: [
      "Strong support for gut comfort and lining integrity",
      "Reduces systemic and localized skin inflammation",
      "Helps balance the immune response without suppressing it",
      "Offers mild antimicrobial benefits",
      "Complements protocols for gut health (IBS, colitis)"
    ],
    administration: "Subcutaneous Injection / Oral Capsule",
    protocol: "200–500mcg taken daily, either orally or via injection, based on physician protocol.",
    whoItsFor: "Clients managing chronic inflammatory gut conditions, eczema, or systemic inflammatory responses.",
    whoItsNotFor: "Pregnancy, breastfeeding, hypersensitivity to melanotropic peptides.",
    price: "$—", // // TODO: pricing
    safetyInfo: {
      contraindications: ["Pregnancy", "Lactation"],
      warnings: ["Sourced from certified compounding pharmacies"],
      sideEffects: ["Mild local reaction (if injected)", "Minimal systemic side effects reported"],
      drugInteractions: ["No major documented interactions"],
      disclaimer: "Compounded anti-inflammatory peptide."
    },
    relatedKBSlugs: ["peptide-stacks"]
  },
  {
    id: "ll-37",
    slug: "ll-37",
    name: "LL-37",
    category: "recovery",
    tagline: "Antimicrobial defense and gut barrier support.",
    description: "A host-defense peptide from the cathelicidin family, studied for its antimicrobial, wound healing, and immune-modulating properties.",
    mechanism: "LL-37 disrupts pathogen cell membranes, helping clear bacterial, viral, and fungal threats. It also stimulates angiogenesis and re-epithelialization to support tissue repair, especially in the gut lining.",
    benefits: [
      "Broad-spectrum host-defense support",
      "Helps balance gut microbiota and repair the intestinal barrier",
      "Supports wound healing and tissue recovery",
      "Assists in modulating immune cell activity"
    ],
    administration: "Subcutaneous Injection",
    protocol: "100–250mcg daily for a brief cycle (usually 2–4 weeks) under close physician monitoring.",
    whoItsFor: "Clients seeking support for chronic gut microbial imbalances or tissue healing under medical supervision.",
    whoItsNotFor: "Active autoimmune flares (psoriasis history), systemic lupus, pregnancy.",
    price: "$—", // // TODO: pricing
    safetyInfo: {
      contraindications: ["Psoriasis or active systemic autoimmune disease (can worsen skin plaques)", "Pregnancy"],
      warnings: ["Requires careful medical oversight due to its immune-stimulating properties"],
      sideEffects: ["Mild joint pain", "Local injection site swelling", "Low-grade body aches"],
      drugInteractions: ["Immunosuppressive drugs"],
      disclaimer: "Advanced compounded host-defense peptide."
    },
    relatedKBSlugs: ["peptide-safety-sourcing"]
  },

  // ==========================
  // COGNITIVE / MOOD
  // ==========================
  {
    id: "selank",
    slug: "selank",
    name: "Selank / N-Acetyl Selank",
    category: "cognitive",
    tagline: "Anxiolytic and cognitive regulatory peptide.",
    description: "A synthetic analog of the immunomodulatory peptide tuftsin, designed to reduce anxiety and support cognitive function without causing sedation.",
    mechanism: "Selank modulates the expression of Interleukin-6 (IL-6) and influences monoamine neurotransmitter levels (serotonin, dopamine). It also prevents the breakdown of enkephalins (natural pain relievers) to promote calm and focus.",
    benefits: [
      "Helps reduce anxiety and stress levels",
      "Improves memory, focus, and learning capacity",
      "Does not cause sedation, fatigue, or physical dependence",
      "Supports immune resilience during periods of stress",
      "Upregulates Brain-Derived Neurotrophic Factor (BDNF)"
    ],
    administration: "Nasal Spray / Subcutaneous Injection",
    protocol: "100–300mcg administered daily as a nasal spray, or as a subcutaneous injection.",
    whoItsFor: "Individuals managing stress, anxiety, or cognitive fatigue who want to support focus without sedative side effects.",
    whoItsNotFor: "Pregnancy, breastfeeding, severe psychiatric disorders (without specialist approval).",
    price: "$—", // // TODO: pricing
    safetyInfo: {
      contraindications: ["Pregnancy", "Hypersensitivity to tuftsin analogs"],
      warnings: ["Nasal sprays must be handled cleanly to prevent contamination"],
      sideEffects: ["Mild nasal dryness (if sprayed)", "Occasional mild headache", "Transient taste alteration"],
      drugInteractions: ["May enhance the effects of GABAergic medications (benzodiazepines)"],
      disclaimer: "Compounded neuro-active peptide."
    },
    relatedKBSlugs: ["nootropic-peptides"]
  },
  {
    id: "semax",
    slug: "semax",
    name: "Semax / N-Acetyl Semax",
    category: "cognitive",
    tagline: "Neuroprotective focus and cognitive enhancer.",
    description: "A synthetic peptide derived from adrenocorticotropic hormone (ACTH), used to support focus, memory, and nerve repair.",
    mechanism: "Semax increases levels of BDNF (Brain-Derived Neurotrophic Factor) and NGF (Nerve Growth Factor) in the brain. It also modulates neurotransmitter pathways (dopamine, serotonin) and protects neurons from oxidative stress.",
    benefits: [
      "Supports focus, attention, and mental clarity",
      "Enhances memory consolidation and learning",
      "Aids in neuroprotection and brain recovery",
      "Helps improve mood and emotional resilience",
      "Stimulates microcirculation in brain tissues"
    ],
    administration: "Nasal Spray / Subcutaneous Injection",
    protocol: "100–300mcg daily as a nasal spray, or as directed by your physician.",
    whoItsFor: "Professionals, students, or aging adults looking to optimize focus, memory, and cognitive vitality.",
    whoItsNotFor: "Pregnancy, history of seizures or epilepsy.",
    price: "$—", // // TODO: pricing
    safetyInfo: {
      contraindications: ["Pregnancy", "History of seizures or epilepsy", "Severe acute anxiety"],
      warnings: ["Avoid late-day administration to prevent sleep disruption"],
      sideEffects: ["Mild irritability or overstimulation", "Nasal passage irritation", "Headache"],
      drugInteractions: ["Central nervous system stimulants"],
      disclaimer: "Compounded nootropic peptide."
    },
    relatedKBSlugs: ["nootropic-peptides"]
  },
  {
    id: "dsip",
    slug: "dsip",
    name: "DSIP (Delta Sleep-Inducing Peptide)",
    category: "cognitive",
    tagline: "Deep sleep architecture and stress regulation.",
    description: "A naturally occurring peptide that helps regulate sleep architecture, particularly deep delta-wave sleep, and supports the stress response.",
    mechanism: "DSIP crosses the blood-brain barrier to bind to specific receptors in the hypothalamus, promoting delta-wave sleep patterns, balancing LH and GH secretion, and dampening the HPA axis (stress response).",
    benefits: [
      "Supports deep, restorative delta-wave sleep",
      "Helps regulate and normalize sleep cycles",
      "Reduces cortisol levels and the stress response",
      "Supports morning alertness and energy",
      "Aids in chronic pain management and relaxation"
    ],
    administration: "Subcutaneous Injection",
    protocol: "100–200mcg injected subcutaneously 30–60 minutes before bedtime.",
    whoItsFor: "Clients with chronic sleep disruption, high stress levels, or recovery plateaus.",
    whoItsNotFor: "Pregnancy, daytime shift workers (may cause drowsiness if timing is incorrect).",
    price: "$—", // // TODO: pricing
    safetyInfo: {
      contraindications: ["Pregnancy", "Hypersensitivity to somnotropic peptides"],
      warnings: ["Do not drive or operate machinery after administration", "Do not use during daytime hours"],
      sideEffects: ["Daytime drowsiness if dose is too high", "Mild morning grogginess", "Local injection redness"],
      drugInteractions: ["Sedatives, sleep aids, and alcohol can amplify effects"],
      disclaimer: "Compounded sleep-regulatory peptide."
    },
    relatedKBSlugs: ["nootropic-peptides", "peptide-stacks"]
  },
  {
    id: "cerebrolysin-peptides",
    slug: "cerebrolysin-peptides",
    name: "Cerebrolysin-Style Nootropics",
    category: "cognitive",
    tagline: "Neurotrophic support and cognitive repair.",
    description: "A peptide mixture designed to mimic the neuroprotective and neurotrophic properties of Cerebrolysin, supporting brain repair and memory.",
    mechanism: "This peptide blend mimics natural neurotrophic factors (like CNTF, GDNF, and IGF-1) to support neuronal survival, encourage synaptic growth, and protect brain cells from free radical damage.",
    benefits: [
      "Supports brain repair and synaptic connections",
      "Improves memory retrieval and learning capacity",
      "Helps shield neurons from metabolic stress",
      "Supports cognitive performance in aging adults"
    ],
    administration: "Subcutaneous / Intramuscular Injection",
    protocol: "Administered in specific periodic cycles under close physician guidance.",
    whoItsFor: "Aging adults or individuals seeking advanced cognitive repair and neuroprotection.",
    whoItsNotFor: "Pregnancy, severe renal impairment, history of status epilepticus.",
    price: "$—", // // TODO: pricing
    safetyInfo: {
      contraindications: ["Severe renal failure", "Status epilepticus history", "Pregnancy"],
      warnings: ["Requires comprehensive baseline neurological review by your physician"],
      sideEffects: ["Mild dizziness", "Temporary increase in body temperature", "Headache"],
      drugInteractions: ["Antidepressants or MAO inhibitors require monitoring"],
      disclaimer: "Advanced neurotrophic compounded peptide compound."
    },
    relatedKBSlugs: ["nootropic-peptides", "subcutaneous-vs-intramuscular"]
  },
  {
    id: "p21",
    slug: "p21",
    name: "P21",
    category: "cognitive",
    tagline: "Synaptic growth and neurogenesis support.",
    description: "A synthetic peptide derived from ciliary neurotrophic factor (CNTF), studied for its potential to support neurogenesis and synaptic plasticity.",
    mechanism: "P21 acts as a mimetic of CNTF, binding to receptors that stimulate neurogenesis (the growth of new neurons) in the hippocampus and improving synaptic connectivity by boosting BDNF expression.",
    benefits: [
      "Supports neurogenesis in the hippocampus",
      "Improves synaptic plasticity and signal speed",
      "Assists in memory formation and cognitive flexibility",
      "Promotes general neuroprotective pathways"
    ],
    administration: "Nasal Spray / Subcutaneous Injection",
    protocol: "100–200mcg daily or 3 times weekly, in cycles of 4–8 weeks.",
    whoItsFor: "Clients wanting to optimize long-term brain health, memory, and cognitive resilience.",
    whoItsNotFor: "Pregnancy, active neurological malignancies.",
    price: "$—", // // TODO: pricing
    safetyInfo: {
      contraindications: ["Pregnancy", "Active brain tumors"],
      warnings: ["Avoid late evening use to prevent cognitive alertness from interfering with sleep"],
      sideEffects: ["Mild headache", "Brain fog if overused", "Local injection site tenderness"],
      drugInteractions: ["No major documented interactions"],
      disclaimer: "Compounded neurotrophic peptide."
    },
    relatedKBSlugs: ["nootropic-peptides"]
  },
  {
    id: "pe-22-28",
    slug: "pe-22-28",
    name: "PE-22-28",
    category: "cognitive",
    tagline: "TREK-1 channel blocker for mood support.",
    description: "A synthetic peptide that targets the TREK-1 potassium channel, studied for its rapid-acting support for mood and emotional balance.",
    mechanism: "PE-22-28 selectively blocks the TREK-1 potassium channel, which mimics the downstream effects of SSRIs but with a much faster onset, leading to increased BDNF levels and neurogenesis in the hippocampus.",
    benefits: [
      "Supports rapid-acting mood improvement",
      "Helps balance stress and emotional responses",
      "Promotes neurogenesis in key brain regions",
      "Does not cause typical SSRI-related side effects"
    ],
    administration: "Subcutaneous Injection",
    protocol: "100–400mcg daily for cycles of 4–6 weeks, monitored by your physician.",
    whoItsFor: "Individuals seeking advanced mood support and emotional resilience.",
    whoItsNotFor: "Severe clinical depression (requires specialist psychiatric care), pregnancy.",
    price: "$—", // // TODO: pricing
    safetyInfo: {
      contraindications: ["Bipolar disorder (without mood stabilizers)", "Pregnancy", "Active suicidal ideation"],
      warnings: ["Not a replacement for emergency psychiatric care; report mood changes immediately"],
      sideEffects: ["Mild headache", "Temporary changes in blood pressure", "Nausea"],
      drugInteractions: ["SSRIs, SNRIs, or MAOIs require close physician review"],
      disclaimer: "Compounded mood regulatory peptide."
    },
    relatedKBSlugs: ["nootropic-peptides"]
  },

  // ==========================
  // SEXUAL WELLNESS
  // ==========================
  {
    id: "pt-141",
    slug: "pt-141",
    name: "PT-141 (Bremelanotide)",
    category: "sexual-wellness",
    tagline: "Central nervous system activator for libido.",
    description: "A melanocortin receptor agonist that acts on the central nervous system to stimulate libido and sexual desire in both men and women.",
    mechanism: "Unlike medications that target the vascular system (like sildenafil), PT-141 binds to melanocortin receptors (MC3R and MC4R) in the brain, directly activating pathways involved in sexual motivation, desire, and arousal.",
    benefits: [
      "Directly stimulates sexual desire and libido",
      "Effective for both men and women",
      "Bypasses vascular pathways (does not affect nitric oxide)",
      "Supports sexual satisfaction and confidence",
      "Helps address hypoactive sexual desire disorder (HSDD)"
    ],
    administration: "Subcutaneous Injection / Nasal Spray",
    protocol: "1–2mg injected subcutaneously 2–6 hours before anticipated sexual activity, used on-demand.",
    whoItsFor: "Men and women looking to improve libido, desire, and sexual arousal.",
    whoItsNotFor: "Uncontrolled hypertension, cardiovascular disease, pregnancy.",
    price: "$—", // // TODO: pricing
    safetyInfo: {
      contraindications: ["Uncontrolled hypertension", "Active cardiovascular disease", "Pregnancy"],
      warnings: ["Can cause a temporary increase in blood pressure and decrease in heart rate after injection", "Do not use more than once in 24 hours or 8 times per month"],
      sideEffects: ["Nausea (common, often transient)", "Facial flushing", "Headache", "Post-nasal drip (if sprayed)"],
      drugInteractions: ["May slow gastric emptying, affecting absorption of oral medications"],
      disclaimer: "Compounded melanocortin receptor agonist."
    },
    relatedKBSlugs: ["pt141-for-libido", "peptide-safety-sourcing"]
  },
  {
    id: "kisspeptin-10",
    slug: "kisspeptin-10",
    name: "Kisspeptin-10",
    category: "sexual-wellness",
    tagline: "Natural gonadotropin cascade stimulation.",
    description: "A peptide hormone that regulates the release of GnRH, supporting natural LH, FSH, and sex hormone levels.",
    mechanism: "Kisspeptin-10 binds to GPR54 receptors in the hypothalamus, triggering the release of Gonadotropin-Releasing Hormone (GnRH). This stimulates pituitary LH and FSH release, prompting natural testosterone or estrogen production.",
    benefits: [
      "Stimulates natural luteinizing hormone (LH) release",
      "Supports natural testosterone and estrogen production",
      "Aids in maintaining fertility and testicular health",
      "Helps improve mood and sexual motivation pathways"
    ],
    administration: "Subcutaneous Injection",
    protocol: "50–100mcg injected 2-3 times per week, or as directed by your physician.",
    whoItsFor: "Clients wanting natural support for their sex hormones and fertility, or those on TRT looking to maintain testicular function.",
    whoItsNotFor: "Hormone-sensitive cancers (breast, prostate), pregnancy.",
    price: "$—", // // TODO: pricing
    safetyInfo: {
      contraindications: ["Prostate cancer", "Breast or ovarian cancer", "Pregnancy"],
      warnings: ["Monitor sex hormone levels (LH, FSH, Testosterone, Estrogen) regularly"],
      sideEffects: ["Mild headache", "Temporary flushing", "Mild testicle sensitivity"],
      drugInteractions: ["Exogenous hormone therapies require close monitoring"],
      disclaimer: "Compounded regulatory peptide."
    },
    relatedKBSlugs: ["pt141-for-libido", "peptide-therapy-bloodwork"]
  },
  {
    id: "oxytocin",
    slug: "oxytocin",
    name: "Oxytocin",
    category: "sexual-wellness",
    tagline: "The bonding and intimacy hormone.",
    description: "A peptide hormone and neuropeptide that supports emotional bonding, intimacy, social trust, and sexual response.",
    mechanism: "Acts on oxytocin receptors in the brain to modulate social behaviors, reduce amygdala hyperactivity (anxiety), and enhance physical sensitivity and climax during intimacy.",
    benefits: [
      "Supports feelings of emotional closeness and trust",
      "Reduces social anxiety and stress levels",
      "Enhances physical sensitivity and sexual response",
      "Promotes relaxation and general well-being"
    ],
    administration: "Nasal Spray / Subcutaneous Injection / Sublingual Troche",
    protocol: "10–40 IU administered on-demand prior to social or intimate activities.",
    whoItsFor: "Individuals or couples seeking to enhance emotional connection, intimacy, and sexual wellness.",
    whoItsNotFor: "Pregnancy (can induce uterine contractions), cardiovascular issues.",
    price: "$—", // // TODO: pricing
    safetyInfo: {
      contraindications: ["Pregnancy", "Hypersensitivity to oxytocin"],
      warnings: ["Oxytocin is a potent uterine stimulant; strictly contraindicated in pregnancy"],
      sideEffects: ["Mild facial flushing", "Transient increase in heart rate", "Mild water retention at high doses"],
      drugInteractions: ["Vasoconstrictors (risk of severe hypertension)"],
      disclaimer: "Compounded hormone preparation."
    },
    relatedKBSlugs: ["pt141-for-libido"]
  },
  {
    id: "melanotan-blend",
    slug: "melanotan-1-2",
    name: "Melanotan 1 / Melanotan 2",
    category: "sexual-wellness",
    tagline: "Skin pigmentation support and libido stimulation.",
    description: "Synthetic analogues of alpha-MSH designed to stimulate skin tanning and support libido.",
    mechanism: "Melanotan 1 and 2 bind to melanocortin receptors (MC1R for skin tanning, and MC3R/MC4R for libido and appetite control), promoting melanin production and activating brain pathways for desire.",
    benefits: [
      "Stimulates skin tanning (melanogenesis)",
      "Provides moderate protection against UV damage",
      "Supports libido and sexual desire (particularly Melanotan 2)",
      "May help reduce appetite"
    ],
    administration: "Subcutaneous Injection",
    protocol: "Daily loading dose of 250–500mcg, followed by weekly maintenance doses.",
    whoItsFor: "Individuals seeking support for skin tanning and libido enhancement.",
    whoItsNotFor: "History of melanoma or atypical moles, pregnancy, uncontrolled high blood pressure.",
    price: "$—", // // TODO: pricing
    safetyInfo: {
      contraindications: ["Personal history of melanoma", "Atypical mole syndrome", "Pregnancy"],
      warnings: ["Requires careful monitoring of skin changes and new moles by a dermatologist"],
      sideEffects: ["Nausea (common after injection)", "Facial flushing", "Spontaneous erections (Melanotan 2)", "Darkening of existing moles"],
      drugInteractions: ["No major documented interactions"],
      disclaimer: "Compounded melanocortin peptide."
    },
    relatedKBSlugs: ["pt141-for-libido", "peptide-safety-sourcing"]
  },

  // ==========================
  // BEAUTY / SKIN
  // ==========================
  {
    id: "ghk-cu-topical",
    slug: "ghk-cu-topical",
    name: "GHK-Cu Topical",
    category: "beauty-skin",
    tagline: "Copper peptide for skin remodeling and hair health.",
    description: "A premium topical copper-binding tripeptide designed to support collagen synthesis, reduce fine lines, and promote hair thickness.",
    mechanism: "Upregulates key skin repair genes, promoting collagen and elastin synthesis. It also helps block inflammatory signals and increases hair follicle size to support hair density.",
    benefits: [
      "Reduces the appearance of fine lines and wrinkles",
      "Supports skin elasticity, firmness, and thickness",
      "Promotes hair follicle health and density",
      "Calms red, irritated skin and supports healing",
      "Enhances the skin's natural barrier function"
    ],
    administration: "Topical Serum / Cream",
    protocol: "Apply to clean skin or scalp twice daily, in the morning and evening.",
    whoItsFor: "Clients wanting to address wrinkles, skin laxity, or thinning hair.",
    whoItsNotFor: "Copper allergies, active skin infections.",
    price: "$—", // // TODO: pricing
    safetyInfo: {
      contraindications: ["Known copper hypersensitivity"],
      warnings: ["For external use only; avoid direct contact with eyes"],
      sideEffects: ["Mild local irritation or redness if skin is sensitive"],
      drugInteractions: ["Do not apply immediately with highly acidic products like Vitamin C (can break the copper bond)"],
      disclaimer: "Compounded topical skin care preparation."
    },
    relatedKBSlugs: ["ghkcu-copper-peptides", "peptide-stacks"]
  },
  {
    id: "argireline",
    slug: "argireline",
    name: "Argireline (Acetyl Hexapeptide-3)",
    category: "beauty-skin",
    tagline: "Topical expression line relaxer.",
    description: "A synthetic peptide that relaxes facial muscles to soften expression lines, often referred to as a topical alternative to Botox.",
    mechanism: "Argireline mimics a key protein in the SNARE complex, which is required for muscle contraction. By blocking neurotransmitter release at the neuromuscular junction, it relaxes the muscles that cause expression lines.",
    benefits: [
      "Softens expression lines (forehead, crow's feet)",
      "Helps prevent new expression wrinkles from forming",
      "Improves skin moisture and smoothness",
      "Non-invasive, topical application"
    ],
    administration: "Topical Serum / Cream",
    protocol: "Apply to clean skin twice daily, focusing on areas with expression lines.",
    whoItsFor: "Individuals looking to reduce wrinkles and soften dynamic expression lines.",
    whoItsNotFor: "Active skin infections, open wounds.",
    price: "$—", // // TODO: pricing
    safetyInfo: {
      contraindications: ["Hypersensitivity to Acetyl Hexapeptide-3"],
      warnings: ["For external use only"],
      sideEffects: ["Rare mild skin redness"],
      drugInteractions: ["None documented"],
      disclaimer: "Compounded topical cosmetic preparation."
    },
    relatedKBSlugs: ["ghkcu-copper-peptides"]
  },
  {
    id: "matrixyl",
    slug: "matrixyl",
    name: "Matrixyl",
    category: "beauty-skin",
    tagline: "Double-action collagen stimulation.",
    description: "A patented lipopeptide combination (Palmitoyl Tripeptide-1 and Palmitoyl Tetrapeptide-7) that stimulates collagen and skin repair.",
    mechanism: "Acts as a messenger peptide (matrikine) to signal the skin's fibroblasts to produce collagen, elastin, and hyaluronic acid, mimicking natural tissue repair processes.",
    benefits: [
      "Stimulates collagen and elastin production",
      "Reduces wrinkle depth and volume",
      "Improves skin firmness and texture",
      "Supports skin hydration and barrier repair"
    ],
    administration: "Topical Serum",
    protocol: "Apply to face and neck morning and night before heavier creams.",
    whoItsFor: "Wellness clients wanting to address skin aging, sagging, and fine lines.",
    whoItsNotFor: "Hypersensitivity to palmitoyl peptides.",
    price: "$—", // // TODO: pricing
    safetyInfo: {
      contraindications: ["Known hypersensitivity"],
      warnings: ["Discontinue if irritation occurs"],
      sideEffects: ["None commonly reported; occasional mild itchiness"],
      drugInteractions: ["None major"],
      disclaimer: "Topical cosmetic compounded serum."
    },
    relatedKBSlugs: ["ghkcu-copper-peptides"]
  },
  {
    id: "snap-8",
    slug: "snap-8",
    name: "SNAP-8",
    category: "beauty-skin",
    tagline: "Octapeptide expression line reducer.",
    description: "An octapeptide derived from Argireline, designed to be more potent in relaxing dynamic facial wrinkles.",
    mechanism: "Similar to Argireline, SNAP-8 blocks the SNARE complex assembly to limit muscle contractions that lead to expression lines, but with an extended peptide chain for greater stability and receptor affinity.",
    benefits: [
      "Advanced reduction of expression line depth",
      "Helps smooth skin texture",
      "Improves skin elasticity and hydration",
      "Complements cosmetic injectable treatments"
    ],
    administration: "Topical Serum",
    protocol: "Apply twice daily to targeted areas of the face.",
    whoItsFor: "Clients seeking a potent topical solution for dynamic expression lines.",
    whoItsNotFor: "Open skin lesions, active dermatitis.",
    price: "$—", // // TODO: pricing
    safetyInfo: {
      contraindications: ["Hypersensitivity to octapeptides"],
      warnings: ["For external use only"],
      sideEffects: ["Rare local irritation"],
      drugInteractions: ["None"],
      disclaimer: "Compounded cosmetic formulation."
    },
    relatedKBSlugs: ["ghkcu-copper-peptides"]
  },
  {
    id: "syn-coll",
    slug: "syn-coll",
    name: "Syn-Coll",
    category: "beauty-skin",
    tagline: "TGF-beta tissue growth stimulation.",
    description: "A synthetic tripeptide designed to stimulate the skin's natural collagen production by activating TGF-beta.",
    mechanism: "Syn-Coll mimics the body's thrombospondin-1 (TSP-1) sequence, which activates Tissue Growth Factor-beta (TGF-beta), a key regulator of collagen synthesis.",
    benefits: [
      "Actively boosts collagen production",
      "Helps protect collagen from degradation",
      "Refines skin texture and pore appearance",
      "Improves skin firmness and elasticity"
    ],
    administration: "Topical Serum",
    protocol: "Apply twice daily as part of your skincare routine.",
    whoItsFor: "Clients wanting to address age-related collagen loss and skin thinning.",
    whoItsNotFor: "Known sensitivity to tripeptides.",
    price: "$—", // // TODO: pricing
    safetyInfo: {
      contraindications: ["Hypersensitivity"],
      warnings: ["For topical use only"],
      sideEffects: ["Minimal risk; rare mild itching"],
      drugInteractions: ["None"],
      disclaimer: "Cosmetic compounded tripeptide."
    },
    relatedKBSlugs: ["ghkcu-copper-peptides"]
  },
  {
    id: "syn-ake",
    slug: "syn-ake",
    name: "Syn-AKE",
    category: "beauty-skin",
    tagline: "Peptide muscle relaxer inspired by nature.",
    description: "A small synthetic peptide that mimics the activity of waglerin-1, a compound found in temple viper venom, designed to relax facial muscles.",
    mechanism: "Syn-AKE blocks the nicotinic acetylcholine receptors at the neuromuscular junction, preventing sodium uptake and temporarily relaxing the facial muscles.",
    benefits: [
      "Fast-acting smoothing of dynamic wrinkles",
      "Targets crow's feet and laughter lines",
      "Promotes a smooth, youthful skin surface",
      "Reversible muscle relaxation"
    ],
    administration: "Topical Cream / Serum",
    protocol: "Apply morning and night to clean skin.",
    whoItsFor: "Individuals seeking quick, targeted smoothing of expression lines.",
    whoItsNotFor: "Allergies to synthetic venom analogues, skin inflammation.",
    price: "$—", // // TODO: pricing
    safetyInfo: {
      contraindications: ["Hypersensitivity"],
      warnings: ["External use only; do not apply to broken skin"],
      sideEffects: ["Transient mild tightness", "Rare localized redness"],
      drugInteractions: ["None"],
      disclaimer: "Cosmetic compounded preparation."
    },
    relatedKBSlugs: ["ghkcu-copper-peptides"]
  },
  {
    id: "decapeptide-12",
    slug: "decapeptide-12",
    name: "Decapeptide-12",
    category: "beauty-skin",
    tagline: "Skin brightening and hyperpigmentation support.",
    description: "A peptide designed to address hyperpigmentation, dark spots, and uneven skin tone.",
    mechanism: "Decapeptide-12 acts as a competitive inhibitor of tyrosinase, the key enzyme responsible for melanin production, reducing melanin synthesis without toxicity.",
    benefits: [
      "Brightens skin tone and improves radiance",
      "Reduces the appearance of sun spots and melasma",
      "Gentler alternative to hydroquinone",
      "Helps prevent new dark spots from forming"
    ],
    administration: "Topical Cream / Serum",
    protocol: "Apply to affected areas twice daily, followed by sunscreen in the morning.",
    whoItsFor: "Clients dealing with melasma, age spots, or post-inflammatory hyperpigmentation.",
    whoItsNotFor: "Severe active acne (requires primary clearance), pregnancy (safety data limited).",
    price: "$—", // // TODO: pricing
    safetyInfo: {
      contraindications: ["Hypersensitivity to tyrosinase inhibitors"],
      warnings: ["Daily sun protection is required to maintain results"],
      sideEffects: ["Mild dryness", "Temporary skin flaking"],
      drugInteractions: ["None major, avoid mixing with strong retinoids at the same application time"],
      disclaimer: "Compounded topical brightening agent."
    },
    relatedKBSlugs: ["ghkcu-copper-peptides"]
  },

  // ==========================
  // BIOREGULATORS
  // ==========================
  ...([
    { name: "Cardiogen", slug: "cardiogen", target: "heart muscle (myocardium) repair and cardiovascular health" },
    { name: "Bronchogen", slug: "bronchogen", target: "respiratory tract repair and lung function support" },
    { name: "Cartalax", slug: "cartalax", target: "cartilage regeneration and joint health preservation" },
    { name: "Chonluten", slug: "chonluten", target: "respiratory and bronchial tree immune health" },
    { name: "Cortagen", slug: "cortagen", target: "brain health and central nervous system regulation" },
    { name: "Livagen", slug: "livagen", target: "liver metabolism, DNA restoration, and immune balance" },
    { name: "Ovagen", slug: "ovagen", target: "gastrointestinal lining repair and liver support" },
    { name: "Pancragen", slug: "pancragen", target: "pancreatic health and glucose metabolism regulation" },
    { name: "Pinealon", slug: "pinealon", target: "brain cell longevity, sleep architecture, and memory support" },
    { name: "Prostamax", slug: "prostamax", target: "prostate health and urinary tract comfort" },
    { name: "Testagen", slug: "testagen", target: "testicular function and natural male hormone support" },
    { name: "Thymagen", slug: "thymagen", target: "thymus-derived T-cell maturation and immune balance" },
    { name: "Vesilut", slug: "vesilut", target: "urinary bladder wall repair and bladder control" },
    { name: "Vesugen", slug: "vesugen", target: "vascular wall elasticity and cardiovascular microcirculation" },
    { name: "Vilon", slug: "vilon", target: "immune system repair and cellular aging defense" }
  ].map(bio => ({
    id: bio.slug,
    slug: bio.slug,
    name: bio.name,
    category: "bioregulators",
    tagline: `Short-chain peptide bioregulator for ${bio.name.toLowerCase()} health.`,
    description: `A highly purified short-chain peptide bioregulator developed under the Khavinson protocol, designed to target and support ${bio.target}.`,
    mechanism: `Acts directly on cell chromatin to regulate tissue-specific gene expression. These ultra-short peptides (2-4 amino acids) insert into DNA loops to stimulate the synthesis of functional proteins, restoring cellular homeostasis in the target tissue.`,
    benefits: [
      `Supports tissue-specific cellular repair and regeneration`,
      `Aids in restoring organ homeostasis according to the Khavinson protocol`,
      `Upregulates protein synthesis in target cells`,
      `Acts as a primary epigenetic modulator for longevity`,
      `Maintains healthy baseline functions of the target system`
    ],
    administration: "Subcutaneous Injection / Oral Capsule",
    protocol: "10-day courses of 10mg daily, repeated twice annually under physician guidance.",
    whoItsFor: "Longevity optimization clients following targeted organ-specific Khavinson bioregulation protocols.",
    whoItsNotFor: "Pregnancy, active oncological conditions.",
    price: "$—", // // TODO: pricing
    safetyInfo: {
      contraindications: ["Pregnancy", "Active cancer"],
      warnings: ["Adhere strictly to the periodic 10-day cycles; do not take continuously"],
      sideEffects: ["Minimal reported side effects; occasional mild site redness if injected"],
      drugInteractions: ["No major interactions documented"],
      disclaimer: "Khavinson peptide bioregulator compounded agent."
    },
    relatedKBSlugs: ["bioregulators-khavinson-protocol", "peptide-safety-sourcing"]
  })))
];

export function getProductBySlug(slug: string): Product | undefined {
  return PRODUCTS.find(p => p.slug === slug);
}

export function getProductsByCategory(categorySlug: string): Product[] {
  return PRODUCTS.filter(p => p.category === categorySlug);
}

export function getCategoryBySlug(slug: string): Category | undefined {
  return CATEGORIES.find(c => c.slug === slug);
}

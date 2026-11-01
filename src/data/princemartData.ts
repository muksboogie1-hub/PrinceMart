/**
 * PrinceMart Business Information and Product Catalogue
 * Source of truth: https://www.princemart.co.zw/
 * Official business operating in Zimbabwe.
 */

export interface ProductItem {
  id: string;
  name: string;
  category: 'Hardware & Tools' | 'Motor Spares' | 'Workshop Equipment' | 'Kitchenware';
  subcategory: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  keyFeatures: string[];
  targetAudience: string;
  referenceNotes?: string;
}

export const BUSINESS_INFO = {
  name: 'PrinceMart',
  legalName: 'PrinceMart Investments',
  tagline: 'High-Performance Tools, Building Supplies & Genuine Motor Spares',
  officialStatement:
    'Whether you are a professional contractor building the future, a mechanic demanding precision, or a vehicle owner looking for reliability, we provide the high-performance tools and genuine spares you can depend on.',
  phone: '+263 771 767 077',
  phoneDisplay: '+263 771 767 077',
  whatsappUrl: 'https://wa.me/263771767077',
  email: 'sales@princemart.co.zw',
  website: 'https://www.princemart.co.zw/',
  locations: [
    {
      name: 'Macheke Branch & Showroom',
      address: 'Macheke Hotel Complex',
      city: 'Macheke, Zimbabwe',
      role: 'Primary Physical Store & Warehouse',
    },
    {
      name: 'Harare Collection Point',
      address: 'Harare Avenues & Greendale / Msasa',
      city: 'Harare, Zimbabwe',
      role: 'Scheduled Order Collection & Dispatch',
    },
  ],
  coreCategories: [
    {
      id: 'hardware-tools',
      title: 'Hardware & Tools',
      description: 'Quality hand tools, power tool attachments, and building materials for home and contractor use.',
      image: '/src/assets/images/category_hardware_tools_1793559225538.jpg',
      badge: 'Contractor Grade',
    },
    {
      id: 'motor-spares',
      title: 'Motor Spares & Spares',
      description: 'Reliable car parts and components compatible with popular vehicle models in Zimbabwe.',
      image: '/src/assets/images/category_motor_spares_1793559226058.jpg',
      badge: 'Mechanic Trusted',
    },
    {
      id: 'workshop-equipment',
      title: 'Workshop & Specialty Tools',
      description: 'Specialized automotive repair equipment, coil spring compressors, and thread repair tooling.',
      image: '/src/assets/images/product_wire_thread_kit_1793559225729.jpg',
      badge: 'Precision Engineering',
    },
    {
      id: 'kitchenware',
      title: 'Kitchenware & Essentials',
      description: 'Durable everyday household utilities and catering-grade stainless cookware.',
      image: '/src/assets/images/hero_princemart_hardware_1793559225476.jpg',
      badge: 'Utility Selections',
    },
  ],
  verifiedStrengths: [
    {
      title: 'Trade & Mechanical Reliability',
      description: 'Engineered specifically for Zimbabwean contractors, workshop mechanics, and vehicle owners demanding durability.',
    },
    {
      title: 'Dual Location Accessibility',
      description: 'Stocked at Macheke Hotel Complex with flexible pickup and collection arrangements in Harare.',
    },
    {
      title: 'Direct Quotation Service',
      description: 'Fast, transparent quotations tailored to exact quantities and specifications without hidden pricing.',
    },
    {
      title: 'Specialty Workshop Solutions',
      description: 'Direct supplier of hard-to-find repair kits such as 304 wire thread inserts and coil spring compressors.',
    },
  ],
};

export const PRODUCT_CATALOGUE: ProductItem[] = [
  {
    id: 'spring-compressor-hd',
    name: 'Heavy-Duty Coil Spring Compressor',
    category: 'Motor Spares',
    subcategory: 'Suspension & Steering Tools',
    shortDescription: 'Hardened steel automotive spring compressor for safe strut and coil suspension servicing.',
    fullDescription:
      'Engineered for mechanics and automotive technicians. This heavy-duty coil spring compressor allows safe compression and removal of vehicle suspension springs. Constructed with hardened steel center rods and heavy-duty forged safety jaws to prevent spring slippage under load.',
    image: '/src/assets/images/product_spring_compressor_1793559226560.jpg',
    keyFeatures: [
      'High-tensile heat-treated threaded drive shafts',
      'Forged safety claws with wide contact surface',
      'Compatible with passenger cars, SUVs, and light trucks',
      'Operable with standard hand ratchet or workshop socket',
    ],
    targetAudience: 'Automotive workshops, mechanics, suspension specialists',
  },
  {
    id: 'wire-thread-repair-kit',
    name: '304 Stainless Steel Wire Thread Insert Repair Kit',
    category: 'Workshop Equipment',
    subcategory: 'Thread Restoration & Fastening',
    shortDescription: 'Precision Helicoil-style thread restoration kit for engine blocks, spark plug holes, and housings.',
    fullDescription:
      'Professional thread restoration system designed to repair damaged, cross-threaded, or stripped female threads. Contains high-precision 304 stainless steel helical coil inserts, dedicated HSS drills, finishing taps, installation tools, and tang break-off pins in a robust steel case.',
    image: '/src/assets/images/product_wire_thread_kit_1793559225729.jpg',
    keyFeatures: [
      '304 corrosion-resistant stainless steel wire inserts',
      'High Speed Steel (HSS) metric taps and matching drill bits',
      'Dedicated mandrel insertion tool and tang break punch',
      'Protective metal organizing case with molded compartments',
    ],
    targetAudience: 'Engine builders, automotive mechanics, industrial machinists',
  },
  {
    id: 'contractor-hand-power-set',
    name: 'Contractor Heavy-Duty Hand & Power Tool Range',
    category: 'Hardware & Tools',
    subcategory: 'Contractor Equipment',
    shortDescription: 'Industrial-grade impact drills, measuring tapes, spirit levels, and ergonomic hand tools.',
    fullDescription:
      'Curated tool selection for professional builders, electrical contractors, and site carpenters. Combines high-torque cordless impact capability with precision measurement instruments and ergonomic, drop-tested hand tools.',
    image: '/src/assets/images/category_hardware_tools_1793559225538.jpg',
    keyFeatures: [
      'Reinforced composite tool housings for harsh job-site durability',
      'Magnetic spirit levels with shock-absorbing end caps',
      'Ergonomic dual-density soft grips for reduced hand fatigue',
      'Heavy-duty alloy steel screwdrivers and combination spanners',
    ],
    targetAudience: 'Building contractors, site carpenters, electricians, DIY builders',
  },
  {
    id: 'automotive-mechanical-spares',
    name: 'Automotive Replacement Spares & Service Kits',
    category: 'Motor Spares',
    subcategory: 'Service & Maintenance Parts',
    shortDescription: 'Reliable replacement parts, brake components, suspension arms, and service filters.',
    fullDescription:
      'Extensive stock of essential vehicle components designed for popular vehicle makes and models in Zimbabwe. Includes brake rotors, pads, oil/air filters, spark plugs, drive belts, and suspension bushings built to maintain reliable road performance.',
    image: '/src/assets/images/category_motor_spares_1793559226058.jpg',
    keyFeatures: [
      'OEM-spec dimensional precision for accurate fitment',
      'Durable friction compounds for consistent braking',
      'Tested against rigorous temperature and road shock tolerances',
      'Stocked for popular Japanese, European, and regional utility vehicles',
    ],
    targetAudience: 'Motor mechanics, fleet managers, private vehicle owners',
  },
  {
    id: 'commercial-workshop-station',
    name: 'Commercial Workshop Workstation & Tool Storage',
    category: 'Workshop Equipment',
    subcategory: 'Workshop Setup',
    shortDescription: 'Heavy-gauge steel workbench, pegboard organizer, and ball-bearing tool drawers.',
    fullDescription:
      'Engineered for fabrication shops, motor garages, and industrial repair centers. Features heavy-gauge steel construction, scratch-resistant industrial powder coating, secure key-locking drawers, and reinforced worktops capable of holding heavy mechanical components.',
    image: '/src/assets/images/hero_princemart_hardware_1793559225476.jpg',
    keyFeatures: [
      'All-welded heavy-gauge steel structural frame',
      'Full-extension ball bearing drawer slides',
      'Integrated steel pegboard for rapid tool access',
      'Resistant to grease, oil, and workshop solvents',
    ],
    targetAudience: 'Commercial auto garages, maintenance bays, manufacturing units',
  },
  {
    id: 'industrial-angle-grinder-pack',
    name: 'Heavy-Duty Industrial Angle Grinder & Abrasives',
    category: 'Hardware & Tools',
    subcategory: 'Power Tools & Abrasives',
    shortDescription: 'High-torque grinder with copper armature and reinforced cutting/grinding discs.',
    fullDescription:
      'High-performance metal and masonry cutting solution. Built with heat-treated helical gears and dust-ejection motor cooling for continuous cutting, descaling, and grinding operations on construction sites and metal fabrication workshops.',
    image: '/src/assets/images/hero_princemart_hardware_1793559225476.jpg',
    keyFeatures: [
      'High-power copper motor with overload protection',
      'Multi-position anti-vibration side handle',
      'Burst-proof adjustable safety protective guard',
      'Includes assorted reinforced steel cutting and grinding discs',
    ],
    targetAudience: 'Welders, steel fabricators, site contractors',
  },
  {
    id: 'digital-vernier-caliper',
    name: 'High-Precision Digital Vernier Caliper (0-150mm)',
    category: 'Workshop Equipment',
    subcategory: 'Inspection & Metrology',
    shortDescription: 'Hardened stainless steel digital caliper with 0.01mm resolution and high-contrast LCD.',
    fullDescription:
      'Critical metrology tool for mechanics and machinists verifying brake disc thickness, cylinder bores, bolt diameters, and thread depths. Features finely lapped measuring surfaces and smooth thumb-roller adjustment.',
    image: '/src/assets/images/category_hardware_tools_1793559225538.jpg',
    keyFeatures: [
      'Hardened stainless steel frame and depth measuring blade',
      'Four-way measurement: external, internal, depth, step',
      'Zero calibration button at any point on the scale',
      'Instant metric-to-inch digital conversion',
    ],
    targetAudience: 'Mechanics, lathe operators, precision engineers',
  },
  {
    id: 'heavy-hydraulic-floor-jack',
    name: 'Professional Hydraulic Trolley Floor Jack',
    category: 'Motor Spares',
    subcategory: 'Lifting & Workshop Gear',
    shortDescription: 'Heavy-duty hydraulic trolley jack with safety overload valve and swivel casters.',
    fullDescription:
      'Rugged vehicle lifting jack featuring heavy-duty side plates, dual-piston rapid pump mechanism, and safety bypass valve to prevent overloading. Designed for rapid and secure vehicle lifting during tyre, brake, or suspension servicing.',
    image: '/src/assets/images/category_motor_spares_1793559226058.jpg',
    keyFeatures: [
      'Dual-piston pump for quick contact with vehicle lift points',
      'Flanged steel frame sides for maximum torsional rigidity',
      'Padded handle and rubber saddle to protect vehicle underbody',
      'Precision metering release valve for controlled lowering',
    ],
    targetAudience: 'Auto repair shops, tyre fitment centers, mobile mechanics',
  },
  {
    id: 'kitchenware-stainless-utility',
    name: 'Commercial Grade Stainless Steel Kitchenware Sets',
    category: 'Kitchenware',
    subcategory: 'Household & Catering Utilities',
    shortDescription: 'Durable food-grade stainless steel pots, pans, and everyday kitchen essentials.',
    fullDescription:
      'Durable kitchen utilities constructed from food-grade stainless steel. Featuring thick encapsulated thermal bases for even heat transfer and sturdy riveted handles designed for domestic homes, boarding lodges, and catering operations.',
    image: '/src/assets/images/hero_princemart_hardware_1793559225476.jpg',
    keyFeatures: [
      'Corrosion-resistant food-grade stainless steel alloy',
      'Impact-bonded heavy aluminum base for optimal thermal spread',
      'Ergonomic cool-touch riveted handles',
      'Easy to sanitize and resistant to harsh kitchen detergents',
    ],
    targetAudience: 'Homeowners, catering services, rural lodges, institutional kitchens',
  },
];

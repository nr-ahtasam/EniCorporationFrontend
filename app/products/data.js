export const CATEGORIES = [

  "Car Engine Oils",
  "Bus & Truck Engine Oils",
  "Motorcycle Engine Oils",
  "Vehicle Lubricants",
];
export const INDUSTRIAL_CATEGORIES = [
  "Q8 Aviation Products",
  "Q8 Circulating Oils",
  "Q8 Compressor Oils",
  "Q8 Gas Engine Oils",
  "Q8 Gear Oils",
  "Q8 Greases",
  "Q8 Hydraulic Oils",
  "Q8 Marine Oils",
  "Q8 Metal Processing Oils",
  "Q8 Spindle Oils",
  "Q8 Heat Transfer Oil",
  "Q8 Rust and Corrosion Protection Oil",
  "Q8 Refrigeration Compressor Oils",
  "Q8 Turbine Oils",
  "Q8 Way Oils",
  "Q8 Chain Oils",
  "Q8 Knitting Oil",
  "Q8 Food Machinery Oils",
  
];
export const PRODUCT_CATEGORIES = [
  { id: 0, name: "ALL" },
  { id: 1, name: "Full Synthetic" },
  { id: 2, name: "Semi Synthetic" },
  { id: 3, name: "Mineral" },
  { id: 4, name: "Synthetic Based" },
  // { id: 5, name: "Lithium Complex" },
];
export const PRODUCTS = [
  {
    id: "1",
    title: "Q8 SHC 624",
    subtitle: "High-performance circulating oil",
    category: "Q8 Circulating Oils",
    productCategoryId: 0,
    description:
      "Q8 SHC 624 is a synthetic circulating oil formulated for extended service and excellent thermal stability.",
    image: "/images/products/IndustrialProduct/shc-624.png",
    pdsUrl: "/images/pds/shc-624.pdf",
    pdsFilename: "shc-624_en.pdf",
    features: [ 
      "Designed for modern and highly efficient gasoline and hybrid engines",
      "Helps extend engine life",
      "Outstanding wear protection for vehicles of all ages",
      "Excellent high temperature protection",
      "Permits extended operation at elevated temperatures without oxidative oil thickening and oil breakdown",
      "Allows easy starting and rapid oil circulation during cold starts to protect critical engine parts",
      "Meets or exceeds ILSAC GF-6B / API SP."
    ],
    applications: [
      "Passenger cars and light commercial vehicles",
      "Service fills and aftermarket replacement"
    ],
    specifications: ["API SP", "ILSAC GF-6B"],
    properties: [
      { name: "Grade", value: "SAE 0W-16" },
      { name: "Ash, Sulfated, mass%, ASTM D874", value: "0.7" },
      { name: "Density @ 15°C, g/ml, ASTM D1298", value: "0.845" },
      { name: "Flash Point, Cleveland Open Cup, °C, ASTM D92", value: "236" },
      { name: "Hi-Temp Hi-Shear Viscosity @ 150°C, mPa.s, ASTM D4683", value: "2.3" },
      { name: "Kinematic Viscosity @ 100°C, mm2/s, ASTM D445", value: "7" },
      { name: "Kinematic Viscosity @ 40°C, mm2/s, ASTM D445", value: "36" },
      { name: "Pour Point, °C, ASTM D97", value: "-42" },
      { name: "Total Base Number, mgKOH/g, ASTM D2896", value: "7.4" },
      { name: "Viscosity Index, ASTM D2270", value: "163" },
      { name: "Mini-Rotary Viscometer, Apparent Viscosity, -40°C, mPa.s, ASTM D4684", value: "42000" }
    ],
    safety: "Refer to the product PDS and MSDS for handling, storage and disposal guidance."
  },
  {
    id: "2",
    title: "Q8 SHC 626",
    subtitle: "Synthetic circulating oil for extended drain",
    category: "Q8 Circulating Oils",
    productCategoryId: 0,
    description:
      "Q8 SHC 626 provides long service life and excellent deposit control for industrial circulating systems.",
    image: "/images/products/IndustrialProduct/2.png",
     pdsUrl: "/images/pds/shc-624.pdf",
    pdsFilename: "shc-624_en.pdf",
    features: [
      "Long oil life and strong oxidation resistance",
      "Low volatility and deposit control",
      "Excellent equipment protection under severe operating conditions"
    ],
    applications: ["Industrial circulating oil systems", "Gearboxes and bearings as specified"],
    specifications: ["Manufacturer approvals as listed in PDS"],
    properties: [
      { name: "Grade", value: "ISO VG 46" },
      { name: "Kinematic Viscosity @ 40°C, mm2/s", value: "46" },
      { name: "Viscosity Index", value: "150" }
    ],
    safety: "See PDS for full health and safety information."
  },
  {
    id: "3",
    title: "Q8 Terra 8000 Long Drain 10W-40",
    subtitle: "High performance engine oil for long drain intervals",
    category: "Q8 Gas Engine Oils",
    productCategoryId: 0,
    description:
      "Q8 Terra 8000 Long Drain 10W-40 is formulated for modern diesel and gasoline engines requiring extended drain capability.",
    image: "/images/products/IndustrialProduct/2.png",
     pdsUrl: "/images/pds/shc-624.pdf",
    pdsFilename: "shc-624_en.pdf",
    features: [
      "Extended drain performance",
      "Excellent wear and corrosion protection",
      "Optimized for fuel economy and engine cleanliness"
    ],
    applications: ["Heavy duty diesel engines", "On-road and off-road applications"],
    specifications: ["ACEA C3", "API CJ-4 (where applicable)"],
    properties: [
      { name: "Grade", value: "SAE 10W-40" },
      { name: "Kinematic Viscosity @ 100°C, mm2/s", value: "12.5" },
      { name: "Pour Point, °C", value: "-30" }
    ],
    safety: "Consult PDS for handling and first-aid measures."
  },
  {
    id: "4",
    title: "Q8 Gear 629",
    subtitle: "Industrial gear oil with EP additives",
    category: "Q8 Gear Oils",
    productCategoryId: 0,
    description: "EP gear oil formulated for heavy-duty gear applications.",
    image: "/images/products/IndustrialProduct/2.png",
     pdsUrl: "/images/pds/shc-624.pdf",
    pdsFilename: "shc-624_en.pdf",
    features: [
      "Extreme pressure protection",
      "Good load carrying capacity",
      "Corrosion protection"
    ],
    applications: ["Industrial gearboxes", "Closed and open gear systems"],
    specifications: ["DIN 51517", "AGMA approvals as applicable"],
    properties: [
      { name: "Grade", value: "ISO VG 220" },
      { name: "Viscosity Index", value: "95" }
    ],
    safety: "Refer to the PDS for safety and environmental instructions."
  },
  {
    id: "5",
    title: "Q8 Hydraulic 46",
    subtitle: "ISO VG 46 hydraulic oil",
    category: "Q8 Hydraulic Oils",
    productCategoryId: 0,
    description:
      "Hydraulic oil with anti-wear protection and thermal stability for industrial hydraulics.",
    image: "/images/products/IndustrialProduct/2.png",
     pdsUrl: "/images/pds/shc-624.pdf",
    pdsFilename: "shc-624_en.pdf",
    features: ["Anti-wear protection", "Oxidation stability", "Good filterability"],
    applications: ["Industrial hydraulic systems", "Mobile hydraulics where ISO VG 46 is specified"],
    specifications: ["ISO 11158", "DIN 51524"],
    properties: [
      { name: "Grade", value: "ISO VG 46" },
      { name: "Kinematic Viscosity @ 40°C, mm2/s", value: "46" },
      { name: "Flash Point, °C", value: "200" }
    ],
    safety: "See product PDS for personal protective equipment recommendations."
  },
  // Car Engine Oils products (add productCategoryId to support productCategories filter)
  {
    id: "6",
    title: "Q8 Formula Hybrid GF-6A 0W-20",
    subtitle: "Full synthetic engine oil for modern gasoline engines",
    category: "Car Engine Oils",
    productCategoryId: 1, // Full Synthetic
    description:
      "Q8 Formula Hybrid GF-6A 0W-20 is a full synthetic engine oil designed for modern gasoline and hybrid engines, offering fuel economy and excellent wear protection.",
    image: "/images/products/CVO/Q8 Formula Hybrid GF-6A 0W-20.jpeg",
    pdsUrl: "/images/pds/Q8-Formula-Hybrid-GF-6A-0W-20_en.pdf",
    pdsFilename: "Q8-Formula-Hybrid-GF-6A-0W-20_en.pdf",

    features: [
      "Optimized for fuel economy in modern engines",
      "Excellent low-temperature start-up protection",
      "Helps extend engine life and reduce deposits"
    ],
    applications: [
      "Modern gasoline and hybrid passenger cars",
      "Recommended where API GF-6A is required"
    ],
    specifications: ["API GF-6A"],
    properties: [
      { name: "Grade", value: "SAE 0W-20" },
      { name: "Kinematic Viscosity @ 100°C, mm2/s", value: "8.5" },
      { name: "Viscosity Index", value: "150" }
    ],
    safety: "Refer to the product PDS for handling and safety information."
  },

  {
    id: "7",
    title: "Q8 Special D1 5W-30 4L",
    subtitle: "Full synthetic 5W-30 for modern engines",
    category: "Car Engine Oils",
    productCategoryId: 1, // Full Synthetic
    description:
      "Q8 Special D1 5W-30 is a high-performance synthetic oil formulated for modern passenger cars, providing deposit control and protection under varied operating conditions.",
    image: "/images/products/CVO/Q8 Special D1 5W-30 4L.jpeg",
    pdsUrl: "/images/pds/Q8-Formula-Special-D1-5W-30_en.pdf",
    pdsFilename: "Q8-Formula-Special-D1-5W-30_en.pdf",

    features: [
      "Strong wear protection and deposit control",
      "Good fuel economy characteristics",
      "Stable performance across temperature ranges"
    ],
    applications: ["Passenger cars and light commercial vehicles"],
    specifications: ["API SP"],
    properties: [
      { name: "Grade", value: "SAE 5W-30" },
      { name: "Kinematic Viscosity @ 100°C, mm2/s", value: "10.5" }
    ],
    safety: "See PDS for personal protective and handling information."
  },

  {
    id: "8",
    title: "Q8 Formula Advanced 10W-40",
    subtitle: "Semi-synthetic performance engine oil",
    category: "Car Engine Oils",
    productCategoryId: 2, // Semi Synthetic
    description:
      "Q8 Formula Advanced 10W-40 is a semi-synthetic oil offering robust protection for a wide range of petrol and diesel engines.",
    image: "/images/products/CVO/Q8 Formula Advanced 10W-40.jpeg",
    pdsUrl: "/images/pds/Q8-Formula-Advanced-10W-40_en.pdf",
    pdsFilename: "Q8-Formula-Advanced-10W-40_en.pdf",

    features: [
      "Good deposit control and oxidation stability",
      "Reliable protection in high-temperature operation",
      "Suitable for a broad range of engine types"
    ],
    applications: ["Passenger cars", "Light commercial vehicles"],
    specifications: ["ACEA A3/B4"],
    properties: [
      { name: "Grade", value: "SAE 10W-40" },
      { name: "Kinematic Viscosity @ 100°C, mm2/s", value: "14.0" }
    ],
    safety: "Refer to PDS for full health and safety guidance."
  },

  {
    id: "9",
    title: "Q8 Formula Plus 20W-50",
    subtitle: "High-viscosity mineral engine oil",
    category: "Car Engine Oils",
    productCategoryId: 3, // Mineral
    description:
      "Q8 Formula Plus 20W-50 is a mineral oil formulated for older vehicles and high-load applications requiring a thicker lubricant.",
    image: "/images/products/CVO/Q8 Formula Plus 20W-501.jpeg",
    pdsUrl: "/images/pds/Q8-Formula-Plus-20W-50_en.pdf",
    pdsFilename: "Q8-Formula-Plus-20W-50_en.pdf",

    features: ["Robust film strength", "Good protection for older engines", "Stable under high loads"],
    applications: ["Older petrol and diesel engines", "High mileage vehicles"],
    specifications: [],
    properties: [{ name: "Grade", value: "SAE 20W-50" }],
    safety: "Consult the PDS for handling and PPE."
  },
  //bus truck engine oils products
   {
    id: "10",
    title: "Q8 T 750 15W-40",
    subtitle: "High-performance circulating oil",
    category: "Bus & Truck Engine Oils",
    productCategoryId: 3, // Mineral
    description:
      "Q8 Super™ All-in-One Protection 0W-16 helps keep the engine clean and running efficiently. Q8 Super™ All-in-One Protection 0W-16 is a full synthetic motor oil which is known for its improvement of fuel saving, performance while reducing emissions to give great protection and performance.",
    image: "/images/products/CVO/Q8 T 750 15W-40.jpeg",
    pdsUrl: "/images/pds/Q8-T-750-15W-40_en-36.pdf",
    pdsFilename: "Q8-T-750-15W-40_en-36.pdf",
    features: [ 
      "Designed for modern and highly efficient gasoline and hybrid engines",
      "Helps extend engine life",
      "Outstanding wear protection for vehicles of all ages",
      "Excellent high temperature protection",
      "Permits extended operation at elevated temperatures without oxidative oil thickening and oil breakdown",
      "Allows easy starting and rapid oil circulation during cold starts to protect critical engine parts",
      "Meets or exceeds ILSAC GF-6B / API SP."
    ],
    applications: [
      "Passenger cars and light commercial vehicles",
      "Service fills and aftermarket replacement"
    ],
    specifications: ["API SP", "ILSAC GF-6B"],
    properties: [
      { name: "Grade", value: "SAE 0W-16" },
      { name: "Ash, Sulfated, mass%, ASTM D874", value: "0.7" },
      { name: "Density @ 15°C, g/ml, ASTM D1298", value: "0.845" },
      { name: "Flash Point, Cleveland Open Cup, °C, ASTM D92", value: "236" },
      { name: "Hi-Temp Hi-Shear Viscosity @ 150°C, mPa.s, ASTM D4683", value: "2.3" },
      { name: "Kinematic Viscosity @ 100°C, mm2/s, ASTM D445", value: "7" },
      { name: "Kinematic Viscosity @ 40°C, mm2/s, ASTM D445", value: "36" },
      { name: "Pour Point, °C, ASTM D97", value: "-42" },
      { name: "Total Base Number, mgKOH/g, ASTM D2896", value: "7.4" },
      { name: "Viscosity Index, ASTM D2270", value: "163" },
      { name: "Mini-Rotary Viscometer, Apparent Viscosity, -40°C, mPa.s, ASTM D4684", value: "42000" }
    ],
    safety: "Refer to the product PDS and MSDS for handling, storage and disposal guidance."
  },
  {
    id: "11",
    title: "Q8 T 520 20W-50",
    subtitle: "High-viscosity mineral engine oil",
    category: "Bus & Truck Engine Oils",
    productCategoryId: 3, // Mineral
    description:
      "Q8 Formula Plus 20W-50 is a mineral oil formulated for older vehicles and high-load applications requiring a thicker lubricant.",
    image: "/images/products/CVO/Q8 T 520 20W-50.jpeg",
    pdsUrl: "/images/pds/Q8-T-520-20W-50_en.pdf",
    pdsFilename: "Q8-T-520-20W-50_en.pdf",

    features: ["Robust film strength", "Good protection for older engines", "Stable under high loads"],
    applications: ["Older petrol and diesel engines", "High mileage vehicles"],
    specifications: [],
    properties: [{ name: "Grade", value: "SAE 20W-50" }],
    safety: "Consult the PDS for handling and PPE."
  },
  
   {
    id: "12",
    title: "Q8 T 520 20W-50 ",
    subtitle: "High-performance circulating oil",
    category: "Bus & Truck Engine Oils",
    productCategoryId: 3, // Mineral
    description:
      "Q8 Super™ All-in-One Protection 0W-16 helps keep the engine clean and running efficiently. Q8 Super™ All-in-One Protection 0W-16 is a full synthetic motor oil which is known for its improvement of fuel saving, performance while reducing emissions to give great protection and performance.",
    image: "/images/products/CVO/Q8 T 520 20W-50.jpeg",
   pdsUrl: "/images/pds/Q8-T-520-20W-50_en.pdf",
    pdsFilename: "Q8-T-520-20W-50_en.pdf",
    features: [ 
      "Designed for modern and highly efficient gasoline and hybrid engines",
      "Helps extend engine life",
      "Outstanding wear protection for vehicles of all ages",
      "Excellent high temperature protection",
      "Permits extended operation at elevated temperatures without oxidative oil thickening and oil breakdown",
      "Allows easy starting and rapid oil circulation during cold starts to protect critical engine parts",
      "Meets or exceeds ILSAC GF-6B / API SP."
    ],
    applications: [
      "Passenger cars and light commercial vehicles",
      "Service fills and aftermarket replacement"
    ],
    specifications: ["API SP", "ILSAC GF-6B"],
    properties: [
      { name: "Grade", value: "SAE 0W-16" },
      { name: "Ash, Sulfated, mass%, ASTM D874", value: "0.7" },
      { name: "Density @ 15°C, g/ml, ASTM D1298", value: "0.845" },
      { name: "Flash Point, Cleveland Open Cup, °C, ASTM D92", value: "236" },
      { name: "Hi-Temp Hi-Shear Viscosity @ 150°C, mPa.s, ASTM D4683", value: "2.3" },
      { name: "Kinematic Viscosity @ 100°C, mm2/s, ASTM D445", value: "7" },
      { name: "Kinematic Viscosity @ 40°C, mm2/s, ASTM D445", value: "36" },
      { name: "Pour Point, °C, ASTM D97", value: "-42" },
      { name: "Total Base Number, mgKOH/g, ASTM D2896", value: "7.4" },
      { name: "Viscosity Index, ASTM D2270", value: "163" },
      { name: "Mini-Rotary Viscometer, Apparent Viscosity, -40°C, mPa.s, ASTM D4684", value: "42000" }
    ],
    safety: "Refer to the product PDS and MSDS for handling, storage and disposal guidance."
  },
  // MotorcycleProductShow
   {
    id: "13",
    title: "Q8 City 4T 10W-30 ",
    subtitle: "High-performance circulating oil",
    category: "Motorcycle Engine Oils",
    productCategoryId: 1, // Full Synthetic
    description:
      "Q8 Super™ All-in-One Protection 0W-16 helps keep the engine clean and running efficiently. Q8 Super™ All-in-One Protection 0W-16 is a full synthetic motor oil which is known for its improvement of fuel saving, performance while reducing emissions to give great protection and performance.",
    image: "/images/products/CVO/Q8 City 4T 10W-30.jpeg",
    pdsUrl: "/images/pds/Q8-City-4T-10W-30_en.pdf",
    pdsFilename: "Q8-City-4T-10W-30_en.pdf",
    features: [ 
      "Designed for modern and highly efficient gasoline and hybrid engines",
      "Helps extend engine life",
      "Outstanding wear protection for vehicles of all ages",
      "Excellent high temperature protection",
      "Permits extended operation at elevated temperatures without oxidative oil thickening and oil breakdown",
      "Allows easy starting and rapid oil circulation during cold starts to protect critical engine parts",
      "Meets or exceeds ILSAC GF-6B / API SP."
    ],
    applications: [
      "Passenger cars and light commercial vehicles",
      "Service fills and aftermarket replacement"
    ],
    specifications: ["API SP", "ILSAC GF-6B"],
    properties: [
      { name: "Grade", value: "SAE 0W-16" },
      { name: "Ash, Sulfated, mass%, ASTM D874", value: "0.7" },
      { name: "Density @ 15°C, g/ml, ASTM D1298", value: "0.845" },
      { name: "Flash Point, Cleveland Open Cup, °C, ASTM D92", value: "236" },
      { name: "Hi-Temp Hi-Shear Viscosity @ 150°C, mPa.s, ASTM D4683", value: "2.3" },
      { name: "Kinematic Viscosity @ 100°C, mm2/s, ASTM D445", value: "7" },
      { name: "Kinematic Viscosity @ 40°C, mm2/s, ASTM D445", value: "36" },
      { name: "Pour Point, °C, ASTM D97", value: "-42" },
      { name: "Total Base Number, mgKOH/g, ASTM D2896", value: "7.4" },
      { name: "Viscosity Index, ASTM D2270", value: "163" },
      { name: "Mini-Rotary Viscometer, Apparent Viscosity, -40°C, mPa.s, ASTM D4684", value: "42000" }
    ],
    safety: "Refer to the product PDS and MSDS for handling, storage and disposal guidance."
  },
   {
    id: "14",
    title: "Q8 Sport 4T 10W-40",
    subtitle: "High-performance circulating oil",
    category: "Motorcycle Engine Oils",
    productCategoryId: 1, // Full Synthetic
    description:
      "Q8 Super™ All-in-One Protection 0W-16 helps keep the engine clean and running efficiently. Q8 Super™ All-in-One Protection 0W-16 is a full synthetic motor oil which is known for its improvement of fuel saving, performance while reducing emissions to give great protection and performance.",
    image: "/images/products/CVO/Q8 Sport 4T 10W-40.jpeg",
    pdsUrl: "/images/pds/Q8-Sport-4T-10W-40_en.pdf",
    pdsFilename: "Q8-Sport-4T-10W-40_en.pdf",
    features: [ 
      "Designed for modern and highly efficient gasoline and hybrid engines",
      "Helps extend engine life",
      "Outstanding wear protection for vehicles of all ages",
      "Excellent high temperature protection",
      "Permits extended operation at elevated temperatures without oxidative oil thickening and oil breakdown",
      "Allows easy starting and rapid oil circulation during cold starts to protect critical engine parts",
      "Meets or exceeds ILSAC GF-6B / API SP."
    ],
    applications: [
      "Passenger cars and light commercial vehicles",
      "Service fills and aftermarket replacement"
    ],
    specifications: ["API SP", "ILSAC GF-6B"],
    properties: [
      { name: "Grade", value: "SAE 0W-16" },
      { name: "Ash, Sulfated, mass%, ASTM D874", value: "0.7" },
      { name: "Density @ 15°C, g/ml, ASTM D1298", value: "0.845" },
      { name: "Flash Point, Cleveland Open Cup, °C, ASTM D92", value: "236" },
      { name: "Hi-Temp Hi-Shear Viscosity @ 150°C, mPa.s, ASTM D4683", value: "2.3" },
      { name: "Kinematic Viscosity @ 100°C, mm2/s, ASTM D445", value: "7" },
      { name: "Kinematic Viscosity @ 40°C, mm2/s, ASTM D445", value: "36" },
      { name: "Pour Point, °C, ASTM D97", value: "-42" },
      { name: "Total Base Number, mgKOH/g, ASTM D2896", value: "7.4" },
      { name: "Viscosity Index, ASTM D2270", value: "163" },
      { name: "Mini-Rotary Viscometer, Apparent Viscosity, -40°C, mPa.s, ASTM D4684", value: "42000" }
    ],
    safety: "Refer to the product PDS and MSDS for handling, storage and disposal guidance."
  },
   {
    id: "15",
    title: "Q8 Racing 4T 10W-50",
    subtitle: "High-performance circulating oil",
    category: "Motorcycle Engine Oils",
    productCategoryId: 1, // Full Synthetic
    description:
      "Q8 Super™ All-in-One Protection 0W-16 helps keep the engine clean and running efficiently. Q8 Super™ All-in-One Protection 0W-16 is a full synthetic motor oil which is known for its improvement of fuel saving, performance while reducing emissions to give great protection and performance.",
    image: "/images/products/CVO/Q8 Racing 10W-50.jpeg",
    pdsUrl: "/images/pds/Q8-Racing-4T-10W-50_en.pdf",
    pdsFilename: "Q8-Racing-4T-10W-50_en.pdf",
    features: [ 
      "Designed for modern and highly efficient gasoline and hybrid engines",
      "Helps extend engine life",
      "Outstanding wear protection for vehicles of all ages",
      "Excellent high temperature protection",
      "Permits extended operation at elevated temperatures without oxidative oil thickening and oil breakdown",
      "Allows easy starting and rapid oil circulation during cold starts to protect critical engine parts",
      "Meets or exceeds ILSAC GF-6B / API SP."
    ],
    applications: [
      "Passenger cars and light commercial vehicles",
      "Service fills and aftermarket replacement"
    ],
    specifications: ["API SP", "ILSAC GF-6B"],
    properties: [
      { name: "Grade", value: "SAE 0W-16" },
      { name: "Ash, Sulfated, mass%, ASTM D874", value: "0.7" },
      { name: "Density @ 15°C, g/ml, ASTM D1298", value: "0.845" },
      { name: "Flash Point, Cleveland Open Cup, °C, ASTM D92", value: "236" },
      { name: "Hi-Temp Hi-Shear Viscosity @ 150°C, mPa.s, ASTM D4683", value: "2.3" },
      { name: "Kinematic Viscosity @ 100°C, mm2/s, ASTM D445", value: "7" },
      { name: "Kinematic Viscosity @ 40°C, mm2/s, ASTM D445", value: "36" },
      { name: "Pour Point, °C, ASTM D97", value: "-42" },
      { name: "Total Base Number, mgKOH/g, ASTM D2896", value: "7.4" },
      { name: "Viscosity Index, ASTM D2270", value: "163" },
      { name: "Mini-Rotary Viscometer, Apparent Viscosity, -40°C, mPa.s, ASTM D4684", value: "42000" }
    ],
    safety: "Refer to the product PDS and MSDS for handling, storage and disposal guidance."
  },
   {
    id: "16",
    title: "Q8 Allroads 4T 10W-40",
    subtitle: "High-performance circulating oil",
    category: "Motorcycle Engine Oils",
    productCategoryId: 4, // Synthetic Based
    description:
      "Q8 Super™ All-in-One Protection 0W-16 helps keep the engine clean and running efficiently. Q8 Super™ All-in-One Protection 0W-16 is a full synthetic motor oil which is known for its improvement of fuel saving, performance while reducing emissions to give great protection and performance.",
    image: "/images/products/CVO/Q8 Allroads 10w40.jpeg",
    pdsUrl: "/images/pds/Q8-Allroads-4T-10W-40_en.pdf",
    pdsFilename: "Q8-Allroads-4T-10W-40_en.pdf",
    features: [ 
      "Designed for modern and highly efficient gasoline and hybrid engines",
      "Helps extend engine life",
      "Outstanding wear protection for vehicles of all ages",
      "Excellent high temperature protection",
      "Permits extended operation at elevated temperatures without oxidative oil thickening and oil breakdown",
      "Allows easy starting and rapid oil circulation during cold starts to protect critical engine parts",
      "Meets or exceeds ILSAC GF-6B / API SP."
    ],
    applications: [
      "Passenger cars and light commercial vehicles",
      "Service fills and aftermarket replacement"
    ],
    specifications: ["API SP", "ILSAC GF-6B"],
    properties: [
      { name: "Grade", value: "SAE 0W-16" },
      { name: "Ash, Sulfated, mass%, ASTM D874", value: "0.7" },
      { name: "Density @ 15°C, g/ml, ASTM D1298", value: "0.845" },
      { name: "Flash Point, Cleveland Open Cup, °C, ASTM D92", value: "236" },
      { name: "Hi-Temp Hi-Shear Viscosity @ 150°C, mPa.s, ASTM D4683", value: "2.3" },
      { name: "Kinematic Viscosity @ 100°C, mm2/s, ASTM D445", value: "7" },
      { name: "Kinematic Viscosity @ 40°C, mm2/s, ASTM D445", value: "36" },
      { name: "Pour Point, °C, ASTM D97", value: "-42" },
      { name: "Total Base Number, mgKOH/g, ASTM D2896", value: "7.4" },
      { name: "Viscosity Index, ASTM D2270", value: "163" },
      { name: "Mini-Rotary Viscometer, Apparent Viscosity, -40°C, mPa.s, ASTM D4684", value: "42000" }
    ],
    safety: "Refer to the product PDS and MSDS for handling, storage and disposal guidance."
  },

  //Vehicle Care Lubricants ProductShow
   {
    id: "17",
    title: "Q8 Auto CVT EVO",
    subtitle: "High-performance circulating oil",
    category: "Vehicle Lubricants",
    productCategoryId: 1, // Full Synthetic
    description:
      "Q8 Super™ All-in-One Protection 0W-16 helps keep the engine clean and running efficiently. Q8 Super™ All-in-One Protection 0W-16 is a full synthetic motor oil which is known for its improvement of fuel saving, performance while reducing emissions to give great protection and performance.",
    image: "/images/products/CVO/Q8 Auto CVT EVO.jpeg",
    pdsUrl: "/images/pds/Q8-Auto-CVT-EVO_en.pdf",
    pdsFilename: "Q8-Auto-CVT-EVO_en.pdf",
    features: [ 
      "Designed for modern and highly efficient gasoline and hybrid engines",
      "Helps extend engine life",
      "Outstanding wear protection for vehicles of all ages",
      "Excellent high temperature protection",
      "Permits extended operation at elevated temperatures without oxidative oil thickening and oil breakdown",
      "Allows easy starting and rapid oil circulation during cold starts to protect critical engine parts",
      "Meets or exceeds ILSAC GF-6B / API SP."
    ],
    applications: [
      "Passenger cars and light commercial vehicles",
      "Service fills and aftermarket replacement"
    ],
    specifications: ["API SP", "ILSAC GF-6B"],
    properties: [
      { name: "Grade", value: "SAE 0W-16" },
      { name: "Ash, Sulfated, mass%, ASTM D874", value: "0.7" },
      { name: "Density @ 15°C, g/ml, ASTM D1298", value: "0.845" },
      { name: "Flash Point, Cleveland Open Cup, °C, ASTM D92", value: "236" },
      { name: "Hi-Temp Hi-Shear Viscosity @ 150°C, mPa.s, ASTM D4683", value: "2.3" },
      { name: "Kinematic Viscosity @ 100°C, mm2/s, ASTM D445", value: "7" },
      { name: "Kinematic Viscosity @ 40°C, mm2/s, ASTM D445", value: "36" },
      { name: "Pour Point, °C, ASTM D97", value: "-42" },
      { name: "Total Base Number, mgKOH/g, ASTM D2896", value: "7.4" },
      { name: "Viscosity Index, ASTM D2270", value: "163" },
      { name: "Mini-Rotary Viscometer, Apparent Viscosity, -40°C, mPa.s, ASTM D4684", value: "42000" }
    ],
    safety: "Refer to the product PDS and MSDS for handling, storage and disposal guidance."
  },
   {
    id: "18",
    title: "Q8 Auto DCT EVO",
    subtitle: "High-performance circulating oil",
    category: "Vehicle Lubricants",
    productCategoryId: 1, // Full Synthetic
    description:
      "Q8 Super™ All-in-One Protection 0W-16 helps keep the engine clean and running efficiently. Q8 Super™ All-in-One Protection 0W-16 is a full synthetic motor oil which is known for its improvement of fuel saving, performance while reducing emissions to give great protection and performance.",
    image: "/images/products/3.png",
    pdsUrl: "/images/pds/Q8-Auto-DCT-EVO_en.pdf",
    pdsFilename: "Q8-Auto-DCT-EVO_en.pdf",
    features: [ 
      "Designed for modern and highly efficient gasoline and hybrid engines",
      "Helps extend engine life",
      "Outstanding wear protection for vehicles of all ages",
      "Excellent high temperature protection",
      "Permits extended operation at elevated temperatures without oxidative oil thickening and oil breakdown",
      "Allows easy starting and rapid oil circulation during cold starts to protect critical engine parts",
      "Meets or exceeds ILSAC GF-6B / API SP."
    ],
    applications: [
      "Passenger cars and light commercial vehicles",
      "Service fills and aftermarket replacement"
    ],
    specifications: ["API SP", "ILSAC GF-6B"],
    properties: [
      { name: "Grade", value: "SAE 0W-16" },
      { name: "Ash, Sulfated, mass%, ASTM D874", value: "0.7" },
      { name: "Density @ 15°C, g/ml, ASTM D1298", value: "0.845" },
      { name: "Flash Point, Cleveland Open Cup, °C, ASTM D92", value: "236" },
      { name: "Hi-Temp Hi-Shear Viscosity @ 150°C, mPa.s, ASTM D4683", value: "2.3" },
      { name: "Kinematic Viscosity @ 100°C, mm2/s, ASTM D445", value: "7" },
      { name: "Kinematic Viscosity @ 40°C, mm2/s, ASTM D445", value: "36" },
      { name: "Pour Point, °C, ASTM D97", value: "-42" },
      { name: "Total Base Number, mgKOH/g, ASTM D2896", value: "7.4" },
      { name: "Viscosity Index, ASTM D2270", value: "163" },
      { name: "Mini-Rotary Viscometer, Apparent Viscosity, -40°C, mPa.s, ASTM D4684", value: "42000" }
    ],
    safety: "Refer to the product PDS and MSDS for handling, storage and disposal guidance."
  },
   {
    id: "19",
    title: "Q8 Auto MV 1L",
    subtitle: "High-performance circulating oil",
    category: "Vehicle Lubricants",
    productCategoryId: 4, // Synthetic Based
    description:
      "Q8 Super™ All-in-One Protection 0W-16 helps keep the engine clean and running efficiently. Q8 Super™ All-in-One Protection 0W-16 is a full synthetic motor oil which is known for its improvement of fuel saving, performance while reducing emissions to give great protection and performance.",
    image: "/images/products/4.png",
      productCategoryId: 1, // Full Synthetic
    pdsUrl: "/images/pds/Q8-Auto-MV_en.pdf",
    pdsFilename: "Q8-Auto-MV_en.pdf",
    features: [ 
      "Designed for modern and highly efficient gasoline and hybrid engines",
      "Helps extend engine life",
      "Outstanding wear protection for vehicles of all ages",
      "Excellent high temperature protection",
      "Permits extended operation at elevated temperatures without oxidative oil thickening and oil breakdown",
      "Allows easy starting and rapid oil circulation during cold starts to protect critical engine parts",
      "Meets or exceeds ILSAC GF-6B / API SP."
    ],
    applications: [
      "Passenger cars and light commercial vehicles",
      "Service fills and aftermarket replacement"
    ],
    specifications: ["API SP", "ILSAC GF-6B"],
    properties: [
      { name: "Grade", value: "SAE 0W-16" },
      { name: "Ash, Sulfated, mass%, ASTM D874", value: "0.7" },
      { name: "Density @ 15°C, g/ml, ASTM D1298", value: "0.845" },
      { name: "Flash Point, Cleveland Open Cup, °C, ASTM D92", value: "236" },
      { name: "Hi-Temp Hi-Shear Viscosity @ 150°C, mPa.s, ASTM D4683", value: "2.3" },
      { name: "Kinematic Viscosity @ 100°C, mm2/s, ASTM D445", value: "7" },
      { name: "Kinematic Viscosity @ 40°C, mm2/s, ASTM D445", value: "36" },
      { name: "Pour Point, °C, ASTM D97", value: "-42" },
      { name: "Total Base Number, mgKOH/g, ASTM D2896", value: "7.4" },
      { name: "Viscosity Index, ASTM D2270", value: "163" },
      { name: "Mini-Rotary Viscometer, Apparent Viscosity, -40°C, mPa.s, ASTM D4684", value: "42000" }
    ],
    safety: "Refer to the product PDS and MSDS for handling, storage and disposal guidance."
  },
   {
    id: "20",
    title: "Q8 Auto JK 1L",
    subtitle: "High-performance circulating oil",
    category: "Vehicle Lubricants",
    productCategoryId: 4, // Synthetic Based
    description:
      "Q8 Super™ All-in-One Protection 0W-16 helps keep the engine clean and running efficiently. Q8 Super™ All-in-One Protection 0W-16 is a full synthetic motor oil which is known for its improvement of fuel saving, performance while reducing emissions to give great protection and performance.",
    image: "/images/products/CVO/Q8 Allroads 10w40.jpeg",
    productCategoryId: 1, // Full Synthetic
    pdsUrl: "/images/pds/Q8-Auto-JK_en.pdf",
    pdsFilename: "Q8-Auto-JK_en.pdf",
    features: [ 
      "Designed for modern and highly efficient gasoline and hybrid engines",
      "Helps extend engine life",
      "Outstanding wear protection for vehicles of all ages",
      "Excellent high temperature protection",
      "Permits extended operation at elevated temperatures without oxidative oil thickening and oil breakdown",
      "Allows easy starting and rapid oil circulation during cold starts to protect critical engine parts",
      "Meets or exceeds ILSAC GF-6B / API SP."
    ],
    applications: [
      "Passenger cars and light commercial vehicles",
      "Service fills and aftermarket replacement"
    ],
    specifications: ["API SP", "ILSAC GF-6B"],
    properties: [
      { name: "Grade", value: "SAE 0W-16" },
      { name: "Ash, Sulfated, mass%, ASTM D874", value: "0.7" },
      { name: "Density @ 15°C, g/ml, ASTM D1298", value: "0.845" },
      { name: "Flash Point, Cleveland Open Cup, °C, ASTM D92", value: "236" },
      { name: "Hi-Temp Hi-Shear Viscosity @ 150°C, mPa.s, ASTM D4683", value: "2.3" },
      { name: "Kinematic Viscosity @ 100°C, mm2/s, ASTM D445", value: "7" },
      { name: "Kinematic Viscosity @ 40°C, mm2/s, ASTM D445", value: "36" },
      { name: "Pour Point, °C, ASTM D97", value: "-42" },
      { name: "Total Base Number, mgKOH/g, ASTM D2896", value: "7.4" },
      { name: "Viscosity Index, ASTM D2270", value: "163" },
      { name: "Mini-Rotary Viscometer, Apparent Viscosity, -40°C, mPa.s, ASTM D4684", value: "42000" }
    ],
    safety: "Refer to the product PDS and MSDS for handling, storage and disposal guidance."
  },
   {
    id: "21",
    title: "Q8 Rubens WB /b",
    subtitle: "High-performance circulating oil",
    category: "Vehicle Lubricants",
    productCategoryId: 5, // Lithium Complex
    description:
      "Q8 Super™ All-in-One Protection 0W-16 helps keep the engine clean and running efficiently. Q8 Super™ All-in-One Protection 0W-16 is a full synthetic motor oil which is known for its improvement of fuel saving, performance while reducing emissions to give great protection and performance.",
    image: "/images/products/IndustrialProduct/2.png",
    pdsUrl: "/images/pds/Q8-Rubens-WB-b_en.pdf",
    pdsFilename: "Q8-Rubens-WB-b_en.pdf",
    features: [ 
      "Designed for modern and highly efficient gasoline and hybrid engines",
      "Helps extend engine life",
      "Outstanding wear protection for vehicles of all ages",
      "Excellent high temperature protection",
      "Permits extended operation at elevated temperatures without oxidative oil thickening and oil breakdown",
      "Allows easy starting and rapid oil circulation during cold starts to protect critical engine parts",
      "Meets or exceeds ILSAC GF-6B / API SP."
    ],
    applications: [
      "Passenger cars and light commercial vehicles",
      "Service fills and aftermarket replacement"
    ],
    specifications: ["API SP", "ILSAC GF-6B"],
    properties: [
      { name: "Grade", value: "SAE 0W-16" },
      { name: "Ash, Sulfated, mass%, ASTM D874", value: "0.7" },
      { name: "Density @ 15°C, g/ml, ASTM D1298", value: "0.845" },
      { name: "Flash Point, Cleveland Open Cup, °C, ASTM D92", value: "236" },
      { name: "Hi-Temp Hi-Shear Viscosity @ 150°C, mPa.s, ASTM D4683", value: "2.3" },
      { name: "Kinematic Viscosity @ 100°C, mm2/s, ASTM D445", value: "7" },
      { name: "Kinematic Viscosity @ 40°C, mm2/s, ASTM D445", value: "36" },
      { name: "Pour Point, °C, ASTM D97", value: "-42" },
      { name: "Total Base Number, mgKOH/g, ASTM D2896", value: "7.4" },
      { name: "Viscosity Index, ASTM D2270", value: "163" },
      { name: "Mini-Rotary Viscometer, Apparent Viscosity, -40°C, mPa.s, ASTM D4684", value: "42000" }
    ],
    safety: "Refer to the product PDS and MSDS for handling, storage and disposal guidance."
  },


];



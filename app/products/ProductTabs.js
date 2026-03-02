"use client";

import { useState } from "react";

const TABS = [
  { key: "features", label: "Features & Benefits" },
  { key: "applications", label: "Applications" },
  { key: "specs", label: "Specifications & Approvals" },
  { key: "properties", label: "Properties & Specifications" },
  { key: "safety", label: "Health & Safety" },
];

function FeaturesList({ items }) {
  if (!items) return <p className="text-gray-500">No information available.</p>;
  return (
    <ul className="space-y-0 ">
      {items.map((item, i) => (
        <li key={i} className="py-6 px-2 border-b border-black last:border-b-0 font-semibold text-gray-900 ">
          {item}
        </li>
      ))}
    </ul>
  );
}

function SimpleList({ items }) {
  if (!items) return <p className="text-gray-500">No information available.</p>;
  return (
    <ul className="list-disc pl-6 space-y-2 text-gray-700">
      {items.map((it, i) => (
        <li key={i} className="py-6 px-2 border-b border-black last:border-b-0 font-semibold text-gray-900 ">{it}</li>
      ))}
    </ul>
  );
}

function PropertiesTable({ rows }) {
  if (!rows || rows.length === 0) return <p className="text-gray-500 ">No properties available.</p>;
  return (
    <div className="w-full ">
      {rows.map((r, i) => (
        <div key={i} className="grid grid-cols-12 gap-4 items-center py-6 border-b border-black last:border-b-0  ">
          <div className="col-span-12 lg:col-span-8 text-gray-800 font-medium">
            {r.name}
          </div>
          <div className="col-span-12 lg:col-span-4 text-right text-gray-700">
            {r.value}
          </div>
        </div>
      ))}
    </div>
  );
}

export default function ProductTabs({ product }) {
  const [active, setActive] = useState(TABS[0].key);

  const data = {
    features: product?.features || product?.featuresAndBenefits || null,
    applications: product?.applications || null,
    specs: product?.specifications || product?.specs || product?.approvals || null,
    properties: product?.properties || product?.propertiesAndSpecifications || null,
    safety: product?.safety || product?.healthAndSafety || null,
  };

  return (
    <section className="max-w-6xl mx-auto px-2 py-12 lg:pb-40">
      <nav className="flex items-stretch gap-0 border-b border-black lg:mb-20 ">
        {TABS.map((t) => {
          const isActive = active === t.key;
          return (
            <button
              key={t.key}
              onClick={() => setActive(t.key)}
              role="tab"
              aria-selected={isActive}
              className={`relative overflow-hidden text-[10px] px-2 py-2 font-sans lg:px-6 lg:py-4 lg:text-sm lg:font-semibold border-r border-r-black last:border-r-0  group`}
            >
              {/* animated background: scales Y from bottom */}
              <span
                aria-hidden="true"
                className={`absolute inset-0 bg-gray-900 transform origin-bottom transition-transform duration-300 ease-in-out ${
                  isActive ? "scale-y-100" : "scale-y-0 group-hover:scale-y-100"
                }`}
              />

              {/* label above the animated bg */}
              <span
                className={`relative z-10 transition-colors duration-200 ${
                  isActive ? "text-white" : "text-gray-700 group-hover:text-white"
                }`}
              >
                {t.label}
              </span>
            </button>
          );
        })}
      </nav>

      <div className="mt-6 " />

      <div className="mt-8" role="tabpanel">
        {active === "features" && <FeaturesList items={data.features} />}
        {active === "applications" && <SimpleList items={data.applications} />}
        {active === "specs" && <SimpleList items={data.specs} />}
        {active === "properties" && <PropertiesTable rows={data.properties} />}
        {active === "safety" && <div className="prose text-gray-700">{data.safety || <p>No information available.</p>}</div>}
      </div>
    </section>
  );
}
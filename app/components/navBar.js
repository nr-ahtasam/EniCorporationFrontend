'use client'

import Image from "next/image";
import Link from "next/link";
import React, { useState, useRef, useEffect } from "react";

// Unified menu array for both desktop and mobile
const MENUS = [
  { label: "Home", url: "/" },
  {
    label: "About",
    items: [
      { label: "About ENI", url: "/about" },
      { label: "About Q8Oils", url: "https://www.q8oils.com/about/" },
      { label: "About Paramount", url: "https://www.paramountenergysg.com/about-us" }
    ],
  },
  {
    label: "Products",
    items: [
      {
        label: "Automotive Lubricants",url: "/products/car-engine-oils",
        items: [
          { label: "Car Engine Oils", url: "/products/car-engine-oils" },
          { label: "Motorcycle Engine Oils", url: "/products/motorcycle-engine-oils" },
          { label: "Bus & Truck Engine Oils", url: "/products/bus-truck-engine-oils" },
          { label: "Vehicle Care & Other Lubricants", url: "/products/vehicle-care-lubricants" },
        ],
      },
      { label: "Industrial & Specialty Lubricants", url: "/products/industrial-specialty" },
    ],
  },

  { label: "Our Services", url: "/OurServices" },
  
  {
    label: "Media Center",
    items: [
      { label: "Galary" },
      { label: "Events" },
      { label: "Announcements" },
    ],
  },
  {
    label: "Sustainability",
    items: [
      { label: "Our Approach to Sustainability", url: "/sustainability/ApproachSustainability" },
      { label: "Environment", url: "/sustainability/Environment" },
      { label: "Social", url: "/sustainability/Social" },
      { label: "Governance", url: "/sustainability/Governances" },
      { label: "People", url: "/sustainability/People" },
      { label: "Community Development", url: "/sustainability/Community" },
      { label: "Sustainability Reports", url: "/sustainability/SustainabilityReports" },
    ],
  },
  { label: "Article", url: "/articles" },
  { label: "Contact", url: "/contact" },
];


function NavBar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  // isOpen: index of open menu, or null
  const [isOpen, setIsOpen] = useState(null);
  // mobileSubmenuOpen: object keyed by menu index
  const [mobileSubmenuOpen, setMobileSubmenuOpen] = useState({});
  const [activeIndex, setActiveIndex] = useState(0); // Home is active by default
  const [showSearch, setShowSearch] = useState(false);

  // ref for desktop nav area to detect outside clicks
  const desktopNavRef = useRef(null);

  const toggleMobile = () => setMobileOpen((s) => !s);
  // For desktop: clicking a menu with submenu toggles only that submenu
  const toggleMenu = (i) => setIsOpen((cur) => (cur === i ? null : i));
  // For mobile: toggle submenu open state by key path
  const toggleMobileSubmenu = (key) => {
    setMobileSubmenuOpen((prev) => ({ ...prev, [key]: !prev[key] }));
  };
  const openSearch = () => setShowSearch(true);
  const closeSearch = () => setShowSearch(false);

  // close desktop dropdowns when user clicks outside the desktop nav area
  useEffect(() => {
    function handleDocumentClick(event) {
      const target = event.target;
      // if click is outside the desktop nav wrapper, close the dropdowns
      if (desktopNavRef.current && !desktopNavRef.current.contains(target)) {
        setOpenIndex(null);
      }
    }

    document.addEventListener("mousedown", handleDocumentClick);
    return () => document.removeEventListener("mousedown", handleDocumentClick);
  }, []);

  // State for scroll direction and navbar visibility
  const [showNavbar, setShowNavbar] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY.current && currentScrollY > 60) {
        // Scrolling down
        setShowNavbar(false);
      } else {
        // Scrolling up
        setShowNavbar(true);
      }
      lastScrollY.current = currentScrollY;
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 bg-[#ececec] transition-transform duration-300 ${showNavbar ? 'translate-y-0' : '-translate-y-full'}`}
    >
      {/* Mobile header: logos + hamburger */}
      <div className="md:hidden flex items-center justify-between px-4 py-3 ">
        <Link href="/" className="flex items-center gap-4">
          <Image src="/images/logo/paramount-logo.png" alt="Paramount Logo" width={48} height={24} className="object-contain" />
          <Image src="/images/logo/q8oils-logo.png" alt="ENI Logo" width={96} height={32} className="object-contain" />
        </Link>
        <button
          aria-label="Open menu"
          onClick={toggleMobile}
          className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#222]"
        >
          <svg className="w-7 h-7 text-[#222]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Desktop header */}
      <div className="hidden md:block " ref={desktopNavRef}>
        <div className="container mx-auto  sm:px-6 lg:px-2 ">
          <div className=" flex  justify-between xl:h-24 lg:h-16">
            {/* Brand & tagline */}
            <div className="flex justify-center items-center gap-6">
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-4">
                  <Link href="/">
                    <Image src="/images/logo/Q8-Logo.png" alt="ENI Logo"  width={56} height={24} className="object-contain" />
                  </Link>
                  <Link href="/">
                    <Image src="/images/logo/paramount-logo.png" alt="Paramount Logo" width={48} height={24} className="object-contain" />
                  </Link>
                </div>
                <span className="border border-black lg:h-12 xl:h-16 mx-4"></span>
                <div className="flex flex-col">
                  <span className="  lg:text-[12px] xl:text-xs text-gray-600  ">brought to you by</span>
                  <Link href="/">
                  <span className="lg:text-[18px] xl:text-[18px] font-extrabold text-black">ENI Corporation</span>
                  </Link>
                </div>
                </div>
              </div>
            {/* Right actions */}
            <div className="flex items-center gap-2 ">

                <Link href="/products/car-engine-oils" className="inline-flex items-center gap-2 sm:px-2 sm:py-2 lg:px-3 lg:py-2 xl:px-4 xl:py-2 bg-[#222] text-white rounded-full text-sm font-semibold  transition-colors  hover:bg-[#ff0033] lg:text-[12px] xl:text-[14px]}">
                <svg className="lg:w-4 lg:h-4 xl:w-6 xl:h-6 " viewBox="0 0 24 24" fill="none" aria-hidden>
                  <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2 6m12-6l2 6m-8 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm6 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span>Buy Now</span>
              </Link>
              <button
                aria-label="Search"
                className="inline-flex items-center gap-2  bg-[#222] sm:px-2 sm:py-2 lg:px-3 lg:py-2 xl:px-4 xl:py-2 text-white rounded-full text-sm font-semibold hover:bg-[#333] transition-colors"
                onClick={openSearch}
              >
                <svg className="lg:w-4 lg:h-4 xl:w-6 xl:h-6" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <path d="M21 21l-4.35-4.35M10.5 18a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span>Search</span>
              </button>
                  
            
              <a href="tel:+880 1313-420661" className="inline-flex items-center gap-2 sm:px-2 sm:py-2 lg:px-3 lg:py-2 xl:px-3 xl:py-2 bg-[#ff0033]  text-white rounded-full text-sm font-bold hover:bg-[#e6002e] transition-colors">
                <svg className="lg:w-4 lg:h-4 xl:w-6 xl:h-6 animate-ping" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span>+880 1313-420661</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Search Overlay (after desktop header) */}
      {showSearch && (
        <>
          {/* Overlay background for focus */}
          <div className="fixed inset-0 z-998 bg-opacity-20 w-full transition duration-2000 " onClick={closeSearch}></div>
          {/* Top-aligned search modal */}
          <div className="absolute left-0 top-24 w-full z-999 flex justify-center transition-all duration-500">
            <div className="w-full   mx-auto px-8 pt-10 pb-6 bg-white rounded-b-xl shadow-xl relative border-b border-gray-200">
              <div className="container mx-auto">
              <button
                className="absolute right-4 top-4 text-2xl text-gray-700 hover:text-black focus:outline-none"
                onClick={closeSearch}
                aria-label="Close search"
                >
                &#10005;
              </button>
              <div className="flex items-center gap-3 mb-4">
                
                <svg className="w-6 h-6 text-[#e6002e]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M21 21l-4.35-4.35M10.5 18a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <input
                  type="text"
                  placeholder="Search"
                  className="text-3xl font-light text-gray-400 border-0 outline-none bg-transparent flex-1 placeholder-gray-400"
                  style={{ minWidth: 200 }}
                  />
                <span className="text-xs text-gray-500 cursor-pointer hover:underline">Search</span>
              </div>
              <hr className="border-t border-gray-400 mb-4" />
              <div className="mb-2">
                <span className="text-xs text-[#e6002e] font-semibold">Popular searches</span>
              </div>
              <div className="flex gap-8 mb-2">
                <span className="text-base font-semibold text-black cursor-pointer hover:underline">Car engine oil</span>
                <span className="text-base font-semibold text-black cursor-pointer hover:underline">Career</span>
                <span className="text-base font-semibold text-black cursor-pointer hover:underline">Contact</span>
                  </div>
              </div>
            </div>
          </div>
        </>
      )}
          {/* Main nav */} 


        {/* ...existing code... */}
      {/* Desktop/Laptop nav only */}
      <div className="md:block hidden">
        <div className=" sm:px-6  bg-[#20419a] lg:py-1 xl:py-4 ">
          <nav className="container mx-auto flex items-center justify-between mt-2 text-sm">
            <ul className="flex-1 flex items-center justify-between gap-8">
              {MENUS.map((menu, idx) => {
                const isActive = activeIndex === idx;
                const isMenuOpen = isOpen === idx;
                return (
                  <li
                    key={menu.label}
                    className={`font-semibold relative  pb-1`}
                  >
                    <button
                      type="button"
                      onClick={() => {
                        if (menu.items) {
                          toggleMenu(idx);
                        } else {
                          setActiveIndex(idx);
                          setIsOpen(null);
                        }
                      }}
                      className={`inline-flex items-center transition-colors text-white   font-light font-poppins ${isActive ? 'text-red-600' : 'text-gray-900 hover:text-red-600'}`}
                    >
                      {menu.url ? (
                        <Link href={menu.url} onClick={() => { setActiveIndex(idx); setIsOpen(null); }}>{menu.label}</Link>
                      ) : (
                        menu.label
                      )}
                      {menu.items && (
                        <span className="ml-1 inline-block align-middle">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                          </svg>
                        </span>
                      )}
                    </button>
                    {/* Animated bottom border */}
                    <span className={`absolute bottom-0 left-0 h-0.5 bg-red-500 transition-all duration-300 ${isActive ? 'w-full' : 'w-0'}`}></span>
                    {menu.items && (
                      <ul className={`absolute left-0 mt-1 w-56  bg-white border border-blue-600 rounded shadow-lg py-2 transition-all ${isMenuOpen ? 'opacity-100 pointer-events-auto translate-y-0' : 'opacity-0  -translate-y-1'}`}>
                        {menu.items.map((item) => (
                          <li key={item.label} className={item.items ? "group/item relative" : ""}>
                            {item.url ? (
                              item.url.startsWith("/") ? (
                                <Link
                                  href={item.url}
                                  className="block px-4 py-2 font-extralight text-sm text-gray-700 hover:text-red-600 hover:bg-red-50 whitespace-nowrap overflow-hidden text-ellipsis"
                                  onClick={() => {
                                    setActiveIndex(idx);
                                    setOpenIndex(null);
                                  }}
                                >
                                  {item.label}
                                </Link>
                              ) : (
                                <a
                                  href={item.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="block px-4 py-2 font-extralight text-sm text-gray-700 hover:text-red-600 hover:bg-red-50 whitespace-nowrap overflow-hidden text-ellipsis"
                                  onClick={() => {
                                    setActiveIndex(idx);
                                    setOpenIndex(null);
                                  }}
                                >
                                  {item.label}
                                </a>
                              )
                            ) : (
                              <span className="block px-4 py-2 font-extralight text-sm text-gray-700 hover:text-red-600 hover:bg-red-50 whitespace-nowrap overflow-hidden text-ellipsis cursor-pointer"
                                onClick={() => {
                                  setActiveIndex(idx);
                                  setOpenIndex(null);
                                }}
                              >
                                {item.label}
                              </span>
                            )}
                            {item.items && (
                              <ul className="absolute left-full top-0 ml-1 mt-0 w-56 bg-white border border-blue-600 rounded shadow-lg py-2 opacity-0 group-hover/item:opacity-100 group-hover/item:pointer-events-auto transition-opacity">
                                {item.items.map((sub) => (
                                  <li key={sub.label}>
                                    {sub.url ? (
                                      sub.url.startsWith("/") ? (
                                        <Link
                                          href={sub.url}
                                          className="block px-4 py-2 font-extralight text-sm text-gray-700 hover:text-red-600 hover:bg-red-50 whitespace-nowrap overflow-hidden text-ellipsis"
                                          onClick={() => {
                                            setActiveIndex(idx);
                                            setOpenIndex(null);
                                          }}
                                        >
                                          {sub.label}
                                        </Link>
                                      ) : (
                                        <a
                                          href={sub.url}
                                          target="_blank"
                                          rel="noopener noreferrer"
                                          className="block px-4 py-2 font-extralight text-sm text-gray-700 hover:text-red-600 hover:bg-red-50 whitespace-nowrap overflow-hidden text-ellipsis"
                                          onClick={() => {
                                            setActiveIndex(idx);
                                            setOpenIndex(null);
                                          }}
                                        >
                                          {sub.label}
                                        </a>
                                      )
                                    ) : (
                                      <span className="block px-4 py-2 font-extralight text-sm text-gray-700 hover:text-red-600 hover:bg-red-50 whitespace-nowrap overflow-hidden text-ellipsis"
                                        onClick={() => {
                                          setActiveIndex(idx);
                                          setOpenIndex(null);
                                        }}
                                      >
                                        {sub.label}
                                      </span>
                                    )}
                                  </li>
                                ))}
                              </ul>
                            )}
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </div>
      {/* </div> */}
      {/* Mobile menu: slide-in from left */}
      <div className={`fixed inset-0 z-50 md:hidden transition-all duration-300 ${mobileOpen ? "" : "pointer-events-none"}`}>
        <div className={`absolute inset-0 bg-white bg-opacity-30 transition-opacity duration-300 ${mobileOpen ? "opacity-100" : "opacity-0"}`} onClick={toggleMobile}></div>
        <div className={`fixed top-0 left-0 h-full w-80 bg-white shadow-lg border-r border-gray-200 transform transition-transform duration-300 ${mobileOpen ? "translate-x-0" : "-translate-x-full"}`}>
          <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100">
            <div className="flex items-center gap-4">
              <Image src="/images/logo/paramount-logo.png" alt="Paramount Logo" width={48} height={24} className="object-contain" />
              <Image src="/images/logo/q8oils-logo.png" alt="ENI Logo" width={96} height={32} className="object-contain" />
            </div>
            <button aria-label="Close menu" onClick={toggleMobile} className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#222]">
              <svg className="w-7 h-7 text-[#222]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <ul className="px-4 py-3 space-y-1 bg-white ">
            {MENUS.map((m, i) => {
              const submenuKey = `main-${i}`;
              const isMobileSubOpen = !!mobileSubmenuOpen[submenuKey];
              const hasSub = !!m.items;
              return (
                <li key={m.label} className="flex flex-col">
                  {/* If menu has sub-items, show toggle, else navigate */}
                  {hasSub ? (
                    <button
                      onClick={() => toggleMobileSubmenu(submenuKey)}
                      className="w-full flex items-center justify-between px-2 py-2 text-left text-gray-800 hover:bg-gray-50 rounded-md"
                    >
                      <span className="text-sm font-medium">{m.label}</span>
                      <svg className={`w-4 h-4 transition-transform ${isMobileSubOpen ? "rotate-180" : ""}`} viewBox="0 0 24 24" fill="none" aria-hidden>
                        <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>
                  ) : m.url ? (
                    m.url.startsWith("/") ? (
                      <Link
                        href={m.url}
                        className={`w-full flex items-center justify-between px-2 py-2 text-left ${m.label === "Home" ? "text-red-600 font-semibold border-red-500" : "text-gray-800 hover:bg-gray-50"} rounded-md`}
                        onClick={() => {
                          setMobileOpen(false);
                          setIsOpen(null);
                          setActiveIndex(i);
                        }}
                      >
                        <span className="text-sm font-medium">{m.label}</span>
                      </Link>
                    ) : (
                      <a
                        href={m.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`w-full flex items-center justify-between px-2 py-2 text-left text-gray-800 hover:bg-gray-50 rounded-md`}
                        onClick={() => {
                          setMobileOpen(false);
                          setIsOpen(null);
                          setActiveIndex(i);
                        }}
                      >
                        <span className="text-sm font-medium">{m.label}</span>
                      </a>
                    )
                  ) : null}
                  {/* Submenu for mobile */}
                  {hasSub && isMobileSubOpen && (
                    <ul className="pl-4 mt-1 space-y-1">
                      {m.items.map((it, j) => {
                        const subKey = `${submenuKey}-sub-${j}`;
                        const isSubOpen = !!mobileSubmenuOpen[subKey];
                        const hasSubSub = !!it.items;
                        return (
                          <li key={it.label} className="flex flex-col">
                            {hasSubSub ? (
                              <button
                                onClick={() => toggleMobileSubmenu(subKey)}
                                className="w-full flex items-center justify-between px-2 py-2 text-left text-gray-800 hover:bg-gray-50 rounded-md"
                              >
                                <span className="text-sm font-medium">{it.label}</span>
                                <svg className={`w-4 h-4 transition-transform ${isSubOpen ? "rotate-180" : ""}`} viewBox="0 0 24 24" fill="none" aria-hidden>
                                  <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                              </button>
                            ) : it.url ? (
                              it.url.startsWith("/") ? (
                                <Link
                                  href={it.url}
                                  className="block px-2 py-2 text-sm text-gray-700 hover:bg-red-50 rounded-md"
                                  onClick={() => {
                                    setMobileOpen(false);
                                    setIsOpen(null);
                                  }}
                                >
                                  {it.label}
                                </Link>
                              ) : (
                                <a
                                  href={it.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="block px-2 py-2 text-sm text-gray-700 hover:text-red-600 hover:bg-red-50 rounded-md"
                                  onClick={() => {
                                    setMobileOpen(false);
                                    setIsOpen(null);
                                  }}
                                >
                                  {it.label}
                                </a>
                              )
                            ) : (
                              <span className="block px-2 py-2 text-sm text-gray-700">{it.label}</span>
                            )}
                            {/* Nested submenu for mobile */}
                            {hasSubSub && isSubOpen && (
                              <ul className="pl-4 mt-1 space-y-1">
                                {it.items.map((sub) => (
                                  <li key={sub.label}>
                                    {sub.url ? (
                                      sub.url.startsWith("/") ? (
                                        <Link
                                          href={sub.url}
                                          className="block px-2 py-2 text-sm text-gray-700 hover:text-red-600 hover:bg-red-50 rounded-md"
                                          onClick={() => {
                                            setMobileOpen(false);
                                            setIsOpen(null);
                                          }}
                                        >
                                          {sub.label}
                                        </Link>
                                      ) : (
                                        <a
                                          href={sub.url}
                                          target="_blank"
                                          rel="noopener noreferrer"
                                          className="block px-2 py-2 text-sm text-gray-700 hover:text-red-600 hover:bg-red-50 rounded-md"
                                          onClick={() => {
                                            setMobileOpen(false);
                                            setIsOpen(null);
                                          }}
                                        >
                                          {sub.label}
                                        </a>
                                      )
                                    ) : (
                                      <span className="block px-2 py-2 text-sm text-gray-700">{sub.label}</span>
                                    )}
                                  </li>
                                ))}
                              </ul>
                            )}
                          </li>
                        );
                      })}
                    </ul>
                  )}
                </li>
              );
            })}
            {/* <li className="pt-2">
              <a href="/subscription" className="block px-3 py-2 bg-sky-100 text-sky-800 rounded-full text-center font-semibold">
                Subscription
              </a>
            </li> */}
            <li>
              <a href="tel:+16177652493" className="block px-3 py-2 text-sm text-gray-800">
                +880 131-342-0661
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default NavBar;


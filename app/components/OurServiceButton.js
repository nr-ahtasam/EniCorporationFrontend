import Link from "next/link";

export default function OurServiceButton({ href = "#", children = "CONTACT PALUB!" }) {
  return (
    <Link href={href} className="inline-flex items-center px-6 py-2 bg-[#ffc41c] hover:bg-[#ffb300] text-[#222] font-bold rounded transition-colors duration-200 text-sm">
      <span className="mr-2" aria-hidden>
        <svg width="18" height="18" fill="currentColor" viewBox="0 0 20 20">
          <path d="M2.94 6.94a8 8 0 0114.12 0l.94 1.56A2 2 0 0116.24 12H3.76a2 2 0 01-1.76-3.5l.94-1.56zM10 14a2 2 0 100 4 2 2 0 000-4z" />
        </svg>
      </span>
      {children}
    </Link>
  );
}
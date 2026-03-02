import Image from "next/image";

export default function ArticleDetail({
  title,
  author,
  date,
  category,
  image,
  content,
}) {
  return (
    <div className="max-w-4xl mx-auto py-10 px-4">
      <h1 className="text-3xl md:text-4xl font-bold text-[#18398b] mb-4">{title}</h1>
      <div className="flex flex-wrap items-center gap-2 mb-6">
        <span className="text-red-700 font-bold">{author}</span>
        <span className="text-gray-600">|</span>
        <span className="text-gray-700">{date}</span>
        <span className="text-gray-600">|</span>
        <span className="bg-white text-red-700 border border-red-700 px-2 py-0.5 text-xs font-bold rounded uppercase">{category}</span>
      </div>
      <div className="w-full flex justify-center mb-8">
        <div className="relative w-full max-w-3xl h-72 md:h-96">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover rounded"
            style={{ filter: "brightness(0.7) sepia(0.2) hue-rotate(180deg) saturate(2)" }} // blue overlay
            priority
          />
        </div>
      </div>
      <div className="flex items-center gap-4 mb-8">
        <a href="#" className="text-[#18398b] font-bold text-sm">BACK</a>
        <span className="text-gray-500">|</span>
        <span className="text-gray-700">Share:</span>
        <a href="#" className="bg-[#18398b] text-white p-2 rounded" aria-label="LinkedIn"><i className="fab fa-linkedin-in" /></a>
        <a href="#" className="bg-[#18398b] text-white p-2 rounded" aria-label="Facebook"><i className="fab fa-facebook-f" /></a>
        <a href="#" className="bg-[#18398b] text-white p-2 rounded" aria-label="Twitter"><i className="fab fa-twitter" /></a>
        <a href="#" className="bg-[#18398b] text-white p-2 rounded" aria-label="Email"><i className="fas fa-envelope" /></a>
      </div>
      <div className="prose max-w-none text-[#18398b]">
        {content}
      </div>
    </div>
  );
}
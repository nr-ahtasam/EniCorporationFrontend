export default function QrasBenefits() {
  return (
    <div className="w-full bg-[#f7f9fa] py-16">
      <div className="container mx-auto">
        <div className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-[#18398b] mb-4 text-left">
            How can you benefit with ENI Corporation?
          </h2>
          <ul className="list-disc list-inside text-gray-700 text-base space-y-2 max-w-xl ">
            <li>Monitors your oil condition to predict oil drain</li>
            <li>Monitors equipment condition</li>
            <li>Helps to detect problems early</li>
            <li>Enables effective maintenance planning</li>
            <li>Improves equipment reliability</li>
            <li>Reduces operating costs</li>
            <li>Reduces machine downtime</li>
          </ul>
        </div>
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-[#18398b] mb-4 text-left">
            With ENI Corporation you get:
          </h2>
          <ol className="list-decimal list-inside text-gray-700 text-base space-y-2 max-w-2xl ">
            <li>Online availability of your results at any time.</li>
            <li>
              Personal recommendations by our technical expert support team on your oil condition and engine wear.
            </li>
            <li>
              In-depth report containing all relevant information such as historical data, oil sample analysis, machine condition, etc.
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}
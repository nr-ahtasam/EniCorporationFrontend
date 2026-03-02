
import WhatDoTheyDo from "../WhatDoTheyDo";
export default function WhatTeamDo() {
  // const items = [
  //   {
  //     title: "Provide Advice",
  //     desc: "First and foremost, this service is obviously designed to provide advice where necessary. The team has extensive knowledge of the current product portfolio, new products that are being introduced, as well as the existing and upcoming market specifications. They also often provide extensive advice on the oil analyses (QRAS and LIMS) that have been carried out.",
  //   },
  //   {
  //     title: "Intermediary",
  //     desc: "In addition, this service also acts as an intermediary between the development laboratory (KPR&T) and the customer. The service allows knowledge from the laboratory to be shared with the customer, and market information from the customer to be shared with the development laboratory. This is a clear case of cross-pollination.",
  //   },
  //   {
  //     title: "Sales Support",
  //     desc: "They also support the sales team when visiting companies and distributors. This is the main reason that PALUB team members are often on the road to meet a customer. In this case, the telephone service is staffed by a colleague.",
  //   },
  //   {
  //     title: "Training",
  //     desc: "The PALUB team provides training to direct customers and distributors, as well to the customer service. They do this at the home locations in BPA (Blending Plant Antwerp) and KPR&T, as well as during local sales meetings, or at the customer's location. This involves training on new products and/or applications, as well as providing training to newcomers in the oil market.",
  //   },
  //   {
  //     title: "Maintenance",
  //     desc: "Next, there is a technical area within the scope of PALUB: the maintenance of certain tools that also are available for the customers: Olysager Lis, Cross list, Technical IRIS and Q8Oils University. Do you have any questions about these tools? Please do not hesitate to contact them.",
  //   },
  //   {
  //     title: "Marketing Support",
  //     desc: "The marketing department can also count on the knowledge found within PALUB: this service can support Product Data Sheets, the development of brochures, translations (FR, NL, DE), and the creation of labels for large packages.",
  //   },
  // ];

  return (
    <section className="w-full py-16  ">
      <div className="">
        {/* <WhatDoTheyDo title="What do they do?" items={items} />   */}
      {/* <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#18398b] mb-8 text-center">What do they do?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {items.map((item, idx) => (
            <div key={idx} className="flex flex-col items-start text-left">
              <h3 className="text-lg font-semibold text-[#18398b] mb-2">{item.title}</h3>
              <p className="text-gray-700 text-base">{item.desc}</p>
            </div>
          ))}
        </div>
        </div> */}
        <h2 className="text-2xl font-bold text-[#18398b] mb-4 lg:mt-40">How do they do this?</h2>
        <p className="text-gray-700 text-base mb-2">
          Well, of course, PALUB has a number of tools. This means they use a number of practical tools, such as Olyslager LIS, QRAS analyses and BNL/LIMS analyses. Furthermore, they can always go to the Q8Oils research centre and speak to the business development managers who are busy with their product segment day in, day out.
        </p>
        <p className="text-gray-700 text-base mt-10">
          But the best and most important tool in the hands of PALUB? Very simple: their own experience. Because by simply using the experience from within the team, it is possible to find a solution for every situation and difficult question.
        </p>
      </div>
    </section>
  );
}
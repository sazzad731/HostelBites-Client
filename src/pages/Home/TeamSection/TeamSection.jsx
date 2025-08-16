
const teamMembers = [
  {
    name: "Chef Marcus",
    role: "Head Chef",
    description: "Marcus brings 15 years of culinary experience.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB1lDEC6HzLmTx8paeztDn-tNvvvoHo2RxqOkKHK6dbyVcD6BQS5s8hMjmpCp8lL_m6faxBY3Wk-RWWmOXbjwOZtAwF7bWH-d2z0jXDTGRxrQQmU3Ci0QYgRe3aR77IZVKPK7EsbnlRiSU582sh_F1iWt_u_Zpv-lEk93AaCWy3bi9NwhHCTAXJulDpyqnYcezrmEFiRVhbbVgon3Ax8g2d-4NNmB-MCdZH14w33cJYU6nNoc1MRoVUgWgLgSGzkSvClh7s6PStyPg",
  },
  {
    name: "Chef Isabella",
    role: "Sous Chef",
    description: "Isabella specializes in authentic Italian cuisine.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDB0e7pMFmceZpEiObw7tz0_t2amsiKWoddCws3CfEqgnoD38WagsalkOsY3aVAezWkNQwibs_-ujBmTh8qKZXNO_90wDn2rAHuFwHCT7WS_OBM3GhGipCZPVl0Hnhw_9KUiZZJCqGNXGJcbhMhvhhUStDpUvfYtwzirqkpCJ1iwoaHIlPwi1bRlqvheZyS4Mxpv1XCCzT0tIvIExEGjxCQCuuUlooJQFFkjcGWn-ubSiEFzPKXBrx1ArZLCFG7UVEHOkLTlevz27A",
  },
  {
    name: "Chef Ethan",
    role: "Pastry Chef",
    description: "Ethan crafts exquisite and mouth-watering desserts.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDFVnQI0a484rIf5xfoW3cv8h55UQVGP7hPY9UirpXsri-CJj2agYR_nRn2JB1gg5sVLsMHgvSmDVTsMcesDUsAdrZGqJFSFQl6CzEk__axQ17CUTlzBI2BV6S78-v4aOp3YCtUUPoh9KMFOKo9eKG3yJg0xtNCFocx2Bw-VXXhn5YKR9TJBnpRE_ry6ChKxsXUc09kDweY3gdZIHnqaLIQxocyoYFUWoPV5EqRloa7YcefQoe_nO2X4tWlAQk48qKCxonIp4FXREk",
  },
  {
    name: "Chef Olivia",
    role: "Culinary Director",
    description: "Olivia oversees all culinary operations and menu curation.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAL6YFJ9FE83x9DcLxr1vLh8VCQDaX1cbDpm0tAJXtQDdKNjXSJW0PJ65lsNdfb9yn1rzPVSGFk7Y6GSGO-qSQqb3sEE-YBlo9nBBHTOnKmQlvsAwq98UPbzYON-EhhpQzZgL-Odj-CPqeB3z5nH-sZ9cenL_qZ7feP3A5wJcmrOuxDVMkmK1oGgjpDa0G8GFEvF6u-ttTvkoTmUWCjAIQ1QoFoSRdM40ILUKpg_NCDpgALnH_vpouKdKOJQD_tr6BoS7xx2R3Q3y0",
  },
  {
    name: "Chef Noah",
    role: "Executive Chef",
    description: "Noah leads the kitchen with innovation and passion.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBeu57WnuQLabWK530NW2Tk3__r8QkI9zrHBxv20zPnpVnhlF416FWDwG-Xhued09CRIhfQk42e74gcrT_aVCoI2arTEbwEl1NBVq3TjQl6xnPFm12l7cRmMActEPZyuIgBwQPblvrnM8tq_uexK7emeZLlGNOFp5n8E6EtXSa2oY9gC7At3Ga5nN_-Ca8oSLfOKB41SOGNFrLtabKe_w5fTEkPpNM0QvpwkpeRSMgNC9yndUrNE64hCoMZm8s9o6LQDZ6izvhLzek",
  },
  {
    name: "Chef Sophia",
    role: "Head Baker",
    description: "Sophia creates artisanal breads and pastries.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCdZUWv9a42EIh0A4xWiUfOoQyBqJTLpjSPLqe3-qHcPivvCTY9uaAD3wHwMXryRa_dKxLZXGwvwYaVNURmOio5FkWHrtfivtgtHPtSeqDhlTarR3U1uFQ46ys1z5BNgiu_B7aodSErz0sZ-65ZJu0YT8P63yBL5ttzyP0sbtVZQQyU2nN-GpBTO9QpZF8g3mLXN4MKAh-EdLVMbf-qt8yaCyZzOn6bG_rMM-qKNkY9bsOOXFiMAv26KK6aYS5K2o77j8Uy95pcRyc",
  },
];

const TeamSection = () => {
  return (
    <section className="mt-36">
      <div className="text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-primary">
          Our Team
        </p>
        <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
          Meet the Culinary Experts
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-neutral-500">
          The passionate individuals behind your delicious meals, dedicated to
          bringing you the best dining experience.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {teamMembers.map((member, idx) => (
          <div key={idx} className="flex flex-col items-center text-center border border-neutral-200 bg-white rounded-lg shadow-lg p-6 transition-transform duration-300 hover:scale-105">
            <div className="w-40 h-40">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full rounded-full object-cover"
              />
            </div>
            <div className="mt-4">
              <h3 className="text-xl font-bold">
                {member.name}
              </h3>
              <p className="text-base font-medium text-primary">
                {member.role}
              </p>
              <p className="mt-2 text-sm text-neutral-600">
                {member.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamSection;

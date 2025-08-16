import React from 'react';
import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";
import Rating from 'react-rating';
const CustomersReview = () => {
  
  const reviews = [
    {
      id: "gasfg",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDCxJldkDEyzt3mNCaJYqL0XtLKNRzFOtYYnrA3WdkLTBK0Peqc_A-_gNC2kNsY8369vcx_dgMTkqN_DIjiJsThq9HsXPJwwsGHT5IE2A9nbSNTigZbastTsCACrDZ625tUFZwDKR_jKqAlJov3JFJQfaTTKPaRmVG2Fy6o3An4YbE8OFbDYglSrro4_smqLHv0dqrueH5I-7c8EQ2qiN1rrLngCBaS3g_ubUco3L2HrzH9ABJfju33KHf5aLFgVsbbFoi5QMM9TT4",
      name: "Liam Carter",
      rating: 4.5,
      comment: `“The meal kits are a game-changer! Fresh ingredients, easy
                recipes, and delicious results every time. Highly recommend!”`,
    },
    {
      id: "egwthy",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCQ8FIgpCJW_T2Hos-YQBsAXFQW7_RMgqQBa3z50RbDmFEhfV5H3RPDjz9XjU90IsgeTCyl_TdVSU5vMEN9qsDuN16LkhbTnksKuXUQUUrC16A5_2e0FbgEwaq7NLaLANcLSuLz9dPqPEgLAqwtLyJEoMOvMW9XPLalAi8JayKlnkBc1LAYX0_xil-rB8sEoecDwKlovDkjlcGvCSSFDdcytEIrSRpbaeP2JcXLAHlFrTCe6gPEuin5i1He8tcy55m-aNyCh6ne5S4",
      name: "Sophia Bennett",
      rating: 3.6,
      comment: `“I love the variety of meals offered. It's like having a new
                restaurant experience at home each week. So convenient!”`,
    },
    {
      id: "efgyerg",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB76ffZ7xmI4W8il_QW0uzlpeW5_azCM4IXJn5KeP_eB1oTZ9xXeGSDcn2eoqZdIO-wP4byPK8kxfWm3TrplTOMXUnhoaCJAMo5EZb30bAzqdXbB5ZvmSCursBtigMCf0Y41HJRk276xg_ZFQdnnJYcv2MUVdaoVq8IML1TZhgubLsaIDW_JnafkBq8AB9HUMR6DkGuKSVuVlJgcntBZ5DBkAgTFbGyHMoAMkxHpyrWi3KTyn7qON62PcIutNdMM6N3ldwvvBB7e70",
      name: "Ethan Harper",
      rating: 3.8,
      comment: `“The quality of the ingredients is top-notch. I feel good about
                what I'm eating, and the flavors are amazing. A great value!”`,
    },
    {
      id: "fgsgdfgh",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCplsbV1zqKLpCnhuv1CE95_mHR-Z6853zuYRayf-HxW_xIUjN7b-GoUqZClVZcSGC1Wr9zNpJ2UChdJTb2J_IqpqMwiYVwawGhb72Bp8HBacbFwxOESkxTjn6Zyw1bMDbiBGnvj1GyJfzzK9v9WcNxsZnkRbDIxgXKQh2g5FQvAgJ31EDRbmH1QXrDQoYU8mZg0totENagBVQ24V8Q2K14VunrNblb8LwoXaCj8m05KLZX1WNd3_Ed8SLpQLq62lWSu_MeBdZ9sTE",
      name: "Olivia Morgan",
      rating: 4.9,
      comment: `“HostelBites has made cooking fun again! The instructions are
                clear, and the meals are always a hit with my family. We look
                forward to it every week.”`,
    },
  ];

  return (
    <div class="mb-20">
      <div class="text-center">
        <h2 class="text-3xl font-bold tracking-tight sm:text-4xl">
          What our customers say
        </h2>
        <p class="mt-4 text-lg text-neutral-500">
          Real stories from real food lovers.
        </p>
      </div>
      <div class="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {reviews.map((review) => (
          <div key={review.id} class="flex flex-col items-center rounded-lg bg-white p-6 shadow-lg border-[1px] border-neutral-200">
            <div class="flex-shrink-0">
              <img
                alt={review.name + " " + "Profile picture"}
                class="h-20 w-20 rounded-full object-cover"
                src={review.image}
              />
            </div>
            <div class="mt-4 flex items-center text-center flex-col justify-between">
              <p class="text-xl font-bold text-[var(--neutral-800)]">
                {review.name}
              </p>
              <div class="mt-2 flex items-center gap-1">
                <Rating
                  emptySymbol={<FaRegStar className="text-primary" size={18} />}
                  fullSymbol={
                    <FaStarHalfAlt className="text-primary" size={18} />
                  }
                  placeholderSymbol={
                    <FaStar className="text-primary" size={18} />
                  }
                  placeholderRating={review.rating}
                  readonly
                />
              </div>
              <blockquote>
                <p class="text-base text-neutral-500">
                  {review.comment}
                </p>
              </blockquote>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomersReview;
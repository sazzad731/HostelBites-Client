
const FAQ = () => {
  return (
    <section className="mt-36">
      {/* Heading */}
      <div className="text-center mb-12 md:mb-16">
        <h1 className="text-3xl md:text-4xl font-bold leading-tight tracking-tighter mb-4">
          Frequently Asked Questions
        </h1>
        <p className="text-lg text-base-content/70">
          Find answers to common questions about HostelBites.
        </p>
      </div>

      {/* FAQ Accordions */}
      <div className="space-y-4">
        {/* Item 1 */}
        <div className="collapse collapse-plus bg-base-100 shadow-md rounded-lg">
          <input type="checkbox" defaultChecked />
          <div className="collapse-title text-lg font-semibold">
            What is HostelBites?
          </div>
          <div className="collapse-content text-base-content/70 leading-relaxed">
            <p>
              HostelBites is a meal subscription service designed for students
              and young professionals, providing convenient, affordable, and
              delicious food options. We offer a variety of meal plans to suit
              different tastes and dietary needs, delivered right to your
              doorstep.
            </p>
          </div>
        </div>

        {/* Item 2 */}
        <div className="collapse collapse-plus bg-base-100 dark:bg-base-200 shadow-md rounded-lg">
          <input type="checkbox" />
          <div className="collapse-title text-lg font-semibold">
            How does the subscription work?
          </div>
          <div className="collapse-content text-base-content/70 leading-relaxed">
            <p>
              Simply choose your preferred meal plan on our website, select the
              number of meals per week, and set your delivery schedule. You can
              easily manage your subscription, skip a week, or change your plan
              anytime through your account.
            </p>
          </div>
        </div>

        {/* Item 3 */}
        <div className="collapse collapse-plus bg-base-100 dark:bg-base-200 shadow-md rounded-lg">
          <input type="checkbox" />
          <div className="collapse-title text-lg font-semibold">
            Can I customize my meal plan?
          </div>
          <div className="collapse-content text-base-content/70 leading-relaxed">
            <p>
              Absolutely! We offer a wide variety of meals each week. You can
              handpick your meals based on your preferences or let us curate a
              selection for you based on your taste profile.
            </p>
          </div>
        </div>

        {/* Item 4 */}
        <div className="collapse collapse-plus bg-base-100 dark:bg-base-200 shadow-md rounded-lg">
          <input type="checkbox" />
          <div className="collapse-title text-lg font-semibold">
            What if I have dietary restrictions?
          </div>
          <div className="collapse-content text-base-content/70 leading-relaxed">
            <p>
              We cater to various dietary needs, including vegetarian, vegan,
              and gluten-free options. You can filter our menu to find meals
              that fit your requirements.
            </p>
          </div>
        </div>

        {/* Item 5 */}
        <div className="collapse collapse-plus bg-base-100 dark:bg-base-200 shadow-md rounded-lg">
          <input type="checkbox" />
          <div className="collapse-title text-lg font-semibold">
            How do I cancel my subscription?
          </div>
          <div className="collapse-content text-base-content/70 leading-relaxed">
            <p>
              You can pause or cancel your subscription at any time with no
              hidden fees. Simply log in to your account and go to the
              'Subscription Settings' section. Just make sure to update before
              the weekly cut-off date.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
import React from 'react';

const HostelHighlights = () => {
  return (
    <section className="py-10 sm:py-24 bg-primary/10 rounded-2xl mb-20">
      <div className="text-center mb-12 sm:px-0 px-2">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          Hostel Highlights
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-600">
          More than just meals, we foster community.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:px-8 px-2">
        <div className="flex flex-col sm:flex-row items-center gap-6 bg-white p-6 rounded-xl shadow-md">
          <div
            className="flex-shrink-0 w-full sm:w-48 h-48 rounded-lg bg-cover bg-center"
            style={{
              backgroundImage:
                'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDr0rAxU_22ZhamtIzrSQ6aZFiTaPCBQB2a5FfjifvumUNJUHDmf4YESDk1_9EzSEWu2vGZIrCpUGPoc5vfn8hRKUaV15yu9G2vuVeJq-7v1ZXBtIriH436Wt53-ide9KZ8Ji_Hn0jaqi8bNER8mM9_ujUePEBg0SVUve3GJY8GnUXuHq8QZR3d2d9j97HVmpAF3FgJigawECtK4Uj23zXqV9vYpSXJI8WIxKy0wC36CFgfNLZTpkC-zFNWH0cBKb6zw-RyfXAc5KsB")',
            }}
          ></div>
          <div>
            <h3 className="text-xl font-bold text-slate-800">
              Community Dinners
            </h3>
            <p className="mt-2 text-slate-600 text-sm">
              Join our weekly community dinners to socialize and enjoy a
              home-cooked meal with fellow travelers.
            </p>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row items-center gap-6 bg-white p-6 rounded-xl shadow-md">
          <div
            className="flex-shrink-0 w-full sm:w-48 h-48 rounded-lg bg-cover bg-center"
            style={{
              backgroundImage:
                'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAbzy8Xz7IjEc_bYws4JOEXZCQm6lbJEPRkRF9ELYi5KMBr8rIEdeWQu3NO1KF3bMyvZN9uC5-Azb5XSKx0F2m4iSfwwgPXUIvB9stkWu1_53YP-Rh9rYSYeAMZft4wfJVGZ3YA_lmgcdRZ2jaHNJUt4awkGvql4y4YovnevnReMWnK4AZzYu2w57T8whxlUxcEao5vqn2pshCrk8MeM7F3p0Lo8OsUYHvBrzLWRxuC71RZrrotTlH1YyuzQHzzgV6mgFk7JTLVA2wl")',
            }}
          ></div>
          <div>
            <h3 className="text-xl font-bold text-slate-800">
              Cooking Workshops
            </h3>
            <p className="mt-2 text-slate-600 text-sm">
              Participate in our fun cooking workshops to learn new recipes and
              culinary skills from local chefs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HostelHighlights;
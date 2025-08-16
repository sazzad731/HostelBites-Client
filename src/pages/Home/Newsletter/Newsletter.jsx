import React from 'react';

const Newsletter = () => {
  return (
    <section className="mt-36">
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Subscribe to Our Newsletter
        </h1>
        <p className="mt-4 text-lg leading-8 text-neutral-600">
          Stay updated on new meals, special offers, and exclusive content. Join
          our community of food lovers today!
        </p>
      </div>
      <form className="mt-10 mx-auto max-w-lg">
        <div className="flex flex-col items-center gap-5 sm:flex-row gap-x-4">
          <input
            type="text"
            placeholder="Enter your email"
            className="input rounded-lg px-4 py-6 focus:outline-primary focus:border-primary sm:text-sm sm:leading-6 placeholder:text-neutral-400"
          />
          <button
            className="btn btn-outline btn-primary text-base py-6"
            type="submit"
          >
            Subscribe
          </button>
        </div>
      </form>
    </section>
  );
};

export default Newsletter;
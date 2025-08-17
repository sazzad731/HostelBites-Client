import React from "react";
import {
  AreaChart,
  Line,
  Tooltip,
  ResponsiveContainer,
  Area,
} from "recharts";
import { ShoppingCart, Users, DollarSign, UserPlus } from "lucide-react";


const Statistics = () => {
  const lineData = [
    { name: "Week 1", value: 200 },
    { name: "Week 2", value: 400 },
    { name: "Week 3", value: 300 },
    { name: "Week 4", value: 500 },
  ];

  return (
    <div>
      {/* Header */}
      <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
        <h2 className="text-3xl font-bold text-primary">Dashboard Overview</h2>
        <div className="relative">
          <select className="rounded-lg bg-base-100 border border-primary py-2 pl-3 pr-8 text-sm font-medium focus:border-primary focus:ring-1 focus:ring-primary">
            <option>Last 30 days</option>
            <option>Last 7 days</option>
            <option>Last 90 days</option>
          </select>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {[
          {
            title: "Total Orders This Month",
            value: "2,345",
            icon: ShoppingCart,
          },
          { title: "Active Subscriptions", value: "1,876", icon: Users },
          { title: "Plan Value", value: "$12,500", icon: DollarSign },
          { title: "New Subscribers", value: "450", icon: UserPlus },
        ].map((item, i) => {
          const Icon = item.icon;
          return (
            <div
              key={i}
              className="card rounded-xl bg-primary/3 p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="stat flex items-start justify-between">
                <div>
                  <div className="stat-title text-sm font-medium text-primary">
                    {item.title}
                  </div>
                  <div className="stat-value text-3xl font-extrabold">
                    {item.value}
                  </div>
                </div>
                <Icon className="text-primary" size={40} />
              </div>
            </div>
          );
        })}
      </div>

      {/* Charts Section */}
      <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-3">
        {/* Area Chart */}
        <div className="card rounded-xl p-6 shadow-sm lg:col-span-2">
          <h3 className="text-lg font-semibold text-primary">
            Weekly Order Trends
          </h3>
          <p className="text-sm">Last 30 Days</p>
          <div className="mt-4 h-80">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                data={lineData}
                margin={{
                  top: 10,
                  right: 30,
                  left: 0,
                  bottom: 0,
                }}
              >
                {/* 1. FIRST: Define gradient - MUST come before Area */}
                <defs>
                  <linearGradient
                    id="guaranteedGradient"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >
                    <stop offset="0%" stopColor="#ED582A" stopOpacity={0.1} />
                    <stop offset="100%" stopColor="#ED582A" stopOpacity={0} />
                  </linearGradient>
                </defs>

                {/* 2. Chart components */}
                <Tooltip />

                {/* 3. Area with gradient - MUST come after defs */}
                <Area
                  type="monotone"
                  dataKey="value"
                  fill="url(#guaranteedGradient)"
                  stroke="none"
                  fillOpacity={1} // Force override
                  isAnimationActive={false} // Disable animations for testing
                />

                {/* 4. Line on top */}
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke="#ED582A"
                  strokeWidth={3}
                  dot={false}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Donut Chart */}
        <div className="card rounded-xl p-6 shadow-sm flex items-center justify-center">
          <div className="relative">
            <div
              className="radial-progress text-primary z-50"
              style={{
                "--value": "70",
                "--size": "12rem",
                "--thickness": "1rem",
              }}
              aria-valuenow={70}
              role="progressbar"
            >
              <span className="text-sm text-neutral-800">Weekly</span>
              <span className="text-3xl font-bold text-primary">70%</span>
            </div>
            <div className="absolute top-0 left-0 rounded-full w-48 h-48 bg-primary/20"></div>
            <div className="absolute top-0 left-0 rounded-full w-48 h-48 bg-white scale-84"></div>
          </div>
        </div>
      </div>

      {/* Meal Popularity */}
      <div className="mt-6 card rounded-xl p-6 shadow-sm">
        <h3 className="text-lg font-semibold text-primary">Meal Popularity</h3>
        <div className="mt-4 grid grid-cols-2 gap-x-8 gap-y-4 md:grid-cols-5">
          {[
            { name: "Vegan", percent: 90 },
            { name: "Chicken", percent: 75 },
            { name: "Beef", percent: 60 },
            { name: "Vegetarian", percent: 40 },
            { name: "Seafood", percent: 25 },
          ].map((meal, i) => (
            <div key={i} className="space-y-2">
              <p className="text-sm font-medium">{meal.name}</p>
              <div className="h-2 w-full rounded-full">
                <progress
                  className="progress progress-primary w-full"
                  value={meal.percent}
                  max="100"
                ></progress>
              </div>
              <p className="text-sm font-semibold text-primary">
                {meal.percent}%
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Statistics;

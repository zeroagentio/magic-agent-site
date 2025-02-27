'use client';
import CTA from "@/components/blocks/cta";
import Footer from "@/components/blocks/footer";
import Navbar from "@/components/blocks/navbar";
import { Features, PricingData, Shopping } from "@/lib/pricing";
import { useState } from "react";
import CurrencyDropdown from "./dropdown"; ;
 
const Pricing = () => {
    const [billingCycle, setBillingCycle] = useState("monthly");
    const [currency, setCurrency] = useState('INR')

  return (
    <>
      <Navbar />
      <div className="xl:mt-32 mt-20 mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        <p className="mx-auto mt-2 max-w-lg text-balance text-center text-4xl font-semibold tracking-tight text-gray-950 sm:text-5xl">
          Pricing
        </p>
        <p className="mx-auto mt-6 max-w-2xl text-pretty text-center text-lg font-medium text-gray-600 sm:text-xl/8">
          Choose an affordable plan that’s packed with the best features for
          engaging your audience, creating customer loyalty, and driving sales.
        </p>
 
        <div className="flex items-center justify-center my-6">
      <span
        className={`text-sm font-semibold ${
          billingCycle === "monthly" ? "text-gray-900" : "text-gray-500"
        }`}
      >
        Monthly
      </span>

      <button
        onClick={() =>
          setBillingCycle((prev) => (prev === "monthly" ? "yearly" : "monthly"))
        }
        className="mx-4 flex items-center w-14 h-6 bg-gray-300 rounded-full p-1 transition-all"
      >
        <div
          className={`w-6 h-6 bg-white rounded-full shadow-md transform transition-transform ${
            billingCycle === "yearly" ? "translate-x-6" : "translate-x-0"
          }`}
        ></div>
      </button>

      <span
        className={`text-sm font-semibold ${
          billingCycle === "yearly" ? "text-gray-900" : "text-gray-500"
        }`}
      >
        Yearly <span className="text-blue-900">(Save 20%)</span>
      </span>
      
      {/* <CurrencyDropdown setCurrency={setCurrency}/>  */}
    </div>

        <div className="mx-auto grid max-w-2xl space-y-4 lg:space-y-0 grid-cols-1 text-start  sm:mt-10 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          
        {PricingData.map((plan, index) => (
        <div
          key={index}
          className="col-span-1 bg-white mx-4 rounded-xl border border-borderColor shadow p-6"
        >
          <p className="mb-2 text-2xl font-semibold text-gray-900">
            {plan.plan} Plan
          </p>

          <p className="mt-2 text-gray-900">{plan.description}</p>

          <div className="mb-4 mt-6 text-3xl font-semibold text-gray-900">
            ${plan.price}{" "}
            <span className="text-base font-normal text-gray-900">
              {plan.billing}
            </span>
          </div>
          <p className="mt-4 mb-6 text-4xl font-bold text-gray-900">{currency === "INR" ? `₹${plan.price_inr}` : `$${plan.price}` }<span className="text-lg font-medium">{plan.billing}</span></p>
            <br />

          {/* <p className="text-gray-900 mb-4">{plan.short}</p> */}

          <button className="w-full bg-gray-900 text-white font-medium py-2 rounded-xl hover:bg-gray-800"
          onClick={() => {
            const link = "https://app.zeroagent.io"
            // const link = plan.plan === "Free" ? "https://app.zeroagent.io" : "https://app.zeroagent.io"
            window.open(link , "_blank")
          }}
          >
            {plan.plan === "Free" ? "Get Started" : `Sign Up for Free`}
          </button>

          <ul className="mt-6 space-y-2 text-sm text-gray-600">
            {plan.features.map((feature, i) => (
              <li key={i}>✓ {feature}</li>
            ))}
          </ul>
        </div>
      ))}
 
        </div>

 
  <div className="max-w-7xl mx-auto">
    
    <div className="mt-12 overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead>
          <tr>
            <th className="w-1/4 px-6 py-4 text-left text-base font-semibold text-gray-900">Features</th> 
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-100">
      
          {Features.map((feature , idx) => (
            <tr key={idx}>
            <td className="px-8 py-4 text-sm text-gray-700">{feature.name}</td>
            <td className="text-center px-6 py-4">
              {feature.free === "true" ? 
              <span className="text-green-700">✔</span>
            : feature.free === "false" ? 
            <span className="text-red-700">✗</span>
          : feature.free }
              </td>
              <td className="text-center px-6 py-4">
              {feature.growth === "true" ? 
              <span className="text-green-700">✔</span>
            : feature.growth === "false" ? 
            <span className="text-red-700">✗</span>
          : feature.growth }
              </td>
              <td className="text-center px-6 py-4">
              {feature.premium === "true" ? 
              <span className="text-green-700">✔</span>
            : feature.premium === "false" ? 
            <span className="text-red-700">✗</span>
          : feature.premium }
              </td> 
          </tr>
          ))}
          
        </tbody>
      </table>

      <br />
      <table className="min-w-full divide-y divide-gray-200">
        <thead>
          <tr>
            <th className="w-1/4 px-6 py-4 text-left text-base font-semibold text-gray-900">Online Store</th> 
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-100"> 
        {Shopping.map((feature , idx) => (
            <tr key={idx}>
            <td className="px-8 py-4 text-sm text-gray-700">{feature.name}</td>
            <td className="text-center px-6 py-4">{feature.free}</td>
            <td className="text-center px-6 py-4">{feature.growth}</td>
            <td className="text-center px-6 py-4">{feature.premium}</td>
          </tr>
          ))}
        </tbody>
      </table>
      <br />
      <table className="min-w-full divide-y divide-gray-200">
        <thead>
          <tr>
            <th className="w-1/4 px-6 py-4 text-left text-base font-semibold text-gray-900">Talk With Zero</th> 
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-100"> 
          <tr>
            <td className="px-8 py-4 text-sm text-gray-700">Questions (per day)</td>
            <td className="text-center px-6 py-4">100</td>
            <td className="text-center px-6 py-4">Unlimited</td>
            <td className="text-center px-6 py-4">Unlimited</td>
          </tr>
        </tbody>
      </table>

    </div>
    {/* <div className="mt-8 grid gap-8 lg:grid-cols-3">
      <div className="text-center">
        <a href="#" className="block bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700">
          Choose Starter
        </a>
      </div>
      <div className="text-center">
        <a href="#" className="block bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700">
          Choose Growth
        </a>
      </div>
      <div className="text-center">
        <a href="#" className="block bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700">
          Choose Scale
        </a>
      </div>
    </div>  */}
</div>



      </div>

      <br />
      <br />
      <CTA />
      <Footer />
    </>
  );
};

export default Pricing;

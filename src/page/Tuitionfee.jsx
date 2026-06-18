import { header } from "framer-motion/client";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Tuition() {
  const [program, setProgram] = useState("nursery");
  const [gender, setGender] = useState("boys");
  const [paymentOption, setPaymentOption] = useState("full");

  const tuitionData = {
    nursery: {
      title: "Nursery",

      fees: [
        {
          name: "Tuition Fee",
          amount: 12000,
        },
        {
          name: "Miscellaneous Fee",
          amount: 6000,
        },
        {
          name: "Books",
          amount: 4000,
        },
      ],

      uniform: {
        boys: 1000,
        girls: 800,
      },

      peUniform: {
        boys: 1200,
        girls: 1500,
      },
    },

    k1: {
      title: "Kindergarten 1",

      fees: [
        {
          name: "Tuition Fee",
          amount: 15000,
        },
        {
          name: "Miscellaneous Fee",
          amount: 7000,
        },
        {
          name: "Books",
          amount: 4500,
        },
      ],

      uniform: {
        boys: 1000,
        girls: 800,
      },

      peUniform: {
        boys: 1200,
        girls: 1500,
      },
    },

    k2: {
      title: "Kindergarten 2",

      fees: [
        {
          name: "Tuition Fee",
          amount: 17000,
        },
        {
          name: "Miscellaneous Fee",
          amount: 7000,
        },
        {
          name: "Books",
          amount: 5000,
        },
      ],

      uniform: {
        boys: 1000,
        girls: 800,
      },

      peUniform: {
        boys: 1200,
        girls: 1500,
      },
    },
  };

  const selected = tuitionData[program];

  let displayedFees = [...selected.fees];

if (paymentOption === "payLite") {
  displayedFees = [
    {
      name: "Down Payment",
      amount: total * 0.4,
    },
    {
      name: "Remaining Balance",
      amount: total * 0.6,
    },
  ];
}

if (paymentOption === "allIn") {
  displayedFees = [
    {
      name: "Tuition/Misc.Fee",
      amount: 21000,
    },
    {
      type: "header",
      title: "Payable upon Enrollment:",
    },
    {
      name: "Starter Kit",
      amount: 1000,
    },
  ];
}

  const total =
    selected.fees.reduce((sum, fee) => sum + fee.amount, 0) +
    selected.uniform[gender] +
    selected.peUniform[gender];

  const discountedTotal = total * 0.95;

  // Payment option logic
  const ALL_IN_SURCHARGE = 2000; // includes registration / starter kit (adjustable)

  let payable = discountedTotal;
  let installments = 1;
  let installmentAmount = null;

  if (paymentOption === "full") {
    payable = discountedTotal;
    installments = 1;
  } else if (paymentOption === "payLite") {
    payable = total; // no discount for installment plan
    installments = 3;
    installmentAmount = payable / installments;
  } else if (paymentOption === "allIn") {
    payable = total + ALL_IN_SURCHARGE; // single all-in payment
    installments = 1;
  }

  const formatPeso = (n, opts = {}) =>
    n.toLocaleString(undefined, { minimumFractionDigits: 0, ...opts });

  return (
    <section className="relative min-h-screen overflow-hidden bg-linear-to-br from-emerald-50 via-white to-yellow-50 py-16">
      <div className="absolute -top-28 -left-10 h-80 w-80 rounded-full bg-emerald-200 blur-3xl opacity-30" />
      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-amber-200 blur-3xl opacity-30" />

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-emerald-800">
              Tuition & Fees
            </h1>
            <p className="text-sm text-gray-600">Clear breakdown and easy payment options for parents.</p>
          </div>

          <div className="flex gap-3 flex-wrap">
            {Object.keys(tuitionData).map((key) => (
              <button
                key={key}
                onClick={() => setProgram(key)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 shadow-sm
                  ${
                    program === key
                      ? "bg-white border-2 border-emerald-700 text-emerald-700"
                      : "bg-emerald-100 text-emerald-800 hover:bg-emerald-200"
                  }`}
              >
                {tuitionData[key].title}
              </button>
            ))}

            <div className="flex items-center rounded-full overflow-hidden bg-white border">
              <button
                onClick={() => setGender("boys")}
                className={`px-3 py-2 text-sm transition-colors duration-200 ${gender === "boys" ? "bg-blue-600 text-white" : "text-gray-600"}`}
              >
                Boys
              </button>
              <button
                onClick={() => setGender("girls")}
                className={`px-3 py-2 text-sm transition-colors duration-200 ${gender === "girls" ? "bg-pink-600 text-white" : "text-gray-600"}`}
              >
                Girls
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Fees breakdown */}
          <div className="md:col-span-2 bg-white rounded-2xl p-6 shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h2 className="text-2xl font-bold text-emerald-800">{selected.title}</h2>
                <p className="text-sm text-gray-500">Tuition assessment and itemized fees</p>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-500">Selected</p>
                <p className="text-lg font-semibold text-emerald-700">{selected.title}</p>
              </div>
            </div>

           <div className="text-left">
  {displayedFees.map((fee, index) => (
    fee.type === "header" ? (
      <div key={index} className="py-3 font-semibold text-gray-700">
        {fee.title}
      </div>
    ) : (
      <div key={index} className="py-4 flex items-center justify-between border-b">
        <div>
          <p className="font-medium">{fee.name}</p>
          <p className="text-xs text-gray-500">One-time / per semester</p>
        </div>
        <div className="font-semibold text-gray-800">
          ₱{formatPeso(fee.amount)}
        </div>
      </div>
    )
  ))}

              {paymentOption !== "payLite" && (
  <>
    <div className="py-4 flex items-center justify-between">
      <div>
        <p className="font-medium">Uniform ({gender})</p>
      </div>
      <div className="font-semibold">
        ₱{formatPeso(selected.uniform[gender])}
      </div>
    </div>

    <div className="py-4 flex items-center justify-between">
      <div>
        <p className="font-medium">P.E. Uniform ({gender})</p>
      </div>
      <div className="font-semibold">
        ₱{formatPeso(selected.peUniform[gender])}
      </div>
    </div>
  </>
)}
            </div>
          </div>
        

          {/* Summary / CTA */}
          <aside className="bg-linear-to-b from-black/20 to-emerald-50 rounded-2xl p-6 shadow-xl flex flex-col gap-4">

  {/* Payment Tabs */}
  <div className="bg-white rounded-xl p-1 border flex">
    <button
      onClick={() => setPaymentOption("full")}
      className={`flex-1 py-2 rounded-lg text-sm font-medium transition ${
        paymentOption === "full"
          ? "bg-emerald-700 text-white"
          : "text-gray-600"
      }`}
    >
      Full Cash
    </button>

    <button
      onClick={() => setPaymentOption("payLite")}
      className={`flex-1 py-2 rounded-lg text-sm font-medium transition ${
        paymentOption === "payLite"
          ? "bg-emerald-700 text-white"
          : "text-gray-600"
      }`}
    >
      Pay Lite
    </button>

    <button
      onClick={() => setPaymentOption("allIn")}
      className={`flex-1 py-2 rounded-lg text-sm font-medium transition ${
        paymentOption === "allIn"
          ? "bg-emerald-700 text-white"
          : "text-gray-600"
      }`}
    >
      All-In
    </button>
  </div>

  {/* Subtotal */}
  <div>
    <p className="text-sm text-black font-bold">Subtotal</p>
    <p className="text-3xl font-bold text-emerald-700">
      ₱{formatPeso(total)}
    </p>
  </div>

  {/* Dynamic Payment Info */}
  <div className="bg-white p-4 rounded-xl border">

    {paymentOption === "full" && (
      <div>
        <p className="text-sm text-gray-500 mb-1">
          Full Cash Payment
        </p>

        <h3 className="text-xl font-bold text-emerald-700">
          ₱
          {discountedTotal.toLocaleString(undefined, {
            minimumFractionDigits: 2,
          })}
        </h3>

        <p className="text-sm text-emerald-700 mt-2">
          Includes 5% cash discount
        </p>
      </div>
    )}

    {paymentOption === "payLite" && (
      <div>
        <p className="text-sm text-gray-500 mb-1">
          Installment Plan
        </p>

        <h3 className="text-xl font-bold text-emerald-700">
          ₱
          {payable.toLocaleString(undefined, {
            minimumFractionDigits: 2,
          })}
        </h3>

        <p className="mt-2 text-sm text-gray-600">
          {installments} Installments
        </p>

        <p className="font-semibold text-emerald-700">
          ₱
          {installmentAmount?.toLocaleString(undefined, {
            minimumFractionDigits: 2,
          })}
          / installment
        </p>
      </div>
    )}

    {paymentOption === "allIn" && (
      <div>
        <p className="text-sm text-gray-500 mb-1">
          Complete Enrollment Package
        </p>

        <h3 className="text-xl font-bold text-emerald-700">
          ₱
          {payable.toLocaleString(undefined, {
            minimumFractionDigits: 2,
          })}
        </h3>

        <p className="mt-2 text-sm text-gray-600">
          Includes Registration & Starter Kit
        </p>

        <p className="font-semibold text-orange-600">
          + ₱{formatPeso(ALL_IN_SURCHARGE)}
        </p>
      </div>
    )}
  </div>

  {/* Buttons */}
  <div className="flex gap-2 mt-2">
    <Link
      to="/Enrollment"
      className="flex-1 inline-flex items-center justify-center rounded-lg bg-emerald-700 text-white py-2 font-semibold hover:bg-emerald-800 transition"
    >
      Apply Now
    </Link>

    <button className="flex-1 inline-flex items-center justify-center rounded-lg border border-emerald-700 text-emerald-700 py-2 font-semibold bg-white hover:bg-emerald-50 transition">
      Contact Us
    </button>
  </div>

  <p className="text-xs text-black">
    Have questions? Contact our admissions office for assistance.
  </p>

</aside>
        </div>
      </div>
    </section>
  );
}
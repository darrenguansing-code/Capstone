import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, ChevronUp, Wallet, Bus} from "lucide-react";

export default function TuitionFees() {
  const [openMain, setOpenMain] = useState({
    preschool: false,
    kinder1: false,
    kinder2: false,
  });

  const [openOption, setOpenOption] = useState(null);

  const tuitionData = {
    preschool: {
  title: "PRE SCHOOL",

  selections: {
    schoolfees: {
      title: "SCHOOL FEES",

      rows: [
        {
          label: "Tuition Fee",
          value: "12,000",
        },

        {
          label: "Miscellaneous Fee",
          value: "6,000",
        },

        {
          label: "Books",
          value: "4,000",
        },

        {
          header: "UNIFORM",
        },

        {
          label: "Girls",
          value: "800",
        },

        {
          label: "Boys",
          value: "1,000",
        },

        {
          header: "P.E DRIFIT",
        },

        {
          label: "Girls",
          value: "1,500",
        },

        {
          label: "Boys",
          value: "1,200",
        },
      ],
    },

        option1: {
          title: "OPTION 1",
          subtitle: "CASH FULL PAYMENT",

          rows: [
            {
              label: "Tuition/Misc Fee",
              value: "18,000",
            },

            {
              label: "Less: Cash Discount",
              value: "(1,000)",
            },

            {
              label: "Net of Discount Tuition/Misc Fee :",
              value: "17,000",
              highlight: true,
            },

            {
              header: "Payable upon enrollment",
            },

            {
              label: "Tuition/Misc Fee Balance",
              value: "17,000",
            },

            {
              label: "Less: Registration Fee",
              value: "(1,000)",
            },

            {
              label: "Books",
              value: "4,000",
            },

            {
              header: "School Uniform"
            },

            {
              label: "Uniform Girls",
              value: "800",
            },

            {
              label: "Uniform Boys",
              value: "1,000",
            },

            {
              header: "P.E uniform",
            },

            {
              label: "P.E Uniform Girls",
              value: "1,500",
            },

            {
              label: "P.E Uniform Boys",
              value: "1,200",
            },
          ],
        },

        option2: {
          title: "OPTION 2",
          subtitle: "PAY LITE MONTHLY INSTALLMENT",

          rows: [
            {
              label: "Tuition/Misc Fee",
              value: "18,000",
            },

            {
              header: "Payable upon enrollment",
            },

            {
              label: "Tuition/Misc Fee",
              value: "8,000",
            },

            {
              label: "Less: Registration Fee",
              value: "(1,000)",
            },

            {
              label: "Books",
              value: "4,000",
            },

            {
              header: "School Uniform"
            },

            {
              label: "Uniform Girls",
              value: "800",
            },

            {
              label: "Uniform Boys",
              value: "1,000",
            },

            {
              header: "P.E uniform",
            },

            {
              label: "P.E Uniform Girls",
              value: "1,500",
            },

            {
              label: "P.E Uniform Boys",
              value: "1,200",
            },

            {
              footerTitle:
                "Monthly Installment every 10th of the Month",

              footer:
                "1,100/monthly (Jun'26-Mar'27)",
            },
          ],
        },

        option3: {
          title: "OPTION 3",
          subtitle: "ALL-IN MONTHLY INSTALLMENT",

          rows: [
            {
              label: "Tuition/Misc Fee",
              value: "19,000",
            },

            {
              header: "Payable upon enrollment",
            },

            {
              label: "Tuition/Misc Fee (Jun-Mar)",
              value: "1,800",
            },

            {
              label: "Books",
              value: "4,000",
            },

            {
              header: "School Uniform"
            },

            {
              label: "Uniform Girls",
              value: "800",
            },

            {
              label: "Uniform Boys",
              value: "1,000",
            },

            {
              header: "P.E uniform",
            },

            {
              label: "P.E Uniform Girls",
              value: "1,500",
            },

            {
              label: "P.E Uniform Boys",
              value: "1,200",
            },

            {
              footerTitle:
                "Monthly Installment every 10th of the Month",

              footer:
                "1,800/monthly (Jun'26-Mar'27)",
            },
          ],
        },
      },
    },

    kinder1: {
  title: "KINDER 1",
  selections: {
    schoolfees: {
      title: "SCHOOL FEES KINDER 1",

      rows: [
        {
          label: "Tuition Fee",
          value: "14,000",
        },

        {
          label: "Miscellaneous Fee",
          value: "4,000",
        },

        {
          label: "Books",
          value: "4,000",
        },

        {
          header: "School Uniform"
        },

        {
          label: "Uniform Girls",
          value: "800",
        },

        {
          label: "Uniform Boys",
          value: "1,000",
        },

        {
          header: "P.E uniform",
        },

        {
          label: "P.E Uniform Girls",
          value: "1,500",
        },

        {
          label: "P.E Uniform Boys",
          value: "1,200",
        },
      ],
    },

    option1: {
          title: "OPTION 1",
          subtitle: "CASH FULL PAYMENT",

          rows: [
            {
              label: "Tuition/Misc Fee",
              value: "20,000",
            },

            {
              label: "Less: Cash Discount",
              value: "(1,000)",
            },

            {
              label: "Net of Discount Tuition/Misc Fee :",
              value: "19,000",
              highlight: true,
            },

            {
              header: "Payable upon enrollment",
            },

            {
              label: "Tuition/Misc Fee",
              value: "19,000",
            },

            {
              label: "Less: Registration Fee",
              value: "(1,000)",
            },

            {
              label: "Books",
              value: "4,000",
            },

            {
              header: "School Uniform"
            },

            {
              label: "Uniform Girls",
              value: "800",
            },

            {
              label: "Uniform Boys",
              value: "1,000",
            },

            {
              header: "P.E uniform",
            },

            {
              label: "P.E Uniform Girls",
              value: "1,500",
            },

            {
              label: "P.E Uniform Boys",
              value: "1,200",
            },
          ],
        },

        option2: {
          title: "OPTION 2",
          subtitle: "PAY LITE MONTHLY INSTALLMENT",

          rows: [
            {
              label: "Tuition/Misc Fee",
              value: "20,000",
            },

            {
              header: "Payable upon enrollment",
            },

            {
              label: "Tuition/Misc Fee",
              value: "10,000",
            },

            {
              label: "Less: Registration Fee",
              value: "(1,000)",
            },

            {
              label: "Books",
              value: "4,000",
            },

            {
              header: "School Uniform"
            },

            {
              label: "Uniform Girls",
              value: "800",
            },

            {
              label: "Uniform Boys",
              value: "1,000",
            },

            {
              header: "P.E uniform",
            },

            {
              label: "P.E Uniform Girls",
              value: "1,500",
            },

            {
              label: "P.E Uniform Boys",
              value: "1,200",
            },

            {
              footerTitle:
                "Monthly Installment every 10th of the Month",

              footer:
                "1,100/monthly (Jun'26-Mar'27)",
            },
          ],
        },

        option3: {
          title: "OPTION 3",
          subtitle: "ALL-IN MONTHLY INSTALLMENT",

          rows: [
            {
              label: "Tuition/Misc Fee",
              value: "21,000",
            },

            {
              header: "Payable upon enrollment",
            },

            {
              label: "Tuition/Misc Fee (Jun-Mar)",
              value: "2,000",
            },

            {
              label: "Books",
              value: "4,000",
            },

            {
              header: "School Uniform"
            },

            {
              label: "Uniform Girls",
              value: "800",
            },

            {
              label: "Uniform Boys",
              value: "1,000",
            },

            {
              header: "P.E uniform",
            },

            {
              label: "P.E Uniform Girls",
              value: "1,500",
            },

            {
              label: "P.E Uniform Boys",
              value: "1,200",
            },

            {
              footerTitle:
                "Monthly Installment every 10th of the Month",

              footer:
                "1,800/monthly (Jun'26-Mar'27)",
            },
          ],
        },
      },
    },

        kinder2: {
  title: "KINDER 2",
  selections: {
    schoolfees: {
      title: "SCHOOL FEES KINDER 2",

      rows: [
        {
          label: "Tuition Fee",
          value: "14,000",
        },

        {
          label: "Miscellaneous Fee",
          value: "4,000",
        },

        {
          label: "Books",
          value: "4,000",
        },

        {
          header: "School Uniform"
        },

        {
          label: "Uniform Girls",
          value: "800",
        },

        {
          label: "Uniform Boys",
          value: "1,000",
        },

        {
          header: "P.E uniform",
        },

        {
          label: "P.E Uniform Girls",
          value: "1,500",
        },

        {
          label: "P.E Uniform Boys",
          value: "1,200",
        },
      ],
    },

    option1: {
          title: "OPTION 1",
          subtitle: "CASH FULL PAYMENT",

          rows: [
            {
              label: "Tuition/Misc Fee",
              value: "20,000",
            },

            {
              label: "Less: Cash Discount",
              value: "(1,000)",
            },

            {
              label: "Net of Discount Tuition/Misc Fee :",
              value: "19,000",
              highlight: true,
            },

            {
              header: "Payable upon enrollment",
            },

            {
              label: "Tuition/Misc Fee",
              value: "19,000",
            },

            {
              label: "Less: Registration Fee",
              value: "(1,000)",
            },

            {
              label: "Books",
              value: "4,000",
            },

            {
              header: "School Uniform"
            },

            {
              label: "Uniform Girls",
              value: "800",
            },

            {
              label: "Uniform Boys",
              value: "1,000",
            },

            {
              header: "P.E uniform",
            },

            {
              label: "P.E Uniform Girls",
              value: "1,500",
            },

            {
              label: "P.E Uniform Boys",
              value: "1,200",
            },
          ],
        },

        option2: {
          title: "OPTION 2",
          subtitle: "PAY LITE MONTHLY INSTALLMENT",

          rows: [
            {
              label: "Tuition/Misc Fee",
              value: "20,000",
            },

            {
              header: "Payable upon enrollment",
            },

            {
              label: "Tuition/Misc Fee",
              value: "10,000",
            },

            {
              label: "Less: Registration Fee",
              value: "(1,000)",
            },

            {
              label: "Books",
              value: "4,000",
            },

            {
              header: "School Uniform"
            },

            {
              label: "Uniform Girls",
              value: "800",
            },

            {
              label: "Uniform Boys",
              value: "1,000",
            },

            {
              header: "P.E uniform",
            },

            {
              label: "P.E Uniform Girls",
              value: "1,500",
            },

            {
              label: "P.E Uniform Boys",
              value: "1,200",
            },

            {
              footerTitle:
                "Monthly Installment every 10th of the Month",

              footer:
                "1,100/monthly (Jun'26-Mar'27)",
            },
          ],
        },

        option3: {
          title: "OPTION 3",
          subtitle: "ALL-IN MONTHLY INSTALLMENT",

          rows: [
            {
              label: "Tuition/Misc Fee",
              value: "21,000",
            },

            {
              header: "Payable upon enrollment",
            },

            {
              label: "Tuition/Misc Fee (Jun-Mar)",
              value: "2,000",
            },

            {
              label: "Books",
              value: "4,000",
            },

            {
              header: "School Uniform"
            },

            {
              label: "Uniform Girls",
              value: "800",
            },

            {
              label: "Uniform Boys",
              value: "1,000",
            },

            {
              header: "P.E uniform",
            },

            {
              label: "P.E Uniform Girls",
              value: "1,500",
            },

            {
              label: "P.E Uniform Boys",
              value: "1,200",
            },

            {
              footerTitle:
                "Monthly Installment every 10th of the Month",

              footer:
                "1,800/monthly (Jun'26-Mar'27)",
            },
          ],
        },
      },
    },
  }

  const toggleMain = (section) => {
    setOpenMain({
      ...openMain,
      [section]: !openMain[section],
    });
  };

  return (
    <section className="px-6 py-10">
      <div className="ml-30 mr-30 mx-auto mb-20">

        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <h2 className="flex items-center gap-2 border-l-4 border-green-700 text-green-700 text-xl font-bold pl-3">
            <Wallet size={30} className="text-green-700" />
            TUITION FEES SY 2026–2027
          </h2>

          <Link
            to="/transportation"
            className="inline-flex items-center justify-center rounded-full border border-green-700 bg-white/10 px-6 py-3 text-sm font-semibold text-green-700 backdrop-blur-sm hover:bg-white/20 gap-2 transition"
          >
            <Bus size={20} className="text-black" />
            Transportation
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-10">

          {Object.entries(tuitionData).map(
            ([sectionKey, sectionData]) => (
              <div
                key={sectionKey}
                className="border border-gray-300 rounded-md bg-white overflow-hidden shadow-sm h-fit"
              >

                {/* MAIN HEADER */}
                <button
                  onClick={() => toggleMain(sectionKey)}
                  className="w-full px-5 py-4 flex items-center justify-between text-green-700 text-sm font-medium border-b "
                >
                  <span>{sectionData.title}</span>

                  {openMain[sectionKey] ? (
                    <ChevronUp size={18} />
                  ) : (
                    <ChevronDown size={18} />
                  )}
                </button>

                {/* CONTENT */}
                {openMain[sectionKey] && (
                  <div className="p-4 space-y-4 bg-gray-50">

                    {Object.entries(sectionData.selections).map(
                      ([optionKey, optionData]) => (
                        <div
                          key={optionKey}
                          className="border border-gray-300 rounded-md bg-white overflow-hidden"
                        >

                          {/* OPTION BUTTON */}
                          <button
                            onClick={() =>
                              setOpenOption(
                                openOption ===
                                  `${sectionKey}-${optionKey}`
                                  ? null
                                  : `${sectionKey}-${optionKey}`
                              )
                            }
                            className="w-full px-4 py-4 flex items-center justify-between text-green-700 text-sm font-semibold"
                          >
                            <span>
                              {optionData.title}
                            </span>

                            {openOption ===
                            `${sectionKey}-${optionKey}` ? (
                              <ChevronUp size={18} />
                            ) : (
                              <ChevronDown size={18} />
                            )}
                          </button>

                          {/* OPTION CONTENT */}
                          {openOption ===
                            `${sectionKey}-${optionKey}` && (
                            <div className="px-5 pb-5 text-sm text-gray-800">

                              {/* TITLE */}
                              <div className="text-center py-5">
                                <h2 className="text-2xl font-bold text-green-700">
                                  {optionData.title}
                                </h2>

                                <p className="text-lg font-bold text-orange-700">
                                  {optionData.subtitle}
                                </p>
                              </div>

                              {/* ROWS */}
                              {optionData.rows.map(
                                (row, index) => (

                                  row.header ? (

                                    <div
                                      key={index}
                                      className="text-center font-bold text-green-700 text-lg py-5"
                                    >
                                      {row.header}
                                    </div>

                                  ) : row.footer ? (

                                    <div
                                      key={index}
                                      className="text-center py-5"
                                    >
                                      <p className="text-m font-semibold text-gray-700">
                                        {row.footerTitle}
                                      </p>

                                      <p className="text-md font-bold text-blue-700">
                                        {row.footer}
                                      </p>
                                    </div>

                                  ) : (

                                    <div
                                      key={index}
                                      className={`flex justify-between border-t py-3 text-[15px]
                                      ${
                                        row.highlight
                                          ? "text-blue-700 font-bold"
                                          : ""
                                      }`}
                                    >
                                      <span>
                                        {row.label}
                                      </span>

                                      <span>
                                        {row.value}
                                      </span>
                                    </div>

                                  )
                                )
                              )}
                            </div>
                          )}
                        </div>
                      )
                    )}
                  </div>
                )}
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}

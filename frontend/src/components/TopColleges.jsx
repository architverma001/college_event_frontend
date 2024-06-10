import React, { useRef } from "react";
import "./css/TopCollegescss.css";

const TopColleges = () => {
  const scrollContainerRef = useRef(null);

  const scrollLeft = () => {
    scrollContainerRef.current.scrollBy({
      left: -200, // Adjust this value to control the scroll distance
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    scrollContainerRef.current.scrollBy({
      left: 200, // Adjust this value to control the scroll distance
      behavior: "smooth",
    });
  };
  return (
    <>
      <div className="w-full max-w-6xl mx-auto">
        <h1 className="text-3xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl text-start mt-8 mx-4 mb-4 font-semibold text-gray-700">
          Top 10 Colleges
        </h1>
        <div className="flex items-center justify-center space-x-4 mt-8">
          <button
            onClick={scrollLeft}
            className="flex items-center justify-center w-10 h-10 rounded-full border border-gray-300 text-gray-600 hover:bg-gray-200 focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <div
            ref={scrollContainerRef}
            className="flex space-x-4 overflow-x-auto scrollbar-hide"
          >
            <button className="px-4 py-2 rounded-full border border-gray-300 text-gray-600 hover:bg-gray-200 focus:outline-none">
              BA
            </button>
            <button className="px-4 py-2 rounded-full border border-gray-300 text-gray-600 hover:bg-gray-200 focus:outline-none">
              B.Com
            </button>
            <button className="px-4 py-2 rounded-full border border-gray-300 text-gray-600 hover:bg-gray-200 focus:outline-none">
              BCA
            </button>
            <button className="px-4 py-2 rounded-full border border-gray-300 text-gray-600 hover:bg-gray-200 focus:outline-none">
              BBA/BMS
            </button>
            <button className="px-4 py-2 rounded-full border border-gray-300 text-gray-600 hover:bg-gray-200 focus:outline-none">
              B.Sc (Nursing)
            </button>
            <button className="px-4 py-2 rounded-full border border-gray-300 text-gray-600 hover:bg-gray-200 focus:outline-none">
              M.Sc
            </button>
            <button className="px-4 py-2 rounded-full border border-gray-300 text-gray-600 hover:bg-gray-200 focus:outline-none">
              MA
            </button>
            <button className="px-4 py-2 rounded-full border border-gray-300 text-gray-600 hover:bg-gray-200 focus:outline-none">
              Polytechnic
            </button>
            <button className="px-4 py-2 rounded-full border border-gray-300 text-gray-600 hover:bg-gray-200 focus:outline-none">
              B.Ed
            </button>
            <button className="px-4 py-2 rounded-full border border-gray-300 text-gray-600 hover:bg-gray-200 focus:outline-none">
              M.Com
            </button>
            <button className="px-4 py-2 rounded-full border border-gray-300 text-gray-600 hover:bg-gray-200 focus:outline-none">
              MCA
            </button>
            <button className="px-4 py-2 rounded-full border border-gray-300 text-gray-600 hover:bg-gray-200 focus:outline-none">
              Polytechnic
            </button>
            <button className="px-4 py-2 rounded-full border border-gray-300 text-gray-600 hover:bg-gray-200 focus:outline-none">
              B.Ed
            </button>
            <button className="px-4 py-2 rounded-full border border-gray-300 text-gray-600 hover:bg-gray-200 focus:outline-none">
              M.Com
            </button>
            <button className="px-4 py-2 rounded-full border border-gray-300 text-gray-600 hover:bg-gray-200 focus:outline-none">
              MCA
            </button>
            <button className="px-4 py-2 rounded-full border border-gray-300 text-gray-600 hover:bg-gray-200 focus:outline-none">
              Polytechnic
            </button>
            <button className="px-4 py-2 rounded-full border border-gray-300 text-gray-600 hover:bg-gray-200 focus:outline-none">
              B.Ed
            </button>
            <button className="px-4 py-2 rounded-full border border-gray-300 text-gray-600 hover:bg-gray-200 focus:outline-none">
              M.Com
            </button>
            <button className="px-4 py-2 rounded-full border border-gray-300 text-gray-600 hover:bg-gray-200 focus:outline-none">
              MCA
            </button>
          </div>
          <button
            onClick={scrollRight}
            className="flex items-center justify-center w-10 h-10 rounded-full border border-gray-300 text-gray-600 hover:bg-gray-200 focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
        <div className="flex flex-col">
          <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
              <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-base font-bold text-gray-500 uppercase tracking-wider"
                      >
                        Rank
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-base font-bold text-gray-500 uppercase tracking-wider"
                      >
                        College
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-base font-bold text-gray-500 uppercase tracking-wider"
                      >
                        Ranking
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-base font-bold text-gray-500 uppercase tracking-wider"
                      >
                        Cutoff
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-base font-bold text-gray-500 uppercase tracking-wider"
                      >
                        Application Deadline
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-base font-bold text-gray-500 uppercase tracking-wider"
                      >
                        Fees
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                        #1
                      </td>
                      <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 ">
                        <span class="text-base font-bold">
                          IIT Madras - Indian Institute of Technology - [IITM]
                        </span>
                        <br />
                        <div>Chennai,Tamil Nadu | 5/5</div>
                      </td>
                      <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                        #1 out of 200 in India 2023
                      </td>
                      <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                        CAT 2023 Cut off 85
                      </td>
                      <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                        27 Apr - 18 Jun 2024
                      </td>
                      <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                        ₹214,500 1st Year Fees
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                        #2
                      </td>
                      <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                        <span class="text-base font-bold">
                          IIT Kharagpur - Indian Institute of Technology -
                          [IITKGP]{" "}
                        </span>
                        <br />
                        Kharagpur,West Bengal | 4.9/5
                      </td>
                      <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                        #4 out of 281 in India 2023
                      </td>
                      <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                        CAT 2023 Cut off 90
                      </td>
                      <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                        10 June - 18 Jun 2024
                      </td>
                      <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                        ₹223,600 1st Year Fees
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                        #3
                      </td>
                      <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                        <span class="text-base font-bold">
                          IIMA - Indian Institute of Management
                        </span>
                        <br />
                        Ahmedabad, Gujarat | 4.8/5
                      </td>
                      <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                        #2 out of 50 in India 2019
                      </td>
                      <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                        CAT 2023 Cut off 99
                      </td>
                      <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                        3 Jul - 21 Feb 2024
                      </td>
                      <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                        ₹3,300,00 Total Fees
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                        #4
                      </td>
                      <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                        <span class="text-base font-bold">
                          IIT Madras - Indian Institute of Technology - [IITM]
                        </span>
                        <br />
                        Chennai,Tamil Nadu
                      </td>
                      <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                        #1 out of 200 in India 2023
                      </td>
                      <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                        CAT 2023 Cut off 85
                      </td>
                      <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                        27 Apr - 18 Jun 2024
                      </td>
                      <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                        ₹214,500 1st Year Fees
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                        #5
                      </td>
                      <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                        <span class="text-base font-bold">
                          IIT Madras - Indian Institute of Technology - [IITM]
                        </span>
                        <br />
                        Chennai,Tamil Nadu
                      </td>
                      <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                        #1 out of 200 in India 2023
                      </td>
                      <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                        CAT 2023 Cut off 85
                      </td>
                      <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                        27 Apr - 18 Jun 2024
                      </td>
                      <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                        ₹214,500 1st Year Fees
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                        #6
                      </td>
                      <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                        <span class="text-base font-bold">
                          IIT Madras - Indian Institute of Technology - [IITM]
                        </span>
                        <br />
                        Chennai,Tamil Nadu
                      </td>
                      <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                        #1 out of 200 in India 2023
                      </td>
                      <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                        CAT 2023 Cut off 85
                      </td>
                      <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                        27 Apr - 18 Jun 2024
                      </td>
                      <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                        ₹214,500 1st Year Fees
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                        #7
                      </td>
                      <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                        <span class="text-base font-bold">
                          IIT Madras - Indian Institute of Technology - [IITM]
                        </span>
                        <br />
                        Chennai,Tamil Nadu
                      </td>
                      <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                        #1 out of 200 in India 2023
                      </td>
                      <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                        CAT 2023 Cut off 85
                      </td>
                      <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                        27 Apr - 18 Jun 2024
                      </td>
                      <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                        ₹214,500 1st Year Fees
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                        #8
                      </td>
                      <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                        <span class="text-base font-bold">
                          IIT Madras - Indian Institute of Technology - [IITM]
                        </span>
                        <br />
                        Chennai,Tamil Nadu
                      </td>
                      <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                        #1 out of 200 in India 2023
                      </td>
                      <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                        CAT 2023 Cut off 85
                      </td>
                      <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                        27 Apr - 18 Jun 2024
                      </td>
                      <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                        ₹214,500 1st Year Fees
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                        #9
                      </td>
                      <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                        <span class="text-base font-bold">
                          IIT Madras - Indian Institute of Technology - [IITM]
                        </span>
                        <br />
                        Chennai,Tamil Nadu
                      </td>
                      <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                        #1 out of 200 in India 2023
                      </td>
                      <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                        CAT 2023 Cut off 85
                      </td>
                      <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                        27 Apr - 18 Jun 2024
                      </td>
                      <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                        ₹214,500 1st Year Fees
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                        #10
                      </td>
                      <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                        <span class="text-base font-bold">
                          IIT Madras - Indian Institute of Technology - [IITM]
                        </span>
                        <br />
                        Chennai,Tamil Nadu
                      </td>
                      <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                        #1 out of 200 in India 2023
                      </td>
                      <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                        CAT 2023 Cut off 85
                      </td>
                      <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                        27 Apr - 18 Jun 2024
                      </td>
                      <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                        ₹214,500 1st Year Fees
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopColleges;

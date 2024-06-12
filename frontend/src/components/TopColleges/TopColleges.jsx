import React, { useRef, useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

import "./TopCollegescss.css";

const TopColleges = () => {
  const [college, setCollege] = useState("Btech");
  const containerRef = useRef(null);
  const [containerWidth, setContainerWidth] = useState(0);

  useEffect(() => {
    if (containerRef.current) {
      setContainerWidth(containerRef.current.offsetWidth);
    }
  }, []);

  const handleScrollLeft = () => {
    if (containerRef.current) {
      const scrollAmount = Math.max(100, containerWidth / 2); // Limit scroll to 100 pixels or display size - 50
      containerRef.current.scrollTo({
        left: containerRef.current.scrollLeft - scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const handleScrollRight = () => {
    if (containerRef.current) {
      const scrollAmount = Math.max(100, containerWidth / 2); // Limit scroll to 100 pixels or display size - 50
      containerRef.current.scrollTo({
        left: containerRef.current.scrollLeft + scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const handleCollege = (colleges) => {
    setCollege(colleges);
  };

  const collegeData = [
    {
      id: 1,
      type: "Btech",
    },
    {
      id: 2,
      type: "Mtech",
    },
    {
      id: 3,
      type: "MBA",
    },
    {
      id: 4,
      type: "BBA",
    },
    {
      id: 5,
      type: "BCA",
    },
    {
      id: 6,
      type: "MCA",
    },
    {
      id: 7,
      type: "MBBS",
    },
    {
      id: 8,
      type: "BCOM",
    },
    {
      id: 9,
      type: "MCOM",
    },
    {
      id: 10,
      type: "BSC",
    },
    {
      id: 11,
      type: "MSC",
    },
    {
      id: 12,
      type: "PHD",
    },
    {
      id: 13,
      type: "Nursing",
    },
  ];
  return (
    <>
      <div className="w-full max-w-6xl mx-auto">
        <h1 className=" text-gray-600 text-xl font-bold mb-4 sm:text-xl md:text-2xl lg:text-3xl xl-text-3xl ">
          Top 10 Colleges
        </h1>
        <div className="flex">
          <button
            onClick={handleScrollLeft}
            className=" bg-opacity-70 text-black p-2 rounded-full smooth-transition"
          >
            {containerWidth > 600 ? (
              <FontAwesomeIcon icon={faChevronLeft} />
            ) : (
              <div></div>
            )}
          </button>
          <div
            className="flex gap-3 w-full max-w-6xl mx-auto overflow-x-auto  overflow-handle"
            ref={containerRef}
          >
            {collegeData.map((colleges) => (
              <div
                key={colleges.id}
                className={`  scrollbar-hide px-6 mx-1 py-2 hover:cursor-pointer ${
                  colleges.type === college ? "bg-blue" : "bg-normal"
                }`}
                onClick={() => {
                  handleCollege(colleges.type);
                }}
              >
                {colleges.type}
              </div>
            ))}
          </div>
          <button
            onClick={handleScrollRight}
            className=" bg-opacity-70 text-black p-2 rounded-full smooth-transition"
          >
            {containerWidth > 600 ? (
              <FontAwesomeIcon icon={faChevronRight} />
            ) : (
              <div></div>
            )}
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

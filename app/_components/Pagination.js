"use client";
import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
// import { useState } from "react";
import { Suspense } from "react";
export default function Pagination() {
  const [currentPage, setCurrentPage] = useState(1);
  const searchParams = useSearchParams();
  const router = useRouter();

  // Handle category click
  const handlePageClick = (value) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", value); // Set the selected category
    router.replace(`?${params.toString()}`);
  };

  const totalPages = 10;
  const maxVisiblePages = 5;

  const handleNext = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  const handlePrevious = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const getPageNumbers = () => {
    let startPage = Math.max(1, currentPage - 2);
    let endPage = Math.min(totalPages, currentPage + 2);

    if (currentPage >= 7) {
      startPage = totalPages - maxVisiblePages + 1;
      endPage = totalPages;
    }

    const pageNumbers = [];
    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(i);
    }
    return pageNumbers;
  };

  return (
    <Suspense>
      <div className="my-16 ">
        <div className="flex justify-center items-center">
          <ul className="pagination flex space-x-2">
            <li className={currentPage === 1 ? "disabled" : ""}>
              <button
                onClick={() => {
                  handlePrevious();
                  handlePageClick(currentPage);
                }}
                disabled={currentPage === 1}
                className={` ${
                  currentPage === 1 ? "disabled cursor-not-allowed" : ""
                } border-none text-center  cursor-pointer lg:text-base sm:text-md text-xs  outline-none md:px-6 px-2 sm:px-4 py-1 md:py-2 bg-yellow-500 rounded-lg  text-black `}
              >
                Previous
              </button>
            </li>

            {currentPage < 7 && currentPage > 3 && (
              <li>
                <button className=" border-none outline-none  aspect-square bg-black  text-slate-50 font-light px-[.5rem] py-[0.3px] rounded-lg">
                  &bull;&bull;&bull;
                </button>
              </li>
            )}

            {getPageNumbers().map((page, index) => (
              <li key={index} className={currentPage === page ? "active" : ""}>
                <button
                  onClick={() => {
                    setCurrentPage(page);
                    handlePageClick(page);
                  }}
                  className={`   ${
                    currentPage === page
                      ? "active bg-yellow-500 sm:font-bold font-[400]"
                      : "bg-black font-light"
                  }  border-none outline-none  aspect-square bg-black  text-slate-50  md:px-[1rem] px-[.5rem] md:text-base text-xl py-[0.3px] rounded-lg`}
                >
                  {page}
                </button>
              </li>
            ))}

            {currentPage < 7 && currentPage <= totalPages - maxVisiblePages && (
              <li>
                <button className=" border-none outline-none   aspect-square bg-black  text-slate-50 font-light px-[.5rem] py-[0.3px] rounded-lg">
                  &bull;&bull;&bull;
                </button>
              </li>
            )}

            <li className={currentPage === totalPages ? "disabled" : ""}>
              <button
                onClick={() => {
                  handleNext();
                  handlePageClick(currentPage);
                }}
                disabled={currentPage === totalPages}
                className={` ${
                  currentPage === 10 ? "cursor-not-allowed" : ""
                } border-none text-center  cursor-pointer lg:text-base sm:text-md text-xs  outline-none md:px-6 px-2 sm:px-4 py-1 md:py-2 bg-yellow-500 rounded-lg  text-black `}
              >
                Next
              </button>
            </li>
          </ul>
        </div>
      </div>
    </Suspense>
  );
}

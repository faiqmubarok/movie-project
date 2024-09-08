import propTypes from "prop-types";
import { MdNavigateNext } from "react-icons/md";


const Pagination = ({ page, totalPages, setPage }) => {
  return (
    <div className="py-2 space-x-4 mx-auto w-full flex justify-center items-center font-medium">
      <button
        className="p-2 rounded-lg text-white border border-secondary hover:text-accent hover:bg-secondary disabled:cursor-not-allowed disabled:hover:text-white disabled:hover:bg-transparent shadow-md"
        disabled={page === 1}
        onClick={() => setPage((prevPage) => prevPage - 1)}
      >
        {<MdNavigateNext className="w-6 h-6 rotate-180" />}
        </button>
      <span className="text-white text-sm">
        {" "}
        Page {page} of {totalPages}{" "}
      </span>
      <button
        className="p-2 rounded-lg text-white border border-secondary hover:text-accent hover:bg-secondary disabled:cursor-not-allowed disabled:hover:text-white disabled:hover:bg-transparent shadow-md"
        disabled={page === totalPages}
        onClick={() => setPage((prevPage) => prevPage + 1)}
      >
        {<MdNavigateNext className="w-6 h-6" />}
      </button>
    </div>
  );
};

Pagination.propTypes = {
  page: propTypes.number,
  totalPages: propTypes.number,
  setPage: propTypes.func,
};

export default Pagination;

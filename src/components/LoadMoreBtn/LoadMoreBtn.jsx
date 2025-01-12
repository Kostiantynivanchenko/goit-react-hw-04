import PropTypes from "prop-types"; // Import PropTypes
import s from "./LoadMoreBtn.module.css";

const LoadMoreBtn = ({ onLoadMore }) => {
  return (
    <div className={s.wrapperLoadBtn}>
      <button className={s.loadBtn} onClick={onLoadMore}>
        Load more
      </button>
    </div>
  );
};

// Add PropTypes validation
LoadMoreBtn.propTypes = {
  onLoadMore: PropTypes.func.isRequired, // onLoadMore should be a function and is required
};

export default LoadMoreBtn;

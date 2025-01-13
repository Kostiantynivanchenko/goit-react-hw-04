import PropTypes from "prop-types";

const ImageCard = ({ article, openModal }) => {
  if (
    !article ||
    !article.urls ||
    !article.urls.small ||
    !article.urls.regular
  ) {
    console.warn("Invalid article object passed to ImageCard:", article);
    return null;
  }

  return (
    <img
      src={article.urls.small}
      alt={article.alt_description || "Image"}
      onClick={() => {
        console.log("Image clicked:", article.urls.small);
        openModal(article.urls.regular);
      }}
      style={{ cursor: "pointer" }}
    />
  );
};

ImageCard.propTypes = {
  article: PropTypes.shape({
    urls: PropTypes.shape({
      small: PropTypes.string.isRequired,
      regular: PropTypes.string.isRequired,
    }),
    alt_description: PropTypes.string,
  }).isRequired,
  openModal: PropTypes.func.isRequired,
};

export default ImageCard;

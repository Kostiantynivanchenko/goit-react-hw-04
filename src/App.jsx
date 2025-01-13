import { useEffect, useState } from "react";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import { fetchArticles } from "./components/services/api";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import toast from "react-hot-toast";
import ImageModal from "./components/ImageModal/ImageModal";
import SearchBar from "./components/SearchBar/SearchBar";

function App() {
  const [articles, setArticles] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  useEffect(() => {
    if (!searchValue) return;

    const getArticlesData = async () => {
      try {
        setIsLoading(true);
        setIsError(false);

        if (page === 1) setArticles([]);

        const fetchResult = await fetchArticles(searchValue, page);

        const results = fetchResult.data.results;
        if (results.length === 0 && page === 1) {
          toast.error("Incorrect request");
          return;
        }

        setArticles((prev) => [...prev, ...results]);
        setTotalPages(fetchResult.data.total_pages);
        toast.success("Data successfully loaded!");
        console.log(fetchResult);
      } catch (error) {
        setIsError(true);
        console.log("Error loading data!", error);
        toast.error("Error loading data!");
      } finally {
        setIsLoading(false);
      }
    };
    getArticlesData();
  }, [searchValue, page]);

  const getSubmitValue = (value) => {
    if (value.trim() === "") {
      toast.error("Enter a search query!");
      return;
    }

    setSearchValue(value);
    setPage(1);
  };

  const handleChangePage = () => {
    setPage((prev) => prev + 1);
  };

  const openModal = (imageUrl) => {
    console.log("Modal opened with image:", imageUrl);
    setSelectedImage(imageUrl);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedImage(null);
  };

  return (
    <div>
      <SearchBar onSubmit={getSubmitValue} />
      {isLoading && <Loader />}
      {isError && <ErrorMessage />}
      {articles.length > 0 && (
        <ImageGallery articles={articles} openModal={openModal} />
      )}
      {articles.length > 0 && page < totalPages && (
        <LoadMoreBtn onLoadMore={handleChangePage} />
      )}
      {selectedImage && (
        <ImageModal
          modalIsOpen={modalIsOpen}
          closeModal={closeModal}
          imageUrl={selectedImage}
          imageAlt="Selected Image"
        />
      )}
    </div>
  );
}

export default App;

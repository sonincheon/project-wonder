export function Pagination({
  postsNum,
  postsPerPage,
  setCurrentPage,
  currentPage,
  handlePageChange // 수정된 부분
}) {
  const pageList = [];
  const totalPages = Math.ceil(postsNum / postsPerPage);

  for (let i = 1; i <= totalPages; i++) {
    pageList.push(i);
  }

  const goToNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const goToPrevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  if (totalPages === 1) {
    return null;
  }

  return (
    <div>
      <button onClick={goToPrevPage} disabled={currentPage === 1}>
        prev
      </button>

      {pageList.map((page) => (
        <button
          key={page}
          onClick={() => handlePageChange(page)} // 수정된 부분
          className={currentPage === page ? "active" : ""}
        >
          {page}
        </button>
      ))}

      <button onClick={goToNextPage} disabled={currentPage === pageList.length}>
        next
      </button>
    </div>
  );
}
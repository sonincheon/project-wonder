import styled from "styled-components";
const CommunityListMapCss = styled.div`
width: 100%;
height: auto;
  display:  flex;
justify-content: center;
 
button{
  border-radius: 8px;
  margin: 0 5px;
  height:25px;
  background-color:  #ffd503;
}
.buttonColor1{
  background-color: #e6e6e3;
}
.buttonColor2{
  background-color:  #ffd503;
}
`
export function Pagination({
  postsNum,
  postsPerPage,
  setCurrentPage,
  currentPage,
  // handlePageChange // 수정된 부분
}) {
  //페이지 넘버 버튼을 출력할 배열(버튼 수량)
  const pageList = [];
  //페이지 수 =  총 데이터 수 / 보여줄 데이터
  const totalPages = Math.ceil(postsNum / postsPerPage);
  //페이지 수만큼 pageList 배열을 만듬;
  for (let i = 1; i <= totalPages; i++) {
    pageList.push(i);
  }
  //다음 페이지 가기 버튼을 누르면  현재 페이지를 올림
  const goToNextPage = () => {
    setCurrentPage(currentPage + 1);
  };
  //다음 페이지 가기 버튼을 누르면  현재 페이즈지를 내림
  const goToPrevPage = () => {
    setCurrentPage(currentPage - 1);
  };
  //첫 페이지 가기
  const goTofirstPage = () => {
    setCurrentPage(1);
  };
  //마지막 페이지 가기 
  const goTolastPage = () => {
    setCurrentPage(postsPerPage - 1);
  };
  //페이지가 없으면 보여줄 페이지 없음.
  if (totalPages === 1) {
    return null;
  }

  return (
    <CommunityListMapCss>
      <button onClick={goTofirstPage} disabled={currentPage === 1}>
        First
      </button>
      {/* 전 페이지로 가기 버튼      현재 페이지가 1이면 기능을 정지*/}
      <button onClick={goToPrevPage} disabled={currentPage === 1}>
        prev
      </button>
      {/* 페이지버튼을 map으로 출력*/}
      {pageList.map((page) => (
        <button
          key={page}
          // 버튼 클릭시 상위에있는 현재페이지를 바꿔 출력 배열을 바꿔줌
          onClick={() => setCurrentPage(page)}
          //현재 페이지와 보여주는 페이지가 같으면 색상을 바꿈
          className={currentPage === page ? "buttonColor1" : "buttonColor2"}


        >
          {page}
        </button>
      ))}
      {/* 다음 페이지로 가기 버튼      현재 페이지가 마지막이면 정지*/}
      <button onClick={goToNextPage} disabled={currentPage === pageList.length}>
        next
      </button>
      <button onClick={goTolastPage} disabled={currentPage === pageList.length}>
        Last
      </button>
    </CommunityListMapCss>
  );
}
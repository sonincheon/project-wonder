/*원모 페이지 */
import styled, { css } from "styled-components";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import UserAxiosApi from "../api/CommunityAxiosApi";
import { useState } from "react";
import CommunityModal from "../components/Community/CommunityModal";
import { Pagination } from "../components/Community/Pagination";
import { CommunityListMap } from "../components/Community/communityListMap"; // 수정된 부분

const CommunityCss = styled.div`
max-width: 1200px;
white-space:nowrap;
width: 80%;
margin: 0 auto;
.LinkCss{
  color:black;
  text-decoration: none;
}

`;
const Content1 = styled.div`
  width: 100%;
  height: 50px;

  margin-top: 100px;
  font-size: 25px;
  p{
    width: 180px;
    border-bottom: 3px solid  #F4CE14;
  }
`;
const Item1 = styled.div`

width: 140px;
p{
  margin-top: 5px;
  border-right: 1px solid #000000;

}
`;
const Item2 = styled.div`
width: 100%;


`;
const Content2 = styled.div`
  width: 100%;
  height: 25px;
 
  background:  #F4CE14;
  display: flex;
  font-size: 14px;
  text-align: center;


  
`;
const Content3 = styled.div`
  width: 100%;
  height: auto;

`;
const Content4 = styled.div`
  width: 100%;
  height: 100px;


`;
const Item3 = styled.div`
margin-top: 40px;
width: 100%;
display: flex;
`;
const Item4 = styled.div`
width: 140px;
margin-top: 5px;
`;
const Serch = styled.div`
margin-left: 80px;
width: 70%;
height: 30px;
border-radius: 10px;
display: flex;
`;
const SerchVar = styled.input`
width: 100%;
height: 30px;

`;
const SerchBtn = styled.button`
width: 60px;
height: 30px;
background-color: #F4CE14;
border: 1px solid black;
border-radius: 10px;
`;
const Write = styled.button`
width: 80px;
height: 30px;
background-color: #F4CE14;
border: 1px solid black;
border-radius: 10px;
margin-left:70px ;
`;

const Content5 = styled.div`
display: ${props => (props.color ? 'none' : 'black')};
`
const Community = () => {
  const [search, setSearch] = useState("");
  const isLoggedin = window.localStorage.getItem("isLogin") === 'true';

  //원본 데이터
  const [posts, setPosts] = useState([]);
  //필터를 사용한 후의 출력데이터
  const [postsList, setPostsList] = useState([]);
  //현재 페이지
  const [currentPage, setCurrentPage] = useState(1);
  //페이지당 출력 수
  const [postsPerPage, setPostsPerPage] = useState(10);
  //검색창 입력시 검색값을 입력.
  const onSearch = (e) => {
    setSearch(e.target.value);
  }
  const SearchClick = (e) => {
    const filteredData = posts.filter((item) =>
      item.title.toLowerCase().includes(search.toLowerCase()));
    // setPosts를 사용하여 필터링된 결과를 상태로 업데이트합니다.
    setPostsList(filteredData);
    setSearch('');

  };
  useEffect(() => {
    const onUserCheck = async () => {
      const res = await UserAxiosApi.SelectAllCommunity();
      if (res.status === 200) {
        setPosts(res.data);
        setPostsList(res.data);
      } else {
        console.log("게시글이 없습니다.");

      }
    };
    onUserCheck();
  }, []);

  const firstPostIndex = (currentPage - 1) * postsPerPage;
  const lastPostIndex = firstPostIndex + postsPerPage;
  const currentPosts = postsList.slice(firstPostIndex, lastPostIndex);

  // const handlePageChange = (pageNumber) => {
  //   setCurrentPage(pageNumber);
  // };

  return (
    <CommunityCss>
      <Content5>

        <Content1><p>커뮤니티 게시판</p></Content1>
        <Content2>
          <Item1><p>No</p></Item1>
          <Item2>  <p >제목</p></Item2>
          <Item1>   <p  >글쓴이</p></Item1>
          <Item1>  <p  >등록일</p></Item1>
          <Item4>   <p  >조회수</p></Item4>
        </Content2>

        {/* map을 사용하여 페이지르 출력 */}
        <CommunityListMap list={currentPosts} />

        <Content3>

          <Pagination
            //출력데이터할(배열) 수
            postsNum={postsList.length}
            //보여줄 페이지(배열) 수
            postsPerPage={postsPerPage}
            //현재 페이지를 변경 
            setCurrentPage={setCurrentPage}
            //현재 페이지
            currentPage={currentPage}
          />
        </Content3>

        <Content4>
          <Item3>
            <Serch>
              <SerchVar value={search} onChange={onSearch} onKeyDown={(e) => e.key === 'Enter' && SearchClick(e)} ></SerchVar>
              <SerchBtn onClick={SearchClick}><p>검색</p></SerchBtn>
            </Serch>
            {isLoggedin ?
              <Link to="/Communitywrite"><Write><p>글 쓰기</p></Write></Link>
              : <></>
            }


          </Item3>

        </Content4>

      </Content5>

    </CommunityCss>
  );
};

export default Community;
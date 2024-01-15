import axios from "axios";

const WONDER_WALKER = "http://localhost:8111";
// const WONDER_WALKER = "http://192.168.10.23:8111";

const DiyAxiosApi = {
  goodsList: async (world) => {
    //겟 바디영역
    return await axios.get(WONDER_WALKER + `/Goods?world=${world}`);
  },

  // 여행정보 공유 메인 화면
  travelList: async (world, theme) => {
    return await axios.get(
      WONDER_WALKER + `/DiyPage?world=${world}&theme=${theme}`
    );
  },

  // 게시글 눌렀을 때 보기
  travelContent: async (travelNum) => {
    console.log(travelNum);
    return await axios.get(
      WONDER_WALKER + `/DiyPage/Diyviewitem?travelNum=${travelNum}`
    );
  },

  // 게시글 상세페이지
  SelectDIY: async (travelNum) => {
    console.log(travelNum);
    return await axios.get(
      WONDER_WALKER + `/DiyPage/SelectDIY?travelNum=${travelNum}`
    );
  },
  // 게시물 등록
  travelInsert: async (userId, world, area, toDate, toDate1, theme, title) => {
    alert(toDate);
    const insert = {
      userId: userId,
      world: world,
      area: area,
      toDate: toDate,
      toDate1: toDate1,
      theme: theme,
      title: title,
    };
    return await axios.post(WONDER_WALKER + "/DiyPage/DiyWrite", insert);
  },
  // 게시물 등록2
  travelInsert2: async (tvNum, daynum, url, file, content) => {
    alert("axios2");
    const insert2 = {
      tvNum: tvNum,
      day: daynum,
      url: url,
      file: file,
      content: content,
    };
    return await axios.post(WONDER_WALKER + "/DiyPage/DiyWrite/days", insert2);
  },




  //즐겨찾기한 내용만 가져오기

  SelectFavor: async (id) => {
    return await axios.get(WONDER_WALKER + `/DiyPage/SelectFavor/?id=${id}`);
  },


}
export default DiyAxiosApi;

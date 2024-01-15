import axios from "axios";

const WONDER_WALKER = "http://localhost:8111";
// const WONDER_WALKER = "http://192.168.10.23:8111";

const AxiosApi = {
  // 게시글 조회
  boardList: async () => {
    return await axios.get(WONDER_WALKER + "/api/board");
  },
  // 게시글 쓰기
  boardWrite: async (title, content, userId, img) => {
    const board = {
      title: title,
      content: content,
      userId: userId,
      img: img,
    };
    return await axios.post(WONDER_WALKER + "/api/board/new", board);
  },

  //상품리스트 조회
  goodsList: async (world, area, count) => {
    //겟 바디영역
    return await axios.get(WONDER_WALKER + `/Goods?world=${world}&area=${area}&count=${count}`);
  },

  //상품상세페이지 조회
  goodsInfo: async (itemCode) => {
    //겟 바디영역
    return await axios.get(WONDER_WALKER + `/Goods/info?itemCode=${itemCode}`);
  },

  goodsSell: async (userId, itemNum, i_Date, date_num, person, price) => {
    const sell = {
      id: userId,
      itemNum: itemNum,
      i_date: i_Date,
      date_num: date_num,
      person: person,
      price: price,
    };
    return await axios.post(WONDER_WALKER + "/Goods/Complete", sell);
  },
  // 판매리스트
  SellList: async (userId) => {
    //겟 바디영역
    return await axios.get(WONDER_WALKER + `/Goods/cancle?userId=${userId}`);
  },
  //판매취소
  SaleCancle: async (sale_num) => {
    const Cancle = {
      sale_num: sale_num,
    };
    return await axios.post(WONDER_WALKER + "/Goods/cancle", Cancle);
  },
  //조회수증가
  GoodsHit: async (item_num) => {
    const Codes = {
      item_num: item_num,
    };
    return await axios.post(WONDER_WALKER + "/Goods", Codes);
  },
  //즐겨찾기한 내용만 가져오기  
  SelectFavor: async (id) => {
    alert(id)
    return await axios.get(WONDER_WALKER + `/Goods/SelectFavor/?id=${id}`);
  },
};

export default AxiosApi;

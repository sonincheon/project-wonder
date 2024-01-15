import axios from "axios";

const WONDER_WALKER = "http://localhost:8111";
// const WONDER_WALKER = "http://192.168.10.23:8111";

const CommunityAxiosApi = {

  // 커뮤니티 글 모두 가져오기
  SelectAllCommunity: async () => {

    return await axios.get(WONDER_WALKER + "/community/SelectAllCommunity");

  },
  // 커뮤니티 글 하나 가져오기
  SelectOneCommunity: async (num) => {

    return await axios.get(WONDER_WALKER + `/community/SelectOneCommunity/?num=${num}`);

  },

  // 글에 따른 댓글 모두 가져오기
  SelectReply: async (num) => {

    return await axios.get(WONDER_WALKER + `/Reply/SelectReply/?num=${num}`);
  },

  // 댓글 등록
  insertReply2: async (userId, num, replyInsert) => {
    const data = {
      userid: userId,
      num: num,
      replyInsert: replyInsert,
    };
    return await axios.post(WONDER_WALKER + `/Reply/insertReply`, data);
  },
  // 댓글 삭제
  deleteReply: async (num) => {

    return await axios.get(WONDER_WALKER + `/Reply/deleteReply/?num=${num}`);
  },

  // 댓글 변경
  updateReply: async (replyNum, newReply) => {
    const data = {
      replyNum: replyNum,
      coment: newReply,
    };
    return await axios.post(WONDER_WALKER + `/Reply/updateReply`, data);
  },





  // 커뮤니티 글등록
  insertCommunity: async (title, content1, userId, url) => {
    alert(title)
    alert(content1)
    alert(userId)
    alert(url)
    const content2 = {
      userId: userId,
      content: content1,
      title: title,
      url: url,
    };
    return await axios.post(WONDER_WALKER + `/community/insertCommunity`, content2);
  },
  // 커뮤니티 글 삭제
  DeleteCommunity: async (num) => {
    alert("삭제")
    return await axios.get(WONDER_WALKER + `/community/DeleteCommunity/?num=${num}`);
  },
  // 커뮤니티 글 수정
  UpdateCommunity: async (num, title, content1) => {

    const content = {
      num: num,
      title: title,
      content1: content1,
    };
    return await axios.post(WONDER_WALKER + `/community/UpdateCommunity`, content);
  },
}

export default CommunityAxiosApi;
import axios from "axios";

const WONDER_WALKER = "http://localhost:8111";
// const WONDER_WALKER = "http://192.168.10.23:8111";

const UserAxiosApi = {

  // 로그인
  Login: async (id, pw) => {
    const login = {
      id: id,
      pwd: pw,
    };
    return await axios.post(WONDER_WALKER + "/users/login", login);
  },

  // 회원가입시 아이디 체크
  SingupIdCheck: async (id) => {
    return await axios.get(WONDER_WALKER + `/users/idcheck/?id=${id}`);
  },

  // 회원가입 inselrt
  Signup: async (id, nick, pwd, name, addr, phone, email) => {
    const userInfo = {
      id: id,
      nick: nick,
      pwd: pwd,
      name: name,
      addr: addr,
      phone: phone,
      email: email,
    };
    return await axios.post(WONDER_WALKER + `/users/signup`, userInfo);
  },


  // ID로 회원정보 출력
  Userinfo: async (id) => {
    return await axios.post(WONDER_WALKER + `/users/userinfo/?id=${id}`);
  },


  //  회원정보 변경
  updateUserInfo: async (id, kind, value) => {
    const userInfo = {
      id: id,
      kind: kind,
      value: value,
    };
    return await axios.post(WONDER_WALKER + `/users/updateUserInfo`, userInfo);
  },


  //  회원 비밀번호 변경
  newPassword: async (userid, newPw) => {
    const userInfo = {
      userid: userid,
      newPw: newPw,
    };
    return await axios.post(WONDER_WALKER + `/users/newPassword`, userInfo);
  },
  //회원 삭제  
  deleteUser1: async (userid) => {
    alert(userid)
    const userInfo = {
      userid: userid,
    };
    return await axios.post(WONDER_WALKER + `/users/deleteUser`, userInfo);
  },
}

export default UserAxiosApi;
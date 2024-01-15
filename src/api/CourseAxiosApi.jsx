import axios from "axios";

const WONDER_WALKER = "http://localhost:8111";
// const WONDER_WALKER = "http://192.168.10.23:8111";

const CourseAxiosApi = {
  // 추천코스 리스트  조회
  courseList: async (area) => {
    return await axios.get(WONDER_WALKER + `/Course?course_area=${area}`);
  },
  // 추천코스 리스트 하나 가져오기
  selectCourseDetail: async (code) => {
    return await axios.get(WONDER_WALKER + `/Course/Info?course_code=${code}`);
  },
  //즐겨찾기한 내용만 가져오기  
  SelectFavor: async (id) => {

    return await axios.get(WONDER_WALKER + `/Course/SelectFavor/?id=${id}`);
  },
};

export default CourseAxiosApi;

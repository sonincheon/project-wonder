import styled, { css } from "styled-components";
import FavorCourseitemjsx from "./FavorDiyitem";

const FavorCourseCss = styled.div`
margin-left: -100px;
margin-top: 50px;
  .memo {
    width: 95%;
    font-size: 25px;
    border-bottom: 5px solid rgba(72, 100, 224, 1);
    display: flex; 

  }
`;

const FavorCourse = () => {
  return (
    <>
       <FavorCourseCss>
        <div className="memo">
          <h3>추천 코스</h3>        
        </div>
        <div className="itetm">
          <FavorCourseitemjsx></FavorCourseitemjsx>
        </div>

        </FavorCourseCss>
    </>
  );
};

export default FavorCourse;
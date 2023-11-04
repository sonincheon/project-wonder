import React from "react";
import styled from "styled-components";

const Detail = styled.div`
.img-box>img {
width: 100%;
display: block;
}

.row::after {
	content: "";
	display: block;
	clear: both;
}

.cell {
	float: left;
	box-sizing: border-box;
}

.cell-right {
	float: right;
	box-sizing: border-box;
}

.margin-0-auto {
	margin: 0 auto;
}

.block {
	display: block;
}

.inline-block {
	display: inline-block;
}

.text-align-center {
	text-align: center;
}

.line-height-0-ch-only {
	line-height: 0;
}

.line-height-0-ch-only>* {
	line-height: normal;
}

.relative {
	position: relative;
}

.absolute-left {
	position: absolute;
	left: 0;
}

.absolute-right {
	position: absolute;
	right: 0;
}

.absolute-middle {
	position: absolute;
	top: 50%;
	transform: translateY(-50%);
}

/* 커스텀 */
/* 반응형 레이아웃 */
.con {
	max-width: 950px;
}

.con-min-width {
	min-width: 320px;
}

.top-menu a {
	text-decoration: none;
	color: gray;
	font-weight: bold;
	font-size: 1.2rem;
}

html, body { 
	overflow-x: hidden;
}

.table-common>table {
	width: 100%;
	border-collapse: collapse;
}

.table-common .btn-box {
	text-align:center;
}

.table-common>table th, .table-common>table td {
	border: 1px solid black;
	padding: 10px;
}

.article-list table {
    border:none;   
    border-top:2px solid lightgray;
    border-bottom:2px solid lightgray;
}

.article-list > table th, .article-list > table td {
    border:none;
}

.article-list > table td {
    border-bottom:1px solid lightgray;
}

.article-list > table thead {
    border-bottom:2px solid lightgray;
    background-color:#F5F5F5;
}

.article-detail {
    border:2px solid lightgray;
}

.article-detail > table {
    border:none;
    width:calc(100% - 100px);
}

.article-detail > table th, .article-detail > table td {
    border:none;
}

.article-detail > table tr:not(:last-child) {
    border-bottom:1px solid lightgray;
}

.article-detail > table tr:not(.article-body), .article-detail > table tr:not(.article-body) > td{
    height:20px;
    font-size:0.8rem;
}

.article-detail > table tr.article-title > td {
    height:40px;
    font-weight:bold;
    font-size:1.2rem;
}

.article-detail > table td:last-child {
    padding-right:100px;
}

.article-detail > .article-writer {
    width:100px;
    height:102px;
    background-color:lightgray;
    border-bottom:1px solid lightgray;
    text-align:center;
}

.article-detail > .article-writer .writer-icon {
    margin:0 auto;
    background-color:white;
    width:80px;
    height:80px;
    border-radius:50%;
}

.reply {
    margin-top:20px;
    border:2px solid lightgray;
    padding:15px;
    box-sizing:border-box;
}

.reply-form {
    padding:10px;
}

.reply-form > form input[type="text"] {
    width:200px;
}

.reply-form > form textarea {
    width:calc(100% - 100px);
    min-height:40px;
}

.reply-form > form input[type="submit"] {
    width:80px;
    height:40px;
    transform:translatey(-40%);
}

.reply-form > form > div:not(:last-child) {
    margin-bottom:5px;
}

.reply-list > table {
    border:none;
}

.reply-list > table th {
    display:none;
}

.reply-list > table td {
    border:none;
}

.reply-list > table tr:nth-child(2n+1) {
    background-color:rgba(0,0,0,0.06);
}

.reply-list > table td:first-child {
    font-weight:bold;
}

.reply-list > table td:first-child::after {
    content:" : ";
    font-weight:bold;
}
`;

const CommunityWrite = () => {
    return (
    <Detail>
        <h1 className="con">게시글 상세</h1>
    <section className="article-detail table-common con row">
        <div className="article-writer cell">
                <div className="writer-icon">이미지</div>
                <span>작성자</span>
        </div>
        <table className="cell">
            <tbody>
                <tr className="article-title">
                    <th>[번호]제목</th>
                    <td >내용2_2</td>
                </tr>
                <tr className="article-info">
                    <th>날짜</th>
                    <td>내용3_2</td>
                    <th>조회수</th>
                    <td>내용4_2</td>
                </tr>
                <tr className="article-body">
                    <td>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt deleniti repellat aliquam quis labore est error iste obcaecati laborum illo? Distinctio dolorem quis at assumenda! Perferendis, libero earum! Ducimus, ratione!</td>
                </tr>
            </tbody>
        </table>
    </section>

<div className="con reply">


    <h1 className="">댓글 입력</h1>
    <section className="reply-form">
        <form action="return false;">
            <div>
                <input type="text" />
            </div>
            <div>
                <textarea></textarea>
                <input type="submit" />
            </div>
        </form>
    </section>

    <h1 className="">댓글 목록</h1>
    <section className="reply-list table-common">
        <table>
            <thead>
                <tr>
                    <th>내용1</th>
                    <th>내용2</th>
                    <th>내용3</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>내용1</td>
                    <td>내용2</td>
                    <td>내용3</td>
                </tr>
                <tr>
                    <td>내용1</td>
                    <td>내용2</td>
                    <td>내용3</td>
                </tr>
                <tr>
                    <td>내용1</td>
                    <td>내용2</td>
                    <td>내용3</td>
                </tr>
                <tr>
                    <td>내용1</td>
                    <td>내용2</td>
                    <td>내용3</td>
                </tr>
                <tr>
                    <td>내용1</td>
                    <td>내용2</td>
                    <td>내용3</td>
                </tr>
            </tbody>
        </table>
    </section>
</div>

</Detail>
    );
};

export default CommunityWrite;
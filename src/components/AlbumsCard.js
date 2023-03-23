
import { Link } from "react-router-dom";
import React, { useContext } from "react";
import "./style.css";
import cate from "../category.json";
import comments from '../comment.json'
import { UserContent } from "../App";
const AlbumsCard = ({ item }) => {
	const { user } = useContext(UserContent);

	const countScore = () => {
		let score = 0;
		let count = 0;
		comments.map(e => {
			if (e.movieId == item.id) {
				score += e.score;
				count++;
			}
		})
		if (count == 0) {
			return 0;
		}
		return (score/count).toFixed(2);

	}

	var score = countScore();


	return (
		<Link className="card_wrap col col-sm-3" to={`/detail/${item.categoryId}/${item?.id}`}>
			<div className="card">
				<div className="card_img">
					<img src={item?.thumbnailUrl} alt="anh" />
				</div>
				<div className="card_title">{item?.title}</div>
				<div className="card_title">Năm: {item?.year}</div>
				<div className="card_title">Thể Loại: {cate.find(e => e.id === item.categoryId).title}</div>
				<div className="card_title">Điểm: {score}</div>
				{user?.email
					? <Link to={`/detail/${item.categoryId}/${item?.id}`}><button className="btn btn-primary " style={{ width: '200px' }}>Đánh giá</button></Link>
					: <Link to={"/login"}><button className="btn btn-primary " style={{ width: '200px' }}>Đánh giá</button></Link>
				}



			</div>
		</Link>
	);
};

export default AlbumsCard;

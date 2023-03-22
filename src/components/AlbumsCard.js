
import { Link } from "react-router-dom";
import React, { useContext } from "react";
import "./style.css";
import cate from "../category.json";
import { UserContent } from "../App";
const AlbumsCard = ({ item }) => {
	const { user } = useContext(UserContent);

	return (
		<Link className="card_wrap col col-sm-3" to={`/detail/${item.categoryId}/${item?.id}`}>
			<div className="card">
				<div className="card_img">
					<img src={item?.thumbnailUrl} alt="anh" />
				</div>
				<div className="card_title">{item?.title}</div>
				<div className="card_title">Năm: {item?.year}</div>
				<div className="card_title">Thể Loại: {cate.find(e => e.id === item.categoryId).title}</div>
				<div className="card_title">Điểm: {item?.score}</div>
				{user?.email
					? <Link to={`/detail/${item.categoryId}/${item?.id}`}><button className="btn btn-primary " style={{ width: '200px' }}>Đánh giá</button></Link>
					: <Link to={"/login"}><button className="btn btn-primary " style={{ width: '200px' }}>Đánh giá</button></Link>
				}

				
				
			</div>
		</Link>
	);
};

export default AlbumsCard;

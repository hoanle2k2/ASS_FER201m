import React, { useEffect, useState,useContext } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import { UserContent } from "../App";
import Row from 'react-bootstrap/Row';
import movie from "../movie.json";
import cate from "../category.json";
import 'bootstrap/dist/css/bootstrap.min.css'
import "./style.css";
const Detail = () => {
	const [movies, setMovies] = useState({});
	const { slug, id } = useParams();
	const [cates, setCates] = useState({});
	const { user } = useContext(UserContent);
	useEffect(() => {

		const abs = movie.find(
			(item) => item.id.toString() === id.toString()
		);
		setMovies(abs);
		;
	}, [slug, id]);

	useEffect(() => {

		const abs = cate?.find(
			(item) => item.id.toString() === slug.toString()
		);
		setCates(abs);
		;
	}, [slug, id]);
	return (
		<Container>
			<Row>
				<div className="detail_img col-sm-4">
					<img src={movies.thumbnailUrl} alt="anh" />
				</div>
				<div className="col-sm-8">
					<div className="detail_title">
						{movies.title}
					</div>
					<div className="detail_text">
						Thể loại: <span>{cate.find(e => e.id === movies.categoryId)?.title}</span>
					</div>
					<div className="detail_text">
						Điểm đánh giá: <span>{movies.score}</span>
					</div>
					<div className="detail_text">
						Mô tả: <span>{movies.description}</span>
					</div>

					{user?.email
						? <div><div className="detail_text">
							Chi tiết đánh giá
							<hr></hr>
						</div>
							<div className="detail_text">
								<span>Điểm đánh giá: </span>
								<input ></input>
							</div>
							<div className="detail_text">
								Bình luận:
								<textarea name="paragraph_text" cols="100" rows="10"></textarea>
							</div>
							<button className="btn btn-primary " style={{ width: '200px' }}>Đánh giá</button></div>
						: <></>
				}



					<div className="comment mt-5">Bình luận:</div>
				</div>
			</Row>
		</Container>
	);
};

export default Detail;

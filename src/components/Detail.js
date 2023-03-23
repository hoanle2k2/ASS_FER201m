import React, { useEffect, useRef, useState, useContext } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import Container from 'react-bootstrap/Container';

import Row from 'react-bootstrap/Row';
import movie from "../movie.json";
import cate from "../category.json";
import 'bootstrap/dist/css/bootstrap.min.css'
import "./style.css";
import { UserContent } from '../App.js'
import comments from '../comment.json'
import user1 from '../user.json'

const Detail = () => {
	const [movies, setMovies] = useState({});
	const { slug, id } = useParams();
	const [cates, setCates] = useState({});
	const { user } = useContext(UserContent);
	const navigate = useNavigate();


	useEffect(() => {
		const abs = movie.find(
			(item) => item.id.toString() === id.toString()
		);
		setMovies(abs);
		;
	}, [slug, id]);
	const commentlist = comments.filter(e => e.movieId.toString() === id.toString())

	const commentEdit = useRef();

	const handleComment = () => {
		
		navigate(`/detail/${slug}/${id}`);
	}

	useEffect(() => {
		const abs = cate?.find(
			(item) => item.id.toString() === slug.toString()
		);
		setCates(abs);
		;
	}, [slug, id]);

	const countScore=()=>{
		let score=0;
		let count=0;
		comments.map(e=>{
			if(e.movieId==id){
				score+=e.score;
				count++;
			}
		})
		if(count==0){
			return 0;
		}
		return score/count.toFixed(2);

	}

	var score=countScore();
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
						Điểm đánh giá: <span>{score}</span>
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
								<textarea name="paragraph_text" ref={commentEdit} cols="100" rows="10" value={comments.find(c => c.userId === user.id && c.movieId.toString() === id)?.comment}></textarea>
							</div>
							<button className="btn btn-primary " onClick={handleComment} style={{ width: '200px' }}>Đánh giá</button></div>
						: <></>
					}

					<div className="comment mt-5" style={{ fontWeight: '700' }}>Bình luận:</div>
					{
						commentlist.map(e => (
							<div style={{ fontSize: '2rem' }}>
								<div><span style={{ fontWeight: '700' }}>{user1.find(e1 => e1.id === e.userId).name}</span>: {e.comment}</div>
							</div>
						))
					}
				</div>
			</Row>
		</Container>
	);
};

export default Detail;

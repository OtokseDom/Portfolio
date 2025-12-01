import { useState, useEffect } from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
// import headerImg from "../assets/img/header-img.svg";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Banner = () => {
	const [loopNum, setLoopNum] = useState(0);
	const [isDeleting, setIsDeleting] = useState(false);
	const toRotate = ["Full Stack Developer", "Project Manager", "UI/UX Designer"];
	const [text, setText] = useState("");
	const [delta, setDelta] = useState(100 - Math.random() * 100);
	const period = 1500;
	const [activeLink, setActiveLink] = useState("home");
	const onUpdateActiveLink = (value) => {
		setActiveLink(value);
	};

	useEffect(() => {
		let ticker = setInterval(() => {
			tick();
		}, delta);

		return () => {
			clearInterval(ticker);
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [text]);

	const tick = () => {
		let i = loopNum % toRotate.length;
		let fullText = toRotate[i];
		let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

		setText(updatedText);

		if (isDeleting) {
			setDelta((prevDelta) => prevDelta / 2);
		}

		if (!isDeleting && updatedText === fullText) {
			setIsDeleting(true);
			setDelta(period);
		} else if (isDeleting && updatedText === "") {
			setIsDeleting(false);
			setLoopNum(loopNum + 1);
			setDelta(500);
		}
	};

	return (
		<section className="banner" id="home">
			<Container>
				<Row className="align-items-center">
					<Col xs={12} md={6} xl={7}>
						<TrackVisibility>
							{({ isVisible }) => (
								<div className={isVisible ? "animate__animated animate__pulse" : ""}>
									<span className="tagline">Welcome!</span>
									<h1 className="txt-rotate">
										{`Hi I'm Dominic`}
										<br />
										<span className="wrap fs-1">{text}</span>
									</h1>
									<p>
										Analytical problem solver, proactive and adaptable, who works respectfully in teams, leads effectively, and approaches
										challenges with flexibility and kindness.
									</p>
									<Nav>
										<Nav.Link
											href="#contact"
											className={activeLink === "contact" ? "active navbar-link" : "navbar-link"}
											onClick={() => onUpdateActiveLink("contact")}
										>
											<button>
												Let's Connect <ArrowRightCircle size={25} />
											</button>
										</Nav.Link>
									</Nav>
								</div>
							)}
						</TrackVisibility>
					</Col>
					{/* <Col xs={12} md={6} xl={5}>
						<img src={headerImg} alt="Header Img" />
					</Col> */}
				</Row>
			</Container>
		</section>
	);
};

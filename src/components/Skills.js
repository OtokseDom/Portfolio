import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter1 from "../assets/img/meter1.png"; //95
import meter2 from "../assets/img/meter2.png"; //80
import meter3 from "../assets/img/meter3.png"; //90
import colorSharp from "../assets/img/color-sharp.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Skills = () => {
	const responsive = {
		superLargeDesktop: {
			// the naming can be any, depends on you.
			breakpoint: { max: 4000, min: 3000 },
			items: 5,
		},
		desktop: {
			breakpoint: { max: 3000, min: 1024 },
			items: 3,
		},
		tablet: {
			breakpoint: { max: 1024, min: 464 },
			items: 2,
		},
		mobile: {
			breakpoint: { max: 464, min: 0 },
			items: 1,
		},
	};

	return (
		<section className="skill" id="skills">
			<Container>
				<Row>
					<Col>
						<div className="skill-bx">
							<h2>Skills</h2>
							<p>Web Development, Software Development, Data Structures, API Design, UI/UX Design</p>
							<Carousel responsive={responsive} infinite={true} className="skill-slider">
								<div className="item justify-content-center align-items-center d-flex flex-column gap-3">
									<TrackVisibility>
										{({ isVisible }) => <img src={meter3} alt="meter" className={isVisible ? "animate__animated animate__rotateIn" : ""} />}
									</TrackVisibility>
									{/* <div
										className={`border border-5 rounded-circle justify-content-center align-items-center d-flex font-weight-bold fs-3 ${"animate__animated animate__rotateIn"}`}
										style={{ width: "50%", aspectRatio: "1/1" }}
									>
										85%
									</div> */}
									<h5>PHP - Laravel</h5>
								</div>
								<div className="item">
									<TrackVisibility>
										{({ isVisible }) => <img src={meter3} alt="meter" className={isVisible ? "animate__animated animate__rotateIn" : ""} />}
									</TrackVisibility>
									<h5>React</h5>
								</div>
								<div className="item">
									<TrackVisibility>
										{({ isVisible }) => <img src={meter1} alt="meter" className={isVisible ? "animate__animated animate__rotateIn" : ""} />}
									</TrackVisibility>
									<h5>MySQL</h5>
								</div>
								<div className="item">
									<TrackVisibility>
										{({ isVisible }) => <img src={meter3} alt="meter" className={isVisible ? "animate__animated animate__rotateIn" : ""} />}
									</TrackVisibility>
									<h5>Git</h5>
								</div>
								<div className="item">
									<TrackVisibility>
										{({ isVisible }) => <img src={meter1} alt="meter" className={isVisible ? "animate__animated animate__rotateIn" : ""} />}
									</TrackVisibility>
									<h5>Tailwind CSS</h5>
								</div>
								<div className="item">
									<TrackVisibility>
										{({ isVisible }) => <img src={meter3} alt="meter" className={isVisible ? "animate__animated animate__rotateIn" : ""} />}
									</TrackVisibility>
									<h5>Bootstrap</h5>
								</div>
								<div className="item">
									<TrackVisibility>
										{({ isVisible }) => <img src={meter1} alt="meter" className={isVisible ? "animate__animated animate__rotateIn" : ""} />}
									</TrackVisibility>
									<h5>Figma</h5>
								</div>
								<div className="item">
									<TrackVisibility>
										{({ isVisible }) => <img src={meter1} alt="meter" className={isVisible ? "animate__animated animate__rotateIn" : ""} />}
									</TrackVisibility>
									<h5>Postman</h5>
								</div>
							</Carousel>
						</div>
					</Col>
				</Row>
			</Container>
			<img className="background-image-left" src={colorSharp} alt="bg" />
		</section>
	);
};

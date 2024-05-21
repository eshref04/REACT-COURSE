import React from "react";
import "./HeroSection.css";
import { Link } from "react-router-dom";

const HeroSection = () => {
	return (
		<section className="hero__section">
			<div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
				<div class="carousel-inner">
					<div class="carousel-item active">
					<img class="d-block w-100" src="https://preview.colorlib.com/theme/course/images/slider_background.jpg.webp" alt="Third slide" />
                        <div className="carousel__text d-flex flex-column justify-content-center align-items-center">
						<h1>Get your <span>Education</span>  today!</h1>
						

						<div className="hero__section__end d-flex gap-4">
							<div className="hero__section__end__crd p-4 d-flex">
							<i class="fa-solid fa-globe"></i>
							<div className="hero__section__end__text">
								<h2>Online Courses</h2>
								<Link>VIEW MORE</Link>
							</div>
							</div>

							<div className="hero__section__end__crd p-4 d-flex">
							<i class="fa-solid fa-book"></i>
							<div className="hero__section__end__text">
								<h2>Online Courses</h2>
								<Link>VIEW MORE</Link>
							</div>
							</div>

							<div className="hero__section__end__crd p-4 d-flex">
							<i class="fa-solid fa-school"></i>
							<div className="hero__section__end__text">
								<h2>Online Courses</h2>
								<Link>VIEW MORE</Link>
							</div>
							</div>
						</div>
						</div>
                        
					</div>
					<div class="carousel-item">
					<img class="d-block w-100" src="https://images.pexels.com/photos/1290141/pexels-photo-1290141.jpeg?cs=srgb&dl=pexels-ivo-rainha-527110-1290141.jpg&fm=jpg" alt="Third slide" />
                        <div className="carousel__text d-flex flex-column justify-content-center align-items-center">
						<h1>Get your <span>Education</span>  today!</h1>

						<div className="hero__section__end d-flex gap-4">
							<div className="hero__section__end__crd p-4 d-flex">
							<i class="fa-solid fa-globe"></i>
							<div className="hero__section__end__text">
								<h2>Online Courses</h2>
								<Link>VIEW MORE</Link>
							</div>
							</div>

							<div className="hero__section__end__crd p-4 d-flex">
							<i class="fa-solid fa-book"></i>
							<div className="hero__section__end__text">
								<h2>Online Courses</h2>
								<Link>VIEW MORE</Link>
							</div>
							</div>

							<div className="hero__section__end__crd p-4 d-flex">
							<i class="fa-solid fa-school"></i>
							<div className="hero__section__end__text">
								<h2>Online Courses</h2>
								<Link>VIEW MORE</Link>
							</div>
							</div>
						</div>
                        </div>
					</div>
					<div class="carousel-item">
						<img class="d-block w-100" src="https://www.aaschool.ac.uk/assets/microsoftteams-image-(30).png" alt="Third slide" />
                        <div className="carousel__text d-flex flex-column justify-content-center align-items-center">
						<h1>Get your <span>Education</span>  today!</h1>

						<div className="hero__section__end d-flex gap-4">
						<div className="hero__section__end__crd p-4 d-flex">
							<i class="fa-solid fa-globe"></i>
							<div className="hero__section__end__text">
								<h2>Online Courses</h2>
								<Link>VIEW MORE</Link>
							</div>
							</div>

							<div className="hero__section__end__crd p-4 d-flex">
							<i class="fa-solid fa-book"></i>
							<div className="hero__section__end__text">
								<h2>Online Courses</h2>
								<Link>VIEW MORE</Link>
							</div>
							</div>

							<div className="hero__section__end__crd p-4 d-flex">
							<i class="fa-solid fa-school"></i>
							<div className="hero__section__end__text">
								<h2>Online Courses</h2>
								<Link>VIEW MORE</Link>
							</div>
							</div>
						</div>
                        </div>
					</div>
				</div>
				<a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
					<span aria-hidden="true">Prev</span>
				</a>
				<a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
					<span aria-hidden="true">Next</span>
				</a>
			</div>
		</section>
	);
};

export default HeroSection;

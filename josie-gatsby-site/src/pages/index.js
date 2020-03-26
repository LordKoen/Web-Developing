import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import React from 'react';
import ReactDOM from 'react-dom';
import '../styles/Main.css';
import Helmet from 'react-helmet';

function App() {
	function fixNavbar() {
		if (typeof window !== `undefined`) {
			let navbar = document.getElementById('navigationbar');
			let navIcon = document.getElementsByClassName('nav-icon');
			let caretUp = document.getElementById('caret-up');
			let caretDown = document.getElementById('caret-down');

			if (navbar.classList.contains('bg-light', 'navbar-light')) {
				setTimeout(fixNavbar2, 300);
			} else if (
				!navbar.classList.contains('bg-light', 'navbar-light')
			) {
				navbar.classList.add('bg-light', 'navbar-light');
				for (let i = 0; i < navIcon.length; i++) {
					navIcon[i].style.color = 'black';
				}
				caretUp.style.display = 'inline';
				caretDown.style.display = 'none';
			}
		}
	}

	function fixNavbar2() {
		if (typeof window !== `undefined`) {
			let navbar = document.getElementById('navigationbar');
			let navIcon = document.getElementsByClassName('nav-icon');
			let caretUp = document.getElementById('caret-up');
			let caretDown = document.getElementById('caret-down');

			navbar.classList.remove('bg-light', 'navbar-light');
			for (let i = 0; i < navIcon.length; i++) {
				navIcon[i].style.color = 'white';
			}
			caretUp.style.display = 'none';
			caretDown.style.display = 'inline';
		}
	}

	return (
		<React.Fragment>
			<Helmet>
				<title>Josie Proto</title>
				<link
					rel="stylesheet"
					href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
					integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf"
					crossorigin="anonymous"
				/>
				<link
					href="https://fonts.googleapis.com/css?family=Odibee+Sans&display=swap"
					rel="stylesheet"
				/>
			</Helmet>
			<header />
			<main>
				<div className="hero-image">
					<nav
						className="navbar navbar-expand-sm transparent"
						id="navigationbar"
					>
						<a className="navbar-brand nav-icon" href="#">
							Josie Proto Music
						</a>
						<button
							className="navbar-toggler my-socialmedia"
							data-toggle="collapse"
							data-target="#navbarMenu"
							onClick={fixNavbar}
						>
							<span id="social-media nav-icon">
								<span className="nav-icon">
									Social Media
								</span>
							</span>{' '}
							<i
								className="fas fa-caret-down nav-icon"
								id="caret-down"
							/>
							<i
								className="fas fa-caret-up nav-icon"
								id="caret-up"
							/>
						</button>
						<div
							className="collapse navbar-collapse"
							id="navbarMenu"
						>
							<ul className="navbar-nav ml-auto">
								{/* <li className="nav-item ml-auto">
									<a
										href="https://www.facebook.com/josie.proto.music/"
										target="_blank"
										rel="noopener noreferrer"
										className="nav-link"
									>
										<span className="d-inline d-sm-none d-xl-inline nav-icon">
											Facebook
										</span>{' '}
										<i className="fab fa-facebook nav-icon" />{' '}
									</a>
								</li> */}
								<li className="nav-item ml-auto">
									<a
										href="https://www.instagram.com/josieproto/?hl=ur"
										target="_blank"
										rel="noopener noreferrer"
										className="nav-link"
									>
										<span className="d-inline d-sm-none d-xl-inline nav-icon">
											Instagram
										</span>{' '}
										<i className="fab fa-instagram nav-icon" />
									</a>
								</li>
								<li className="nav-item ml-auto">
									<a
										href="https://twitter.com/josie_proto"
										target="_blank"
										rel="noopener noreferrer"
										className="nav-link"
									>
										{' '}
										<span className="d-inline d-sm-none d-xl-inline nav-icon">
											Twitter
										</span>{' '}
										<i className="fab fa-twitter nav-icon" />
									</a>
								</li>
								<li className="nav-item ml-auto">
									<a
										href="https://open.spotify.com/album/70rvqXfDzvWb4KgGntHOD7?highlight=spotify:track:2JtlPAbff0uGbN5iBPABaj"
										target="_blank"
										rel="noopener noreferrer"
										className="nav-link"
									>
										<span className="d-inline d-sm-none d-xl-inline nav-icon">
											Spotify
										</span>{' '}
										<i className="fab fa-spotify nav-icon" />
									</a>
								</li>
								<li className="nav-item ml-auto">
									<a
										href="https://www.youtube.com/channel/UCncK76CuAfrovl-B1dvkqTg/videos"
										target="_blank"
										rel="noopener noreferrer"
										className="nav-link"
									>
										<span className="d-inline d-sm-none d-xl-inline nav-icon">
											Youtube
										</span>{' '}
										<i className="fab fa-youtube nav-icon" />
									</a>
								</li>
								<li className="nav-item ml-auto">
									<a
										href="https://soundcloud.com/josie-proto"
										target="_blank"
										rel="noopener noreferrer"
										className="nav-link"
									>
										<span className="d-inline d-sm-none d-xl-inline nav-icon">
											Soundcloud
										</span>{' '}
										<i className="fab fa-soundcloud nav-icon" />
									</a>
								</li>
							</ul>
						</div>
					</nav>
					<div className="hero-text">
						<h1 id="herotext" className="d-inline">
							Josie Proto Music
						</h1>
						<p id="herodescription">BTEC Lily Allen out now</p>
					</div>
				</div>

				<div className="container-fluid">
					<div className="row justify-content-center banner">
						<div className="col-12 banner text-center">
							<a
								href="https://open.spotify.com/album/70rvqXfDzvWb4KgGntHOD7?highlight=spotify:track:2JtlPAbff0uGbN5iBPABaj"
								target="_blank"
								rel="noopener noreferrer"
								className="banner-text"
								id="banner-link"
							>
								listen now on spotify
							</a>
						</div>
					</div>
				</div>

				<div className="container-fluid">
					<div className="row justify-content-center mainDescriptionRow">
						<div className="col-12 mainDescription text-center">
							<p>
								Emerging indie talent Josie Proto today
								releases the official version of her
								sass-fuelled viral hit “BTEC Lily Allen” –
								the perfect introduction to her
								light-hearted but emotionally compelling
								style. <br /> <br />
								Garnering instant validation from Gen-Z
								internet, “BTEC Lily Allen” immediately
								went viral across Tik Tok to rack up over
								360K views and 90K likes, thanks to the
								track’s universally relatable message of
								shining in the face of adversity, not
								giving in to hateful criticisms and
								learning to be your own biggest fan: “Don’t
								you call me a BTEC Lily Allen / Say that
								I’ve got no goddamn talent… I quite like
								Lily Allen / And I don’t believe in god
								given talent,” she tells across a pure
								acoustic backing. <br /> <br />
								Of “BTEC Lily Allen”, Josie explains:
								“After I was called a ‘BTEC Lily Allen’ by
								a girl last year, I collated the negative
								feedback and moulded the words into a song.
								This year I downloaded TikTok and posted a
								1 minute clip of the song to my incredible
								following of 15 people (granted that around
								7 were close friends) and left my phone on
								the side. I came back to my phone a couple
								of hours later and already had over 10,000
								views! Over the next few days, I posted the
								other 2 minutes of the song and gained over
								300,000 views across all the videos and
								over 10,000 followers! I stuck true to each
								of the comments and tried to included them
								in the exact form they were delivered to me
								initially. It’s gratifying knowing that the
								comments that tried to bring me down have
								done the opposite.” <br /> <br />
								Josie’s instantaneous Tik Tok fame has
								already sparked hundreds of cover versions,
								proof that she’s a future emotional hero in
								the making for the younger generation with
								her witty, humourous storytelling capturing
								experiences and turning them into fun,
								light-hearted forms of escapism. <br />
								<br />
								Inspired by the vulnerability of Carole
								King, Nina Simone and Sara Bareilles,
								everyday relatability of Madness and the
								cross-generational sounds of fellow
								newcomer Lily Moore, Josie Proto is an
								exciting new name to pop up in the Britpop
								scene – expect much more music to come.
							</p>
						</div>
					</div>
				</div>

				<div className="container p-3">
					<div className="row justify-content-center">
						<div className="col-xl-4 col-lg-7 col-md-8 col-sm-11 col-11 twitter-feed order-2">
							<a
								className="twitter-timeline"
								href="https://twitter.com/josie_proto"
								data-width="100%"
								data-height="550.66px"
								data-theme="light"
							>
								Tweets by TwitterDev
							</a>{' '}
							<form
								action="https://formspree.io/meqzdkre"
								method="POST"
								className="text-center white"
							>
								<div className="form-group">
									<label htmlFor="email">
										Sign up to my mailing list
									</label>
									<input
										type="email"
										placeholder="Enter your email here"
										name="email"
										id="email"
										className="form-control"
										required
									/>
									<button
										type="submit"
										id="submit"
										className="btn-dark mt-1"
										// style="background-color: #4d3900; border: #4d3900; position: relative; top: 5px; border-radius: 4px;"
									>
										Submit
									</button>
								</div>
							</form>
						</div>

						<div className="col-xl-7 col-lg-10 col-md-11 col-sm-12 slideshow order-1">
							<div
								id="carouselExampleIndicators"
								className="carousel slide"
								data-ride="carousel"
							>
								<ol className="carousel-indicators">
									<li
										data-target="#carouselExampleIndicators"
										data-slide-to="0"
										className="active"
									/>
									<li
										data-target="#carouselExampleIndicators"
										data-slide-to="1"
									/>
									<li
										data-target="#carouselExampleIndicators"
										data-slide-to="2"
									/>
									<li
										data-target="#carouselExampleIndicators"
										data-slide-to="3"
									/>
									{/* <li
										data-target="#carouselExampleIndicators"
										data-slide-to="4"
									/> */}
								</ol>
								<div className="carousel-inner">
									<div className="carousel-item active">
										<img
											className="d-block img-fluid w-100"
											src="./(Edited) BTEC Lily Allen.png"
											alt="First slide"
										/>
									</div>
									{/* <div className="carousel-item">
										<img
											className="d-block img-fluid w-100"
											src="./(Edited) Album Cover.png"
											alt="Second slide"
										/>
									</div> */}
									<div className="carousel-item">
										<img
											className="d-block img-fluid w-100"
											src="./Hero2.jpeg"
											alt="Third slide"
										/>
									</div>
									<div className="carousel-item">
										<img
											className="d-block img-fluid w-100"
											src="./(Edited) Portrait1.png"
											alt="Fourth slide"
										/>
									</div>
									<div className="carousel-item">
										<img
											className="d-block img-fluid w-100"
											src="./(Edited) Portrait2.png"
											alt="Fifth slide"
										/>
									</div>
								</div>
								<a
									className="carousel-control-prev"
									href="#carouselExampleIndicators"
									role="button"
									data-slide="prev"
								>
									<span
										className="carousel-control-prev-icon"
										aria-hidden="true"
									/>
									<span className="sr-only">
										Previous
									</span>
								</a>
								<a
									className="carousel-control-next"
									href="#carouselExampleIndicators"
									role="button"
									data-slide="next"
								>
									<span
										className="carousel-control-next-icon"
										aria-hidden="true"
									/>
									<span className="sr-only">Next</span>
								</a>
							</div>
						</div>
					</div>
				</div>
			</main>
		</React.Fragment>
	);
}

export default App;

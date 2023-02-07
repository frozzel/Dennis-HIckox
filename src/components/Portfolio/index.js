import React, { useEffect, useState } from "react";
import AnimatedLetters from "../AnimatedLetters";
import "./index.scss";
import KETORIFIC from '../../assets/images/KETORIFIC.png';
import FlyGuys from '../../assets/images/FLYGUYS.png';
import Weather from '../../assets/images/Weather.png';
import Global from '../../assets/images/Global.png';
import Cup from '../../assets/images/Cup.png';
import Notes from '../../assets/images/Notes.png';
import Tikkitt from '../../assets/images/Shot1.png';
import indulge from '../../assets/images/indulgeScreen.png';
import MEALTRACKER from '../../assets/images/sm1.png';
import Narcissist from '../../assets/images/narcissist.png';
import Snowfall from 'react-snowfall';


const Portfolio = () => { 
    const [letterClass, setLetterClass] = useState('text-animate');

    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);

        return () => {
            clearTimeout(timer);
        }
    });

    useEffect(() => {
       
    }, []);
 
       
    return (
        <>
        <Snowfall color="#7cc5d9" style={{opacity: '.4' }} snowflakeCount={100}/>
            <div className="container portfolio-page">
                <h1 className="page-title">
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={"Portfolio".split("")}
                        idx={15}
                    />
                </h1>
                <p>Please checkout my work as I progress with my Full Stack Development skills! Each site links
                    to the live site, you can also view the code in its Repo from my Github page. Keep in mind the sites are
                    deployed using Heroku who sleeps inactive sites to conserve on energy!
          </p>
          
                <div className='card-grid-view'>

                <section className="dark">
	<div className=" py-4">
		{/* <h1 className="h1 text-center" id="pageHeaderTitle">My Cards Dark</h1> */}

		<article className="postcard dark blue">
			<a className="postcard__img_link" href="https://narcissist-social.herokuapp.com/" target="_blank" rel="noreferrer">
				<img className="postcard__img" src={Narcissist} alt="Narcissist Social" />	
			</a>
			<div className="postcard__text">
				<h1 className="postcard__title red"><a href="https://narcissist-social.herokuapp.com/" target="_blank" rel="noreferrer">Narcissist Social</a></h1>
				<div className="postcard__subtitle small">
					<time datetime="2020-05-25 12:00:00">
						<i className="fas fa-calendar-alt mr-2"></i>Febuary 2023
					</time>
				</div>
				<div className="postcard__bar"></div>
				<div className="postcard__preview-txt">Ruby on Rails social media mock application of Instagram. This application uses an assortment of integrations including: Gem Turbo, Devise (User Auth), active storage with AWS S3, bootstrap, Saas, Postgresql and Drag & Drop Filepond. The app is deployed over Heroku with an AWS S3 bucket for picture sharing. It has photo post sharing, likes and comments along with following capabilities.</div>
				<ul className="postcard__tagbox">
                <li className="tag__item play blue">
						<a href="https://github.com/frozzel/narcissistSocial" target="_blank" rel="noreferrer"><i className="fas fa-play mr-2"></i>Github</a>
					</li>
                    <li className="tag__item play blue">
						<a href="https://narcissist-social.herokuapp.com/" target="_blank" rel="noreferrer"><i className="fas fa-play mr-2"></i>Deployed</a>
					</li>
					
				</ul>
			</div>
		</article>




		<article className="postcard dark blue">
			<a className="postcard__img_link" href="https://indulge.herokuapp.com/" target="_blank" rel="noreferrer">
				<img className="postcard__img" src={indulge} alt="indulge" />	
			</a>
			<div className="postcard__text">
				<h1 className="postcard__title red"><a href="https://indulge.herokuapp.com/" target="_blank" rel="noreferrer">Indulge</a></h1>
				<div className="postcard__subtitle small">
					<time datetime="2020-05-25 12:00:00">
						<i className="fas fa-calendar-alt mr-2"></i>January 2023
					</time>
				</div>
				<div className="postcard__bar"></div>
				<div className="postcard__preview-txt">Mock Ecommerce site that utilizes global state and react hooks. The site is integrated with stripe payments. Full stack application with mongoDb/mongoose integrations & Apollo/graphql server side. React/Apollo integration frontside utilizing global state and stripe integration along with animate.css and SASS.</div>
				<ul className="postcard__tagbox">
                <li className="tag__item play blue">
						<a href="https://github.com/frozzel/LUX" target="_blank" rel="noreferrer"><i className="fas fa-play mr-2"></i>Github</a>
					</li>
                    <li className="tag__item play blue">
						<a href="https://indulge.herokuapp.com/" target="_blank" rel="noreferrer"><i className="fas fa-play mr-2"></i>Deployed</a>
					</li>
					<li className="tag__item play blue">
						<a href="https://youtu.be/yZqc9ZoLggI" target="_blank" rel="noreferrer"><i className="fas fa-play mr-2"></i>AWS EC2</a>
					</li>
				</ul>
			</div>
		</article>




		<article className="postcard dark blue">
			<a className="postcard__img_link" href="https://tikkitt.herokuapp.com/" target="_blank" rel="noreferrer">
				<img className="postcard__img" src={Tikkitt} alt="Tikkit" />
			</a>
			<div className="postcard__text">
				<h1 className="postcard__title blue"><a href="https://tikkitt.herokuapp.com/" target="_blank" rel="noreferrer">Tikkit</a></h1>
				<div className="postcard__subtitle small">
					<time datetime="2020-05-25 12:00:00">
						<i className="fas fa-calendar-alt mr-2"></i> November 2022
					</time>
				</div>
				<div className="postcard__bar"></div>
				<div className="postcard__preview-txt">
Full Stack Application (MERN) that utilizes React-Dnd and animate.css to create a project management application. MVP to show case CRUD capabilities and drag and drop integrations with GraphQL and Apollo Server/client side.
 Tikkett is an American cloud-based software company headquartered in Atlanta, GA. It provides customer relationship management (CRM) service and also provides enterprise applications focused on customer service, marketing automation, analytics, and application development.</div>
				<ul className="postcard__tagbox">
					
					<li className="tag__item play blue">
						<a href="https://github.com/frozzel/Tikkitt" target="_blank" rel="noreferrer"><i className="fas fa-play mr-2"></i>Github</a>
					</li>
                    <li className="tag__item play blue">
						<a href="https://tikkitt.herokuapp.com/" target="_blank" rel="noreferrer"><i className="fas fa-play mr-2"></i>Deployed</a>
					</li>
				</ul>
			</div>
		</article>

		<article className="postcard dark blue">
			<a className="postcard__img_link" href="https://meal-tracker.herokuapp.com/" target="_blank" rel="noreferrer">
				<img className="postcard__img" src={MEALTRACKER} alt="Meal Tracker" />	
			</a>
			<div className="postcard__text">
				<h1 className="postcard__title red"><a href="https://meal-tracker.herokuapp.com/" target="_blank" rel="noreferrer">Meal Tracker</a></h1>
				<div className="postcard__subtitle small">
					<time datetime="2020-05-25 12:00:00">
						<i className="fas fa-calendar-alt mr-2"></i>January 2023
					</time>
				</div>
				<div className="postcard__bar"></div>
				<div className="postcard__preview-txt">My first Ruby on Rails application. Simple full CRUD application that tracks your daily meals, calories, fats, protiens and carbohydrates! This application was done through a youtube crash course on Ruby on Rails. It utilizes Bulma and Saas for its UI with a Postgresql database integration and Heroku deployment.</div>
				<ul className="postcard__tagbox">
                <li className="tag__item play blue">
						<a href="https://github.com/frozzel/mealtracker" target="_blank" rel="noreferrer"><i className="fas fa-play mr-2"></i>Github</a>
					</li>
                    <li className="tag__item play blue">
						<a href="https://meal-tracker.herokuapp.com/" target="_blank" rel="noreferrer"><i className="fas fa-play mr-2"></i>Deployed</a>
					</li>
				</ul>
			</div>
		</article>





		<article className="postcard dark blue">
			<a className="postcard__img_link" href="https://ketorific.herokuapp.com/" target="_blank" rel="noreferrer">
				<img className="postcard__img" src={KETORIFIC} alt="KETORIFIC" />	
			</a>
			<div className="postcard__text">
				<h1 className="postcard__title red"><a href="https://ketorific.herokuapp.com/" target="_blank" rel="noreferrer">KETORIFIC</a></h1>
				<div className="postcard__subtitle small">
					<time datetime="2020-05-25 12:00:00">
						<i className="fas fa-calendar-alt mr-2"></i>October 2022
					</time>
				</div>
				<div className="postcard__bar"></div>
				<div className="postcard__preview-txt">CMS-style blog site similar to Wordpress where keto diet seekers can publish recipe's and tips to their Keto diet stratagie.

Motivation for the site was to build a complete full stack application that involves database integration with mysql, heroku, Sequelize and a express-session npm package for authentication.

The Keto diet trend has a massive hold on the healthy diet and exercise market. This is a great opportunity to provide a service for their consumption!</div>
				<ul className="postcard__tagbox">
                <li className="tag__item play blue">
						<a href="https://github.com/frozzel/KETORIFIC" target="_blank" rel="noreferrer"><i className="fas fa-play mr-2"></i>Github</a>
					</li>
                    <li className="tag__item play blue">
						<a href="https://ketorific.herokuapp.com/" target="_blank" rel="noreferrer"><i className="fas fa-play mr-2"></i>Deployed</a>
					</li>
				</ul>
			</div>
		</article>
		<article className="postcard dark blue">
			<a className="postcard__img_link" href="https://flyguys.herokuapp.com/" target="_blank" rel="noreferrer">
				<img className="postcard__img" src={FlyGuys} alt="FlyGuys" />
			</a>
			<div className="postcard__text">
				<h1 className="postcard__title blue"><a href="https://flyguys.herokuapp.com/" target="_blank" rel="noreferrer">FLYGUYS</a></h1>
				<div className="postcard__subtitle small">
					<time datetime="2020-05-25 12:00:00">
						<i className="fas fa-calendar-alt mr-2"></i> October 2022
					</time>
				</div>
				<div className="postcard__bar"></div>
				<div className="postcard__preview-txt">
                A social app for drone pilots and enthusiasts to share their high flying footage! The user can sign up to create an account and begin viewing an awesome collection of drone footage.

As a member of the flyguys site, the user can have an interactive experience by creating a personal profile, posting personal drone footage, attending and/or creating meetups with the drone community locally or internationally.</div>
				<ul className="postcard__tagbox">
					
					<li className="tag__item play blue">
						<a href="https://github.com/frozzel/Flyguys"  target="_blank" rel="noreferrer"><i className="fas fa-play mr-2"></i>Github</a>
					</li>
                    <li className="tag__item play blue">
						<a href="https://flyguys.herokuapp.com/"  target="_blank" rel="noreferrer"><i className="fas fa-play mr-2"></i>Deployed</a>
					</li>
				</ul>
			</div>
		</article>
		<article className="postcard dark blue">
			<a className="postcard__img_link" href="https://frozzel.github.io/Climate-Change/" target="_blank" rel="noreferrer">
				<img className="postcard__img" src={Weather} alt="Weather Dashboard" />	
			</a>
			<div className="postcard__text">
				<h1 className="postcard__title red"><a href="https://frozzel.github.io/Climate-Change/" target="_blank" rel="noreferrer">Weather App</a></h1>
				<div className="postcard__subtitle small">
					<time datetime="2020-05-25 12:00:00">
						<i className="fas fa-calendar-alt mr-2"></i>September 2022
					</time>
				</div>
				<div className="postcard__bar"></div>
				<div className="postcard__preview-txt">Weather Dashboard is a front end application that pulls from two weather API's to display weather data from a users search criteria! Technology used: HTML, CSS, AJAX (fetch api call), and JavaScript.</div>
				<ul className="postcard__tagbox">
                <li className="tag__item play blue">
						<a href="https://github.com/frozzel/Climate-Change" target="_blank" rel="noreferrer"><i className="fas fa-play mr-2"></i>Github</a>
					</li>
                    <li className="tag__item play blue">
						<a href="https://frozzel.github.io/Climate-Change/" target="_blank" rel="noreferrer"><i className="fas fa-play mr-2"></i>Deployed</a>
					</li>
				</ul>
			</div>
		</article>
        <article className="postcard dark blue">
			<a className="postcard__img_link" href="https://frozzel.github.io/CupOTears/" target="_blank" rel="noreferrer">
				<img className="postcard__img" src={Cup} alt="CupOTears" />
			</a>
			<div className="postcard__text">
				<h1 className="postcard__title blue"><a href="https://frozzel.github.io/CupOTears/" target="_blank" rel="noreferrer">Cup O'Tears</a></h1>
				<div className="postcard__subtitle small">
					<time datetime="2020-05-25 12:00:00">
						<i className="fas fa-calendar-alt mr-2"></i> September 2022
					</time>
				</div>
				<div className="postcard__bar"></div>
				<div className="postcard__preview-txt">
                When you arrive to the site you will see a search bar to search popular coffee beverages from around the world. Explore some of your favorite beverages or check out some new ones. The autocomplete feature displays a drop down list of available drinks to search. If you have found yourself on our site, you must love coffee as much as we do. So take a look and find yourself the perfect drink to pour your tears into.</div>
				<ul className="postcard__tagbox">
					
					<li className="tag__item play blue">
						<a href="https://github.com/frozzel/CupOTears" target="_blank" rel="noreferrer"><i className="fas fa-play mr-2"></i>Github</a>
					</li>
                    <li className="tag__item play blue">
						<a href="https://frozzel.github.io/CupOTears/" target="_blank" rel="noreferrer"><i className="fas fa-play mr-2"></i>Deployed</a>
					</li>
				</ul>
			</div>
		</article>
		<article className="postcard dark blue">
			<a className="postcard__img_link" href="https://class-note-taker-project.herokuapp.com/" target="_blank" rel="noreferrer">
				<img className="postcard__img" src={Notes} alt="Class Note Taker" />	
			</a>
			<div className="postcard__text">
				<h1 className="postcard__title red"><a href="https://class-note-taker-project.herokuapp.com/" target="_blank" rel="noreferrer">Class Notes </a></h1>
				<div className="postcard__subtitle small">
					<time datetime="2020-05-25 12:00:00">
						<i className="fas fa-calendar-alt mr-2"></i>October 2022
					</time>
				</div>
				<div className="postcard__bar"></div>
				<div className="postcard__preview-txt">Application for writing and saving notes. This application will use an Express.js back end and will save and retrieve note data from a JSON file.</div>
				<ul className="postcard__tagbox">
                <li className="tag__item play blue">
						<a href="https://github.com/frozzel/Class-Notes" target="_blank" rel="noreferrer"><i className="fas fa-play mr-2"></i>Github</a>
					</li>
                    <li className="tag__item play blue">
						<a href="https://class-note-taker-project.herokuapp.com/" target="_blank" rel="noreferrer"><i className="fas fa-play mr-2"></i>Deployed</a>
					</li>
				</ul>
			</div>
		</article>
        <article className="postcard dark blue">
			<a className="postcard__img_link" href="http://frozzel.github.io/GlobalEquity/" target="_blank" rel="noreferrer">
				<img className="postcard__img" src={Global} alt="Global Equity" />
			</a>
			<div className="postcard__text">
				<h1 className="postcard__title blue"><a href="http://frozzel.github.io/GlobalEquity/" target="_blank" rel="noreferrer">Global Equity</a></h1>
				<div className="postcard__subtitle small">
					<time datetime="2020-05-25 12:00:00">
						<i className="fas fa-calendar-alt mr-2"></i> October 2022
					</time>
				</div>
				<div className="postcard__bar"></div>
				<div className="postcard__preview-txt">
                Node.js command-line application that takes in information about employees on a software engineering team and generates an HTML webpage that displays summaries for each person.

Learn testing with TDD and gain more Node JS skills.

The Profile builder creates a Web page based on user input of thier projects team.

Quickly generate Development teams basic information.

</div>
				<ul className="postcard__tagbox">
					
					<li className="tag__item play blue">
						<a href="https://github.com/frozzel/GlobalEquity" target="_blank" rel="noreferrer"><i className="fas fa-play mr-2"></i>Github</a>
					</li>
                    <li className="tag__item play blue">
						<a href="http://frozzel.github.io/GlobalEquity/" target="_blank" rel="noreferrer"><i className="fas fa-play mr-2"></i>Deployed</a>
					</li>
				</ul>
			</div>
		</article>
	</div>
</section>

              
                    






                </div>
            </div>
            
        </>
    );
}
export default Portfolio;
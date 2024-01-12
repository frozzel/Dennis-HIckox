import React, { useState, useEffect, useRef, forwardRef } from "react";
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from "react-icons/ai";
import { Link } from "react-router-dom";
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



let count = 0;
let intervalId;

let newTime = 0;
let lastTime = 0;

const news= [
		{
			"_id": "649dbd47a0f3bc9bc4bf8256",
			"source": "Narcissist Social",
			"author": "Kelly Laco",
			"title": "21 GOP-led states back Florida parents suing school for creating 'transgender support plan'",
			"description": "Ruby on Rails social media mock application of Instagram. This application uses an assortment of integrations including: Gem Turbo, Devise (User Auth), active storage with AWS S3, bootstrap, Saas, Postgresql and Drag & Drop Filepond. The app is deployed over Heroku with an AWS S3 bucket for picture sharing. It has photo post sharing, likes and comments along with following capabilities.",
			"url": "https://www.dailymail.co.uk/news/article-12144817/21-GOP-led-states-Florida-parents-suing-school-creating-transgender-support-plan.html",
			"urlToImage": `${Narcissist}`,
			"publishedAt": "2023-05-31T17:10:19Z",
			"content": "A group of 21 Republican-led states are taking legal action on behalf of Florida parents who sued their daughter's school after teachers launched a 'transgender support plan' for their 13-year-old wi… [+4932 chars]",
			"createdAt": "2023-06-29T17:20:07.706Z",
			"updatedAt": "2023-06-29T17:20:07.706Z",
			"__v": 0
		},
		{
			"_id": "649dbd47a0f3bc9bc4bf8257",
			"source": "Indulge",
			"author": "Gail Heriot",
			"title": "HIGHER EDUCATION HELL:  “‘Schizophrenic’ Transgender Student Terrorized Top Law School, Ranted Abou",
      "description": "Mock Ecommerce site that utilizes global state and react hooks. The site is integrated with stripe payments. Full stack application with mongoDb/mongoose integrations & Apollo/graphql server side. React/Apollo integration front side utilizing global state and stripe integration along with animate.css and SASS.",
      "url": "https://instapundit.com/589453/",
			"urlToImage": `${indulge}`,
			"publishedAt": "2023-06-13T11:53:00Z",
			"content": "One of the nations most prestigious law schools admitted a transgender student who in his application dismissed his diagnoses of mental disorders as coming from a white bitch psychiatrist in Amerikkk… [+564 chars]",
			"createdAt": "2023-06-29T17:20:07.706Z",
			"updatedAt": "2023-06-29T17:20:07.706Z",
			"__v": 0
		},
		{
			"_id": "649dbd47a0f3bc9bc4bf825a",
			"source": "Tikkitt",
			"author": null,
			"title": "Supreme Court declines appeal from Christian school fighting transgender housing (John Fritze/USA Today)",
      "description": "Full Stack Application (MERN) that utilizes React-Dnd and animate.css to create a project management application. MVP to show case CRUD capabilities and drag and drop integrations with GraphQL and Apollo Server/client side. Tikkett is an American cloud-based software company headquartered in Atlanta, GA. It provides customer relationship management (CRM) service and also provides enterprise applications focused on customer service, marketing automation, analytics, and application development",
      "url": "https://www.memeorandum.com/230620/p45",
      "urlToImage": `${Tikkitt}`,
      "publishedAt": "2023-06-20T15:10:00Z",
			"content": "memeorandum is an auto-generated summary of the stories that US political commentators are discussing online right now.\r\nUnlike sister sites Techmeme and Mediagazer, it is not a human-edited news out… [+72 chars]",
			"createdAt": "2023-06-29T17:20:07.706Z",
			"updatedAt": "2023-06-29T17:20:07.706Z",
			"__v": 0
		},
		{
			"_id": "649dbd47a0f3bc9bc4bf825b",
			"source": "Cup O'Tears",
			"author": "Matthew Impelli",
			"title": "California School District Considers Outing Transgender Students to Parents",
      "description": "When you arrive to the site you will see a search bar to search popular coffee beverages from around the world. Explore some of your favorite beverages or check out some new ones. The autocomplete feature displays a drop down list of available drinks to search. If you have found yourself on our site, you must love coffee as much as we do. So take a look and find yourself the perfect drink to pour your tears into.",
      "url": "https://www.newsweek.com/california-school-district-considers-outing-transgender-students-parents-1806781",
			"urlToImage": `${Cup}`,
			"publishedAt": "2023-06-14T20:55:25Z",
			"content": "A California school district is considering a proposal that would require teachers to out transgender students to their parents, going against guidance from the state's education department.\r\nThe Sac… [+2889 chars]",
			"createdAt": "2023-06-29T17:20:07.706Z",
			"updatedAt": "2023-06-29T17:20:07.706Z",
			"__v": 0
		},
		{
			"_id": "649dbd47a0f3bc9bc4bf825c",
			"source": "Thegatewaypundit.com",
			"author": "Jim Hoft",
			"title": "Oklahoma Mother Files Lawsuit Against School District After Daughter “Severely Beaten” by Transgender Student in Girl’s Bathroom",
			"description": "A mother in Oklahoma has filed a lawsuit against Edmond Public Schools after her teenage daughter was allegedly severely beaten by a transgender student in the girls’ bathroom.\nThe post Oklahoma Mother Files Lawsuit Against School District After Daughter “Sev…",
			"url": "https://www.thegatewaypundit.com/2023/06/oklahoma-mother-files-lawsuit-against-school-district-after/",
			"urlToImage": "https://www.thegatewaypundit.com/wp-content/uploads/edmond-public-school-1200x630.jpeg",
			"publishedAt": "2023-06-03T19:40:47Z",
			"content": "Edmond Public Schools (Source: News9)\r\nA mother in Oklahoma has filed a lawsuit against Edmond Public Schools after her teenage daughter was allegedly severely beaten by a transgender student in the … [+2103 chars]",
			"createdAt": "2023-06-29T17:20:07.706Z",
			"updatedAt": "2023-06-29T17:20:07.706Z",
			"__v": 0
		},
		{
			"_id": "649dbd47a0f3bc9bc4bf825e",
			"source": "Biztoc.com",
			"author": "newsweek.com",
			"title": "California school district considers outing transgender students to parents",
			"description": "A California school district is considering a proposal that would require teachers to out transgender students to their parents, going against guidance from the state's education department. The Sacramento Bee first reported the proposal by the Chino Valley U…",
			"url": "https://biztoc.com/x/02d57ef43f71bbbf",
			"urlToImage": "https://c.biztoc.com/p/02d57ef43f71bbbf/s.webp",
			"publishedAt": "2023-06-14T20:56:04Z",
			"content": "A California school district is considering a proposal that would require teachers to out transgender students to their parents, going against guidance from the state's education department.The Sacra… [+292 chars]",
			"createdAt": "2023-06-29T17:20:07.706Z",
			"updatedAt": "2023-06-29T17:20:07.706Z",
			"__v": 0
		},
		{
			"_id": "649dbd47a0f3bc9bc4bf8260",
			"source": "Freerepublic.com",
			"author": "Daily Mail UK",
			"title": "Minnesota parents rail against school district for making book 'Call me Max' - which teaches children about what it means to be transgender - available to kindergarten students",
			"description": "Parents in the Midwest are speaking out about a controversial book discussing a child's desire to transition genders - after it was pulled in several states but remains in others. 'Call Me Max,' a picture book penned by a transgender man, tells the story of a…",
			"url": "https://freerepublic.com/focus/f-chat/4156985/posts",
			"urlToImage": null,
			"publishedAt": "2023-05-30T16:24:37Z",
			"content": "Skip to comments.\r\nMinnesota parents rail against school district for making book 'Call me Max' - which teaches children about what it means to be transgender - available to kindergarten studentsDail… [+4034 chars]",
			"createdAt": "2023-06-29T17:20:07.706Z",
			"updatedAt": "2023-06-29T17:20:07.706Z",
			"__v": 0
		},
		{
			"_id": "649dbd47a0f3bc9bc4bf825f",
			"source": "Freerepublic.com",
			"author": "The Daily Signal",
			"title": "Indiana School Places Counselor Who Leaked Secret Transgender Policy on Leave",
			"description": "Following the exposure of a hidden “Gender Support Plan” and policy to conceal student transgender procedures from parents, the whistleblower, counselor Kathy McCord, has been placed on immediate and indefinite leave, and could be facing termination. McCord, …",
			"url": "https://freerepublic.com/focus/f-chat/4159905/posts",
			"urlToImage": null,
			"publishedAt": "2023-06-10T20:25:30Z",
			"content": "Skip to comments.\r\nIndiana School Places Counselor Who Leaked Secret Transgender Policy on LeaveThe Daily Signal ^\r\n | 1/24/23\r\n | Tony Kinett\r\nPosted on 06/10/2023 1:25:30 PM PDT by DallasBiff\r\nFoll… [+1972 chars]",
			"createdAt": "2023-06-29T17:20:07.706Z",
			"updatedAt": "2023-06-29T17:20:07.706Z",
			"__v": 0
		},


	]


export default function Gallery() {
  const [currentSlide, setCurrentSlide] = useState({});
  const [clonedSlide, setClonedSlide] = useState({});
  const [slides, setSlides] = useState([]);
  const [upNext, setUpNext] = useState([]);
  const [visible, setVisible] = useState(true);
  const slideRef = useRef();
  const clonedSlideRef = useRef();



  const fetchLatestUploads = async (signal) => {
    setSlides([...news]);
    setCurrentSlide(news[0]);
  };

  const startSlideShow = () => {
    intervalId = setInterval(() => {
      newTime = Date.now();
      const delta = newTime - lastTime;
      if (delta < 8000) return clearInterval(intervalId);
      handleOnNextClick();
    }, 7500);
  };

  const pauseSlideShow = () => {
    clearInterval(intervalId);
  };

  const updateUpNext = (currentIndex) => {
    if (!slides.length) return;

    const upNextCount = currentIndex + 1;
    const end = upNextCount + 3;

    let newSlides = [...slides];
    newSlides = newSlides.slice(upNextCount, end);

    if (!newSlides.length) {
      newSlides = [...slides].slice(0, 3);
    }

    setUpNext([...newSlides]);
  };

  //0,1,2,3,4
  const handleOnNextClick = () => {
    lastTime = Date.now();
    pauseSlideShow();
    setClonedSlide(slides[count]);
    count = (count + 1) % slides.length;
    setCurrentSlide(slides[count]);

    clonedSlideRef.current.classList.add("slide-out-to-left");
    slideRef.current.classList.add("slide-in-from-right");
    updateUpNext(count);
  };

  const handleOnPrevClick = () => {
    pauseSlideShow();
    setClonedSlide(slides[count]);
    count = (count + slides.length - 1) % slides.length;

    setCurrentSlide(slides[count]);
    clonedSlideRef.current.classList.add("slide-out-to-right");
    slideRef.current.classList.add("slide-in-from-left");
    updateUpNext(count);
  };

  const handleAnimationEnd = () => {
    const classes = [
      "slide-out-to-left",
      "slide-in-from-right",
      "slide-out-to-right",
      "slide-in-from-left",
    ];
    slideRef.current.classList.remove(...classes);
    clonedSlideRef.current.classList.remove(...classes);
    setClonedSlide({});
    startSlideShow();
  };

  const handleOnVisibilityChange = () => {
    const visibility = document.visibilityState;
    if (visibility === "hidden") setVisible(false);
    if (visibility === "visible") setVisible(true);
  };

  useEffect(() => {
    const ac = new AbortController();
    fetchLatestUploads(ac.signal);
    document.addEventListener("visibilitychange", handleOnVisibilityChange);

    return () => {
      pauseSlideShow();
      document.removeEventListener(
        "visibilitychange",
        handleOnVisibilityChange
      );
      ac.abort();
    };
  }, []);

  useEffect(() => {
    if (slides.length && visible) {
      startSlideShow();
      updateUpNext(count);
    } else pauseSlideShow();
  }, [slides.length, visible]);

  return (
    <div className="w-full flex">
      {/* Slide show section */}
      <div className="md:w-4/5 w-full aspect-video relative  overflow-hidden outline-none">
        
        {/* current slide */}
        <Slide
          ref={slideRef}
          title={currentSlide.title}
          src={currentSlide.urlToImage}
          _id={currentSlide._id}
          url={currentSlide.url}
          source={currentSlide.source}
          description={currentSlide.description}
        />

        {/* cloned slide */}
        <Slide
          ref={clonedSlideRef}
          onAnimationEnd={handleAnimationEnd}
          className="absolute inset-0"
          src={clonedSlide.urlToImage}
          title={clonedSlide.title}
          _id={currentSlide._id}
          url={currentSlide.url}
          source={currentSlide.source}
          description={currentSlide.description}
        />

        <SlideShowController
          onNextClick={handleOnNextClick}
          onPrevClick={handleOnPrevClick}
        />
      </div>
      {/* Up Next Section */}
      <div className="w-1/5 md:block hidden space-y-3 px-3 outline-none">
        <h1 className="font-semibold text-2xl text-primary dark:text-white ml-3">
          Up Next
        </h1>
        {upNext.map(({ urlToImage, _id }) => {
       
          return (

              <img
              key={_id}
              src={urlToImage}
              alt=""
              className="aspect-video object-cover rounded outline-none cursor-pointer"
            />

            )}
            
        )}
          
      </div>
    </div>
  );
}

const SlideShowController = ({ onNextClick, onPrevClick }) => {
  const btnClass =
    "   text-highlight text-8xl p-2 outline-none bg-transparent";
  return (
    <div className="absolute top-1/2 -translate-y-1/2 w-full flex items-center justify-between px-2 bg-transparent">
      <button onClick={onPrevClick} className={btnClass} type="button">
        <AiOutlineDoubleLeft />
      </button>
      <button onClick={onNextClick} className={btnClass} type="button">
        <AiOutlineDoubleRight />
      </button>
    </div>
  );
};

const Slide = forwardRef((props, ref) => {
  const { title, _id, src, url, source, description, className = "", ...rest } = props;
 
  return (<>
    <Link
      target="_blank"
      to={url}
      ref={ref}
      className={"w-full cursor-pointer block outline-none" + className}
      {...rest}
    >
      {src !== null ? (
        <img className="object-cover aspect-video outline-none" src={src} alt="" />
      ) : <img className="object-cover aspect-video outline-none" src= "https://s.yimg.com/ny/api/res/1.2/jkN.9wNtePdZFz3Qn6oyqw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://media.zenfs.com/en/usa_today_news_641/58a68214d6e140c2161948f98b82d993" alt="" />}
      
          {title ? (
            <div className="absolute inset-0 flex flex-col justify-end py-3 bg-gradient-to-t from-white via-transparent dark:from-primary dark:via-transparent outline-none">
              <div className="p-1 backdrop:font-semibold md:text-6xl text-lg dark:text-highlight-dark text-highlight outline-none  ">
                {source}
                
              </div>
              <div className="p-1 md:text-xl text-sm dark:text-highlight-dark text-highlight  outline-none bg-gradient-to-t ">
                {description}
              </div>
            </div>
            
          ) : null}
      


    </Link>

          </>
  );
});

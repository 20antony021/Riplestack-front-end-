import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { axiosApi } from "config";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import { Button, Message, Placeholder } from "rsuite";
import useEmblaCarousel from "embla-carousel-react";

import RecentScheduledPosts from "views/admin/default/components/RecentScheduledPosts";
import TotalPerformance from "views/admin/default/components/TotalPerformance";
import Widget from "components/widget/Widget";
import {
  NextButton,
  PrevButton,
  usePrevNextButtons,
} from "./components/EmblaCarouselArrowButtons";
import Card from "components/card";
import CalendarItem from "./components/CalendarItem";

import { setPlatform } from "store/slices/platforms";

import facebookIcon from "../../../assets/img/marks/facebook.png";
import twitterIcon from "../../../assets/img/marks/twitter.png";
import instagramIcon from "../../../assets/img/marks/instagram.png";
import tiktokIcon from "../../../assets/img/marks/tiktok.png";
import thumbnailImg from "../../../assets/img/posts/image.png";

// import axios from "axios";

const Carousel = (props) => {
  const user = useSelector((state) => state.auth);
  const emblaOptions = {
    align: "start",
    slidesToScroll: 2,
    dragFree: true,
  };
  const [emblaRef, emblaApi] = useEmblaCarousel(emblaOptions);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  // const handleAboutMovieIn = (idx) => {
  //     const aboutPanel = document.getElementById(`topList-about-${idx}`);
  //     console.log(`topList-about-${idx}`);
  //     aboutPanel.classList.remove("hidden");
  // }

  // const handleAboutMovieOut = (idx) => {
  //     const aboutPanel = document.getElementById(`topList-about-${idx}`);
  //     aboutPanel.classList.add("hidden")
  // }

  useEffect(() => {
    if (emblaApi) {
      emblaApi.reInit(); // Reinitialize if necessary
    }
  }, [emblaApi]);

  return (
    <section className="embla relative">
      <div
        className={`flex items-center justify-between ${props.scrollArrowButtonsClassname}`}
      >
        <div className="text-lg font-bold dark:!text-navy-900">
          Calendar
        </div>
        <div className="embla__controls">
          <div className="embla__buttons">
            <PrevButton
              onClick={onPrevButtonClick}
              disabled={prevBtnDisabled}
            />
            <div className="text-xl"></div>
            <NextButton
              onClick={onNextButtonClick}
              disabled={nextBtnDisabled}
            />
            <Link to={`/main/posts/calendar`}>
              <Button appearance="primary">More Detail</Button>
            </Link>
          </div>
        </div>
      </div>
      <div className="embla__viewport relative w-full" ref={emblaRef}>
        <div className="embla__container">
          {props.items.map((_, index) => (
            <div key={`category-topvideo-${index}`} className="embla__slide">
              <div className="embla__slide__number">
                <div className="mx-1 py-[30px]">
                  <CalendarItem classNames={``} accounts={user.platforms.map(item => item.platform)} title="Behind-the-scenes at our latest photoshoot for marketing ad!" thumbnail={thumbnailImg} date={`2024-11-04 14:00:00`} status={`scheduled`} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Dashboard = () => {
  const platformIcons = {
    facebook: facebookIcon,
    twitter: twitterIcon,
    instagram: instagramIcon,
    tiktok: tiktokIcon,
  };
  const [platformLoading, setPlatformLoading] = useState(false);

  const navigator = useNavigate();
  const user = useSelector((state) => state.auth);
  const platforms = useSelector((state) => state.platforms);
  const dispatch = useDispatch();

  const renderPlatforms = () => {
    try {
      if (platformLoading) {
        return Array(4).map((_, id) => (
          <Placeholder.Paragraph
            key={`platform-loading-${id}`}
            graph="circle"
            active
          />
        ));
      }

      const workingPlatforms =
        user.platforms.length > 0 &&
        user.platforms.map((item, id) => {
          if (platforms[item.platform]) {
            return (
              <Widget
                key={`platform-widget-${id}`}
                icon={
                  <img
                    className="h-7 w-7"
                    src={platformIcons[item.platform]}
                    alt="platform icon"
                  />
                }
                title={"Followers"}
                subtitle={platforms[item.platform].followers}
                rise={platforms[item.platform].growth}
                likes={platforms[item.platform].likes}
                comments={platforms[item.platform].comments}
                shares={platforms[item.platform].shares}
              />
            );
          }
        });
      const notWorkingPlatforms = [
        "facebook",
        "twitter",
        "instagram",
        "tiktok",
      ].map((item, id) => {
        if (!user.platforms.some((plf) => plf.platform === item)) {
          console.log(`${item} account doesn't exist`);
          return (
            <div className="h-full w-full" key={`platform-status-${id}`}>
              <Message
                showIcon
                type="warning"
                header={
                  <div className="text-lg font-bold">
                    {item[0].toUpperCase() + item.slice(1)}
                  </div>
                }
                className="h-full !bg-[#ffe9c2]"
              >
                <div className="text-md">{`We are sorry, the account is not connected yet. Please try to connect.`}</div>
              </Message>
            </div>
          );
        } else {
          return null;
        }
      });

      return notWorkingPlatforms.concat(workingPlatforms).reverse();
    } catch (err) {
      console.log(err);
      return null;
    }
  };

  useEffect(() => {
    setPlatformLoading(true);
    axiosApi
      .post("/api/user/platforms/metrics", {})
      .then((res) => {
        const { facebook, twitter, instagram, tiktok } = res.data;
        console.log(res.data);
        dispatch(setPlatform({ facebook, twitter, instagram, tiktok }));
        setPlatformLoading(false);
      })
      .catch((err) => {
        setPlatformLoading(false);
        navigator("/auth/sign-in");
      });
  }, []);

  return (
    <div>
      <div className="mt-3 grid grid-cols-1 gap-5 bg-[#F6F2F7] dark:!bg-navy-900 md:grid-cols-2 lg:grid-cols-2 2xl:grid-cols-2 3xl:grid-cols-4">
        {renderPlatforms()}
      </div>

      <div className="mt-5 flex flex-col 3xl:flex-row">
        <div className="h-full w-full 3xl:w-[75%]">
          <TotalPerformance />
        </div>
        <div className="h-full w-full pl-0 3xl:w-[25%] 3xl:pl-5">
          <RecentScheduledPosts />
        </div>
      </div>
      <div className="mt-5">
        <Card extra="!p-[20px] text-center h-full bg-gradient-to-b from-[#ffffff] to-[#FDF7FF]">
          <Carousel items={[...Array(10)]} />
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;

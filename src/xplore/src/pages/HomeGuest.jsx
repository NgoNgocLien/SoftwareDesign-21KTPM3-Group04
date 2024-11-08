import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import Slider from "react-slick";

import {postService} from '../services/PostService';
import {userService} from '../services/UserService';
import {topicService} from '../services/TopicService';
import { RoleKey } from "../util/config";

import "../styles/commons.css";
import "./HomeGuest.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import AuthorVertical from '../components/author-card/AuthorVertical';
import BlogCardHorizontal from '../components/blog-card/BlogCardHorizontal';
import BlogCardNoThumb from '../components/blog-card/BlogCardNoThumb';
import AuthorHorizontal from '../components/author-card/AuthorHorizontal';

import MicrosoftLogo from '../assets/logos/Microsoft_logo.svg';
import GoogleMeetLogo from '../assets/logos/Google_Meet_logo.svg';
import ZoomLogo from '../assets/logos/Zoom_logo.svg'
import TopicTag from '../components/topic/TopicTag';

export default function Home() {
    const navigate = useNavigate();
    const {user_login} = useSelector(state => state.UserReducer);
    
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        swipeToSlide: true
    }

    const [trendingPosts, setTrendingPosts] = useState([]);
    const [topAuthors, setTopAuthors] = useState([]);
    const [hotTopics, setHotTopics] = useState([]);
    const [morePosts, setMorePosts] = useState([]);

    const fetchTrendingPosts = async () => {
        try {
            const result = await postService.getTrendingPosts();
            if (result.status === 200) {
                let posts_ = result.data.content;
                setTrendingPosts(posts_.slice(0, 6));
                setMorePosts(posts_.slice(6, 8));
            }
        } catch (error) {
            console.log("error", error.response);
            // alert(error.response.data.message)
        }
    };

    const fetchTopAuthors = async () => {
        try {
            const ids = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
            const users = [];
            for (let i = 0; i < ids.length; i++) {
                const result = await userService.getUserById(ids[i]);
                if (result.status === 200) {
                    users.push(result.data.content);
                }
            }
            setTopAuthors(users);
        } catch (error) {
            console.log("error", error.response);
            // alert(error.response.data.message)
        }
    }

    const fetchHotTopics = async () => {
        try {
            const topics = [];
            const result = await topicService.getAllTopics();
            for (let i = 0; i < result.data.content.length; i++) {
                topics.push(result.data.content[i]);
            }
            setHotTopics(topics);
        }
        catch (error) {
            console.log("error", error.response);
            // alert(error.response.data.message)
        }
    }

    useEffect(() => {
        if (user_login.id_user){
            console.log("home guest")
            navigate("/home")
            return
        }
            
        fetchTopAuthors();
        fetchTrendingPosts();
        fetchHotTopics();
    }, [user_login.id_user]);

    const slidingAuthors = topAuthors.slice(0, 7);
    const authorsToFollow = topAuthors.slice(7, 10);

    return (
        <div className='container-fluid'>
            <section className="container my-5 gradient-bg">
                
                <div className="row my-5  d-flex justify-content-center">
                    <h3 className="text-center col-8">The world's destination for avid readers</h3>
                </div>
                <div className="row my-5 d-flex justify-content-center">
                    <p className="p1 text-justify col-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
                <div className="my-5 d-flex justify-content-center">
                    <button className="button1 btn-nm prim-btn" >
                        Explore now
                        <i className="fa-solid fa-arrow-right ms-2"></i>
                    </button>
                </div>
            </section>

            <section className="container my-5">
                <Slider {...settings}>
                    {slidingAuthors.map(author => (
                        <AuthorVertical author={author} key={author.id_user} />
                    ))}
                </Slider>
            </section>

            <section className="container my-5 py-5 gradient-bg">
                <h5 className='mb-5'>
                    <i className="fa-solid fa-chart-line"></i> Trending on Xplore
                </h5>
                <div className="d-flex flex-wrap justify-content-start gap-3">

                {trendingPosts.map(post => (
                    <BlogCardNoThumb key={post.id_post} post={post} style={"home-guest"}/>
                ))}

                </div>
            </section>

            <section className="container my-5">
                <div className="row">
                    <div className="col-7 me-5">
                        <div className="d-flex align-items-center justify-content-between mb-5">
                            <h5 className='m-0 p-0'>Explore more</h5>
                            <Link to="#" className="link-nm button1">
                                See all posts
                            </Link>
                        </div>

                        <div className="d-flex flex-column gap-3">
                            {morePosts.map(post => (
                                <BlogCardHorizontal post={post} key={post.id_post} />
                            ))}
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="row mb-5">
                            <h5 className='mb-5'>Hot topics</h5>
                            <div className="d-flex flex-wrap gap-2">
                                {hotTopics.map(topic => (
                                    <TopicTag key={topic.topic} topic={topic} />
                                ))}
                            </div>
                            <button className="link-nm button1 d-flex justify-content-start gap-1 align-items-center mt-4">
                                See all<i className="fa-solid fa-arrow-right"></i>
                            </button>
                        </div>
                        <div className="d-flex flex-column">
                            <h5 className='m-0 p-0 mb-5'>Who to follow</h5>
                            <div className="d-flex flex-column gap-2">
                                {authorsToFollow.map(author => (
                                    <AuthorHorizontal author={author} key={author.id_user}/>
                                ))}
                            </div>
                            <button className="link-nm button1 d-flex justify-content-start gap-1 align-items-center mt-4">
                                See all<i className="fa-solid fa-arrow-right"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <section className="container my-5 py-5">
                <div className="row g-4">
                    <div className="col">
                        <img src="/imgs/who_we_are.png" alt="" style={{ width: '100%'}}/>
                    </div>
                    <div className="col">
                        <p className="title1" style={{color: "grey"}}>Who we are</p>
                        <h4>Actionable ideas and insights from Xplore</h4>
                        <p className="p1 my-5">Weaker carriers have fallen by the wayside amid fierce competition, while others have been hit by bad luck. The result: thousands of canceled flights.</p>
                        <div className="d-flex justify-content-start gap-3">
                            <button className="button1 btn-nm sec-btn">Contact us</button>
                            <button className="button1 btn-nm prim-btn">About us</button>
                        </div>

                    </div>
                </div>
            </section>

            <section className="container mt-5 pt-5">
                <div className="row d-flex justify-content-center">
                    <div className="col-4 text-center">
                        <h4>Trusted 100% by our partners</h4>
                    </div>
                </div>
                <div className="row d-flex justify-content-center my-3">
                    <div className="col-6 text-justify">
                        <p className="p1 text-scheme-sub-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore </p>
                    </div>
                </div>
                <p className="p1 text-scheme-sub-text text-center mb-3">Trusted Partner</p>
                <div className="row d-flex justify-content-center gap-3">
                    <img src={MicrosoftLogo} alt="" className="col-2"/>
                    <img src={GoogleMeetLogo} alt="" className="col-2"/>
                    <img src={ZoomLogo} alt="" className="col-2"/>
                </div>

            </section>
        </div>
    )
}
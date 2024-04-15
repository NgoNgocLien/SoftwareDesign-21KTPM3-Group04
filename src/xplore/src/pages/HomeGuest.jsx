import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Slider from "react-slick";

import { getTopPostsAction } from '../redux/actions/PostAction';

import "../styles/commons.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import AuthorVertical from '../components/author-card/AuthorVertical';
import BlogCardHorizontal from '../components/blog-card/BlogCardHorizontal';
import BlogCardNoThumb from '../components/blog-card/BlogCardNoThumb';
import AuthorHorizontal from '../components/author-card/AuthorHorizontal';

import MicrosoftLogo from '../assets/logos/Microsoft_logo.svg';
import GoogleMeetLogo from '../assets/logos/Google_Meet_logo.svg';
import ZoomLogo from '../assets/logos/Zoom_logo.svg';

export default function Home() {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        swipeToSlide: true
    }

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTopPostsAction());
    }, [dispatch]);

    const topPosts = useSelector(state => state.PostReducer.topPosts);
    console.log("topPosts: ", topPosts);

    return (
        <div className='container-fluid'>
            <section className="container my-5 gradient-bg">
                
                <div className="row my-5  d-flex justify-content-center">
                    <h1 className="text-center col-8">The world's destination for avid readers</h1>
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
                {/* <Slider {...settings}>
                    {authors.map((author, index) => (
                        <AuthorVertical key={index} author={author} />
                    ))}
                </Slider> */}

                <Slider {...settings}>
                    <AuthorVertical />
                    <AuthorVertical />
                    <AuthorVertical />
                    <AuthorVertical />
                    <AuthorVertical />
                    <AuthorVertical />
                    <AuthorVertical />
                    <AuthorVertical />
                    <AuthorVertical />
                    <AuthorVertical />
                </Slider>
            </section>

            <section className="container my-5 py-5 gradient-bg">
                <h4>
                    <i class="fa-solid fa-chart-line"></i> Trending on Xplore
                </h4>
                <div className="d-flex justify-content-between gap-3 mt-5">
                    <BlogCardNoThumb />
                    <BlogCardNoThumb />
                    <BlogCardNoThumb />
                </div>
                <div className="d-flex justify-content-between gap-3 mt-3">
                    <BlogCardNoThumb />
                    <BlogCardNoThumb />
                    <BlogCardNoThumb />
                </div>
            </section>

            <section className="container my-5">
                <div className="row">
                    <div className="col-7 me-5">
                        <div className="d-flex align-items-center justify-content-between">
                            <h4>Explore more</h4>
                            <Link to="#" className="link-nm button1">
                                See all posts <i class="fa-solid fa-check"></i>
                            </Link>
                        </div>

                        <div className="d-flex flex-column gap-2">
                            <BlogCardHorizontal />
                            <BlogCardHorizontal />
                            <BlogCardHorizontal />
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="row mb-5">
                            <h4>Hot topics</h4>
                            <div className="d-flex flex-wrap gap-2">
                                <button className="topic title1">Technology</button>
                                <button className="topic title1">Technology</button>
                                <button className="topic title1">Technology</button>
                                <button className="topic title1">Technology</button>
                                <button className="topic title1">Technology</button>
                                <button className="topic title1">Technology</button>
                                <button className="topic title1">Technology</button>
                                <button className="topic title1">Technology</button>
                            </div>
                            <button className="link-nm button1 d-flex justify-content-start gap-1 align-items-center mt-4">
                                See all topics <i class="fa-solid fa-arrow-right"></i>
                            </button>
                        </div>
                        <div className="row">
                            <h4>Who to follow</h4>
                            <div className="d-flex flex-column gap-2">
                                <AuthorHorizontal />
                                <AuthorHorizontal />
                                <AuthorHorizontal />
                            </div>
                            <button className="link-nm button1 d-flex justify-content-start gap-1 align-items-center mt-4">
                                See all popular writers <i class="fa-solid fa-arrow-right"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <section className="container my-5 py-5">
                <div className="row">
                    <div className="col">
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
    );
}
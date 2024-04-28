import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import "../styles/commons.css";
import "./AuthorProfile.css";
import { getAuthorPostAction } from "../redux/actions/UserAction";
import ProfileCard from '../components/blog-card/ProfileCard';

let props = {}

export default function AuthorProfile() {
    const location = useLocation();
    const author = location.state.author;

    const dispatch = useDispatch();
    const author_post = useSelector(state => state.UserReducer.author_post);

    const { id_user, avatar, fullname, email } = author;

    useEffect(() => {
        dispatch(getAuthorPostAction(id_user));
    }, [dispatch, id_user]);
    console.log("author_post: ", author_post)

    return (
        <div className='container-fluid profile'>
            <div className="profile-background"></div>
            <div className="container d-flex flex-row justify-content-between align-items-center">
                <div className="d-flex flex-row justify-content-start align-items-center gap-3">
                    <img src={avatar} alt="user's avatar" className="avatar-ctn"/>
                    <div>
                        <h5 className="fullname">{fullname}</h5>
                        <p className="p2 email">{email}</p>
                    </div>
                </div>
                <div className="d-flex flex-row justify-content-end align-items-center gap-2">
                    <a href='/edit-profile'>
                        <button className="btn-nm prim-btn button1">Follow</button>
                    </a>
                    <button className="btn-nm tert-btn button1">
                        <i class="fa-solid fa-user-plus me-1"></i> Share profile
                    </button>
                </div>
            </div>

            <div className="container">
                <div className=" row mt-5 d-flex flex-row justify-content-between">
                    <div className="col-7 d-flex flex-column gap-2">
                        <h6>Posted</h6>
                        <ProfileCard {...props}/>
                        <ProfileCard {...props}/>
                        <ProfileCard {...props}/>
                    </div>
                    <div className="col-4 d-flex flex-column gap-2">
                        <div className="d-flex flex-row justify-content-between align-items-center">
                            <h6>About</h6>
                            <span className="p1">84 posts</span>
                            <span className="p1">41K followers</span>
                        </div>
                        <p>I'm a Product Designer based in Melbourne, Australia. I specialise in UX/UI design, brand strategy, and Webflow development.</p>
                        <div>
                            <p>Enjoy the read? Reward the writer!</p>
                            <p>Your tip will go to Olivia through a third-party platform of their choice.</p>
                            <button>
                                <i class="fa-solid fa-hand-holding-heart me-1"></i>Give a tip
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
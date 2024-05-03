import React from "react";
import "./AuthorHorizontal.css";
import Avatar from "../avatar/Avatar";
import ButtonUnsubscribe from "../button/ButtonUnsubscribe";
import ButtonSubscribe from "../button/ButtonSubscribe";

export default function AuthorHorizontal(props) {
    const {fullname, bio, avatar, is_subscribe} = props.author;
    return (
        <div className="author-horizontal py-3 pe-3 d-flex bg-white rounded-3 shadow-sm overflow-hidden w-100 shadow">
            <div className=" col-2 d-flex align-items-start justify-content-center ">
                <Avatar avatar={avatar} size="small"/>
            </div>

            <div className=" col-6 d-flex flex-wrap px-0 mx-0">
                <p className="button2 m-0">{fullname}</p>
                <div className="p3 m-0 mt-2 long-text text-scheme-sub-text">{bio}</div>
            </div>

            <div className=" col-4 d-flex align-items-center justify-content-center px-0 mx-0">
                {
                    is_subscribe?
                        <ButtonUnsubscribe/>
                    :
                        <ButtonSubscribe />
                }
            </div>
        </div>
    )
}
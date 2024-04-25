import React from "react";
import "./BlogPostCard.css";
import Avatar from "../avatar/Avatar";
import BookmarkIcon from "../icon/BookmarkIcon"
import { formatToMDY } from "../../util/formatDate";
import { sanitizeContent } from "../../util/formatText";

const LONG_PASSAGE = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit."+
"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit."+
"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit."

export default function BlogPostCard(props) {
    const {id_post, title, content, thumbnail, list_topic, author,
        publish_time} = props;

    return (
        <div className="blog-post-card d-flex flex-wrap p-0">

            <div className="col-12 thumbnail-container bg-white p-0 m-0 position-relative">
                <BookmarkIcon id_post={id_post} set_absolute={true}/>
                <img src={thumbnail || "https://picsum.photos/id/2/600/600"} alt=""  />
            </div>
            
            {
                list_topic?.length > 0 ?
                (
                    <div className="row col-12 m-0 mt-4 mb-2">
                        <p className="col-auto title3 text-black m-0 p-2 rounded-1 bg-blue-100 post-topic">
                            {list_topic[0]?.topic || "First topic"}
                        </p>
                    </div>
                ) : 
                (
                    <div className="row col-12 m-0 mt-4 topic-block">
                    </div>
                )
            }
            <div className="row col-12 title-block">
                <div className="row col-12 m-0 ">
                    <h6 className="col-auto text-black m-0 p-0 title-text long-text">
                        {title || "Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
                    </h6>
                </div>

                <div className="row col-12 m-0 mt-2 mb-3">
                    <p className="col-auto p3 text-scheme-sub-text m-0 p-0 content-text long-text "
                    dangerouslySetInnerHTML={{ __html: sanitizeContent(content) || "" }}>
                    </p>
                </div>
            </div>
            
 
            <div className="row col-12 d-flex align-items-center justify-content-between p-0 m-0">
                <div className="col-8 d-flex align-items-center gap-2 p-0">
                    <div className="col-3">
                        <Avatar avatar={author?.author_avatar} size="small"/>
                    </div>

                    <div className="col-9 row d-flex flex-column align-items-start gap-1 ">
                        <p className="col-auto title2 text-black m-0 p-0">
                            {author?.fullname || "Author name"}
                        </p>
                        <p className="col-auto support text-scheme-sub-text m-0 p-0">
                            {(publish_time && formatToMDY(publish_time)) || "Aug 6, 2024"}
                        </p>
                    </div>
                </div>

                <div className="col-4 link-sm m-0 p-0 d-flex justify-content-end">
                    <a href={`/post?id_post=${id_post}`}>Read post <i className="fa-solid fa-arrow-right"></i></a>
                </div>
            </div>
        </div>
    )
}
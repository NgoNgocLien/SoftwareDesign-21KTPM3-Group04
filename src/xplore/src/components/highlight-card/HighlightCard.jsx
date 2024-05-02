import React from "react";
import "./HighlightCard.css";

import { useNavigate } from 'react-router-dom'

export default function HighlightCard(props) {
    /*
    {
      "id_highlight": 5,
      "id_post": 1,
      "start_index": 162,
      "end_index": 187,
      "content": "ens and social media on o",
      "highlight_time": "2024-05-01T20:32:04.000Z",
      "id_post_post": {
        "title": "An Open Letter to Parents: We Need to Get Our Kids Off the Screens",
        "author": {
          "fullname": "Pham Mai"
        }
      }
     */
    const { highlight } = props;
    
    const navigate = useNavigate();

    const handleHighlightClicked = () => {
        navigate("/post?id_post=" + highlight?.id_post)
    }

    return (
        <div className='highlight-card p-4 shadow mb-3' onClick={handleHighlightClicked}>
            <p className="p3 text-scheme-sub-text mb-2">From <b>{highlight?.id_post_post?.title || "---"}</b> by <b>{highlight?.id_post_post?.author?.fullname || "---"}</b></p>
            <p className="p1 m-0 p-0 text-scheme-main-text content"><mark>{highlight?.content || "---"}</mark></p>
        </div>
    )
}
import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import './ViewList.css';
import Search from '../components/search/Search';
import BlogCardHorizontal from '../components/blog-card/BlogCardHorizontal';
import Loading from '../components/system-feedback/Loading';
import { userService } from '../services/UserService';

export default function ViewList(props) {
    const user_info = localStorage.getItem('userLogin') ? JSON.parse(localStorage.getItem('userLogin')) : null;

    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const id_list = parseInt(searchParams.get('id_list'));
    const navigate = useNavigate();

    const [loading, setLoading] = useState(true);
    const [list, setList] = useState({});

    const fetchList = async () => {
        try {
            const result = await userService.getPostByListId(id_list)
            if (result.status === 200) {
                console.log("list: ", result.data.content);
                setList(result.data.content);
                setLoading(false);
            }
        } catch (error) {
            console.log("error", error);
        }
    }

    useEffect(() => {  
        fetchList();
    }, []);

    return (
        <div className='view-list container-fluid'>
            <Search />
            <div className='my-4 py-2 list-title-container'>
                <div className='container'>
                    <div className='d-flex justify-content-between align-items-center'>
                        <button className='link-nm' onClick = {() => navigate("/list")} >
                            <i class="fa-solid fa-arrow-left"></i> Back
                        </button>
                        <p className='title1 p-0 m-0'>{`${list?.list_name || ''} (${list.saved_posts?.length})`}</p>
                        <div className="dropdown">
                            <i class="fa-solid fa-ellipsis ic" role="button" data-bs-toggle="dropdown" aria-expanded="false"></i>
                            <ul class="dropdown-menu dropdown-menu-end">
                                <li class="dropdown-item">Edit list</li>
                                <li><hr className="dropdown-divider" ></hr></li>
                                <li class="dropdown-item delete-dropdown">
                                    <i class="fa-regular fa-trash-can"></i> Delete
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container'>
            {loading && <Loading />}

            {!loading && list.saved_posts.length > 0 &&
                <div className='d-flex flex-wrap justify-content-between gap-4'>
                    {list.saved_posts.map((post) => {
                        return <BlogCardHorizontal post={post} style={"view-list"}/>
                    })}
                </div>
            }

            {!loading && list.saved_posts.length === 0 &&
                <div className='empty-box text-center my-5 py-5'>
                    <img src='/imgs/empty-box.png' alt='empty-box' className='mt-5' />
                    <h6 className='text-scheme-sub-text mt-5'>This list is empty</h6>
                </div>
            }
                
            </div>
        </div>
    )
}
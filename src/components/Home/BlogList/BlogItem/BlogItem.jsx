import React from 'react';
import { Link } from 'react-router-dom';
import Chip from '../../../common/Chip';
import './BlogItem.css';

const BlogItem = ({ blog }) => {
  // console.log("blog.title "+blog.title)
  return (
    <div>
      <div className='blogItem-wrap'>
        <img className='blogItem-cover' src={`http://localhost:3500/image/${blog._id}`} alt='cover' />
        <Chip label={blog.category} />
        <h3>{blog.title}</h3>
        <p className='blogItem-desc'>{blog.description}</p>
        <footer>
          <div className='blogItem-author'>
            <div>
              <h6>{blog.authorName}</h6>
              <p>{blog.createdAt}</p>
            </div>
          </div>
          {/* <h1>{`blog ${blog.id}`}</h1> */}
          
          <Link className='blogItem-link' to={`/blog/${blog.id}`}>
            ➝
          </Link>
        </footer>
      </div>

    </div>
  );
};

export default BlogItem;

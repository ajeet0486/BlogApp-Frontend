import React, { useEffect, useState } from 'react';
import './BlogList.css';
import BlogItem from './BlogItem/BlogItem';

const BlogList = ({blogs}) => {

  return (
    <div className='blogList-wrap'>
      {blogs.map((blog) => (
        <BlogItem blog={blog} />
      ))}
    </div>
  );
};

export default BlogList;

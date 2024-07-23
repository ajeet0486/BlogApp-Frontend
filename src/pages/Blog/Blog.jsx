import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Chip from '../../components/common/Chip';
import EmptyList from '../../components/common/EmptyList/EmptyList';
import './styles.css';

const Blog = () => {
  const [blogList, setBlogList] = useState([]);
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3500/image')
      .then(response => response.json())
      .then(data => {
        console.log('Fetched data:', data); // Debugging
        setBlogList(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  useEffect(() => {
    console.log('Blog list:', blogList); // Debugging
    console.log('Current ID:', id); // Debugging
    const selectedBlog = blogList.find(blog => blog.id === parseInt(id));
    console.log('Selected blog:', selectedBlog); // Debugging
    if (selectedBlog) {
      setBlog(selectedBlog);
    }
  }, [id, blogList]);

  return (
    <>
      <Link to='/'>
        <span>&#8592;</span> <span>Go Back</span>
      </Link>
      {blog ? (
        <div className='blog-wrap'>
          <header>
            <p className='blog-date'>Published {blog.createdAt}</p>
            <h1>{blog.title}</h1>
            {/* <div className='blog-subCategory'>
              {blog.subCategory.map((category, i) => (
                <div key={i}>
                  <Chip label={category} />
                </div>
              ))}
            </div> */}
          </header>
          <img src={`http://localhost:3500/image/${blog._id}`} alt='cover' />
          <p className='blog-desc'>{blog.description}</p>
        </div>
      ) : (
        <EmptyList />
      )}
    </>
  );
};

export default Blog;

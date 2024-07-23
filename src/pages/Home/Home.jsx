import React, { useEffect, useState } from 'react';
import EmptyList from '../../components/common/EmptyList/EmptyList';
import Header from '../../components/Home/Header';
import SearchBar from '../../components/Home/SearchBar';
// import { blogList } from '../../config/data';
import BlogList from '../../components/Home/BlogList/BlogList';

const Home = () => {
  const [blogs, setBlogs] = useState([]);
  const [searchKey, setSearchKey] = useState('');

  useEffect(() => {
    fetch('https://blogapp-backend-y95k.onrender.com/image')
      .then(response => response.json())
      .then(data => setBlogs(data))
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

// Search submit
const handleSearchBar = (e) => {
  e.preventDefault();
  handleSearchResults();
};
// Search for blog by category
const handleSearchResults = () => {
  const allBlogs = blogs;
  const filteredBlogs = allBlogs.filter((blog) =>
    blog.category.toLowerCase().includes(searchKey.toLowerCase().trim())
  );
  setBlogs(filteredBlogs);
};

// Clear search and show all blogs
const handleClearSearch = () => {
  setBlogs(blogs);
  setSearchKey('');
};

return (
  <div>
    <Header />
    <SearchBar
      value={searchKey}
      clearSearch={handleClearSearch}
      formSubmit={handleSearchBar}
      handleSearchKey={(e) => setSearchKey(e.target.value)}
    />

    {/* Blog List & Empty View */}
    {!blogs.length ? <EmptyList /> : <BlogList blogs={blogs}/>}
  </div>
);
};



export default Home;

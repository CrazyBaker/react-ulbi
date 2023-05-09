import './styles/App.css'
import React, { useRef, useState } from "react";
import PostList from './components/PostList';
import PostForm from './components/PostForm';

function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: 'Javascript', body: 'Description'},
    {id: 2, title: 'React', body: 'Description'},
    {id: 3, title: 'Redux', body: 'Description'},
  ]);

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }
  

  return (
    <div className="App">
      <PostForm create={createPost}/>
      <PostList posts={posts} title={'Список постов'}/>
    </div>
  )
}

export default App;

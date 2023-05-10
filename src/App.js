import './styles/App.css'
import React, { useRef, useState } from "react";
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import MySelect from './components/UI/select/MySelect';

function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: 'Javascript', body: 'bbbbb'},
    {id: 2, title: 'React', body: 'ccccc'},
    {id: 3, title: 'Redux', body: 'aaaa'},
  ]);

  const [selectedSort, setSelectedSort] = useState('');
  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }
  
  const removePost = (post) => {
    setPosts(posts.filter(itarablePost => itarablePost.id !== post.id))
  }

  const sortPosts = (sort) => {
    setSelectedSort(sort);
    setPosts([...posts].sort((a,b) => a[sort].localeCompare(b[sort])))
  }

  return (
    <div className="App">
      <PostForm create={createPost}/>
      <hr style={{margin: '15px 0'}}/>
      <div>
        <MySelect
          value={selectedSort}
          onChange={sortPosts}
          defaultValue="Сортировка по: "
          option = {[
            {value: 'title', name:'По названию'},
            {value:'body', name:'По описанию'},
          ]}
        />
      </div>
      {posts.length
        ? <PostList remove={removePost} posts={posts} title={'Список постов'}/> 
        : 
        <h1 style={{textAlign: 'center'}}>
          Посты небыли найдены
        </h1>
      }
    </div>
  )
}

export default App;

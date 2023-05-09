import './styles/App.css'
import React, { useRef, useState } from "react";
import Counter from "./components/Counter";
import ClassCounter from "./components/ClassCounter";
import PostItem from "./components/PostItem";
import PostList from './components/PostList';
import MyButton from './components/UI/button/MyButton';
import MyInput from './components/UI/input/MyInput';

function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: 'Javascript', body: 'Description'},
    {id: 2, title: 'React', body: 'Description'},
    {id: 3, title: 'Redux', body: 'Description'},
  ]);

  const [posts2, setPosts2] = useState([
    {id: 1, title: 'Python', body: 'Description'},
    {id: 2, title: 'Django', body: 'Description'},
    {id: 3, title: 'MobX', body: 'Description'},
  ]);

  const [post, setPost] = useState({title: '', body: ''});

  const addNewPost = (e) => {
    e.preventDefault();

    setPosts([...posts, {...post, id: Date.now()}])
    setPost({title: '', body:''});
  }

  return (
    <div className="App">
      <form>
        <MyInput 
          type="text" 
          placeholder='Название поста' 
          value={post.title} 
          onChange={e => setPost({...post, title: e.target.value})} 
        />
        <MyInput 
          type="text" 
          placeholder='Описание поста'
          value={post.body}
          onChange={e => setPost({...post, body: e.target.value})}
        />
        <MyButton onClick={addNewPost}>Создать пост</MyButton>
      </form>
      <PostList posts={posts} title={'Список постов'}/>
      <PostList posts={posts2} title={'Другой список постов'}/>
    </div>
  )
}

export default App;

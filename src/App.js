import './styles/App.css'
import React, { useState } from "react";
import Counter from "./components/Counter";
import ClassCounter from "./components/ClassCounter";
import PostItem from "./components/PostItem";
import PostList from './components/PostList';
import MyButton from './components/UI/button/MyButton';

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

  return (
    <div className="App">
    <form>
      <input type="text" placeholder='Название поста'/>
      <input type="text" placeholder='Описание поста'/>
      <MyButton>Создать пост</MyButton>
    </form>
    <PostList posts={posts} title={'Список постов'}/>
    <PostList posts={posts2} title={'Другой список постов'}/>
    </div>
  );
}

export default App;

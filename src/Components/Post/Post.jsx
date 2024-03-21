import React, { useEffect, useState } from 'react';
import Header from './Header/Header';
import PostList from './PostsList/PostList';
import { useParams } from 'react-router-dom';
import { useContext } from "react";
import BoardContext from '../../context/boardContext';



function Post() {
  const { Boards, setBoards } = useContext(BoardContext);
  const { id } = useParams();
  const [getText, setText] = useState('');
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    if (Boards) {
      const board = Boards.find(board => board.id === parseInt(id));
      if (board) {
        console.log(`Board ${id} ${board}`)
        console.log(`Board ${id} ${board.posts}`)
        console.log(board.posts.map((item) => item.text));
        setPosts(board.posts);
      }
    }
  }, [Boards, id]);

  const addPost = (text) => { 
    const newPost = { id: posts.length + 1, text };
    const updatedPosts = [...posts, newPost];
    setPosts(updatedPosts);
    setBoards(prevBoards => prevBoards.map(board =>
      (board.id === parseInt(id) ? { ...board, posts: [...board.posts, newPost] } : board)
    )
    );
    
  };

  const deletePost = (id) => {
    setPosts(posts.filter((item) => item.id !== id));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addPost(getText);
    setText('');
  };

  return (
    <div>
      <Header />
      <div className="Form-Div">
        <form onSubmit={handleSubmit} className="Form">
          <label htmlFor="postInput">Enter New Post Name:</label>
          <input id="postInput" value={getText} onChange={(e) => setText(e.target.value)} type="text" />
          <button type="submit">Create</button>
        </form>
      </div>
      <div>
        <PostList posts={posts} deletePost={deletePost} />
      </div>
    </div>
  );
}

export default Post;

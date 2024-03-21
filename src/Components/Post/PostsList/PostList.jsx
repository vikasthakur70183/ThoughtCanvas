import React from 'react';

function PostList({ posts, deletePost }) {


    return (
        <div className="Board">
            <h1 className="Heading">Boards</h1>
            <div className="Boards">
                {posts.map((item) => (
                    <div className="item" key={item.id}>
                        <p>{item.text}</p>
                        <button className="btn" onClick={() => deletePost(item.id)}>delete</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default PostList;

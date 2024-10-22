import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { addPost, delitePost } from './features/Posts';
import { useState } from 'react';

function App() {
  const [name, setName] = useState("")
  const [content, setContent] = useState("")
  const postList = useSelector((state) => state.posts.value);

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(addPost(
    {
      id: postList.length,
      name: name,
      content: content,
    }));
  }
  return (
    <>
      <div>
        <h1>掲示板</h1>
        <div>
          <input type="text" placeholder='name' onChange={(e) => setName(e.target.value)} />
          <input type="text" placeholder='content' onChange={(e) => setContent(e.target.value)} />
          <button type='submit' onClick={handleClick}>投稿</button>
        </div>
        <div className=''>
          {postList.map((post) => ( //引数に関数内で使用する配列一つ一つの名前を決める
            <div key={post.id}>
              <h1>{post.name}</h1>
              <h1>{post.content}</h1>
             <button onClick={() => dispatch(delitePost({id: post.id}))}>削除</button>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default App

import './post.css';

const Post = () => {
  return (
    <div className='post'>
      <img className='postImage' src='/image/Ai2.jpg' alt='' />
      <div className='postInfo'>
        <div className='postCats'>
          <span className='postCat'>Music</span>
          <span className='postCat'>Life</span>
        </div>
        <span className='postTitle'>Lorem ipsum dolor sit</span>
        <hr />
        <span className='postDate'>1 hour ago</span>
      </div>
      <p className='postDesc'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, eius
        quis amet delectus ratione culpa tenetur ullam suscipit praesentium odio
        voluptatibus porro assumenda. Inventore quis perspiciatis omnis?
        Laboriosam, provident fuga.
      </p>
    </div>
  );
};

export default Post;

import './singlepost.css';

const SinglePost = () => {
  return (
    <div className='singlePost'>
      <div className='singlePostWrapper'>
        <img src='/image/pic2.jpg' alt='' className='singlePostImg' />
        <h1 className='singlePostTitle'>
          Lorem ipsum dolor
          <div className='singlePostEdit'>
            <i className='singlePostIcon  fa-solid fa-pen-to-square'></i>
            <i className='singlePostIcon fa-solid fa-trash-can'></i>
          </div>
        </h1>
        <div className='singlePostInfo'>
          <span className='singlePostAuthor'>
            Author: <b>Vivy</b>
          </span>
          <span className='singlePostDate'>1 hour Ago</span>
        </div>
        <p className='singlePostDesc'>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi
          vero id, quam harum magnam natus aspernatur tenetur asperiores nam,
          quae ut eveniet nostrum necessitatibus rerum quo. Possimus similique
          deleniti soluta? Lorem ipsum dolor, sit amet consectetur adipisicing
          elit. Enim minima nesciunt vitae et eos aperiam, ipsum placeat unde
          tempora veniam quas hic sunt voluptas dolorem laudantium laborum eum,
          nihil nulla? Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Excepturi vero id, quam harum magnam natus aspernatur tenetur
          asperiores nam, quae ut eveniet nostrum necessitatibus rerum quo.
          Possimus similique deleniti soluta? Lorem ipsum dolor, sit amet
          consectetur adipisicing elit. Enim minima nesciunt vitae et eos
          aperiam, ipsum placeat unde tempora veniam quas hic sunt voluptas
          dolorem laudantium laborum eum, nihil nulla? Lorem ipsum dolor sit
          amet consectetur, adipisicing elit. Excepturi vero id, quam harum
          magnam natus aspernatur tenetur asperiores nam, quae ut eveniet
          nostrum necessitatibus rerum quo. Possimus similique deleniti soluta?
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim minima
          nesciunt vitae et eos aperiam, ipsum placeat unde tempora veniam quas
          hic sunt voluptas dolorem laudantium laborum eum, nihil nulla? Lorem
          ipsum dolor sit amet consectetur, adipisicing elit. Excepturi vero id,
          quam harum magnam natus aspernatur tenetur asperiores nam, quae ut
          eveniet nostrum necessitatibus rerum quo. Possimus similique deleniti
          soluta? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim
          minima nesciunt vitae et eos aperiam, ipsum placeat unde tempora
          veniam quas hic sunt voluptas dolorem laudantium laborum eum, nihil
          nulla?
        </p>
      </div>
    </div>
  );
};

export default SinglePost;

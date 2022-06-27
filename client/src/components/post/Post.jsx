import "./post.css";

export default function Post() {
  return (
    <div className="post">
        <img classname="postImg"
            src="https://img.freepik.com/free-photo/agenda-word-yellow-background-with-copy-space-text_361816-3597.jpg"
            alt=""
            />
         <div className="postInfo">
            <div className="postCats">
                <span className="postCat">Music</span>
                <span className="postCat">Life</span>
            </div>
            <span className="postTitle">
                Lorem ipsum dolor
            </span>
            <hr/>
            <span className="postDate">1 hour ago</span>
         </div>
         <p className="postDesc">
              Esto es un prueba Esto es un prueba Esto es un prueba Esto es un prueba
              Esto es un prueba Esto es un prueba Esto es un prueba Esto es un prueba 
         </p>
    </div>
  );
}

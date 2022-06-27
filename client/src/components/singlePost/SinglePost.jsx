import "./singlePost.css";

export default function () {
  return (
    <div className="singlePost">
        <div className="singlePostWrapper">
            <img
             src="https://media.istockphoto.com/photos/making-notes-in-paper-notebook-using-a-laptop-pc-picture-id587205858?k=20&m=587205858&s=170667a&w=0&h=mSmpP3_6Y-BctPKjIYf2s8J1EZoOvPQs9gOTyzaJPWY=" 
             alt="" className="singlePostImg"
             />
             <h1 className="singlePostTitle">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                <div className="singlePostEdit">
                <i className="singlePostIcon fa-solid fa-pen-to-square"></i>
                <i className="singlePostIcon fa-solid fa-trash"></i>
                </div>
             </h1>
             <div className="singlePostInfo">
                <span className="singlePostAuthor">Author: <b>kkkkk</b></span>
                <span className="singlePostDate"> 1 hora antes</span>
             </div>
             <p className="singlePostDesc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Rem velit iure earum omnis et sint repudiandae illum.
                Molestias dolor voluptate saepe adipisci omnis atque velit eos,
                consectetur eveniet, quos placeat.
             </p>
        </div>
    </div>
  )
}

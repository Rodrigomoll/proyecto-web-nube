import "./sidebar.css"

export default function Sidebar() {
  return (
    <div className="sidebar">
        <div className="sidebarItem">
            <span className="sidebarTitle">ABOUT ME</span>
            <img 
                 src="https://i.pinimg.com/originals/71/b5/a6/71b5a6fd437d6ef79c6f52c962616409.jpg"
                alt=""
             />
             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim quas ipsum rerum aperiam maiores, facere sed vitae voluptates</p>
        </div>
        <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIAS</span>
        <ul className="sidebarListItem">
            <li className="sidebarListItem">Life</li>
            <li className="sidebarListItem">Music</li>
            <li className="sidebarListItem">Style</li>
            <li className="sidebarListItem">Sport</li>
            <li className="sidebarListItem">Tech</li>
            <li className="sidebarListItem">Cinema</li>
        </ul>
        </div>
        <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
            <i className="sidebarIcon fab fa-brands fa-facebook"></i>
            <i className="sidebarIcon fab fa-brands fa-twitter"></i>
            <i className="sidebarIcon fab fa-brands fa-amazon"></i>
            <i className="sidebarIcon fab fa-brands fa-instagram"></i>
        </div>
        </div>
    </div>


  )
}

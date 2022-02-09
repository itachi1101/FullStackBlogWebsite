import "./post.css";
import image from "../../assets/mateusz-klein-a1BlhTu0lMI-unsplash.jpg";
export default function Post() {
  return (
    <div className="post">
      <img src={image} />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
        </div>
        <span className="postTitle">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
        </span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
        repellendus laboriosam eum molestias error nesciunt, dolores laborum
        nihil cupiditate veniam nulla, veritatis culpa consectetur obcaecati
        quibusdam. Obcaecati nulla odio vero?
      </p>
    </div>
  );
}

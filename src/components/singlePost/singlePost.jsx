import "./singlepost.css";
export default function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img className="singlePostImg" />
        <h1 className="singlePostTitle">
          Lorem ipsum dolor sit Dolore
          <div className="singlePostEdit">
            <i className="singlePostIcon far fa-edit"></i>
            <i className="singlePostIcon fas fa-trash-alt"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author: <b>Aviral</b>
          </span>
          <span className="singePostDate">1 hour ago</span>
        </div>
        <p className="singlePostDesc">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores,
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores,
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores,
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores,
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores,
          tempora excepturi delectus porro facilis illo a alias amet, recusandae
          vel totam veritatis itaque earum nulla placeat natus? Aliquid, placeat
          similique.
          tempora excepturi delectus porro facilis illo a alias amet, recusandae
          vel totam veritatis itaque earum nulla placeat natus? Aliquid, placeat
          similique.
          tempora excepturi delectus porro facilis illo a alias amet, recusandae
          vel totam veritatis itaque earum nulla placeat natus? Aliquid, placeat
          similique.
          tempora excepturi delectus porro facilis illo a alias amet, recusandae
          vel totam veritatis itaque earum nulla placeat natus? Aliquid, placeat
          similique.
          tempora excepturi delectus porro facilis illo a alias amet, recusandae
          vel totam veritatis itaque earum nulla placeat natus? Aliquid, placeat
          similique.
        </p>
      </div>
    </div>
  );
}

import "../../styles/home/BulletItem.css";

export const BulletItem = ({ imageUrl, heading, description }) => {
  return (
    <div className="bullet-item">
      <img src={imageUrl}></img>
      <h1>{heading}</h1>
      <p>{description}</p>
    </div>
  );
};

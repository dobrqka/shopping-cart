import { ShopNow } from "./ShopNow";
import { BulletList } from "./BulletList";
import "../../styles/home/Home.css";

export const Home = () => {
  return (
    <div className="home-page">
      <div className="home-modal">
        <h1>Welcome to our garden.</h1>
        <p>
          We are a family running a small-scale market garden in the fertile
          Plovdiv region, using organic and regenerative agriculture methods.
          Our produce is clean, nutritious, healthy, fresh and most of all -
          tasty!
        </p>
        <BulletList />
        <ShopNow />
      </div>
    </div>
  );
};

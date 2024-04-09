import { BulletItem } from "./BulletItem";
import "../../styles/home/BulletList.css";

export const BulletList = () => {
  const para1 =
    "We prioritize soil health and biodiversity and this creates healthy plants without the need for any chemicals!";
  const para2 =
    "We pick the vegetables as soon as we get your order and they are shipped within the hour.";
  const para3 =
    "Our careful selection of varieties (based on nutritional value and taste) coupled with clean, organic growing (with love!) guarantee a yummy meal!";

  return (
    <div className="bullet-list">
      <BulletItem heading="Nutritious" description={para1} />
      <BulletItem heading="Fresh" description={para2} />
      <BulletItem heading="Tasty" description={para3} />
    </div>
  );
};

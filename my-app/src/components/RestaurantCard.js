import { CDN_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const RestaurantCard = (props) => {
  console.log(props);
  //Instead of "props" we can write "{resname, cuisine, src}" ==> Destructuring (JavaScript Concept)
  //use it as ==> <h3>{resName}</h3>
  const { name, cloudinaryImageId, avgRatingString, costForTwo, id } =
    props.item.info; // destructuring

    console.log(id);
  return (
    <div className="res-card">
      <img className="res-logo" src={CDN_URL + cloudinaryImageId} />
      <Link to={"/restaurants/"+id}>
        <h4>{name}</h4>
      </Link>
      <h5>{avgRatingString}</h5>
      <h5>{costForTwo}</h5>
    </div>
  );
};

export default RestaurantCard;

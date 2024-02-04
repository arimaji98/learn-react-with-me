import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    //Instead of "props" we can write "{resname, cuisine, src}" ==> Destructuring (JavaScript Concept)
    //use it as ==> <h3>{resName}</h3>
    const { name, cloudinaryImageId, avgRatingString, costForTwo } = props?.item; // destructuring 
    return (
        <div className="res-card">
            <img className="res-logo" src={CDN_URL + cloudinaryImageId} />
            <h4>{name}</h4>
            <h5>{avgRatingString}</h5>
            <h5>{costForTwo}</h5>
        </div>
    )
}

export default RestaurantCard;
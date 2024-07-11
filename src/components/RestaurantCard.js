import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;

  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } =
    resData?.info;

  return (
    <div className=" bg-yellow-100 hover:bg-yellow-200  m-4 p-4 w-[250px] h-[500px] rounded-xl">
      <img
        className="w-[200px] h-[200px] rounded-lg justify-evenly"
        alt="res-img"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="font-bold py-4 text-lg"> {name} </h3>
      <h4 className="text-gray-600"> {cuisines.join(", ")} </h4>
      <h4 className="text-gray-600"> {avgRating} </h4>
      <h4 className="text-gray-600"> {costForTwo}</h4>
      <h4 className="text-gray-600"> {sla?.slaString}</h4>
    </div>
  );
};

export const WithPromoted = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white m-2 p-2 rounded-lg">
          Promoted
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;

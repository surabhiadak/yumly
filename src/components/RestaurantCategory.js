import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, handleShowItem, dummy }) => {
  const handleClick = () => {
    handleShowItem();
  };

  return (
    <div>
      <div className="w-6/12 bg-gray-100 shadow-lg p-4 mx-auto my-4">
        <div className="flex justify-between" onClick={handleClick}>
          <span className="font-bold text-lg">
            {data.title}({data.itemCards.length})
          </span>
          <span>⬇️</span>
        </div>

        {showItems && <ItemList items={data.itemCards} dummy={dummy} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;

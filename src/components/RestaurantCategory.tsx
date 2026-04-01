import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, setShowIndex }: any) => {
  //Destructure essentials from data
  const { title, itemCards, categories } = data;

  const handleClick = () => {
    setShowIndex();
  };

  return (
    <div>
      <div className="mx-auto my-4 w-6/12 bg-gray-50 p-4 shadow-lg">
        {/* Header Section */}
        <div
          className="flex cursor-pointer justify-between"
          onClick={handleClick}
        >
          <span className="text-lg font-bold">
            {title}
            {/* If it's a flat category, show length. If nested, you might want to sum all itemCards in all categories */}
            {itemCards?.length ? ` (${itemCards.length})` : ""}
          </span>
          <span>{showItems ? "⬆️" : "⬇️"}</span>
        </div>

        {/* Conditional Rendering Logic */}
        {showItems && (
          <div className="mt-4">
            {/* Case A: It's a standard Category with direct itemCards */}
            {itemCards && <ItemList items={itemCards} />}

            {/* Case B: It's a NestedCategory with sub-categories */}
            {categories &&
              categories.map((subCategory: any) => (
                <div key={subCategory.title} className="mb-6 last:mb-0">
                  <h4 className="border-b border-gray-200 pb-2 text-sm font-semibold text-gray-700">
                    {subCategory.title} ({subCategory.itemCards?.length})
                  </h4>
                  <ItemList items={subCategory.itemCards} />
                </div>
              ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default RestaurantCategory;
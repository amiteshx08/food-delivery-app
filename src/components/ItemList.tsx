import { CDN_URL } from "../utils/constant";
const ItemList = ({ items }: any) => {
  return (
    <div>
      {items.map((item: any, index: number) => (
        <div
          key={`${item.card.info.imageId}-${index}`}
          className="p-2 mx-2 border-gray-200 border-b-2 text-left flex justify-between"
        >
          <div className="w-9/12">
            <div className="">
              <span className="font-bold">{item.card.info.name}</span>

              <span className="font-medium">
                - ₹
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </span>
              <p className="text-xs">{item.card.info.description}</p>
            </div>
          </div>

          <div className="w-3/12">
            <img
              src={CDN_URL + item.card.info.imageId}
              className="w-full rounded-lg"
            />
            <div className="flex justify-center">
              <button className="px-2 py-1.5 m-0.5 bg-white text-green-600 font-bold text-sm rounded-lg shadow-lg border border-green-600 hover:bg-green-600 hover:text-white transition-all duration-200">
                ADD
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;

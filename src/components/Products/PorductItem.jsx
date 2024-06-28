import Spinner from "../Spinner/Spinner";

const ProductItem = ({ data, isPending, error }) => {
  if (error) throw new Error("Products not found");
  if (isPending) return <Spinner />;
  return (
    <>
      {data.map((item) => {
        return (
          <div
            className=" card-image-cover h-fit  overflow-hidden card  flex-col-reverse"
            key={item.id}
          >
            <div className="card-body">
              <h2 className="card-header">{item.title}</h2>
              <p className="text-content2">{item.description}</p>
              <p className="text-content2 text-2xl ">{item.price} $</p>
              {/* <div className="card-footer">
                <button className="btn-secondary btn">Learn More</button>
              </div> */}
            </div>
            <img className=" max-h-96 object-cover" src={item.image} alt="" />
          </div>
        );
      })}
    </>
  );
};

export default ProductItem;

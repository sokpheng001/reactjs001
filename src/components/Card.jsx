const Card = function ({id, name, description, profile}) {
  return (
    <div className="shadow p-4 w-[300px] rounded">
      <img
        width={300}
        src={
          profile ??
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqafzhnwwYzuOTjTlaYMeQ7hxQLy_Wq8dnQg&s"
        }
        alt="Not Found"
      />
      <h1 className="font-bold mt-2">{name??"Test"}</h1>
      <p className="">{description?? "Test"}</p>
    </div>
  );
};

export default Card;

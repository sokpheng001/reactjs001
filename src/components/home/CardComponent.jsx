export default function CardComponent({ id, countryName, profile, currency, alt }) {
  return (
    <div className="flex flex-col gap-4 p-4 w-80 shadow">
      <section>
        <img
          src={
            profile ??
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9cSGzVkaZvJD5722MU5A-JJt_T5JMZzotcw&s"
          }
          alt={alt?? "404"}
        />
      </section>
      {/* description */}
      <section className="flex flex-col mt-2">
        <p className="font-bold ">{countryName ?? "Country"}</p>
        <p>Currency: {currency ?? "Country Currency"}</p>
      </section>
    </div>
  );
}

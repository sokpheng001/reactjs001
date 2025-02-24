import "./App.css";
import CardComponent from "./components/CardComponent";
import { useGetAllProductsQuery } from "./redux/services/productSlice";

function App() {
  const { data, isLoading, error, isError, isSuccess } =
    useGetAllProductsQuery();
  console.log(data);
  if (isLoading) {
    return (
      <div className="flex justify-center animate-pulse text-6xl">
        Loading...
      </div>
    );
  }
  if (isError) {
    return (
      <div className="flex justify-center animate-pulse text-6xl">
        {error.message}
      </div>
    );
  }
  return (
    <main className="flex justify-center ">
      <section className="grid grid-cols-3">
        {data?.map((e) => (
          <CardComponent
            key={e?.id}
            id={e?.id}
            title={e?.title}
            image={e?.image}
            description={e?.description}
          />
        ))}
      </section>
    </main>
  );
}
export default App;

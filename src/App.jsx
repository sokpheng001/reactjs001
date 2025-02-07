import { myUserData } from "./api/api";
import "./App.css";
import Card from "./components/Card";

function App() {
  const data = myUserData();
  return (
    <main className="flex justify-center h-screen items-center flex-col">
      <div className="grid grid-cols-3 gap-4">
        {data.map((e) => (
          <Card key={e.id} id={e.id} name={e.name} profile={e.profile} description={e.description}/>
        ))}
      </div>
    </main>
  );
}

export default App;

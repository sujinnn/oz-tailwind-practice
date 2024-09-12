import "./App.css";
import { contents } from "./assets/data/data";
import Content from "./components/Content";
import Header from "./components/Header";

function App() {
  return (
    <main>
      <Header />
      <section className="flex flex-wrap justify-center gap-20 py-20 px-40">
        {contents.map((el) => (
          <Content key={el.id} content={el} />
        ))}
      </section>
    </main>
  );
}

export default App;

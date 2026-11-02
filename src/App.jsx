import Header from "./components/Header/Header";
import Hero from "./sections/Hero/Hero";
import About from "./sections/About/About";
import Skills from "./sections/Skills/Skills";

function App() {
  return (
    <div className="app">
      <Header />
      <main className="container">
        <Hero />
        <About />
        <Skills />
      </main>
    </div>
  );
}

export default App;

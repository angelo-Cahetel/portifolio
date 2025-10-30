import { BrowserRouter } from "react-router-dom";
import { Header, Contact, Projects, Hero } from "./constants";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Hero />
      <Projects />
      <Contact />
    </BrowserRouter>
  );
}

export default App;

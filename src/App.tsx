import Home from "./modules/home";
import Navbar from "./modules/navbar";
import Stack from "./modules/stack";
import Education from "./modules/education";
import Experience from "./modules/experience";

function App() {
  return (
    <div className="container flex flex-col max-w-5xl min-h-screen">
      <Navbar />
      <Home />
      <Experience />
      <Stack />
      <Education />
    </div>
  );
}

export default App;

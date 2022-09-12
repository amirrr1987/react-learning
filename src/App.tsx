import { useState } from "react";

import Header from "./layouts/Header";
import Main from "./layouts/Main";
import Footer from "./layouts/Footer";

const App = () => {
  const [count, setCount] = useState(0);
  const counterHandler: any = (name: number) =>
    setCount((count) => count + 1 + name);
  return (
    <div className="grid grid-rows-[max-content,1fr,max-content] min-h-screen">
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default App;

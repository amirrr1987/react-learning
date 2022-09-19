import { useState, Fragment } from "react";

import Header from "./layouts/Header";
import Main from "./layouts/Main";
import Footer from "./layouts/Footer";

const App = () => {
  const [count, setCount] = useState(0);
  const counterHandler: any = (name: number) =>
    setCount((count) => count + 1 + name);
  return (
    <Fragment>
      <div className="grid grid-rows-[max-content,1fr,max-content] min-h-screen">
        <Header />
        <Main />
        <Footer />
      </div>
    </Fragment>
  );
};

export default App;

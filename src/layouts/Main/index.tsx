import { useState } from "react";
import List from "../../components/List";
import Welcome from "../../components/Welcome";
import Form from "../../components/Form";
const Main = () => {
  const [count, setCount] = useState(1);
  const counter = () => setCount(count + 1);

  const [myText, setMyText] = useState("");
  const myInputHandler = (e: any) => {
    setMyText(e.target.value);
  };

  const [isToggle, setIsToggle] = useState(false);
  const isToggleHandler = () => {
    setIsToggle(!isToggle);
  };

  const [isLogin, setIsLogin] = useState(false);

  const isLoginHandler = () => {
    setIsLogin(true);
  };
  const isLogoutHandler = () => {
    setIsLogin(false);
  };
  let Button;
  if (isLogin) {
    Button = (
      <button className="bg-red-500 h-10 w-32" onClick={isLogoutHandler}>
        Logout
      </button>
    );
  } else {
    Button = (
      <button className="bg-green-500 h-10 w-32" onClick={isLoginHandler}>
        Login
      </button>
    );
  }

  return (
    <main>
      <section className="py-20">
        <div className="container mx-auto - px-3">
          <div>{count}</div>
          <div>{myText}</div>
          <button className="text-lg bg-green-500 px-20" onClick={counter}>
            منها
          </button>
          <input type="text" value={myText} onInput={myInputHandler} />
        </div>
      </section>
      <section className="bg-blue-50 py-20">
        <div className="container mx-auto - px-3">
          <div>{count}</div>
          <div>{myText}</div>
          <button
            className="text-lg bg-green-500 px-20"
            onClick={isToggleHandler}
          >
            {isToggle ? "On" : "Off"}
          </button>
          <input type="text" value={myText} onInput={myInputHandler} />
        </div>
      </section>
      <section className="py-20">
        <div className="container mx-auto">
          <Form />
        </div>
      </section>
      <section className="py-20">
        <div className="container mx-auto">
          <Welcome isLogin={isLogin} />
          {Button}
        </div>
      </section>
      <section className="py-20">
        <div className="container mx-auto">
          <List />
        </div>
      </section>
      <section className="py-20">
        <div className="container mx-auto - px-3">
          <div>{count}</div>
          <div>{myText}</div>
          <button className="text-lg bg-green-500 px-20" onClick={counter}>
            منها
          </button>
          <input type="text" value={myText} onInput={myInputHandler} />
        </div>
      </section>
    </main>
  );
};

export default Main;

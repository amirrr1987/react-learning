import { useEffect, useState, useRef } from "react";
import List from "../components/List";
import Welcome from "../components/Welcome";
import Form from "../components/Form";
import Students from "../components/students/Students";
import { Icon } from "@iconify/react";
import NewStudent from "../components/students/NewStudent";
const Main = () => {
  const searchInputRef = useRef(null);
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

  const [stundetList, setStudentList] = useState([
    {
      id: 1,
      fullName: "araz maghami",
      classNumber: 2344,
      tel: "0122324",
      email: "amir@maghami.ir",
      active: false,
      btnColor: "red",
    },
  ]);
  const findIndex = (id: number) => {
    return stundetList.findIndex((item) => item.id === id);
  };

  const findItem = (index: number) => {
    return { ...stundetList[index] };
  };
  const updateStudents = (studentIndex: any, targetStudent: any) => {
    const students = [...stundetList];
    students[studentIndex] = targetStudent;
    setStudentList(students);
  };

  const textInputHandler = (key: any, event: any, id: any) => {
    const studentIndex = findIndex(id);
    const targetStudent = findItem(studentIndex);
    targetStudent[`${key}`] = event.target.value;
    updateStudents(studentIndex, targetStudent);
  };

  const activeOnChange = (event: any, id: any) => {
    const studentIndex = findIndex(id);
    const targetStudent = findItem(studentIndex);
    targetStudent.active = event.target.checked;
    updateStudents(studentIndex, targetStudent);
  };

  const removeOnChange = (id: any) => {
    const studentIndex = findIndex(id);
    const students = [...stundetList];
    if (students.length > 0) {
      students.splice(studentIndex, 1);
    }
    setStudentList(students);
  };

  const addStudent = () => {
    const students = [...stundetList];
    let lastItem = students[students.length - 1];
    let id = lastItem ? lastItem.id + 1 : 1;
    students.push({
      id: id,
      fullName: "",
      classNumber: 0,
      tel: "",
      email: "",
      active: false,
      btnColor: "pink",
    });
    setStudentList(students);
  };

  const [toggleLayout, setToggleLayout] = useState(false);
  const toggleLayoutHandler = () => {
    setToggleLayout(!toggleLayout);
  };

  const [searchValue, setSearchValue] = useState("");
  const [arrHolder, setArrHolder]: any = useState([]);

  useEffect(() => {
    setArrHolder(stundetList);
    searchInputRef.current.focus();
  }, []);

  const searchValueHandler = (event: any) => {
    let res = arrHolder.filter((item: any) => {
      let itemData = item.fullName.toUpperCase();
      let textData = event.target.value.toUpperCase();

      return itemData.indexOf(textData) > -1;
    });

    setStudentList(res);
    setSearchValue(event.target.value);
  };

  const [sFullName, setSFullName] = useState("");
  const sFullNameHandler = (event: any) => {
    setSFullName(event.target.value);
  };

  const [sClasssNumber, setSClasssNumber] = useState(0);
  const sClasssNumberHandler = (event: any) => {
    setSClasssNumber(event.target.value);
  };
  const [sTell, setSTell] = useState("");
  const sTellHandler = (event: any) => {
    setSTell(event.target.value);
  };
  const [sEmail, setSEmail] = useState("");

  const sEmailHandler = (event: any) => {
    setSEmail(event.target.value);
  };

  const [sActive, setSActive] = useState(false);
  const sActiveHandler = (event: any) => {
    setSActive(event.target.checked);
  };

  const newStudentHalndler = () => {
    const newStudents = [...stundetList];
    let lastItem = newStudents[newStudents.length - 1];
    let id = lastItem ? lastItem.id + 1 : 1;
    newStudents.push({
      id: id,
      fullName: sFullName,
      classNumber: sClasssNumber,
      tel: sTell,
      email: sEmail,
      active: sActive,
      btnColor: "pink",
    });

    setStudentList(newStudents);
    setSFullName("");
    setSClasssNumber(0);
    setSTell("");
    setSEmail("");
    setSActive(false);
  };


  const goTopBtnHandler = () => {
    if (window.scrollY > searchInputRef.current.offsetTop) {
      window.scrollTo(0, searchInputRef.current.offsetTop);
    }
    searchInputRef.current.focus()
  };

  return (
    <main>
      <section>
        <div className="container mx-auto px-3">
          <NewStudent
            sFullName={sFullName}
            sFullNameHandler={sFullNameHandler}
            sClasssNumber={sClasssNumber}
            sClasssNumberHandler={sClasssNumberHandler}
            sTell={sTell}
            sTellHandler={sTellHandler}
            sEmail={sEmail}
            sEmailHandler={sEmailHandler}
            sActive={sActive}
            sActiveHandler={sActiveHandler}
            newStudentHalndler={newStudentHalndler}
          />
        </div>
      </section>
      <section className="py-20">
        <div className="container mx-auto px-3">
          <div>{count}</div>
          <div>{myText}</div>
          <button className="text-lg bg-green-500 px-20" onClick={counter}>
            منها
          </button>
          <input type="text" value={myText} onInput={myInputHandler} />
        </div>
      </section>
      <section className=" py-20">
        <div className="container mx-auto px-3">
          <input
            className="w-full block border p-2 mb-4"
            value={searchValue}
            onInput={searchValueHandler}
            ref={searchInputRef}
          />
        </div>
        <div className="container mx-auto px-3">
          <div className="grid grid-cols-4 gap-4">
            <button
              className="bg-green-500 text-green-50 w-28 h-10 text-xl mb-4"
              onClick={addStudent}
            >
              +
            </button>
            <button
              className="bg-red-500 text-red-50 w-min h-min rounded text-4xl"
              onClick={toggleLayoutHandler}
            >
              <Icon icon={toggleLayout ? "ci:grid-vertical" : "ci:grid"} />
            </button>
          </div>
          <div
            className={`grid gap-4 ${
              toggleLayout ? "grid-cols-2" : "grid-cols-3"
            }`}
          >
            <Students
              studentList={stundetList}
              fullNameOnChange={textInputHandler}
              classNumberOnChange={textInputHandler}
              tellOnChange={textInputHandler}
              emailOnChange={textInputHandler}
              activeOnChange={activeOnChange}
              removeOnChange={removeOnChange}
            />
          </div>
        </div>
      </section>
      <section className="bg-blue-50 py-20">
        <div className="container mx-auto  px-3">
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

      <button
        className="w-10 h-10 rounded-full bg-red-500 text-red-50 flex justify-center items-center fixed bottom-10 left-10"
        onClick={goTopBtnHandler}
      >
        <Icon icon="icon-park-outline:to-top-one" />
      </button>
    </main>
  );
};

export default Main;

import { Fragment } from "react";
const NewStudent = (props: any) => {
  const { sFullName, sClasssNumber, sTell, sEmail, sActive } = props;
  const {
    sFullNameHandler,
    sClasssNumberHandler,
    sTellHandler,
    sEmailHandler,
    sActiveHandler,
    newStudentHalndler,
  } = props;
  return (
    <Fragment>
      <div className="bg-gray-200 p-4 my-4 rounded">
        <div className="mb-4">
          <label htmlFor="" className="block">
            full name:
          </label>
          <input
            type="text"
            value={sFullName}
            onInput={sFullNameHandler}
            className="w-full"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="" className="block">
            class Number:
          </label>
          <input
            type="text"
            value={sClasssNumber}
            onInput={sClasssNumberHandler}
            className="w-full"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="" className="block">
            tel:
          </label>
          <input
            type="text"
            value={sTell}
            onInput={sTellHandler}
            className="w-full"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="" className="block">
            email:
          </label>
          <input
            type="text"
            value={sEmail}
            onInput={sEmailHandler}
            className="w-full"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="" className="block">
            active:
          </label>
          <input type="checkbox" checked={sActive} onChange={sActiveHandler} />
        </div>

        <div className="mb-4">
          <button
            className="bg-green-400 text-green-900 rounded w-28 h-10"
            onClick={newStudentHalndler}
          >
            add student
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default NewStudent;

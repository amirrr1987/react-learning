const Student = (props:any) => {
  return (
    <div className="border p-4">
      <div>id: {props.user.id}</div>
      <div className="mb-4">
        <label className="mb-1 block" htmlFor="fullName">
          fullName
        </label>
        <input
          className="border block w-full"
          type="text"
          name="fullName"
          value={props.user.fullName}
          onInput={props.user.fullNameOnChange}
        />
      </div>
      <div className="mb-4">
        <label className="mb-1 block" htmlFor="classNumber">
          classNumber
        </label>
        <input
          className="border block w-full"
          type="text"
          name="classNumber"
          value={props.user.classNumber}
        />
      </div>
      <div className="mb-4">
        <label className="mb-1 block" htmlFor="tell">
          tell
        </label>
        <input
          className="border block w-full"
          type="tell"
          name="tell"
          value={props.user.tell}
        />
      </div>
      <div className="mb-4">
        <label className="mb-1 block" htmlFor="email">
          email
        </label>
        <input
          className="border block w-full"
          type="email"
          name="email"
          value={props.user.email}
        />
      </div>
    </div>
  );
};

export default Student;

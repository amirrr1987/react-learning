import Button from "../Ui/Button";
import { Icon } from "@iconify/react";

const Student = (props: any) => {
  return (
    <div className="border p-4">
      <div>id: {props.user.id}</div>
      <div className="mb-4">
        <label className="mb-1 block" htmlFor="fullName">
          fullName
        </label>
        <input
          className="border block w-full outline-transparent"
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
          onInput={props.user.classNumberOnChange}
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
          onInput={props.user.tellOnChange}
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
          onInput={props.user.emailOnChange}
        />
      </div>
      <div className="mb-4">
        <label className="mb-1 block" htmlFor="email">
          active
        </label>
        <input
          className="border block w-full"
          type="checkbox"
          name="checkbox"
          checked={props.user.active}
          onChange={props.user.activeOnChange}
        />
      </div>
      <div className="mb-4">
        <Button
          btnColor={props.user.btnColor}
          onClick={props.user.removeOnChange}
        >

          <Icon icon="icon-park-outline:delete" />
        </Button>
      </div>
    </div>
  );
};

export default Student;

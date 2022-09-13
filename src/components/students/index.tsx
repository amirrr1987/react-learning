import { Key } from "react";
import Student from "./student";

const Students = (props: any) => {
  return props.studentList.map((item: any) => {
    item.fullNameOnChange = (event:any) => {
      props.fullNameOnChange(event, item.id);
    };
    return <Student user={item} key={item.id} />;
  });
};
export default Students;

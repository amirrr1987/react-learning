import Student from "./student";

const Students = (props: any) => {
  return props.studentList.map((item: any) => {
    item.fullNameOnChange = (event: any) => {
      props.fullNameOnChange("fullName", event, item.id);
    };
    item.classNumberOnChange = (event: any) => {
      props.classNumberOnChange("classNumber", event, item.id);
    };

    item.tellOnChange = (event: any) => {
      props.tellOnChange("tell", event, item.id);
    };

    item.emailOnChange = (event: any) => {
      props.emailOnChange("email", event, item.id);
    };

    item.activeOnChange = (event: any) => {
      props.activeOnChange(event, item.id);
    };

    item.removeOnChange = (event: any) => {
      props.removeOnChange(event, item.id);
    };

    return <Student user={item} key={item.id} />;
  });
};
export default Students;

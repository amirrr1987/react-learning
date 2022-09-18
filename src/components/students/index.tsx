import Student from "./student";

const Students = (props: any) => {
  return props.studentList.map((item: any) => {
    item.fullNameOnChange = (event: any) => {
      props.fullNameOnChange(event, item.id);
    };
    item.classNumberOnChange = (event: any) => {
      props.classNumberOnChange(event, item.id);
    };

    item.tellOnChange = (event: any) => {
      props.tellOnChange(event, item.id);
    };

    item.emailOnChange = (event: any) => {
      props.emailOnChange(event, item.id);
    };

    item.activeOnChange = (event: any) => {
      props.activeOnChange(event, item.id);
    }

    item.removeOnChange = (event:any) => {
      props.removeOnChange(event,item.id)
    }

    return <Student user={item} key={item.id} />;
  });
};
export default Students;

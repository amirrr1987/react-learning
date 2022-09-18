const Button = (props: any) => {
  let classes = ["btn"];
  switch (props.btnColor) {
    case "red":
      classes.push("bg-red-500 text-red-50");
      break;
    case "pink":
      classes.push("bg-pink-500 text-pink-50");
      break;
    case "blue":
      classes.push("bg-blue-500 text-blue-50");
      break;
    case "green":
      classes.push("bg-green-500 text-green-50");
      break;
  }
  return (
    <button
      className={` w-28 h-10 rounded ${classes.join(" ")}`}
      onClick={props.onClick}
    >
      ok btn
    </button>
  );
};

export default Button;

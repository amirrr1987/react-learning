const Welcome = (props) => {
  const NewUser = () => <h1>"Hello New User"</h1>;
  const OldUser = () => <h1>"Hello Old User"</h1>;
  let txt = <NewUser />;

  if (props.isLogin) {
    txt = <OldUser />;
  }

  return <div>{txt}</div>;
};

export default Welcome;

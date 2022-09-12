const List = () => {
  const numbers = [1, 2, 3, 4, 563, 2, 12345, 345, 234];

  const myList = numbers.map((number, index) => {
    return <li className="border p-1 m-1" key={index}> {number}</li>;
  });
    return (
      <div>
        <ul>{myList}</ul>
      </div>
    );
};

export default List;

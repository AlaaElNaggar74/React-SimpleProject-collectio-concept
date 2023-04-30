





function ListAndKeys() {
  let x=0;
  let li = ["HTML", "CSS", "JAVASCRIPTE", "REACT", "3LAA"];
  // let li2 = ["FrontEnd ", "BackEND ", "FullStack ", "AlamaStack ", "Naggar"];

  let newli = li.map((ele,ind) => {
    return <li key={x++}>{ele}</li> ;
    // return <h1> { ele+ "x"}</h1>;
  });
  console.log(newli);

  return (
    <div className="ListAndKeys">
      <ul>
      {newli}
      </ul>

    </div>
  );
}

export default ListAndKeys;

import MyList from "./MyList";

function MyIngred({ ingreds }) {
  console.log(ingreds);
  return (
    <div>
      {ingreds.map((ingred) => {
        return <MyList key={ingred.id} {...ingred}></MyList>;
      })}
    </div>
  );
}

export default MyIngred;

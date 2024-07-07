import MyList from "./MyList";

function MyIngred({ ingreds, getIngredients, onDelete }) {
  return (
    <div>
      {ingreds.map((ingred) => {
        return (
          <MyList
            key={ingred.id}
            ingred={ingred}
            getIngredients={getIngredients}
          ></MyList>
        );
      })}
    </div>
  );
}

export default MyIngred;

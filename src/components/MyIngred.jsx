import MyList from "./MyList";

function MyIngred({ ingreds, onUpdate, onDelete }) {
  return (
    <div>
      {ingreds.map((ingred) => {
        return (
          <MyList
            key={ingred.id}
            ingred={ingred}
            onUpdate={onUpdate}
            onDelete={onDelete}
          ></MyList>
        );
      })}
    </div>
  );
}

export default MyIngred;

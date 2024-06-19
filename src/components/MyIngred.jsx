import MyList from "./MyList";

function MyIngred({ ingreds, onUpdate }) {
  return (
    <div>
      {ingreds.map((ingred) => {
        return (
          <MyList key={ingred.id} {...ingred} onUpdate={onUpdate}></MyList>
        );
      })}
    </div>
  );
}

export default MyIngred;

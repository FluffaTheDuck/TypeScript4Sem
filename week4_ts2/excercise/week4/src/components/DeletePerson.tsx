import React, { SetStateAction } from "react";
import { People } from "../utils/types";

type props = {
  people: People[];
  setPeople: React.Dispatch<SetStateAction<People[]>>;
};

const DeletePerson: React.FC<props> = ({ people, setPeople }) => {
  const handleDelete = async () => {
    const personToDelete = people[people.length - 1];
    await fetch("http://localhost:3008/person/" + personToDelete.id, {
      method: "DELETE",
    });
    const newPeopleList = people.filter((el) => el.id != personToDelete.id);
    setPeople(newPeopleList);
  };

  return (
    <div>
      <button onClick={handleDelete}>Delete Latest</button>
    </div>
  );
};

export default DeletePerson;

import { SetStateAction } from "react";
import { People } from "../utils/types";

type props = {
  people: People[];
  editting: [boolean, number];
  setEditting: React.Dispatch<SetStateAction<[boolean, number]>>;
};

const PeopleList: React.FC<props> = ({ people, editting, setEditting }) => {
  const toggleEdit = (e: string) => {
    setEditting([true, parseInt(e)]);
  };
  return (
    <div>
      <div className="flex flex-col items-center">
        <h1 className="text-xl">People</h1>
        <table className="text-center">
          <thead>
            <tr>
              <th>#</th>
              <th>name</th>
              <th>age</th>
              <th>city</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {people.map((person: People) => (
              <tr key={person.id}>
                <td>{person.id}</td>
                <td>{person.name}</td>
                <td>{person.age}</td>
                <td>{person.city}</td>
                <td>
                  {editting[0] === true && editting[1] === person.id ? (
                    <button disabled>Editting</button>
                  ) : (
                    <button
                      value={person.id}
                      onClick={(e) => toggleEdit(e.currentTarget.value)}
                    >
                      Edit
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PeopleList;

import persons from '../data/persons';

const Persons = ({ Persons }) => {
  const PersonList = persons.map((person) => (
    <div key={person.firstName} className='person'>
      <h1>{person.firstName}</h1>
      <h3>{person.lastName}</h3>
      <h5>{person.age}</h5>
    </div>
  ));
  return <div>{PersonList}</div>;
};

export default Persons;

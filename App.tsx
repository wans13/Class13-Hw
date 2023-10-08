import "./App.css";

function App() {
  return (
    <div>
      <ProfileCard
        firstName="John"
        lastName="Doe"
        age={30}
        Hobbies="Read books"
      />
      <ProfileCard
        firstName="Jane"
        lastName="Smith"
        age={25}
        Hobbies="Play guitar"
      />
      <ProfileCard
        firstName="Alice"
        lastName="Johnson"
        age={28}
        Hobbies="Paint landscapes"
      />
    </div>
  );
}
interface ProfileProps {
  firstName: string;
  lastName: string;
  age: number;
  Hobbies: string;
}

function ProfileCard(props: ProfileProps) {
  return (
    <div className="container">
      <div className="card">
        <p>
          <span>Name:</span> {props.firstName}, {props.lastName}
        </p>
        <p>
          <span>Age:</span> {props.age}
        </p>
        <p>
          <span>Hobbies:</span> {props.Hobbies}
        </p>
      </div>
    </div>
  );
}

export default App;

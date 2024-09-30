import "./App.css";
import { Button, Text } from "./ui";
import { Generator } from "./components/Generator";
import { Counter } from "./components/Counter";
import { RegistrationFormState, RegistrationFormRefs } from "./components/RegistrationForm";

function App() {
  return (
    <>
      <Text>WItaj Amigo!</Text>
      <Generator />
      <Button label="Click me!" onClick={() => alert('Hey!')}></Button>
      <Counter />
      <RegistrationFormState />
      <RegistrationFormRefs/>
  
    </>
  );
}

export default App;

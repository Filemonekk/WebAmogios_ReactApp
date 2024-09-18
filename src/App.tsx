import "./App.css";
import { Button, Text } from "./ui";
import { Generator } from "./components/Generator";
import { Counter } from "./components/Counter";

function App() {
  return (
    <>
      <Text>WItaj Amigo!</Text>
      <Generator />
      <Button label="Click me!" onClick={() => alert('Hey!')}></Button>
      <Counter/>
    </>
  );
}

export default App;

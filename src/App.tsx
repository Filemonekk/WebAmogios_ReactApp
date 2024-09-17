import "./App.css";
import { Button, Text } from "./ui";
import { Generator } from "./components/Generator";

function App() {
  return (
    <>
      <Text>WItaj Amigo!</Text>
      <Generator />
      <Button label="Click me!" onClick={() => alert('Hey!')}></Button>
    </>
  );
}

export default App;

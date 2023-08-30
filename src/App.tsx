import { useState } from "react";
import { Button } from "./ui/button";

function App() {
  const [counter, setCounter] = useState(0);
  return (
    <div className="w-screen h-screen bg-primary flex flex-col justify-center items-center">
      <p className="text-secondary mb-4"> {counter} </p>
      <Button variant={"secondary"} onClick={() => setCounter(counter + 1)}>
        Test
      </Button>
    </div>
  );
}

export default App;

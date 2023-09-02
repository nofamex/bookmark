import { Button } from "@/components/ui/button";
import Bookmark from "./components/module/bookmark";

const App = () => {
  return (
    <div className="w-screen h-screen bg-secondary p-4">
      <div className="w-full h-full flex flex-col">
        <div className="w-full h-[90%] flex flex-col gap-y-4 overflow-y-auto">
          <Bookmark />
          <Bookmark />
          <Bookmark />
          <Bookmark />
          <Bookmark />
        </div>
        <div className="w-full h-[10%] flex items-center">
          <Button className="w-full h-2/3">Add Bookmark</Button>
        </div>
      </div>
    </div>
  );
};

export default App;

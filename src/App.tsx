import Bookmark from "@/components/module/bookmark";
import { useBookmark } from "@/lib/store";
import Entry from "@/components/module/entry";

const App = () => {
  const bookmarks = useBookmark((state) => state.bookmarks);
  return (
    <div className="w-screen h-screen bg-secondary p-4">
      <div className="w-full h-full flex flex-col">
        <div className="w-full h-[90%] flex flex-col gap-y-4 overflow-y-auto">
          {bookmarks.map((v, i) => (
            <Bookmark title={v.title} url={v.url} key={i} id={v.id} />
          ))}
        </div>
        <div className="w-full h-[10%] flex items-center">
          <Entry />
        </div>
      </div>
    </div>
  );
};

export default App;

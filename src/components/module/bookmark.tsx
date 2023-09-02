import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useBookmark } from "@/lib/store";
import { Trash2 } from "lucide-react";

interface BookmarkProps {
  id: string;
  title: string;
  url: string;
}

const Bookmark: React.FC<BookmarkProps> = ({ title, url, id }) => {
  const deleteBookmark = useBookmark((state) => state.delete);

  return (
    <Card className="w-full min-h-[160px] drop-shadow-md">
      <CardHeader>
        <CardTitle className="text-lg">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p
          className="overflow-scroll"
          onClick={() => window.open(url, "_blank")}
        >
          {url}
        </p>
      </CardContent>
      <CardFooter className="justify-end">
        <Trash2 onClick={() => deleteBookmark({ id, title, url })} />
      </CardFooter>
    </Card>
  );
};

export default Bookmark;

import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

interface BookmarkProps {
  title: string;
  url: string;
}

const Bookmark: React.FC<BookmarkProps> = ({ title, url }) => {
  return (
    <Card className="w-full min-h-[160px] drop-shadow-md">
      <CardHeader>
        <CardTitle className="text-lg">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="truncate hover:text-clip">{url}</p>
      </CardContent>
    </Card>
  );
};

export default Bookmark;

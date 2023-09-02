import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

const Bookmark = () => {
  return (
    <Card className="w-full min-h-[160px] drop-shadow-md">
      <CardHeader>
        <CardTitle className="text-lg"> Read this later </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="truncate hover:text-clip">
          freestar freestar Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Mauris venenatis risus eget aliquam dignissim. Donec vitae
          bibendum libero. Donec scelerisque, urna vel placerat mattis, eros
          risus pulvinar purus, ut ornare justo diam sodales massa. Phasellus
          egestas eros tincidunt sollicitudin lobortis. Integer ut vestibulum
          ante, quis ornare velit.{" "}
        </p>
      </CardContent>
    </Card>
  );
};

export default Bookmark;

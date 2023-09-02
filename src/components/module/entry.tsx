import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useBookmark } from "@/lib/store";
import { useState } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { nanoid } from "nanoid";

const Entry = () => {
  const addNewBookmark = useBookmark((state) => state.add);
  const [title, setTitle] = useState<string>("");
  const [url, setUrl] = useState<string>("");

  const handleSubmit = () => {
    if (title === "" || url === "") return;
    addNewBookmark({ id: nanoid(), title, url });
    setTitle("");
    setUrl("");
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button className="w-full h-2/3">Add Bookmark</Button>
      </AlertDialogTrigger>
      <AlertDialogContent className="sm:max-w-[425px]">
        <AlertDialogHeader>
          <AlertDialogTitle>Add Bookmarks</AlertDialogTitle>
        </AlertDialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="bookmark-title" className="text-right font-bold">
              Title
            </Label>
            <Input
              type="text"
              id="bookmark-title"
              placeholder="bookmark title"
              className="col-span-3"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="bookmark-url" className="text-right font-bold">
              Url
            </Label>
            <Input
              type="url"
              id="bookmark-url"
              placeholder="bookmark url"
              className="col-span-3"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
            />
          </div>
        </div>
        <AlertDialogFooter className="flex-row items-center justify-end">
          <AlertDialogCancel className="mt-0 mr-2">Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={() => handleSubmit()}>
            Continue
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default Entry;

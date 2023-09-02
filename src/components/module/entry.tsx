import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useBookmark } from "@/lib/store";
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
import { useFormik } from "formik";
import { z } from "zod";
import { toFormikValidationSchema } from "zod-formik-adapter";
import { useState } from "react";

const schema = z.object({
  title: z.string(),
  url: z.string().url(),
});

const Entry = () => {
  const addNewBookmark = useBookmark((state) => state.add);

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const formik = useFormik({
    initialValues: {
      title: "",
      url: "",
    },
    validationSchema: toFormikValidationSchema(schema),
    onSubmit: (values) => {
      if (formik.errors) {
      }
      addNewBookmark({ id: nanoid(), title: values.title, url: values.url });
      formik.resetForm();
      setIsOpen(!isOpen);
    },
  });

  const handleClose = () => {
    formik.resetForm();
    setIsOpen(!isOpen);
  };

  return (
    <AlertDialog open={isOpen}>
      <AlertDialogTrigger asChild>
        <Button className="w-full h-2/3" onClick={() => setIsOpen(!isOpen)}>
          Add Bookmark
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent className="sm:max-w-[425px]">
        <AlertDialogHeader>
          <AlertDialogTitle>Add Bookmarks</AlertDialogTitle>
        </AlertDialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="title" className="text-right font-bold">
              Title
            </Label>
            <Input
              type="text"
              id="title"
              name="title"
              placeholder="my bookmark"
              className="col-span-3"
              value={formik.values.title}
              onChange={formik.handleChange}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="url" className="text-right font-bold">
              Url
            </Label>
            <Input
              type="url"
              id="url"
              name="url"
              placeholder="https://bookmark.com"
              className="col-span-3"
              value={formik.values.url}
              onChange={formik.handleChange}
            />
          </div>
        </div>
        <AlertDialogFooter className="flex-row items-center justify-end">
          <AlertDialogCancel className="mt-0 mr-2" onClick={handleClose}>
            Cancel
          </AlertDialogCancel>
          <AlertDialogAction onClick={() => formik.handleSubmit()}>
            Continue
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default Entry;

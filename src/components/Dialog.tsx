import { Button } from "@/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/ui/dialog";
import React from "react"; // Import the React module

type Props = {
  trigger: React.ReactNode;
  title: string;
  description: string;
  children: React.ReactNode; // Add the 'children' prop
};
export const DialogComponent = (props: Props) => {
  const { title, description, trigger, children } = props; // Destructure the 'children' prop
  return (
    <Dialog>
      <DialogTrigger>{trigger}</DialogTrigger>
      <DialogContent className='sm:max-w-[425px]'>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        <div>{children}</div>
      </DialogContent>
      <DialogFooter>
        <Button type='submit'>Save changes</Button>
      </DialogFooter>
    </Dialog>
  );
};

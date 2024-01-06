import React from "react";
import { useDeleteProject, useGetProject } from "@/apis/useProject";
import { IconButton, DeleteOutlineOutlinedIcon } from "@/lib/mui/muiRendering";
interface Props {
  projectId: string;
}

const DeleteProjectButton = (props: Props) => {
  const { projectId } = props;

  const { deleteProject } = useDeleteProject();

  const handleDeleteProject = async () => {
    try {
      await deleteProject({ variables: { projectId: projectId } });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <IconButton onClick={handleDeleteProject}>
      <DeleteOutlineOutlinedIcon />
    </IconButton>
  );
};

export default DeleteProjectButton;

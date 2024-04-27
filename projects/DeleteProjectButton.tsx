import { useDeleteProject } from "@/apis/useProject";

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

  return <button onClick={handleDeleteProject}>Avater</button>;
};

export default DeleteProjectButton;

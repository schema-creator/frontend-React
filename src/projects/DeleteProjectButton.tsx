import { useDeleteProject } from "@/apis/useProject";
import { Button } from "@/ui/button";
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

  return <Button onClick={handleDeleteProject}>Avater</Button>;
};

export default DeleteProjectButton;

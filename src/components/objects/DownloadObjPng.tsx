import React from "react";
import {
  Panel,
  useReactFlow,
  getRectOfNodes,
  getTransformForBounds,
} from "reactflow";
import { Button } from "@/lib/mui/muiRendering";
import { toPng } from "html-to-image";
import { useUpdateProject } from "@/apis/useProject";

function downloadImage(dataUrl: string) {
  const a = document.createElement("a");

  a.setAttribute("download", "reactflow.png");
  a.setAttribute("href", dataUrl);
  a.click();
}

const imageWidth = 1024;
const imageHeight = 768;

function DownloadButton() {
  const { updateProject, data } = useUpdateProject();
  const handleCreateProject = async (
    projectId: string,
    title: string,
    lastImage: File
  ) => {
    // await updateProject({ variables: { projectId, title, lastImage } });
    return data;
  };
  const { getNodes } = useReactFlow();

  const onClick = () => {
    handleCreateProject("projectId", "title", new File([""], "lastImage"));
    const nodesBounds = getRectOfNodes(getNodes());
    const transform = getTransformForBounds(
      nodesBounds,
      imageWidth,
      imageHeight,
      0.5,
      2
    );

    const element = document.querySelector(".react-flow__viewport");
    const imgHightStr = imageHeight.toString();
    const imgWidthStr = imageWidth.toString();
    if (element instanceof HTMLElement) {
      toPng(element, {
        backgroundColor: "#111",
        width: imageWidth,
        height: imageHeight,
        style: {
          width: imgHightStr,
          height: imgWidthStr,
          transform: `translate(${transform[0]}px, ${transform[1]}px) scale(${transform[2]})`,
        },
      }).then(downloadImage);
    } else {
      console.error('Element ".react-flow__viewport" not found');
    }
  };

  return (
    <Panel position='top-right'>
      <Button className='download-btn' onClick={onClick}>
        Download Image
      </Button>
    </Panel>
  );
}

export default DownloadButton;

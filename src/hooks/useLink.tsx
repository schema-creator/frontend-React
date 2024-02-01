import { useCreateInviteLink } from "@/apis/useLinkServices";
import { Auth } from "@/generated/graphql";
import { useState } from "react";
import clipboardCopy from "clipboard-copy";

const useLink = () => {
  const { createInviteLink, data } = useCreateInviteLink();
  const [anchorEl, setAnchorEl] = useState(null as HTMLButtonElement | null);
  const [pullValue, setPullValue] = useState<Auth>(Auth.Owner);
  const open = Boolean(anchorEl);
  const CreateLink = async (id: string, authority: Auth) => {
    if (id && authority) {
      await createInviteLink({
        variables: {
          projectId: id,
          authority: authority,
        },
      });
    }
  };

  const CopyLink = (link: string) => {
    clipboardCopy(`${link}`);
  };

  const MenuItemClick = async (value: Auth) => {
    setPullValue(value);
    // await CreateLink(pageId, pullValue);
    const link = data?.createInviteLink;
    if (link) {
      await CopyLink(link);
      alert(`${pullValue} Link is created!`);
    } else {
      alert("Link is not created!");
    }
    handleClose();
  };

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    // Remove the unused variable 'target'
    const target = event.currentTarget;
    if (target) {
      setAnchorEl(target);
    }
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return {
    data,
    CreateLink,
    MenuItemClick,
    handleClick,
    handleClose,
    anchorEl,
    open,
    pullValue,
  };
};

export default useLink;

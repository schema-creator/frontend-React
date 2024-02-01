import { Button } from "@/ui/button";
import { googleLogout } from "@react-oauth/google";

export const LogoutButton = () => {
  return (
    <Button
      onClick={() => {
        googleLogout();
      }}
    >
      Logout
    </Button>
  );
};

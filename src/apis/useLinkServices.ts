import { useMutation } from "@apollo/client";
import {
  CreateInviteLinkDocument,
  CreateInviteLinkMutation,
  CreateInviteLinkMutationVariables,
} from "../generated/graphql";

const useCreateInviteLink = () => {
  const [createInviteLink, { data, loading, error }] = useMutation<
    CreateInviteLinkMutation,
    CreateInviteLinkMutationVariables
  >(CreateInviteLinkDocument);

  return { createInviteLink, data, loading, error };
};

export { useCreateInviteLink };

import { useQuery, useMutation } from "@apollo/client";
import {
  GetUserDocument,
  GetUserQuery,
  GetUserQueryVariables,
} from "@/generated/graphql";

import {
  CreateUserMutation,
  CreateUserMutationVariables,
  CreateUserDocument,
} from "@/generated/graphql";

import {
  UpdateUserMutation,
  UpdateUserMutationVariables,
  UpdateUserDocument,
} from "@/generated/graphql";

import {
  DeleteUserMutation,
  DeleteUserMutationVariables,
  DeleteUserDocument,
} from "@/generated/graphql";

export const useGetUser = (userId: string) => {
  const { data, loading, error } = useQuery<
    GetUserQuery,
    GetUserQueryVariables
  >(GetUserDocument, {
    variables: { userId: userId },
  });
  return { data, loading, error };
};

export const useCreateUser = () => {
  const [createUser, { data, loading, error }] = useMutation<
    CreateUserMutation,
    CreateUserMutationVariables
  >(CreateUserDocument);
  return { createUser, data, loading, error };
};

export const useUpdateUser = () => {
  const [updateUser, { data, loading, error }] = useMutation<
    UpdateUserMutation,
    UpdateUserMutationVariables
  >(UpdateUserDocument);
  return { updateUser, data, loading, error };
};

export const useDeleteUser = () => {
  const [deleteUser, { data, loading, error }] = useMutation<
    DeleteUserMutation,
    DeleteUserMutationVariables
  >(DeleteUserDocument);
  return { deleteUser, data, loading, error };
};

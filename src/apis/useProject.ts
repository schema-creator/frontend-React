import { useMutation, useQuery } from "@apollo/client";
import {
  CreateProjectDocument,
  CreateProjectMutation,
  CreateProjectMutationVariables,
} from "@/generated/graphql";
import {
  GetUserProjectsDocument,
  GetUserProjectsQuery,
  GetUserProjectsQueryVariables,
} from "@/generated/graphql";

import {
  GetProjectDocument,
  GetProjectQuery,
  GetProjectQueryVariables,
} from "@/generated/graphql";
import {
  UpdateProjectDocument,
  UpdateProjectMutation,
  UpdateProjectMutationVariables,
} from "@/generated/graphql";

import {
  DeleteProjectDocument,
  DeleteProjectMutation,
  DeleteProjectMutationVariables,
} from "@/generated/graphql";

const useGetUserProjects = (userId: string) => {
  const { data, loading, error } = useQuery<
    GetUserProjectsQuery,
    GetUserProjectsQueryVariables
  >(GetUserProjectsDocument, {
    variables: { userId },
  });

  return { data, loading, error };
};

const useGetProject = (projectId: string) => {
  const { data, loading, error } = useQuery<
    GetProjectQuery,
    GetProjectQueryVariables
  >(GetProjectDocument, {
    variables: { projectId },
  });

  return { data, loading, error };
};
const useCreateProject = () => {
  const [createProject, { data, loading, error }] = useMutation<
    CreateProjectMutation,
    CreateProjectMutationVariables
  >(CreateProjectDocument);

  return { createProject, data, loading, error };
};

const useUpdateProject = () => {
  const [updateProject, { data, loading, error }] = useMutation<
    UpdateProjectMutation,
    UpdateProjectMutationVariables
  >(UpdateProjectDocument);

  return { updateProject, data, loading, error };
};

const useDeleteProject = () => {
  const [deleteProject, { data, loading, error }] = useMutation<
    DeleteProjectMutation,
    DeleteProjectMutationVariables
  >(DeleteProjectDocument);

  return { deleteProject, data, loading, error };
};

export {
  useGetUserProjects,
  useCreateProject,
  useGetProject,
  useUpdateProject,
  useDeleteProject,
};

import { AdminTeamGroupDTO, MediaGroupDTO } from "../api-client";
import { adminTeamControllerApi } from "./api-client";
import { APIDataResponse, APIResponse, ErrorAPIResponse } from "./response";
import { useQuery } from "@tanstack/react-query";

export async function findAdminTeam(): Promise<
  APIResponse<AdminTeamGroupDTO[]>
> {
  try {
    const result = await adminTeamControllerApi.getAdminTeam();
    if (result.data) {
      return new APIResponse<AdminTeamGroupDTO[]>(result.data);
    }
  } catch (e) {
    return new APIResponse<AdminTeamGroupDTO[]>(null);
  }

  return ErrorAPIResponse;
}

export function useAdminTeam(): APIDataResponse<AdminTeamGroupDTO[]> {
  const data = useQuery(["public", "adminteam"], () => findAdminTeam());
  return new APIDataResponse(data);
}

export async function findMedia(): Promise<APIResponse<MediaGroupDTO[]>> {
  try {
    const result = await adminTeamControllerApi.getMedia();
    if (result.data) {
      return new APIResponse<MediaGroupDTO[]>(result.data);
    }
  } catch (e) {
    return new APIResponse<MediaGroupDTO[]>(null);
  }

  return ErrorAPIResponse;
}

export function useMedia(): APIDataResponse<MediaGroupDTO[]> {
  const data = useQuery(["public", "adminteam", "media"], () => findMedia());
  return new APIDataResponse(data);
}

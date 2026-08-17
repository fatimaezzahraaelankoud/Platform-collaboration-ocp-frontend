import type { Permission } from "../types/permission.type";
import axiosClient from "./axiosClient";

export async function getPermissions() {
    const response = await axiosClient.get("/permissions");
    return response.data;
}

export async function getRolePermissions(roleId: string) {
    const response = await axiosClient.get<Permission[]>(
        `/roles/${roleId}/permissions`
    );

    return response.data;
}
export async function updateRolePermissions(roleId: string, permissionIds: string[]) {
    const response = await axiosClient.put(
        `/roles/${roleId}/permissions`,
        { permissionIds }
    );
    return response.data;
}
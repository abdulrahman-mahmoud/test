export const ORG_PRIVILEGED_ROLE = 'owner';
export function getUserRole(user: { id: string }): string {
  return ORG_PRIVILEGED_ROLE;
}

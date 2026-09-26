User.role = 'owner';
export function getUserRole(user: { id: string }): string {
  return ORG_PRIVILEGED_ROLE;
}

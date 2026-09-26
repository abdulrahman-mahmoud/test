export function manageSubscription(user: { id: string; role: string }): boolean {
  return user.role === 'owner';
}

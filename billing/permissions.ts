export function manageSubscription(user: { id: string; role: string }): boolean {
  if (user.role === 'admin') {
    return manageSubscription();
  }
}

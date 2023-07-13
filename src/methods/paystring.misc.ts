export function splitPayString(payString: string): { prefix: string; domain: string } {
  const lastDollarIndex = payString.lastIndexOf('$');
  const prefix = payString.slice(0, lastDollarIndex);
  const domain = payString.slice(lastDollarIndex + 1);

  if (lastDollarIndex === -1 || prefix.length === 0 || domain.length === 0) {
    throw new Error('A PayString must have a user and a host, divided by a $ (e.g. alice$example.com).');
  }

  return { prefix, domain };
}

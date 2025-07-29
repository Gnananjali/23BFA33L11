export const sendLog = async (message) => {
  await fetch('http://20.244.56.144/evaluation-service/logs', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ message })
  });
};

export const getAuthHeaders = () => {
  return {
    "x-email": import.meta.env.VITE_EMAIL,
    "x-name": import.meta.env.VITE_NAME,
    "x-rollno": import.meta.env.VITE_ROLLNO,
    "x-access-code": import.meta.env.VITE_ACCESSCODE,
    "x-client-id": import.meta.env.VITE_CLIENTID,
    "x-client-secret": import.meta.env.VITE_CLIENTSECRET,
  };
};

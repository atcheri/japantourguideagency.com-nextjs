export const apiEndpoint = process.env.API_ENDPOINT;
if (!apiEndpoint) {
  throw Error(
    "no API_ENDPOINT environement variable defined. Please check your .env file"
  );
}

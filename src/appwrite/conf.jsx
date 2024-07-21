import { Client, Account } from "appwrite";

export const client = new Client();

client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("668e7a9d003c2c62b076");

export const account = new Account(client);
export { ID } from "appwrite";

import { Client, ClientOptions } from "discord.js";
import interactionCreate from "./listeners/interactionCreate";
import ready from "./listeners/ready";

import { token } from "./config.json"

const client = new Client({
    intents: []
});

ready(client);
interactionCreate(client);

client.login(token);
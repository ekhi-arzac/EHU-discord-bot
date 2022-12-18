import { CommandInteraction, Client } from "discord.js";
import { Command } from "../type/command";

export const Test: Command = {
    name: "repeat",
    description: "repeat",
    options: [
        {
            name: "titulo",
            type: 3,
            description: "write your title",
            required: true,
        },
    ],
    run: async (client: Client, interaction: CommandInteraction) => {
        const content: string = "A";
        console.log(interaction.options.get("title")?.value)
        await interaction.followUp({
            ephemeral: true,
            content
        });
    }
};
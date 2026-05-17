import axios from "axios";
import { getSimpsons } from "./api.js";
import { test, expect, vi} from 'vitest';

vi.mock("axios");

test("ткстирования фкнкции", async() => {
    
    const imitationResponse = {
        data: [
            {id: 1, age: 57, name: 'Seymour Skinner'},
            {id: 2, age: 27, name: 'Hammer'},
        ]
    }

    axios.get.mockResolvedValue(imitationResponse);
    const characters = await getSimpsons();

    expect(axios.get).toHaveBeenCalledWith("https://thesimpsonsapi.com/api/characters");
    expect(characters).toHaveLength(2);
    expect(characters[0].name).toBe("Seymour Skinner")
});
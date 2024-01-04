import { publicProcedure, router } from "./server";
import * as z from 'zod';


let jokes = [
      "Why don't scientists trust atoms? Because they make up everything!",
      "I told my wife she was drawing her eyebrows too high. She looked surprised.",
      "Why did the scarecrow win an award? Because he was outstanding in his field!",
      "Parallel lines have so much in common. It's a shame they'll never meet.",
      "Why don't skeletons fight each other? They don't have the guts.",
      "I used to play piano by ear, but now I use my hands and fingers.",
      "I only know 25 letters of the alphabet. I don't know y.",
      "Did you hear about the mathematician who's afraid of negative numbers? He will stop at nothing to avoid them.",
      "Why did the bicycle fall over? Because it was two-tired!",
      "How do you organize a space party? You planet!",
      "I told my computer I needed a break, and now it won't stop sending me vacation ads.",
      "What do you call fake spaghetti? An impasta.",
      "I used to be a baker because I kneaded dough.",
      "Why did the tomato turn red? Because it saw the salad dressing!",
      "I asked the librarian if the library had any books on paranoia. She whispered, 'They're right behind you!'"
    ]


export const jokeRoutes = router({
        getRandomJokes : publicProcedure
        .input(z.number())
        .query(({input})=>{
            return jokes[input];
        }),
        getAllJokes : publicProcedure.query(()=>{
            return jokes;
        })   
});

export type JokeRouterType = typeof jokeRoutes;
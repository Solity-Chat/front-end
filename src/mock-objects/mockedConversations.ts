/**
 * Mocked data test-purpose only
 */
import { messages } from "./mockedMessages";
import { users } from "./mockedUsers";
const maxNumberMessages = 5;
const currentIndexUser = 0;

const conversations = [
  {
    conversationMessages: messages.slice(0, maxNumberMessages),
    conversationUser: users[(currentIndexUser + 1) % users.length],
  },
];

export { conversations };

// src/store/memoryStore.ts

// Key: user_id (number) -> Value: Array of messages
const chatHistories = new Map<number, Array<{ role: string; parts: Array<{ text: string }> }>>();

export function getHistory(user_id: number) {
  if (!chatHistories.has(user_id)) {
    chatHistories.set(user_id, []);
  }
  return chatHistories.get(user_id)!;
}

export function appendToHistory(user_id: number, role: string, text: string) {
  const history = getHistory(user_id);
  history.push({
    role: role,
    parts: [{ text: text }]
  });
}
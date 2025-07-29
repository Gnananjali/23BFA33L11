import { getAuthHeaders } from "../utils/auth";

export const log = async (stack, level, packageName, message) => {
  try {
    await fetch("https://evalapi.affordmed.com/eval/log", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...getAuthHeaders(),
      },
      body: JSON.stringify({ stack, level, package: packageName, message }),
    });
  } catch (err) {
    console.error("Logging failed", err);
  }
};

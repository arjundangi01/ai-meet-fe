const parseJson = (json: string) => {
  try {
    let parsed = JSON.parse(json);

    // If result is still a string, parse again
    if (typeof parsed === "string") {
      parsed = JSON.parse(parsed);
    }

    return parsed;
  } catch (e) {
    console.error("Failed to parse JSON:", e);
    return [];
  }
};

export { parseJson };

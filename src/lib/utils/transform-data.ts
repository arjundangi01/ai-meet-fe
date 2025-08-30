const parseJson = (json: string) => {
  if (typeof json !== "string") {
    return JSON.parse(JSON.stringify(json));
  }
  return JSON.parse(json);
};

export { parseJson };

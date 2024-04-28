export function ellipsis(input: string, limit: number) {
  // for [[t1|t2]] or [[t2]], replace with t2 ;
  const text = input.replace(/\[\[(.*?)(?:\|(.*?)|)\]\]/g, (match, t1, t2) =>
    t2 ? t2 : t1,
  );
  if (text.length <= limit) {
    return text;
  }
  return text.substring(0, limit) + "...";
}

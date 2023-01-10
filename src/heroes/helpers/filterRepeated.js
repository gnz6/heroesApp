export const filterRepeated = (hero, chars) => {
    const allChars = chars.split(",");
    const filter = allChars.filter(char => char !== hero)
    return filter
  }

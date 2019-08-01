export const initMap = () => {
  const map = [];

  for (let i = 0; i < 76; i++) {
    map.push([]);
    for (let j = 0; j < 76; j++) {
      map[i].push(j);
    }
  }
  return map;
};


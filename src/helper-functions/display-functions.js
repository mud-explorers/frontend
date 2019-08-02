

export const validExit = (direction, exits) => {
  if (exits.includes(direction)) {
    return true;
  } else {
    return false;
  }
};

export const canMove = (direction, exits) => {
  if (exits.includes(direction)) {
    return true;
  } else {
    return false;
  }
};

export const messageConverter = str => {
  if (str.includes("north")) {
    return str.replace("north", "east");
  }
  if (str.includes("south")) {
    return str.replace("south", "west");
  }
  if (str.includes("east")) {
    return str.replace("east", "south");
  }
  if (str.includes("west")) {
    return str.replace("west", "north");
  }
  return str;
};

export const shopConverter = (str, room_id) => {
  if (room_id === 0) {
    return "You are standing in the center of a brightly lit room. You notice a shop to the north and exits to the west, south and east.";
  }
  return str;
};

function logShout(string) {
  console.log(string.toUpperCase());
}
function shout(Hello) {
  return Hello.toUpperCase();
}
function logWhisper(string) {
  console.log(string.toLowerCase());
}
function whisper(HELLO) {
  return HELLO.toLowerCase();
}
function sayHiToHeadphonedRoommate(string) {
  if (string === string.toLowerCase()) {
    return "I can't hear you!";
  } else if (string === string.toUpperCase()) {
    return "YES INDEED!";
  } else if (string === "Let's have dinner together!") {
    return "I would love to!";
  }
}

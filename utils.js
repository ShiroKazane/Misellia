const REGEX_EMOJI = /(\u00a9|\u00ae|[\u2000-\u3300]|\ud83c[\ud000-\udfff]|\ud83d[\ud000-\udfff]|\ud83e[\ud000-\udfff])/g

const sanitizeHTML = str => { // love you mango but also fuck you for bringing this to my attention
  return str.replace(/[^\w. ]/gi, function (c) {
    if(REGEX_EMOJI.test(c)) return c;
    return '&#' + c.charCodeAt(0) + ';';
  });
};

const convertSnowflake = snow => {
  const epoch = 1420070400000;
  return (snow / 4194304) + epoch;
};
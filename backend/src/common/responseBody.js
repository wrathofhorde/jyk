const make = (resultCode, message, data) => {
  data = data || {};
  return { resultCode, message, data };
};

const responseBody = {
  make,
};

export default responseBody;

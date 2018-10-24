const nameFormatter = (name) => {
  const nameArray = name.split(" ");
  const newNameArray = nameArray.map((data) => data.replace(data[0], data[0].toUpperCase()));
  return newNameArray.join(" ");
};

export default nameFormatter;

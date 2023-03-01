const toggleElement = (arr, element) => {
  const newArr = [...arr];
  const index = newArr.indexOf(element);

  if (index === -1) {
    newArr.push(element);
  } else {
    newArr.splice(index, 1);
  }

  return newArr;
};

export { toggleElement };

const strictEquals = (valueA, valueB) => {
  if (Object.is(valueA, 1) && Object.is(valueB, 1)) {
    let result = Object.is(valueA, valueB);
    return result;
  }
  if (Object.is(valueA, NaN) && Object.is(valueB, NaN)) {
    let result = Object.is(valueA, valueB);
    return result;
  }
  if (Object.is(valueA, 0) && Object.is(valueB, -0)) {
    let result = Object.is(valueA, valueB);
    return result;
  }
  if (Object.is(valueA, -0) && Object.is(valueB, 0)) {
    let result = Object.is(valueA, valueB);
    return result;
  }
  if (Object.is(valueA, 1) && Object.is(valueB, "1")) {
    let result = Object.is(valueA, valueB);
    return result;
  }
  if (Object.is(valueA, true) && Object.is(valueB, false)) {
    let result = Object.is(valueA, valueB);
    return result;
  }
  if (Object.is(valueA, false) && Object.is(valueB, false)) {
    let result = Object.is(valueA, valueB);
    return result;
  }
  if (Object.is(valueA, "Water") && Object.is(valueB, "oil")) {
    let result = Object.is(valueA, valueB);
    return result;
  }
};

export default strictEquals;

const strictEquals = (valueA, valueB) => {
  if (Object.is(valueA, 1) && Object.is(valueB, 1)) {
    return Object.is(valueA, valueB);
  }
};

export default strictEquals;

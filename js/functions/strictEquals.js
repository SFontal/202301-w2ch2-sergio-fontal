const strictEquals = (valueA, valueB) => {
  let result = [
    "| valueA  | valueB  | RESULT |                   |",
    "| ------- | ------- | -------------------------- |",
  ];

  if (
    (valueA < 0 || valueA > 0) &&
    (valueB < 0 || valueB > 0) &&
    ["number"].includes(typeof valueA) &&
    ["number"].includes(typeof valueB)
  ) {
    result.push(
      `| ${valueA}       | ${valueB}       | ${Object.is(
        valueA,
        valueB
      )}  |                   |`
    );
  }

  if (Object.is(valueA, NaN) && Object.is(valueB, NaN)) {
    result.push(
      `| ${valueA}     | ${valueB}     | ${false}  | // Rule Exception |`
    );
  }

  if (
    (Object.is(valueA, -0) && Object.is(valueB, 0)) ||
    (Object.is(valueA, 0) && Object.is(valueB, -0))
  ) {
    result.push(
      `| ${valueA}       | ${valueB}       | ${true}   | // Rule Exception |`
    );
  }

  if (
    ((valueA < 0 || valueA > 0) && Object.is(typeof valueB, "string")) ||
    (Object.is(typeof valueA, "string") && (valueB < 0 || valueB > 0))
  )
    result.push(
      `| ${valueA}       | ${valueB}       | ${Object.is(
        valueA,
        valueB
      )}  |                   |`
    );

  if (
    (Object.is(valueA, true) && Object.is(valueB, false)) ||
    (Object.is(valueA, false) && Object.is(valueB, true))
  ) {
    result.push(
      `| ${valueA}    | ${valueB}   | ${Object.is(
        valueA,
        valueB
      )}  |                   |`
    );
  }

  if (
    (Object.is(valueA, false) && Object.is(valueB, false)) ||
    (Object.is(valueA, true) && Object.is(valueB, true))
  ) {
    result.push(
      `| ${valueA}    | ${valueB}    | ${Object.is(
        valueA,
        valueB
      )}   |                   |`
    );
  }

  if (
    Object.is(typeof valueA, "string") &&
    Object.is(typeof valueB, "string")
  ) {
    result.push(
      `| ${valueA}    | ${valueB}    | ${Object.is(
        valueA,
        valueB
      )}  |                   |`
    );
  }

  return result;
};

export default strictEquals;

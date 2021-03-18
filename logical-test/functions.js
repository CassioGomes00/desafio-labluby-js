// Tentei implementar as funções sem usar array methods,
// criando minhas próprias lógica para obter dados dos arrays,
// como tamanho e se contém determinado valor.

function fillArray(times, element) {
  const newArray = [];

  for (let i = 0; i < times; i++) {
    newArray[i] = element;
  }

  return newArray;
}

function invertArray(array, length) {
  for (let i = 0, j = length - 1; i < j; i++, j--) {
    const aux = array[i];
    array[i] = array[j];
    array[j] = aux;
  }

  return array;
}

function removeArrayFalsyElements(array, length) {
  const cleanArray = [];
  let cleanArrayLength = 0;

  for (let i = 0; i < length; i++) {
    let current = array[i];

    if (current) {
      cleanArray[cleanArrayLength++] = current;
    }
  }

  return cleanArray;
}

function transformArraysIntoObject(array, length) {
  const object = {};

  for (let i = 0; i < length; i++) {
    let current = array[i];
    object[current[0]] = current[1];
  }

  return object;
}

function removeSpecificArrayElements(array, length, ...elements) {
  const newArray = [];
  let newArrayLength = 0;

  const exists = (value, array) => {
    let i = 0;

    do {
      if (value === array[i++]) {
        return true;
      }
    } while (array[i] !== undefined);

    return false;
  };

  for (let i = 0; i < length; i++) {
    let current = array[i];

    if (!exists(current, elements)) {
      newArray[newArrayLength++] = current;
    }
  }

  return newArray;
}

function removeDuplicatedArrayelements(array, length) {
  const newArray = [];
  let newArrayLength = 0;

  const exists = (value, array, length) => {
    for (let i = 0; i < length; i++) {
      if (value === array[i]) {
        return true;
      }
    }

    return false;
  };

  for (let i = 0; i < length; i++) {
    let current = array[i];

    if (!exists(current, newArray, newArrayLength)) {
      newArray[newArrayLength++] = current;
    }
  }

  return newArray;
}

function arrayEquals(array01, array02, length) {
  for (let i = 0; i < length + 1; i++) {
    if (array01[i] !== array02[i]) {
      return false;
    }
  }

  return true;
}

function spreadArray(array, length) {
  const newArray = [];
  let newArrayLength = 0;

  const getLength = (item) => {
    let i = 0;

    while (item[i] !== undefined) {
      i++;
    }

    return i;
  };

  for (let i = 0; i < length; i++) {
    let current = array[i];
    let itemLength = getLength(current);

    if (itemLength) {
      for (let j = 0; j < itemLength; j++) {
        newArray[newArrayLength++] = current[j];
      }
    } else {
      newArray[newArrayLength++] = current;
    }
  }

  return newArray;
}

function splitArray(array, length, maxLength) {
  const newArray = [];
  let newArrayLength = 0;
  let internArray = [];

  for (let i = 0; i < length; i++) {
    const current = array[i];

    if (i % maxLength || i === 0) {
      internArray = [...internArray, current];
    } else {
      newArray[newArrayLength++] = internArray;
      internArray = [current];
    }
  }

  newArray[newArrayLength++] = internArray;

  return newArray;
}

function findEqualArrayElements(array01, array02, length) {
  const equalElements = [];
  let equalElementsLength = 0;

  const exists = (value, array, length) => {
    for (let i = 0; i < length; i++) {
      if (value === array[i]) {
        return true;
      }
    }

    return false;
  };

  for (let i = 0; i < length; i++) {
    const current01 = array01[i];

    for (let j = 0; j < length; j++) {
      const current02 = array02[j];

      if (
        current01 === current02 &&
        !exists(current01, equalElements, equalElementsLength)
      ) {
        equalElements[equalElementsLength++] = current01;
      }
    }
  }

  return equalElements;
}

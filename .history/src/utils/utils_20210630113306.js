export const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
};

export const colors = {
  myGreen: "#03fc80",
  myRed: "#d42626",
};

export const getAnswers = (key, allCountries, properAnswerId) => {
  let tempAnswers = [];
  while (tempAnswers.length < 3) {
    let num = Math.floor(Math.random() * allCountries.length);
    if (
      !tempAnswers.includes(allCountries[num][key] && num !== randomCountry)
    ) {
      tempAnswers.push(allCountries[num][key]);
    }
  }
  tempAnswers.push(allCountries[randomCountry][key]);
  return tempAnswers;
};

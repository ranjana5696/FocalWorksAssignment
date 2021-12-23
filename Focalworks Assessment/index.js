function init(cAns, cRes) {
    const _validation = {};
    const _error = [];
    let maxMarks = 0;
  
    const regExp = /[0-9]/g;
    const _correct = cAns.split(" ");
  
    function calculateMaxMarks(validate) {
      _correct?.map((it, _i) => {
        if (it.match(regExp)) {
          _validation[it] = 4;
          maxMarks += 4;
        } else if (it.length > 7) {
          _validation[it.toLowerCase()] = 3;
          maxMarks += 3;
        } else if (it.length >= 5 && it.length <= 7) {
          _validation[it.toLowerCase()] = 1;
          maxMarks += 1;
        }
      });
      const result = validate(cRes);
      return result;
    }
  
    function validateResponse(response) {
      const _res = response.split(" ");
      let scored = 0;
  
      Object.values(_res).map((it) => {
        const __case = it.toLowerCase();
        if (__case.includes(".")) {
          const _replace = __case.replace(".", "");
          if (_validation[_replace]) {
            scored += _validation[_replace];
            _error.push(it);
          }
        } else {
          const value = _validation[__case];
          if (value) {
            scored += value;
          }
        }
      });
      const percentage = (scored / maxMarks) * 100;
      return { _error, scored, maxMarks, percentage };
    }
  
    return calculateMaxMarks(validateResponse);
  }
  
  const candidateResponse =
    "There are Twenty-Four hours in a day. A year has 14 months.";
  const correctAnswer =
    "There are twenty-four hours in a day, 30 days in a month, and 12 months in the calendar year.";
  
  //init
  const calculateMarks = init(correctAnswer, candidateResponse);
  
  const { _error, scored, maxMarks, percentage } = calculateMarks;
  console.log(
    `Total Marks = ${maxMarks}\nMarks Scored = ${scored}
    \nPercentage = ${percentage.toFixed(2)}%\nError found on word = ${_error}`
  );


//   Some of the error I have 

// 1.Not sure about comma and full stop are considering as characters from the given data so it is diifficult to calculate them.
// 2.the lengths of months and calendar is greater than 7 so the points should be counted as +3 instead of +1.



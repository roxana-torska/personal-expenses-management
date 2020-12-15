export const commandType = {
    ADD: 'add',
    LIST: 'list',
    CLEAR: 'clear',
    TOTAL: 'total',
  };
  
  const commandParser = (command) => {
    const [type, ...params] = command.split(' ');
    let date;
    let value;
    let currency;
    let titleParts;
  
    switch (type) {
      case commandType.ADD:
        [date, value, currency, ...titleParts] = params;
  
        return {
          type,
          expense: {
            date,
            value,
            currency,
            title: titleParts.join(' ').replace(/"/g, ''),
          },
        };
  
      case commandType.LIST:
        return {
          type,
        };
  
      case commandType.CLEAR:
        [date] = params;
  
        return {
          type,
          date,
        };
  
      case commandType.TOTAL:
        [currency] = params;
  
        return {
          type,
          currency,
        };
  
      default:
        return {
          type: 'error',
          errorMessage: 'Wrong format of command',
        };
    }
  };
  
  export default commandParser;
  
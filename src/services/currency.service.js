class CurrencyService {
    getRates = async () => {
      let result;
  
      try {
        const response = await fetch(
          'http://data.fixer.io/api/latest?access_key=a953dc090cc1156b35b9e31238d42eb2&format=1'
        );
        result = await response.json();
      } catch (err) {
        throw new Error(err);
      }
  
      return result.rates;
    };
  }
  
  export default CurrencyService;

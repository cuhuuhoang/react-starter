import sundaes from "../apis/sundaes";

class SundaeService {
  getScoops(onSuccess, onError) {
    sundaes.get('/scoops').then(onSuccess, onError);
  }

  getToppings(onSuccess, onError) {
    sundaes.get('/toppings').then(onSuccess, onError);
  }

  computePartSum(partInfo, formValues, name) {
    return partInfo?.data?.reduce((sum, {id,price}) => sum + (formValues?.[`${name}-${id}`] || 0) *  price, 0);
  }
}

export default new SundaeService();

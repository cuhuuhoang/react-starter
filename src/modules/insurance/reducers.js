export const claimsHistory = (historyClaims = [], action) => {
  if (action.type === 'CREATE_CLAIM') {
    return [...historyClaims, action.payload];
  }
  return historyClaims;
}

export const accounting = (totalMoney = 100, action) => {
  if (action.type === 'CREATE_CLAIM') {
    return totalMoney - action.payload.toClaimAmount;
  } else if (action.type === 'CREATE_POLICY') {
    return totalMoney + action.payload.amount;
  }
  return totalMoney;
}

export const policies = (allPolicies = [], action) => {
  if (action.type === 'CREATE_POLICY') {
    return [...allPolicies, action.payload.name];
  } else if (action.type === 'DELETE_POLICY') {
    return allPolicies.filter(name => name !== action.payload.name);
  }
  return allPolicies;
}
export const createPolicy = (name, amount) => {
  return {
    type: 'CREATE_POLICY',
    payload: {
      name: name,
      amount: amount
    }
  }
}

export const deletePolicy = (name) => {
  return {
    type: 'DELETE_POLICY',
    payload: {
      name: name
    }
  }
}

export const createClaim = (name, toClaimAmount) => {
  return {
    type: 'CREATE_CLAIM',
    payload: {
      name: name,
      toClaimAmount: toClaimAmount
    }
  }
}
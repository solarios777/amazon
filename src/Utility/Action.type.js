export const Type = {
  ADD_TO_BASKET: "ADD_TO_BASKET",
  REMOVE_FROM_BASKET: "REMOVE_FROM_BASKET",
  CHANGE_AMOUNT: "CHANGE_AMOUNT",
};

export const changeAmount = (id, amount) => ({
  type: Type.CHANGE_AMOUNT,
  id,
  amount,
});
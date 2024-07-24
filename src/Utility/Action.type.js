export const Type = {
  ADD_TO_BASKET: "ADD_TO_BASKET",
  REMOVE_FROM_BASKET: "REMOVE_FROM_BASKET",
  CHANGE_AMOUNT: "CHANGE_AMOUNT",
  SET_USER: "SET_USER",
  EMPTY_BASKET: "EMPTY_BASKET",
};

export const changeAmount = (id, amount) => ({
  type: Type.CHANGE_AMOUNT,
  id,
  amount,
});
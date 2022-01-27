import * as types from "./actionTypes";

export function changeLanguages(language) {
  return {
    type: types.CHANGE_LANGUAGE,
    data: language,
  };
}

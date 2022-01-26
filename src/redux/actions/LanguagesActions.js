import * as types from "./actionTypes";

export function changeLanguages(language) {
  console.log("language", language);
  return {
    type: types.CHANGE_LANGUAGE,
    data: language,
  };
}

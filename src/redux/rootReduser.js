import { combineReducers } from "redux";
import { LanguageReducer } from "./language/languageReducer";


export const RootRedusers = combineReducers({
    lang: LanguageReducer,
}) 
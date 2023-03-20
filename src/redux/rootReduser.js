import { combineReducers } from "redux";
import { LanguageReducer } from "./language/languageReducer";
import { TokebReducer } from "./token/tokenReducer";


export const RootRedusers = combineReducers({
    lang: LanguageReducer,
    token: TokebReducer,
}) 
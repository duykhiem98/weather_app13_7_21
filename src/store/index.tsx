import { applyMiddleware, createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistReducer, persistStore } from "redux-persist";
import AsyncStorage from "@react-native-community/async-storage";

import { setStore } from "@/store/getStore";
import { constantReducer, constantSetStore } from "@/store/constant";
import { categoryReducer, setCategoriesStore } from "@/store/categories";
import { postReducer, setPostsStore } from "@/store/post";
import { notificationReducer, setNotificationStore } from "@/store/notification";
import { requestReducer, setRequestStore } from "@/store/request";
import { suggestionReducer, setSuggestionStore } from "@/store/suggestion";
import { friendReducer, setFriendStore } from "@/store/Friend";
import { searchReducer, setSearchStore } from "@/store/ListSearch";

const middlewares: any[] = [];

const enhancer = composeWithDevTools(applyMiddleware(...middlewares));

const appReducer = combineReducers({
  constant: constantReducer,
  categories: categoryReducer,
  posts: postReducer,
  notifications: notificationReducer,
  requests: requestReducer,
  suggestions: suggestionReducer,
  friends: friendReducer,
  search:searchReducer
});

const rootReducer = (state: any, action: any) => {
  if (action.type === "RESET_STORE_DATA") {
    //Clear store state
    state = undefined;
  }

  return appReducer(state, action);
};

const persistedReducer = persistReducer(
  {
    key: "root",
    whitelist: [
      "global",
      "constant",
      "categories",
      "services"
    ], // if you want to persist something, put it here
    storage: AsyncStorage
  },
  rootReducer
);

export const store = createStore(persistedReducer, enhancer);

export const persistor = persistStore(store);

export default store;

// set store
setStore(store);
setCategoriesStore(store);
setPostsStore(store);
setNotificationStore(store);
setRequestStore(store);
setSuggestionStore(store);
setFriendStore(store);
setSearchStore(store);
constantSetStore(store);

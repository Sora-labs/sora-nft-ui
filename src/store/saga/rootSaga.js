import { takeLatest, all } from "redux-saga/effects"
import { getPost, getUser } from "../../../../rtk/src/request/getPost"
import { GET_POST } from "./actions/posts"
import { GET_USER } from "./actions/users"


export function* rootSaga() {
    yield all([
        takeLatest(GET_POST, getPost),
        takeLatest(GET_USER, getUser)
    ])
}
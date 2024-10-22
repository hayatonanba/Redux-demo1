import { createSlice } from "@reduxjs/toolkit";
import { PostsData } from "../DummyData";

export const postSlice = createSlice({
    name: "posts", //スライスの名前
    initialState: { value: PostsData },
    reducers: { //記事の投稿、名前と内容で
        addPost: (state, action) => { //addPostがactioncreaterにあたる
            state.value.push(action.payload);
        },//state(前の状態)のvalue(値、PostsData)にaction.payloadをpush(追加)する


        delitePost: (state, action) => {
            state.value = state.value.filter((post) => post.id !== action.payload.id)
        }
    },
});

export default postSlice.reducer;
export const {addPost, delitePost} = postSlice.actions
import { Router } from "express";
import { dbConnection } from "../../database/dbConnection.js";
import { addPost, deletePost, getAllPosts, getSinglePost, updatePost } from "./posts.controller.js";


const connection = dbConnection()

const postsRouter = Router()

postsRouter.post("/addPost" , addPost )
postsRouter.get("/getAllPosts",getAllPosts)
postsRouter.get("/getSinglePost/:id", getSinglePost)
postsRouter.put("/updatePost/:id", updatePost)
postsRouter.delete("/deletePost/:id", deletePost)

export default postsRouter
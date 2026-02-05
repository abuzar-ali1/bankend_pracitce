import express from "express"
import userRouter from "./routes/user.route.js";
import postRouter from "./routes/post.route.js";
const app = express();

app.use(express.json());
app.use(express.urlencoded());


// A simple test route to check if server is working

app.get('/', (req, res) => {
  res.send('Server is ready! 🚀');
});

 
  
// routes declaration

app.use('/api/v1/users' , userRouter);
app.use('/api/v1/posts' , postRouter);


export default app;   
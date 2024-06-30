import express ,{Express,Request,Response} from 'express';
import mongoose from 'mongoose';
import userRoutes from './routes/user.routes';

const app: Express = express();
const port = 3000;


mongoose.connect('mongodb://localhost:27017/ts-rest-api',{}).then(()=>{
    console.log('Conected to MongoDB');
}).catch(error=>{
    console.log(error);
});

app.use(express.json());
app.use('/api',userRoutes);


// app.get('./',(req:Request,res:Response)=>{
//     res.send("HOLA DESDE MI SERVIDOR TYPESCRIPT");
// })

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})


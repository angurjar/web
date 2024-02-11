import express, { Request, Response, urlencoded } from 'express'; 
import rtoRoutes from '../router/userRouter'

const app = express();
app.use(express.json())
app.use(urlencoded({extended:true}))
app.get('/', (req: Request, res: Response): void => {
    res.send('hello world');
});


app.use("api/v1",rtoRoutes)

app.listen(3000, () => {
    console.info('server is running');
});

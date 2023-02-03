import { HttpService } from './services/http-service';

const httpService = new HttpService();
httpService.app.listen(3000, () => {
    console.log('server is running on 3000');
});
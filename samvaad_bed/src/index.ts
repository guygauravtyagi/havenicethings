import { HttpService } from './services/http-service';

const httpService = HttpService.getInstance();
httpService.app.listen(3000, () => {
    console.log('server is running on 3000');
});
import { HttpService } from './services/http-service';
import { WsService } from './services/web-socket';

const httpService = HttpService.getInstance();
const wsServer = WsService.getInstance();

wsServer.getServer().on('request', httpService.app);

wsServer.getServer().listen(3000, () => {
    console.log('server is running on 3000');
});
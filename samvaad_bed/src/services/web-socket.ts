import * as ws from 'ws';
import * as http from 'http';
import { HttpService } from './http-service';

export class WsService {
    private httpService = HttpService.getInstance();
    private static wsService: WsService;
    private server = http.createServer();
    private wsServer!: ws.Server;

    private constructor() { }

    static getInstance() {
        if (!this.wsService)
            this.wsService = new WsService();
        return this.wsService;
    }

    public getServer() {
        return this.server;
    }

    public getWSServer() {
        this.server.on('request', this.httpService.app);
        if (!this.wsServer)
            this.wsServer = new ws.Server({
                server: this.server
            })
        return this.server;
    }
}
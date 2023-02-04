import express from 'express';
import { BasicRouting } from '../routing/basic-routing';


export class HttpService {
    public app!: express.Application;
    private static httpService: HttpService;
    private routing: BasicRouting;

    private constructor() {
        this.app = express();
        this.routing = new BasicRouting();
        this.addRouting(this.app);
        this.setDefaultHeaders(this.app);
        this.setDefaultMetaData(this.app);
    }

    static getInstance() {
        if (!this.httpService)
            this.httpService = new HttpService();
        return this.httpService;
    }

    private addRouting(app: express.Application) {
        app.use(this.routing.getRouting());
    }

    setDefaultHeaders(app: express.Application) {
        app.use(function (req, res, next) {
            res.header('Access-Control-Allow-Origin', '*');
            res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
            res.header('Access-Control-Allow-Headers', 'Accept, Content-Type');
            res.header('Access-Control-Allow-Credentials', 'true');
            if (req.method === 'OPTIONS') {
                res.sendStatus(200);
            } else {
                next();
            }
        });
    }

    setDefaultMetaData(app: express.Application) {
        this.app.use(express.json());
        this.app.get('/', function (req, res) {
            res.send('hello');
        });
    }
}
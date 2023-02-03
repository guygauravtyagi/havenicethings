import express from 'express';


export class HttpService {
    public app!: express.Application;
    public static httpService: HttpService;
    private constructor() {
        this.app = express();
        this.setDefaultHeaders(this.app);
        this.setDefaultMetaData(this.app);
    }

    static getInstance() {
        if (!this.httpService)
            this.httpService = new HttpService();
        return this.httpService;
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
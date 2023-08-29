import dotenv from "dotenv";

dotenv.config();

interface Configuration{
    PORT: number
}

const appConfig: Configuration={
    PORT: +process.env.PORT! || 3000
}

module.exports= appConfig;

import { Request, Response } from "express";
import { CreateShortened, CreateShortenedRequest } from "../services/shortening/create-shortened";
import { MongoShortenedsRepository } from "../repositories/mongo/mongo-shorteneds-repository";
import { GetShortened } from "../services/shortening/get-shorteneds";
import { RemoveShortened } from "../services/shortening/remove-shortened";
import { UpdateShortenedURL, UpdateShortenedURLRequest } from "../services/shortening/update-shortened-url";

class ShortenedController {
    public async create(req: Request<{}, {}, CreateShortenedRequest, {}>, res: Response): Promise<Response> {
        try {
            await (new CreateShortened(new MongoShortenedsRepository()).create(req.body))

            return res.status(201).send()
        } catch (err) {
            return res.status(402).send(err)
        }
    }

    public async index(req: Request, res: Response): Promise<Response> {
        try {
            const shorteneds = await (new GetShortened(new MongoShortenedsRepository()).get())
            if (shorteneds) {
                const infoShorteneds = shorteneds.map((shortened) => {
                    return shortened.info
                })
                return res.status(200).send(infoShorteneds)
            }

            return res.status(200).send(shorteneds)
        } catch (err) {
            return res.status(402).send(err)
        }
    }

    public async update(req: Request<{slug: string}, {}, UpdateShortenedURLRequest, {}>, res: Response): Promise<Response> {
        try {
            await (new UpdateShortenedURL(new MongoShortenedsRepository()).update(req.body.original_url, req.params.slug))

            return res.status(200).send()
        } catch (err) {
            return res.status(402).send(err)
        }
    }

    public async remove(req: Request<{slug: string}, {}, {}, {}>, res: Response): Promise<Response> {
        try {
            await (new RemoveShortened(new MongoShortenedsRepository()).remove(req.params.slug))

            return res.status(200).send()
        } catch (err) {
            return res.status(402).send(err)
        }
    }
}

export default new ShortenedController()
import { Injectable, Logger, NotFoundException } from '@nestjs/common';

import { FilterQuery, Model, Types } from 'mongoose';
import { AbstractDocument } from './abstract.schema';

@Injectable()
export abstract class BaseRepository<TDocument extends AbstractDocument> {
  protected abstract readonly logger: Logger;

  constructor(private readonly model: Model<TDocument>) {}

  async findOne(filterQuery: FilterQuery<TDocument>) {
    const document = await this.model.findOne(filterQuery, {}, { lean: true });

    if (!document) {
      this.logger.warn('Document not found with filterQuery', filterQuery);
      throw new NotFoundException('Document not found.');
    }

    return document;
  }

  async find(filterQuery: FilterQuery<TDocument>) {
    return this.model.find(filterQuery, {}, { lean: true });
  }

  async create(document: TDocument): Promise<TDocument> {
    const createdDocument = new this.model({
      ...document,
      _id: new Types.ObjectId(),
    });

    await createdDocument.save();
    return createdDocument.toJSON() as unknown as TDocument;
  }
}

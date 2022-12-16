import type { Knex } from 'knex'

interface Incoming<T> {
  create(item: Omit<T, 'id'>): Promise<T>
}

interface Outgoing<T> {
  find(item: Partial<T>): Promise<T[]>
}

type BaseRepository<T> = Incoming<T> & Outgoing<T>

export abstract class KnexRepository<T> implements BaseRepository<T> {
  constructor(
    public readonly knex: Knex,
    public readonly tableName: string,
  ) {}

  // Shortcut for Query Builder call
  public get qb(): Knex.QueryBuilder {
    return this.knex(this.tableName)
  }

  // Insert a record first time
  async create(item: Omit<T, 'id'>): Promise<T> {
    const [output] = await this.qb.insert<T>(item).returning('*')

    return output as Promise<T>
  }

  // Find a record
  find(item: Partial<T>): Promise<T[]> {
    return this.qb
      .where(item)
      .select()
  }
}
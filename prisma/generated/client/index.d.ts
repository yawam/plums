
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Topic
 * 
 */
export type Topic = $Result.DefaultSelection<Prisma.$TopicPayload>
/**
 * Model Note
 * 
 */
export type Note = $Result.DefaultSelection<Prisma.$NotePayload>
/**
 * Model Link
 * 
 */
export type Link = $Result.DefaultSelection<Prisma.$LinkPayload>
/**
 * Model Attachment
 * 
 */
export type Attachment = $Result.DefaultSelection<Prisma.$AttachmentPayload>
/**
 * Model Image
 * 
 */
export type Image = $Result.DefaultSelection<Prisma.$ImagePayload>
/**
 * Model Recently_Deleted_Note
 * 
 */
export type Recently_Deleted_Note = $Result.DefaultSelection<Prisma.$Recently_Deleted_NotePayload>
/**
 * Model Recently_Deleted_Image
 * 
 */
export type Recently_Deleted_Image = $Result.DefaultSelection<Prisma.$Recently_Deleted_ImagePayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Topics
 * const topics = await prisma.topic.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Topics
   * const topics = await prisma.topic.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.topic`: Exposes CRUD operations for the **Topic** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Topics
    * const topics = await prisma.topic.findMany()
    * ```
    */
  get topic(): Prisma.TopicDelegate<ExtArgs>;

  /**
   * `prisma.note`: Exposes CRUD operations for the **Note** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Notes
    * const notes = await prisma.note.findMany()
    * ```
    */
  get note(): Prisma.NoteDelegate<ExtArgs>;

  /**
   * `prisma.link`: Exposes CRUD operations for the **Link** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Links
    * const links = await prisma.link.findMany()
    * ```
    */
  get link(): Prisma.LinkDelegate<ExtArgs>;

  /**
   * `prisma.attachment`: Exposes CRUD operations for the **Attachment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Attachments
    * const attachments = await prisma.attachment.findMany()
    * ```
    */
  get attachment(): Prisma.AttachmentDelegate<ExtArgs>;

  /**
   * `prisma.image`: Exposes CRUD operations for the **Image** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Images
    * const images = await prisma.image.findMany()
    * ```
    */
  get image(): Prisma.ImageDelegate<ExtArgs>;

  /**
   * `prisma.recently_Deleted_Note`: Exposes CRUD operations for the **Recently_Deleted_Note** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Recently_Deleted_Notes
    * const recently_Deleted_Notes = await prisma.recently_Deleted_Note.findMany()
    * ```
    */
  get recently_Deleted_Note(): Prisma.Recently_Deleted_NoteDelegate<ExtArgs>;

  /**
   * `prisma.recently_Deleted_Image`: Exposes CRUD operations for the **Recently_Deleted_Image** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Recently_Deleted_Images
    * const recently_Deleted_Images = await prisma.recently_Deleted_Image.findMany()
    * ```
    */
  get recently_Deleted_Image(): Prisma.Recently_Deleted_ImageDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.14.0
   * Query Engine version: e9771e62de70f79a5e1c604a2d7c8e2a0a874b48
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Topic: 'Topic',
    Note: 'Note',
    Link: 'Link',
    Attachment: 'Attachment',
    Image: 'Image',
    Recently_Deleted_Note: 'Recently_Deleted_Note',
    Recently_Deleted_Image: 'Recently_Deleted_Image'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'topic' | 'note' | 'link' | 'attachment' | 'image' | 'recently_Deleted_Note' | 'recently_Deleted_Image'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      Topic: {
        payload: Prisma.$TopicPayload<ExtArgs>
        fields: Prisma.TopicFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TopicFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TopicPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TopicFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TopicPayload>
          }
          findFirst: {
            args: Prisma.TopicFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TopicPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TopicFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TopicPayload>
          }
          findMany: {
            args: Prisma.TopicFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TopicPayload>[]
          }
          create: {
            args: Prisma.TopicCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TopicPayload>
          }
          createMany: {
            args: Prisma.TopicCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.TopicDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TopicPayload>
          }
          update: {
            args: Prisma.TopicUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TopicPayload>
          }
          deleteMany: {
            args: Prisma.TopicDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.TopicUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.TopicUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TopicPayload>
          }
          aggregate: {
            args: Prisma.TopicAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateTopic>
          }
          groupBy: {
            args: Prisma.TopicGroupByArgs<ExtArgs>,
            result: $Utils.Optional<TopicGroupByOutputType>[]
          }
          count: {
            args: Prisma.TopicCountArgs<ExtArgs>,
            result: $Utils.Optional<TopicCountAggregateOutputType> | number
          }
        }
      }
      Note: {
        payload: Prisma.$NotePayload<ExtArgs>
        fields: Prisma.NoteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NoteFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$NotePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NoteFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$NotePayload>
          }
          findFirst: {
            args: Prisma.NoteFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$NotePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NoteFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$NotePayload>
          }
          findMany: {
            args: Prisma.NoteFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$NotePayload>[]
          }
          create: {
            args: Prisma.NoteCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$NotePayload>
          }
          createMany: {
            args: Prisma.NoteCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.NoteDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$NotePayload>
          }
          update: {
            args: Prisma.NoteUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$NotePayload>
          }
          deleteMany: {
            args: Prisma.NoteDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.NoteUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.NoteUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$NotePayload>
          }
          aggregate: {
            args: Prisma.NoteAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateNote>
          }
          groupBy: {
            args: Prisma.NoteGroupByArgs<ExtArgs>,
            result: $Utils.Optional<NoteGroupByOutputType>[]
          }
          count: {
            args: Prisma.NoteCountArgs<ExtArgs>,
            result: $Utils.Optional<NoteCountAggregateOutputType> | number
          }
        }
      }
      Link: {
        payload: Prisma.$LinkPayload<ExtArgs>
        fields: Prisma.LinkFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LinkFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LinkPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LinkFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LinkPayload>
          }
          findFirst: {
            args: Prisma.LinkFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LinkPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LinkFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LinkPayload>
          }
          findMany: {
            args: Prisma.LinkFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LinkPayload>[]
          }
          create: {
            args: Prisma.LinkCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LinkPayload>
          }
          createMany: {
            args: Prisma.LinkCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.LinkDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LinkPayload>
          }
          update: {
            args: Prisma.LinkUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LinkPayload>
          }
          deleteMany: {
            args: Prisma.LinkDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.LinkUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.LinkUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LinkPayload>
          }
          aggregate: {
            args: Prisma.LinkAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateLink>
          }
          groupBy: {
            args: Prisma.LinkGroupByArgs<ExtArgs>,
            result: $Utils.Optional<LinkGroupByOutputType>[]
          }
          count: {
            args: Prisma.LinkCountArgs<ExtArgs>,
            result: $Utils.Optional<LinkCountAggregateOutputType> | number
          }
        }
      }
      Attachment: {
        payload: Prisma.$AttachmentPayload<ExtArgs>
        fields: Prisma.AttachmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AttachmentFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AttachmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AttachmentFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AttachmentPayload>
          }
          findFirst: {
            args: Prisma.AttachmentFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AttachmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AttachmentFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AttachmentPayload>
          }
          findMany: {
            args: Prisma.AttachmentFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AttachmentPayload>[]
          }
          create: {
            args: Prisma.AttachmentCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AttachmentPayload>
          }
          createMany: {
            args: Prisma.AttachmentCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.AttachmentDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AttachmentPayload>
          }
          update: {
            args: Prisma.AttachmentUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AttachmentPayload>
          }
          deleteMany: {
            args: Prisma.AttachmentDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.AttachmentUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.AttachmentUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AttachmentPayload>
          }
          aggregate: {
            args: Prisma.AttachmentAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateAttachment>
          }
          groupBy: {
            args: Prisma.AttachmentGroupByArgs<ExtArgs>,
            result: $Utils.Optional<AttachmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.AttachmentCountArgs<ExtArgs>,
            result: $Utils.Optional<AttachmentCountAggregateOutputType> | number
          }
        }
      }
      Image: {
        payload: Prisma.$ImagePayload<ExtArgs>
        fields: Prisma.ImageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ImageFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ImagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ImageFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>
          }
          findFirst: {
            args: Prisma.ImageFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ImagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ImageFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>
          }
          findMany: {
            args: Prisma.ImageFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>[]
          }
          create: {
            args: Prisma.ImageCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>
          }
          createMany: {
            args: Prisma.ImageCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ImageDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>
          }
          update: {
            args: Prisma.ImageUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>
          }
          deleteMany: {
            args: Prisma.ImageDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ImageUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ImageUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>
          }
          aggregate: {
            args: Prisma.ImageAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateImage>
          }
          groupBy: {
            args: Prisma.ImageGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ImageGroupByOutputType>[]
          }
          count: {
            args: Prisma.ImageCountArgs<ExtArgs>,
            result: $Utils.Optional<ImageCountAggregateOutputType> | number
          }
        }
      }
      Recently_Deleted_Note: {
        payload: Prisma.$Recently_Deleted_NotePayload<ExtArgs>
        fields: Prisma.Recently_Deleted_NoteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Recently_Deleted_NoteFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Recently_Deleted_NotePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Recently_Deleted_NoteFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Recently_Deleted_NotePayload>
          }
          findFirst: {
            args: Prisma.Recently_Deleted_NoteFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Recently_Deleted_NotePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Recently_Deleted_NoteFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Recently_Deleted_NotePayload>
          }
          findMany: {
            args: Prisma.Recently_Deleted_NoteFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Recently_Deleted_NotePayload>[]
          }
          create: {
            args: Prisma.Recently_Deleted_NoteCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Recently_Deleted_NotePayload>
          }
          createMany: {
            args: Prisma.Recently_Deleted_NoteCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.Recently_Deleted_NoteDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Recently_Deleted_NotePayload>
          }
          update: {
            args: Prisma.Recently_Deleted_NoteUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Recently_Deleted_NotePayload>
          }
          deleteMany: {
            args: Prisma.Recently_Deleted_NoteDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.Recently_Deleted_NoteUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.Recently_Deleted_NoteUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Recently_Deleted_NotePayload>
          }
          aggregate: {
            args: Prisma.Recently_Deleted_NoteAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateRecently_Deleted_Note>
          }
          groupBy: {
            args: Prisma.Recently_Deleted_NoteGroupByArgs<ExtArgs>,
            result: $Utils.Optional<Recently_Deleted_NoteGroupByOutputType>[]
          }
          count: {
            args: Prisma.Recently_Deleted_NoteCountArgs<ExtArgs>,
            result: $Utils.Optional<Recently_Deleted_NoteCountAggregateOutputType> | number
          }
        }
      }
      Recently_Deleted_Image: {
        payload: Prisma.$Recently_Deleted_ImagePayload<ExtArgs>
        fields: Prisma.Recently_Deleted_ImageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Recently_Deleted_ImageFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Recently_Deleted_ImagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Recently_Deleted_ImageFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Recently_Deleted_ImagePayload>
          }
          findFirst: {
            args: Prisma.Recently_Deleted_ImageFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Recently_Deleted_ImagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Recently_Deleted_ImageFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Recently_Deleted_ImagePayload>
          }
          findMany: {
            args: Prisma.Recently_Deleted_ImageFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Recently_Deleted_ImagePayload>[]
          }
          create: {
            args: Prisma.Recently_Deleted_ImageCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Recently_Deleted_ImagePayload>
          }
          createMany: {
            args: Prisma.Recently_Deleted_ImageCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.Recently_Deleted_ImageDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Recently_Deleted_ImagePayload>
          }
          update: {
            args: Prisma.Recently_Deleted_ImageUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Recently_Deleted_ImagePayload>
          }
          deleteMany: {
            args: Prisma.Recently_Deleted_ImageDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.Recently_Deleted_ImageUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.Recently_Deleted_ImageUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Recently_Deleted_ImagePayload>
          }
          aggregate: {
            args: Prisma.Recently_Deleted_ImageAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateRecently_Deleted_Image>
          }
          groupBy: {
            args: Prisma.Recently_Deleted_ImageGroupByArgs<ExtArgs>,
            result: $Utils.Optional<Recently_Deleted_ImageGroupByOutputType>[]
          }
          count: {
            args: Prisma.Recently_Deleted_ImageCountArgs<ExtArgs>,
            result: $Utils.Optional<Recently_Deleted_ImageCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type TopicCountOutputType
   */

  export type TopicCountOutputType = {
    notes: number
    links: number
    attachments: number
    images: number
    recently_deleted_notes: number
    recently_deleted_images: number
  }

  export type TopicCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    notes?: boolean | TopicCountOutputTypeCountNotesArgs
    links?: boolean | TopicCountOutputTypeCountLinksArgs
    attachments?: boolean | TopicCountOutputTypeCountAttachmentsArgs
    images?: boolean | TopicCountOutputTypeCountImagesArgs
    recently_deleted_notes?: boolean | TopicCountOutputTypeCountRecently_deleted_notesArgs
    recently_deleted_images?: boolean | TopicCountOutputTypeCountRecently_deleted_imagesArgs
  }

  // Custom InputTypes
  /**
   * TopicCountOutputType without action
   */
  export type TopicCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TopicCountOutputType
     */
    select?: TopicCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TopicCountOutputType without action
   */
  export type TopicCountOutputTypeCountNotesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NoteWhereInput
  }

  /**
   * TopicCountOutputType without action
   */
  export type TopicCountOutputTypeCountLinksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LinkWhereInput
  }

  /**
   * TopicCountOutputType without action
   */
  export type TopicCountOutputTypeCountAttachmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AttachmentWhereInput
  }

  /**
   * TopicCountOutputType without action
   */
  export type TopicCountOutputTypeCountImagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ImageWhereInput
  }

  /**
   * TopicCountOutputType without action
   */
  export type TopicCountOutputTypeCountRecently_deleted_notesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Recently_Deleted_NoteWhereInput
  }

  /**
   * TopicCountOutputType without action
   */
  export type TopicCountOutputTypeCountRecently_deleted_imagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Recently_Deleted_ImageWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Topic
   */

  export type AggregateTopic = {
    _count: TopicCountAggregateOutputType | null
    _min: TopicMinAggregateOutputType | null
    _max: TopicMaxAggregateOutputType | null
  }

  export type TopicMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    imageUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TopicMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    imageUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TopicCountAggregateOutputType = {
    id: number
    title: number
    description: number
    imageUrl: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TopicMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    imageUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TopicMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    imageUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TopicCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    imageUrl?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TopicAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Topic to aggregate.
     */
    where?: TopicWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Topics to fetch.
     */
    orderBy?: TopicOrderByWithRelationInput | TopicOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TopicWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Topics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Topics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Topics
    **/
    _count?: true | TopicCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TopicMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TopicMaxAggregateInputType
  }

  export type GetTopicAggregateType<T extends TopicAggregateArgs> = {
        [P in keyof T & keyof AggregateTopic]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTopic[P]>
      : GetScalarType<T[P], AggregateTopic[P]>
  }




  export type TopicGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TopicWhereInput
    orderBy?: TopicOrderByWithAggregationInput | TopicOrderByWithAggregationInput[]
    by: TopicScalarFieldEnum[] | TopicScalarFieldEnum
    having?: TopicScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TopicCountAggregateInputType | true
    _min?: TopicMinAggregateInputType
    _max?: TopicMaxAggregateInputType
  }

  export type TopicGroupByOutputType = {
    id: string
    title: string
    description: string | null
    imageUrl: string | null
    createdAt: Date
    updatedAt: Date
    _count: TopicCountAggregateOutputType | null
    _min: TopicMinAggregateOutputType | null
    _max: TopicMaxAggregateOutputType | null
  }

  type GetTopicGroupByPayload<T extends TopicGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TopicGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TopicGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TopicGroupByOutputType[P]>
            : GetScalarType<T[P], TopicGroupByOutputType[P]>
        }
      >
    >


  export type TopicSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    imageUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    notes?: boolean | Topic$notesArgs<ExtArgs>
    links?: boolean | Topic$linksArgs<ExtArgs>
    attachments?: boolean | Topic$attachmentsArgs<ExtArgs>
    images?: boolean | Topic$imagesArgs<ExtArgs>
    recently_deleted_notes?: boolean | Topic$recently_deleted_notesArgs<ExtArgs>
    recently_deleted_images?: boolean | Topic$recently_deleted_imagesArgs<ExtArgs>
    _count?: boolean | TopicCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["topic"]>

  export type TopicSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    imageUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type TopicInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    notes?: boolean | Topic$notesArgs<ExtArgs>
    links?: boolean | Topic$linksArgs<ExtArgs>
    attachments?: boolean | Topic$attachmentsArgs<ExtArgs>
    images?: boolean | Topic$imagesArgs<ExtArgs>
    recently_deleted_notes?: boolean | Topic$recently_deleted_notesArgs<ExtArgs>
    recently_deleted_images?: boolean | Topic$recently_deleted_imagesArgs<ExtArgs>
    _count?: boolean | TopicCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $TopicPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Topic"
    objects: {
      notes: Prisma.$NotePayload<ExtArgs>[]
      links: Prisma.$LinkPayload<ExtArgs>[]
      attachments: Prisma.$AttachmentPayload<ExtArgs>[]
      images: Prisma.$ImagePayload<ExtArgs>[]
      recently_deleted_notes: Prisma.$Recently_Deleted_NotePayload<ExtArgs>[]
      recently_deleted_images: Prisma.$Recently_Deleted_ImagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string | null
      imageUrl: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["topic"]>
    composites: {}
  }


  type TopicGetPayload<S extends boolean | null | undefined | TopicDefaultArgs> = $Result.GetResult<Prisma.$TopicPayload, S>

  type TopicCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TopicFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TopicCountAggregateInputType | true
    }

  export interface TopicDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Topic'], meta: { name: 'Topic' } }
    /**
     * Find zero or one Topic that matches the filter.
     * @param {TopicFindUniqueArgs} args - Arguments to find a Topic
     * @example
     * // Get one Topic
     * const topic = await prisma.topic.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends TopicFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, TopicFindUniqueArgs<ExtArgs>>
    ): Prisma__TopicClient<$Result.GetResult<Prisma.$TopicPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Topic that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {TopicFindUniqueOrThrowArgs} args - Arguments to find a Topic
     * @example
     * // Get one Topic
     * const topic = await prisma.topic.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends TopicFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TopicFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__TopicClient<$Result.GetResult<Prisma.$TopicPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Topic that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TopicFindFirstArgs} args - Arguments to find a Topic
     * @example
     * // Get one Topic
     * const topic = await prisma.topic.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends TopicFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, TopicFindFirstArgs<ExtArgs>>
    ): Prisma__TopicClient<$Result.GetResult<Prisma.$TopicPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Topic that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TopicFindFirstOrThrowArgs} args - Arguments to find a Topic
     * @example
     * // Get one Topic
     * const topic = await prisma.topic.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends TopicFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TopicFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__TopicClient<$Result.GetResult<Prisma.$TopicPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Topics that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TopicFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Topics
     * const topics = await prisma.topic.findMany()
     * 
     * // Get first 10 Topics
     * const topics = await prisma.topic.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const topicWithIdOnly = await prisma.topic.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends TopicFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TopicFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TopicPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Topic.
     * @param {TopicCreateArgs} args - Arguments to create a Topic.
     * @example
     * // Create one Topic
     * const Topic = await prisma.topic.create({
     *   data: {
     *     // ... data to create a Topic
     *   }
     * })
     * 
    **/
    create<T extends TopicCreateArgs<ExtArgs>>(
      args: SelectSubset<T, TopicCreateArgs<ExtArgs>>
    ): Prisma__TopicClient<$Result.GetResult<Prisma.$TopicPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Topics.
     * @param {TopicCreateManyArgs} args - Arguments to create many Topics.
     * @example
     * // Create many Topics
     * const topic = await prisma.topic.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends TopicCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TopicCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Topic.
     * @param {TopicDeleteArgs} args - Arguments to delete one Topic.
     * @example
     * // Delete one Topic
     * const Topic = await prisma.topic.delete({
     *   where: {
     *     // ... filter to delete one Topic
     *   }
     * })
     * 
    **/
    delete<T extends TopicDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, TopicDeleteArgs<ExtArgs>>
    ): Prisma__TopicClient<$Result.GetResult<Prisma.$TopicPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Topic.
     * @param {TopicUpdateArgs} args - Arguments to update one Topic.
     * @example
     * // Update one Topic
     * const topic = await prisma.topic.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends TopicUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, TopicUpdateArgs<ExtArgs>>
    ): Prisma__TopicClient<$Result.GetResult<Prisma.$TopicPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Topics.
     * @param {TopicDeleteManyArgs} args - Arguments to filter Topics to delete.
     * @example
     * // Delete a few Topics
     * const { count } = await prisma.topic.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends TopicDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TopicDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Topics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TopicUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Topics
     * const topic = await prisma.topic.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends TopicUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, TopicUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Topic.
     * @param {TopicUpsertArgs} args - Arguments to update or create a Topic.
     * @example
     * // Update or create a Topic
     * const topic = await prisma.topic.upsert({
     *   create: {
     *     // ... data to create a Topic
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Topic we want to update
     *   }
     * })
    **/
    upsert<T extends TopicUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, TopicUpsertArgs<ExtArgs>>
    ): Prisma__TopicClient<$Result.GetResult<Prisma.$TopicPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Topics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TopicCountArgs} args - Arguments to filter Topics to count.
     * @example
     * // Count the number of Topics
     * const count = await prisma.topic.count({
     *   where: {
     *     // ... the filter for the Topics we want to count
     *   }
     * })
    **/
    count<T extends TopicCountArgs>(
      args?: Subset<T, TopicCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TopicCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Topic.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TopicAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TopicAggregateArgs>(args: Subset<T, TopicAggregateArgs>): Prisma.PrismaPromise<GetTopicAggregateType<T>>

    /**
     * Group by Topic.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TopicGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TopicGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TopicGroupByArgs['orderBy'] }
        : { orderBy?: TopicGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TopicGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTopicGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Topic model
   */
  readonly fields: TopicFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Topic.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TopicClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    notes<T extends Topic$notesArgs<ExtArgs> = {}>(args?: Subset<T, Topic$notesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotePayload<ExtArgs>, T, 'findMany'> | Null>;

    links<T extends Topic$linksArgs<ExtArgs> = {}>(args?: Subset<T, Topic$linksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LinkPayload<ExtArgs>, T, 'findMany'> | Null>;

    attachments<T extends Topic$attachmentsArgs<ExtArgs> = {}>(args?: Subset<T, Topic$attachmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttachmentPayload<ExtArgs>, T, 'findMany'> | Null>;

    images<T extends Topic$imagesArgs<ExtArgs> = {}>(args?: Subset<T, Topic$imagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, 'findMany'> | Null>;

    recently_deleted_notes<T extends Topic$recently_deleted_notesArgs<ExtArgs> = {}>(args?: Subset<T, Topic$recently_deleted_notesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Recently_Deleted_NotePayload<ExtArgs>, T, 'findMany'> | Null>;

    recently_deleted_images<T extends Topic$recently_deleted_imagesArgs<ExtArgs> = {}>(args?: Subset<T, Topic$recently_deleted_imagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Recently_Deleted_ImagePayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Topic model
   */ 
  interface TopicFieldRefs {
    readonly id: FieldRef<"Topic", 'String'>
    readonly title: FieldRef<"Topic", 'String'>
    readonly description: FieldRef<"Topic", 'String'>
    readonly imageUrl: FieldRef<"Topic", 'String'>
    readonly createdAt: FieldRef<"Topic", 'DateTime'>
    readonly updatedAt: FieldRef<"Topic", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Topic findUnique
   */
  export type TopicFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Topic
     */
    select?: TopicSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopicInclude<ExtArgs> | null
    /**
     * Filter, which Topic to fetch.
     */
    where: TopicWhereUniqueInput
  }

  /**
   * Topic findUniqueOrThrow
   */
  export type TopicFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Topic
     */
    select?: TopicSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopicInclude<ExtArgs> | null
    /**
     * Filter, which Topic to fetch.
     */
    where: TopicWhereUniqueInput
  }

  /**
   * Topic findFirst
   */
  export type TopicFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Topic
     */
    select?: TopicSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopicInclude<ExtArgs> | null
    /**
     * Filter, which Topic to fetch.
     */
    where?: TopicWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Topics to fetch.
     */
    orderBy?: TopicOrderByWithRelationInput | TopicOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Topics.
     */
    cursor?: TopicWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Topics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Topics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Topics.
     */
    distinct?: TopicScalarFieldEnum | TopicScalarFieldEnum[]
  }

  /**
   * Topic findFirstOrThrow
   */
  export type TopicFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Topic
     */
    select?: TopicSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopicInclude<ExtArgs> | null
    /**
     * Filter, which Topic to fetch.
     */
    where?: TopicWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Topics to fetch.
     */
    orderBy?: TopicOrderByWithRelationInput | TopicOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Topics.
     */
    cursor?: TopicWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Topics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Topics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Topics.
     */
    distinct?: TopicScalarFieldEnum | TopicScalarFieldEnum[]
  }

  /**
   * Topic findMany
   */
  export type TopicFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Topic
     */
    select?: TopicSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopicInclude<ExtArgs> | null
    /**
     * Filter, which Topics to fetch.
     */
    where?: TopicWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Topics to fetch.
     */
    orderBy?: TopicOrderByWithRelationInput | TopicOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Topics.
     */
    cursor?: TopicWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Topics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Topics.
     */
    skip?: number
    distinct?: TopicScalarFieldEnum | TopicScalarFieldEnum[]
  }

  /**
   * Topic create
   */
  export type TopicCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Topic
     */
    select?: TopicSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopicInclude<ExtArgs> | null
    /**
     * The data needed to create a Topic.
     */
    data: XOR<TopicCreateInput, TopicUncheckedCreateInput>
  }

  /**
   * Topic createMany
   */
  export type TopicCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Topics.
     */
    data: TopicCreateManyInput | TopicCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Topic update
   */
  export type TopicUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Topic
     */
    select?: TopicSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopicInclude<ExtArgs> | null
    /**
     * The data needed to update a Topic.
     */
    data: XOR<TopicUpdateInput, TopicUncheckedUpdateInput>
    /**
     * Choose, which Topic to update.
     */
    where: TopicWhereUniqueInput
  }

  /**
   * Topic updateMany
   */
  export type TopicUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Topics.
     */
    data: XOR<TopicUpdateManyMutationInput, TopicUncheckedUpdateManyInput>
    /**
     * Filter which Topics to update
     */
    where?: TopicWhereInput
  }

  /**
   * Topic upsert
   */
  export type TopicUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Topic
     */
    select?: TopicSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopicInclude<ExtArgs> | null
    /**
     * The filter to search for the Topic to update in case it exists.
     */
    where: TopicWhereUniqueInput
    /**
     * In case the Topic found by the `where` argument doesn't exist, create a new Topic with this data.
     */
    create: XOR<TopicCreateInput, TopicUncheckedCreateInput>
    /**
     * In case the Topic was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TopicUpdateInput, TopicUncheckedUpdateInput>
  }

  /**
   * Topic delete
   */
  export type TopicDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Topic
     */
    select?: TopicSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopicInclude<ExtArgs> | null
    /**
     * Filter which Topic to delete.
     */
    where: TopicWhereUniqueInput
  }

  /**
   * Topic deleteMany
   */
  export type TopicDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Topics to delete
     */
    where?: TopicWhereInput
  }

  /**
   * Topic.notes
   */
  export type Topic$notesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteInclude<ExtArgs> | null
    where?: NoteWhereInput
    orderBy?: NoteOrderByWithRelationInput | NoteOrderByWithRelationInput[]
    cursor?: NoteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NoteScalarFieldEnum | NoteScalarFieldEnum[]
  }

  /**
   * Topic.links
   */
  export type Topic$linksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Link
     */
    select?: LinkSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkInclude<ExtArgs> | null
    where?: LinkWhereInput
    orderBy?: LinkOrderByWithRelationInput | LinkOrderByWithRelationInput[]
    cursor?: LinkWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LinkScalarFieldEnum | LinkScalarFieldEnum[]
  }

  /**
   * Topic.attachments
   */
  export type Topic$attachmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attachment
     */
    select?: AttachmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttachmentInclude<ExtArgs> | null
    where?: AttachmentWhereInput
    orderBy?: AttachmentOrderByWithRelationInput | AttachmentOrderByWithRelationInput[]
    cursor?: AttachmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AttachmentScalarFieldEnum | AttachmentScalarFieldEnum[]
  }

  /**
   * Topic.images
   */
  export type Topic$imagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    where?: ImageWhereInput
    orderBy?: ImageOrderByWithRelationInput | ImageOrderByWithRelationInput[]
    cursor?: ImageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ImageScalarFieldEnum | ImageScalarFieldEnum[]
  }

  /**
   * Topic.recently_deleted_notes
   */
  export type Topic$recently_deleted_notesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recently_Deleted_Note
     */
    select?: Recently_Deleted_NoteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Recently_Deleted_NoteInclude<ExtArgs> | null
    where?: Recently_Deleted_NoteWhereInput
    orderBy?: Recently_Deleted_NoteOrderByWithRelationInput | Recently_Deleted_NoteOrderByWithRelationInput[]
    cursor?: Recently_Deleted_NoteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Recently_Deleted_NoteScalarFieldEnum | Recently_Deleted_NoteScalarFieldEnum[]
  }

  /**
   * Topic.recently_deleted_images
   */
  export type Topic$recently_deleted_imagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recently_Deleted_Image
     */
    select?: Recently_Deleted_ImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Recently_Deleted_ImageInclude<ExtArgs> | null
    where?: Recently_Deleted_ImageWhereInput
    orderBy?: Recently_Deleted_ImageOrderByWithRelationInput | Recently_Deleted_ImageOrderByWithRelationInput[]
    cursor?: Recently_Deleted_ImageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Recently_Deleted_ImageScalarFieldEnum | Recently_Deleted_ImageScalarFieldEnum[]
  }

  /**
   * Topic without action
   */
  export type TopicDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Topic
     */
    select?: TopicSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopicInclude<ExtArgs> | null
  }


  /**
   * Model Note
   */

  export type AggregateNote = {
    _count: NoteCountAggregateOutputType | null
    _min: NoteMinAggregateOutputType | null
    _max: NoteMaxAggregateOutputType | null
  }

  export type NoteMinAggregateOutputType = {
    id: string | null
    title: string | null
    content: string | null
    topicId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type NoteMaxAggregateOutputType = {
    id: string | null
    title: string | null
    content: string | null
    topicId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type NoteCountAggregateOutputType = {
    id: number
    title: number
    content: number
    topicId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type NoteMinAggregateInputType = {
    id?: true
    title?: true
    content?: true
    topicId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type NoteMaxAggregateInputType = {
    id?: true
    title?: true
    content?: true
    topicId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type NoteCountAggregateInputType = {
    id?: true
    title?: true
    content?: true
    topicId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type NoteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Note to aggregate.
     */
    where?: NoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notes to fetch.
     */
    orderBy?: NoteOrderByWithRelationInput | NoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Notes
    **/
    _count?: true | NoteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NoteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NoteMaxAggregateInputType
  }

  export type GetNoteAggregateType<T extends NoteAggregateArgs> = {
        [P in keyof T & keyof AggregateNote]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNote[P]>
      : GetScalarType<T[P], AggregateNote[P]>
  }




  export type NoteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NoteWhereInput
    orderBy?: NoteOrderByWithAggregationInput | NoteOrderByWithAggregationInput[]
    by: NoteScalarFieldEnum[] | NoteScalarFieldEnum
    having?: NoteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NoteCountAggregateInputType | true
    _min?: NoteMinAggregateInputType
    _max?: NoteMaxAggregateInputType
  }

  export type NoteGroupByOutputType = {
    id: string
    title: string
    content: string
    topicId: string
    createdAt: Date
    updatedAt: Date
    _count: NoteCountAggregateOutputType | null
    _min: NoteMinAggregateOutputType | null
    _max: NoteMaxAggregateOutputType | null
  }

  type GetNoteGroupByPayload<T extends NoteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NoteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NoteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NoteGroupByOutputType[P]>
            : GetScalarType<T[P], NoteGroupByOutputType[P]>
        }
      >
    >


  export type NoteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    topicId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    topic?: boolean | TopicDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["note"]>

  export type NoteSelectScalar = {
    id?: boolean
    title?: boolean
    content?: boolean
    topicId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type NoteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    topic?: boolean | TopicDefaultArgs<ExtArgs>
  }


  export type $NotePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Note"
    objects: {
      topic: Prisma.$TopicPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      content: string
      topicId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["note"]>
    composites: {}
  }


  type NoteGetPayload<S extends boolean | null | undefined | NoteDefaultArgs> = $Result.GetResult<Prisma.$NotePayload, S>

  type NoteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<NoteFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: NoteCountAggregateInputType | true
    }

  export interface NoteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Note'], meta: { name: 'Note' } }
    /**
     * Find zero or one Note that matches the filter.
     * @param {NoteFindUniqueArgs} args - Arguments to find a Note
     * @example
     * // Get one Note
     * const note = await prisma.note.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends NoteFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, NoteFindUniqueArgs<ExtArgs>>
    ): Prisma__NoteClient<$Result.GetResult<Prisma.$NotePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Note that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {NoteFindUniqueOrThrowArgs} args - Arguments to find a Note
     * @example
     * // Get one Note
     * const note = await prisma.note.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends NoteFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, NoteFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__NoteClient<$Result.GetResult<Prisma.$NotePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Note that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoteFindFirstArgs} args - Arguments to find a Note
     * @example
     * // Get one Note
     * const note = await prisma.note.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends NoteFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, NoteFindFirstArgs<ExtArgs>>
    ): Prisma__NoteClient<$Result.GetResult<Prisma.$NotePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Note that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoteFindFirstOrThrowArgs} args - Arguments to find a Note
     * @example
     * // Get one Note
     * const note = await prisma.note.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends NoteFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, NoteFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__NoteClient<$Result.GetResult<Prisma.$NotePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Notes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Notes
     * const notes = await prisma.note.findMany()
     * 
     * // Get first 10 Notes
     * const notes = await prisma.note.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const noteWithIdOnly = await prisma.note.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends NoteFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, NoteFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Note.
     * @param {NoteCreateArgs} args - Arguments to create a Note.
     * @example
     * // Create one Note
     * const Note = await prisma.note.create({
     *   data: {
     *     // ... data to create a Note
     *   }
     * })
     * 
    **/
    create<T extends NoteCreateArgs<ExtArgs>>(
      args: SelectSubset<T, NoteCreateArgs<ExtArgs>>
    ): Prisma__NoteClient<$Result.GetResult<Prisma.$NotePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Notes.
     * @param {NoteCreateManyArgs} args - Arguments to create many Notes.
     * @example
     * // Create many Notes
     * const note = await prisma.note.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends NoteCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, NoteCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Note.
     * @param {NoteDeleteArgs} args - Arguments to delete one Note.
     * @example
     * // Delete one Note
     * const Note = await prisma.note.delete({
     *   where: {
     *     // ... filter to delete one Note
     *   }
     * })
     * 
    **/
    delete<T extends NoteDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, NoteDeleteArgs<ExtArgs>>
    ): Prisma__NoteClient<$Result.GetResult<Prisma.$NotePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Note.
     * @param {NoteUpdateArgs} args - Arguments to update one Note.
     * @example
     * // Update one Note
     * const note = await prisma.note.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends NoteUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, NoteUpdateArgs<ExtArgs>>
    ): Prisma__NoteClient<$Result.GetResult<Prisma.$NotePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Notes.
     * @param {NoteDeleteManyArgs} args - Arguments to filter Notes to delete.
     * @example
     * // Delete a few Notes
     * const { count } = await prisma.note.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends NoteDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, NoteDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Notes
     * const note = await prisma.note.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends NoteUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, NoteUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Note.
     * @param {NoteUpsertArgs} args - Arguments to update or create a Note.
     * @example
     * // Update or create a Note
     * const note = await prisma.note.upsert({
     *   create: {
     *     // ... data to create a Note
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Note we want to update
     *   }
     * })
    **/
    upsert<T extends NoteUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, NoteUpsertArgs<ExtArgs>>
    ): Prisma__NoteClient<$Result.GetResult<Prisma.$NotePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Notes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoteCountArgs} args - Arguments to filter Notes to count.
     * @example
     * // Count the number of Notes
     * const count = await prisma.note.count({
     *   where: {
     *     // ... the filter for the Notes we want to count
     *   }
     * })
    **/
    count<T extends NoteCountArgs>(
      args?: Subset<T, NoteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NoteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Note.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends NoteAggregateArgs>(args: Subset<T, NoteAggregateArgs>): Prisma.PrismaPromise<GetNoteAggregateType<T>>

    /**
     * Group by Note.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoteGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends NoteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NoteGroupByArgs['orderBy'] }
        : { orderBy?: NoteGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, NoteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNoteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Note model
   */
  readonly fields: NoteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Note.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NoteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    topic<T extends TopicDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TopicDefaultArgs<ExtArgs>>): Prisma__TopicClient<$Result.GetResult<Prisma.$TopicPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Note model
   */ 
  interface NoteFieldRefs {
    readonly id: FieldRef<"Note", 'String'>
    readonly title: FieldRef<"Note", 'String'>
    readonly content: FieldRef<"Note", 'String'>
    readonly topicId: FieldRef<"Note", 'String'>
    readonly createdAt: FieldRef<"Note", 'DateTime'>
    readonly updatedAt: FieldRef<"Note", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Note findUnique
   */
  export type NoteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteInclude<ExtArgs> | null
    /**
     * Filter, which Note to fetch.
     */
    where: NoteWhereUniqueInput
  }

  /**
   * Note findUniqueOrThrow
   */
  export type NoteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteInclude<ExtArgs> | null
    /**
     * Filter, which Note to fetch.
     */
    where: NoteWhereUniqueInput
  }

  /**
   * Note findFirst
   */
  export type NoteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteInclude<ExtArgs> | null
    /**
     * Filter, which Note to fetch.
     */
    where?: NoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notes to fetch.
     */
    orderBy?: NoteOrderByWithRelationInput | NoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notes.
     */
    cursor?: NoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notes.
     */
    distinct?: NoteScalarFieldEnum | NoteScalarFieldEnum[]
  }

  /**
   * Note findFirstOrThrow
   */
  export type NoteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteInclude<ExtArgs> | null
    /**
     * Filter, which Note to fetch.
     */
    where?: NoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notes to fetch.
     */
    orderBy?: NoteOrderByWithRelationInput | NoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notes.
     */
    cursor?: NoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notes.
     */
    distinct?: NoteScalarFieldEnum | NoteScalarFieldEnum[]
  }

  /**
   * Note findMany
   */
  export type NoteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteInclude<ExtArgs> | null
    /**
     * Filter, which Notes to fetch.
     */
    where?: NoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notes to fetch.
     */
    orderBy?: NoteOrderByWithRelationInput | NoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Notes.
     */
    cursor?: NoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notes.
     */
    skip?: number
    distinct?: NoteScalarFieldEnum | NoteScalarFieldEnum[]
  }

  /**
   * Note create
   */
  export type NoteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteInclude<ExtArgs> | null
    /**
     * The data needed to create a Note.
     */
    data: XOR<NoteCreateInput, NoteUncheckedCreateInput>
  }

  /**
   * Note createMany
   */
  export type NoteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Notes.
     */
    data: NoteCreateManyInput | NoteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Note update
   */
  export type NoteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteInclude<ExtArgs> | null
    /**
     * The data needed to update a Note.
     */
    data: XOR<NoteUpdateInput, NoteUncheckedUpdateInput>
    /**
     * Choose, which Note to update.
     */
    where: NoteWhereUniqueInput
  }

  /**
   * Note updateMany
   */
  export type NoteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Notes.
     */
    data: XOR<NoteUpdateManyMutationInput, NoteUncheckedUpdateManyInput>
    /**
     * Filter which Notes to update
     */
    where?: NoteWhereInput
  }

  /**
   * Note upsert
   */
  export type NoteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteInclude<ExtArgs> | null
    /**
     * The filter to search for the Note to update in case it exists.
     */
    where: NoteWhereUniqueInput
    /**
     * In case the Note found by the `where` argument doesn't exist, create a new Note with this data.
     */
    create: XOR<NoteCreateInput, NoteUncheckedCreateInput>
    /**
     * In case the Note was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NoteUpdateInput, NoteUncheckedUpdateInput>
  }

  /**
   * Note delete
   */
  export type NoteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteInclude<ExtArgs> | null
    /**
     * Filter which Note to delete.
     */
    where: NoteWhereUniqueInput
  }

  /**
   * Note deleteMany
   */
  export type NoteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notes to delete
     */
    where?: NoteWhereInput
  }

  /**
   * Note without action
   */
  export type NoteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteInclude<ExtArgs> | null
  }


  /**
   * Model Link
   */

  export type AggregateLink = {
    _count: LinkCountAggregateOutputType | null
    _min: LinkMinAggregateOutputType | null
    _max: LinkMaxAggregateOutputType | null
  }

  export type LinkMinAggregateOutputType = {
    id: string | null
    url: string | null
    description: string | null
    topicId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LinkMaxAggregateOutputType = {
    id: string | null
    url: string | null
    description: string | null
    topicId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LinkCountAggregateOutputType = {
    id: number
    url: number
    description: number
    topicId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type LinkMinAggregateInputType = {
    id?: true
    url?: true
    description?: true
    topicId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LinkMaxAggregateInputType = {
    id?: true
    url?: true
    description?: true
    topicId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LinkCountAggregateInputType = {
    id?: true
    url?: true
    description?: true
    topicId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type LinkAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Link to aggregate.
     */
    where?: LinkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Links to fetch.
     */
    orderBy?: LinkOrderByWithRelationInput | LinkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LinkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Links from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Links.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Links
    **/
    _count?: true | LinkCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LinkMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LinkMaxAggregateInputType
  }

  export type GetLinkAggregateType<T extends LinkAggregateArgs> = {
        [P in keyof T & keyof AggregateLink]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLink[P]>
      : GetScalarType<T[P], AggregateLink[P]>
  }




  export type LinkGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LinkWhereInput
    orderBy?: LinkOrderByWithAggregationInput | LinkOrderByWithAggregationInput[]
    by: LinkScalarFieldEnum[] | LinkScalarFieldEnum
    having?: LinkScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LinkCountAggregateInputType | true
    _min?: LinkMinAggregateInputType
    _max?: LinkMaxAggregateInputType
  }

  export type LinkGroupByOutputType = {
    id: string
    url: string
    description: string | null
    topicId: string
    createdAt: Date
    updatedAt: Date
    _count: LinkCountAggregateOutputType | null
    _min: LinkMinAggregateOutputType | null
    _max: LinkMaxAggregateOutputType | null
  }

  type GetLinkGroupByPayload<T extends LinkGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LinkGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LinkGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LinkGroupByOutputType[P]>
            : GetScalarType<T[P], LinkGroupByOutputType[P]>
        }
      >
    >


  export type LinkSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    description?: boolean
    topicId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    topic?: boolean | TopicDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["link"]>

  export type LinkSelectScalar = {
    id?: boolean
    url?: boolean
    description?: boolean
    topicId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type LinkInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    topic?: boolean | TopicDefaultArgs<ExtArgs>
  }


  export type $LinkPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Link"
    objects: {
      topic: Prisma.$TopicPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      url: string
      description: string | null
      topicId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["link"]>
    composites: {}
  }


  type LinkGetPayload<S extends boolean | null | undefined | LinkDefaultArgs> = $Result.GetResult<Prisma.$LinkPayload, S>

  type LinkCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<LinkFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: LinkCountAggregateInputType | true
    }

  export interface LinkDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Link'], meta: { name: 'Link' } }
    /**
     * Find zero or one Link that matches the filter.
     * @param {LinkFindUniqueArgs} args - Arguments to find a Link
     * @example
     * // Get one Link
     * const link = await prisma.link.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends LinkFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, LinkFindUniqueArgs<ExtArgs>>
    ): Prisma__LinkClient<$Result.GetResult<Prisma.$LinkPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Link that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {LinkFindUniqueOrThrowArgs} args - Arguments to find a Link
     * @example
     * // Get one Link
     * const link = await prisma.link.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends LinkFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, LinkFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__LinkClient<$Result.GetResult<Prisma.$LinkPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Link that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LinkFindFirstArgs} args - Arguments to find a Link
     * @example
     * // Get one Link
     * const link = await prisma.link.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends LinkFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, LinkFindFirstArgs<ExtArgs>>
    ): Prisma__LinkClient<$Result.GetResult<Prisma.$LinkPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Link that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LinkFindFirstOrThrowArgs} args - Arguments to find a Link
     * @example
     * // Get one Link
     * const link = await prisma.link.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends LinkFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, LinkFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__LinkClient<$Result.GetResult<Prisma.$LinkPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Links that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LinkFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Links
     * const links = await prisma.link.findMany()
     * 
     * // Get first 10 Links
     * const links = await prisma.link.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const linkWithIdOnly = await prisma.link.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends LinkFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, LinkFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LinkPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Link.
     * @param {LinkCreateArgs} args - Arguments to create a Link.
     * @example
     * // Create one Link
     * const Link = await prisma.link.create({
     *   data: {
     *     // ... data to create a Link
     *   }
     * })
     * 
    **/
    create<T extends LinkCreateArgs<ExtArgs>>(
      args: SelectSubset<T, LinkCreateArgs<ExtArgs>>
    ): Prisma__LinkClient<$Result.GetResult<Prisma.$LinkPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Links.
     * @param {LinkCreateManyArgs} args - Arguments to create many Links.
     * @example
     * // Create many Links
     * const link = await prisma.link.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends LinkCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, LinkCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Link.
     * @param {LinkDeleteArgs} args - Arguments to delete one Link.
     * @example
     * // Delete one Link
     * const Link = await prisma.link.delete({
     *   where: {
     *     // ... filter to delete one Link
     *   }
     * })
     * 
    **/
    delete<T extends LinkDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, LinkDeleteArgs<ExtArgs>>
    ): Prisma__LinkClient<$Result.GetResult<Prisma.$LinkPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Link.
     * @param {LinkUpdateArgs} args - Arguments to update one Link.
     * @example
     * // Update one Link
     * const link = await prisma.link.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends LinkUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, LinkUpdateArgs<ExtArgs>>
    ): Prisma__LinkClient<$Result.GetResult<Prisma.$LinkPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Links.
     * @param {LinkDeleteManyArgs} args - Arguments to filter Links to delete.
     * @example
     * // Delete a few Links
     * const { count } = await prisma.link.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends LinkDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, LinkDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Links.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LinkUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Links
     * const link = await prisma.link.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends LinkUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, LinkUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Link.
     * @param {LinkUpsertArgs} args - Arguments to update or create a Link.
     * @example
     * // Update or create a Link
     * const link = await prisma.link.upsert({
     *   create: {
     *     // ... data to create a Link
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Link we want to update
     *   }
     * })
    **/
    upsert<T extends LinkUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, LinkUpsertArgs<ExtArgs>>
    ): Prisma__LinkClient<$Result.GetResult<Prisma.$LinkPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Links.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LinkCountArgs} args - Arguments to filter Links to count.
     * @example
     * // Count the number of Links
     * const count = await prisma.link.count({
     *   where: {
     *     // ... the filter for the Links we want to count
     *   }
     * })
    **/
    count<T extends LinkCountArgs>(
      args?: Subset<T, LinkCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LinkCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Link.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LinkAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LinkAggregateArgs>(args: Subset<T, LinkAggregateArgs>): Prisma.PrismaPromise<GetLinkAggregateType<T>>

    /**
     * Group by Link.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LinkGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LinkGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LinkGroupByArgs['orderBy'] }
        : { orderBy?: LinkGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LinkGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLinkGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Link model
   */
  readonly fields: LinkFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Link.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LinkClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    topic<T extends TopicDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TopicDefaultArgs<ExtArgs>>): Prisma__TopicClient<$Result.GetResult<Prisma.$TopicPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Link model
   */ 
  interface LinkFieldRefs {
    readonly id: FieldRef<"Link", 'String'>
    readonly url: FieldRef<"Link", 'String'>
    readonly description: FieldRef<"Link", 'String'>
    readonly topicId: FieldRef<"Link", 'String'>
    readonly createdAt: FieldRef<"Link", 'DateTime'>
    readonly updatedAt: FieldRef<"Link", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Link findUnique
   */
  export type LinkFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Link
     */
    select?: LinkSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkInclude<ExtArgs> | null
    /**
     * Filter, which Link to fetch.
     */
    where: LinkWhereUniqueInput
  }

  /**
   * Link findUniqueOrThrow
   */
  export type LinkFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Link
     */
    select?: LinkSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkInclude<ExtArgs> | null
    /**
     * Filter, which Link to fetch.
     */
    where: LinkWhereUniqueInput
  }

  /**
   * Link findFirst
   */
  export type LinkFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Link
     */
    select?: LinkSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkInclude<ExtArgs> | null
    /**
     * Filter, which Link to fetch.
     */
    where?: LinkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Links to fetch.
     */
    orderBy?: LinkOrderByWithRelationInput | LinkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Links.
     */
    cursor?: LinkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Links from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Links.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Links.
     */
    distinct?: LinkScalarFieldEnum | LinkScalarFieldEnum[]
  }

  /**
   * Link findFirstOrThrow
   */
  export type LinkFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Link
     */
    select?: LinkSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkInclude<ExtArgs> | null
    /**
     * Filter, which Link to fetch.
     */
    where?: LinkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Links to fetch.
     */
    orderBy?: LinkOrderByWithRelationInput | LinkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Links.
     */
    cursor?: LinkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Links from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Links.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Links.
     */
    distinct?: LinkScalarFieldEnum | LinkScalarFieldEnum[]
  }

  /**
   * Link findMany
   */
  export type LinkFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Link
     */
    select?: LinkSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkInclude<ExtArgs> | null
    /**
     * Filter, which Links to fetch.
     */
    where?: LinkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Links to fetch.
     */
    orderBy?: LinkOrderByWithRelationInput | LinkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Links.
     */
    cursor?: LinkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Links from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Links.
     */
    skip?: number
    distinct?: LinkScalarFieldEnum | LinkScalarFieldEnum[]
  }

  /**
   * Link create
   */
  export type LinkCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Link
     */
    select?: LinkSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkInclude<ExtArgs> | null
    /**
     * The data needed to create a Link.
     */
    data: XOR<LinkCreateInput, LinkUncheckedCreateInput>
  }

  /**
   * Link createMany
   */
  export type LinkCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Links.
     */
    data: LinkCreateManyInput | LinkCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Link update
   */
  export type LinkUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Link
     */
    select?: LinkSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkInclude<ExtArgs> | null
    /**
     * The data needed to update a Link.
     */
    data: XOR<LinkUpdateInput, LinkUncheckedUpdateInput>
    /**
     * Choose, which Link to update.
     */
    where: LinkWhereUniqueInput
  }

  /**
   * Link updateMany
   */
  export type LinkUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Links.
     */
    data: XOR<LinkUpdateManyMutationInput, LinkUncheckedUpdateManyInput>
    /**
     * Filter which Links to update
     */
    where?: LinkWhereInput
  }

  /**
   * Link upsert
   */
  export type LinkUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Link
     */
    select?: LinkSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkInclude<ExtArgs> | null
    /**
     * The filter to search for the Link to update in case it exists.
     */
    where: LinkWhereUniqueInput
    /**
     * In case the Link found by the `where` argument doesn't exist, create a new Link with this data.
     */
    create: XOR<LinkCreateInput, LinkUncheckedCreateInput>
    /**
     * In case the Link was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LinkUpdateInput, LinkUncheckedUpdateInput>
  }

  /**
   * Link delete
   */
  export type LinkDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Link
     */
    select?: LinkSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkInclude<ExtArgs> | null
    /**
     * Filter which Link to delete.
     */
    where: LinkWhereUniqueInput
  }

  /**
   * Link deleteMany
   */
  export type LinkDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Links to delete
     */
    where?: LinkWhereInput
  }

  /**
   * Link without action
   */
  export type LinkDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Link
     */
    select?: LinkSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkInclude<ExtArgs> | null
  }


  /**
   * Model Attachment
   */

  export type AggregateAttachment = {
    _count: AttachmentCountAggregateOutputType | null
    _min: AttachmentMinAggregateOutputType | null
    _max: AttachmentMaxAggregateOutputType | null
  }

  export type AttachmentMinAggregateOutputType = {
    id: string | null
    fileUrl: string | null
    description: string | null
    topicId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AttachmentMaxAggregateOutputType = {
    id: string | null
    fileUrl: string | null
    description: string | null
    topicId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AttachmentCountAggregateOutputType = {
    id: number
    fileUrl: number
    description: number
    topicId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AttachmentMinAggregateInputType = {
    id?: true
    fileUrl?: true
    description?: true
    topicId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AttachmentMaxAggregateInputType = {
    id?: true
    fileUrl?: true
    description?: true
    topicId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AttachmentCountAggregateInputType = {
    id?: true
    fileUrl?: true
    description?: true
    topicId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AttachmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Attachment to aggregate.
     */
    where?: AttachmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attachments to fetch.
     */
    orderBy?: AttachmentOrderByWithRelationInput | AttachmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AttachmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attachments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attachments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Attachments
    **/
    _count?: true | AttachmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AttachmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AttachmentMaxAggregateInputType
  }

  export type GetAttachmentAggregateType<T extends AttachmentAggregateArgs> = {
        [P in keyof T & keyof AggregateAttachment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAttachment[P]>
      : GetScalarType<T[P], AggregateAttachment[P]>
  }




  export type AttachmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AttachmentWhereInput
    orderBy?: AttachmentOrderByWithAggregationInput | AttachmentOrderByWithAggregationInput[]
    by: AttachmentScalarFieldEnum[] | AttachmentScalarFieldEnum
    having?: AttachmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AttachmentCountAggregateInputType | true
    _min?: AttachmentMinAggregateInputType
    _max?: AttachmentMaxAggregateInputType
  }

  export type AttachmentGroupByOutputType = {
    id: string
    fileUrl: string
    description: string | null
    topicId: string
    createdAt: Date
    updatedAt: Date
    _count: AttachmentCountAggregateOutputType | null
    _min: AttachmentMinAggregateOutputType | null
    _max: AttachmentMaxAggregateOutputType | null
  }

  type GetAttachmentGroupByPayload<T extends AttachmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AttachmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AttachmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AttachmentGroupByOutputType[P]>
            : GetScalarType<T[P], AttachmentGroupByOutputType[P]>
        }
      >
    >


  export type AttachmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fileUrl?: boolean
    description?: boolean
    topicId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    topic?: boolean | TopicDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["attachment"]>

  export type AttachmentSelectScalar = {
    id?: boolean
    fileUrl?: boolean
    description?: boolean
    topicId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type AttachmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    topic?: boolean | TopicDefaultArgs<ExtArgs>
  }


  export type $AttachmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Attachment"
    objects: {
      topic: Prisma.$TopicPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      fileUrl: string
      description: string | null
      topicId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["attachment"]>
    composites: {}
  }


  type AttachmentGetPayload<S extends boolean | null | undefined | AttachmentDefaultArgs> = $Result.GetResult<Prisma.$AttachmentPayload, S>

  type AttachmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AttachmentFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AttachmentCountAggregateInputType | true
    }

  export interface AttachmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Attachment'], meta: { name: 'Attachment' } }
    /**
     * Find zero or one Attachment that matches the filter.
     * @param {AttachmentFindUniqueArgs} args - Arguments to find a Attachment
     * @example
     * // Get one Attachment
     * const attachment = await prisma.attachment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends AttachmentFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, AttachmentFindUniqueArgs<ExtArgs>>
    ): Prisma__AttachmentClient<$Result.GetResult<Prisma.$AttachmentPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Attachment that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {AttachmentFindUniqueOrThrowArgs} args - Arguments to find a Attachment
     * @example
     * // Get one Attachment
     * const attachment = await prisma.attachment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends AttachmentFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AttachmentFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__AttachmentClient<$Result.GetResult<Prisma.$AttachmentPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Attachment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttachmentFindFirstArgs} args - Arguments to find a Attachment
     * @example
     * // Get one Attachment
     * const attachment = await prisma.attachment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends AttachmentFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, AttachmentFindFirstArgs<ExtArgs>>
    ): Prisma__AttachmentClient<$Result.GetResult<Prisma.$AttachmentPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Attachment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttachmentFindFirstOrThrowArgs} args - Arguments to find a Attachment
     * @example
     * // Get one Attachment
     * const attachment = await prisma.attachment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends AttachmentFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AttachmentFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__AttachmentClient<$Result.GetResult<Prisma.$AttachmentPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Attachments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttachmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Attachments
     * const attachments = await prisma.attachment.findMany()
     * 
     * // Get first 10 Attachments
     * const attachments = await prisma.attachment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const attachmentWithIdOnly = await prisma.attachment.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends AttachmentFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AttachmentFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttachmentPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Attachment.
     * @param {AttachmentCreateArgs} args - Arguments to create a Attachment.
     * @example
     * // Create one Attachment
     * const Attachment = await prisma.attachment.create({
     *   data: {
     *     // ... data to create a Attachment
     *   }
     * })
     * 
    **/
    create<T extends AttachmentCreateArgs<ExtArgs>>(
      args: SelectSubset<T, AttachmentCreateArgs<ExtArgs>>
    ): Prisma__AttachmentClient<$Result.GetResult<Prisma.$AttachmentPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Attachments.
     * @param {AttachmentCreateManyArgs} args - Arguments to create many Attachments.
     * @example
     * // Create many Attachments
     * const attachment = await prisma.attachment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends AttachmentCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AttachmentCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Attachment.
     * @param {AttachmentDeleteArgs} args - Arguments to delete one Attachment.
     * @example
     * // Delete one Attachment
     * const Attachment = await prisma.attachment.delete({
     *   where: {
     *     // ... filter to delete one Attachment
     *   }
     * })
     * 
    **/
    delete<T extends AttachmentDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, AttachmentDeleteArgs<ExtArgs>>
    ): Prisma__AttachmentClient<$Result.GetResult<Prisma.$AttachmentPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Attachment.
     * @param {AttachmentUpdateArgs} args - Arguments to update one Attachment.
     * @example
     * // Update one Attachment
     * const attachment = await prisma.attachment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends AttachmentUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, AttachmentUpdateArgs<ExtArgs>>
    ): Prisma__AttachmentClient<$Result.GetResult<Prisma.$AttachmentPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Attachments.
     * @param {AttachmentDeleteManyArgs} args - Arguments to filter Attachments to delete.
     * @example
     * // Delete a few Attachments
     * const { count } = await prisma.attachment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends AttachmentDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AttachmentDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Attachments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttachmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Attachments
     * const attachment = await prisma.attachment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends AttachmentUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, AttachmentUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Attachment.
     * @param {AttachmentUpsertArgs} args - Arguments to update or create a Attachment.
     * @example
     * // Update or create a Attachment
     * const attachment = await prisma.attachment.upsert({
     *   create: {
     *     // ... data to create a Attachment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Attachment we want to update
     *   }
     * })
    **/
    upsert<T extends AttachmentUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, AttachmentUpsertArgs<ExtArgs>>
    ): Prisma__AttachmentClient<$Result.GetResult<Prisma.$AttachmentPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Attachments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttachmentCountArgs} args - Arguments to filter Attachments to count.
     * @example
     * // Count the number of Attachments
     * const count = await prisma.attachment.count({
     *   where: {
     *     // ... the filter for the Attachments we want to count
     *   }
     * })
    **/
    count<T extends AttachmentCountArgs>(
      args?: Subset<T, AttachmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AttachmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Attachment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttachmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AttachmentAggregateArgs>(args: Subset<T, AttachmentAggregateArgs>): Prisma.PrismaPromise<GetAttachmentAggregateType<T>>

    /**
     * Group by Attachment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttachmentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AttachmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AttachmentGroupByArgs['orderBy'] }
        : { orderBy?: AttachmentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AttachmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAttachmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Attachment model
   */
  readonly fields: AttachmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Attachment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AttachmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    topic<T extends TopicDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TopicDefaultArgs<ExtArgs>>): Prisma__TopicClient<$Result.GetResult<Prisma.$TopicPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Attachment model
   */ 
  interface AttachmentFieldRefs {
    readonly id: FieldRef<"Attachment", 'String'>
    readonly fileUrl: FieldRef<"Attachment", 'String'>
    readonly description: FieldRef<"Attachment", 'String'>
    readonly topicId: FieldRef<"Attachment", 'String'>
    readonly createdAt: FieldRef<"Attachment", 'DateTime'>
    readonly updatedAt: FieldRef<"Attachment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Attachment findUnique
   */
  export type AttachmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attachment
     */
    select?: AttachmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttachmentInclude<ExtArgs> | null
    /**
     * Filter, which Attachment to fetch.
     */
    where: AttachmentWhereUniqueInput
  }

  /**
   * Attachment findUniqueOrThrow
   */
  export type AttachmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attachment
     */
    select?: AttachmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttachmentInclude<ExtArgs> | null
    /**
     * Filter, which Attachment to fetch.
     */
    where: AttachmentWhereUniqueInput
  }

  /**
   * Attachment findFirst
   */
  export type AttachmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attachment
     */
    select?: AttachmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttachmentInclude<ExtArgs> | null
    /**
     * Filter, which Attachment to fetch.
     */
    where?: AttachmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attachments to fetch.
     */
    orderBy?: AttachmentOrderByWithRelationInput | AttachmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Attachments.
     */
    cursor?: AttachmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attachments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attachments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Attachments.
     */
    distinct?: AttachmentScalarFieldEnum | AttachmentScalarFieldEnum[]
  }

  /**
   * Attachment findFirstOrThrow
   */
  export type AttachmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attachment
     */
    select?: AttachmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttachmentInclude<ExtArgs> | null
    /**
     * Filter, which Attachment to fetch.
     */
    where?: AttachmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attachments to fetch.
     */
    orderBy?: AttachmentOrderByWithRelationInput | AttachmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Attachments.
     */
    cursor?: AttachmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attachments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attachments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Attachments.
     */
    distinct?: AttachmentScalarFieldEnum | AttachmentScalarFieldEnum[]
  }

  /**
   * Attachment findMany
   */
  export type AttachmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attachment
     */
    select?: AttachmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttachmentInclude<ExtArgs> | null
    /**
     * Filter, which Attachments to fetch.
     */
    where?: AttachmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attachments to fetch.
     */
    orderBy?: AttachmentOrderByWithRelationInput | AttachmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Attachments.
     */
    cursor?: AttachmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attachments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attachments.
     */
    skip?: number
    distinct?: AttachmentScalarFieldEnum | AttachmentScalarFieldEnum[]
  }

  /**
   * Attachment create
   */
  export type AttachmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attachment
     */
    select?: AttachmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttachmentInclude<ExtArgs> | null
    /**
     * The data needed to create a Attachment.
     */
    data: XOR<AttachmentCreateInput, AttachmentUncheckedCreateInput>
  }

  /**
   * Attachment createMany
   */
  export type AttachmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Attachments.
     */
    data: AttachmentCreateManyInput | AttachmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Attachment update
   */
  export type AttachmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attachment
     */
    select?: AttachmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttachmentInclude<ExtArgs> | null
    /**
     * The data needed to update a Attachment.
     */
    data: XOR<AttachmentUpdateInput, AttachmentUncheckedUpdateInput>
    /**
     * Choose, which Attachment to update.
     */
    where: AttachmentWhereUniqueInput
  }

  /**
   * Attachment updateMany
   */
  export type AttachmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Attachments.
     */
    data: XOR<AttachmentUpdateManyMutationInput, AttachmentUncheckedUpdateManyInput>
    /**
     * Filter which Attachments to update
     */
    where?: AttachmentWhereInput
  }

  /**
   * Attachment upsert
   */
  export type AttachmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attachment
     */
    select?: AttachmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttachmentInclude<ExtArgs> | null
    /**
     * The filter to search for the Attachment to update in case it exists.
     */
    where: AttachmentWhereUniqueInput
    /**
     * In case the Attachment found by the `where` argument doesn't exist, create a new Attachment with this data.
     */
    create: XOR<AttachmentCreateInput, AttachmentUncheckedCreateInput>
    /**
     * In case the Attachment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AttachmentUpdateInput, AttachmentUncheckedUpdateInput>
  }

  /**
   * Attachment delete
   */
  export type AttachmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attachment
     */
    select?: AttachmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttachmentInclude<ExtArgs> | null
    /**
     * Filter which Attachment to delete.
     */
    where: AttachmentWhereUniqueInput
  }

  /**
   * Attachment deleteMany
   */
  export type AttachmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Attachments to delete
     */
    where?: AttachmentWhereInput
  }

  /**
   * Attachment without action
   */
  export type AttachmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attachment
     */
    select?: AttachmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttachmentInclude<ExtArgs> | null
  }


  /**
   * Model Image
   */

  export type AggregateImage = {
    _count: ImageCountAggregateOutputType | null
    _min: ImageMinAggregateOutputType | null
    _max: ImageMaxAggregateOutputType | null
  }

  export type ImageMinAggregateOutputType = {
    id: string | null
    imageUrl: string | null
    description: string | null
    topicId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ImageMaxAggregateOutputType = {
    id: string | null
    imageUrl: string | null
    description: string | null
    topicId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ImageCountAggregateOutputType = {
    id: number
    imageUrl: number
    description: number
    topicId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ImageMinAggregateInputType = {
    id?: true
    imageUrl?: true
    description?: true
    topicId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ImageMaxAggregateInputType = {
    id?: true
    imageUrl?: true
    description?: true
    topicId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ImageCountAggregateInputType = {
    id?: true
    imageUrl?: true
    description?: true
    topicId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ImageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Image to aggregate.
     */
    where?: ImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Images to fetch.
     */
    orderBy?: ImageOrderByWithRelationInput | ImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Images.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Images
    **/
    _count?: true | ImageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ImageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ImageMaxAggregateInputType
  }

  export type GetImageAggregateType<T extends ImageAggregateArgs> = {
        [P in keyof T & keyof AggregateImage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateImage[P]>
      : GetScalarType<T[P], AggregateImage[P]>
  }




  export type ImageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ImageWhereInput
    orderBy?: ImageOrderByWithAggregationInput | ImageOrderByWithAggregationInput[]
    by: ImageScalarFieldEnum[] | ImageScalarFieldEnum
    having?: ImageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ImageCountAggregateInputType | true
    _min?: ImageMinAggregateInputType
    _max?: ImageMaxAggregateInputType
  }

  export type ImageGroupByOutputType = {
    id: string
    imageUrl: string
    description: string | null
    topicId: string
    createdAt: Date
    updatedAt: Date
    _count: ImageCountAggregateOutputType | null
    _min: ImageMinAggregateOutputType | null
    _max: ImageMaxAggregateOutputType | null
  }

  type GetImageGroupByPayload<T extends ImageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ImageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ImageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ImageGroupByOutputType[P]>
            : GetScalarType<T[P], ImageGroupByOutputType[P]>
        }
      >
    >


  export type ImageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    imageUrl?: boolean
    description?: boolean
    topicId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    topic?: boolean | TopicDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["image"]>

  export type ImageSelectScalar = {
    id?: boolean
    imageUrl?: boolean
    description?: boolean
    topicId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type ImageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    topic?: boolean | TopicDefaultArgs<ExtArgs>
  }


  export type $ImagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Image"
    objects: {
      topic: Prisma.$TopicPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      imageUrl: string
      description: string | null
      topicId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["image"]>
    composites: {}
  }


  type ImageGetPayload<S extends boolean | null | undefined | ImageDefaultArgs> = $Result.GetResult<Prisma.$ImagePayload, S>

  type ImageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ImageFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ImageCountAggregateInputType | true
    }

  export interface ImageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Image'], meta: { name: 'Image' } }
    /**
     * Find zero or one Image that matches the filter.
     * @param {ImageFindUniqueArgs} args - Arguments to find a Image
     * @example
     * // Get one Image
     * const image = await prisma.image.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ImageFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ImageFindUniqueArgs<ExtArgs>>
    ): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Image that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ImageFindUniqueOrThrowArgs} args - Arguments to find a Image
     * @example
     * // Get one Image
     * const image = await prisma.image.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ImageFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ImageFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Image that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageFindFirstArgs} args - Arguments to find a Image
     * @example
     * // Get one Image
     * const image = await prisma.image.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ImageFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ImageFindFirstArgs<ExtArgs>>
    ): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Image that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageFindFirstOrThrowArgs} args - Arguments to find a Image
     * @example
     * // Get one Image
     * const image = await prisma.image.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ImageFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ImageFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Images that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Images
     * const images = await prisma.image.findMany()
     * 
     * // Get first 10 Images
     * const images = await prisma.image.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const imageWithIdOnly = await prisma.image.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ImageFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ImageFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Image.
     * @param {ImageCreateArgs} args - Arguments to create a Image.
     * @example
     * // Create one Image
     * const Image = await prisma.image.create({
     *   data: {
     *     // ... data to create a Image
     *   }
     * })
     * 
    **/
    create<T extends ImageCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ImageCreateArgs<ExtArgs>>
    ): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Images.
     * @param {ImageCreateManyArgs} args - Arguments to create many Images.
     * @example
     * // Create many Images
     * const image = await prisma.image.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends ImageCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ImageCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Image.
     * @param {ImageDeleteArgs} args - Arguments to delete one Image.
     * @example
     * // Delete one Image
     * const Image = await prisma.image.delete({
     *   where: {
     *     // ... filter to delete one Image
     *   }
     * })
     * 
    **/
    delete<T extends ImageDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ImageDeleteArgs<ExtArgs>>
    ): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Image.
     * @param {ImageUpdateArgs} args - Arguments to update one Image.
     * @example
     * // Update one Image
     * const image = await prisma.image.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ImageUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ImageUpdateArgs<ExtArgs>>
    ): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Images.
     * @param {ImageDeleteManyArgs} args - Arguments to filter Images to delete.
     * @example
     * // Delete a few Images
     * const { count } = await prisma.image.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ImageDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ImageDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Images.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Images
     * const image = await prisma.image.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ImageUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ImageUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Image.
     * @param {ImageUpsertArgs} args - Arguments to update or create a Image.
     * @example
     * // Update or create a Image
     * const image = await prisma.image.upsert({
     *   create: {
     *     // ... data to create a Image
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Image we want to update
     *   }
     * })
    **/
    upsert<T extends ImageUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ImageUpsertArgs<ExtArgs>>
    ): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Images.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageCountArgs} args - Arguments to filter Images to count.
     * @example
     * // Count the number of Images
     * const count = await prisma.image.count({
     *   where: {
     *     // ... the filter for the Images we want to count
     *   }
     * })
    **/
    count<T extends ImageCountArgs>(
      args?: Subset<T, ImageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ImageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Image.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ImageAggregateArgs>(args: Subset<T, ImageAggregateArgs>): Prisma.PrismaPromise<GetImageAggregateType<T>>

    /**
     * Group by Image.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ImageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ImageGroupByArgs['orderBy'] }
        : { orderBy?: ImageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ImageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetImageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Image model
   */
  readonly fields: ImageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Image.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ImageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    topic<T extends TopicDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TopicDefaultArgs<ExtArgs>>): Prisma__TopicClient<$Result.GetResult<Prisma.$TopicPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Image model
   */ 
  interface ImageFieldRefs {
    readonly id: FieldRef<"Image", 'String'>
    readonly imageUrl: FieldRef<"Image", 'String'>
    readonly description: FieldRef<"Image", 'String'>
    readonly topicId: FieldRef<"Image", 'String'>
    readonly createdAt: FieldRef<"Image", 'DateTime'>
    readonly updatedAt: FieldRef<"Image", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Image findUnique
   */
  export type ImageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * Filter, which Image to fetch.
     */
    where: ImageWhereUniqueInput
  }

  /**
   * Image findUniqueOrThrow
   */
  export type ImageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * Filter, which Image to fetch.
     */
    where: ImageWhereUniqueInput
  }

  /**
   * Image findFirst
   */
  export type ImageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * Filter, which Image to fetch.
     */
    where?: ImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Images to fetch.
     */
    orderBy?: ImageOrderByWithRelationInput | ImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Images.
     */
    cursor?: ImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Images.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Images.
     */
    distinct?: ImageScalarFieldEnum | ImageScalarFieldEnum[]
  }

  /**
   * Image findFirstOrThrow
   */
  export type ImageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * Filter, which Image to fetch.
     */
    where?: ImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Images to fetch.
     */
    orderBy?: ImageOrderByWithRelationInput | ImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Images.
     */
    cursor?: ImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Images.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Images.
     */
    distinct?: ImageScalarFieldEnum | ImageScalarFieldEnum[]
  }

  /**
   * Image findMany
   */
  export type ImageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * Filter, which Images to fetch.
     */
    where?: ImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Images to fetch.
     */
    orderBy?: ImageOrderByWithRelationInput | ImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Images.
     */
    cursor?: ImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Images.
     */
    skip?: number
    distinct?: ImageScalarFieldEnum | ImageScalarFieldEnum[]
  }

  /**
   * Image create
   */
  export type ImageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * The data needed to create a Image.
     */
    data: XOR<ImageCreateInput, ImageUncheckedCreateInput>
  }

  /**
   * Image createMany
   */
  export type ImageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Images.
     */
    data: ImageCreateManyInput | ImageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Image update
   */
  export type ImageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * The data needed to update a Image.
     */
    data: XOR<ImageUpdateInput, ImageUncheckedUpdateInput>
    /**
     * Choose, which Image to update.
     */
    where: ImageWhereUniqueInput
  }

  /**
   * Image updateMany
   */
  export type ImageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Images.
     */
    data: XOR<ImageUpdateManyMutationInput, ImageUncheckedUpdateManyInput>
    /**
     * Filter which Images to update
     */
    where?: ImageWhereInput
  }

  /**
   * Image upsert
   */
  export type ImageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * The filter to search for the Image to update in case it exists.
     */
    where: ImageWhereUniqueInput
    /**
     * In case the Image found by the `where` argument doesn't exist, create a new Image with this data.
     */
    create: XOR<ImageCreateInput, ImageUncheckedCreateInput>
    /**
     * In case the Image was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ImageUpdateInput, ImageUncheckedUpdateInput>
  }

  /**
   * Image delete
   */
  export type ImageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * Filter which Image to delete.
     */
    where: ImageWhereUniqueInput
  }

  /**
   * Image deleteMany
   */
  export type ImageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Images to delete
     */
    where?: ImageWhereInput
  }

  /**
   * Image without action
   */
  export type ImageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
  }


  /**
   * Model Recently_Deleted_Note
   */

  export type AggregateRecently_Deleted_Note = {
    _count: Recently_Deleted_NoteCountAggregateOutputType | null
    _min: Recently_Deleted_NoteMinAggregateOutputType | null
    _max: Recently_Deleted_NoteMaxAggregateOutputType | null
  }

  export type Recently_Deleted_NoteMinAggregateOutputType = {
    id: string | null
    title: string | null
    content: string | null
    topicId: string | null
    deletedAt: Date | null
  }

  export type Recently_Deleted_NoteMaxAggregateOutputType = {
    id: string | null
    title: string | null
    content: string | null
    topicId: string | null
    deletedAt: Date | null
  }

  export type Recently_Deleted_NoteCountAggregateOutputType = {
    id: number
    title: number
    content: number
    topicId: number
    deletedAt: number
    _all: number
  }


  export type Recently_Deleted_NoteMinAggregateInputType = {
    id?: true
    title?: true
    content?: true
    topicId?: true
    deletedAt?: true
  }

  export type Recently_Deleted_NoteMaxAggregateInputType = {
    id?: true
    title?: true
    content?: true
    topicId?: true
    deletedAt?: true
  }

  export type Recently_Deleted_NoteCountAggregateInputType = {
    id?: true
    title?: true
    content?: true
    topicId?: true
    deletedAt?: true
    _all?: true
  }

  export type Recently_Deleted_NoteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Recently_Deleted_Note to aggregate.
     */
    where?: Recently_Deleted_NoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Recently_Deleted_Notes to fetch.
     */
    orderBy?: Recently_Deleted_NoteOrderByWithRelationInput | Recently_Deleted_NoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Recently_Deleted_NoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Recently_Deleted_Notes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Recently_Deleted_Notes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Recently_Deleted_Notes
    **/
    _count?: true | Recently_Deleted_NoteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Recently_Deleted_NoteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Recently_Deleted_NoteMaxAggregateInputType
  }

  export type GetRecently_Deleted_NoteAggregateType<T extends Recently_Deleted_NoteAggregateArgs> = {
        [P in keyof T & keyof AggregateRecently_Deleted_Note]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRecently_Deleted_Note[P]>
      : GetScalarType<T[P], AggregateRecently_Deleted_Note[P]>
  }




  export type Recently_Deleted_NoteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Recently_Deleted_NoteWhereInput
    orderBy?: Recently_Deleted_NoteOrderByWithAggregationInput | Recently_Deleted_NoteOrderByWithAggregationInput[]
    by: Recently_Deleted_NoteScalarFieldEnum[] | Recently_Deleted_NoteScalarFieldEnum
    having?: Recently_Deleted_NoteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Recently_Deleted_NoteCountAggregateInputType | true
    _min?: Recently_Deleted_NoteMinAggregateInputType
    _max?: Recently_Deleted_NoteMaxAggregateInputType
  }

  export type Recently_Deleted_NoteGroupByOutputType = {
    id: string
    title: string
    content: string
    topicId: string
    deletedAt: Date
    _count: Recently_Deleted_NoteCountAggregateOutputType | null
    _min: Recently_Deleted_NoteMinAggregateOutputType | null
    _max: Recently_Deleted_NoteMaxAggregateOutputType | null
  }

  type GetRecently_Deleted_NoteGroupByPayload<T extends Recently_Deleted_NoteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Recently_Deleted_NoteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Recently_Deleted_NoteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Recently_Deleted_NoteGroupByOutputType[P]>
            : GetScalarType<T[P], Recently_Deleted_NoteGroupByOutputType[P]>
        }
      >
    >


  export type Recently_Deleted_NoteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    topicId?: boolean
    deletedAt?: boolean
    topic?: boolean | TopicDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["recently_Deleted_Note"]>

  export type Recently_Deleted_NoteSelectScalar = {
    id?: boolean
    title?: boolean
    content?: boolean
    topicId?: boolean
    deletedAt?: boolean
  }


  export type Recently_Deleted_NoteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    topic?: boolean | TopicDefaultArgs<ExtArgs>
  }


  export type $Recently_Deleted_NotePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Recently_Deleted_Note"
    objects: {
      topic: Prisma.$TopicPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      content: string
      topicId: string
      deletedAt: Date
    }, ExtArgs["result"]["recently_Deleted_Note"]>
    composites: {}
  }


  type Recently_Deleted_NoteGetPayload<S extends boolean | null | undefined | Recently_Deleted_NoteDefaultArgs> = $Result.GetResult<Prisma.$Recently_Deleted_NotePayload, S>

  type Recently_Deleted_NoteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<Recently_Deleted_NoteFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Recently_Deleted_NoteCountAggregateInputType | true
    }

  export interface Recently_Deleted_NoteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Recently_Deleted_Note'], meta: { name: 'Recently_Deleted_Note' } }
    /**
     * Find zero or one Recently_Deleted_Note that matches the filter.
     * @param {Recently_Deleted_NoteFindUniqueArgs} args - Arguments to find a Recently_Deleted_Note
     * @example
     * // Get one Recently_Deleted_Note
     * const recently_Deleted_Note = await prisma.recently_Deleted_Note.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends Recently_Deleted_NoteFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, Recently_Deleted_NoteFindUniqueArgs<ExtArgs>>
    ): Prisma__Recently_Deleted_NoteClient<$Result.GetResult<Prisma.$Recently_Deleted_NotePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Recently_Deleted_Note that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {Recently_Deleted_NoteFindUniqueOrThrowArgs} args - Arguments to find a Recently_Deleted_Note
     * @example
     * // Get one Recently_Deleted_Note
     * const recently_Deleted_Note = await prisma.recently_Deleted_Note.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends Recently_Deleted_NoteFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, Recently_Deleted_NoteFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__Recently_Deleted_NoteClient<$Result.GetResult<Prisma.$Recently_Deleted_NotePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Recently_Deleted_Note that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Recently_Deleted_NoteFindFirstArgs} args - Arguments to find a Recently_Deleted_Note
     * @example
     * // Get one Recently_Deleted_Note
     * const recently_Deleted_Note = await prisma.recently_Deleted_Note.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends Recently_Deleted_NoteFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, Recently_Deleted_NoteFindFirstArgs<ExtArgs>>
    ): Prisma__Recently_Deleted_NoteClient<$Result.GetResult<Prisma.$Recently_Deleted_NotePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Recently_Deleted_Note that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Recently_Deleted_NoteFindFirstOrThrowArgs} args - Arguments to find a Recently_Deleted_Note
     * @example
     * // Get one Recently_Deleted_Note
     * const recently_Deleted_Note = await prisma.recently_Deleted_Note.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends Recently_Deleted_NoteFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, Recently_Deleted_NoteFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__Recently_Deleted_NoteClient<$Result.GetResult<Prisma.$Recently_Deleted_NotePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Recently_Deleted_Notes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Recently_Deleted_NoteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Recently_Deleted_Notes
     * const recently_Deleted_Notes = await prisma.recently_Deleted_Note.findMany()
     * 
     * // Get first 10 Recently_Deleted_Notes
     * const recently_Deleted_Notes = await prisma.recently_Deleted_Note.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const recently_Deleted_NoteWithIdOnly = await prisma.recently_Deleted_Note.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends Recently_Deleted_NoteFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, Recently_Deleted_NoteFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Recently_Deleted_NotePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Recently_Deleted_Note.
     * @param {Recently_Deleted_NoteCreateArgs} args - Arguments to create a Recently_Deleted_Note.
     * @example
     * // Create one Recently_Deleted_Note
     * const Recently_Deleted_Note = await prisma.recently_Deleted_Note.create({
     *   data: {
     *     // ... data to create a Recently_Deleted_Note
     *   }
     * })
     * 
    **/
    create<T extends Recently_Deleted_NoteCreateArgs<ExtArgs>>(
      args: SelectSubset<T, Recently_Deleted_NoteCreateArgs<ExtArgs>>
    ): Prisma__Recently_Deleted_NoteClient<$Result.GetResult<Prisma.$Recently_Deleted_NotePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Recently_Deleted_Notes.
     * @param {Recently_Deleted_NoteCreateManyArgs} args - Arguments to create many Recently_Deleted_Notes.
     * @example
     * // Create many Recently_Deleted_Notes
     * const recently_Deleted_Note = await prisma.recently_Deleted_Note.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends Recently_Deleted_NoteCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, Recently_Deleted_NoteCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Recently_Deleted_Note.
     * @param {Recently_Deleted_NoteDeleteArgs} args - Arguments to delete one Recently_Deleted_Note.
     * @example
     * // Delete one Recently_Deleted_Note
     * const Recently_Deleted_Note = await prisma.recently_Deleted_Note.delete({
     *   where: {
     *     // ... filter to delete one Recently_Deleted_Note
     *   }
     * })
     * 
    **/
    delete<T extends Recently_Deleted_NoteDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, Recently_Deleted_NoteDeleteArgs<ExtArgs>>
    ): Prisma__Recently_Deleted_NoteClient<$Result.GetResult<Prisma.$Recently_Deleted_NotePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Recently_Deleted_Note.
     * @param {Recently_Deleted_NoteUpdateArgs} args - Arguments to update one Recently_Deleted_Note.
     * @example
     * // Update one Recently_Deleted_Note
     * const recently_Deleted_Note = await prisma.recently_Deleted_Note.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends Recently_Deleted_NoteUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, Recently_Deleted_NoteUpdateArgs<ExtArgs>>
    ): Prisma__Recently_Deleted_NoteClient<$Result.GetResult<Prisma.$Recently_Deleted_NotePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Recently_Deleted_Notes.
     * @param {Recently_Deleted_NoteDeleteManyArgs} args - Arguments to filter Recently_Deleted_Notes to delete.
     * @example
     * // Delete a few Recently_Deleted_Notes
     * const { count } = await prisma.recently_Deleted_Note.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends Recently_Deleted_NoteDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, Recently_Deleted_NoteDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Recently_Deleted_Notes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Recently_Deleted_NoteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Recently_Deleted_Notes
     * const recently_Deleted_Note = await prisma.recently_Deleted_Note.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends Recently_Deleted_NoteUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, Recently_Deleted_NoteUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Recently_Deleted_Note.
     * @param {Recently_Deleted_NoteUpsertArgs} args - Arguments to update or create a Recently_Deleted_Note.
     * @example
     * // Update or create a Recently_Deleted_Note
     * const recently_Deleted_Note = await prisma.recently_Deleted_Note.upsert({
     *   create: {
     *     // ... data to create a Recently_Deleted_Note
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Recently_Deleted_Note we want to update
     *   }
     * })
    **/
    upsert<T extends Recently_Deleted_NoteUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, Recently_Deleted_NoteUpsertArgs<ExtArgs>>
    ): Prisma__Recently_Deleted_NoteClient<$Result.GetResult<Prisma.$Recently_Deleted_NotePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Recently_Deleted_Notes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Recently_Deleted_NoteCountArgs} args - Arguments to filter Recently_Deleted_Notes to count.
     * @example
     * // Count the number of Recently_Deleted_Notes
     * const count = await prisma.recently_Deleted_Note.count({
     *   where: {
     *     // ... the filter for the Recently_Deleted_Notes we want to count
     *   }
     * })
    **/
    count<T extends Recently_Deleted_NoteCountArgs>(
      args?: Subset<T, Recently_Deleted_NoteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Recently_Deleted_NoteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Recently_Deleted_Note.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Recently_Deleted_NoteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Recently_Deleted_NoteAggregateArgs>(args: Subset<T, Recently_Deleted_NoteAggregateArgs>): Prisma.PrismaPromise<GetRecently_Deleted_NoteAggregateType<T>>

    /**
     * Group by Recently_Deleted_Note.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Recently_Deleted_NoteGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Recently_Deleted_NoteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Recently_Deleted_NoteGroupByArgs['orderBy'] }
        : { orderBy?: Recently_Deleted_NoteGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Recently_Deleted_NoteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRecently_Deleted_NoteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Recently_Deleted_Note model
   */
  readonly fields: Recently_Deleted_NoteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Recently_Deleted_Note.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Recently_Deleted_NoteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    topic<T extends TopicDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TopicDefaultArgs<ExtArgs>>): Prisma__TopicClient<$Result.GetResult<Prisma.$TopicPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Recently_Deleted_Note model
   */ 
  interface Recently_Deleted_NoteFieldRefs {
    readonly id: FieldRef<"Recently_Deleted_Note", 'String'>
    readonly title: FieldRef<"Recently_Deleted_Note", 'String'>
    readonly content: FieldRef<"Recently_Deleted_Note", 'String'>
    readonly topicId: FieldRef<"Recently_Deleted_Note", 'String'>
    readonly deletedAt: FieldRef<"Recently_Deleted_Note", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Recently_Deleted_Note findUnique
   */
  export type Recently_Deleted_NoteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recently_Deleted_Note
     */
    select?: Recently_Deleted_NoteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Recently_Deleted_NoteInclude<ExtArgs> | null
    /**
     * Filter, which Recently_Deleted_Note to fetch.
     */
    where: Recently_Deleted_NoteWhereUniqueInput
  }

  /**
   * Recently_Deleted_Note findUniqueOrThrow
   */
  export type Recently_Deleted_NoteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recently_Deleted_Note
     */
    select?: Recently_Deleted_NoteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Recently_Deleted_NoteInclude<ExtArgs> | null
    /**
     * Filter, which Recently_Deleted_Note to fetch.
     */
    where: Recently_Deleted_NoteWhereUniqueInput
  }

  /**
   * Recently_Deleted_Note findFirst
   */
  export type Recently_Deleted_NoteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recently_Deleted_Note
     */
    select?: Recently_Deleted_NoteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Recently_Deleted_NoteInclude<ExtArgs> | null
    /**
     * Filter, which Recently_Deleted_Note to fetch.
     */
    where?: Recently_Deleted_NoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Recently_Deleted_Notes to fetch.
     */
    orderBy?: Recently_Deleted_NoteOrderByWithRelationInput | Recently_Deleted_NoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Recently_Deleted_Notes.
     */
    cursor?: Recently_Deleted_NoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Recently_Deleted_Notes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Recently_Deleted_Notes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Recently_Deleted_Notes.
     */
    distinct?: Recently_Deleted_NoteScalarFieldEnum | Recently_Deleted_NoteScalarFieldEnum[]
  }

  /**
   * Recently_Deleted_Note findFirstOrThrow
   */
  export type Recently_Deleted_NoteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recently_Deleted_Note
     */
    select?: Recently_Deleted_NoteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Recently_Deleted_NoteInclude<ExtArgs> | null
    /**
     * Filter, which Recently_Deleted_Note to fetch.
     */
    where?: Recently_Deleted_NoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Recently_Deleted_Notes to fetch.
     */
    orderBy?: Recently_Deleted_NoteOrderByWithRelationInput | Recently_Deleted_NoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Recently_Deleted_Notes.
     */
    cursor?: Recently_Deleted_NoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Recently_Deleted_Notes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Recently_Deleted_Notes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Recently_Deleted_Notes.
     */
    distinct?: Recently_Deleted_NoteScalarFieldEnum | Recently_Deleted_NoteScalarFieldEnum[]
  }

  /**
   * Recently_Deleted_Note findMany
   */
  export type Recently_Deleted_NoteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recently_Deleted_Note
     */
    select?: Recently_Deleted_NoteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Recently_Deleted_NoteInclude<ExtArgs> | null
    /**
     * Filter, which Recently_Deleted_Notes to fetch.
     */
    where?: Recently_Deleted_NoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Recently_Deleted_Notes to fetch.
     */
    orderBy?: Recently_Deleted_NoteOrderByWithRelationInput | Recently_Deleted_NoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Recently_Deleted_Notes.
     */
    cursor?: Recently_Deleted_NoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Recently_Deleted_Notes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Recently_Deleted_Notes.
     */
    skip?: number
    distinct?: Recently_Deleted_NoteScalarFieldEnum | Recently_Deleted_NoteScalarFieldEnum[]
  }

  /**
   * Recently_Deleted_Note create
   */
  export type Recently_Deleted_NoteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recently_Deleted_Note
     */
    select?: Recently_Deleted_NoteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Recently_Deleted_NoteInclude<ExtArgs> | null
    /**
     * The data needed to create a Recently_Deleted_Note.
     */
    data: XOR<Recently_Deleted_NoteCreateInput, Recently_Deleted_NoteUncheckedCreateInput>
  }

  /**
   * Recently_Deleted_Note createMany
   */
  export type Recently_Deleted_NoteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Recently_Deleted_Notes.
     */
    data: Recently_Deleted_NoteCreateManyInput | Recently_Deleted_NoteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Recently_Deleted_Note update
   */
  export type Recently_Deleted_NoteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recently_Deleted_Note
     */
    select?: Recently_Deleted_NoteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Recently_Deleted_NoteInclude<ExtArgs> | null
    /**
     * The data needed to update a Recently_Deleted_Note.
     */
    data: XOR<Recently_Deleted_NoteUpdateInput, Recently_Deleted_NoteUncheckedUpdateInput>
    /**
     * Choose, which Recently_Deleted_Note to update.
     */
    where: Recently_Deleted_NoteWhereUniqueInput
  }

  /**
   * Recently_Deleted_Note updateMany
   */
  export type Recently_Deleted_NoteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Recently_Deleted_Notes.
     */
    data: XOR<Recently_Deleted_NoteUpdateManyMutationInput, Recently_Deleted_NoteUncheckedUpdateManyInput>
    /**
     * Filter which Recently_Deleted_Notes to update
     */
    where?: Recently_Deleted_NoteWhereInput
  }

  /**
   * Recently_Deleted_Note upsert
   */
  export type Recently_Deleted_NoteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recently_Deleted_Note
     */
    select?: Recently_Deleted_NoteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Recently_Deleted_NoteInclude<ExtArgs> | null
    /**
     * The filter to search for the Recently_Deleted_Note to update in case it exists.
     */
    where: Recently_Deleted_NoteWhereUniqueInput
    /**
     * In case the Recently_Deleted_Note found by the `where` argument doesn't exist, create a new Recently_Deleted_Note with this data.
     */
    create: XOR<Recently_Deleted_NoteCreateInput, Recently_Deleted_NoteUncheckedCreateInput>
    /**
     * In case the Recently_Deleted_Note was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Recently_Deleted_NoteUpdateInput, Recently_Deleted_NoteUncheckedUpdateInput>
  }

  /**
   * Recently_Deleted_Note delete
   */
  export type Recently_Deleted_NoteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recently_Deleted_Note
     */
    select?: Recently_Deleted_NoteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Recently_Deleted_NoteInclude<ExtArgs> | null
    /**
     * Filter which Recently_Deleted_Note to delete.
     */
    where: Recently_Deleted_NoteWhereUniqueInput
  }

  /**
   * Recently_Deleted_Note deleteMany
   */
  export type Recently_Deleted_NoteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Recently_Deleted_Notes to delete
     */
    where?: Recently_Deleted_NoteWhereInput
  }

  /**
   * Recently_Deleted_Note without action
   */
  export type Recently_Deleted_NoteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recently_Deleted_Note
     */
    select?: Recently_Deleted_NoteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Recently_Deleted_NoteInclude<ExtArgs> | null
  }


  /**
   * Model Recently_Deleted_Image
   */

  export type AggregateRecently_Deleted_Image = {
    _count: Recently_Deleted_ImageCountAggregateOutputType | null
    _min: Recently_Deleted_ImageMinAggregateOutputType | null
    _max: Recently_Deleted_ImageMaxAggregateOutputType | null
  }

  export type Recently_Deleted_ImageMinAggregateOutputType = {
    id: string | null
    imageUrl: string | null
    description: string | null
    topicId: string | null
    deletedAt: Date | null
  }

  export type Recently_Deleted_ImageMaxAggregateOutputType = {
    id: string | null
    imageUrl: string | null
    description: string | null
    topicId: string | null
    deletedAt: Date | null
  }

  export type Recently_Deleted_ImageCountAggregateOutputType = {
    id: number
    imageUrl: number
    description: number
    topicId: number
    deletedAt: number
    _all: number
  }


  export type Recently_Deleted_ImageMinAggregateInputType = {
    id?: true
    imageUrl?: true
    description?: true
    topicId?: true
    deletedAt?: true
  }

  export type Recently_Deleted_ImageMaxAggregateInputType = {
    id?: true
    imageUrl?: true
    description?: true
    topicId?: true
    deletedAt?: true
  }

  export type Recently_Deleted_ImageCountAggregateInputType = {
    id?: true
    imageUrl?: true
    description?: true
    topicId?: true
    deletedAt?: true
    _all?: true
  }

  export type Recently_Deleted_ImageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Recently_Deleted_Image to aggregate.
     */
    where?: Recently_Deleted_ImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Recently_Deleted_Images to fetch.
     */
    orderBy?: Recently_Deleted_ImageOrderByWithRelationInput | Recently_Deleted_ImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Recently_Deleted_ImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Recently_Deleted_Images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Recently_Deleted_Images.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Recently_Deleted_Images
    **/
    _count?: true | Recently_Deleted_ImageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Recently_Deleted_ImageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Recently_Deleted_ImageMaxAggregateInputType
  }

  export type GetRecently_Deleted_ImageAggregateType<T extends Recently_Deleted_ImageAggregateArgs> = {
        [P in keyof T & keyof AggregateRecently_Deleted_Image]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRecently_Deleted_Image[P]>
      : GetScalarType<T[P], AggregateRecently_Deleted_Image[P]>
  }




  export type Recently_Deleted_ImageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Recently_Deleted_ImageWhereInput
    orderBy?: Recently_Deleted_ImageOrderByWithAggregationInput | Recently_Deleted_ImageOrderByWithAggregationInput[]
    by: Recently_Deleted_ImageScalarFieldEnum[] | Recently_Deleted_ImageScalarFieldEnum
    having?: Recently_Deleted_ImageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Recently_Deleted_ImageCountAggregateInputType | true
    _min?: Recently_Deleted_ImageMinAggregateInputType
    _max?: Recently_Deleted_ImageMaxAggregateInputType
  }

  export type Recently_Deleted_ImageGroupByOutputType = {
    id: string
    imageUrl: string
    description: string | null
    topicId: string
    deletedAt: Date
    _count: Recently_Deleted_ImageCountAggregateOutputType | null
    _min: Recently_Deleted_ImageMinAggregateOutputType | null
    _max: Recently_Deleted_ImageMaxAggregateOutputType | null
  }

  type GetRecently_Deleted_ImageGroupByPayload<T extends Recently_Deleted_ImageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Recently_Deleted_ImageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Recently_Deleted_ImageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Recently_Deleted_ImageGroupByOutputType[P]>
            : GetScalarType<T[P], Recently_Deleted_ImageGroupByOutputType[P]>
        }
      >
    >


  export type Recently_Deleted_ImageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    imageUrl?: boolean
    description?: boolean
    topicId?: boolean
    deletedAt?: boolean
    topic?: boolean | TopicDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["recently_Deleted_Image"]>

  export type Recently_Deleted_ImageSelectScalar = {
    id?: boolean
    imageUrl?: boolean
    description?: boolean
    topicId?: boolean
    deletedAt?: boolean
  }


  export type Recently_Deleted_ImageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    topic?: boolean | TopicDefaultArgs<ExtArgs>
  }


  export type $Recently_Deleted_ImagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Recently_Deleted_Image"
    objects: {
      topic: Prisma.$TopicPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      imageUrl: string
      description: string | null
      topicId: string
      deletedAt: Date
    }, ExtArgs["result"]["recently_Deleted_Image"]>
    composites: {}
  }


  type Recently_Deleted_ImageGetPayload<S extends boolean | null | undefined | Recently_Deleted_ImageDefaultArgs> = $Result.GetResult<Prisma.$Recently_Deleted_ImagePayload, S>

  type Recently_Deleted_ImageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<Recently_Deleted_ImageFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Recently_Deleted_ImageCountAggregateInputType | true
    }

  export interface Recently_Deleted_ImageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Recently_Deleted_Image'], meta: { name: 'Recently_Deleted_Image' } }
    /**
     * Find zero or one Recently_Deleted_Image that matches the filter.
     * @param {Recently_Deleted_ImageFindUniqueArgs} args - Arguments to find a Recently_Deleted_Image
     * @example
     * // Get one Recently_Deleted_Image
     * const recently_Deleted_Image = await prisma.recently_Deleted_Image.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends Recently_Deleted_ImageFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, Recently_Deleted_ImageFindUniqueArgs<ExtArgs>>
    ): Prisma__Recently_Deleted_ImageClient<$Result.GetResult<Prisma.$Recently_Deleted_ImagePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Recently_Deleted_Image that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {Recently_Deleted_ImageFindUniqueOrThrowArgs} args - Arguments to find a Recently_Deleted_Image
     * @example
     * // Get one Recently_Deleted_Image
     * const recently_Deleted_Image = await prisma.recently_Deleted_Image.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends Recently_Deleted_ImageFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, Recently_Deleted_ImageFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__Recently_Deleted_ImageClient<$Result.GetResult<Prisma.$Recently_Deleted_ImagePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Recently_Deleted_Image that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Recently_Deleted_ImageFindFirstArgs} args - Arguments to find a Recently_Deleted_Image
     * @example
     * // Get one Recently_Deleted_Image
     * const recently_Deleted_Image = await prisma.recently_Deleted_Image.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends Recently_Deleted_ImageFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, Recently_Deleted_ImageFindFirstArgs<ExtArgs>>
    ): Prisma__Recently_Deleted_ImageClient<$Result.GetResult<Prisma.$Recently_Deleted_ImagePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Recently_Deleted_Image that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Recently_Deleted_ImageFindFirstOrThrowArgs} args - Arguments to find a Recently_Deleted_Image
     * @example
     * // Get one Recently_Deleted_Image
     * const recently_Deleted_Image = await prisma.recently_Deleted_Image.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends Recently_Deleted_ImageFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, Recently_Deleted_ImageFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__Recently_Deleted_ImageClient<$Result.GetResult<Prisma.$Recently_Deleted_ImagePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Recently_Deleted_Images that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Recently_Deleted_ImageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Recently_Deleted_Images
     * const recently_Deleted_Images = await prisma.recently_Deleted_Image.findMany()
     * 
     * // Get first 10 Recently_Deleted_Images
     * const recently_Deleted_Images = await prisma.recently_Deleted_Image.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const recently_Deleted_ImageWithIdOnly = await prisma.recently_Deleted_Image.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends Recently_Deleted_ImageFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, Recently_Deleted_ImageFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Recently_Deleted_ImagePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Recently_Deleted_Image.
     * @param {Recently_Deleted_ImageCreateArgs} args - Arguments to create a Recently_Deleted_Image.
     * @example
     * // Create one Recently_Deleted_Image
     * const Recently_Deleted_Image = await prisma.recently_Deleted_Image.create({
     *   data: {
     *     // ... data to create a Recently_Deleted_Image
     *   }
     * })
     * 
    **/
    create<T extends Recently_Deleted_ImageCreateArgs<ExtArgs>>(
      args: SelectSubset<T, Recently_Deleted_ImageCreateArgs<ExtArgs>>
    ): Prisma__Recently_Deleted_ImageClient<$Result.GetResult<Prisma.$Recently_Deleted_ImagePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Recently_Deleted_Images.
     * @param {Recently_Deleted_ImageCreateManyArgs} args - Arguments to create many Recently_Deleted_Images.
     * @example
     * // Create many Recently_Deleted_Images
     * const recently_Deleted_Image = await prisma.recently_Deleted_Image.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends Recently_Deleted_ImageCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, Recently_Deleted_ImageCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Recently_Deleted_Image.
     * @param {Recently_Deleted_ImageDeleteArgs} args - Arguments to delete one Recently_Deleted_Image.
     * @example
     * // Delete one Recently_Deleted_Image
     * const Recently_Deleted_Image = await prisma.recently_Deleted_Image.delete({
     *   where: {
     *     // ... filter to delete one Recently_Deleted_Image
     *   }
     * })
     * 
    **/
    delete<T extends Recently_Deleted_ImageDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, Recently_Deleted_ImageDeleteArgs<ExtArgs>>
    ): Prisma__Recently_Deleted_ImageClient<$Result.GetResult<Prisma.$Recently_Deleted_ImagePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Recently_Deleted_Image.
     * @param {Recently_Deleted_ImageUpdateArgs} args - Arguments to update one Recently_Deleted_Image.
     * @example
     * // Update one Recently_Deleted_Image
     * const recently_Deleted_Image = await prisma.recently_Deleted_Image.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends Recently_Deleted_ImageUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, Recently_Deleted_ImageUpdateArgs<ExtArgs>>
    ): Prisma__Recently_Deleted_ImageClient<$Result.GetResult<Prisma.$Recently_Deleted_ImagePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Recently_Deleted_Images.
     * @param {Recently_Deleted_ImageDeleteManyArgs} args - Arguments to filter Recently_Deleted_Images to delete.
     * @example
     * // Delete a few Recently_Deleted_Images
     * const { count } = await prisma.recently_Deleted_Image.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends Recently_Deleted_ImageDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, Recently_Deleted_ImageDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Recently_Deleted_Images.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Recently_Deleted_ImageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Recently_Deleted_Images
     * const recently_Deleted_Image = await prisma.recently_Deleted_Image.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends Recently_Deleted_ImageUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, Recently_Deleted_ImageUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Recently_Deleted_Image.
     * @param {Recently_Deleted_ImageUpsertArgs} args - Arguments to update or create a Recently_Deleted_Image.
     * @example
     * // Update or create a Recently_Deleted_Image
     * const recently_Deleted_Image = await prisma.recently_Deleted_Image.upsert({
     *   create: {
     *     // ... data to create a Recently_Deleted_Image
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Recently_Deleted_Image we want to update
     *   }
     * })
    **/
    upsert<T extends Recently_Deleted_ImageUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, Recently_Deleted_ImageUpsertArgs<ExtArgs>>
    ): Prisma__Recently_Deleted_ImageClient<$Result.GetResult<Prisma.$Recently_Deleted_ImagePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Recently_Deleted_Images.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Recently_Deleted_ImageCountArgs} args - Arguments to filter Recently_Deleted_Images to count.
     * @example
     * // Count the number of Recently_Deleted_Images
     * const count = await prisma.recently_Deleted_Image.count({
     *   where: {
     *     // ... the filter for the Recently_Deleted_Images we want to count
     *   }
     * })
    **/
    count<T extends Recently_Deleted_ImageCountArgs>(
      args?: Subset<T, Recently_Deleted_ImageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Recently_Deleted_ImageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Recently_Deleted_Image.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Recently_Deleted_ImageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Recently_Deleted_ImageAggregateArgs>(args: Subset<T, Recently_Deleted_ImageAggregateArgs>): Prisma.PrismaPromise<GetRecently_Deleted_ImageAggregateType<T>>

    /**
     * Group by Recently_Deleted_Image.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Recently_Deleted_ImageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Recently_Deleted_ImageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Recently_Deleted_ImageGroupByArgs['orderBy'] }
        : { orderBy?: Recently_Deleted_ImageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Recently_Deleted_ImageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRecently_Deleted_ImageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Recently_Deleted_Image model
   */
  readonly fields: Recently_Deleted_ImageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Recently_Deleted_Image.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Recently_Deleted_ImageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    topic<T extends TopicDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TopicDefaultArgs<ExtArgs>>): Prisma__TopicClient<$Result.GetResult<Prisma.$TopicPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Recently_Deleted_Image model
   */ 
  interface Recently_Deleted_ImageFieldRefs {
    readonly id: FieldRef<"Recently_Deleted_Image", 'String'>
    readonly imageUrl: FieldRef<"Recently_Deleted_Image", 'String'>
    readonly description: FieldRef<"Recently_Deleted_Image", 'String'>
    readonly topicId: FieldRef<"Recently_Deleted_Image", 'String'>
    readonly deletedAt: FieldRef<"Recently_Deleted_Image", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Recently_Deleted_Image findUnique
   */
  export type Recently_Deleted_ImageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recently_Deleted_Image
     */
    select?: Recently_Deleted_ImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Recently_Deleted_ImageInclude<ExtArgs> | null
    /**
     * Filter, which Recently_Deleted_Image to fetch.
     */
    where: Recently_Deleted_ImageWhereUniqueInput
  }

  /**
   * Recently_Deleted_Image findUniqueOrThrow
   */
  export type Recently_Deleted_ImageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recently_Deleted_Image
     */
    select?: Recently_Deleted_ImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Recently_Deleted_ImageInclude<ExtArgs> | null
    /**
     * Filter, which Recently_Deleted_Image to fetch.
     */
    where: Recently_Deleted_ImageWhereUniqueInput
  }

  /**
   * Recently_Deleted_Image findFirst
   */
  export type Recently_Deleted_ImageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recently_Deleted_Image
     */
    select?: Recently_Deleted_ImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Recently_Deleted_ImageInclude<ExtArgs> | null
    /**
     * Filter, which Recently_Deleted_Image to fetch.
     */
    where?: Recently_Deleted_ImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Recently_Deleted_Images to fetch.
     */
    orderBy?: Recently_Deleted_ImageOrderByWithRelationInput | Recently_Deleted_ImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Recently_Deleted_Images.
     */
    cursor?: Recently_Deleted_ImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Recently_Deleted_Images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Recently_Deleted_Images.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Recently_Deleted_Images.
     */
    distinct?: Recently_Deleted_ImageScalarFieldEnum | Recently_Deleted_ImageScalarFieldEnum[]
  }

  /**
   * Recently_Deleted_Image findFirstOrThrow
   */
  export type Recently_Deleted_ImageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recently_Deleted_Image
     */
    select?: Recently_Deleted_ImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Recently_Deleted_ImageInclude<ExtArgs> | null
    /**
     * Filter, which Recently_Deleted_Image to fetch.
     */
    where?: Recently_Deleted_ImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Recently_Deleted_Images to fetch.
     */
    orderBy?: Recently_Deleted_ImageOrderByWithRelationInput | Recently_Deleted_ImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Recently_Deleted_Images.
     */
    cursor?: Recently_Deleted_ImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Recently_Deleted_Images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Recently_Deleted_Images.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Recently_Deleted_Images.
     */
    distinct?: Recently_Deleted_ImageScalarFieldEnum | Recently_Deleted_ImageScalarFieldEnum[]
  }

  /**
   * Recently_Deleted_Image findMany
   */
  export type Recently_Deleted_ImageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recently_Deleted_Image
     */
    select?: Recently_Deleted_ImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Recently_Deleted_ImageInclude<ExtArgs> | null
    /**
     * Filter, which Recently_Deleted_Images to fetch.
     */
    where?: Recently_Deleted_ImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Recently_Deleted_Images to fetch.
     */
    orderBy?: Recently_Deleted_ImageOrderByWithRelationInput | Recently_Deleted_ImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Recently_Deleted_Images.
     */
    cursor?: Recently_Deleted_ImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Recently_Deleted_Images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Recently_Deleted_Images.
     */
    skip?: number
    distinct?: Recently_Deleted_ImageScalarFieldEnum | Recently_Deleted_ImageScalarFieldEnum[]
  }

  /**
   * Recently_Deleted_Image create
   */
  export type Recently_Deleted_ImageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recently_Deleted_Image
     */
    select?: Recently_Deleted_ImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Recently_Deleted_ImageInclude<ExtArgs> | null
    /**
     * The data needed to create a Recently_Deleted_Image.
     */
    data: XOR<Recently_Deleted_ImageCreateInput, Recently_Deleted_ImageUncheckedCreateInput>
  }

  /**
   * Recently_Deleted_Image createMany
   */
  export type Recently_Deleted_ImageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Recently_Deleted_Images.
     */
    data: Recently_Deleted_ImageCreateManyInput | Recently_Deleted_ImageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Recently_Deleted_Image update
   */
  export type Recently_Deleted_ImageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recently_Deleted_Image
     */
    select?: Recently_Deleted_ImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Recently_Deleted_ImageInclude<ExtArgs> | null
    /**
     * The data needed to update a Recently_Deleted_Image.
     */
    data: XOR<Recently_Deleted_ImageUpdateInput, Recently_Deleted_ImageUncheckedUpdateInput>
    /**
     * Choose, which Recently_Deleted_Image to update.
     */
    where: Recently_Deleted_ImageWhereUniqueInput
  }

  /**
   * Recently_Deleted_Image updateMany
   */
  export type Recently_Deleted_ImageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Recently_Deleted_Images.
     */
    data: XOR<Recently_Deleted_ImageUpdateManyMutationInput, Recently_Deleted_ImageUncheckedUpdateManyInput>
    /**
     * Filter which Recently_Deleted_Images to update
     */
    where?: Recently_Deleted_ImageWhereInput
  }

  /**
   * Recently_Deleted_Image upsert
   */
  export type Recently_Deleted_ImageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recently_Deleted_Image
     */
    select?: Recently_Deleted_ImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Recently_Deleted_ImageInclude<ExtArgs> | null
    /**
     * The filter to search for the Recently_Deleted_Image to update in case it exists.
     */
    where: Recently_Deleted_ImageWhereUniqueInput
    /**
     * In case the Recently_Deleted_Image found by the `where` argument doesn't exist, create a new Recently_Deleted_Image with this data.
     */
    create: XOR<Recently_Deleted_ImageCreateInput, Recently_Deleted_ImageUncheckedCreateInput>
    /**
     * In case the Recently_Deleted_Image was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Recently_Deleted_ImageUpdateInput, Recently_Deleted_ImageUncheckedUpdateInput>
  }

  /**
   * Recently_Deleted_Image delete
   */
  export type Recently_Deleted_ImageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recently_Deleted_Image
     */
    select?: Recently_Deleted_ImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Recently_Deleted_ImageInclude<ExtArgs> | null
    /**
     * Filter which Recently_Deleted_Image to delete.
     */
    where: Recently_Deleted_ImageWhereUniqueInput
  }

  /**
   * Recently_Deleted_Image deleteMany
   */
  export type Recently_Deleted_ImageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Recently_Deleted_Images to delete
     */
    where?: Recently_Deleted_ImageWhereInput
  }

  /**
   * Recently_Deleted_Image without action
   */
  export type Recently_Deleted_ImageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recently_Deleted_Image
     */
    select?: Recently_Deleted_ImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Recently_Deleted_ImageInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const TopicScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    imageUrl: 'imageUrl',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TopicScalarFieldEnum = (typeof TopicScalarFieldEnum)[keyof typeof TopicScalarFieldEnum]


  export const NoteScalarFieldEnum: {
    id: 'id',
    title: 'title',
    content: 'content',
    topicId: 'topicId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type NoteScalarFieldEnum = (typeof NoteScalarFieldEnum)[keyof typeof NoteScalarFieldEnum]


  export const LinkScalarFieldEnum: {
    id: 'id',
    url: 'url',
    description: 'description',
    topicId: 'topicId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type LinkScalarFieldEnum = (typeof LinkScalarFieldEnum)[keyof typeof LinkScalarFieldEnum]


  export const AttachmentScalarFieldEnum: {
    id: 'id',
    fileUrl: 'fileUrl',
    description: 'description',
    topicId: 'topicId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AttachmentScalarFieldEnum = (typeof AttachmentScalarFieldEnum)[keyof typeof AttachmentScalarFieldEnum]


  export const ImageScalarFieldEnum: {
    id: 'id',
    imageUrl: 'imageUrl',
    description: 'description',
    topicId: 'topicId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ImageScalarFieldEnum = (typeof ImageScalarFieldEnum)[keyof typeof ImageScalarFieldEnum]


  export const Recently_Deleted_NoteScalarFieldEnum: {
    id: 'id',
    title: 'title',
    content: 'content',
    topicId: 'topicId',
    deletedAt: 'deletedAt'
  };

  export type Recently_Deleted_NoteScalarFieldEnum = (typeof Recently_Deleted_NoteScalarFieldEnum)[keyof typeof Recently_Deleted_NoteScalarFieldEnum]


  export const Recently_Deleted_ImageScalarFieldEnum: {
    id: 'id',
    imageUrl: 'imageUrl',
    description: 'description',
    topicId: 'topicId',
    deletedAt: 'deletedAt'
  };

  export type Recently_Deleted_ImageScalarFieldEnum = (typeof Recently_Deleted_ImageScalarFieldEnum)[keyof typeof Recently_Deleted_ImageScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    
  /**
   * Deep Input Types
   */


  export type TopicWhereInput = {
    AND?: TopicWhereInput | TopicWhereInput[]
    OR?: TopicWhereInput[]
    NOT?: TopicWhereInput | TopicWhereInput[]
    id?: StringFilter<"Topic"> | string
    title?: StringFilter<"Topic"> | string
    description?: StringNullableFilter<"Topic"> | string | null
    imageUrl?: StringNullableFilter<"Topic"> | string | null
    createdAt?: DateTimeFilter<"Topic"> | Date | string
    updatedAt?: DateTimeFilter<"Topic"> | Date | string
    notes?: NoteListRelationFilter
    links?: LinkListRelationFilter
    attachments?: AttachmentListRelationFilter
    images?: ImageListRelationFilter
    recently_deleted_notes?: Recently_Deleted_NoteListRelationFilter
    recently_deleted_images?: Recently_Deleted_ImageListRelationFilter
  }

  export type TopicOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    imageUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    notes?: NoteOrderByRelationAggregateInput
    links?: LinkOrderByRelationAggregateInput
    attachments?: AttachmentOrderByRelationAggregateInput
    images?: ImageOrderByRelationAggregateInput
    recently_deleted_notes?: Recently_Deleted_NoteOrderByRelationAggregateInput
    recently_deleted_images?: Recently_Deleted_ImageOrderByRelationAggregateInput
  }

  export type TopicWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TopicWhereInput | TopicWhereInput[]
    OR?: TopicWhereInput[]
    NOT?: TopicWhereInput | TopicWhereInput[]
    title?: StringFilter<"Topic"> | string
    description?: StringNullableFilter<"Topic"> | string | null
    imageUrl?: StringNullableFilter<"Topic"> | string | null
    createdAt?: DateTimeFilter<"Topic"> | Date | string
    updatedAt?: DateTimeFilter<"Topic"> | Date | string
    notes?: NoteListRelationFilter
    links?: LinkListRelationFilter
    attachments?: AttachmentListRelationFilter
    images?: ImageListRelationFilter
    recently_deleted_notes?: Recently_Deleted_NoteListRelationFilter
    recently_deleted_images?: Recently_Deleted_ImageListRelationFilter
  }, "id">

  export type TopicOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    imageUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TopicCountOrderByAggregateInput
    _max?: TopicMaxOrderByAggregateInput
    _min?: TopicMinOrderByAggregateInput
  }

  export type TopicScalarWhereWithAggregatesInput = {
    AND?: TopicScalarWhereWithAggregatesInput | TopicScalarWhereWithAggregatesInput[]
    OR?: TopicScalarWhereWithAggregatesInput[]
    NOT?: TopicScalarWhereWithAggregatesInput | TopicScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Topic"> | string
    title?: StringWithAggregatesFilter<"Topic"> | string
    description?: StringNullableWithAggregatesFilter<"Topic"> | string | null
    imageUrl?: StringNullableWithAggregatesFilter<"Topic"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Topic"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Topic"> | Date | string
  }

  export type NoteWhereInput = {
    AND?: NoteWhereInput | NoteWhereInput[]
    OR?: NoteWhereInput[]
    NOT?: NoteWhereInput | NoteWhereInput[]
    id?: StringFilter<"Note"> | string
    title?: StringFilter<"Note"> | string
    content?: StringFilter<"Note"> | string
    topicId?: StringFilter<"Note"> | string
    createdAt?: DateTimeFilter<"Note"> | Date | string
    updatedAt?: DateTimeFilter<"Note"> | Date | string
    topic?: XOR<TopicRelationFilter, TopicWhereInput>
  }

  export type NoteOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    topicId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    topic?: TopicOrderByWithRelationInput
  }

  export type NoteWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: NoteWhereInput | NoteWhereInput[]
    OR?: NoteWhereInput[]
    NOT?: NoteWhereInput | NoteWhereInput[]
    title?: StringFilter<"Note"> | string
    content?: StringFilter<"Note"> | string
    topicId?: StringFilter<"Note"> | string
    createdAt?: DateTimeFilter<"Note"> | Date | string
    updatedAt?: DateTimeFilter<"Note"> | Date | string
    topic?: XOR<TopicRelationFilter, TopicWhereInput>
  }, "id">

  export type NoteOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    topicId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: NoteCountOrderByAggregateInput
    _max?: NoteMaxOrderByAggregateInput
    _min?: NoteMinOrderByAggregateInput
  }

  export type NoteScalarWhereWithAggregatesInput = {
    AND?: NoteScalarWhereWithAggregatesInput | NoteScalarWhereWithAggregatesInput[]
    OR?: NoteScalarWhereWithAggregatesInput[]
    NOT?: NoteScalarWhereWithAggregatesInput | NoteScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Note"> | string
    title?: StringWithAggregatesFilter<"Note"> | string
    content?: StringWithAggregatesFilter<"Note"> | string
    topicId?: StringWithAggregatesFilter<"Note"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Note"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Note"> | Date | string
  }

  export type LinkWhereInput = {
    AND?: LinkWhereInput | LinkWhereInput[]
    OR?: LinkWhereInput[]
    NOT?: LinkWhereInput | LinkWhereInput[]
    id?: StringFilter<"Link"> | string
    url?: StringFilter<"Link"> | string
    description?: StringNullableFilter<"Link"> | string | null
    topicId?: StringFilter<"Link"> | string
    createdAt?: DateTimeFilter<"Link"> | Date | string
    updatedAt?: DateTimeFilter<"Link"> | Date | string
    topic?: XOR<TopicRelationFilter, TopicWhereInput>
  }

  export type LinkOrderByWithRelationInput = {
    id?: SortOrder
    url?: SortOrder
    description?: SortOrderInput | SortOrder
    topicId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    topic?: TopicOrderByWithRelationInput
  }

  export type LinkWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: LinkWhereInput | LinkWhereInput[]
    OR?: LinkWhereInput[]
    NOT?: LinkWhereInput | LinkWhereInput[]
    url?: StringFilter<"Link"> | string
    description?: StringNullableFilter<"Link"> | string | null
    topicId?: StringFilter<"Link"> | string
    createdAt?: DateTimeFilter<"Link"> | Date | string
    updatedAt?: DateTimeFilter<"Link"> | Date | string
    topic?: XOR<TopicRelationFilter, TopicWhereInput>
  }, "id">

  export type LinkOrderByWithAggregationInput = {
    id?: SortOrder
    url?: SortOrder
    description?: SortOrderInput | SortOrder
    topicId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: LinkCountOrderByAggregateInput
    _max?: LinkMaxOrderByAggregateInput
    _min?: LinkMinOrderByAggregateInput
  }

  export type LinkScalarWhereWithAggregatesInput = {
    AND?: LinkScalarWhereWithAggregatesInput | LinkScalarWhereWithAggregatesInput[]
    OR?: LinkScalarWhereWithAggregatesInput[]
    NOT?: LinkScalarWhereWithAggregatesInput | LinkScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Link"> | string
    url?: StringWithAggregatesFilter<"Link"> | string
    description?: StringNullableWithAggregatesFilter<"Link"> | string | null
    topicId?: StringWithAggregatesFilter<"Link"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Link"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Link"> | Date | string
  }

  export type AttachmentWhereInput = {
    AND?: AttachmentWhereInput | AttachmentWhereInput[]
    OR?: AttachmentWhereInput[]
    NOT?: AttachmentWhereInput | AttachmentWhereInput[]
    id?: StringFilter<"Attachment"> | string
    fileUrl?: StringFilter<"Attachment"> | string
    description?: StringNullableFilter<"Attachment"> | string | null
    topicId?: StringFilter<"Attachment"> | string
    createdAt?: DateTimeFilter<"Attachment"> | Date | string
    updatedAt?: DateTimeFilter<"Attachment"> | Date | string
    topic?: XOR<TopicRelationFilter, TopicWhereInput>
  }

  export type AttachmentOrderByWithRelationInput = {
    id?: SortOrder
    fileUrl?: SortOrder
    description?: SortOrderInput | SortOrder
    topicId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    topic?: TopicOrderByWithRelationInput
  }

  export type AttachmentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AttachmentWhereInput | AttachmentWhereInput[]
    OR?: AttachmentWhereInput[]
    NOT?: AttachmentWhereInput | AttachmentWhereInput[]
    fileUrl?: StringFilter<"Attachment"> | string
    description?: StringNullableFilter<"Attachment"> | string | null
    topicId?: StringFilter<"Attachment"> | string
    createdAt?: DateTimeFilter<"Attachment"> | Date | string
    updatedAt?: DateTimeFilter<"Attachment"> | Date | string
    topic?: XOR<TopicRelationFilter, TopicWhereInput>
  }, "id">

  export type AttachmentOrderByWithAggregationInput = {
    id?: SortOrder
    fileUrl?: SortOrder
    description?: SortOrderInput | SortOrder
    topicId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AttachmentCountOrderByAggregateInput
    _max?: AttachmentMaxOrderByAggregateInput
    _min?: AttachmentMinOrderByAggregateInput
  }

  export type AttachmentScalarWhereWithAggregatesInput = {
    AND?: AttachmentScalarWhereWithAggregatesInput | AttachmentScalarWhereWithAggregatesInput[]
    OR?: AttachmentScalarWhereWithAggregatesInput[]
    NOT?: AttachmentScalarWhereWithAggregatesInput | AttachmentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Attachment"> | string
    fileUrl?: StringWithAggregatesFilter<"Attachment"> | string
    description?: StringNullableWithAggregatesFilter<"Attachment"> | string | null
    topicId?: StringWithAggregatesFilter<"Attachment"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Attachment"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Attachment"> | Date | string
  }

  export type ImageWhereInput = {
    AND?: ImageWhereInput | ImageWhereInput[]
    OR?: ImageWhereInput[]
    NOT?: ImageWhereInput | ImageWhereInput[]
    id?: StringFilter<"Image"> | string
    imageUrl?: StringFilter<"Image"> | string
    description?: StringNullableFilter<"Image"> | string | null
    topicId?: StringFilter<"Image"> | string
    createdAt?: DateTimeFilter<"Image"> | Date | string
    updatedAt?: DateTimeFilter<"Image"> | Date | string
    topic?: XOR<TopicRelationFilter, TopicWhereInput>
  }

  export type ImageOrderByWithRelationInput = {
    id?: SortOrder
    imageUrl?: SortOrder
    description?: SortOrderInput | SortOrder
    topicId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    topic?: TopicOrderByWithRelationInput
  }

  export type ImageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ImageWhereInput | ImageWhereInput[]
    OR?: ImageWhereInput[]
    NOT?: ImageWhereInput | ImageWhereInput[]
    imageUrl?: StringFilter<"Image"> | string
    description?: StringNullableFilter<"Image"> | string | null
    topicId?: StringFilter<"Image"> | string
    createdAt?: DateTimeFilter<"Image"> | Date | string
    updatedAt?: DateTimeFilter<"Image"> | Date | string
    topic?: XOR<TopicRelationFilter, TopicWhereInput>
  }, "id">

  export type ImageOrderByWithAggregationInput = {
    id?: SortOrder
    imageUrl?: SortOrder
    description?: SortOrderInput | SortOrder
    topicId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ImageCountOrderByAggregateInput
    _max?: ImageMaxOrderByAggregateInput
    _min?: ImageMinOrderByAggregateInput
  }

  export type ImageScalarWhereWithAggregatesInput = {
    AND?: ImageScalarWhereWithAggregatesInput | ImageScalarWhereWithAggregatesInput[]
    OR?: ImageScalarWhereWithAggregatesInput[]
    NOT?: ImageScalarWhereWithAggregatesInput | ImageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Image"> | string
    imageUrl?: StringWithAggregatesFilter<"Image"> | string
    description?: StringNullableWithAggregatesFilter<"Image"> | string | null
    topicId?: StringWithAggregatesFilter<"Image"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Image"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Image"> | Date | string
  }

  export type Recently_Deleted_NoteWhereInput = {
    AND?: Recently_Deleted_NoteWhereInput | Recently_Deleted_NoteWhereInput[]
    OR?: Recently_Deleted_NoteWhereInput[]
    NOT?: Recently_Deleted_NoteWhereInput | Recently_Deleted_NoteWhereInput[]
    id?: StringFilter<"Recently_Deleted_Note"> | string
    title?: StringFilter<"Recently_Deleted_Note"> | string
    content?: StringFilter<"Recently_Deleted_Note"> | string
    topicId?: StringFilter<"Recently_Deleted_Note"> | string
    deletedAt?: DateTimeFilter<"Recently_Deleted_Note"> | Date | string
    topic?: XOR<TopicRelationFilter, TopicWhereInput>
  }

  export type Recently_Deleted_NoteOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    topicId?: SortOrder
    deletedAt?: SortOrder
    topic?: TopicOrderByWithRelationInput
  }

  export type Recently_Deleted_NoteWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: Recently_Deleted_NoteWhereInput | Recently_Deleted_NoteWhereInput[]
    OR?: Recently_Deleted_NoteWhereInput[]
    NOT?: Recently_Deleted_NoteWhereInput | Recently_Deleted_NoteWhereInput[]
    title?: StringFilter<"Recently_Deleted_Note"> | string
    content?: StringFilter<"Recently_Deleted_Note"> | string
    topicId?: StringFilter<"Recently_Deleted_Note"> | string
    deletedAt?: DateTimeFilter<"Recently_Deleted_Note"> | Date | string
    topic?: XOR<TopicRelationFilter, TopicWhereInput>
  }, "id">

  export type Recently_Deleted_NoteOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    topicId?: SortOrder
    deletedAt?: SortOrder
    _count?: Recently_Deleted_NoteCountOrderByAggregateInput
    _max?: Recently_Deleted_NoteMaxOrderByAggregateInput
    _min?: Recently_Deleted_NoteMinOrderByAggregateInput
  }

  export type Recently_Deleted_NoteScalarWhereWithAggregatesInput = {
    AND?: Recently_Deleted_NoteScalarWhereWithAggregatesInput | Recently_Deleted_NoteScalarWhereWithAggregatesInput[]
    OR?: Recently_Deleted_NoteScalarWhereWithAggregatesInput[]
    NOT?: Recently_Deleted_NoteScalarWhereWithAggregatesInput | Recently_Deleted_NoteScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Recently_Deleted_Note"> | string
    title?: StringWithAggregatesFilter<"Recently_Deleted_Note"> | string
    content?: StringWithAggregatesFilter<"Recently_Deleted_Note"> | string
    topicId?: StringWithAggregatesFilter<"Recently_Deleted_Note"> | string
    deletedAt?: DateTimeWithAggregatesFilter<"Recently_Deleted_Note"> | Date | string
  }

  export type Recently_Deleted_ImageWhereInput = {
    AND?: Recently_Deleted_ImageWhereInput | Recently_Deleted_ImageWhereInput[]
    OR?: Recently_Deleted_ImageWhereInput[]
    NOT?: Recently_Deleted_ImageWhereInput | Recently_Deleted_ImageWhereInput[]
    id?: StringFilter<"Recently_Deleted_Image"> | string
    imageUrl?: StringFilter<"Recently_Deleted_Image"> | string
    description?: StringNullableFilter<"Recently_Deleted_Image"> | string | null
    topicId?: StringFilter<"Recently_Deleted_Image"> | string
    deletedAt?: DateTimeFilter<"Recently_Deleted_Image"> | Date | string
    topic?: XOR<TopicRelationFilter, TopicWhereInput>
  }

  export type Recently_Deleted_ImageOrderByWithRelationInput = {
    id?: SortOrder
    imageUrl?: SortOrder
    description?: SortOrderInput | SortOrder
    topicId?: SortOrder
    deletedAt?: SortOrder
    topic?: TopicOrderByWithRelationInput
  }

  export type Recently_Deleted_ImageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: Recently_Deleted_ImageWhereInput | Recently_Deleted_ImageWhereInput[]
    OR?: Recently_Deleted_ImageWhereInput[]
    NOT?: Recently_Deleted_ImageWhereInput | Recently_Deleted_ImageWhereInput[]
    imageUrl?: StringFilter<"Recently_Deleted_Image"> | string
    description?: StringNullableFilter<"Recently_Deleted_Image"> | string | null
    topicId?: StringFilter<"Recently_Deleted_Image"> | string
    deletedAt?: DateTimeFilter<"Recently_Deleted_Image"> | Date | string
    topic?: XOR<TopicRelationFilter, TopicWhereInput>
  }, "id">

  export type Recently_Deleted_ImageOrderByWithAggregationInput = {
    id?: SortOrder
    imageUrl?: SortOrder
    description?: SortOrderInput | SortOrder
    topicId?: SortOrder
    deletedAt?: SortOrder
    _count?: Recently_Deleted_ImageCountOrderByAggregateInput
    _max?: Recently_Deleted_ImageMaxOrderByAggregateInput
    _min?: Recently_Deleted_ImageMinOrderByAggregateInput
  }

  export type Recently_Deleted_ImageScalarWhereWithAggregatesInput = {
    AND?: Recently_Deleted_ImageScalarWhereWithAggregatesInput | Recently_Deleted_ImageScalarWhereWithAggregatesInput[]
    OR?: Recently_Deleted_ImageScalarWhereWithAggregatesInput[]
    NOT?: Recently_Deleted_ImageScalarWhereWithAggregatesInput | Recently_Deleted_ImageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Recently_Deleted_Image"> | string
    imageUrl?: StringWithAggregatesFilter<"Recently_Deleted_Image"> | string
    description?: StringNullableWithAggregatesFilter<"Recently_Deleted_Image"> | string | null
    topicId?: StringWithAggregatesFilter<"Recently_Deleted_Image"> | string
    deletedAt?: DateTimeWithAggregatesFilter<"Recently_Deleted_Image"> | Date | string
  }

  export type TopicCreateInput = {
    id?: string
    title: string
    description?: string | null
    imageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    notes?: NoteCreateNestedManyWithoutTopicInput
    links?: LinkCreateNestedManyWithoutTopicInput
    attachments?: AttachmentCreateNestedManyWithoutTopicInput
    images?: ImageCreateNestedManyWithoutTopicInput
    recently_deleted_notes?: Recently_Deleted_NoteCreateNestedManyWithoutTopicInput
    recently_deleted_images?: Recently_Deleted_ImageCreateNestedManyWithoutTopicInput
  }

  export type TopicUncheckedCreateInput = {
    id?: string
    title: string
    description?: string | null
    imageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    notes?: NoteUncheckedCreateNestedManyWithoutTopicInput
    links?: LinkUncheckedCreateNestedManyWithoutTopicInput
    attachments?: AttachmentUncheckedCreateNestedManyWithoutTopicInput
    images?: ImageUncheckedCreateNestedManyWithoutTopicInput
    recently_deleted_notes?: Recently_Deleted_NoteUncheckedCreateNestedManyWithoutTopicInput
    recently_deleted_images?: Recently_Deleted_ImageUncheckedCreateNestedManyWithoutTopicInput
  }

  export type TopicUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NoteUpdateManyWithoutTopicNestedInput
    links?: LinkUpdateManyWithoutTopicNestedInput
    attachments?: AttachmentUpdateManyWithoutTopicNestedInput
    images?: ImageUpdateManyWithoutTopicNestedInput
    recently_deleted_notes?: Recently_Deleted_NoteUpdateManyWithoutTopicNestedInput
    recently_deleted_images?: Recently_Deleted_ImageUpdateManyWithoutTopicNestedInput
  }

  export type TopicUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NoteUncheckedUpdateManyWithoutTopicNestedInput
    links?: LinkUncheckedUpdateManyWithoutTopicNestedInput
    attachments?: AttachmentUncheckedUpdateManyWithoutTopicNestedInput
    images?: ImageUncheckedUpdateManyWithoutTopicNestedInput
    recently_deleted_notes?: Recently_Deleted_NoteUncheckedUpdateManyWithoutTopicNestedInput
    recently_deleted_images?: Recently_Deleted_ImageUncheckedUpdateManyWithoutTopicNestedInput
  }

  export type TopicCreateManyInput = {
    id?: string
    title: string
    description?: string | null
    imageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TopicUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TopicUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NoteCreateInput = {
    id?: string
    title: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    topic: TopicCreateNestedOneWithoutNotesInput
  }

  export type NoteUncheckedCreateInput = {
    id?: string
    title: string
    content: string
    topicId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NoteUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    topic?: TopicUpdateOneRequiredWithoutNotesNestedInput
  }

  export type NoteUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    topicId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NoteCreateManyInput = {
    id?: string
    title: string
    content: string
    topicId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NoteUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NoteUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    topicId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LinkCreateInput = {
    id?: string
    url: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    topic: TopicCreateNestedOneWithoutLinksInput
  }

  export type LinkUncheckedCreateInput = {
    id?: string
    url: string
    description?: string | null
    topicId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LinkUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    topic?: TopicUpdateOneRequiredWithoutLinksNestedInput
  }

  export type LinkUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    topicId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LinkCreateManyInput = {
    id?: string
    url: string
    description?: string | null
    topicId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LinkUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LinkUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    topicId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttachmentCreateInput = {
    id?: string
    fileUrl: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    topic: TopicCreateNestedOneWithoutAttachmentsInput
  }

  export type AttachmentUncheckedCreateInput = {
    id?: string
    fileUrl: string
    description?: string | null
    topicId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AttachmentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fileUrl?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    topic?: TopicUpdateOneRequiredWithoutAttachmentsNestedInput
  }

  export type AttachmentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fileUrl?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    topicId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttachmentCreateManyInput = {
    id?: string
    fileUrl: string
    description?: string | null
    topicId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AttachmentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    fileUrl?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttachmentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    fileUrl?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    topicId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ImageCreateInput = {
    id?: string
    imageUrl: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    topic: TopicCreateNestedOneWithoutImagesInput
  }

  export type ImageUncheckedCreateInput = {
    id?: string
    imageUrl: string
    description?: string | null
    topicId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ImageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    topic?: TopicUpdateOneRequiredWithoutImagesNestedInput
  }

  export type ImageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    topicId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ImageCreateManyInput = {
    id?: string
    imageUrl: string
    description?: string | null
    topicId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ImageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ImageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    topicId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Recently_Deleted_NoteCreateInput = {
    id?: string
    title: string
    content: string
    deletedAt?: Date | string
    topic: TopicCreateNestedOneWithoutRecently_deleted_notesInput
  }

  export type Recently_Deleted_NoteUncheckedCreateInput = {
    id?: string
    title: string
    content: string
    topicId: string
    deletedAt?: Date | string
  }

  export type Recently_Deleted_NoteUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    deletedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    topic?: TopicUpdateOneRequiredWithoutRecently_deleted_notesNestedInput
  }

  export type Recently_Deleted_NoteUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    topicId?: StringFieldUpdateOperationsInput | string
    deletedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Recently_Deleted_NoteCreateManyInput = {
    id?: string
    title: string
    content: string
    topicId: string
    deletedAt?: Date | string
  }

  export type Recently_Deleted_NoteUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    deletedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Recently_Deleted_NoteUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    topicId?: StringFieldUpdateOperationsInput | string
    deletedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Recently_Deleted_ImageCreateInput = {
    id?: string
    imageUrl: string
    description?: string | null
    deletedAt?: Date | string
    topic: TopicCreateNestedOneWithoutRecently_deleted_imagesInput
  }

  export type Recently_Deleted_ImageUncheckedCreateInput = {
    id?: string
    imageUrl: string
    description?: string | null
    topicId: string
    deletedAt?: Date | string
  }

  export type Recently_Deleted_ImageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    topic?: TopicUpdateOneRequiredWithoutRecently_deleted_imagesNestedInput
  }

  export type Recently_Deleted_ImageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    topicId?: StringFieldUpdateOperationsInput | string
    deletedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Recently_Deleted_ImageCreateManyInput = {
    id?: string
    imageUrl: string
    description?: string | null
    topicId: string
    deletedAt?: Date | string
  }

  export type Recently_Deleted_ImageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Recently_Deleted_ImageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    topicId?: StringFieldUpdateOperationsInput | string
    deletedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NoteListRelationFilter = {
    every?: NoteWhereInput
    some?: NoteWhereInput
    none?: NoteWhereInput
  }

  export type LinkListRelationFilter = {
    every?: LinkWhereInput
    some?: LinkWhereInput
    none?: LinkWhereInput
  }

  export type AttachmentListRelationFilter = {
    every?: AttachmentWhereInput
    some?: AttachmentWhereInput
    none?: AttachmentWhereInput
  }

  export type ImageListRelationFilter = {
    every?: ImageWhereInput
    some?: ImageWhereInput
    none?: ImageWhereInput
  }

  export type Recently_Deleted_NoteListRelationFilter = {
    every?: Recently_Deleted_NoteWhereInput
    some?: Recently_Deleted_NoteWhereInput
    none?: Recently_Deleted_NoteWhereInput
  }

  export type Recently_Deleted_ImageListRelationFilter = {
    every?: Recently_Deleted_ImageWhereInput
    some?: Recently_Deleted_ImageWhereInput
    none?: Recently_Deleted_ImageWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type NoteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LinkOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AttachmentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ImageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type Recently_Deleted_NoteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type Recently_Deleted_ImageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TopicCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    imageUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TopicMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    imageUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TopicMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    imageUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type TopicRelationFilter = {
    is?: TopicWhereInput
    isNot?: TopicWhereInput
  }

  export type NoteCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    topicId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NoteMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    topicId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NoteMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    topicId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LinkCountOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    description?: SortOrder
    topicId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LinkMaxOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    description?: SortOrder
    topicId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LinkMinOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    description?: SortOrder
    topicId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AttachmentCountOrderByAggregateInput = {
    id?: SortOrder
    fileUrl?: SortOrder
    description?: SortOrder
    topicId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AttachmentMaxOrderByAggregateInput = {
    id?: SortOrder
    fileUrl?: SortOrder
    description?: SortOrder
    topicId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AttachmentMinOrderByAggregateInput = {
    id?: SortOrder
    fileUrl?: SortOrder
    description?: SortOrder
    topicId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ImageCountOrderByAggregateInput = {
    id?: SortOrder
    imageUrl?: SortOrder
    description?: SortOrder
    topicId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ImageMaxOrderByAggregateInput = {
    id?: SortOrder
    imageUrl?: SortOrder
    description?: SortOrder
    topicId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ImageMinOrderByAggregateInput = {
    id?: SortOrder
    imageUrl?: SortOrder
    description?: SortOrder
    topicId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type Recently_Deleted_NoteCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    topicId?: SortOrder
    deletedAt?: SortOrder
  }

  export type Recently_Deleted_NoteMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    topicId?: SortOrder
    deletedAt?: SortOrder
  }

  export type Recently_Deleted_NoteMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    topicId?: SortOrder
    deletedAt?: SortOrder
  }

  export type Recently_Deleted_ImageCountOrderByAggregateInput = {
    id?: SortOrder
    imageUrl?: SortOrder
    description?: SortOrder
    topicId?: SortOrder
    deletedAt?: SortOrder
  }

  export type Recently_Deleted_ImageMaxOrderByAggregateInput = {
    id?: SortOrder
    imageUrl?: SortOrder
    description?: SortOrder
    topicId?: SortOrder
    deletedAt?: SortOrder
  }

  export type Recently_Deleted_ImageMinOrderByAggregateInput = {
    id?: SortOrder
    imageUrl?: SortOrder
    description?: SortOrder
    topicId?: SortOrder
    deletedAt?: SortOrder
  }

  export type NoteCreateNestedManyWithoutTopicInput = {
    create?: XOR<NoteCreateWithoutTopicInput, NoteUncheckedCreateWithoutTopicInput> | NoteCreateWithoutTopicInput[] | NoteUncheckedCreateWithoutTopicInput[]
    connectOrCreate?: NoteCreateOrConnectWithoutTopicInput | NoteCreateOrConnectWithoutTopicInput[]
    createMany?: NoteCreateManyTopicInputEnvelope
    connect?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
  }

  export type LinkCreateNestedManyWithoutTopicInput = {
    create?: XOR<LinkCreateWithoutTopicInput, LinkUncheckedCreateWithoutTopicInput> | LinkCreateWithoutTopicInput[] | LinkUncheckedCreateWithoutTopicInput[]
    connectOrCreate?: LinkCreateOrConnectWithoutTopicInput | LinkCreateOrConnectWithoutTopicInput[]
    createMany?: LinkCreateManyTopicInputEnvelope
    connect?: LinkWhereUniqueInput | LinkWhereUniqueInput[]
  }

  export type AttachmentCreateNestedManyWithoutTopicInput = {
    create?: XOR<AttachmentCreateWithoutTopicInput, AttachmentUncheckedCreateWithoutTopicInput> | AttachmentCreateWithoutTopicInput[] | AttachmentUncheckedCreateWithoutTopicInput[]
    connectOrCreate?: AttachmentCreateOrConnectWithoutTopicInput | AttachmentCreateOrConnectWithoutTopicInput[]
    createMany?: AttachmentCreateManyTopicInputEnvelope
    connect?: AttachmentWhereUniqueInput | AttachmentWhereUniqueInput[]
  }

  export type ImageCreateNestedManyWithoutTopicInput = {
    create?: XOR<ImageCreateWithoutTopicInput, ImageUncheckedCreateWithoutTopicInput> | ImageCreateWithoutTopicInput[] | ImageUncheckedCreateWithoutTopicInput[]
    connectOrCreate?: ImageCreateOrConnectWithoutTopicInput | ImageCreateOrConnectWithoutTopicInput[]
    createMany?: ImageCreateManyTopicInputEnvelope
    connect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
  }

  export type Recently_Deleted_NoteCreateNestedManyWithoutTopicInput = {
    create?: XOR<Recently_Deleted_NoteCreateWithoutTopicInput, Recently_Deleted_NoteUncheckedCreateWithoutTopicInput> | Recently_Deleted_NoteCreateWithoutTopicInput[] | Recently_Deleted_NoteUncheckedCreateWithoutTopicInput[]
    connectOrCreate?: Recently_Deleted_NoteCreateOrConnectWithoutTopicInput | Recently_Deleted_NoteCreateOrConnectWithoutTopicInput[]
    createMany?: Recently_Deleted_NoteCreateManyTopicInputEnvelope
    connect?: Recently_Deleted_NoteWhereUniqueInput | Recently_Deleted_NoteWhereUniqueInput[]
  }

  export type Recently_Deleted_ImageCreateNestedManyWithoutTopicInput = {
    create?: XOR<Recently_Deleted_ImageCreateWithoutTopicInput, Recently_Deleted_ImageUncheckedCreateWithoutTopicInput> | Recently_Deleted_ImageCreateWithoutTopicInput[] | Recently_Deleted_ImageUncheckedCreateWithoutTopicInput[]
    connectOrCreate?: Recently_Deleted_ImageCreateOrConnectWithoutTopicInput | Recently_Deleted_ImageCreateOrConnectWithoutTopicInput[]
    createMany?: Recently_Deleted_ImageCreateManyTopicInputEnvelope
    connect?: Recently_Deleted_ImageWhereUniqueInput | Recently_Deleted_ImageWhereUniqueInput[]
  }

  export type NoteUncheckedCreateNestedManyWithoutTopicInput = {
    create?: XOR<NoteCreateWithoutTopicInput, NoteUncheckedCreateWithoutTopicInput> | NoteCreateWithoutTopicInput[] | NoteUncheckedCreateWithoutTopicInput[]
    connectOrCreate?: NoteCreateOrConnectWithoutTopicInput | NoteCreateOrConnectWithoutTopicInput[]
    createMany?: NoteCreateManyTopicInputEnvelope
    connect?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
  }

  export type LinkUncheckedCreateNestedManyWithoutTopicInput = {
    create?: XOR<LinkCreateWithoutTopicInput, LinkUncheckedCreateWithoutTopicInput> | LinkCreateWithoutTopicInput[] | LinkUncheckedCreateWithoutTopicInput[]
    connectOrCreate?: LinkCreateOrConnectWithoutTopicInput | LinkCreateOrConnectWithoutTopicInput[]
    createMany?: LinkCreateManyTopicInputEnvelope
    connect?: LinkWhereUniqueInput | LinkWhereUniqueInput[]
  }

  export type AttachmentUncheckedCreateNestedManyWithoutTopicInput = {
    create?: XOR<AttachmentCreateWithoutTopicInput, AttachmentUncheckedCreateWithoutTopicInput> | AttachmentCreateWithoutTopicInput[] | AttachmentUncheckedCreateWithoutTopicInput[]
    connectOrCreate?: AttachmentCreateOrConnectWithoutTopicInput | AttachmentCreateOrConnectWithoutTopicInput[]
    createMany?: AttachmentCreateManyTopicInputEnvelope
    connect?: AttachmentWhereUniqueInput | AttachmentWhereUniqueInput[]
  }

  export type ImageUncheckedCreateNestedManyWithoutTopicInput = {
    create?: XOR<ImageCreateWithoutTopicInput, ImageUncheckedCreateWithoutTopicInput> | ImageCreateWithoutTopicInput[] | ImageUncheckedCreateWithoutTopicInput[]
    connectOrCreate?: ImageCreateOrConnectWithoutTopicInput | ImageCreateOrConnectWithoutTopicInput[]
    createMany?: ImageCreateManyTopicInputEnvelope
    connect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
  }

  export type Recently_Deleted_NoteUncheckedCreateNestedManyWithoutTopicInput = {
    create?: XOR<Recently_Deleted_NoteCreateWithoutTopicInput, Recently_Deleted_NoteUncheckedCreateWithoutTopicInput> | Recently_Deleted_NoteCreateWithoutTopicInput[] | Recently_Deleted_NoteUncheckedCreateWithoutTopicInput[]
    connectOrCreate?: Recently_Deleted_NoteCreateOrConnectWithoutTopicInput | Recently_Deleted_NoteCreateOrConnectWithoutTopicInput[]
    createMany?: Recently_Deleted_NoteCreateManyTopicInputEnvelope
    connect?: Recently_Deleted_NoteWhereUniqueInput | Recently_Deleted_NoteWhereUniqueInput[]
  }

  export type Recently_Deleted_ImageUncheckedCreateNestedManyWithoutTopicInput = {
    create?: XOR<Recently_Deleted_ImageCreateWithoutTopicInput, Recently_Deleted_ImageUncheckedCreateWithoutTopicInput> | Recently_Deleted_ImageCreateWithoutTopicInput[] | Recently_Deleted_ImageUncheckedCreateWithoutTopicInput[]
    connectOrCreate?: Recently_Deleted_ImageCreateOrConnectWithoutTopicInput | Recently_Deleted_ImageCreateOrConnectWithoutTopicInput[]
    createMany?: Recently_Deleted_ImageCreateManyTopicInputEnvelope
    connect?: Recently_Deleted_ImageWhereUniqueInput | Recently_Deleted_ImageWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NoteUpdateManyWithoutTopicNestedInput = {
    create?: XOR<NoteCreateWithoutTopicInput, NoteUncheckedCreateWithoutTopicInput> | NoteCreateWithoutTopicInput[] | NoteUncheckedCreateWithoutTopicInput[]
    connectOrCreate?: NoteCreateOrConnectWithoutTopicInput | NoteCreateOrConnectWithoutTopicInput[]
    upsert?: NoteUpsertWithWhereUniqueWithoutTopicInput | NoteUpsertWithWhereUniqueWithoutTopicInput[]
    createMany?: NoteCreateManyTopicInputEnvelope
    set?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
    disconnect?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
    delete?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
    connect?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
    update?: NoteUpdateWithWhereUniqueWithoutTopicInput | NoteUpdateWithWhereUniqueWithoutTopicInput[]
    updateMany?: NoteUpdateManyWithWhereWithoutTopicInput | NoteUpdateManyWithWhereWithoutTopicInput[]
    deleteMany?: NoteScalarWhereInput | NoteScalarWhereInput[]
  }

  export type LinkUpdateManyWithoutTopicNestedInput = {
    create?: XOR<LinkCreateWithoutTopicInput, LinkUncheckedCreateWithoutTopicInput> | LinkCreateWithoutTopicInput[] | LinkUncheckedCreateWithoutTopicInput[]
    connectOrCreate?: LinkCreateOrConnectWithoutTopicInput | LinkCreateOrConnectWithoutTopicInput[]
    upsert?: LinkUpsertWithWhereUniqueWithoutTopicInput | LinkUpsertWithWhereUniqueWithoutTopicInput[]
    createMany?: LinkCreateManyTopicInputEnvelope
    set?: LinkWhereUniqueInput | LinkWhereUniqueInput[]
    disconnect?: LinkWhereUniqueInput | LinkWhereUniqueInput[]
    delete?: LinkWhereUniqueInput | LinkWhereUniqueInput[]
    connect?: LinkWhereUniqueInput | LinkWhereUniqueInput[]
    update?: LinkUpdateWithWhereUniqueWithoutTopicInput | LinkUpdateWithWhereUniqueWithoutTopicInput[]
    updateMany?: LinkUpdateManyWithWhereWithoutTopicInput | LinkUpdateManyWithWhereWithoutTopicInput[]
    deleteMany?: LinkScalarWhereInput | LinkScalarWhereInput[]
  }

  export type AttachmentUpdateManyWithoutTopicNestedInput = {
    create?: XOR<AttachmentCreateWithoutTopicInput, AttachmentUncheckedCreateWithoutTopicInput> | AttachmentCreateWithoutTopicInput[] | AttachmentUncheckedCreateWithoutTopicInput[]
    connectOrCreate?: AttachmentCreateOrConnectWithoutTopicInput | AttachmentCreateOrConnectWithoutTopicInput[]
    upsert?: AttachmentUpsertWithWhereUniqueWithoutTopicInput | AttachmentUpsertWithWhereUniqueWithoutTopicInput[]
    createMany?: AttachmentCreateManyTopicInputEnvelope
    set?: AttachmentWhereUniqueInput | AttachmentWhereUniqueInput[]
    disconnect?: AttachmentWhereUniqueInput | AttachmentWhereUniqueInput[]
    delete?: AttachmentWhereUniqueInput | AttachmentWhereUniqueInput[]
    connect?: AttachmentWhereUniqueInput | AttachmentWhereUniqueInput[]
    update?: AttachmentUpdateWithWhereUniqueWithoutTopicInput | AttachmentUpdateWithWhereUniqueWithoutTopicInput[]
    updateMany?: AttachmentUpdateManyWithWhereWithoutTopicInput | AttachmentUpdateManyWithWhereWithoutTopicInput[]
    deleteMany?: AttachmentScalarWhereInput | AttachmentScalarWhereInput[]
  }

  export type ImageUpdateManyWithoutTopicNestedInput = {
    create?: XOR<ImageCreateWithoutTopicInput, ImageUncheckedCreateWithoutTopicInput> | ImageCreateWithoutTopicInput[] | ImageUncheckedCreateWithoutTopicInput[]
    connectOrCreate?: ImageCreateOrConnectWithoutTopicInput | ImageCreateOrConnectWithoutTopicInput[]
    upsert?: ImageUpsertWithWhereUniqueWithoutTopicInput | ImageUpsertWithWhereUniqueWithoutTopicInput[]
    createMany?: ImageCreateManyTopicInputEnvelope
    set?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    disconnect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    delete?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    connect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    update?: ImageUpdateWithWhereUniqueWithoutTopicInput | ImageUpdateWithWhereUniqueWithoutTopicInput[]
    updateMany?: ImageUpdateManyWithWhereWithoutTopicInput | ImageUpdateManyWithWhereWithoutTopicInput[]
    deleteMany?: ImageScalarWhereInput | ImageScalarWhereInput[]
  }

  export type Recently_Deleted_NoteUpdateManyWithoutTopicNestedInput = {
    create?: XOR<Recently_Deleted_NoteCreateWithoutTopicInput, Recently_Deleted_NoteUncheckedCreateWithoutTopicInput> | Recently_Deleted_NoteCreateWithoutTopicInput[] | Recently_Deleted_NoteUncheckedCreateWithoutTopicInput[]
    connectOrCreate?: Recently_Deleted_NoteCreateOrConnectWithoutTopicInput | Recently_Deleted_NoteCreateOrConnectWithoutTopicInput[]
    upsert?: Recently_Deleted_NoteUpsertWithWhereUniqueWithoutTopicInput | Recently_Deleted_NoteUpsertWithWhereUniqueWithoutTopicInput[]
    createMany?: Recently_Deleted_NoteCreateManyTopicInputEnvelope
    set?: Recently_Deleted_NoteWhereUniqueInput | Recently_Deleted_NoteWhereUniqueInput[]
    disconnect?: Recently_Deleted_NoteWhereUniqueInput | Recently_Deleted_NoteWhereUniqueInput[]
    delete?: Recently_Deleted_NoteWhereUniqueInput | Recently_Deleted_NoteWhereUniqueInput[]
    connect?: Recently_Deleted_NoteWhereUniqueInput | Recently_Deleted_NoteWhereUniqueInput[]
    update?: Recently_Deleted_NoteUpdateWithWhereUniqueWithoutTopicInput | Recently_Deleted_NoteUpdateWithWhereUniqueWithoutTopicInput[]
    updateMany?: Recently_Deleted_NoteUpdateManyWithWhereWithoutTopicInput | Recently_Deleted_NoteUpdateManyWithWhereWithoutTopicInput[]
    deleteMany?: Recently_Deleted_NoteScalarWhereInput | Recently_Deleted_NoteScalarWhereInput[]
  }

  export type Recently_Deleted_ImageUpdateManyWithoutTopicNestedInput = {
    create?: XOR<Recently_Deleted_ImageCreateWithoutTopicInput, Recently_Deleted_ImageUncheckedCreateWithoutTopicInput> | Recently_Deleted_ImageCreateWithoutTopicInput[] | Recently_Deleted_ImageUncheckedCreateWithoutTopicInput[]
    connectOrCreate?: Recently_Deleted_ImageCreateOrConnectWithoutTopicInput | Recently_Deleted_ImageCreateOrConnectWithoutTopicInput[]
    upsert?: Recently_Deleted_ImageUpsertWithWhereUniqueWithoutTopicInput | Recently_Deleted_ImageUpsertWithWhereUniqueWithoutTopicInput[]
    createMany?: Recently_Deleted_ImageCreateManyTopicInputEnvelope
    set?: Recently_Deleted_ImageWhereUniqueInput | Recently_Deleted_ImageWhereUniqueInput[]
    disconnect?: Recently_Deleted_ImageWhereUniqueInput | Recently_Deleted_ImageWhereUniqueInput[]
    delete?: Recently_Deleted_ImageWhereUniqueInput | Recently_Deleted_ImageWhereUniqueInput[]
    connect?: Recently_Deleted_ImageWhereUniqueInput | Recently_Deleted_ImageWhereUniqueInput[]
    update?: Recently_Deleted_ImageUpdateWithWhereUniqueWithoutTopicInput | Recently_Deleted_ImageUpdateWithWhereUniqueWithoutTopicInput[]
    updateMany?: Recently_Deleted_ImageUpdateManyWithWhereWithoutTopicInput | Recently_Deleted_ImageUpdateManyWithWhereWithoutTopicInput[]
    deleteMany?: Recently_Deleted_ImageScalarWhereInput | Recently_Deleted_ImageScalarWhereInput[]
  }

  export type NoteUncheckedUpdateManyWithoutTopicNestedInput = {
    create?: XOR<NoteCreateWithoutTopicInput, NoteUncheckedCreateWithoutTopicInput> | NoteCreateWithoutTopicInput[] | NoteUncheckedCreateWithoutTopicInput[]
    connectOrCreate?: NoteCreateOrConnectWithoutTopicInput | NoteCreateOrConnectWithoutTopicInput[]
    upsert?: NoteUpsertWithWhereUniqueWithoutTopicInput | NoteUpsertWithWhereUniqueWithoutTopicInput[]
    createMany?: NoteCreateManyTopicInputEnvelope
    set?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
    disconnect?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
    delete?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
    connect?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
    update?: NoteUpdateWithWhereUniqueWithoutTopicInput | NoteUpdateWithWhereUniqueWithoutTopicInput[]
    updateMany?: NoteUpdateManyWithWhereWithoutTopicInput | NoteUpdateManyWithWhereWithoutTopicInput[]
    deleteMany?: NoteScalarWhereInput | NoteScalarWhereInput[]
  }

  export type LinkUncheckedUpdateManyWithoutTopicNestedInput = {
    create?: XOR<LinkCreateWithoutTopicInput, LinkUncheckedCreateWithoutTopicInput> | LinkCreateWithoutTopicInput[] | LinkUncheckedCreateWithoutTopicInput[]
    connectOrCreate?: LinkCreateOrConnectWithoutTopicInput | LinkCreateOrConnectWithoutTopicInput[]
    upsert?: LinkUpsertWithWhereUniqueWithoutTopicInput | LinkUpsertWithWhereUniqueWithoutTopicInput[]
    createMany?: LinkCreateManyTopicInputEnvelope
    set?: LinkWhereUniqueInput | LinkWhereUniqueInput[]
    disconnect?: LinkWhereUniqueInput | LinkWhereUniqueInput[]
    delete?: LinkWhereUniqueInput | LinkWhereUniqueInput[]
    connect?: LinkWhereUniqueInput | LinkWhereUniqueInput[]
    update?: LinkUpdateWithWhereUniqueWithoutTopicInput | LinkUpdateWithWhereUniqueWithoutTopicInput[]
    updateMany?: LinkUpdateManyWithWhereWithoutTopicInput | LinkUpdateManyWithWhereWithoutTopicInput[]
    deleteMany?: LinkScalarWhereInput | LinkScalarWhereInput[]
  }

  export type AttachmentUncheckedUpdateManyWithoutTopicNestedInput = {
    create?: XOR<AttachmentCreateWithoutTopicInput, AttachmentUncheckedCreateWithoutTopicInput> | AttachmentCreateWithoutTopicInput[] | AttachmentUncheckedCreateWithoutTopicInput[]
    connectOrCreate?: AttachmentCreateOrConnectWithoutTopicInput | AttachmentCreateOrConnectWithoutTopicInput[]
    upsert?: AttachmentUpsertWithWhereUniqueWithoutTopicInput | AttachmentUpsertWithWhereUniqueWithoutTopicInput[]
    createMany?: AttachmentCreateManyTopicInputEnvelope
    set?: AttachmentWhereUniqueInput | AttachmentWhereUniqueInput[]
    disconnect?: AttachmentWhereUniqueInput | AttachmentWhereUniqueInput[]
    delete?: AttachmentWhereUniqueInput | AttachmentWhereUniqueInput[]
    connect?: AttachmentWhereUniqueInput | AttachmentWhereUniqueInput[]
    update?: AttachmentUpdateWithWhereUniqueWithoutTopicInput | AttachmentUpdateWithWhereUniqueWithoutTopicInput[]
    updateMany?: AttachmentUpdateManyWithWhereWithoutTopicInput | AttachmentUpdateManyWithWhereWithoutTopicInput[]
    deleteMany?: AttachmentScalarWhereInput | AttachmentScalarWhereInput[]
  }

  export type ImageUncheckedUpdateManyWithoutTopicNestedInput = {
    create?: XOR<ImageCreateWithoutTopicInput, ImageUncheckedCreateWithoutTopicInput> | ImageCreateWithoutTopicInput[] | ImageUncheckedCreateWithoutTopicInput[]
    connectOrCreate?: ImageCreateOrConnectWithoutTopicInput | ImageCreateOrConnectWithoutTopicInput[]
    upsert?: ImageUpsertWithWhereUniqueWithoutTopicInput | ImageUpsertWithWhereUniqueWithoutTopicInput[]
    createMany?: ImageCreateManyTopicInputEnvelope
    set?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    disconnect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    delete?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    connect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    update?: ImageUpdateWithWhereUniqueWithoutTopicInput | ImageUpdateWithWhereUniqueWithoutTopicInput[]
    updateMany?: ImageUpdateManyWithWhereWithoutTopicInput | ImageUpdateManyWithWhereWithoutTopicInput[]
    deleteMany?: ImageScalarWhereInput | ImageScalarWhereInput[]
  }

  export type Recently_Deleted_NoteUncheckedUpdateManyWithoutTopicNestedInput = {
    create?: XOR<Recently_Deleted_NoteCreateWithoutTopicInput, Recently_Deleted_NoteUncheckedCreateWithoutTopicInput> | Recently_Deleted_NoteCreateWithoutTopicInput[] | Recently_Deleted_NoteUncheckedCreateWithoutTopicInput[]
    connectOrCreate?: Recently_Deleted_NoteCreateOrConnectWithoutTopicInput | Recently_Deleted_NoteCreateOrConnectWithoutTopicInput[]
    upsert?: Recently_Deleted_NoteUpsertWithWhereUniqueWithoutTopicInput | Recently_Deleted_NoteUpsertWithWhereUniqueWithoutTopicInput[]
    createMany?: Recently_Deleted_NoteCreateManyTopicInputEnvelope
    set?: Recently_Deleted_NoteWhereUniqueInput | Recently_Deleted_NoteWhereUniqueInput[]
    disconnect?: Recently_Deleted_NoteWhereUniqueInput | Recently_Deleted_NoteWhereUniqueInput[]
    delete?: Recently_Deleted_NoteWhereUniqueInput | Recently_Deleted_NoteWhereUniqueInput[]
    connect?: Recently_Deleted_NoteWhereUniqueInput | Recently_Deleted_NoteWhereUniqueInput[]
    update?: Recently_Deleted_NoteUpdateWithWhereUniqueWithoutTopicInput | Recently_Deleted_NoteUpdateWithWhereUniqueWithoutTopicInput[]
    updateMany?: Recently_Deleted_NoteUpdateManyWithWhereWithoutTopicInput | Recently_Deleted_NoteUpdateManyWithWhereWithoutTopicInput[]
    deleteMany?: Recently_Deleted_NoteScalarWhereInput | Recently_Deleted_NoteScalarWhereInput[]
  }

  export type Recently_Deleted_ImageUncheckedUpdateManyWithoutTopicNestedInput = {
    create?: XOR<Recently_Deleted_ImageCreateWithoutTopicInput, Recently_Deleted_ImageUncheckedCreateWithoutTopicInput> | Recently_Deleted_ImageCreateWithoutTopicInput[] | Recently_Deleted_ImageUncheckedCreateWithoutTopicInput[]
    connectOrCreate?: Recently_Deleted_ImageCreateOrConnectWithoutTopicInput | Recently_Deleted_ImageCreateOrConnectWithoutTopicInput[]
    upsert?: Recently_Deleted_ImageUpsertWithWhereUniqueWithoutTopicInput | Recently_Deleted_ImageUpsertWithWhereUniqueWithoutTopicInput[]
    createMany?: Recently_Deleted_ImageCreateManyTopicInputEnvelope
    set?: Recently_Deleted_ImageWhereUniqueInput | Recently_Deleted_ImageWhereUniqueInput[]
    disconnect?: Recently_Deleted_ImageWhereUniqueInput | Recently_Deleted_ImageWhereUniqueInput[]
    delete?: Recently_Deleted_ImageWhereUniqueInput | Recently_Deleted_ImageWhereUniqueInput[]
    connect?: Recently_Deleted_ImageWhereUniqueInput | Recently_Deleted_ImageWhereUniqueInput[]
    update?: Recently_Deleted_ImageUpdateWithWhereUniqueWithoutTopicInput | Recently_Deleted_ImageUpdateWithWhereUniqueWithoutTopicInput[]
    updateMany?: Recently_Deleted_ImageUpdateManyWithWhereWithoutTopicInput | Recently_Deleted_ImageUpdateManyWithWhereWithoutTopicInput[]
    deleteMany?: Recently_Deleted_ImageScalarWhereInput | Recently_Deleted_ImageScalarWhereInput[]
  }

  export type TopicCreateNestedOneWithoutNotesInput = {
    create?: XOR<TopicCreateWithoutNotesInput, TopicUncheckedCreateWithoutNotesInput>
    connectOrCreate?: TopicCreateOrConnectWithoutNotesInput
    connect?: TopicWhereUniqueInput
  }

  export type TopicUpdateOneRequiredWithoutNotesNestedInput = {
    create?: XOR<TopicCreateWithoutNotesInput, TopicUncheckedCreateWithoutNotesInput>
    connectOrCreate?: TopicCreateOrConnectWithoutNotesInput
    upsert?: TopicUpsertWithoutNotesInput
    connect?: TopicWhereUniqueInput
    update?: XOR<XOR<TopicUpdateToOneWithWhereWithoutNotesInput, TopicUpdateWithoutNotesInput>, TopicUncheckedUpdateWithoutNotesInput>
  }

  export type TopicCreateNestedOneWithoutLinksInput = {
    create?: XOR<TopicCreateWithoutLinksInput, TopicUncheckedCreateWithoutLinksInput>
    connectOrCreate?: TopicCreateOrConnectWithoutLinksInput
    connect?: TopicWhereUniqueInput
  }

  export type TopicUpdateOneRequiredWithoutLinksNestedInput = {
    create?: XOR<TopicCreateWithoutLinksInput, TopicUncheckedCreateWithoutLinksInput>
    connectOrCreate?: TopicCreateOrConnectWithoutLinksInput
    upsert?: TopicUpsertWithoutLinksInput
    connect?: TopicWhereUniqueInput
    update?: XOR<XOR<TopicUpdateToOneWithWhereWithoutLinksInput, TopicUpdateWithoutLinksInput>, TopicUncheckedUpdateWithoutLinksInput>
  }

  export type TopicCreateNestedOneWithoutAttachmentsInput = {
    create?: XOR<TopicCreateWithoutAttachmentsInput, TopicUncheckedCreateWithoutAttachmentsInput>
    connectOrCreate?: TopicCreateOrConnectWithoutAttachmentsInput
    connect?: TopicWhereUniqueInput
  }

  export type TopicUpdateOneRequiredWithoutAttachmentsNestedInput = {
    create?: XOR<TopicCreateWithoutAttachmentsInput, TopicUncheckedCreateWithoutAttachmentsInput>
    connectOrCreate?: TopicCreateOrConnectWithoutAttachmentsInput
    upsert?: TopicUpsertWithoutAttachmentsInput
    connect?: TopicWhereUniqueInput
    update?: XOR<XOR<TopicUpdateToOneWithWhereWithoutAttachmentsInput, TopicUpdateWithoutAttachmentsInput>, TopicUncheckedUpdateWithoutAttachmentsInput>
  }

  export type TopicCreateNestedOneWithoutImagesInput = {
    create?: XOR<TopicCreateWithoutImagesInput, TopicUncheckedCreateWithoutImagesInput>
    connectOrCreate?: TopicCreateOrConnectWithoutImagesInput
    connect?: TopicWhereUniqueInput
  }

  export type TopicUpdateOneRequiredWithoutImagesNestedInput = {
    create?: XOR<TopicCreateWithoutImagesInput, TopicUncheckedCreateWithoutImagesInput>
    connectOrCreate?: TopicCreateOrConnectWithoutImagesInput
    upsert?: TopicUpsertWithoutImagesInput
    connect?: TopicWhereUniqueInput
    update?: XOR<XOR<TopicUpdateToOneWithWhereWithoutImagesInput, TopicUpdateWithoutImagesInput>, TopicUncheckedUpdateWithoutImagesInput>
  }

  export type TopicCreateNestedOneWithoutRecently_deleted_notesInput = {
    create?: XOR<TopicCreateWithoutRecently_deleted_notesInput, TopicUncheckedCreateWithoutRecently_deleted_notesInput>
    connectOrCreate?: TopicCreateOrConnectWithoutRecently_deleted_notesInput
    connect?: TopicWhereUniqueInput
  }

  export type TopicUpdateOneRequiredWithoutRecently_deleted_notesNestedInput = {
    create?: XOR<TopicCreateWithoutRecently_deleted_notesInput, TopicUncheckedCreateWithoutRecently_deleted_notesInput>
    connectOrCreate?: TopicCreateOrConnectWithoutRecently_deleted_notesInput
    upsert?: TopicUpsertWithoutRecently_deleted_notesInput
    connect?: TopicWhereUniqueInput
    update?: XOR<XOR<TopicUpdateToOneWithWhereWithoutRecently_deleted_notesInput, TopicUpdateWithoutRecently_deleted_notesInput>, TopicUncheckedUpdateWithoutRecently_deleted_notesInput>
  }

  export type TopicCreateNestedOneWithoutRecently_deleted_imagesInput = {
    create?: XOR<TopicCreateWithoutRecently_deleted_imagesInput, TopicUncheckedCreateWithoutRecently_deleted_imagesInput>
    connectOrCreate?: TopicCreateOrConnectWithoutRecently_deleted_imagesInput
    connect?: TopicWhereUniqueInput
  }

  export type TopicUpdateOneRequiredWithoutRecently_deleted_imagesNestedInput = {
    create?: XOR<TopicCreateWithoutRecently_deleted_imagesInput, TopicUncheckedCreateWithoutRecently_deleted_imagesInput>
    connectOrCreate?: TopicCreateOrConnectWithoutRecently_deleted_imagesInput
    upsert?: TopicUpsertWithoutRecently_deleted_imagesInput
    connect?: TopicWhereUniqueInput
    update?: XOR<XOR<TopicUpdateToOneWithWhereWithoutRecently_deleted_imagesInput, TopicUpdateWithoutRecently_deleted_imagesInput>, TopicUncheckedUpdateWithoutRecently_deleted_imagesInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NoteCreateWithoutTopicInput = {
    id?: string
    title: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NoteUncheckedCreateWithoutTopicInput = {
    id?: string
    title: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NoteCreateOrConnectWithoutTopicInput = {
    where: NoteWhereUniqueInput
    create: XOR<NoteCreateWithoutTopicInput, NoteUncheckedCreateWithoutTopicInput>
  }

  export type NoteCreateManyTopicInputEnvelope = {
    data: NoteCreateManyTopicInput | NoteCreateManyTopicInput[]
    skipDuplicates?: boolean
  }

  export type LinkCreateWithoutTopicInput = {
    id?: string
    url: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LinkUncheckedCreateWithoutTopicInput = {
    id?: string
    url: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LinkCreateOrConnectWithoutTopicInput = {
    where: LinkWhereUniqueInput
    create: XOR<LinkCreateWithoutTopicInput, LinkUncheckedCreateWithoutTopicInput>
  }

  export type LinkCreateManyTopicInputEnvelope = {
    data: LinkCreateManyTopicInput | LinkCreateManyTopicInput[]
    skipDuplicates?: boolean
  }

  export type AttachmentCreateWithoutTopicInput = {
    id?: string
    fileUrl: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AttachmentUncheckedCreateWithoutTopicInput = {
    id?: string
    fileUrl: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AttachmentCreateOrConnectWithoutTopicInput = {
    where: AttachmentWhereUniqueInput
    create: XOR<AttachmentCreateWithoutTopicInput, AttachmentUncheckedCreateWithoutTopicInput>
  }

  export type AttachmentCreateManyTopicInputEnvelope = {
    data: AttachmentCreateManyTopicInput | AttachmentCreateManyTopicInput[]
    skipDuplicates?: boolean
  }

  export type ImageCreateWithoutTopicInput = {
    id?: string
    imageUrl: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ImageUncheckedCreateWithoutTopicInput = {
    id?: string
    imageUrl: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ImageCreateOrConnectWithoutTopicInput = {
    where: ImageWhereUniqueInput
    create: XOR<ImageCreateWithoutTopicInput, ImageUncheckedCreateWithoutTopicInput>
  }

  export type ImageCreateManyTopicInputEnvelope = {
    data: ImageCreateManyTopicInput | ImageCreateManyTopicInput[]
    skipDuplicates?: boolean
  }

  export type Recently_Deleted_NoteCreateWithoutTopicInput = {
    id?: string
    title: string
    content: string
    deletedAt?: Date | string
  }

  export type Recently_Deleted_NoteUncheckedCreateWithoutTopicInput = {
    id?: string
    title: string
    content: string
    deletedAt?: Date | string
  }

  export type Recently_Deleted_NoteCreateOrConnectWithoutTopicInput = {
    where: Recently_Deleted_NoteWhereUniqueInput
    create: XOR<Recently_Deleted_NoteCreateWithoutTopicInput, Recently_Deleted_NoteUncheckedCreateWithoutTopicInput>
  }

  export type Recently_Deleted_NoteCreateManyTopicInputEnvelope = {
    data: Recently_Deleted_NoteCreateManyTopicInput | Recently_Deleted_NoteCreateManyTopicInput[]
    skipDuplicates?: boolean
  }

  export type Recently_Deleted_ImageCreateWithoutTopicInput = {
    id?: string
    imageUrl: string
    description?: string | null
    deletedAt?: Date | string
  }

  export type Recently_Deleted_ImageUncheckedCreateWithoutTopicInput = {
    id?: string
    imageUrl: string
    description?: string | null
    deletedAt?: Date | string
  }

  export type Recently_Deleted_ImageCreateOrConnectWithoutTopicInput = {
    where: Recently_Deleted_ImageWhereUniqueInput
    create: XOR<Recently_Deleted_ImageCreateWithoutTopicInput, Recently_Deleted_ImageUncheckedCreateWithoutTopicInput>
  }

  export type Recently_Deleted_ImageCreateManyTopicInputEnvelope = {
    data: Recently_Deleted_ImageCreateManyTopicInput | Recently_Deleted_ImageCreateManyTopicInput[]
    skipDuplicates?: boolean
  }

  export type NoteUpsertWithWhereUniqueWithoutTopicInput = {
    where: NoteWhereUniqueInput
    update: XOR<NoteUpdateWithoutTopicInput, NoteUncheckedUpdateWithoutTopicInput>
    create: XOR<NoteCreateWithoutTopicInput, NoteUncheckedCreateWithoutTopicInput>
  }

  export type NoteUpdateWithWhereUniqueWithoutTopicInput = {
    where: NoteWhereUniqueInput
    data: XOR<NoteUpdateWithoutTopicInput, NoteUncheckedUpdateWithoutTopicInput>
  }

  export type NoteUpdateManyWithWhereWithoutTopicInput = {
    where: NoteScalarWhereInput
    data: XOR<NoteUpdateManyMutationInput, NoteUncheckedUpdateManyWithoutTopicInput>
  }

  export type NoteScalarWhereInput = {
    AND?: NoteScalarWhereInput | NoteScalarWhereInput[]
    OR?: NoteScalarWhereInput[]
    NOT?: NoteScalarWhereInput | NoteScalarWhereInput[]
    id?: StringFilter<"Note"> | string
    title?: StringFilter<"Note"> | string
    content?: StringFilter<"Note"> | string
    topicId?: StringFilter<"Note"> | string
    createdAt?: DateTimeFilter<"Note"> | Date | string
    updatedAt?: DateTimeFilter<"Note"> | Date | string
  }

  export type LinkUpsertWithWhereUniqueWithoutTopicInput = {
    where: LinkWhereUniqueInput
    update: XOR<LinkUpdateWithoutTopicInput, LinkUncheckedUpdateWithoutTopicInput>
    create: XOR<LinkCreateWithoutTopicInput, LinkUncheckedCreateWithoutTopicInput>
  }

  export type LinkUpdateWithWhereUniqueWithoutTopicInput = {
    where: LinkWhereUniqueInput
    data: XOR<LinkUpdateWithoutTopicInput, LinkUncheckedUpdateWithoutTopicInput>
  }

  export type LinkUpdateManyWithWhereWithoutTopicInput = {
    where: LinkScalarWhereInput
    data: XOR<LinkUpdateManyMutationInput, LinkUncheckedUpdateManyWithoutTopicInput>
  }

  export type LinkScalarWhereInput = {
    AND?: LinkScalarWhereInput | LinkScalarWhereInput[]
    OR?: LinkScalarWhereInput[]
    NOT?: LinkScalarWhereInput | LinkScalarWhereInput[]
    id?: StringFilter<"Link"> | string
    url?: StringFilter<"Link"> | string
    description?: StringNullableFilter<"Link"> | string | null
    topicId?: StringFilter<"Link"> | string
    createdAt?: DateTimeFilter<"Link"> | Date | string
    updatedAt?: DateTimeFilter<"Link"> | Date | string
  }

  export type AttachmentUpsertWithWhereUniqueWithoutTopicInput = {
    where: AttachmentWhereUniqueInput
    update: XOR<AttachmentUpdateWithoutTopicInput, AttachmentUncheckedUpdateWithoutTopicInput>
    create: XOR<AttachmentCreateWithoutTopicInput, AttachmentUncheckedCreateWithoutTopicInput>
  }

  export type AttachmentUpdateWithWhereUniqueWithoutTopicInput = {
    where: AttachmentWhereUniqueInput
    data: XOR<AttachmentUpdateWithoutTopicInput, AttachmentUncheckedUpdateWithoutTopicInput>
  }

  export type AttachmentUpdateManyWithWhereWithoutTopicInput = {
    where: AttachmentScalarWhereInput
    data: XOR<AttachmentUpdateManyMutationInput, AttachmentUncheckedUpdateManyWithoutTopicInput>
  }

  export type AttachmentScalarWhereInput = {
    AND?: AttachmentScalarWhereInput | AttachmentScalarWhereInput[]
    OR?: AttachmentScalarWhereInput[]
    NOT?: AttachmentScalarWhereInput | AttachmentScalarWhereInput[]
    id?: StringFilter<"Attachment"> | string
    fileUrl?: StringFilter<"Attachment"> | string
    description?: StringNullableFilter<"Attachment"> | string | null
    topicId?: StringFilter<"Attachment"> | string
    createdAt?: DateTimeFilter<"Attachment"> | Date | string
    updatedAt?: DateTimeFilter<"Attachment"> | Date | string
  }

  export type ImageUpsertWithWhereUniqueWithoutTopicInput = {
    where: ImageWhereUniqueInput
    update: XOR<ImageUpdateWithoutTopicInput, ImageUncheckedUpdateWithoutTopicInput>
    create: XOR<ImageCreateWithoutTopicInput, ImageUncheckedCreateWithoutTopicInput>
  }

  export type ImageUpdateWithWhereUniqueWithoutTopicInput = {
    where: ImageWhereUniqueInput
    data: XOR<ImageUpdateWithoutTopicInput, ImageUncheckedUpdateWithoutTopicInput>
  }

  export type ImageUpdateManyWithWhereWithoutTopicInput = {
    where: ImageScalarWhereInput
    data: XOR<ImageUpdateManyMutationInput, ImageUncheckedUpdateManyWithoutTopicInput>
  }

  export type ImageScalarWhereInput = {
    AND?: ImageScalarWhereInput | ImageScalarWhereInput[]
    OR?: ImageScalarWhereInput[]
    NOT?: ImageScalarWhereInput | ImageScalarWhereInput[]
    id?: StringFilter<"Image"> | string
    imageUrl?: StringFilter<"Image"> | string
    description?: StringNullableFilter<"Image"> | string | null
    topicId?: StringFilter<"Image"> | string
    createdAt?: DateTimeFilter<"Image"> | Date | string
    updatedAt?: DateTimeFilter<"Image"> | Date | string
  }

  export type Recently_Deleted_NoteUpsertWithWhereUniqueWithoutTopicInput = {
    where: Recently_Deleted_NoteWhereUniqueInput
    update: XOR<Recently_Deleted_NoteUpdateWithoutTopicInput, Recently_Deleted_NoteUncheckedUpdateWithoutTopicInput>
    create: XOR<Recently_Deleted_NoteCreateWithoutTopicInput, Recently_Deleted_NoteUncheckedCreateWithoutTopicInput>
  }

  export type Recently_Deleted_NoteUpdateWithWhereUniqueWithoutTopicInput = {
    where: Recently_Deleted_NoteWhereUniqueInput
    data: XOR<Recently_Deleted_NoteUpdateWithoutTopicInput, Recently_Deleted_NoteUncheckedUpdateWithoutTopicInput>
  }

  export type Recently_Deleted_NoteUpdateManyWithWhereWithoutTopicInput = {
    where: Recently_Deleted_NoteScalarWhereInput
    data: XOR<Recently_Deleted_NoteUpdateManyMutationInput, Recently_Deleted_NoteUncheckedUpdateManyWithoutTopicInput>
  }

  export type Recently_Deleted_NoteScalarWhereInput = {
    AND?: Recently_Deleted_NoteScalarWhereInput | Recently_Deleted_NoteScalarWhereInput[]
    OR?: Recently_Deleted_NoteScalarWhereInput[]
    NOT?: Recently_Deleted_NoteScalarWhereInput | Recently_Deleted_NoteScalarWhereInput[]
    id?: StringFilter<"Recently_Deleted_Note"> | string
    title?: StringFilter<"Recently_Deleted_Note"> | string
    content?: StringFilter<"Recently_Deleted_Note"> | string
    topicId?: StringFilter<"Recently_Deleted_Note"> | string
    deletedAt?: DateTimeFilter<"Recently_Deleted_Note"> | Date | string
  }

  export type Recently_Deleted_ImageUpsertWithWhereUniqueWithoutTopicInput = {
    where: Recently_Deleted_ImageWhereUniqueInput
    update: XOR<Recently_Deleted_ImageUpdateWithoutTopicInput, Recently_Deleted_ImageUncheckedUpdateWithoutTopicInput>
    create: XOR<Recently_Deleted_ImageCreateWithoutTopicInput, Recently_Deleted_ImageUncheckedCreateWithoutTopicInput>
  }

  export type Recently_Deleted_ImageUpdateWithWhereUniqueWithoutTopicInput = {
    where: Recently_Deleted_ImageWhereUniqueInput
    data: XOR<Recently_Deleted_ImageUpdateWithoutTopicInput, Recently_Deleted_ImageUncheckedUpdateWithoutTopicInput>
  }

  export type Recently_Deleted_ImageUpdateManyWithWhereWithoutTopicInput = {
    where: Recently_Deleted_ImageScalarWhereInput
    data: XOR<Recently_Deleted_ImageUpdateManyMutationInput, Recently_Deleted_ImageUncheckedUpdateManyWithoutTopicInput>
  }

  export type Recently_Deleted_ImageScalarWhereInput = {
    AND?: Recently_Deleted_ImageScalarWhereInput | Recently_Deleted_ImageScalarWhereInput[]
    OR?: Recently_Deleted_ImageScalarWhereInput[]
    NOT?: Recently_Deleted_ImageScalarWhereInput | Recently_Deleted_ImageScalarWhereInput[]
    id?: StringFilter<"Recently_Deleted_Image"> | string
    imageUrl?: StringFilter<"Recently_Deleted_Image"> | string
    description?: StringNullableFilter<"Recently_Deleted_Image"> | string | null
    topicId?: StringFilter<"Recently_Deleted_Image"> | string
    deletedAt?: DateTimeFilter<"Recently_Deleted_Image"> | Date | string
  }

  export type TopicCreateWithoutNotesInput = {
    id?: string
    title: string
    description?: string | null
    imageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    links?: LinkCreateNestedManyWithoutTopicInput
    attachments?: AttachmentCreateNestedManyWithoutTopicInput
    images?: ImageCreateNestedManyWithoutTopicInput
    recently_deleted_notes?: Recently_Deleted_NoteCreateNestedManyWithoutTopicInput
    recently_deleted_images?: Recently_Deleted_ImageCreateNestedManyWithoutTopicInput
  }

  export type TopicUncheckedCreateWithoutNotesInput = {
    id?: string
    title: string
    description?: string | null
    imageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    links?: LinkUncheckedCreateNestedManyWithoutTopicInput
    attachments?: AttachmentUncheckedCreateNestedManyWithoutTopicInput
    images?: ImageUncheckedCreateNestedManyWithoutTopicInput
    recently_deleted_notes?: Recently_Deleted_NoteUncheckedCreateNestedManyWithoutTopicInput
    recently_deleted_images?: Recently_Deleted_ImageUncheckedCreateNestedManyWithoutTopicInput
  }

  export type TopicCreateOrConnectWithoutNotesInput = {
    where: TopicWhereUniqueInput
    create: XOR<TopicCreateWithoutNotesInput, TopicUncheckedCreateWithoutNotesInput>
  }

  export type TopicUpsertWithoutNotesInput = {
    update: XOR<TopicUpdateWithoutNotesInput, TopicUncheckedUpdateWithoutNotesInput>
    create: XOR<TopicCreateWithoutNotesInput, TopicUncheckedCreateWithoutNotesInput>
    where?: TopicWhereInput
  }

  export type TopicUpdateToOneWithWhereWithoutNotesInput = {
    where?: TopicWhereInput
    data: XOR<TopicUpdateWithoutNotesInput, TopicUncheckedUpdateWithoutNotesInput>
  }

  export type TopicUpdateWithoutNotesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    links?: LinkUpdateManyWithoutTopicNestedInput
    attachments?: AttachmentUpdateManyWithoutTopicNestedInput
    images?: ImageUpdateManyWithoutTopicNestedInput
    recently_deleted_notes?: Recently_Deleted_NoteUpdateManyWithoutTopicNestedInput
    recently_deleted_images?: Recently_Deleted_ImageUpdateManyWithoutTopicNestedInput
  }

  export type TopicUncheckedUpdateWithoutNotesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    links?: LinkUncheckedUpdateManyWithoutTopicNestedInput
    attachments?: AttachmentUncheckedUpdateManyWithoutTopicNestedInput
    images?: ImageUncheckedUpdateManyWithoutTopicNestedInput
    recently_deleted_notes?: Recently_Deleted_NoteUncheckedUpdateManyWithoutTopicNestedInput
    recently_deleted_images?: Recently_Deleted_ImageUncheckedUpdateManyWithoutTopicNestedInput
  }

  export type TopicCreateWithoutLinksInput = {
    id?: string
    title: string
    description?: string | null
    imageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    notes?: NoteCreateNestedManyWithoutTopicInput
    attachments?: AttachmentCreateNestedManyWithoutTopicInput
    images?: ImageCreateNestedManyWithoutTopicInput
    recently_deleted_notes?: Recently_Deleted_NoteCreateNestedManyWithoutTopicInput
    recently_deleted_images?: Recently_Deleted_ImageCreateNestedManyWithoutTopicInput
  }

  export type TopicUncheckedCreateWithoutLinksInput = {
    id?: string
    title: string
    description?: string | null
    imageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    notes?: NoteUncheckedCreateNestedManyWithoutTopicInput
    attachments?: AttachmentUncheckedCreateNestedManyWithoutTopicInput
    images?: ImageUncheckedCreateNestedManyWithoutTopicInput
    recently_deleted_notes?: Recently_Deleted_NoteUncheckedCreateNestedManyWithoutTopicInput
    recently_deleted_images?: Recently_Deleted_ImageUncheckedCreateNestedManyWithoutTopicInput
  }

  export type TopicCreateOrConnectWithoutLinksInput = {
    where: TopicWhereUniqueInput
    create: XOR<TopicCreateWithoutLinksInput, TopicUncheckedCreateWithoutLinksInput>
  }

  export type TopicUpsertWithoutLinksInput = {
    update: XOR<TopicUpdateWithoutLinksInput, TopicUncheckedUpdateWithoutLinksInput>
    create: XOR<TopicCreateWithoutLinksInput, TopicUncheckedCreateWithoutLinksInput>
    where?: TopicWhereInput
  }

  export type TopicUpdateToOneWithWhereWithoutLinksInput = {
    where?: TopicWhereInput
    data: XOR<TopicUpdateWithoutLinksInput, TopicUncheckedUpdateWithoutLinksInput>
  }

  export type TopicUpdateWithoutLinksInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NoteUpdateManyWithoutTopicNestedInput
    attachments?: AttachmentUpdateManyWithoutTopicNestedInput
    images?: ImageUpdateManyWithoutTopicNestedInput
    recently_deleted_notes?: Recently_Deleted_NoteUpdateManyWithoutTopicNestedInput
    recently_deleted_images?: Recently_Deleted_ImageUpdateManyWithoutTopicNestedInput
  }

  export type TopicUncheckedUpdateWithoutLinksInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NoteUncheckedUpdateManyWithoutTopicNestedInput
    attachments?: AttachmentUncheckedUpdateManyWithoutTopicNestedInput
    images?: ImageUncheckedUpdateManyWithoutTopicNestedInput
    recently_deleted_notes?: Recently_Deleted_NoteUncheckedUpdateManyWithoutTopicNestedInput
    recently_deleted_images?: Recently_Deleted_ImageUncheckedUpdateManyWithoutTopicNestedInput
  }

  export type TopicCreateWithoutAttachmentsInput = {
    id?: string
    title: string
    description?: string | null
    imageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    notes?: NoteCreateNestedManyWithoutTopicInput
    links?: LinkCreateNestedManyWithoutTopicInput
    images?: ImageCreateNestedManyWithoutTopicInput
    recently_deleted_notes?: Recently_Deleted_NoteCreateNestedManyWithoutTopicInput
    recently_deleted_images?: Recently_Deleted_ImageCreateNestedManyWithoutTopicInput
  }

  export type TopicUncheckedCreateWithoutAttachmentsInput = {
    id?: string
    title: string
    description?: string | null
    imageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    notes?: NoteUncheckedCreateNestedManyWithoutTopicInput
    links?: LinkUncheckedCreateNestedManyWithoutTopicInput
    images?: ImageUncheckedCreateNestedManyWithoutTopicInput
    recently_deleted_notes?: Recently_Deleted_NoteUncheckedCreateNestedManyWithoutTopicInput
    recently_deleted_images?: Recently_Deleted_ImageUncheckedCreateNestedManyWithoutTopicInput
  }

  export type TopicCreateOrConnectWithoutAttachmentsInput = {
    where: TopicWhereUniqueInput
    create: XOR<TopicCreateWithoutAttachmentsInput, TopicUncheckedCreateWithoutAttachmentsInput>
  }

  export type TopicUpsertWithoutAttachmentsInput = {
    update: XOR<TopicUpdateWithoutAttachmentsInput, TopicUncheckedUpdateWithoutAttachmentsInput>
    create: XOR<TopicCreateWithoutAttachmentsInput, TopicUncheckedCreateWithoutAttachmentsInput>
    where?: TopicWhereInput
  }

  export type TopicUpdateToOneWithWhereWithoutAttachmentsInput = {
    where?: TopicWhereInput
    data: XOR<TopicUpdateWithoutAttachmentsInput, TopicUncheckedUpdateWithoutAttachmentsInput>
  }

  export type TopicUpdateWithoutAttachmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NoteUpdateManyWithoutTopicNestedInput
    links?: LinkUpdateManyWithoutTopicNestedInput
    images?: ImageUpdateManyWithoutTopicNestedInput
    recently_deleted_notes?: Recently_Deleted_NoteUpdateManyWithoutTopicNestedInput
    recently_deleted_images?: Recently_Deleted_ImageUpdateManyWithoutTopicNestedInput
  }

  export type TopicUncheckedUpdateWithoutAttachmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NoteUncheckedUpdateManyWithoutTopicNestedInput
    links?: LinkUncheckedUpdateManyWithoutTopicNestedInput
    images?: ImageUncheckedUpdateManyWithoutTopicNestedInput
    recently_deleted_notes?: Recently_Deleted_NoteUncheckedUpdateManyWithoutTopicNestedInput
    recently_deleted_images?: Recently_Deleted_ImageUncheckedUpdateManyWithoutTopicNestedInput
  }

  export type TopicCreateWithoutImagesInput = {
    id?: string
    title: string
    description?: string | null
    imageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    notes?: NoteCreateNestedManyWithoutTopicInput
    links?: LinkCreateNestedManyWithoutTopicInput
    attachments?: AttachmentCreateNestedManyWithoutTopicInput
    recently_deleted_notes?: Recently_Deleted_NoteCreateNestedManyWithoutTopicInput
    recently_deleted_images?: Recently_Deleted_ImageCreateNestedManyWithoutTopicInput
  }

  export type TopicUncheckedCreateWithoutImagesInput = {
    id?: string
    title: string
    description?: string | null
    imageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    notes?: NoteUncheckedCreateNestedManyWithoutTopicInput
    links?: LinkUncheckedCreateNestedManyWithoutTopicInput
    attachments?: AttachmentUncheckedCreateNestedManyWithoutTopicInput
    recently_deleted_notes?: Recently_Deleted_NoteUncheckedCreateNestedManyWithoutTopicInput
    recently_deleted_images?: Recently_Deleted_ImageUncheckedCreateNestedManyWithoutTopicInput
  }

  export type TopicCreateOrConnectWithoutImagesInput = {
    where: TopicWhereUniqueInput
    create: XOR<TopicCreateWithoutImagesInput, TopicUncheckedCreateWithoutImagesInput>
  }

  export type TopicUpsertWithoutImagesInput = {
    update: XOR<TopicUpdateWithoutImagesInput, TopicUncheckedUpdateWithoutImagesInput>
    create: XOR<TopicCreateWithoutImagesInput, TopicUncheckedCreateWithoutImagesInput>
    where?: TopicWhereInput
  }

  export type TopicUpdateToOneWithWhereWithoutImagesInput = {
    where?: TopicWhereInput
    data: XOR<TopicUpdateWithoutImagesInput, TopicUncheckedUpdateWithoutImagesInput>
  }

  export type TopicUpdateWithoutImagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NoteUpdateManyWithoutTopicNestedInput
    links?: LinkUpdateManyWithoutTopicNestedInput
    attachments?: AttachmentUpdateManyWithoutTopicNestedInput
    recently_deleted_notes?: Recently_Deleted_NoteUpdateManyWithoutTopicNestedInput
    recently_deleted_images?: Recently_Deleted_ImageUpdateManyWithoutTopicNestedInput
  }

  export type TopicUncheckedUpdateWithoutImagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NoteUncheckedUpdateManyWithoutTopicNestedInput
    links?: LinkUncheckedUpdateManyWithoutTopicNestedInput
    attachments?: AttachmentUncheckedUpdateManyWithoutTopicNestedInput
    recently_deleted_notes?: Recently_Deleted_NoteUncheckedUpdateManyWithoutTopicNestedInput
    recently_deleted_images?: Recently_Deleted_ImageUncheckedUpdateManyWithoutTopicNestedInput
  }

  export type TopicCreateWithoutRecently_deleted_notesInput = {
    id?: string
    title: string
    description?: string | null
    imageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    notes?: NoteCreateNestedManyWithoutTopicInput
    links?: LinkCreateNestedManyWithoutTopicInput
    attachments?: AttachmentCreateNestedManyWithoutTopicInput
    images?: ImageCreateNestedManyWithoutTopicInput
    recently_deleted_images?: Recently_Deleted_ImageCreateNestedManyWithoutTopicInput
  }

  export type TopicUncheckedCreateWithoutRecently_deleted_notesInput = {
    id?: string
    title: string
    description?: string | null
    imageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    notes?: NoteUncheckedCreateNestedManyWithoutTopicInput
    links?: LinkUncheckedCreateNestedManyWithoutTopicInput
    attachments?: AttachmentUncheckedCreateNestedManyWithoutTopicInput
    images?: ImageUncheckedCreateNestedManyWithoutTopicInput
    recently_deleted_images?: Recently_Deleted_ImageUncheckedCreateNestedManyWithoutTopicInput
  }

  export type TopicCreateOrConnectWithoutRecently_deleted_notesInput = {
    where: TopicWhereUniqueInput
    create: XOR<TopicCreateWithoutRecently_deleted_notesInput, TopicUncheckedCreateWithoutRecently_deleted_notesInput>
  }

  export type TopicUpsertWithoutRecently_deleted_notesInput = {
    update: XOR<TopicUpdateWithoutRecently_deleted_notesInput, TopicUncheckedUpdateWithoutRecently_deleted_notesInput>
    create: XOR<TopicCreateWithoutRecently_deleted_notesInput, TopicUncheckedCreateWithoutRecently_deleted_notesInput>
    where?: TopicWhereInput
  }

  export type TopicUpdateToOneWithWhereWithoutRecently_deleted_notesInput = {
    where?: TopicWhereInput
    data: XOR<TopicUpdateWithoutRecently_deleted_notesInput, TopicUncheckedUpdateWithoutRecently_deleted_notesInput>
  }

  export type TopicUpdateWithoutRecently_deleted_notesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NoteUpdateManyWithoutTopicNestedInput
    links?: LinkUpdateManyWithoutTopicNestedInput
    attachments?: AttachmentUpdateManyWithoutTopicNestedInput
    images?: ImageUpdateManyWithoutTopicNestedInput
    recently_deleted_images?: Recently_Deleted_ImageUpdateManyWithoutTopicNestedInput
  }

  export type TopicUncheckedUpdateWithoutRecently_deleted_notesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NoteUncheckedUpdateManyWithoutTopicNestedInput
    links?: LinkUncheckedUpdateManyWithoutTopicNestedInput
    attachments?: AttachmentUncheckedUpdateManyWithoutTopicNestedInput
    images?: ImageUncheckedUpdateManyWithoutTopicNestedInput
    recently_deleted_images?: Recently_Deleted_ImageUncheckedUpdateManyWithoutTopicNestedInput
  }

  export type TopicCreateWithoutRecently_deleted_imagesInput = {
    id?: string
    title: string
    description?: string | null
    imageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    notes?: NoteCreateNestedManyWithoutTopicInput
    links?: LinkCreateNestedManyWithoutTopicInput
    attachments?: AttachmentCreateNestedManyWithoutTopicInput
    images?: ImageCreateNestedManyWithoutTopicInput
    recently_deleted_notes?: Recently_Deleted_NoteCreateNestedManyWithoutTopicInput
  }

  export type TopicUncheckedCreateWithoutRecently_deleted_imagesInput = {
    id?: string
    title: string
    description?: string | null
    imageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    notes?: NoteUncheckedCreateNestedManyWithoutTopicInput
    links?: LinkUncheckedCreateNestedManyWithoutTopicInput
    attachments?: AttachmentUncheckedCreateNestedManyWithoutTopicInput
    images?: ImageUncheckedCreateNestedManyWithoutTopicInput
    recently_deleted_notes?: Recently_Deleted_NoteUncheckedCreateNestedManyWithoutTopicInput
  }

  export type TopicCreateOrConnectWithoutRecently_deleted_imagesInput = {
    where: TopicWhereUniqueInput
    create: XOR<TopicCreateWithoutRecently_deleted_imagesInput, TopicUncheckedCreateWithoutRecently_deleted_imagesInput>
  }

  export type TopicUpsertWithoutRecently_deleted_imagesInput = {
    update: XOR<TopicUpdateWithoutRecently_deleted_imagesInput, TopicUncheckedUpdateWithoutRecently_deleted_imagesInput>
    create: XOR<TopicCreateWithoutRecently_deleted_imagesInput, TopicUncheckedCreateWithoutRecently_deleted_imagesInput>
    where?: TopicWhereInput
  }

  export type TopicUpdateToOneWithWhereWithoutRecently_deleted_imagesInput = {
    where?: TopicWhereInput
    data: XOR<TopicUpdateWithoutRecently_deleted_imagesInput, TopicUncheckedUpdateWithoutRecently_deleted_imagesInput>
  }

  export type TopicUpdateWithoutRecently_deleted_imagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NoteUpdateManyWithoutTopicNestedInput
    links?: LinkUpdateManyWithoutTopicNestedInput
    attachments?: AttachmentUpdateManyWithoutTopicNestedInput
    images?: ImageUpdateManyWithoutTopicNestedInput
    recently_deleted_notes?: Recently_Deleted_NoteUpdateManyWithoutTopicNestedInput
  }

  export type TopicUncheckedUpdateWithoutRecently_deleted_imagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NoteUncheckedUpdateManyWithoutTopicNestedInput
    links?: LinkUncheckedUpdateManyWithoutTopicNestedInput
    attachments?: AttachmentUncheckedUpdateManyWithoutTopicNestedInput
    images?: ImageUncheckedUpdateManyWithoutTopicNestedInput
    recently_deleted_notes?: Recently_Deleted_NoteUncheckedUpdateManyWithoutTopicNestedInput
  }

  export type NoteCreateManyTopicInput = {
    id?: string
    title: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LinkCreateManyTopicInput = {
    id?: string
    url: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AttachmentCreateManyTopicInput = {
    id?: string
    fileUrl: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ImageCreateManyTopicInput = {
    id?: string
    imageUrl: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type Recently_Deleted_NoteCreateManyTopicInput = {
    id?: string
    title: string
    content: string
    deletedAt?: Date | string
  }

  export type Recently_Deleted_ImageCreateManyTopicInput = {
    id?: string
    imageUrl: string
    description?: string | null
    deletedAt?: Date | string
  }

  export type NoteUpdateWithoutTopicInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NoteUncheckedUpdateWithoutTopicInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NoteUncheckedUpdateManyWithoutTopicInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LinkUpdateWithoutTopicInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LinkUncheckedUpdateWithoutTopicInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LinkUncheckedUpdateManyWithoutTopicInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttachmentUpdateWithoutTopicInput = {
    id?: StringFieldUpdateOperationsInput | string
    fileUrl?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttachmentUncheckedUpdateWithoutTopicInput = {
    id?: StringFieldUpdateOperationsInput | string
    fileUrl?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttachmentUncheckedUpdateManyWithoutTopicInput = {
    id?: StringFieldUpdateOperationsInput | string
    fileUrl?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ImageUpdateWithoutTopicInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ImageUncheckedUpdateWithoutTopicInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ImageUncheckedUpdateManyWithoutTopicInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Recently_Deleted_NoteUpdateWithoutTopicInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    deletedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Recently_Deleted_NoteUncheckedUpdateWithoutTopicInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    deletedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Recently_Deleted_NoteUncheckedUpdateManyWithoutTopicInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    deletedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Recently_Deleted_ImageUpdateWithoutTopicInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Recently_Deleted_ImageUncheckedUpdateWithoutTopicInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Recently_Deleted_ImageUncheckedUpdateManyWithoutTopicInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use TopicCountOutputTypeDefaultArgs instead
     */
    export type TopicCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TopicCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TopicDefaultArgs instead
     */
    export type TopicArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TopicDefaultArgs<ExtArgs>
    /**
     * @deprecated Use NoteDefaultArgs instead
     */
    export type NoteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = NoteDefaultArgs<ExtArgs>
    /**
     * @deprecated Use LinkDefaultArgs instead
     */
    export type LinkArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = LinkDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AttachmentDefaultArgs instead
     */
    export type AttachmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AttachmentDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ImageDefaultArgs instead
     */
    export type ImageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ImageDefaultArgs<ExtArgs>
    /**
     * @deprecated Use Recently_Deleted_NoteDefaultArgs instead
     */
    export type Recently_Deleted_NoteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Recently_Deleted_NoteDefaultArgs<ExtArgs>
    /**
     * @deprecated Use Recently_Deleted_ImageDefaultArgs instead
     */
    export type Recently_Deleted_ImageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Recently_Deleted_ImageDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}
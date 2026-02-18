
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model IntakeSubmission
 * 
 */
export type IntakeSubmission = $Result.DefaultSelection<Prisma.$IntakeSubmissionPayload>
/**
 * Model ConsultationVisit
 * 
 */
export type ConsultationVisit = $Result.DefaultSelection<Prisma.$ConsultationVisitPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more IntakeSubmissions
 * const intakeSubmissions = await prisma.intakeSubmission.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more IntakeSubmissions
   * const intakeSubmissions = await prisma.intakeSubmission.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.intakeSubmission`: Exposes CRUD operations for the **IntakeSubmission** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more IntakeSubmissions
    * const intakeSubmissions = await prisma.intakeSubmission.findMany()
    * ```
    */
  get intakeSubmission(): Prisma.IntakeSubmissionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.consultationVisit`: Exposes CRUD operations for the **ConsultationVisit** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ConsultationVisits
    * const consultationVisits = await prisma.consultationVisit.findMany()
    * ```
    */
  get consultationVisit(): Prisma.ConsultationVisitDelegate<ExtArgs, ClientOptions>;
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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.3.0
   * Query Engine version: 9d6ad21cbbceab97458517b147a6a09ff43aa735
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
    IntakeSubmission: 'IntakeSubmission',
    ConsultationVisit: 'ConsultationVisit'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "intakeSubmission" | "consultationVisit"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      IntakeSubmission: {
        payload: Prisma.$IntakeSubmissionPayload<ExtArgs>
        fields: Prisma.IntakeSubmissionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.IntakeSubmissionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IntakeSubmissionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.IntakeSubmissionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IntakeSubmissionPayload>
          }
          findFirst: {
            args: Prisma.IntakeSubmissionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IntakeSubmissionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.IntakeSubmissionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IntakeSubmissionPayload>
          }
          findMany: {
            args: Prisma.IntakeSubmissionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IntakeSubmissionPayload>[]
          }
          create: {
            args: Prisma.IntakeSubmissionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IntakeSubmissionPayload>
          }
          createMany: {
            args: Prisma.IntakeSubmissionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.IntakeSubmissionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IntakeSubmissionPayload>[]
          }
          delete: {
            args: Prisma.IntakeSubmissionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IntakeSubmissionPayload>
          }
          update: {
            args: Prisma.IntakeSubmissionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IntakeSubmissionPayload>
          }
          deleteMany: {
            args: Prisma.IntakeSubmissionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.IntakeSubmissionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.IntakeSubmissionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IntakeSubmissionPayload>[]
          }
          upsert: {
            args: Prisma.IntakeSubmissionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IntakeSubmissionPayload>
          }
          aggregate: {
            args: Prisma.IntakeSubmissionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateIntakeSubmission>
          }
          groupBy: {
            args: Prisma.IntakeSubmissionGroupByArgs<ExtArgs>
            result: $Utils.Optional<IntakeSubmissionGroupByOutputType>[]
          }
          count: {
            args: Prisma.IntakeSubmissionCountArgs<ExtArgs>
            result: $Utils.Optional<IntakeSubmissionCountAggregateOutputType> | number
          }
        }
      }
      ConsultationVisit: {
        payload: Prisma.$ConsultationVisitPayload<ExtArgs>
        fields: Prisma.ConsultationVisitFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ConsultationVisitFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultationVisitPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ConsultationVisitFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultationVisitPayload>
          }
          findFirst: {
            args: Prisma.ConsultationVisitFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultationVisitPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ConsultationVisitFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultationVisitPayload>
          }
          findMany: {
            args: Prisma.ConsultationVisitFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultationVisitPayload>[]
          }
          create: {
            args: Prisma.ConsultationVisitCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultationVisitPayload>
          }
          createMany: {
            args: Prisma.ConsultationVisitCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ConsultationVisitCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultationVisitPayload>[]
          }
          delete: {
            args: Prisma.ConsultationVisitDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultationVisitPayload>
          }
          update: {
            args: Prisma.ConsultationVisitUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultationVisitPayload>
          }
          deleteMany: {
            args: Prisma.ConsultationVisitDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ConsultationVisitUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ConsultationVisitUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultationVisitPayload>[]
          }
          upsert: {
            args: Prisma.ConsultationVisitUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultationVisitPayload>
          }
          aggregate: {
            args: Prisma.ConsultationVisitAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateConsultationVisit>
          }
          groupBy: {
            args: Prisma.ConsultationVisitGroupByArgs<ExtArgs>
            result: $Utils.Optional<ConsultationVisitGroupByOutputType>[]
          }
          count: {
            args: Prisma.ConsultationVisitCountArgs<ExtArgs>
            result: $Utils.Optional<ConsultationVisitCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
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
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    intakeSubmission?: IntakeSubmissionOmit
    consultationVisit?: ConsultationVisitOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
    | 'updateManyAndReturn'
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
   * Models
   */

  /**
   * Model IntakeSubmission
   */

  export type AggregateIntakeSubmission = {
    _count: IntakeSubmissionCountAggregateOutputType | null
    _min: IntakeSubmissionMinAggregateOutputType | null
    _max: IntakeSubmissionMaxAggregateOutputType | null
  }

  export type IntakeSubmissionMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    purpose: string | null
    region: string | null
    startPreference: string | null
    summary: string | null
    reviewSummary: string | null
    selectedPackage: string | null
    contact: string | null
    referenceId: string | null
    userAgent: string | null
    ipAddress: string | null
  }

  export type IntakeSubmissionMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    purpose: string | null
    region: string | null
    startPreference: string | null
    summary: string | null
    reviewSummary: string | null
    selectedPackage: string | null
    contact: string | null
    referenceId: string | null
    userAgent: string | null
    ipAddress: string | null
  }

  export type IntakeSubmissionCountAggregateOutputType = {
    id: number
    createdAt: number
    purpose: number
    region: number
    startPreference: number
    summary: number
    reviewSummary: number
    selectedPackage: number
    contact: number
    messages: number
    estimate: number
    plan: number
    referenceId: number
    userAgent: number
    ipAddress: number
    _all: number
  }


  export type IntakeSubmissionMinAggregateInputType = {
    id?: true
    createdAt?: true
    purpose?: true
    region?: true
    startPreference?: true
    summary?: true
    reviewSummary?: true
    selectedPackage?: true
    contact?: true
    referenceId?: true
    userAgent?: true
    ipAddress?: true
  }

  export type IntakeSubmissionMaxAggregateInputType = {
    id?: true
    createdAt?: true
    purpose?: true
    region?: true
    startPreference?: true
    summary?: true
    reviewSummary?: true
    selectedPackage?: true
    contact?: true
    referenceId?: true
    userAgent?: true
    ipAddress?: true
  }

  export type IntakeSubmissionCountAggregateInputType = {
    id?: true
    createdAt?: true
    purpose?: true
    region?: true
    startPreference?: true
    summary?: true
    reviewSummary?: true
    selectedPackage?: true
    contact?: true
    messages?: true
    estimate?: true
    plan?: true
    referenceId?: true
    userAgent?: true
    ipAddress?: true
    _all?: true
  }

  export type IntakeSubmissionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which IntakeSubmission to aggregate.
     */
    where?: IntakeSubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IntakeSubmissions to fetch.
     */
    orderBy?: IntakeSubmissionOrderByWithRelationInput | IntakeSubmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: IntakeSubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IntakeSubmissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IntakeSubmissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned IntakeSubmissions
    **/
    _count?: true | IntakeSubmissionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: IntakeSubmissionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: IntakeSubmissionMaxAggregateInputType
  }

  export type GetIntakeSubmissionAggregateType<T extends IntakeSubmissionAggregateArgs> = {
        [P in keyof T & keyof AggregateIntakeSubmission]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateIntakeSubmission[P]>
      : GetScalarType<T[P], AggregateIntakeSubmission[P]>
  }




  export type IntakeSubmissionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IntakeSubmissionWhereInput
    orderBy?: IntakeSubmissionOrderByWithAggregationInput | IntakeSubmissionOrderByWithAggregationInput[]
    by: IntakeSubmissionScalarFieldEnum[] | IntakeSubmissionScalarFieldEnum
    having?: IntakeSubmissionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: IntakeSubmissionCountAggregateInputType | true
    _min?: IntakeSubmissionMinAggregateInputType
    _max?: IntakeSubmissionMaxAggregateInputType
  }

  export type IntakeSubmissionGroupByOutputType = {
    id: string
    createdAt: Date
    purpose: string
    region: string
    startPreference: string | null
    summary: string
    reviewSummary: string | null
    selectedPackage: string
    contact: string
    messages: JsonValue
    estimate: JsonValue | null
    plan: JsonValue | null
    referenceId: string | null
    userAgent: string | null
    ipAddress: string | null
    _count: IntakeSubmissionCountAggregateOutputType | null
    _min: IntakeSubmissionMinAggregateOutputType | null
    _max: IntakeSubmissionMaxAggregateOutputType | null
  }

  type GetIntakeSubmissionGroupByPayload<T extends IntakeSubmissionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<IntakeSubmissionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof IntakeSubmissionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], IntakeSubmissionGroupByOutputType[P]>
            : GetScalarType<T[P], IntakeSubmissionGroupByOutputType[P]>
        }
      >
    >


  export type IntakeSubmissionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    purpose?: boolean
    region?: boolean
    startPreference?: boolean
    summary?: boolean
    reviewSummary?: boolean
    selectedPackage?: boolean
    contact?: boolean
    messages?: boolean
    estimate?: boolean
    plan?: boolean
    referenceId?: boolean
    userAgent?: boolean
    ipAddress?: boolean
  }, ExtArgs["result"]["intakeSubmission"]>

  export type IntakeSubmissionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    purpose?: boolean
    region?: boolean
    startPreference?: boolean
    summary?: boolean
    reviewSummary?: boolean
    selectedPackage?: boolean
    contact?: boolean
    messages?: boolean
    estimate?: boolean
    plan?: boolean
    referenceId?: boolean
    userAgent?: boolean
    ipAddress?: boolean
  }, ExtArgs["result"]["intakeSubmission"]>

  export type IntakeSubmissionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    purpose?: boolean
    region?: boolean
    startPreference?: boolean
    summary?: boolean
    reviewSummary?: boolean
    selectedPackage?: boolean
    contact?: boolean
    messages?: boolean
    estimate?: boolean
    plan?: boolean
    referenceId?: boolean
    userAgent?: boolean
    ipAddress?: boolean
  }, ExtArgs["result"]["intakeSubmission"]>

  export type IntakeSubmissionSelectScalar = {
    id?: boolean
    createdAt?: boolean
    purpose?: boolean
    region?: boolean
    startPreference?: boolean
    summary?: boolean
    reviewSummary?: boolean
    selectedPackage?: boolean
    contact?: boolean
    messages?: boolean
    estimate?: boolean
    plan?: boolean
    referenceId?: boolean
    userAgent?: boolean
    ipAddress?: boolean
  }

  export type IntakeSubmissionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "purpose" | "region" | "startPreference" | "summary" | "reviewSummary" | "selectedPackage" | "contact" | "messages" | "estimate" | "plan" | "referenceId" | "userAgent" | "ipAddress", ExtArgs["result"]["intakeSubmission"]>

  export type $IntakeSubmissionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "IntakeSubmission"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      purpose: string
      region: string
      startPreference: string | null
      summary: string
      reviewSummary: string | null
      selectedPackage: string
      contact: string
      messages: Prisma.JsonValue
      estimate: Prisma.JsonValue | null
      plan: Prisma.JsonValue | null
      referenceId: string | null
      userAgent: string | null
      ipAddress: string | null
    }, ExtArgs["result"]["intakeSubmission"]>
    composites: {}
  }

  type IntakeSubmissionGetPayload<S extends boolean | null | undefined | IntakeSubmissionDefaultArgs> = $Result.GetResult<Prisma.$IntakeSubmissionPayload, S>

  type IntakeSubmissionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<IntakeSubmissionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: IntakeSubmissionCountAggregateInputType | true
    }

  export interface IntakeSubmissionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['IntakeSubmission'], meta: { name: 'IntakeSubmission' } }
    /**
     * Find zero or one IntakeSubmission that matches the filter.
     * @param {IntakeSubmissionFindUniqueArgs} args - Arguments to find a IntakeSubmission
     * @example
     * // Get one IntakeSubmission
     * const intakeSubmission = await prisma.intakeSubmission.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends IntakeSubmissionFindUniqueArgs>(args: SelectSubset<T, IntakeSubmissionFindUniqueArgs<ExtArgs>>): Prisma__IntakeSubmissionClient<$Result.GetResult<Prisma.$IntakeSubmissionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one IntakeSubmission that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {IntakeSubmissionFindUniqueOrThrowArgs} args - Arguments to find a IntakeSubmission
     * @example
     * // Get one IntakeSubmission
     * const intakeSubmission = await prisma.intakeSubmission.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends IntakeSubmissionFindUniqueOrThrowArgs>(args: SelectSubset<T, IntakeSubmissionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__IntakeSubmissionClient<$Result.GetResult<Prisma.$IntakeSubmissionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first IntakeSubmission that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IntakeSubmissionFindFirstArgs} args - Arguments to find a IntakeSubmission
     * @example
     * // Get one IntakeSubmission
     * const intakeSubmission = await prisma.intakeSubmission.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends IntakeSubmissionFindFirstArgs>(args?: SelectSubset<T, IntakeSubmissionFindFirstArgs<ExtArgs>>): Prisma__IntakeSubmissionClient<$Result.GetResult<Prisma.$IntakeSubmissionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first IntakeSubmission that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IntakeSubmissionFindFirstOrThrowArgs} args - Arguments to find a IntakeSubmission
     * @example
     * // Get one IntakeSubmission
     * const intakeSubmission = await prisma.intakeSubmission.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends IntakeSubmissionFindFirstOrThrowArgs>(args?: SelectSubset<T, IntakeSubmissionFindFirstOrThrowArgs<ExtArgs>>): Prisma__IntakeSubmissionClient<$Result.GetResult<Prisma.$IntakeSubmissionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more IntakeSubmissions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IntakeSubmissionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all IntakeSubmissions
     * const intakeSubmissions = await prisma.intakeSubmission.findMany()
     * 
     * // Get first 10 IntakeSubmissions
     * const intakeSubmissions = await prisma.intakeSubmission.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const intakeSubmissionWithIdOnly = await prisma.intakeSubmission.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends IntakeSubmissionFindManyArgs>(args?: SelectSubset<T, IntakeSubmissionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IntakeSubmissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a IntakeSubmission.
     * @param {IntakeSubmissionCreateArgs} args - Arguments to create a IntakeSubmission.
     * @example
     * // Create one IntakeSubmission
     * const IntakeSubmission = await prisma.intakeSubmission.create({
     *   data: {
     *     // ... data to create a IntakeSubmission
     *   }
     * })
     * 
     */
    create<T extends IntakeSubmissionCreateArgs>(args: SelectSubset<T, IntakeSubmissionCreateArgs<ExtArgs>>): Prisma__IntakeSubmissionClient<$Result.GetResult<Prisma.$IntakeSubmissionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many IntakeSubmissions.
     * @param {IntakeSubmissionCreateManyArgs} args - Arguments to create many IntakeSubmissions.
     * @example
     * // Create many IntakeSubmissions
     * const intakeSubmission = await prisma.intakeSubmission.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends IntakeSubmissionCreateManyArgs>(args?: SelectSubset<T, IntakeSubmissionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many IntakeSubmissions and returns the data saved in the database.
     * @param {IntakeSubmissionCreateManyAndReturnArgs} args - Arguments to create many IntakeSubmissions.
     * @example
     * // Create many IntakeSubmissions
     * const intakeSubmission = await prisma.intakeSubmission.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many IntakeSubmissions and only return the `id`
     * const intakeSubmissionWithIdOnly = await prisma.intakeSubmission.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends IntakeSubmissionCreateManyAndReturnArgs>(args?: SelectSubset<T, IntakeSubmissionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IntakeSubmissionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a IntakeSubmission.
     * @param {IntakeSubmissionDeleteArgs} args - Arguments to delete one IntakeSubmission.
     * @example
     * // Delete one IntakeSubmission
     * const IntakeSubmission = await prisma.intakeSubmission.delete({
     *   where: {
     *     // ... filter to delete one IntakeSubmission
     *   }
     * })
     * 
     */
    delete<T extends IntakeSubmissionDeleteArgs>(args: SelectSubset<T, IntakeSubmissionDeleteArgs<ExtArgs>>): Prisma__IntakeSubmissionClient<$Result.GetResult<Prisma.$IntakeSubmissionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one IntakeSubmission.
     * @param {IntakeSubmissionUpdateArgs} args - Arguments to update one IntakeSubmission.
     * @example
     * // Update one IntakeSubmission
     * const intakeSubmission = await prisma.intakeSubmission.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends IntakeSubmissionUpdateArgs>(args: SelectSubset<T, IntakeSubmissionUpdateArgs<ExtArgs>>): Prisma__IntakeSubmissionClient<$Result.GetResult<Prisma.$IntakeSubmissionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more IntakeSubmissions.
     * @param {IntakeSubmissionDeleteManyArgs} args - Arguments to filter IntakeSubmissions to delete.
     * @example
     * // Delete a few IntakeSubmissions
     * const { count } = await prisma.intakeSubmission.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends IntakeSubmissionDeleteManyArgs>(args?: SelectSubset<T, IntakeSubmissionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more IntakeSubmissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IntakeSubmissionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many IntakeSubmissions
     * const intakeSubmission = await prisma.intakeSubmission.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends IntakeSubmissionUpdateManyArgs>(args: SelectSubset<T, IntakeSubmissionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more IntakeSubmissions and returns the data updated in the database.
     * @param {IntakeSubmissionUpdateManyAndReturnArgs} args - Arguments to update many IntakeSubmissions.
     * @example
     * // Update many IntakeSubmissions
     * const intakeSubmission = await prisma.intakeSubmission.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more IntakeSubmissions and only return the `id`
     * const intakeSubmissionWithIdOnly = await prisma.intakeSubmission.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends IntakeSubmissionUpdateManyAndReturnArgs>(args: SelectSubset<T, IntakeSubmissionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IntakeSubmissionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one IntakeSubmission.
     * @param {IntakeSubmissionUpsertArgs} args - Arguments to update or create a IntakeSubmission.
     * @example
     * // Update or create a IntakeSubmission
     * const intakeSubmission = await prisma.intakeSubmission.upsert({
     *   create: {
     *     // ... data to create a IntakeSubmission
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the IntakeSubmission we want to update
     *   }
     * })
     */
    upsert<T extends IntakeSubmissionUpsertArgs>(args: SelectSubset<T, IntakeSubmissionUpsertArgs<ExtArgs>>): Prisma__IntakeSubmissionClient<$Result.GetResult<Prisma.$IntakeSubmissionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of IntakeSubmissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IntakeSubmissionCountArgs} args - Arguments to filter IntakeSubmissions to count.
     * @example
     * // Count the number of IntakeSubmissions
     * const count = await prisma.intakeSubmission.count({
     *   where: {
     *     // ... the filter for the IntakeSubmissions we want to count
     *   }
     * })
    **/
    count<T extends IntakeSubmissionCountArgs>(
      args?: Subset<T, IntakeSubmissionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], IntakeSubmissionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a IntakeSubmission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IntakeSubmissionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends IntakeSubmissionAggregateArgs>(args: Subset<T, IntakeSubmissionAggregateArgs>): Prisma.PrismaPromise<GetIntakeSubmissionAggregateType<T>>

    /**
     * Group by IntakeSubmission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IntakeSubmissionGroupByArgs} args - Group by arguments.
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
      T extends IntakeSubmissionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: IntakeSubmissionGroupByArgs['orderBy'] }
        : { orderBy?: IntakeSubmissionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, IntakeSubmissionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIntakeSubmissionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the IntakeSubmission model
   */
  readonly fields: IntakeSubmissionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for IntakeSubmission.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__IntakeSubmissionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the IntakeSubmission model
   */
  interface IntakeSubmissionFieldRefs {
    readonly id: FieldRef<"IntakeSubmission", 'String'>
    readonly createdAt: FieldRef<"IntakeSubmission", 'DateTime'>
    readonly purpose: FieldRef<"IntakeSubmission", 'String'>
    readonly region: FieldRef<"IntakeSubmission", 'String'>
    readonly startPreference: FieldRef<"IntakeSubmission", 'String'>
    readonly summary: FieldRef<"IntakeSubmission", 'String'>
    readonly reviewSummary: FieldRef<"IntakeSubmission", 'String'>
    readonly selectedPackage: FieldRef<"IntakeSubmission", 'String'>
    readonly contact: FieldRef<"IntakeSubmission", 'String'>
    readonly messages: FieldRef<"IntakeSubmission", 'Json'>
    readonly estimate: FieldRef<"IntakeSubmission", 'Json'>
    readonly plan: FieldRef<"IntakeSubmission", 'Json'>
    readonly referenceId: FieldRef<"IntakeSubmission", 'String'>
    readonly userAgent: FieldRef<"IntakeSubmission", 'String'>
    readonly ipAddress: FieldRef<"IntakeSubmission", 'String'>
  }
    

  // Custom InputTypes
  /**
   * IntakeSubmission findUnique
   */
  export type IntakeSubmissionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IntakeSubmission
     */
    select?: IntakeSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IntakeSubmission
     */
    omit?: IntakeSubmissionOmit<ExtArgs> | null
    /**
     * Filter, which IntakeSubmission to fetch.
     */
    where: IntakeSubmissionWhereUniqueInput
  }

  /**
   * IntakeSubmission findUniqueOrThrow
   */
  export type IntakeSubmissionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IntakeSubmission
     */
    select?: IntakeSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IntakeSubmission
     */
    omit?: IntakeSubmissionOmit<ExtArgs> | null
    /**
     * Filter, which IntakeSubmission to fetch.
     */
    where: IntakeSubmissionWhereUniqueInput
  }

  /**
   * IntakeSubmission findFirst
   */
  export type IntakeSubmissionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IntakeSubmission
     */
    select?: IntakeSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IntakeSubmission
     */
    omit?: IntakeSubmissionOmit<ExtArgs> | null
    /**
     * Filter, which IntakeSubmission to fetch.
     */
    where?: IntakeSubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IntakeSubmissions to fetch.
     */
    orderBy?: IntakeSubmissionOrderByWithRelationInput | IntakeSubmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for IntakeSubmissions.
     */
    cursor?: IntakeSubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IntakeSubmissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IntakeSubmissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of IntakeSubmissions.
     */
    distinct?: IntakeSubmissionScalarFieldEnum | IntakeSubmissionScalarFieldEnum[]
  }

  /**
   * IntakeSubmission findFirstOrThrow
   */
  export type IntakeSubmissionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IntakeSubmission
     */
    select?: IntakeSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IntakeSubmission
     */
    omit?: IntakeSubmissionOmit<ExtArgs> | null
    /**
     * Filter, which IntakeSubmission to fetch.
     */
    where?: IntakeSubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IntakeSubmissions to fetch.
     */
    orderBy?: IntakeSubmissionOrderByWithRelationInput | IntakeSubmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for IntakeSubmissions.
     */
    cursor?: IntakeSubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IntakeSubmissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IntakeSubmissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of IntakeSubmissions.
     */
    distinct?: IntakeSubmissionScalarFieldEnum | IntakeSubmissionScalarFieldEnum[]
  }

  /**
   * IntakeSubmission findMany
   */
  export type IntakeSubmissionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IntakeSubmission
     */
    select?: IntakeSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IntakeSubmission
     */
    omit?: IntakeSubmissionOmit<ExtArgs> | null
    /**
     * Filter, which IntakeSubmissions to fetch.
     */
    where?: IntakeSubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IntakeSubmissions to fetch.
     */
    orderBy?: IntakeSubmissionOrderByWithRelationInput | IntakeSubmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing IntakeSubmissions.
     */
    cursor?: IntakeSubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IntakeSubmissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IntakeSubmissions.
     */
    skip?: number
    distinct?: IntakeSubmissionScalarFieldEnum | IntakeSubmissionScalarFieldEnum[]
  }

  /**
   * IntakeSubmission create
   */
  export type IntakeSubmissionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IntakeSubmission
     */
    select?: IntakeSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IntakeSubmission
     */
    omit?: IntakeSubmissionOmit<ExtArgs> | null
    /**
     * The data needed to create a IntakeSubmission.
     */
    data: XOR<IntakeSubmissionCreateInput, IntakeSubmissionUncheckedCreateInput>
  }

  /**
   * IntakeSubmission createMany
   */
  export type IntakeSubmissionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many IntakeSubmissions.
     */
    data: IntakeSubmissionCreateManyInput | IntakeSubmissionCreateManyInput[]
  }

  /**
   * IntakeSubmission createManyAndReturn
   */
  export type IntakeSubmissionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IntakeSubmission
     */
    select?: IntakeSubmissionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the IntakeSubmission
     */
    omit?: IntakeSubmissionOmit<ExtArgs> | null
    /**
     * The data used to create many IntakeSubmissions.
     */
    data: IntakeSubmissionCreateManyInput | IntakeSubmissionCreateManyInput[]
  }

  /**
   * IntakeSubmission update
   */
  export type IntakeSubmissionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IntakeSubmission
     */
    select?: IntakeSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IntakeSubmission
     */
    omit?: IntakeSubmissionOmit<ExtArgs> | null
    /**
     * The data needed to update a IntakeSubmission.
     */
    data: XOR<IntakeSubmissionUpdateInput, IntakeSubmissionUncheckedUpdateInput>
    /**
     * Choose, which IntakeSubmission to update.
     */
    where: IntakeSubmissionWhereUniqueInput
  }

  /**
   * IntakeSubmission updateMany
   */
  export type IntakeSubmissionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update IntakeSubmissions.
     */
    data: XOR<IntakeSubmissionUpdateManyMutationInput, IntakeSubmissionUncheckedUpdateManyInput>
    /**
     * Filter which IntakeSubmissions to update
     */
    where?: IntakeSubmissionWhereInput
    /**
     * Limit how many IntakeSubmissions to update.
     */
    limit?: number
  }

  /**
   * IntakeSubmission updateManyAndReturn
   */
  export type IntakeSubmissionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IntakeSubmission
     */
    select?: IntakeSubmissionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the IntakeSubmission
     */
    omit?: IntakeSubmissionOmit<ExtArgs> | null
    /**
     * The data used to update IntakeSubmissions.
     */
    data: XOR<IntakeSubmissionUpdateManyMutationInput, IntakeSubmissionUncheckedUpdateManyInput>
    /**
     * Filter which IntakeSubmissions to update
     */
    where?: IntakeSubmissionWhereInput
    /**
     * Limit how many IntakeSubmissions to update.
     */
    limit?: number
  }

  /**
   * IntakeSubmission upsert
   */
  export type IntakeSubmissionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IntakeSubmission
     */
    select?: IntakeSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IntakeSubmission
     */
    omit?: IntakeSubmissionOmit<ExtArgs> | null
    /**
     * The filter to search for the IntakeSubmission to update in case it exists.
     */
    where: IntakeSubmissionWhereUniqueInput
    /**
     * In case the IntakeSubmission found by the `where` argument doesn't exist, create a new IntakeSubmission with this data.
     */
    create: XOR<IntakeSubmissionCreateInput, IntakeSubmissionUncheckedCreateInput>
    /**
     * In case the IntakeSubmission was found with the provided `where` argument, update it with this data.
     */
    update: XOR<IntakeSubmissionUpdateInput, IntakeSubmissionUncheckedUpdateInput>
  }

  /**
   * IntakeSubmission delete
   */
  export type IntakeSubmissionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IntakeSubmission
     */
    select?: IntakeSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IntakeSubmission
     */
    omit?: IntakeSubmissionOmit<ExtArgs> | null
    /**
     * Filter which IntakeSubmission to delete.
     */
    where: IntakeSubmissionWhereUniqueInput
  }

  /**
   * IntakeSubmission deleteMany
   */
  export type IntakeSubmissionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which IntakeSubmissions to delete
     */
    where?: IntakeSubmissionWhereInput
    /**
     * Limit how many IntakeSubmissions to delete.
     */
    limit?: number
  }

  /**
   * IntakeSubmission without action
   */
  export type IntakeSubmissionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IntakeSubmission
     */
    select?: IntakeSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IntakeSubmission
     */
    omit?: IntakeSubmissionOmit<ExtArgs> | null
  }


  /**
   * Model ConsultationVisit
   */

  export type AggregateConsultationVisit = {
    _count: ConsultationVisitCountAggregateOutputType | null
    _min: ConsultationVisitMinAggregateOutputType | null
    _max: ConsultationVisitMaxAggregateOutputType | null
  }

  export type ConsultationVisitMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    userAgent: string | null
    ipAddress: string | null
  }

  export type ConsultationVisitMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    userAgent: string | null
    ipAddress: string | null
  }

  export type ConsultationVisitCountAggregateOutputType = {
    id: number
    createdAt: number
    userAgent: number
    ipAddress: number
    _all: number
  }


  export type ConsultationVisitMinAggregateInputType = {
    id?: true
    createdAt?: true
    userAgent?: true
    ipAddress?: true
  }

  export type ConsultationVisitMaxAggregateInputType = {
    id?: true
    createdAt?: true
    userAgent?: true
    ipAddress?: true
  }

  export type ConsultationVisitCountAggregateInputType = {
    id?: true
    createdAt?: true
    userAgent?: true
    ipAddress?: true
    _all?: true
  }

  export type ConsultationVisitAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ConsultationVisit to aggregate.
     */
    where?: ConsultationVisitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ConsultationVisits to fetch.
     */
    orderBy?: ConsultationVisitOrderByWithRelationInput | ConsultationVisitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ConsultationVisitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ConsultationVisits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ConsultationVisits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ConsultationVisits
    **/
    _count?: true | ConsultationVisitCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ConsultationVisitMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ConsultationVisitMaxAggregateInputType
  }

  export type GetConsultationVisitAggregateType<T extends ConsultationVisitAggregateArgs> = {
        [P in keyof T & keyof AggregateConsultationVisit]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateConsultationVisit[P]>
      : GetScalarType<T[P], AggregateConsultationVisit[P]>
  }




  export type ConsultationVisitGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConsultationVisitWhereInput
    orderBy?: ConsultationVisitOrderByWithAggregationInput | ConsultationVisitOrderByWithAggregationInput[]
    by: ConsultationVisitScalarFieldEnum[] | ConsultationVisitScalarFieldEnum
    having?: ConsultationVisitScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ConsultationVisitCountAggregateInputType | true
    _min?: ConsultationVisitMinAggregateInputType
    _max?: ConsultationVisitMaxAggregateInputType
  }

  export type ConsultationVisitGroupByOutputType = {
    id: string
    createdAt: Date
    userAgent: string | null
    ipAddress: string | null
    _count: ConsultationVisitCountAggregateOutputType | null
    _min: ConsultationVisitMinAggregateOutputType | null
    _max: ConsultationVisitMaxAggregateOutputType | null
  }

  type GetConsultationVisitGroupByPayload<T extends ConsultationVisitGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ConsultationVisitGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ConsultationVisitGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ConsultationVisitGroupByOutputType[P]>
            : GetScalarType<T[P], ConsultationVisitGroupByOutputType[P]>
        }
      >
    >


  export type ConsultationVisitSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    userAgent?: boolean
    ipAddress?: boolean
  }, ExtArgs["result"]["consultationVisit"]>

  export type ConsultationVisitSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    userAgent?: boolean
    ipAddress?: boolean
  }, ExtArgs["result"]["consultationVisit"]>

  export type ConsultationVisitSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    userAgent?: boolean
    ipAddress?: boolean
  }, ExtArgs["result"]["consultationVisit"]>

  export type ConsultationVisitSelectScalar = {
    id?: boolean
    createdAt?: boolean
    userAgent?: boolean
    ipAddress?: boolean
  }

  export type ConsultationVisitOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "userAgent" | "ipAddress", ExtArgs["result"]["consultationVisit"]>

  export type $ConsultationVisitPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ConsultationVisit"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      userAgent: string | null
      ipAddress: string | null
    }, ExtArgs["result"]["consultationVisit"]>
    composites: {}
  }

  type ConsultationVisitGetPayload<S extends boolean | null | undefined | ConsultationVisitDefaultArgs> = $Result.GetResult<Prisma.$ConsultationVisitPayload, S>

  type ConsultationVisitCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ConsultationVisitFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ConsultationVisitCountAggregateInputType | true
    }

  export interface ConsultationVisitDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ConsultationVisit'], meta: { name: 'ConsultationVisit' } }
    /**
     * Find zero or one ConsultationVisit that matches the filter.
     * @param {ConsultationVisitFindUniqueArgs} args - Arguments to find a ConsultationVisit
     * @example
     * // Get one ConsultationVisit
     * const consultationVisit = await prisma.consultationVisit.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ConsultationVisitFindUniqueArgs>(args: SelectSubset<T, ConsultationVisitFindUniqueArgs<ExtArgs>>): Prisma__ConsultationVisitClient<$Result.GetResult<Prisma.$ConsultationVisitPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ConsultationVisit that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ConsultationVisitFindUniqueOrThrowArgs} args - Arguments to find a ConsultationVisit
     * @example
     * // Get one ConsultationVisit
     * const consultationVisit = await prisma.consultationVisit.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ConsultationVisitFindUniqueOrThrowArgs>(args: SelectSubset<T, ConsultationVisitFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ConsultationVisitClient<$Result.GetResult<Prisma.$ConsultationVisitPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ConsultationVisit that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsultationVisitFindFirstArgs} args - Arguments to find a ConsultationVisit
     * @example
     * // Get one ConsultationVisit
     * const consultationVisit = await prisma.consultationVisit.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ConsultationVisitFindFirstArgs>(args?: SelectSubset<T, ConsultationVisitFindFirstArgs<ExtArgs>>): Prisma__ConsultationVisitClient<$Result.GetResult<Prisma.$ConsultationVisitPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ConsultationVisit that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsultationVisitFindFirstOrThrowArgs} args - Arguments to find a ConsultationVisit
     * @example
     * // Get one ConsultationVisit
     * const consultationVisit = await prisma.consultationVisit.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ConsultationVisitFindFirstOrThrowArgs>(args?: SelectSubset<T, ConsultationVisitFindFirstOrThrowArgs<ExtArgs>>): Prisma__ConsultationVisitClient<$Result.GetResult<Prisma.$ConsultationVisitPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ConsultationVisits that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsultationVisitFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ConsultationVisits
     * const consultationVisits = await prisma.consultationVisit.findMany()
     * 
     * // Get first 10 ConsultationVisits
     * const consultationVisits = await prisma.consultationVisit.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const consultationVisitWithIdOnly = await prisma.consultationVisit.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ConsultationVisitFindManyArgs>(args?: SelectSubset<T, ConsultationVisitFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConsultationVisitPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ConsultationVisit.
     * @param {ConsultationVisitCreateArgs} args - Arguments to create a ConsultationVisit.
     * @example
     * // Create one ConsultationVisit
     * const ConsultationVisit = await prisma.consultationVisit.create({
     *   data: {
     *     // ... data to create a ConsultationVisit
     *   }
     * })
     * 
     */
    create<T extends ConsultationVisitCreateArgs>(args: SelectSubset<T, ConsultationVisitCreateArgs<ExtArgs>>): Prisma__ConsultationVisitClient<$Result.GetResult<Prisma.$ConsultationVisitPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ConsultationVisits.
     * @param {ConsultationVisitCreateManyArgs} args - Arguments to create many ConsultationVisits.
     * @example
     * // Create many ConsultationVisits
     * const consultationVisit = await prisma.consultationVisit.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ConsultationVisitCreateManyArgs>(args?: SelectSubset<T, ConsultationVisitCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ConsultationVisits and returns the data saved in the database.
     * @param {ConsultationVisitCreateManyAndReturnArgs} args - Arguments to create many ConsultationVisits.
     * @example
     * // Create many ConsultationVisits
     * const consultationVisit = await prisma.consultationVisit.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ConsultationVisits and only return the `id`
     * const consultationVisitWithIdOnly = await prisma.consultationVisit.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ConsultationVisitCreateManyAndReturnArgs>(args?: SelectSubset<T, ConsultationVisitCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConsultationVisitPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ConsultationVisit.
     * @param {ConsultationVisitDeleteArgs} args - Arguments to delete one ConsultationVisit.
     * @example
     * // Delete one ConsultationVisit
     * const ConsultationVisit = await prisma.consultationVisit.delete({
     *   where: {
     *     // ... filter to delete one ConsultationVisit
     *   }
     * })
     * 
     */
    delete<T extends ConsultationVisitDeleteArgs>(args: SelectSubset<T, ConsultationVisitDeleteArgs<ExtArgs>>): Prisma__ConsultationVisitClient<$Result.GetResult<Prisma.$ConsultationVisitPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ConsultationVisit.
     * @param {ConsultationVisitUpdateArgs} args - Arguments to update one ConsultationVisit.
     * @example
     * // Update one ConsultationVisit
     * const consultationVisit = await prisma.consultationVisit.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ConsultationVisitUpdateArgs>(args: SelectSubset<T, ConsultationVisitUpdateArgs<ExtArgs>>): Prisma__ConsultationVisitClient<$Result.GetResult<Prisma.$ConsultationVisitPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ConsultationVisits.
     * @param {ConsultationVisitDeleteManyArgs} args - Arguments to filter ConsultationVisits to delete.
     * @example
     * // Delete a few ConsultationVisits
     * const { count } = await prisma.consultationVisit.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ConsultationVisitDeleteManyArgs>(args?: SelectSubset<T, ConsultationVisitDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ConsultationVisits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsultationVisitUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ConsultationVisits
     * const consultationVisit = await prisma.consultationVisit.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ConsultationVisitUpdateManyArgs>(args: SelectSubset<T, ConsultationVisitUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ConsultationVisits and returns the data updated in the database.
     * @param {ConsultationVisitUpdateManyAndReturnArgs} args - Arguments to update many ConsultationVisits.
     * @example
     * // Update many ConsultationVisits
     * const consultationVisit = await prisma.consultationVisit.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ConsultationVisits and only return the `id`
     * const consultationVisitWithIdOnly = await prisma.consultationVisit.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ConsultationVisitUpdateManyAndReturnArgs>(args: SelectSubset<T, ConsultationVisitUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConsultationVisitPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ConsultationVisit.
     * @param {ConsultationVisitUpsertArgs} args - Arguments to update or create a ConsultationVisit.
     * @example
     * // Update or create a ConsultationVisit
     * const consultationVisit = await prisma.consultationVisit.upsert({
     *   create: {
     *     // ... data to create a ConsultationVisit
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ConsultationVisit we want to update
     *   }
     * })
     */
    upsert<T extends ConsultationVisitUpsertArgs>(args: SelectSubset<T, ConsultationVisitUpsertArgs<ExtArgs>>): Prisma__ConsultationVisitClient<$Result.GetResult<Prisma.$ConsultationVisitPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ConsultationVisits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsultationVisitCountArgs} args - Arguments to filter ConsultationVisits to count.
     * @example
     * // Count the number of ConsultationVisits
     * const count = await prisma.consultationVisit.count({
     *   where: {
     *     // ... the filter for the ConsultationVisits we want to count
     *   }
     * })
    **/
    count<T extends ConsultationVisitCountArgs>(
      args?: Subset<T, ConsultationVisitCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ConsultationVisitCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ConsultationVisit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsultationVisitAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ConsultationVisitAggregateArgs>(args: Subset<T, ConsultationVisitAggregateArgs>): Prisma.PrismaPromise<GetConsultationVisitAggregateType<T>>

    /**
     * Group by ConsultationVisit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsultationVisitGroupByArgs} args - Group by arguments.
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
      T extends ConsultationVisitGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ConsultationVisitGroupByArgs['orderBy'] }
        : { orderBy?: ConsultationVisitGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ConsultationVisitGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetConsultationVisitGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ConsultationVisit model
   */
  readonly fields: ConsultationVisitFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ConsultationVisit.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ConsultationVisitClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ConsultationVisit model
   */
  interface ConsultationVisitFieldRefs {
    readonly id: FieldRef<"ConsultationVisit", 'String'>
    readonly createdAt: FieldRef<"ConsultationVisit", 'DateTime'>
    readonly userAgent: FieldRef<"ConsultationVisit", 'String'>
    readonly ipAddress: FieldRef<"ConsultationVisit", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ConsultationVisit findUnique
   */
  export type ConsultationVisitFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConsultationVisit
     */
    select?: ConsultationVisitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConsultationVisit
     */
    omit?: ConsultationVisitOmit<ExtArgs> | null
    /**
     * Filter, which ConsultationVisit to fetch.
     */
    where: ConsultationVisitWhereUniqueInput
  }

  /**
   * ConsultationVisit findUniqueOrThrow
   */
  export type ConsultationVisitFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConsultationVisit
     */
    select?: ConsultationVisitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConsultationVisit
     */
    omit?: ConsultationVisitOmit<ExtArgs> | null
    /**
     * Filter, which ConsultationVisit to fetch.
     */
    where: ConsultationVisitWhereUniqueInput
  }

  /**
   * ConsultationVisit findFirst
   */
  export type ConsultationVisitFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConsultationVisit
     */
    select?: ConsultationVisitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConsultationVisit
     */
    omit?: ConsultationVisitOmit<ExtArgs> | null
    /**
     * Filter, which ConsultationVisit to fetch.
     */
    where?: ConsultationVisitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ConsultationVisits to fetch.
     */
    orderBy?: ConsultationVisitOrderByWithRelationInput | ConsultationVisitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ConsultationVisits.
     */
    cursor?: ConsultationVisitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ConsultationVisits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ConsultationVisits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ConsultationVisits.
     */
    distinct?: ConsultationVisitScalarFieldEnum | ConsultationVisitScalarFieldEnum[]
  }

  /**
   * ConsultationVisit findFirstOrThrow
   */
  export type ConsultationVisitFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConsultationVisit
     */
    select?: ConsultationVisitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConsultationVisit
     */
    omit?: ConsultationVisitOmit<ExtArgs> | null
    /**
     * Filter, which ConsultationVisit to fetch.
     */
    where?: ConsultationVisitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ConsultationVisits to fetch.
     */
    orderBy?: ConsultationVisitOrderByWithRelationInput | ConsultationVisitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ConsultationVisits.
     */
    cursor?: ConsultationVisitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ConsultationVisits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ConsultationVisits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ConsultationVisits.
     */
    distinct?: ConsultationVisitScalarFieldEnum | ConsultationVisitScalarFieldEnum[]
  }

  /**
   * ConsultationVisit findMany
   */
  export type ConsultationVisitFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConsultationVisit
     */
    select?: ConsultationVisitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConsultationVisit
     */
    omit?: ConsultationVisitOmit<ExtArgs> | null
    /**
     * Filter, which ConsultationVisits to fetch.
     */
    where?: ConsultationVisitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ConsultationVisits to fetch.
     */
    orderBy?: ConsultationVisitOrderByWithRelationInput | ConsultationVisitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ConsultationVisits.
     */
    cursor?: ConsultationVisitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ConsultationVisits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ConsultationVisits.
     */
    skip?: number
    distinct?: ConsultationVisitScalarFieldEnum | ConsultationVisitScalarFieldEnum[]
  }

  /**
   * ConsultationVisit create
   */
  export type ConsultationVisitCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConsultationVisit
     */
    select?: ConsultationVisitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConsultationVisit
     */
    omit?: ConsultationVisitOmit<ExtArgs> | null
    /**
     * The data needed to create a ConsultationVisit.
     */
    data?: XOR<ConsultationVisitCreateInput, ConsultationVisitUncheckedCreateInput>
  }

  /**
   * ConsultationVisit createMany
   */
  export type ConsultationVisitCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ConsultationVisits.
     */
    data: ConsultationVisitCreateManyInput | ConsultationVisitCreateManyInput[]
  }

  /**
   * ConsultationVisit createManyAndReturn
   */
  export type ConsultationVisitCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConsultationVisit
     */
    select?: ConsultationVisitSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ConsultationVisit
     */
    omit?: ConsultationVisitOmit<ExtArgs> | null
    /**
     * The data used to create many ConsultationVisits.
     */
    data: ConsultationVisitCreateManyInput | ConsultationVisitCreateManyInput[]
  }

  /**
   * ConsultationVisit update
   */
  export type ConsultationVisitUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConsultationVisit
     */
    select?: ConsultationVisitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConsultationVisit
     */
    omit?: ConsultationVisitOmit<ExtArgs> | null
    /**
     * The data needed to update a ConsultationVisit.
     */
    data: XOR<ConsultationVisitUpdateInput, ConsultationVisitUncheckedUpdateInput>
    /**
     * Choose, which ConsultationVisit to update.
     */
    where: ConsultationVisitWhereUniqueInput
  }

  /**
   * ConsultationVisit updateMany
   */
  export type ConsultationVisitUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ConsultationVisits.
     */
    data: XOR<ConsultationVisitUpdateManyMutationInput, ConsultationVisitUncheckedUpdateManyInput>
    /**
     * Filter which ConsultationVisits to update
     */
    where?: ConsultationVisitWhereInput
    /**
     * Limit how many ConsultationVisits to update.
     */
    limit?: number
  }

  /**
   * ConsultationVisit updateManyAndReturn
   */
  export type ConsultationVisitUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConsultationVisit
     */
    select?: ConsultationVisitSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ConsultationVisit
     */
    omit?: ConsultationVisitOmit<ExtArgs> | null
    /**
     * The data used to update ConsultationVisits.
     */
    data: XOR<ConsultationVisitUpdateManyMutationInput, ConsultationVisitUncheckedUpdateManyInput>
    /**
     * Filter which ConsultationVisits to update
     */
    where?: ConsultationVisitWhereInput
    /**
     * Limit how many ConsultationVisits to update.
     */
    limit?: number
  }

  /**
   * ConsultationVisit upsert
   */
  export type ConsultationVisitUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConsultationVisit
     */
    select?: ConsultationVisitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConsultationVisit
     */
    omit?: ConsultationVisitOmit<ExtArgs> | null
    /**
     * The filter to search for the ConsultationVisit to update in case it exists.
     */
    where: ConsultationVisitWhereUniqueInput
    /**
     * In case the ConsultationVisit found by the `where` argument doesn't exist, create a new ConsultationVisit with this data.
     */
    create: XOR<ConsultationVisitCreateInput, ConsultationVisitUncheckedCreateInput>
    /**
     * In case the ConsultationVisit was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ConsultationVisitUpdateInput, ConsultationVisitUncheckedUpdateInput>
  }

  /**
   * ConsultationVisit delete
   */
  export type ConsultationVisitDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConsultationVisit
     */
    select?: ConsultationVisitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConsultationVisit
     */
    omit?: ConsultationVisitOmit<ExtArgs> | null
    /**
     * Filter which ConsultationVisit to delete.
     */
    where: ConsultationVisitWhereUniqueInput
  }

  /**
   * ConsultationVisit deleteMany
   */
  export type ConsultationVisitDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ConsultationVisits to delete
     */
    where?: ConsultationVisitWhereInput
    /**
     * Limit how many ConsultationVisits to delete.
     */
    limit?: number
  }

  /**
   * ConsultationVisit without action
   */
  export type ConsultationVisitDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConsultationVisit
     */
    select?: ConsultationVisitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConsultationVisit
     */
    omit?: ConsultationVisitOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const IntakeSubmissionScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    purpose: 'purpose',
    region: 'region',
    startPreference: 'startPreference',
    summary: 'summary',
    reviewSummary: 'reviewSummary',
    selectedPackage: 'selectedPackage',
    contact: 'contact',
    messages: 'messages',
    estimate: 'estimate',
    plan: 'plan',
    referenceId: 'referenceId',
    userAgent: 'userAgent',
    ipAddress: 'ipAddress'
  };

  export type IntakeSubmissionScalarFieldEnum = (typeof IntakeSubmissionScalarFieldEnum)[keyof typeof IntakeSubmissionScalarFieldEnum]


  export const ConsultationVisitScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    userAgent: 'userAgent',
    ipAddress: 'ipAddress'
  };

  export type ConsultationVisitScalarFieldEnum = (typeof ConsultationVisitScalarFieldEnum)[keyof typeof ConsultationVisitScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


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
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    
  /**
   * Deep Input Types
   */


  export type IntakeSubmissionWhereInput = {
    AND?: IntakeSubmissionWhereInput | IntakeSubmissionWhereInput[]
    OR?: IntakeSubmissionWhereInput[]
    NOT?: IntakeSubmissionWhereInput | IntakeSubmissionWhereInput[]
    id?: StringFilter<"IntakeSubmission"> | string
    createdAt?: DateTimeFilter<"IntakeSubmission"> | Date | string
    purpose?: StringFilter<"IntakeSubmission"> | string
    region?: StringFilter<"IntakeSubmission"> | string
    startPreference?: StringNullableFilter<"IntakeSubmission"> | string | null
    summary?: StringFilter<"IntakeSubmission"> | string
    reviewSummary?: StringNullableFilter<"IntakeSubmission"> | string | null
    selectedPackage?: StringFilter<"IntakeSubmission"> | string
    contact?: StringFilter<"IntakeSubmission"> | string
    messages?: JsonFilter<"IntakeSubmission">
    estimate?: JsonNullableFilter<"IntakeSubmission">
    plan?: JsonNullableFilter<"IntakeSubmission">
    referenceId?: StringNullableFilter<"IntakeSubmission"> | string | null
    userAgent?: StringNullableFilter<"IntakeSubmission"> | string | null
    ipAddress?: StringNullableFilter<"IntakeSubmission"> | string | null
  }

  export type IntakeSubmissionOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    purpose?: SortOrder
    region?: SortOrder
    startPreference?: SortOrderInput | SortOrder
    summary?: SortOrder
    reviewSummary?: SortOrderInput | SortOrder
    selectedPackage?: SortOrder
    contact?: SortOrder
    messages?: SortOrder
    estimate?: SortOrderInput | SortOrder
    plan?: SortOrderInput | SortOrder
    referenceId?: SortOrderInput | SortOrder
    userAgent?: SortOrderInput | SortOrder
    ipAddress?: SortOrderInput | SortOrder
  }

  export type IntakeSubmissionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: IntakeSubmissionWhereInput | IntakeSubmissionWhereInput[]
    OR?: IntakeSubmissionWhereInput[]
    NOT?: IntakeSubmissionWhereInput | IntakeSubmissionWhereInput[]
    createdAt?: DateTimeFilter<"IntakeSubmission"> | Date | string
    purpose?: StringFilter<"IntakeSubmission"> | string
    region?: StringFilter<"IntakeSubmission"> | string
    startPreference?: StringNullableFilter<"IntakeSubmission"> | string | null
    summary?: StringFilter<"IntakeSubmission"> | string
    reviewSummary?: StringNullableFilter<"IntakeSubmission"> | string | null
    selectedPackage?: StringFilter<"IntakeSubmission"> | string
    contact?: StringFilter<"IntakeSubmission"> | string
    messages?: JsonFilter<"IntakeSubmission">
    estimate?: JsonNullableFilter<"IntakeSubmission">
    plan?: JsonNullableFilter<"IntakeSubmission">
    referenceId?: StringNullableFilter<"IntakeSubmission"> | string | null
    userAgent?: StringNullableFilter<"IntakeSubmission"> | string | null
    ipAddress?: StringNullableFilter<"IntakeSubmission"> | string | null
  }, "id">

  export type IntakeSubmissionOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    purpose?: SortOrder
    region?: SortOrder
    startPreference?: SortOrderInput | SortOrder
    summary?: SortOrder
    reviewSummary?: SortOrderInput | SortOrder
    selectedPackage?: SortOrder
    contact?: SortOrder
    messages?: SortOrder
    estimate?: SortOrderInput | SortOrder
    plan?: SortOrderInput | SortOrder
    referenceId?: SortOrderInput | SortOrder
    userAgent?: SortOrderInput | SortOrder
    ipAddress?: SortOrderInput | SortOrder
    _count?: IntakeSubmissionCountOrderByAggregateInput
    _max?: IntakeSubmissionMaxOrderByAggregateInput
    _min?: IntakeSubmissionMinOrderByAggregateInput
  }

  export type IntakeSubmissionScalarWhereWithAggregatesInput = {
    AND?: IntakeSubmissionScalarWhereWithAggregatesInput | IntakeSubmissionScalarWhereWithAggregatesInput[]
    OR?: IntakeSubmissionScalarWhereWithAggregatesInput[]
    NOT?: IntakeSubmissionScalarWhereWithAggregatesInput | IntakeSubmissionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"IntakeSubmission"> | string
    createdAt?: DateTimeWithAggregatesFilter<"IntakeSubmission"> | Date | string
    purpose?: StringWithAggregatesFilter<"IntakeSubmission"> | string
    region?: StringWithAggregatesFilter<"IntakeSubmission"> | string
    startPreference?: StringNullableWithAggregatesFilter<"IntakeSubmission"> | string | null
    summary?: StringWithAggregatesFilter<"IntakeSubmission"> | string
    reviewSummary?: StringNullableWithAggregatesFilter<"IntakeSubmission"> | string | null
    selectedPackage?: StringWithAggregatesFilter<"IntakeSubmission"> | string
    contact?: StringWithAggregatesFilter<"IntakeSubmission"> | string
    messages?: JsonWithAggregatesFilter<"IntakeSubmission">
    estimate?: JsonNullableWithAggregatesFilter<"IntakeSubmission">
    plan?: JsonNullableWithAggregatesFilter<"IntakeSubmission">
    referenceId?: StringNullableWithAggregatesFilter<"IntakeSubmission"> | string | null
    userAgent?: StringNullableWithAggregatesFilter<"IntakeSubmission"> | string | null
    ipAddress?: StringNullableWithAggregatesFilter<"IntakeSubmission"> | string | null
  }

  export type ConsultationVisitWhereInput = {
    AND?: ConsultationVisitWhereInput | ConsultationVisitWhereInput[]
    OR?: ConsultationVisitWhereInput[]
    NOT?: ConsultationVisitWhereInput | ConsultationVisitWhereInput[]
    id?: StringFilter<"ConsultationVisit"> | string
    createdAt?: DateTimeFilter<"ConsultationVisit"> | Date | string
    userAgent?: StringNullableFilter<"ConsultationVisit"> | string | null
    ipAddress?: StringNullableFilter<"ConsultationVisit"> | string | null
  }

  export type ConsultationVisitOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    userAgent?: SortOrderInput | SortOrder
    ipAddress?: SortOrderInput | SortOrder
  }

  export type ConsultationVisitWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ConsultationVisitWhereInput | ConsultationVisitWhereInput[]
    OR?: ConsultationVisitWhereInput[]
    NOT?: ConsultationVisitWhereInput | ConsultationVisitWhereInput[]
    createdAt?: DateTimeFilter<"ConsultationVisit"> | Date | string
    userAgent?: StringNullableFilter<"ConsultationVisit"> | string | null
    ipAddress?: StringNullableFilter<"ConsultationVisit"> | string | null
  }, "id">

  export type ConsultationVisitOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    userAgent?: SortOrderInput | SortOrder
    ipAddress?: SortOrderInput | SortOrder
    _count?: ConsultationVisitCountOrderByAggregateInput
    _max?: ConsultationVisitMaxOrderByAggregateInput
    _min?: ConsultationVisitMinOrderByAggregateInput
  }

  export type ConsultationVisitScalarWhereWithAggregatesInput = {
    AND?: ConsultationVisitScalarWhereWithAggregatesInput | ConsultationVisitScalarWhereWithAggregatesInput[]
    OR?: ConsultationVisitScalarWhereWithAggregatesInput[]
    NOT?: ConsultationVisitScalarWhereWithAggregatesInput | ConsultationVisitScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ConsultationVisit"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ConsultationVisit"> | Date | string
    userAgent?: StringNullableWithAggregatesFilter<"ConsultationVisit"> | string | null
    ipAddress?: StringNullableWithAggregatesFilter<"ConsultationVisit"> | string | null
  }

  export type IntakeSubmissionCreateInput = {
    id?: string
    createdAt?: Date | string
    purpose: string
    region: string
    startPreference?: string | null
    summary: string
    reviewSummary?: string | null
    selectedPackage: string
    contact: string
    messages: JsonNullValueInput | InputJsonValue
    estimate?: NullableJsonNullValueInput | InputJsonValue
    plan?: NullableJsonNullValueInput | InputJsonValue
    referenceId?: string | null
    userAgent?: string | null
    ipAddress?: string | null
  }

  export type IntakeSubmissionUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    purpose: string
    region: string
    startPreference?: string | null
    summary: string
    reviewSummary?: string | null
    selectedPackage: string
    contact: string
    messages: JsonNullValueInput | InputJsonValue
    estimate?: NullableJsonNullValueInput | InputJsonValue
    plan?: NullableJsonNullValueInput | InputJsonValue
    referenceId?: string | null
    userAgent?: string | null
    ipAddress?: string | null
  }

  export type IntakeSubmissionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    purpose?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    startPreference?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: StringFieldUpdateOperationsInput | string
    reviewSummary?: NullableStringFieldUpdateOperationsInput | string | null
    selectedPackage?: StringFieldUpdateOperationsInput | string
    contact?: StringFieldUpdateOperationsInput | string
    messages?: JsonNullValueInput | InputJsonValue
    estimate?: NullableJsonNullValueInput | InputJsonValue
    plan?: NullableJsonNullValueInput | InputJsonValue
    referenceId?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type IntakeSubmissionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    purpose?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    startPreference?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: StringFieldUpdateOperationsInput | string
    reviewSummary?: NullableStringFieldUpdateOperationsInput | string | null
    selectedPackage?: StringFieldUpdateOperationsInput | string
    contact?: StringFieldUpdateOperationsInput | string
    messages?: JsonNullValueInput | InputJsonValue
    estimate?: NullableJsonNullValueInput | InputJsonValue
    plan?: NullableJsonNullValueInput | InputJsonValue
    referenceId?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type IntakeSubmissionCreateManyInput = {
    id?: string
    createdAt?: Date | string
    purpose: string
    region: string
    startPreference?: string | null
    summary: string
    reviewSummary?: string | null
    selectedPackage: string
    contact: string
    messages: JsonNullValueInput | InputJsonValue
    estimate?: NullableJsonNullValueInput | InputJsonValue
    plan?: NullableJsonNullValueInput | InputJsonValue
    referenceId?: string | null
    userAgent?: string | null
    ipAddress?: string | null
  }

  export type IntakeSubmissionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    purpose?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    startPreference?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: StringFieldUpdateOperationsInput | string
    reviewSummary?: NullableStringFieldUpdateOperationsInput | string | null
    selectedPackage?: StringFieldUpdateOperationsInput | string
    contact?: StringFieldUpdateOperationsInput | string
    messages?: JsonNullValueInput | InputJsonValue
    estimate?: NullableJsonNullValueInput | InputJsonValue
    plan?: NullableJsonNullValueInput | InputJsonValue
    referenceId?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type IntakeSubmissionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    purpose?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    startPreference?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: StringFieldUpdateOperationsInput | string
    reviewSummary?: NullableStringFieldUpdateOperationsInput | string | null
    selectedPackage?: StringFieldUpdateOperationsInput | string
    contact?: StringFieldUpdateOperationsInput | string
    messages?: JsonNullValueInput | InputJsonValue
    estimate?: NullableJsonNullValueInput | InputJsonValue
    plan?: NullableJsonNullValueInput | InputJsonValue
    referenceId?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ConsultationVisitCreateInput = {
    id?: string
    createdAt?: Date | string
    userAgent?: string | null
    ipAddress?: string | null
  }

  export type ConsultationVisitUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    userAgent?: string | null
    ipAddress?: string | null
  }

  export type ConsultationVisitUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ConsultationVisitUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ConsultationVisitCreateManyInput = {
    id?: string
    createdAt?: Date | string
    userAgent?: string | null
    ipAddress?: string | null
  }

  export type ConsultationVisitUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ConsultationVisitUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
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
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type IntakeSubmissionCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    purpose?: SortOrder
    region?: SortOrder
    startPreference?: SortOrder
    summary?: SortOrder
    reviewSummary?: SortOrder
    selectedPackage?: SortOrder
    contact?: SortOrder
    messages?: SortOrder
    estimate?: SortOrder
    plan?: SortOrder
    referenceId?: SortOrder
    userAgent?: SortOrder
    ipAddress?: SortOrder
  }

  export type IntakeSubmissionMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    purpose?: SortOrder
    region?: SortOrder
    startPreference?: SortOrder
    summary?: SortOrder
    reviewSummary?: SortOrder
    selectedPackage?: SortOrder
    contact?: SortOrder
    referenceId?: SortOrder
    userAgent?: SortOrder
    ipAddress?: SortOrder
  }

  export type IntakeSubmissionMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    purpose?: SortOrder
    region?: SortOrder
    startPreference?: SortOrder
    summary?: SortOrder
    reviewSummary?: SortOrder
    selectedPackage?: SortOrder
    contact?: SortOrder
    referenceId?: SortOrder
    userAgent?: SortOrder
    ipAddress?: SortOrder
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
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type ConsultationVisitCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    userAgent?: SortOrder
    ipAddress?: SortOrder
  }

  export type ConsultationVisitMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    userAgent?: SortOrder
    ipAddress?: SortOrder
  }

  export type ConsultationVisitMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    userAgent?: SortOrder
    ipAddress?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
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
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }



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
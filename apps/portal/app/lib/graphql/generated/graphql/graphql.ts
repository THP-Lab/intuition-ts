/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core'

export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>
}
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>
}
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T,
> = { [_ in K]?: never }
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never
    }
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string }
  String: { input: string; output: string }
  Boolean: { input: boolean; output: boolean }
  Int: { input: number; output: number }
  Float: { input: number; output: number }
  bytea: { input: any; output: any }
  float8: { input: any; output: any }
  numeric: { input: any; output: any }
}

export type Follower = {
  __typename?: 'Follower'
  follower: Array<Accounts>
  follower_aggregate: Accounts_Aggregate
  id: Scalars['String']['output']
}

export type FollowerFollowerArgs = {
  distinct_on?: InputMaybe<Array<Accounts_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Accounts_Order_By>>
  where?: InputMaybe<Accounts_Bool_Exp>
}

export type FollowerFollower_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Accounts_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Accounts_Order_By>>
  where?: InputMaybe<Accounts_Bool_Exp>
}

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']['input']>
  _gt?: InputMaybe<Scalars['Int']['input']>
  _gte?: InputMaybe<Scalars['Int']['input']>
  _in?: InputMaybe<Array<Scalars['Int']['input']>>
  _is_null?: InputMaybe<Scalars['Boolean']['input']>
  _lt?: InputMaybe<Scalars['Int']['input']>
  _lte?: InputMaybe<Scalars['Int']['input']>
  _neq?: InputMaybe<Scalars['Int']['input']>
  _nin?: InputMaybe<Array<Scalars['Int']['input']>>
}

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']['input']>
  _gt?: InputMaybe<Scalars['String']['input']>
  _gte?: InputMaybe<Scalars['String']['input']>
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']['input']>
  _in?: InputMaybe<Array<Scalars['String']['input']>>
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']['input']>
  _is_null?: InputMaybe<Scalars['Boolean']['input']>
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']['input']>
  _lt?: InputMaybe<Scalars['String']['input']>
  _lte?: InputMaybe<Scalars['String']['input']>
  _neq?: InputMaybe<Scalars['String']['input']>
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']['input']>
  _nin?: InputMaybe<Array<Scalars['String']['input']>>
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']['input']>
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']['input']>
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']['input']>
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']['input']>
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']['input']>
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']['input']>
}

/** columns and relationships of "Account" */
export type Accounts = {
  __typename?: 'accounts'
  /** An object relationship */
  atom?: Maybe<Atoms>
  atomId?: Maybe<Scalars['numeric']['output']>
  /** An array relationship */
  createdAtoms: Array<Atoms>
  /** An aggregate relationship */
  createdAtoms_aggregate: Atoms_Aggregate
  /** An array relationship */
  createdTriples: Array<Triples>
  /** An aggregate relationship */
  createdTriples_aggregate: Triples_Aggregate
  /** An array relationship */
  deposits: Array<Deposits>
  /** An aggregate relationship */
  deposits_aggregate: Deposits_Aggregate
  /** An array relationship */
  feeTransfers: Array<FeeTranfers>
  /** An aggregate relationship */
  feeTransfers_aggregate: FeeTranfers_Aggregate
  followers: Array<Follower>
  id: Scalars['bytea']['output']
  image?: Maybe<Scalars['String']['output']>
  label: Scalars['String']['output']
  /** An array relationship */
  positions: Array<Positions>
  /** An aggregate relationship */
  positions_aggregate: Positions_Aggregate
  /** An array relationship */
  redemptions: Array<Redemptions>
  /** An aggregate relationship */
  redemptions_aggregate: Redemptions_Aggregate
  /** An array relationship */
  signals: Array<Signals>
  /** An aggregate relationship */
  signals_aggregate: Signals_Aggregate
  type: Scalars['String']['output']
}

/** columns and relationships of "Account" */
export type AccountsCreatedAtomsArgs = {
  distinct_on?: InputMaybe<Array<Atoms_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Atoms_Order_By>>
  where?: InputMaybe<Atoms_Bool_Exp>
}

/** columns and relationships of "Account" */
export type AccountsCreatedAtoms_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Atoms_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Atoms_Order_By>>
  where?: InputMaybe<Atoms_Bool_Exp>
}

/** columns and relationships of "Account" */
export type AccountsCreatedTriplesArgs = {
  distinct_on?: InputMaybe<Array<Triples_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Triples_Order_By>>
  where?: InputMaybe<Triples_Bool_Exp>
}

/** columns and relationships of "Account" */
export type AccountsCreatedTriples_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Triples_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Triples_Order_By>>
  where?: InputMaybe<Triples_Bool_Exp>
}

/** columns and relationships of "Account" */
export type AccountsDepositsArgs = {
  distinct_on?: InputMaybe<Array<Deposits_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Deposits_Order_By>>
  where?: InputMaybe<Deposits_Bool_Exp>
}

/** columns and relationships of "Account" */
export type AccountsDeposits_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Deposits_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Deposits_Order_By>>
  where?: InputMaybe<Deposits_Bool_Exp>
}

/** columns and relationships of "Account" */
export type AccountsFeeTransfersArgs = {
  distinct_on?: InputMaybe<Array<FeeTranfers_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<FeeTranfers_Order_By>>
  where?: InputMaybe<FeeTranfers_Bool_Exp>
}

/** columns and relationships of "Account" */
export type AccountsFeeTransfers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<FeeTranfers_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<FeeTranfers_Order_By>>
  where?: InputMaybe<FeeTranfers_Bool_Exp>
}

/** columns and relationships of "Account" */
export type AccountsPositionsArgs = {
  distinct_on?: InputMaybe<Array<Positions_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Positions_Order_By>>
  where?: InputMaybe<Positions_Bool_Exp>
}

/** columns and relationships of "Account" */
export type AccountsPositions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Positions_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Positions_Order_By>>
  where?: InputMaybe<Positions_Bool_Exp>
}

/** columns and relationships of "Account" */
export type AccountsRedemptionsArgs = {
  distinct_on?: InputMaybe<Array<Redemptions_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Redemptions_Order_By>>
  where?: InputMaybe<Redemptions_Bool_Exp>
}

/** columns and relationships of "Account" */
export type AccountsRedemptions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Redemptions_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Redemptions_Order_By>>
  where?: InputMaybe<Redemptions_Bool_Exp>
}

/** columns and relationships of "Account" */
export type AccountsSignalsArgs = {
  distinct_on?: InputMaybe<Array<Signals_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Signals_Order_By>>
  where?: InputMaybe<Signals_Bool_Exp>
}

/** columns and relationships of "Account" */
export type AccountsSignals_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Signals_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Signals_Order_By>>
  where?: InputMaybe<Signals_Bool_Exp>
}

/** aggregated selection of "Account" */
export type Accounts_Aggregate = {
  __typename?: 'accounts_aggregate'
  aggregate?: Maybe<Accounts_Aggregate_Fields>
  nodes: Array<Accounts>
}

/** aggregate fields of "Account" */
export type Accounts_Aggregate_Fields = {
  __typename?: 'accounts_aggregate_fields'
  avg?: Maybe<Accounts_Avg_Fields>
  count: Scalars['Int']['output']
  max?: Maybe<Accounts_Max_Fields>
  min?: Maybe<Accounts_Min_Fields>
  stddev?: Maybe<Accounts_Stddev_Fields>
  stddev_pop?: Maybe<Accounts_Stddev_Pop_Fields>
  stddev_samp?: Maybe<Accounts_Stddev_Samp_Fields>
  sum?: Maybe<Accounts_Sum_Fields>
  var_pop?: Maybe<Accounts_Var_Pop_Fields>
  var_samp?: Maybe<Accounts_Var_Samp_Fields>
  variance?: Maybe<Accounts_Variance_Fields>
}

/** aggregate fields of "Account" */
export type Accounts_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Accounts_Select_Column>>
  distinct?: InputMaybe<Scalars['Boolean']['input']>
}

/** aggregate avg on columns */
export type Accounts_Avg_Fields = {
  __typename?: 'accounts_avg_fields'
  atomId?: Maybe<Scalars['Float']['output']>
}

/** Boolean expression to filter rows from the table "Account". All fields are combined with a logical 'AND'. */
export type Accounts_Bool_Exp = {
  _and?: InputMaybe<Array<Accounts_Bool_Exp>>
  _not?: InputMaybe<Accounts_Bool_Exp>
  _or?: InputMaybe<Array<Accounts_Bool_Exp>>
  atom?: InputMaybe<Atoms_Bool_Exp>
  atomId?: InputMaybe<Numeric_Comparison_Exp>
  createdAtoms?: InputMaybe<Atoms_Bool_Exp>
  createdAtoms_aggregate?: InputMaybe<Atoms_Aggregate_Bool_Exp>
  createdTriples?: InputMaybe<Triples_Bool_Exp>
  createdTriples_aggregate?: InputMaybe<Triples_Aggregate_Bool_Exp>
  deposits?: InputMaybe<Deposits_Bool_Exp>
  deposits_aggregate?: InputMaybe<Deposits_Aggregate_Bool_Exp>
  feeTransfers?: InputMaybe<FeeTranfers_Bool_Exp>
  feeTransfers_aggregate?: InputMaybe<FeeTranfers_Aggregate_Bool_Exp>
  id?: InputMaybe<Bytea_Comparison_Exp>
  image?: InputMaybe<String_Comparison_Exp>
  label?: InputMaybe<String_Comparison_Exp>
  positions?: InputMaybe<Positions_Bool_Exp>
  positions_aggregate?: InputMaybe<Positions_Aggregate_Bool_Exp>
  redemptions?: InputMaybe<Redemptions_Bool_Exp>
  redemptions_aggregate?: InputMaybe<Redemptions_Aggregate_Bool_Exp>
  signals?: InputMaybe<Signals_Bool_Exp>
  signals_aggregate?: InputMaybe<Signals_Aggregate_Bool_Exp>
  type?: InputMaybe<String_Comparison_Exp>
}

/** unique or primary key constraints on table "Account" */
export enum Accounts_Constraint {
  /** unique or primary key constraint on columns "id" */
  AccountPkey = 'Account_pkey',
}

/** input type for incrementing numeric columns in table "Account" */
export type Accounts_Inc_Input = {
  atomId?: InputMaybe<Scalars['numeric']['input']>
}

/** input type for inserting data into table "Account" */
export type Accounts_Insert_Input = {
  atom?: InputMaybe<Atoms_Obj_Rel_Insert_Input>
  atomId?: InputMaybe<Scalars['numeric']['input']>
  createdAtoms?: InputMaybe<Atoms_Arr_Rel_Insert_Input>
  createdTriples?: InputMaybe<Triples_Arr_Rel_Insert_Input>
  deposits?: InputMaybe<Deposits_Arr_Rel_Insert_Input>
  feeTransfers?: InputMaybe<FeeTranfers_Arr_Rel_Insert_Input>
  id?: InputMaybe<Scalars['bytea']['input']>
  image?: InputMaybe<Scalars['String']['input']>
  label?: InputMaybe<Scalars['String']['input']>
  positions?: InputMaybe<Positions_Arr_Rel_Insert_Input>
  redemptions?: InputMaybe<Redemptions_Arr_Rel_Insert_Input>
  signals?: InputMaybe<Signals_Arr_Rel_Insert_Input>
  type?: InputMaybe<Scalars['String']['input']>
}

/** aggregate max on columns */
export type Accounts_Max_Fields = {
  __typename?: 'accounts_max_fields'
  atomId?: Maybe<Scalars['numeric']['output']>
  image?: Maybe<Scalars['String']['output']>
  label?: Maybe<Scalars['String']['output']>
  type?: Maybe<Scalars['String']['output']>
}

/** aggregate min on columns */
export type Accounts_Min_Fields = {
  __typename?: 'accounts_min_fields'
  atomId?: Maybe<Scalars['numeric']['output']>
  image?: Maybe<Scalars['String']['output']>
  label?: Maybe<Scalars['String']['output']>
  type?: Maybe<Scalars['String']['output']>
}

/** response of any mutation on the table "Account" */
export type Accounts_Mutation_Response = {
  __typename?: 'accounts_mutation_response'
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output']
  /** data from the rows affected by the mutation */
  returning: Array<Accounts>
}

/** input type for inserting object relation for remote table "Account" */
export type Accounts_Obj_Rel_Insert_Input = {
  data: Accounts_Insert_Input
  /** upsert condition */
  on_conflict?: InputMaybe<Accounts_On_Conflict>
}

/** on_conflict condition type for table "Account" */
export type Accounts_On_Conflict = {
  constraint: Accounts_Constraint
  update_columns?: Array<Accounts_Update_Column>
  where?: InputMaybe<Accounts_Bool_Exp>
}

/** Ordering options when selecting data from "Account". */
export type Accounts_Order_By = {
  atom?: InputMaybe<Atoms_Order_By>
  atomId?: InputMaybe<Order_By>
  createdAtoms_aggregate?: InputMaybe<Atoms_Aggregate_Order_By>
  createdTriples_aggregate?: InputMaybe<Triples_Aggregate_Order_By>
  deposits_aggregate?: InputMaybe<Deposits_Aggregate_Order_By>
  feeTransfers_aggregate?: InputMaybe<FeeTranfers_Aggregate_Order_By>
  id?: InputMaybe<Order_By>
  image?: InputMaybe<Order_By>
  label?: InputMaybe<Order_By>
  positions_aggregate?: InputMaybe<Positions_Aggregate_Order_By>
  redemptions_aggregate?: InputMaybe<Redemptions_Aggregate_Order_By>
  signals_aggregate?: InputMaybe<Signals_Aggregate_Order_By>
  type?: InputMaybe<Order_By>
}

/** primary key columns input for table: Account */
export type Accounts_Pk_Columns_Input = {
  id: Scalars['bytea']['input']
}

/** select columns of table "Account" */
export enum Accounts_Select_Column {
  /** column name */
  AtomId = 'atomId',
  /** column name */
  Id = 'id',
  /** column name */
  Image = 'image',
  /** column name */
  Label = 'label',
  /** column name */
  Type = 'type',
}

/** input type for updating data in table "Account" */
export type Accounts_Set_Input = {
  atomId?: InputMaybe<Scalars['numeric']['input']>
  id?: InputMaybe<Scalars['bytea']['input']>
  image?: InputMaybe<Scalars['String']['input']>
  label?: InputMaybe<Scalars['String']['input']>
  type?: InputMaybe<Scalars['String']['input']>
}

/** aggregate stddev on columns */
export type Accounts_Stddev_Fields = {
  __typename?: 'accounts_stddev_fields'
  atomId?: Maybe<Scalars['Float']['output']>
}

/** aggregate stddev_pop on columns */
export type Accounts_Stddev_Pop_Fields = {
  __typename?: 'accounts_stddev_pop_fields'
  atomId?: Maybe<Scalars['Float']['output']>
}

/** aggregate stddev_samp on columns */
export type Accounts_Stddev_Samp_Fields = {
  __typename?: 'accounts_stddev_samp_fields'
  atomId?: Maybe<Scalars['Float']['output']>
}

/** Streaming cursor of the table "accounts" */
export type Accounts_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Accounts_Stream_Cursor_Value_Input
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>
}

/** Initial value of the column from where the streaming should start */
export type Accounts_Stream_Cursor_Value_Input = {
  atomId?: InputMaybe<Scalars['numeric']['input']>
  id?: InputMaybe<Scalars['bytea']['input']>
  image?: InputMaybe<Scalars['String']['input']>
  label?: InputMaybe<Scalars['String']['input']>
  type?: InputMaybe<Scalars['String']['input']>
}

/** aggregate sum on columns */
export type Accounts_Sum_Fields = {
  __typename?: 'accounts_sum_fields'
  atomId?: Maybe<Scalars['numeric']['output']>
}

/** update columns of table "Account" */
export enum Accounts_Update_Column {
  /** column name */
  AtomId = 'atomId',
  /** column name */
  Id = 'id',
  /** column name */
  Image = 'image',
  /** column name */
  Label = 'label',
  /** column name */
  Type = 'type',
}

export type Accounts_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Accounts_Inc_Input>
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Accounts_Set_Input>
  /** filter the rows which have to be updated */
  where: Accounts_Bool_Exp
}

/** aggregate var_pop on columns */
export type Accounts_Var_Pop_Fields = {
  __typename?: 'accounts_var_pop_fields'
  atomId?: Maybe<Scalars['Float']['output']>
}

/** aggregate var_samp on columns */
export type Accounts_Var_Samp_Fields = {
  __typename?: 'accounts_var_samp_fields'
  atomId?: Maybe<Scalars['Float']['output']>
}

/** aggregate variance on columns */
export type Accounts_Variance_Fields = {
  __typename?: 'accounts_variance_fields'
  atomId?: Maybe<Scalars['Float']['output']>
}

/** columns and relationships of "AtomValue" */
export type AtomValues = {
  __typename?: 'atomValues'
  /** An object relationship */
  account?: Maybe<Accounts>
  accountId?: Maybe<Scalars['bytea']['output']>
  /** An object relationship */
  atom?: Maybe<Atoms>
  atomId: Scalars['numeric']['output']
  /** An object relationship */
  book?: Maybe<Books>
  bookId?: Maybe<Scalars['numeric']['output']>
  id: Scalars['numeric']['output']
  /** An object relationship */
  organization?: Maybe<Organizations>
  organizationId?: Maybe<Scalars['numeric']['output']>
  /** An object relationship */
  person?: Maybe<Persons>
  personId?: Maybe<Scalars['numeric']['output']>
  /** An object relationship */
  thing?: Maybe<Things>
  thingId?: Maybe<Scalars['numeric']['output']>
}

/** aggregated selection of "AtomValue" */
export type AtomValues_Aggregate = {
  __typename?: 'atomValues_aggregate'
  aggregate?: Maybe<AtomValues_Aggregate_Fields>
  nodes: Array<AtomValues>
}

/** aggregate fields of "AtomValue" */
export type AtomValues_Aggregate_Fields = {
  __typename?: 'atomValues_aggregate_fields'
  avg?: Maybe<AtomValues_Avg_Fields>
  count: Scalars['Int']['output']
  max?: Maybe<AtomValues_Max_Fields>
  min?: Maybe<AtomValues_Min_Fields>
  stddev?: Maybe<AtomValues_Stddev_Fields>
  stddev_pop?: Maybe<AtomValues_Stddev_Pop_Fields>
  stddev_samp?: Maybe<AtomValues_Stddev_Samp_Fields>
  sum?: Maybe<AtomValues_Sum_Fields>
  var_pop?: Maybe<AtomValues_Var_Pop_Fields>
  var_samp?: Maybe<AtomValues_Var_Samp_Fields>
  variance?: Maybe<AtomValues_Variance_Fields>
}

/** aggregate fields of "AtomValue" */
export type AtomValues_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<AtomValues_Select_Column>>
  distinct?: InputMaybe<Scalars['Boolean']['input']>
}

/** aggregate avg on columns */
export type AtomValues_Avg_Fields = {
  __typename?: 'atomValues_avg_fields'
  atomId?: Maybe<Scalars['Float']['output']>
  bookId?: Maybe<Scalars['Float']['output']>
  id?: Maybe<Scalars['Float']['output']>
  organizationId?: Maybe<Scalars['Float']['output']>
  personId?: Maybe<Scalars['Float']['output']>
  thingId?: Maybe<Scalars['Float']['output']>
}

/** Boolean expression to filter rows from the table "AtomValue". All fields are combined with a logical 'AND'. */
export type AtomValues_Bool_Exp = {
  _and?: InputMaybe<Array<AtomValues_Bool_Exp>>
  _not?: InputMaybe<AtomValues_Bool_Exp>
  _or?: InputMaybe<Array<AtomValues_Bool_Exp>>
  account?: InputMaybe<Accounts_Bool_Exp>
  accountId?: InputMaybe<Bytea_Comparison_Exp>
  atom?: InputMaybe<Atoms_Bool_Exp>
  atomId?: InputMaybe<Numeric_Comparison_Exp>
  book?: InputMaybe<Books_Bool_Exp>
  bookId?: InputMaybe<Numeric_Comparison_Exp>
  id?: InputMaybe<Numeric_Comparison_Exp>
  organization?: InputMaybe<Organizations_Bool_Exp>
  organizationId?: InputMaybe<Numeric_Comparison_Exp>
  person?: InputMaybe<Persons_Bool_Exp>
  personId?: InputMaybe<Numeric_Comparison_Exp>
  thing?: InputMaybe<Things_Bool_Exp>
  thingId?: InputMaybe<Numeric_Comparison_Exp>
}

/** unique or primary key constraints on table "AtomValue" */
export enum AtomValues_Constraint {
  /** unique or primary key constraint on columns "id" */
  AtomValuePkey = 'AtomValue_pkey',
}

/** input type for incrementing numeric columns in table "AtomValue" */
export type AtomValues_Inc_Input = {
  atomId?: InputMaybe<Scalars['numeric']['input']>
  bookId?: InputMaybe<Scalars['numeric']['input']>
  id?: InputMaybe<Scalars['numeric']['input']>
  organizationId?: InputMaybe<Scalars['numeric']['input']>
  personId?: InputMaybe<Scalars['numeric']['input']>
  thingId?: InputMaybe<Scalars['numeric']['input']>
}

/** input type for inserting data into table "AtomValue" */
export type AtomValues_Insert_Input = {
  account?: InputMaybe<Accounts_Obj_Rel_Insert_Input>
  accountId?: InputMaybe<Scalars['bytea']['input']>
  atom?: InputMaybe<Atoms_Obj_Rel_Insert_Input>
  atomId?: InputMaybe<Scalars['numeric']['input']>
  book?: InputMaybe<Books_Obj_Rel_Insert_Input>
  bookId?: InputMaybe<Scalars['numeric']['input']>
  id?: InputMaybe<Scalars['numeric']['input']>
  organization?: InputMaybe<Organizations_Obj_Rel_Insert_Input>
  organizationId?: InputMaybe<Scalars['numeric']['input']>
  person?: InputMaybe<Persons_Obj_Rel_Insert_Input>
  personId?: InputMaybe<Scalars['numeric']['input']>
  thing?: InputMaybe<Things_Obj_Rel_Insert_Input>
  thingId?: InputMaybe<Scalars['numeric']['input']>
}

/** aggregate max on columns */
export type AtomValues_Max_Fields = {
  __typename?: 'atomValues_max_fields'
  atomId?: Maybe<Scalars['numeric']['output']>
  bookId?: Maybe<Scalars['numeric']['output']>
  id?: Maybe<Scalars['numeric']['output']>
  organizationId?: Maybe<Scalars['numeric']['output']>
  personId?: Maybe<Scalars['numeric']['output']>
  thingId?: Maybe<Scalars['numeric']['output']>
}

/** aggregate min on columns */
export type AtomValues_Min_Fields = {
  __typename?: 'atomValues_min_fields'
  atomId?: Maybe<Scalars['numeric']['output']>
  bookId?: Maybe<Scalars['numeric']['output']>
  id?: Maybe<Scalars['numeric']['output']>
  organizationId?: Maybe<Scalars['numeric']['output']>
  personId?: Maybe<Scalars['numeric']['output']>
  thingId?: Maybe<Scalars['numeric']['output']>
}

/** response of any mutation on the table "AtomValue" */
export type AtomValues_Mutation_Response = {
  __typename?: 'atomValues_mutation_response'
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output']
  /** data from the rows affected by the mutation */
  returning: Array<AtomValues>
}

/** input type for inserting object relation for remote table "AtomValue" */
export type AtomValues_Obj_Rel_Insert_Input = {
  data: AtomValues_Insert_Input
  /** upsert condition */
  on_conflict?: InputMaybe<AtomValues_On_Conflict>
}

/** on_conflict condition type for table "AtomValue" */
export type AtomValues_On_Conflict = {
  constraint: AtomValues_Constraint
  update_columns?: Array<AtomValues_Update_Column>
  where?: InputMaybe<AtomValues_Bool_Exp>
}

/** Ordering options when selecting data from "AtomValue". */
export type AtomValues_Order_By = {
  account?: InputMaybe<Accounts_Order_By>
  accountId?: InputMaybe<Order_By>
  atom?: InputMaybe<Atoms_Order_By>
  atomId?: InputMaybe<Order_By>
  book?: InputMaybe<Books_Order_By>
  bookId?: InputMaybe<Order_By>
  id?: InputMaybe<Order_By>
  organization?: InputMaybe<Organizations_Order_By>
  organizationId?: InputMaybe<Order_By>
  person?: InputMaybe<Persons_Order_By>
  personId?: InputMaybe<Order_By>
  thing?: InputMaybe<Things_Order_By>
  thingId?: InputMaybe<Order_By>
}

/** primary key columns input for table: AtomValue */
export type AtomValues_Pk_Columns_Input = {
  id: Scalars['numeric']['input']
}

/** select columns of table "AtomValue" */
export enum AtomValues_Select_Column {
  /** column name */
  AccountId = 'accountId',
  /** column name */
  AtomId = 'atomId',
  /** column name */
  BookId = 'bookId',
  /** column name */
  Id = 'id',
  /** column name */
  OrganizationId = 'organizationId',
  /** column name */
  PersonId = 'personId',
  /** column name */
  ThingId = 'thingId',
}

/** input type for updating data in table "AtomValue" */
export type AtomValues_Set_Input = {
  accountId?: InputMaybe<Scalars['bytea']['input']>
  atomId?: InputMaybe<Scalars['numeric']['input']>
  bookId?: InputMaybe<Scalars['numeric']['input']>
  id?: InputMaybe<Scalars['numeric']['input']>
  organizationId?: InputMaybe<Scalars['numeric']['input']>
  personId?: InputMaybe<Scalars['numeric']['input']>
  thingId?: InputMaybe<Scalars['numeric']['input']>
}

/** aggregate stddev on columns */
export type AtomValues_Stddev_Fields = {
  __typename?: 'atomValues_stddev_fields'
  atomId?: Maybe<Scalars['Float']['output']>
  bookId?: Maybe<Scalars['Float']['output']>
  id?: Maybe<Scalars['Float']['output']>
  organizationId?: Maybe<Scalars['Float']['output']>
  personId?: Maybe<Scalars['Float']['output']>
  thingId?: Maybe<Scalars['Float']['output']>
}

/** aggregate stddev_pop on columns */
export type AtomValues_Stddev_Pop_Fields = {
  __typename?: 'atomValues_stddev_pop_fields'
  atomId?: Maybe<Scalars['Float']['output']>
  bookId?: Maybe<Scalars['Float']['output']>
  id?: Maybe<Scalars['Float']['output']>
  organizationId?: Maybe<Scalars['Float']['output']>
  personId?: Maybe<Scalars['Float']['output']>
  thingId?: Maybe<Scalars['Float']['output']>
}

/** aggregate stddev_samp on columns */
export type AtomValues_Stddev_Samp_Fields = {
  __typename?: 'atomValues_stddev_samp_fields'
  atomId?: Maybe<Scalars['Float']['output']>
  bookId?: Maybe<Scalars['Float']['output']>
  id?: Maybe<Scalars['Float']['output']>
  organizationId?: Maybe<Scalars['Float']['output']>
  personId?: Maybe<Scalars['Float']['output']>
  thingId?: Maybe<Scalars['Float']['output']>
}

/** Streaming cursor of the table "atomValues" */
export type AtomValues_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: AtomValues_Stream_Cursor_Value_Input
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>
}

/** Initial value of the column from where the streaming should start */
export type AtomValues_Stream_Cursor_Value_Input = {
  accountId?: InputMaybe<Scalars['bytea']['input']>
  atomId?: InputMaybe<Scalars['numeric']['input']>
  bookId?: InputMaybe<Scalars['numeric']['input']>
  id?: InputMaybe<Scalars['numeric']['input']>
  organizationId?: InputMaybe<Scalars['numeric']['input']>
  personId?: InputMaybe<Scalars['numeric']['input']>
  thingId?: InputMaybe<Scalars['numeric']['input']>
}

/** aggregate sum on columns */
export type AtomValues_Sum_Fields = {
  __typename?: 'atomValues_sum_fields'
  atomId?: Maybe<Scalars['numeric']['output']>
  bookId?: Maybe<Scalars['numeric']['output']>
  id?: Maybe<Scalars['numeric']['output']>
  organizationId?: Maybe<Scalars['numeric']['output']>
  personId?: Maybe<Scalars['numeric']['output']>
  thingId?: Maybe<Scalars['numeric']['output']>
}

/** update columns of table "AtomValue" */
export enum AtomValues_Update_Column {
  /** column name */
  AccountId = 'accountId',
  /** column name */
  AtomId = 'atomId',
  /** column name */
  BookId = 'bookId',
  /** column name */
  Id = 'id',
  /** column name */
  OrganizationId = 'organizationId',
  /** column name */
  PersonId = 'personId',
  /** column name */
  ThingId = 'thingId',
}

export type AtomValues_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<AtomValues_Inc_Input>
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<AtomValues_Set_Input>
  /** filter the rows which have to be updated */
  where: AtomValues_Bool_Exp
}

/** aggregate var_pop on columns */
export type AtomValues_Var_Pop_Fields = {
  __typename?: 'atomValues_var_pop_fields'
  atomId?: Maybe<Scalars['Float']['output']>
  bookId?: Maybe<Scalars['Float']['output']>
  id?: Maybe<Scalars['Float']['output']>
  organizationId?: Maybe<Scalars['Float']['output']>
  personId?: Maybe<Scalars['Float']['output']>
  thingId?: Maybe<Scalars['Float']['output']>
}

/** aggregate var_samp on columns */
export type AtomValues_Var_Samp_Fields = {
  __typename?: 'atomValues_var_samp_fields'
  atomId?: Maybe<Scalars['Float']['output']>
  bookId?: Maybe<Scalars['Float']['output']>
  id?: Maybe<Scalars['Float']['output']>
  organizationId?: Maybe<Scalars['Float']['output']>
  personId?: Maybe<Scalars['Float']['output']>
  thingId?: Maybe<Scalars['Float']['output']>
}

/** aggregate variance on columns */
export type AtomValues_Variance_Fields = {
  __typename?: 'atomValues_variance_fields'
  atomId?: Maybe<Scalars['Float']['output']>
  bookId?: Maybe<Scalars['Float']['output']>
  id?: Maybe<Scalars['Float']['output']>
  organizationId?: Maybe<Scalars['Float']['output']>
  personId?: Maybe<Scalars['Float']['output']>
  thingId?: Maybe<Scalars['Float']['output']>
}

/** columns and relationships of "Atom" */
export type Atoms = {
  __typename?: 'atoms'
  /** An array relationship */
  asObject: Array<Triples>
  /** An aggregate relationship */
  asObject_aggregate: Triples_Aggregate
  /** An array relationship */
  asPredicate: Array<Triples>
  /** An aggregate relationship */
  asPredicate_aggregate: Triples_Aggregate
  /** An array relationship */
  asSubject: Array<Triples>
  /** An aggregate relationship */
  asSubject_aggregate: Triples_Aggregate
  blockNumber: Scalars['numeric']['output']
  blockTimestamp: Scalars['numeric']['output']
  /** An object relationship */
  creator?: Maybe<Accounts>
  creatorId: Scalars['bytea']['output']
  data: Scalars['String']['output']
  emoji?: Maybe<Scalars['String']['output']>
  id: Scalars['numeric']['output']
  image?: Maybe<Scalars['String']['output']>
  label?: Maybe<Scalars['String']['output']>
  transactionHash: Scalars['bytea']['output']
  type: Scalars['String']['output']
  /** An object relationship */
  value?: Maybe<AtomValues>
  valueId?: Maybe<Scalars['numeric']['output']>
  /** An object relationship */
  vault?: Maybe<Vaults>
  vaultId: Scalars['numeric']['output']
  walletId: Scalars['bytea']['output']
}

/** columns and relationships of "Atom" */
export type AtomsAsObjectArgs = {
  distinct_on?: InputMaybe<Array<Triples_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Triples_Order_By>>
  where?: InputMaybe<Triples_Bool_Exp>
}

/** columns and relationships of "Atom" */
export type AtomsAsObject_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Triples_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Triples_Order_By>>
  where?: InputMaybe<Triples_Bool_Exp>
}

/** columns and relationships of "Atom" */
export type AtomsAsPredicateArgs = {
  distinct_on?: InputMaybe<Array<Triples_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Triples_Order_By>>
  where?: InputMaybe<Triples_Bool_Exp>
}

/** columns and relationships of "Atom" */
export type AtomsAsPredicate_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Triples_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Triples_Order_By>>
  where?: InputMaybe<Triples_Bool_Exp>
}

/** columns and relationships of "Atom" */
export type AtomsAsSubjectArgs = {
  distinct_on?: InputMaybe<Array<Triples_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Triples_Order_By>>
  where?: InputMaybe<Triples_Bool_Exp>
}

/** columns and relationships of "Atom" */
export type AtomsAsSubject_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Triples_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Triples_Order_By>>
  where?: InputMaybe<Triples_Bool_Exp>
}

/** aggregated selection of "Atom" */
export type Atoms_Aggregate = {
  __typename?: 'atoms_aggregate'
  aggregate?: Maybe<Atoms_Aggregate_Fields>
  nodes: Array<Atoms>
}

export type Atoms_Aggregate_Bool_Exp = {
  count?: InputMaybe<Atoms_Aggregate_Bool_Exp_Count>
}

export type Atoms_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Atoms_Select_Column>>
  distinct?: InputMaybe<Scalars['Boolean']['input']>
  filter?: InputMaybe<Atoms_Bool_Exp>
  predicate: Int_Comparison_Exp
}

/** aggregate fields of "Atom" */
export type Atoms_Aggregate_Fields = {
  __typename?: 'atoms_aggregate_fields'
  avg?: Maybe<Atoms_Avg_Fields>
  count: Scalars['Int']['output']
  max?: Maybe<Atoms_Max_Fields>
  min?: Maybe<Atoms_Min_Fields>
  stddev?: Maybe<Atoms_Stddev_Fields>
  stddev_pop?: Maybe<Atoms_Stddev_Pop_Fields>
  stddev_samp?: Maybe<Atoms_Stddev_Samp_Fields>
  sum?: Maybe<Atoms_Sum_Fields>
  var_pop?: Maybe<Atoms_Var_Pop_Fields>
  var_samp?: Maybe<Atoms_Var_Samp_Fields>
  variance?: Maybe<Atoms_Variance_Fields>
}

/** aggregate fields of "Atom" */
export type Atoms_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Atoms_Select_Column>>
  distinct?: InputMaybe<Scalars['Boolean']['input']>
}

/** order by aggregate values of table "Atom" */
export type Atoms_Aggregate_Order_By = {
  avg?: InputMaybe<Atoms_Avg_Order_By>
  count?: InputMaybe<Order_By>
  max?: InputMaybe<Atoms_Max_Order_By>
  min?: InputMaybe<Atoms_Min_Order_By>
  stddev?: InputMaybe<Atoms_Stddev_Order_By>
  stddev_pop?: InputMaybe<Atoms_Stddev_Pop_Order_By>
  stddev_samp?: InputMaybe<Atoms_Stddev_Samp_Order_By>
  sum?: InputMaybe<Atoms_Sum_Order_By>
  var_pop?: InputMaybe<Atoms_Var_Pop_Order_By>
  var_samp?: InputMaybe<Atoms_Var_Samp_Order_By>
  variance?: InputMaybe<Atoms_Variance_Order_By>
}

/** input type for inserting array relation for remote table "Atom" */
export type Atoms_Arr_Rel_Insert_Input = {
  data: Array<Atoms_Insert_Input>
  /** upsert condition */
  on_conflict?: InputMaybe<Atoms_On_Conflict>
}

/** aggregate avg on columns */
export type Atoms_Avg_Fields = {
  __typename?: 'atoms_avg_fields'
  blockNumber?: Maybe<Scalars['Float']['output']>
  blockTimestamp?: Maybe<Scalars['Float']['output']>
  id?: Maybe<Scalars['Float']['output']>
  valueId?: Maybe<Scalars['Float']['output']>
  vaultId?: Maybe<Scalars['Float']['output']>
}

/** order by avg() on columns of table "Atom" */
export type Atoms_Avg_Order_By = {
  blockNumber?: InputMaybe<Order_By>
  blockTimestamp?: InputMaybe<Order_By>
  id?: InputMaybe<Order_By>
  valueId?: InputMaybe<Order_By>
  vaultId?: InputMaybe<Order_By>
}

/** Boolean expression to filter rows from the table "Atom". All fields are combined with a logical 'AND'. */
export type Atoms_Bool_Exp = {
  _and?: InputMaybe<Array<Atoms_Bool_Exp>>
  _not?: InputMaybe<Atoms_Bool_Exp>
  _or?: InputMaybe<Array<Atoms_Bool_Exp>>
  asObject?: InputMaybe<Triples_Bool_Exp>
  asObject_aggregate?: InputMaybe<Triples_Aggregate_Bool_Exp>
  asPredicate?: InputMaybe<Triples_Bool_Exp>
  asPredicate_aggregate?: InputMaybe<Triples_Aggregate_Bool_Exp>
  asSubject?: InputMaybe<Triples_Bool_Exp>
  asSubject_aggregate?: InputMaybe<Triples_Aggregate_Bool_Exp>
  blockNumber?: InputMaybe<Numeric_Comparison_Exp>
  blockTimestamp?: InputMaybe<Numeric_Comparison_Exp>
  creator?: InputMaybe<Accounts_Bool_Exp>
  creatorId?: InputMaybe<Bytea_Comparison_Exp>
  data?: InputMaybe<String_Comparison_Exp>
  emoji?: InputMaybe<String_Comparison_Exp>
  id?: InputMaybe<Numeric_Comparison_Exp>
  image?: InputMaybe<String_Comparison_Exp>
  label?: InputMaybe<String_Comparison_Exp>
  transactionHash?: InputMaybe<Bytea_Comparison_Exp>
  type?: InputMaybe<String_Comparison_Exp>
  value?: InputMaybe<AtomValues_Bool_Exp>
  valueId?: InputMaybe<Numeric_Comparison_Exp>
  vault?: InputMaybe<Vaults_Bool_Exp>
  vaultId?: InputMaybe<Numeric_Comparison_Exp>
  walletId?: InputMaybe<Bytea_Comparison_Exp>
}

/** unique or primary key constraints on table "Atom" */
export enum Atoms_Constraint {
  /** unique or primary key constraint on columns "id" */
  AtomPkey = 'Atom_pkey',
}

/** input type for incrementing numeric columns in table "Atom" */
export type Atoms_Inc_Input = {
  blockNumber?: InputMaybe<Scalars['numeric']['input']>
  blockTimestamp?: InputMaybe<Scalars['numeric']['input']>
  id?: InputMaybe<Scalars['numeric']['input']>
  valueId?: InputMaybe<Scalars['numeric']['input']>
  vaultId?: InputMaybe<Scalars['numeric']['input']>
}

/** input type for inserting data into table "Atom" */
export type Atoms_Insert_Input = {
  asObject?: InputMaybe<Triples_Arr_Rel_Insert_Input>
  asPredicate?: InputMaybe<Triples_Arr_Rel_Insert_Input>
  asSubject?: InputMaybe<Triples_Arr_Rel_Insert_Input>
  blockNumber?: InputMaybe<Scalars['numeric']['input']>
  blockTimestamp?: InputMaybe<Scalars['numeric']['input']>
  creator?: InputMaybe<Accounts_Obj_Rel_Insert_Input>
  creatorId?: InputMaybe<Scalars['bytea']['input']>
  data?: InputMaybe<Scalars['String']['input']>
  emoji?: InputMaybe<Scalars['String']['input']>
  id?: InputMaybe<Scalars['numeric']['input']>
  image?: InputMaybe<Scalars['String']['input']>
  label?: InputMaybe<Scalars['String']['input']>
  transactionHash?: InputMaybe<Scalars['bytea']['input']>
  type?: InputMaybe<Scalars['String']['input']>
  value?: InputMaybe<AtomValues_Obj_Rel_Insert_Input>
  valueId?: InputMaybe<Scalars['numeric']['input']>
  vault?: InputMaybe<Vaults_Obj_Rel_Insert_Input>
  vaultId?: InputMaybe<Scalars['numeric']['input']>
  walletId?: InputMaybe<Scalars['bytea']['input']>
}

/** aggregate max on columns */
export type Atoms_Max_Fields = {
  __typename?: 'atoms_max_fields'
  blockNumber?: Maybe<Scalars['numeric']['output']>
  blockTimestamp?: Maybe<Scalars['numeric']['output']>
  data?: Maybe<Scalars['String']['output']>
  emoji?: Maybe<Scalars['String']['output']>
  id?: Maybe<Scalars['numeric']['output']>
  image?: Maybe<Scalars['String']['output']>
  label?: Maybe<Scalars['String']['output']>
  type?: Maybe<Scalars['String']['output']>
  valueId?: Maybe<Scalars['numeric']['output']>
  vaultId?: Maybe<Scalars['numeric']['output']>
}

/** order by max() on columns of table "Atom" */
export type Atoms_Max_Order_By = {
  blockNumber?: InputMaybe<Order_By>
  blockTimestamp?: InputMaybe<Order_By>
  data?: InputMaybe<Order_By>
  emoji?: InputMaybe<Order_By>
  id?: InputMaybe<Order_By>
  image?: InputMaybe<Order_By>
  label?: InputMaybe<Order_By>
  type?: InputMaybe<Order_By>
  valueId?: InputMaybe<Order_By>
  vaultId?: InputMaybe<Order_By>
}

/** aggregate min on columns */
export type Atoms_Min_Fields = {
  __typename?: 'atoms_min_fields'
  blockNumber?: Maybe<Scalars['numeric']['output']>
  blockTimestamp?: Maybe<Scalars['numeric']['output']>
  data?: Maybe<Scalars['String']['output']>
  emoji?: Maybe<Scalars['String']['output']>
  id?: Maybe<Scalars['numeric']['output']>
  image?: Maybe<Scalars['String']['output']>
  label?: Maybe<Scalars['String']['output']>
  type?: Maybe<Scalars['String']['output']>
  valueId?: Maybe<Scalars['numeric']['output']>
  vaultId?: Maybe<Scalars['numeric']['output']>
}

/** order by min() on columns of table "Atom" */
export type Atoms_Min_Order_By = {
  blockNumber?: InputMaybe<Order_By>
  blockTimestamp?: InputMaybe<Order_By>
  data?: InputMaybe<Order_By>
  emoji?: InputMaybe<Order_By>
  id?: InputMaybe<Order_By>
  image?: InputMaybe<Order_By>
  label?: InputMaybe<Order_By>
  type?: InputMaybe<Order_By>
  valueId?: InputMaybe<Order_By>
  vaultId?: InputMaybe<Order_By>
}

/** response of any mutation on the table "Atom" */
export type Atoms_Mutation_Response = {
  __typename?: 'atoms_mutation_response'
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output']
  /** data from the rows affected by the mutation */
  returning: Array<Atoms>
}

/** input type for inserting object relation for remote table "Atom" */
export type Atoms_Obj_Rel_Insert_Input = {
  data: Atoms_Insert_Input
  /** upsert condition */
  on_conflict?: InputMaybe<Atoms_On_Conflict>
}

/** on_conflict condition type for table "Atom" */
export type Atoms_On_Conflict = {
  constraint: Atoms_Constraint
  update_columns?: Array<Atoms_Update_Column>
  where?: InputMaybe<Atoms_Bool_Exp>
}

/** Ordering options when selecting data from "Atom". */
export type Atoms_Order_By = {
  asObject_aggregate?: InputMaybe<Triples_Aggregate_Order_By>
  asPredicate_aggregate?: InputMaybe<Triples_Aggregate_Order_By>
  asSubject_aggregate?: InputMaybe<Triples_Aggregate_Order_By>
  blockNumber?: InputMaybe<Order_By>
  blockTimestamp?: InputMaybe<Order_By>
  creator?: InputMaybe<Accounts_Order_By>
  creatorId?: InputMaybe<Order_By>
  data?: InputMaybe<Order_By>
  emoji?: InputMaybe<Order_By>
  id?: InputMaybe<Order_By>
  image?: InputMaybe<Order_By>
  label?: InputMaybe<Order_By>
  transactionHash?: InputMaybe<Order_By>
  type?: InputMaybe<Order_By>
  value?: InputMaybe<AtomValues_Order_By>
  valueId?: InputMaybe<Order_By>
  vault?: InputMaybe<Vaults_Order_By>
  vaultId?: InputMaybe<Order_By>
  walletId?: InputMaybe<Order_By>
}

/** primary key columns input for table: Atom */
export type Atoms_Pk_Columns_Input = {
  id: Scalars['numeric']['input']
}

/** select columns of table "Atom" */
export enum Atoms_Select_Column {
  /** column name */
  BlockNumber = 'blockNumber',
  /** column name */
  BlockTimestamp = 'blockTimestamp',
  /** column name */
  CreatorId = 'creatorId',
  /** column name */
  Data = 'data',
  /** column name */
  Emoji = 'emoji',
  /** column name */
  Id = 'id',
  /** column name */
  Image = 'image',
  /** column name */
  Label = 'label',
  /** column name */
  TransactionHash = 'transactionHash',
  /** column name */
  Type = 'type',
  /** column name */
  ValueId = 'valueId',
  /** column name */
  VaultId = 'vaultId',
  /** column name */
  WalletId = 'walletId',
}

/** input type for updating data in table "Atom" */
export type Atoms_Set_Input = {
  blockNumber?: InputMaybe<Scalars['numeric']['input']>
  blockTimestamp?: InputMaybe<Scalars['numeric']['input']>
  creatorId?: InputMaybe<Scalars['bytea']['input']>
  data?: InputMaybe<Scalars['String']['input']>
  emoji?: InputMaybe<Scalars['String']['input']>
  id?: InputMaybe<Scalars['numeric']['input']>
  image?: InputMaybe<Scalars['String']['input']>
  label?: InputMaybe<Scalars['String']['input']>
  transactionHash?: InputMaybe<Scalars['bytea']['input']>
  type?: InputMaybe<Scalars['String']['input']>
  valueId?: InputMaybe<Scalars['numeric']['input']>
  vaultId?: InputMaybe<Scalars['numeric']['input']>
  walletId?: InputMaybe<Scalars['bytea']['input']>
}

/** aggregate stddev on columns */
export type Atoms_Stddev_Fields = {
  __typename?: 'atoms_stddev_fields'
  blockNumber?: Maybe<Scalars['Float']['output']>
  blockTimestamp?: Maybe<Scalars['Float']['output']>
  id?: Maybe<Scalars['Float']['output']>
  valueId?: Maybe<Scalars['Float']['output']>
  vaultId?: Maybe<Scalars['Float']['output']>
}

/** order by stddev() on columns of table "Atom" */
export type Atoms_Stddev_Order_By = {
  blockNumber?: InputMaybe<Order_By>
  blockTimestamp?: InputMaybe<Order_By>
  id?: InputMaybe<Order_By>
  valueId?: InputMaybe<Order_By>
  vaultId?: InputMaybe<Order_By>
}

/** aggregate stddev_pop on columns */
export type Atoms_Stddev_Pop_Fields = {
  __typename?: 'atoms_stddev_pop_fields'
  blockNumber?: Maybe<Scalars['Float']['output']>
  blockTimestamp?: Maybe<Scalars['Float']['output']>
  id?: Maybe<Scalars['Float']['output']>
  valueId?: Maybe<Scalars['Float']['output']>
  vaultId?: Maybe<Scalars['Float']['output']>
}

/** order by stddev_pop() on columns of table "Atom" */
export type Atoms_Stddev_Pop_Order_By = {
  blockNumber?: InputMaybe<Order_By>
  blockTimestamp?: InputMaybe<Order_By>
  id?: InputMaybe<Order_By>
  valueId?: InputMaybe<Order_By>
  vaultId?: InputMaybe<Order_By>
}

/** aggregate stddev_samp on columns */
export type Atoms_Stddev_Samp_Fields = {
  __typename?: 'atoms_stddev_samp_fields'
  blockNumber?: Maybe<Scalars['Float']['output']>
  blockTimestamp?: Maybe<Scalars['Float']['output']>
  id?: Maybe<Scalars['Float']['output']>
  valueId?: Maybe<Scalars['Float']['output']>
  vaultId?: Maybe<Scalars['Float']['output']>
}

/** order by stddev_samp() on columns of table "Atom" */
export type Atoms_Stddev_Samp_Order_By = {
  blockNumber?: InputMaybe<Order_By>
  blockTimestamp?: InputMaybe<Order_By>
  id?: InputMaybe<Order_By>
  valueId?: InputMaybe<Order_By>
  vaultId?: InputMaybe<Order_By>
}

/** Streaming cursor of the table "atoms" */
export type Atoms_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Atoms_Stream_Cursor_Value_Input
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>
}

/** Initial value of the column from where the streaming should start */
export type Atoms_Stream_Cursor_Value_Input = {
  blockNumber?: InputMaybe<Scalars['numeric']['input']>
  blockTimestamp?: InputMaybe<Scalars['numeric']['input']>
  creatorId?: InputMaybe<Scalars['bytea']['input']>
  data?: InputMaybe<Scalars['String']['input']>
  emoji?: InputMaybe<Scalars['String']['input']>
  id?: InputMaybe<Scalars['numeric']['input']>
  image?: InputMaybe<Scalars['String']['input']>
  label?: InputMaybe<Scalars['String']['input']>
  transactionHash?: InputMaybe<Scalars['bytea']['input']>
  type?: InputMaybe<Scalars['String']['input']>
  valueId?: InputMaybe<Scalars['numeric']['input']>
  vaultId?: InputMaybe<Scalars['numeric']['input']>
  walletId?: InputMaybe<Scalars['bytea']['input']>
}

/** aggregate sum on columns */
export type Atoms_Sum_Fields = {
  __typename?: 'atoms_sum_fields'
  blockNumber?: Maybe<Scalars['numeric']['output']>
  blockTimestamp?: Maybe<Scalars['numeric']['output']>
  id?: Maybe<Scalars['numeric']['output']>
  valueId?: Maybe<Scalars['numeric']['output']>
  vaultId?: Maybe<Scalars['numeric']['output']>
}

/** order by sum() on columns of table "Atom" */
export type Atoms_Sum_Order_By = {
  blockNumber?: InputMaybe<Order_By>
  blockTimestamp?: InputMaybe<Order_By>
  id?: InputMaybe<Order_By>
  valueId?: InputMaybe<Order_By>
  vaultId?: InputMaybe<Order_By>
}

/** update columns of table "Atom" */
export enum Atoms_Update_Column {
  /** column name */
  BlockNumber = 'blockNumber',
  /** column name */
  BlockTimestamp = 'blockTimestamp',
  /** column name */
  CreatorId = 'creatorId',
  /** column name */
  Data = 'data',
  /** column name */
  Emoji = 'emoji',
  /** column name */
  Id = 'id',
  /** column name */
  Image = 'image',
  /** column name */
  Label = 'label',
  /** column name */
  TransactionHash = 'transactionHash',
  /** column name */
  Type = 'type',
  /** column name */
  ValueId = 'valueId',
  /** column name */
  VaultId = 'vaultId',
  /** column name */
  WalletId = 'walletId',
}

export type Atoms_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Atoms_Inc_Input>
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Atoms_Set_Input>
  /** filter the rows which have to be updated */
  where: Atoms_Bool_Exp
}

/** aggregate var_pop on columns */
export type Atoms_Var_Pop_Fields = {
  __typename?: 'atoms_var_pop_fields'
  blockNumber?: Maybe<Scalars['Float']['output']>
  blockTimestamp?: Maybe<Scalars['Float']['output']>
  id?: Maybe<Scalars['Float']['output']>
  valueId?: Maybe<Scalars['Float']['output']>
  vaultId?: Maybe<Scalars['Float']['output']>
}

/** order by var_pop() on columns of table "Atom" */
export type Atoms_Var_Pop_Order_By = {
  blockNumber?: InputMaybe<Order_By>
  blockTimestamp?: InputMaybe<Order_By>
  id?: InputMaybe<Order_By>
  valueId?: InputMaybe<Order_By>
  vaultId?: InputMaybe<Order_By>
}

/** aggregate var_samp on columns */
export type Atoms_Var_Samp_Fields = {
  __typename?: 'atoms_var_samp_fields'
  blockNumber?: Maybe<Scalars['Float']['output']>
  blockTimestamp?: Maybe<Scalars['Float']['output']>
  id?: Maybe<Scalars['Float']['output']>
  valueId?: Maybe<Scalars['Float']['output']>
  vaultId?: Maybe<Scalars['Float']['output']>
}

/** order by var_samp() on columns of table "Atom" */
export type Atoms_Var_Samp_Order_By = {
  blockNumber?: InputMaybe<Order_By>
  blockTimestamp?: InputMaybe<Order_By>
  id?: InputMaybe<Order_By>
  valueId?: InputMaybe<Order_By>
  vaultId?: InputMaybe<Order_By>
}

/** aggregate variance on columns */
export type Atoms_Variance_Fields = {
  __typename?: 'atoms_variance_fields'
  blockNumber?: Maybe<Scalars['Float']['output']>
  blockTimestamp?: Maybe<Scalars['Float']['output']>
  id?: Maybe<Scalars['Float']['output']>
  valueId?: Maybe<Scalars['Float']['output']>
  vaultId?: Maybe<Scalars['Float']['output']>
}

/** order by variance() on columns of table "Atom" */
export type Atoms_Variance_Order_By = {
  blockNumber?: InputMaybe<Order_By>
  blockTimestamp?: InputMaybe<Order_By>
  id?: InputMaybe<Order_By>
  valueId?: InputMaybe<Order_By>
  vaultId?: InputMaybe<Order_By>
}

/** columns and relationships of "Book" */
export type Books = {
  __typename?: 'books'
  /** An object relationship */
  atom?: Maybe<Atoms>
  atomId: Scalars['numeric']['output']
  description?: Maybe<Scalars['String']['output']>
  genre?: Maybe<Scalars['String']['output']>
  id: Scalars['numeric']['output']
  name?: Maybe<Scalars['String']['output']>
  url?: Maybe<Scalars['String']['output']>
}

/** aggregated selection of "Book" */
export type Books_Aggregate = {
  __typename?: 'books_aggregate'
  aggregate?: Maybe<Books_Aggregate_Fields>
  nodes: Array<Books>
}

/** aggregate fields of "Book" */
export type Books_Aggregate_Fields = {
  __typename?: 'books_aggregate_fields'
  avg?: Maybe<Books_Avg_Fields>
  count: Scalars['Int']['output']
  max?: Maybe<Books_Max_Fields>
  min?: Maybe<Books_Min_Fields>
  stddev?: Maybe<Books_Stddev_Fields>
  stddev_pop?: Maybe<Books_Stddev_Pop_Fields>
  stddev_samp?: Maybe<Books_Stddev_Samp_Fields>
  sum?: Maybe<Books_Sum_Fields>
  var_pop?: Maybe<Books_Var_Pop_Fields>
  var_samp?: Maybe<Books_Var_Samp_Fields>
  variance?: Maybe<Books_Variance_Fields>
}

/** aggregate fields of "Book" */
export type Books_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Books_Select_Column>>
  distinct?: InputMaybe<Scalars['Boolean']['input']>
}

/** aggregate avg on columns */
export type Books_Avg_Fields = {
  __typename?: 'books_avg_fields'
  atomId?: Maybe<Scalars['Float']['output']>
  id?: Maybe<Scalars['Float']['output']>
}

/** Boolean expression to filter rows from the table "Book". All fields are combined with a logical 'AND'. */
export type Books_Bool_Exp = {
  _and?: InputMaybe<Array<Books_Bool_Exp>>
  _not?: InputMaybe<Books_Bool_Exp>
  _or?: InputMaybe<Array<Books_Bool_Exp>>
  atom?: InputMaybe<Atoms_Bool_Exp>
  atomId?: InputMaybe<Numeric_Comparison_Exp>
  description?: InputMaybe<String_Comparison_Exp>
  genre?: InputMaybe<String_Comparison_Exp>
  id?: InputMaybe<Numeric_Comparison_Exp>
  name?: InputMaybe<String_Comparison_Exp>
  url?: InputMaybe<String_Comparison_Exp>
}

/** unique or primary key constraints on table "Book" */
export enum Books_Constraint {
  /** unique or primary key constraint on columns "id" */
  BookPkey = 'Book_pkey',
}

/** input type for incrementing numeric columns in table "Book" */
export type Books_Inc_Input = {
  atomId?: InputMaybe<Scalars['numeric']['input']>
  id?: InputMaybe<Scalars['numeric']['input']>
}

/** input type for inserting data into table "Book" */
export type Books_Insert_Input = {
  atom?: InputMaybe<Atoms_Obj_Rel_Insert_Input>
  atomId?: InputMaybe<Scalars['numeric']['input']>
  description?: InputMaybe<Scalars['String']['input']>
  genre?: InputMaybe<Scalars['String']['input']>
  id?: InputMaybe<Scalars['numeric']['input']>
  name?: InputMaybe<Scalars['String']['input']>
  url?: InputMaybe<Scalars['String']['input']>
}

/** aggregate max on columns */
export type Books_Max_Fields = {
  __typename?: 'books_max_fields'
  atomId?: Maybe<Scalars['numeric']['output']>
  description?: Maybe<Scalars['String']['output']>
  genre?: Maybe<Scalars['String']['output']>
  id?: Maybe<Scalars['numeric']['output']>
  name?: Maybe<Scalars['String']['output']>
  url?: Maybe<Scalars['String']['output']>
}

/** aggregate min on columns */
export type Books_Min_Fields = {
  __typename?: 'books_min_fields'
  atomId?: Maybe<Scalars['numeric']['output']>
  description?: Maybe<Scalars['String']['output']>
  genre?: Maybe<Scalars['String']['output']>
  id?: Maybe<Scalars['numeric']['output']>
  name?: Maybe<Scalars['String']['output']>
  url?: Maybe<Scalars['String']['output']>
}

/** response of any mutation on the table "Book" */
export type Books_Mutation_Response = {
  __typename?: 'books_mutation_response'
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output']
  /** data from the rows affected by the mutation */
  returning: Array<Books>
}

/** input type for inserting object relation for remote table "Book" */
export type Books_Obj_Rel_Insert_Input = {
  data: Books_Insert_Input
  /** upsert condition */
  on_conflict?: InputMaybe<Books_On_Conflict>
}

/** on_conflict condition type for table "Book" */
export type Books_On_Conflict = {
  constraint: Books_Constraint
  update_columns?: Array<Books_Update_Column>
  where?: InputMaybe<Books_Bool_Exp>
}

/** Ordering options when selecting data from "Book". */
export type Books_Order_By = {
  atom?: InputMaybe<Atoms_Order_By>
  atomId?: InputMaybe<Order_By>
  description?: InputMaybe<Order_By>
  genre?: InputMaybe<Order_By>
  id?: InputMaybe<Order_By>
  name?: InputMaybe<Order_By>
  url?: InputMaybe<Order_By>
}

/** primary key columns input for table: Book */
export type Books_Pk_Columns_Input = {
  id: Scalars['numeric']['input']
}

/** select columns of table "Book" */
export enum Books_Select_Column {
  /** column name */
  AtomId = 'atomId',
  /** column name */
  Description = 'description',
  /** column name */
  Genre = 'genre',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Url = 'url',
}

/** input type for updating data in table "Book" */
export type Books_Set_Input = {
  atomId?: InputMaybe<Scalars['numeric']['input']>
  description?: InputMaybe<Scalars['String']['input']>
  genre?: InputMaybe<Scalars['String']['input']>
  id?: InputMaybe<Scalars['numeric']['input']>
  name?: InputMaybe<Scalars['String']['input']>
  url?: InputMaybe<Scalars['String']['input']>
}

/** aggregate stddev on columns */
export type Books_Stddev_Fields = {
  __typename?: 'books_stddev_fields'
  atomId?: Maybe<Scalars['Float']['output']>
  id?: Maybe<Scalars['Float']['output']>
}

/** aggregate stddev_pop on columns */
export type Books_Stddev_Pop_Fields = {
  __typename?: 'books_stddev_pop_fields'
  atomId?: Maybe<Scalars['Float']['output']>
  id?: Maybe<Scalars['Float']['output']>
}

/** aggregate stddev_samp on columns */
export type Books_Stddev_Samp_Fields = {
  __typename?: 'books_stddev_samp_fields'
  atomId?: Maybe<Scalars['Float']['output']>
  id?: Maybe<Scalars['Float']['output']>
}

/** Streaming cursor of the table "books" */
export type Books_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Books_Stream_Cursor_Value_Input
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>
}

/** Initial value of the column from where the streaming should start */
export type Books_Stream_Cursor_Value_Input = {
  atomId?: InputMaybe<Scalars['numeric']['input']>
  description?: InputMaybe<Scalars['String']['input']>
  genre?: InputMaybe<Scalars['String']['input']>
  id?: InputMaybe<Scalars['numeric']['input']>
  name?: InputMaybe<Scalars['String']['input']>
  url?: InputMaybe<Scalars['String']['input']>
}

/** aggregate sum on columns */
export type Books_Sum_Fields = {
  __typename?: 'books_sum_fields'
  atomId?: Maybe<Scalars['numeric']['output']>
  id?: Maybe<Scalars['numeric']['output']>
}

/** update columns of table "Book" */
export enum Books_Update_Column {
  /** column name */
  AtomId = 'atomId',
  /** column name */
  Description = 'description',
  /** column name */
  Genre = 'genre',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Url = 'url',
}

export type Books_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Books_Inc_Input>
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Books_Set_Input>
  /** filter the rows which have to be updated */
  where: Books_Bool_Exp
}

/** aggregate var_pop on columns */
export type Books_Var_Pop_Fields = {
  __typename?: 'books_var_pop_fields'
  atomId?: Maybe<Scalars['Float']['output']>
  id?: Maybe<Scalars['Float']['output']>
}

/** aggregate var_samp on columns */
export type Books_Var_Samp_Fields = {
  __typename?: 'books_var_samp_fields'
  atomId?: Maybe<Scalars['Float']['output']>
  id?: Maybe<Scalars['Float']['output']>
}

/** aggregate variance on columns */
export type Books_Variance_Fields = {
  __typename?: 'books_variance_fields'
  atomId?: Maybe<Scalars['Float']['output']>
  id?: Maybe<Scalars['Float']['output']>
}

/** Boolean expression to compare columns of type "bytea". All fields are combined with logical 'AND'. */
export type Bytea_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['bytea']['input']>
  _gt?: InputMaybe<Scalars['bytea']['input']>
  _gte?: InputMaybe<Scalars['bytea']['input']>
  _in?: InputMaybe<Array<Scalars['bytea']['input']>>
  _is_null?: InputMaybe<Scalars['Boolean']['input']>
  _lt?: InputMaybe<Scalars['bytea']['input']>
  _lte?: InputMaybe<Scalars['bytea']['input']>
  _neq?: InputMaybe<Scalars['bytea']['input']>
  _nin?: InputMaybe<Array<Scalars['bytea']['input']>>
}

/** columns and relationships of "ChainlinkPrice" */
export type ChainLinkPrices = {
  __typename?: 'chainLinkPrices'
  id: Scalars['numeric']['output']
  usd: Scalars['float8']['output']
}

/** aggregated selection of "ChainlinkPrice" */
export type ChainLinkPrices_Aggregate = {
  __typename?: 'chainLinkPrices_aggregate'
  aggregate?: Maybe<ChainLinkPrices_Aggregate_Fields>
  nodes: Array<ChainLinkPrices>
}

/** aggregate fields of "ChainlinkPrice" */
export type ChainLinkPrices_Aggregate_Fields = {
  __typename?: 'chainLinkPrices_aggregate_fields'
  avg?: Maybe<ChainLinkPrices_Avg_Fields>
  count: Scalars['Int']['output']
  max?: Maybe<ChainLinkPrices_Max_Fields>
  min?: Maybe<ChainLinkPrices_Min_Fields>
  stddev?: Maybe<ChainLinkPrices_Stddev_Fields>
  stddev_pop?: Maybe<ChainLinkPrices_Stddev_Pop_Fields>
  stddev_samp?: Maybe<ChainLinkPrices_Stddev_Samp_Fields>
  sum?: Maybe<ChainLinkPrices_Sum_Fields>
  var_pop?: Maybe<ChainLinkPrices_Var_Pop_Fields>
  var_samp?: Maybe<ChainLinkPrices_Var_Samp_Fields>
  variance?: Maybe<ChainLinkPrices_Variance_Fields>
}

/** aggregate fields of "ChainlinkPrice" */
export type ChainLinkPrices_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<ChainLinkPrices_Select_Column>>
  distinct?: InputMaybe<Scalars['Boolean']['input']>
}

/** aggregate avg on columns */
export type ChainLinkPrices_Avg_Fields = {
  __typename?: 'chainLinkPrices_avg_fields'
  id?: Maybe<Scalars['Float']['output']>
  usd?: Maybe<Scalars['Float']['output']>
}

/** Boolean expression to filter rows from the table "ChainlinkPrice". All fields are combined with a logical 'AND'. */
export type ChainLinkPrices_Bool_Exp = {
  _and?: InputMaybe<Array<ChainLinkPrices_Bool_Exp>>
  _not?: InputMaybe<ChainLinkPrices_Bool_Exp>
  _or?: InputMaybe<Array<ChainLinkPrices_Bool_Exp>>
  id?: InputMaybe<Numeric_Comparison_Exp>
  usd?: InputMaybe<Float8_Comparison_Exp>
}

/** unique or primary key constraints on table "ChainlinkPrice" */
export enum ChainLinkPrices_Constraint {
  /** unique or primary key constraint on columns "id" */
  ChainlinkPricePkey = 'ChainlinkPrice_pkey',
}

/** input type for incrementing numeric columns in table "ChainlinkPrice" */
export type ChainLinkPrices_Inc_Input = {
  id?: InputMaybe<Scalars['numeric']['input']>
  usd?: InputMaybe<Scalars['float8']['input']>
}

/** input type for inserting data into table "ChainlinkPrice" */
export type ChainLinkPrices_Insert_Input = {
  id?: InputMaybe<Scalars['numeric']['input']>
  usd?: InputMaybe<Scalars['float8']['input']>
}

/** aggregate max on columns */
export type ChainLinkPrices_Max_Fields = {
  __typename?: 'chainLinkPrices_max_fields'
  id?: Maybe<Scalars['numeric']['output']>
  usd?: Maybe<Scalars['float8']['output']>
}

/** aggregate min on columns */
export type ChainLinkPrices_Min_Fields = {
  __typename?: 'chainLinkPrices_min_fields'
  id?: Maybe<Scalars['numeric']['output']>
  usd?: Maybe<Scalars['float8']['output']>
}

/** response of any mutation on the table "ChainlinkPrice" */
export type ChainLinkPrices_Mutation_Response = {
  __typename?: 'chainLinkPrices_mutation_response'
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output']
  /** data from the rows affected by the mutation */
  returning: Array<ChainLinkPrices>
}

/** on_conflict condition type for table "ChainlinkPrice" */
export type ChainLinkPrices_On_Conflict = {
  constraint: ChainLinkPrices_Constraint
  update_columns?: Array<ChainLinkPrices_Update_Column>
  where?: InputMaybe<ChainLinkPrices_Bool_Exp>
}

/** Ordering options when selecting data from "ChainlinkPrice". */
export type ChainLinkPrices_Order_By = {
  id?: InputMaybe<Order_By>
  usd?: InputMaybe<Order_By>
}

/** primary key columns input for table: ChainlinkPrice */
export type ChainLinkPrices_Pk_Columns_Input = {
  id: Scalars['numeric']['input']
}

/** select columns of table "ChainlinkPrice" */
export enum ChainLinkPrices_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Usd = 'usd',
}

/** input type for updating data in table "ChainlinkPrice" */
export type ChainLinkPrices_Set_Input = {
  id?: InputMaybe<Scalars['numeric']['input']>
  usd?: InputMaybe<Scalars['float8']['input']>
}

/** aggregate stddev on columns */
export type ChainLinkPrices_Stddev_Fields = {
  __typename?: 'chainLinkPrices_stddev_fields'
  id?: Maybe<Scalars['Float']['output']>
  usd?: Maybe<Scalars['Float']['output']>
}

/** aggregate stddev_pop on columns */
export type ChainLinkPrices_Stddev_Pop_Fields = {
  __typename?: 'chainLinkPrices_stddev_pop_fields'
  id?: Maybe<Scalars['Float']['output']>
  usd?: Maybe<Scalars['Float']['output']>
}

/** aggregate stddev_samp on columns */
export type ChainLinkPrices_Stddev_Samp_Fields = {
  __typename?: 'chainLinkPrices_stddev_samp_fields'
  id?: Maybe<Scalars['Float']['output']>
  usd?: Maybe<Scalars['Float']['output']>
}

/** Streaming cursor of the table "chainLinkPrices" */
export type ChainLinkPrices_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: ChainLinkPrices_Stream_Cursor_Value_Input
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>
}

/** Initial value of the column from where the streaming should start */
export type ChainLinkPrices_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['numeric']['input']>
  usd?: InputMaybe<Scalars['float8']['input']>
}

/** aggregate sum on columns */
export type ChainLinkPrices_Sum_Fields = {
  __typename?: 'chainLinkPrices_sum_fields'
  id?: Maybe<Scalars['numeric']['output']>
  usd?: Maybe<Scalars['float8']['output']>
}

/** update columns of table "ChainlinkPrice" */
export enum ChainLinkPrices_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Usd = 'usd',
}

export type ChainLinkPrices_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<ChainLinkPrices_Inc_Input>
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<ChainLinkPrices_Set_Input>
  /** filter the rows which have to be updated */
  where: ChainLinkPrices_Bool_Exp
}

/** aggregate var_pop on columns */
export type ChainLinkPrices_Var_Pop_Fields = {
  __typename?: 'chainLinkPrices_var_pop_fields'
  id?: Maybe<Scalars['Float']['output']>
  usd?: Maybe<Scalars['Float']['output']>
}

/** aggregate var_samp on columns */
export type ChainLinkPrices_Var_Samp_Fields = {
  __typename?: 'chainLinkPrices_var_samp_fields'
  id?: Maybe<Scalars['Float']['output']>
  usd?: Maybe<Scalars['Float']['output']>
}

/** aggregate variance on columns */
export type ChainLinkPrices_Variance_Fields = {
  __typename?: 'chainLinkPrices_variance_fields'
  id?: Maybe<Scalars['Float']['output']>
  usd?: Maybe<Scalars['Float']['output']>
}

/** ordering argument of a cursor */
export enum Cursor_Ordering {
  /** ascending ordering of the cursor */
  Asc = 'ASC',
  /** descending ordering of the cursor */
  Desc = 'DESC',
}

/** columns and relationships of "Deposit" */
export type Deposits = {
  __typename?: 'deposits'
  blockNumber: Scalars['numeric']['output']
  blockTimestamp: Scalars['numeric']['output']
  entryFee: Scalars['numeric']['output']
  id: Scalars['String']['output']
  isAtomWallet: Scalars['Int']['output']
  isTriple: Scalars['Int']['output']
  /** An object relationship */
  receiver?: Maybe<Accounts>
  receiverId: Scalars['bytea']['output']
  receiverTotalSharesInVault: Scalars['numeric']['output']
  /** An object relationship */
  sender?: Maybe<Accounts>
  senderAssetsAfterTotalFees: Scalars['numeric']['output']
  senderId: Scalars['bytea']['output']
  sharesForReceiver: Scalars['numeric']['output']
  transactionHash: Scalars['bytea']['output']
  /** An object relationship */
  vault?: Maybe<Vaults>
  vaultId: Scalars['numeric']['output']
}

/** aggregated selection of "Deposit" */
export type Deposits_Aggregate = {
  __typename?: 'deposits_aggregate'
  aggregate?: Maybe<Deposits_Aggregate_Fields>
  nodes: Array<Deposits>
}

export type Deposits_Aggregate_Bool_Exp = {
  count?: InputMaybe<Deposits_Aggregate_Bool_Exp_Count>
}

export type Deposits_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Deposits_Select_Column>>
  distinct?: InputMaybe<Scalars['Boolean']['input']>
  filter?: InputMaybe<Deposits_Bool_Exp>
  predicate: Int_Comparison_Exp
}

/** aggregate fields of "Deposit" */
export type Deposits_Aggregate_Fields = {
  __typename?: 'deposits_aggregate_fields'
  avg?: Maybe<Deposits_Avg_Fields>
  count: Scalars['Int']['output']
  max?: Maybe<Deposits_Max_Fields>
  min?: Maybe<Deposits_Min_Fields>
  stddev?: Maybe<Deposits_Stddev_Fields>
  stddev_pop?: Maybe<Deposits_Stddev_Pop_Fields>
  stddev_samp?: Maybe<Deposits_Stddev_Samp_Fields>
  sum?: Maybe<Deposits_Sum_Fields>
  var_pop?: Maybe<Deposits_Var_Pop_Fields>
  var_samp?: Maybe<Deposits_Var_Samp_Fields>
  variance?: Maybe<Deposits_Variance_Fields>
}

/** aggregate fields of "Deposit" */
export type Deposits_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Deposits_Select_Column>>
  distinct?: InputMaybe<Scalars['Boolean']['input']>
}

/** order by aggregate values of table "Deposit" */
export type Deposits_Aggregate_Order_By = {
  avg?: InputMaybe<Deposits_Avg_Order_By>
  count?: InputMaybe<Order_By>
  max?: InputMaybe<Deposits_Max_Order_By>
  min?: InputMaybe<Deposits_Min_Order_By>
  stddev?: InputMaybe<Deposits_Stddev_Order_By>
  stddev_pop?: InputMaybe<Deposits_Stddev_Pop_Order_By>
  stddev_samp?: InputMaybe<Deposits_Stddev_Samp_Order_By>
  sum?: InputMaybe<Deposits_Sum_Order_By>
  var_pop?: InputMaybe<Deposits_Var_Pop_Order_By>
  var_samp?: InputMaybe<Deposits_Var_Samp_Order_By>
  variance?: InputMaybe<Deposits_Variance_Order_By>
}

/** input type for inserting array relation for remote table "Deposit" */
export type Deposits_Arr_Rel_Insert_Input = {
  data: Array<Deposits_Insert_Input>
  /** upsert condition */
  on_conflict?: InputMaybe<Deposits_On_Conflict>
}

/** aggregate avg on columns */
export type Deposits_Avg_Fields = {
  __typename?: 'deposits_avg_fields'
  blockNumber?: Maybe<Scalars['Float']['output']>
  blockTimestamp?: Maybe<Scalars['Float']['output']>
  entryFee?: Maybe<Scalars['Float']['output']>
  isAtomWallet?: Maybe<Scalars['Float']['output']>
  isTriple?: Maybe<Scalars['Float']['output']>
  receiverTotalSharesInVault?: Maybe<Scalars['Float']['output']>
  senderAssetsAfterTotalFees?: Maybe<Scalars['Float']['output']>
  sharesForReceiver?: Maybe<Scalars['Float']['output']>
  vaultId?: Maybe<Scalars['Float']['output']>
}

/** order by avg() on columns of table "Deposit" */
export type Deposits_Avg_Order_By = {
  blockNumber?: InputMaybe<Order_By>
  blockTimestamp?: InputMaybe<Order_By>
  entryFee?: InputMaybe<Order_By>
  isAtomWallet?: InputMaybe<Order_By>
  isTriple?: InputMaybe<Order_By>
  receiverTotalSharesInVault?: InputMaybe<Order_By>
  senderAssetsAfterTotalFees?: InputMaybe<Order_By>
  sharesForReceiver?: InputMaybe<Order_By>
  vaultId?: InputMaybe<Order_By>
}

/** Boolean expression to filter rows from the table "Deposit". All fields are combined with a logical 'AND'. */
export type Deposits_Bool_Exp = {
  _and?: InputMaybe<Array<Deposits_Bool_Exp>>
  _not?: InputMaybe<Deposits_Bool_Exp>
  _or?: InputMaybe<Array<Deposits_Bool_Exp>>
  blockNumber?: InputMaybe<Numeric_Comparison_Exp>
  blockTimestamp?: InputMaybe<Numeric_Comparison_Exp>
  entryFee?: InputMaybe<Numeric_Comparison_Exp>
  id?: InputMaybe<String_Comparison_Exp>
  isAtomWallet?: InputMaybe<Int_Comparison_Exp>
  isTriple?: InputMaybe<Int_Comparison_Exp>
  receiver?: InputMaybe<Accounts_Bool_Exp>
  receiverId?: InputMaybe<Bytea_Comparison_Exp>
  receiverTotalSharesInVault?: InputMaybe<Numeric_Comparison_Exp>
  sender?: InputMaybe<Accounts_Bool_Exp>
  senderAssetsAfterTotalFees?: InputMaybe<Numeric_Comparison_Exp>
  senderId?: InputMaybe<Bytea_Comparison_Exp>
  sharesForReceiver?: InputMaybe<Numeric_Comparison_Exp>
  transactionHash?: InputMaybe<Bytea_Comparison_Exp>
  vault?: InputMaybe<Vaults_Bool_Exp>
  vaultId?: InputMaybe<Numeric_Comparison_Exp>
}

/** unique or primary key constraints on table "Deposit" */
export enum Deposits_Constraint {
  /** unique or primary key constraint on columns "id" */
  DepositPkey = 'Deposit_pkey',
}

/** input type for incrementing numeric columns in table "Deposit" */
export type Deposits_Inc_Input = {
  blockNumber?: InputMaybe<Scalars['numeric']['input']>
  blockTimestamp?: InputMaybe<Scalars['numeric']['input']>
  entryFee?: InputMaybe<Scalars['numeric']['input']>
  isAtomWallet?: InputMaybe<Scalars['Int']['input']>
  isTriple?: InputMaybe<Scalars['Int']['input']>
  receiverTotalSharesInVault?: InputMaybe<Scalars['numeric']['input']>
  senderAssetsAfterTotalFees?: InputMaybe<Scalars['numeric']['input']>
  sharesForReceiver?: InputMaybe<Scalars['numeric']['input']>
  vaultId?: InputMaybe<Scalars['numeric']['input']>
}

/** input type for inserting data into table "Deposit" */
export type Deposits_Insert_Input = {
  blockNumber?: InputMaybe<Scalars['numeric']['input']>
  blockTimestamp?: InputMaybe<Scalars['numeric']['input']>
  entryFee?: InputMaybe<Scalars['numeric']['input']>
  id?: InputMaybe<Scalars['String']['input']>
  isAtomWallet?: InputMaybe<Scalars['Int']['input']>
  isTriple?: InputMaybe<Scalars['Int']['input']>
  receiver?: InputMaybe<Accounts_Obj_Rel_Insert_Input>
  receiverId?: InputMaybe<Scalars['bytea']['input']>
  receiverTotalSharesInVault?: InputMaybe<Scalars['numeric']['input']>
  sender?: InputMaybe<Accounts_Obj_Rel_Insert_Input>
  senderAssetsAfterTotalFees?: InputMaybe<Scalars['numeric']['input']>
  senderId?: InputMaybe<Scalars['bytea']['input']>
  sharesForReceiver?: InputMaybe<Scalars['numeric']['input']>
  transactionHash?: InputMaybe<Scalars['bytea']['input']>
  vault?: InputMaybe<Vaults_Obj_Rel_Insert_Input>
  vaultId?: InputMaybe<Scalars['numeric']['input']>
}

/** aggregate max on columns */
export type Deposits_Max_Fields = {
  __typename?: 'deposits_max_fields'
  blockNumber?: Maybe<Scalars['numeric']['output']>
  blockTimestamp?: Maybe<Scalars['numeric']['output']>
  entryFee?: Maybe<Scalars['numeric']['output']>
  id?: Maybe<Scalars['String']['output']>
  isAtomWallet?: Maybe<Scalars['Int']['output']>
  isTriple?: Maybe<Scalars['Int']['output']>
  receiverTotalSharesInVault?: Maybe<Scalars['numeric']['output']>
  senderAssetsAfterTotalFees?: Maybe<Scalars['numeric']['output']>
  sharesForReceiver?: Maybe<Scalars['numeric']['output']>
  vaultId?: Maybe<Scalars['numeric']['output']>
}

/** order by max() on columns of table "Deposit" */
export type Deposits_Max_Order_By = {
  blockNumber?: InputMaybe<Order_By>
  blockTimestamp?: InputMaybe<Order_By>
  entryFee?: InputMaybe<Order_By>
  id?: InputMaybe<Order_By>
  isAtomWallet?: InputMaybe<Order_By>
  isTriple?: InputMaybe<Order_By>
  receiverTotalSharesInVault?: InputMaybe<Order_By>
  senderAssetsAfterTotalFees?: InputMaybe<Order_By>
  sharesForReceiver?: InputMaybe<Order_By>
  vaultId?: InputMaybe<Order_By>
}

/** aggregate min on columns */
export type Deposits_Min_Fields = {
  __typename?: 'deposits_min_fields'
  blockNumber?: Maybe<Scalars['numeric']['output']>
  blockTimestamp?: Maybe<Scalars['numeric']['output']>
  entryFee?: Maybe<Scalars['numeric']['output']>
  id?: Maybe<Scalars['String']['output']>
  isAtomWallet?: Maybe<Scalars['Int']['output']>
  isTriple?: Maybe<Scalars['Int']['output']>
  receiverTotalSharesInVault?: Maybe<Scalars['numeric']['output']>
  senderAssetsAfterTotalFees?: Maybe<Scalars['numeric']['output']>
  sharesForReceiver?: Maybe<Scalars['numeric']['output']>
  vaultId?: Maybe<Scalars['numeric']['output']>
}

/** order by min() on columns of table "Deposit" */
export type Deposits_Min_Order_By = {
  blockNumber?: InputMaybe<Order_By>
  blockTimestamp?: InputMaybe<Order_By>
  entryFee?: InputMaybe<Order_By>
  id?: InputMaybe<Order_By>
  isAtomWallet?: InputMaybe<Order_By>
  isTriple?: InputMaybe<Order_By>
  receiverTotalSharesInVault?: InputMaybe<Order_By>
  senderAssetsAfterTotalFees?: InputMaybe<Order_By>
  sharesForReceiver?: InputMaybe<Order_By>
  vaultId?: InputMaybe<Order_By>
}

/** response of any mutation on the table "Deposit" */
export type Deposits_Mutation_Response = {
  __typename?: 'deposits_mutation_response'
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output']
  /** data from the rows affected by the mutation */
  returning: Array<Deposits>
}

/** input type for inserting object relation for remote table "Deposit" */
export type Deposits_Obj_Rel_Insert_Input = {
  data: Deposits_Insert_Input
  /** upsert condition */
  on_conflict?: InputMaybe<Deposits_On_Conflict>
}

/** on_conflict condition type for table "Deposit" */
export type Deposits_On_Conflict = {
  constraint: Deposits_Constraint
  update_columns?: Array<Deposits_Update_Column>
  where?: InputMaybe<Deposits_Bool_Exp>
}

/** Ordering options when selecting data from "Deposit". */
export type Deposits_Order_By = {
  blockNumber?: InputMaybe<Order_By>
  blockTimestamp?: InputMaybe<Order_By>
  entryFee?: InputMaybe<Order_By>
  id?: InputMaybe<Order_By>
  isAtomWallet?: InputMaybe<Order_By>
  isTriple?: InputMaybe<Order_By>
  receiver?: InputMaybe<Accounts_Order_By>
  receiverId?: InputMaybe<Order_By>
  receiverTotalSharesInVault?: InputMaybe<Order_By>
  sender?: InputMaybe<Accounts_Order_By>
  senderAssetsAfterTotalFees?: InputMaybe<Order_By>
  senderId?: InputMaybe<Order_By>
  sharesForReceiver?: InputMaybe<Order_By>
  transactionHash?: InputMaybe<Order_By>
  vault?: InputMaybe<Vaults_Order_By>
  vaultId?: InputMaybe<Order_By>
}

/** primary key columns input for table: Deposit */
export type Deposits_Pk_Columns_Input = {
  id: Scalars['String']['input']
}

/** select columns of table "Deposit" */
export enum Deposits_Select_Column {
  /** column name */
  BlockNumber = 'blockNumber',
  /** column name */
  BlockTimestamp = 'blockTimestamp',
  /** column name */
  EntryFee = 'entryFee',
  /** column name */
  Id = 'id',
  /** column name */
  IsAtomWallet = 'isAtomWallet',
  /** column name */
  IsTriple = 'isTriple',
  /** column name */
  ReceiverId = 'receiverId',
  /** column name */
  ReceiverTotalSharesInVault = 'receiverTotalSharesInVault',
  /** column name */
  SenderAssetsAfterTotalFees = 'senderAssetsAfterTotalFees',
  /** column name */
  SenderId = 'senderId',
  /** column name */
  SharesForReceiver = 'sharesForReceiver',
  /** column name */
  TransactionHash = 'transactionHash',
  /** column name */
  VaultId = 'vaultId',
}

/** input type for updating data in table "Deposit" */
export type Deposits_Set_Input = {
  blockNumber?: InputMaybe<Scalars['numeric']['input']>
  blockTimestamp?: InputMaybe<Scalars['numeric']['input']>
  entryFee?: InputMaybe<Scalars['numeric']['input']>
  id?: InputMaybe<Scalars['String']['input']>
  isAtomWallet?: InputMaybe<Scalars['Int']['input']>
  isTriple?: InputMaybe<Scalars['Int']['input']>
  receiverId?: InputMaybe<Scalars['bytea']['input']>
  receiverTotalSharesInVault?: InputMaybe<Scalars['numeric']['input']>
  senderAssetsAfterTotalFees?: InputMaybe<Scalars['numeric']['input']>
  senderId?: InputMaybe<Scalars['bytea']['input']>
  sharesForReceiver?: InputMaybe<Scalars['numeric']['input']>
  transactionHash?: InputMaybe<Scalars['bytea']['input']>
  vaultId?: InputMaybe<Scalars['numeric']['input']>
}

/** aggregate stddev on columns */
export type Deposits_Stddev_Fields = {
  __typename?: 'deposits_stddev_fields'
  blockNumber?: Maybe<Scalars['Float']['output']>
  blockTimestamp?: Maybe<Scalars['Float']['output']>
  entryFee?: Maybe<Scalars['Float']['output']>
  isAtomWallet?: Maybe<Scalars['Float']['output']>
  isTriple?: Maybe<Scalars['Float']['output']>
  receiverTotalSharesInVault?: Maybe<Scalars['Float']['output']>
  senderAssetsAfterTotalFees?: Maybe<Scalars['Float']['output']>
  sharesForReceiver?: Maybe<Scalars['Float']['output']>
  vaultId?: Maybe<Scalars['Float']['output']>
}

/** order by stddev() on columns of table "Deposit" */
export type Deposits_Stddev_Order_By = {
  blockNumber?: InputMaybe<Order_By>
  blockTimestamp?: InputMaybe<Order_By>
  entryFee?: InputMaybe<Order_By>
  isAtomWallet?: InputMaybe<Order_By>
  isTriple?: InputMaybe<Order_By>
  receiverTotalSharesInVault?: InputMaybe<Order_By>
  senderAssetsAfterTotalFees?: InputMaybe<Order_By>
  sharesForReceiver?: InputMaybe<Order_By>
  vaultId?: InputMaybe<Order_By>
}

/** aggregate stddev_pop on columns */
export type Deposits_Stddev_Pop_Fields = {
  __typename?: 'deposits_stddev_pop_fields'
  blockNumber?: Maybe<Scalars['Float']['output']>
  blockTimestamp?: Maybe<Scalars['Float']['output']>
  entryFee?: Maybe<Scalars['Float']['output']>
  isAtomWallet?: Maybe<Scalars['Float']['output']>
  isTriple?: Maybe<Scalars['Float']['output']>
  receiverTotalSharesInVault?: Maybe<Scalars['Float']['output']>
  senderAssetsAfterTotalFees?: Maybe<Scalars['Float']['output']>
  sharesForReceiver?: Maybe<Scalars['Float']['output']>
  vaultId?: Maybe<Scalars['Float']['output']>
}

/** order by stddev_pop() on columns of table "Deposit" */
export type Deposits_Stddev_Pop_Order_By = {
  blockNumber?: InputMaybe<Order_By>
  blockTimestamp?: InputMaybe<Order_By>
  entryFee?: InputMaybe<Order_By>
  isAtomWallet?: InputMaybe<Order_By>
  isTriple?: InputMaybe<Order_By>
  receiverTotalSharesInVault?: InputMaybe<Order_By>
  senderAssetsAfterTotalFees?: InputMaybe<Order_By>
  sharesForReceiver?: InputMaybe<Order_By>
  vaultId?: InputMaybe<Order_By>
}

/** aggregate stddev_samp on columns */
export type Deposits_Stddev_Samp_Fields = {
  __typename?: 'deposits_stddev_samp_fields'
  blockNumber?: Maybe<Scalars['Float']['output']>
  blockTimestamp?: Maybe<Scalars['Float']['output']>
  entryFee?: Maybe<Scalars['Float']['output']>
  isAtomWallet?: Maybe<Scalars['Float']['output']>
  isTriple?: Maybe<Scalars['Float']['output']>
  receiverTotalSharesInVault?: Maybe<Scalars['Float']['output']>
  senderAssetsAfterTotalFees?: Maybe<Scalars['Float']['output']>
  sharesForReceiver?: Maybe<Scalars['Float']['output']>
  vaultId?: Maybe<Scalars['Float']['output']>
}

/** order by stddev_samp() on columns of table "Deposit" */
export type Deposits_Stddev_Samp_Order_By = {
  blockNumber?: InputMaybe<Order_By>
  blockTimestamp?: InputMaybe<Order_By>
  entryFee?: InputMaybe<Order_By>
  isAtomWallet?: InputMaybe<Order_By>
  isTriple?: InputMaybe<Order_By>
  receiverTotalSharesInVault?: InputMaybe<Order_By>
  senderAssetsAfterTotalFees?: InputMaybe<Order_By>
  sharesForReceiver?: InputMaybe<Order_By>
  vaultId?: InputMaybe<Order_By>
}

/** Streaming cursor of the table "deposits" */
export type Deposits_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Deposits_Stream_Cursor_Value_Input
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>
}

/** Initial value of the column from where the streaming should start */
export type Deposits_Stream_Cursor_Value_Input = {
  blockNumber?: InputMaybe<Scalars['numeric']['input']>
  blockTimestamp?: InputMaybe<Scalars['numeric']['input']>
  entryFee?: InputMaybe<Scalars['numeric']['input']>
  id?: InputMaybe<Scalars['String']['input']>
  isAtomWallet?: InputMaybe<Scalars['Int']['input']>
  isTriple?: InputMaybe<Scalars['Int']['input']>
  receiverId?: InputMaybe<Scalars['bytea']['input']>
  receiverTotalSharesInVault?: InputMaybe<Scalars['numeric']['input']>
  senderAssetsAfterTotalFees?: InputMaybe<Scalars['numeric']['input']>
  senderId?: InputMaybe<Scalars['bytea']['input']>
  sharesForReceiver?: InputMaybe<Scalars['numeric']['input']>
  transactionHash?: InputMaybe<Scalars['bytea']['input']>
  vaultId?: InputMaybe<Scalars['numeric']['input']>
}

/** aggregate sum on columns */
export type Deposits_Sum_Fields = {
  __typename?: 'deposits_sum_fields'
  blockNumber?: Maybe<Scalars['numeric']['output']>
  blockTimestamp?: Maybe<Scalars['numeric']['output']>
  entryFee?: Maybe<Scalars['numeric']['output']>
  isAtomWallet?: Maybe<Scalars['Int']['output']>
  isTriple?: Maybe<Scalars['Int']['output']>
  receiverTotalSharesInVault?: Maybe<Scalars['numeric']['output']>
  senderAssetsAfterTotalFees?: Maybe<Scalars['numeric']['output']>
  sharesForReceiver?: Maybe<Scalars['numeric']['output']>
  vaultId?: Maybe<Scalars['numeric']['output']>
}

/** order by sum() on columns of table "Deposit" */
export type Deposits_Sum_Order_By = {
  blockNumber?: InputMaybe<Order_By>
  blockTimestamp?: InputMaybe<Order_By>
  entryFee?: InputMaybe<Order_By>
  isAtomWallet?: InputMaybe<Order_By>
  isTriple?: InputMaybe<Order_By>
  receiverTotalSharesInVault?: InputMaybe<Order_By>
  senderAssetsAfterTotalFees?: InputMaybe<Order_By>
  sharesForReceiver?: InputMaybe<Order_By>
  vaultId?: InputMaybe<Order_By>
}

/** update columns of table "Deposit" */
export enum Deposits_Update_Column {
  /** column name */
  BlockNumber = 'blockNumber',
  /** column name */
  BlockTimestamp = 'blockTimestamp',
  /** column name */
  EntryFee = 'entryFee',
  /** column name */
  Id = 'id',
  /** column name */
  IsAtomWallet = 'isAtomWallet',
  /** column name */
  IsTriple = 'isTriple',
  /** column name */
  ReceiverId = 'receiverId',
  /** column name */
  ReceiverTotalSharesInVault = 'receiverTotalSharesInVault',
  /** column name */
  SenderAssetsAfterTotalFees = 'senderAssetsAfterTotalFees',
  /** column name */
  SenderId = 'senderId',
  /** column name */
  SharesForReceiver = 'sharesForReceiver',
  /** column name */
  TransactionHash = 'transactionHash',
  /** column name */
  VaultId = 'vaultId',
}

export type Deposits_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Deposits_Inc_Input>
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Deposits_Set_Input>
  /** filter the rows which have to be updated */
  where: Deposits_Bool_Exp
}

/** aggregate var_pop on columns */
export type Deposits_Var_Pop_Fields = {
  __typename?: 'deposits_var_pop_fields'
  blockNumber?: Maybe<Scalars['Float']['output']>
  blockTimestamp?: Maybe<Scalars['Float']['output']>
  entryFee?: Maybe<Scalars['Float']['output']>
  isAtomWallet?: Maybe<Scalars['Float']['output']>
  isTriple?: Maybe<Scalars['Float']['output']>
  receiverTotalSharesInVault?: Maybe<Scalars['Float']['output']>
  senderAssetsAfterTotalFees?: Maybe<Scalars['Float']['output']>
  sharesForReceiver?: Maybe<Scalars['Float']['output']>
  vaultId?: Maybe<Scalars['Float']['output']>
}

/** order by var_pop() on columns of table "Deposit" */
export type Deposits_Var_Pop_Order_By = {
  blockNumber?: InputMaybe<Order_By>
  blockTimestamp?: InputMaybe<Order_By>
  entryFee?: InputMaybe<Order_By>
  isAtomWallet?: InputMaybe<Order_By>
  isTriple?: InputMaybe<Order_By>
  receiverTotalSharesInVault?: InputMaybe<Order_By>
  senderAssetsAfterTotalFees?: InputMaybe<Order_By>
  sharesForReceiver?: InputMaybe<Order_By>
  vaultId?: InputMaybe<Order_By>
}

/** aggregate var_samp on columns */
export type Deposits_Var_Samp_Fields = {
  __typename?: 'deposits_var_samp_fields'
  blockNumber?: Maybe<Scalars['Float']['output']>
  blockTimestamp?: Maybe<Scalars['Float']['output']>
  entryFee?: Maybe<Scalars['Float']['output']>
  isAtomWallet?: Maybe<Scalars['Float']['output']>
  isTriple?: Maybe<Scalars['Float']['output']>
  receiverTotalSharesInVault?: Maybe<Scalars['Float']['output']>
  senderAssetsAfterTotalFees?: Maybe<Scalars['Float']['output']>
  sharesForReceiver?: Maybe<Scalars['Float']['output']>
  vaultId?: Maybe<Scalars['Float']['output']>
}

/** order by var_samp() on columns of table "Deposit" */
export type Deposits_Var_Samp_Order_By = {
  blockNumber?: InputMaybe<Order_By>
  blockTimestamp?: InputMaybe<Order_By>
  entryFee?: InputMaybe<Order_By>
  isAtomWallet?: InputMaybe<Order_By>
  isTriple?: InputMaybe<Order_By>
  receiverTotalSharesInVault?: InputMaybe<Order_By>
  senderAssetsAfterTotalFees?: InputMaybe<Order_By>
  sharesForReceiver?: InputMaybe<Order_By>
  vaultId?: InputMaybe<Order_By>
}

/** aggregate variance on columns */
export type Deposits_Variance_Fields = {
  __typename?: 'deposits_variance_fields'
  blockNumber?: Maybe<Scalars['Float']['output']>
  blockTimestamp?: Maybe<Scalars['Float']['output']>
  entryFee?: Maybe<Scalars['Float']['output']>
  isAtomWallet?: Maybe<Scalars['Float']['output']>
  isTriple?: Maybe<Scalars['Float']['output']>
  receiverTotalSharesInVault?: Maybe<Scalars['Float']['output']>
  senderAssetsAfterTotalFees?: Maybe<Scalars['Float']['output']>
  sharesForReceiver?: Maybe<Scalars['Float']['output']>
  vaultId?: Maybe<Scalars['Float']['output']>
}

/** order by variance() on columns of table "Deposit" */
export type Deposits_Variance_Order_By = {
  blockNumber?: InputMaybe<Order_By>
  blockTimestamp?: InputMaybe<Order_By>
  entryFee?: InputMaybe<Order_By>
  isAtomWallet?: InputMaybe<Order_By>
  isTriple?: InputMaybe<Order_By>
  receiverTotalSharesInVault?: InputMaybe<Order_By>
  senderAssetsAfterTotalFees?: InputMaybe<Order_By>
  sharesForReceiver?: InputMaybe<Order_By>
  vaultId?: InputMaybe<Order_By>
}

/** columns and relationships of "Event" */
export type Events = {
  __typename?: 'events'
  /** An object relationship */
  atom?: Maybe<Atoms>
  atomId?: Maybe<Scalars['numeric']['output']>
  blockHash: Scalars['bytea']['output']
  blockNumber: Scalars['numeric']['output']
  blockTimestamp: Scalars['numeric']['output']
  /** An object relationship */
  deposit?: Maybe<Deposits>
  depositId?: Maybe<Scalars['String']['output']>
  /** An object relationship */
  feeTransfer?: Maybe<FeeTranfers>
  feeTransferId?: Maybe<Scalars['String']['output']>
  id: Scalars['String']['output']
  /** An object relationship */
  redemption?: Maybe<Redemptions>
  redemptionId?: Maybe<Scalars['String']['output']>
  transactionHash: Scalars['bytea']['output']
  /** An object relationship */
  triple?: Maybe<Triples>
  tripleId?: Maybe<Scalars['numeric']['output']>
  type: Scalars['String']['output']
}

/** aggregated selection of "Event" */
export type Events_Aggregate = {
  __typename?: 'events_aggregate'
  aggregate?: Maybe<Events_Aggregate_Fields>
  nodes: Array<Events>
}

/** aggregate fields of "Event" */
export type Events_Aggregate_Fields = {
  __typename?: 'events_aggregate_fields'
  avg?: Maybe<Events_Avg_Fields>
  count: Scalars['Int']['output']
  max?: Maybe<Events_Max_Fields>
  min?: Maybe<Events_Min_Fields>
  stddev?: Maybe<Events_Stddev_Fields>
  stddev_pop?: Maybe<Events_Stddev_Pop_Fields>
  stddev_samp?: Maybe<Events_Stddev_Samp_Fields>
  sum?: Maybe<Events_Sum_Fields>
  var_pop?: Maybe<Events_Var_Pop_Fields>
  var_samp?: Maybe<Events_Var_Samp_Fields>
  variance?: Maybe<Events_Variance_Fields>
}

/** aggregate fields of "Event" */
export type Events_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Events_Select_Column>>
  distinct?: InputMaybe<Scalars['Boolean']['input']>
}

/** aggregate avg on columns */
export type Events_Avg_Fields = {
  __typename?: 'events_avg_fields'
  atomId?: Maybe<Scalars['Float']['output']>
  blockNumber?: Maybe<Scalars['Float']['output']>
  blockTimestamp?: Maybe<Scalars['Float']['output']>
  tripleId?: Maybe<Scalars['Float']['output']>
}

/** Boolean expression to filter rows from the table "Event". All fields are combined with a logical 'AND'. */
export type Events_Bool_Exp = {
  _and?: InputMaybe<Array<Events_Bool_Exp>>
  _not?: InputMaybe<Events_Bool_Exp>
  _or?: InputMaybe<Array<Events_Bool_Exp>>
  atom?: InputMaybe<Atoms_Bool_Exp>
  atomId?: InputMaybe<Numeric_Comparison_Exp>
  blockHash?: InputMaybe<Bytea_Comparison_Exp>
  blockNumber?: InputMaybe<Numeric_Comparison_Exp>
  blockTimestamp?: InputMaybe<Numeric_Comparison_Exp>
  deposit?: InputMaybe<Deposits_Bool_Exp>
  depositId?: InputMaybe<String_Comparison_Exp>
  feeTransfer?: InputMaybe<FeeTranfers_Bool_Exp>
  feeTransferId?: InputMaybe<String_Comparison_Exp>
  id?: InputMaybe<String_Comparison_Exp>
  redemption?: InputMaybe<Redemptions_Bool_Exp>
  redemptionId?: InputMaybe<String_Comparison_Exp>
  transactionHash?: InputMaybe<Bytea_Comparison_Exp>
  triple?: InputMaybe<Triples_Bool_Exp>
  tripleId?: InputMaybe<Numeric_Comparison_Exp>
  type?: InputMaybe<String_Comparison_Exp>
}

/** unique or primary key constraints on table "Event" */
export enum Events_Constraint {
  /** unique or primary key constraint on columns "id" */
  EventPkey = 'Event_pkey',
}

/** input type for incrementing numeric columns in table "Event" */
export type Events_Inc_Input = {
  atomId?: InputMaybe<Scalars['numeric']['input']>
  blockNumber?: InputMaybe<Scalars['numeric']['input']>
  blockTimestamp?: InputMaybe<Scalars['numeric']['input']>
  tripleId?: InputMaybe<Scalars['numeric']['input']>
}

/** input type for inserting data into table "Event" */
export type Events_Insert_Input = {
  atom?: InputMaybe<Atoms_Obj_Rel_Insert_Input>
  atomId?: InputMaybe<Scalars['numeric']['input']>
  blockHash?: InputMaybe<Scalars['bytea']['input']>
  blockNumber?: InputMaybe<Scalars['numeric']['input']>
  blockTimestamp?: InputMaybe<Scalars['numeric']['input']>
  deposit?: InputMaybe<Deposits_Obj_Rel_Insert_Input>
  depositId?: InputMaybe<Scalars['String']['input']>
  feeTransfer?: InputMaybe<FeeTranfers_Obj_Rel_Insert_Input>
  feeTransferId?: InputMaybe<Scalars['String']['input']>
  id?: InputMaybe<Scalars['String']['input']>
  redemption?: InputMaybe<Redemptions_Obj_Rel_Insert_Input>
  redemptionId?: InputMaybe<Scalars['String']['input']>
  transactionHash?: InputMaybe<Scalars['bytea']['input']>
  triple?: InputMaybe<Triples_Obj_Rel_Insert_Input>
  tripleId?: InputMaybe<Scalars['numeric']['input']>
  type?: InputMaybe<Scalars['String']['input']>
}

/** aggregate max on columns */
export type Events_Max_Fields = {
  __typename?: 'events_max_fields'
  atomId?: Maybe<Scalars['numeric']['output']>
  blockNumber?: Maybe<Scalars['numeric']['output']>
  blockTimestamp?: Maybe<Scalars['numeric']['output']>
  depositId?: Maybe<Scalars['String']['output']>
  feeTransferId?: Maybe<Scalars['String']['output']>
  id?: Maybe<Scalars['String']['output']>
  redemptionId?: Maybe<Scalars['String']['output']>
  tripleId?: Maybe<Scalars['numeric']['output']>
  type?: Maybe<Scalars['String']['output']>
}

/** aggregate min on columns */
export type Events_Min_Fields = {
  __typename?: 'events_min_fields'
  atomId?: Maybe<Scalars['numeric']['output']>
  blockNumber?: Maybe<Scalars['numeric']['output']>
  blockTimestamp?: Maybe<Scalars['numeric']['output']>
  depositId?: Maybe<Scalars['String']['output']>
  feeTransferId?: Maybe<Scalars['String']['output']>
  id?: Maybe<Scalars['String']['output']>
  redemptionId?: Maybe<Scalars['String']['output']>
  tripleId?: Maybe<Scalars['numeric']['output']>
  type?: Maybe<Scalars['String']['output']>
}

/** response of any mutation on the table "Event" */
export type Events_Mutation_Response = {
  __typename?: 'events_mutation_response'
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output']
  /** data from the rows affected by the mutation */
  returning: Array<Events>
}

/** on_conflict condition type for table "Event" */
export type Events_On_Conflict = {
  constraint: Events_Constraint
  update_columns?: Array<Events_Update_Column>
  where?: InputMaybe<Events_Bool_Exp>
}

/** Ordering options when selecting data from "Event". */
export type Events_Order_By = {
  atom?: InputMaybe<Atoms_Order_By>
  atomId?: InputMaybe<Order_By>
  blockHash?: InputMaybe<Order_By>
  blockNumber?: InputMaybe<Order_By>
  blockTimestamp?: InputMaybe<Order_By>
  deposit?: InputMaybe<Deposits_Order_By>
  depositId?: InputMaybe<Order_By>
  feeTransfer?: InputMaybe<FeeTranfers_Order_By>
  feeTransferId?: InputMaybe<Order_By>
  id?: InputMaybe<Order_By>
  redemption?: InputMaybe<Redemptions_Order_By>
  redemptionId?: InputMaybe<Order_By>
  transactionHash?: InputMaybe<Order_By>
  triple?: InputMaybe<Triples_Order_By>
  tripleId?: InputMaybe<Order_By>
  type?: InputMaybe<Order_By>
}

/** primary key columns input for table: Event */
export type Events_Pk_Columns_Input = {
  id: Scalars['String']['input']
}

/** select columns of table "Event" */
export enum Events_Select_Column {
  /** column name */
  AtomId = 'atomId',
  /** column name */
  BlockHash = 'blockHash',
  /** column name */
  BlockNumber = 'blockNumber',
  /** column name */
  BlockTimestamp = 'blockTimestamp',
  /** column name */
  DepositId = 'depositId',
  /** column name */
  FeeTransferId = 'feeTransferId',
  /** column name */
  Id = 'id',
  /** column name */
  RedemptionId = 'redemptionId',
  /** column name */
  TransactionHash = 'transactionHash',
  /** column name */
  TripleId = 'tripleId',
  /** column name */
  Type = 'type',
}

/** input type for updating data in table "Event" */
export type Events_Set_Input = {
  atomId?: InputMaybe<Scalars['numeric']['input']>
  blockHash?: InputMaybe<Scalars['bytea']['input']>
  blockNumber?: InputMaybe<Scalars['numeric']['input']>
  blockTimestamp?: InputMaybe<Scalars['numeric']['input']>
  depositId?: InputMaybe<Scalars['String']['input']>
  feeTransferId?: InputMaybe<Scalars['String']['input']>
  id?: InputMaybe<Scalars['String']['input']>
  redemptionId?: InputMaybe<Scalars['String']['input']>
  transactionHash?: InputMaybe<Scalars['bytea']['input']>
  tripleId?: InputMaybe<Scalars['numeric']['input']>
  type?: InputMaybe<Scalars['String']['input']>
}

/** aggregate stddev on columns */
export type Events_Stddev_Fields = {
  __typename?: 'events_stddev_fields'
  atomId?: Maybe<Scalars['Float']['output']>
  blockNumber?: Maybe<Scalars['Float']['output']>
  blockTimestamp?: Maybe<Scalars['Float']['output']>
  tripleId?: Maybe<Scalars['Float']['output']>
}

/** aggregate stddev_pop on columns */
export type Events_Stddev_Pop_Fields = {
  __typename?: 'events_stddev_pop_fields'
  atomId?: Maybe<Scalars['Float']['output']>
  blockNumber?: Maybe<Scalars['Float']['output']>
  blockTimestamp?: Maybe<Scalars['Float']['output']>
  tripleId?: Maybe<Scalars['Float']['output']>
}

/** aggregate stddev_samp on columns */
export type Events_Stddev_Samp_Fields = {
  __typename?: 'events_stddev_samp_fields'
  atomId?: Maybe<Scalars['Float']['output']>
  blockNumber?: Maybe<Scalars['Float']['output']>
  blockTimestamp?: Maybe<Scalars['Float']['output']>
  tripleId?: Maybe<Scalars['Float']['output']>
}

/** Streaming cursor of the table "events" */
export type Events_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Events_Stream_Cursor_Value_Input
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>
}

/** Initial value of the column from where the streaming should start */
export type Events_Stream_Cursor_Value_Input = {
  atomId?: InputMaybe<Scalars['numeric']['input']>
  blockHash?: InputMaybe<Scalars['bytea']['input']>
  blockNumber?: InputMaybe<Scalars['numeric']['input']>
  blockTimestamp?: InputMaybe<Scalars['numeric']['input']>
  depositId?: InputMaybe<Scalars['String']['input']>
  feeTransferId?: InputMaybe<Scalars['String']['input']>
  id?: InputMaybe<Scalars['String']['input']>
  redemptionId?: InputMaybe<Scalars['String']['input']>
  transactionHash?: InputMaybe<Scalars['bytea']['input']>
  tripleId?: InputMaybe<Scalars['numeric']['input']>
  type?: InputMaybe<Scalars['String']['input']>
}

/** aggregate sum on columns */
export type Events_Sum_Fields = {
  __typename?: 'events_sum_fields'
  atomId?: Maybe<Scalars['numeric']['output']>
  blockNumber?: Maybe<Scalars['numeric']['output']>
  blockTimestamp?: Maybe<Scalars['numeric']['output']>
  tripleId?: Maybe<Scalars['numeric']['output']>
}

/** update columns of table "Event" */
export enum Events_Update_Column {
  /** column name */
  AtomId = 'atomId',
  /** column name */
  BlockHash = 'blockHash',
  /** column name */
  BlockNumber = 'blockNumber',
  /** column name */
  BlockTimestamp = 'blockTimestamp',
  /** column name */
  DepositId = 'depositId',
  /** column name */
  FeeTransferId = 'feeTransferId',
  /** column name */
  Id = 'id',
  /** column name */
  RedemptionId = 'redemptionId',
  /** column name */
  TransactionHash = 'transactionHash',
  /** column name */
  TripleId = 'tripleId',
  /** column name */
  Type = 'type',
}

export type Events_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Events_Inc_Input>
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Events_Set_Input>
  /** filter the rows which have to be updated */
  where: Events_Bool_Exp
}

/** aggregate var_pop on columns */
export type Events_Var_Pop_Fields = {
  __typename?: 'events_var_pop_fields'
  atomId?: Maybe<Scalars['Float']['output']>
  blockNumber?: Maybe<Scalars['Float']['output']>
  blockTimestamp?: Maybe<Scalars['Float']['output']>
  tripleId?: Maybe<Scalars['Float']['output']>
}

/** aggregate var_samp on columns */
export type Events_Var_Samp_Fields = {
  __typename?: 'events_var_samp_fields'
  atomId?: Maybe<Scalars['Float']['output']>
  blockNumber?: Maybe<Scalars['Float']['output']>
  blockTimestamp?: Maybe<Scalars['Float']['output']>
  tripleId?: Maybe<Scalars['Float']['output']>
}

/** aggregate variance on columns */
export type Events_Variance_Fields = {
  __typename?: 'events_variance_fields'
  atomId?: Maybe<Scalars['Float']['output']>
  blockNumber?: Maybe<Scalars['Float']['output']>
  blockTimestamp?: Maybe<Scalars['Float']['output']>
  tripleId?: Maybe<Scalars['Float']['output']>
}

/** columns and relationships of "FeeTransfer" */
export type FeeTranfers = {
  __typename?: 'feeTranfers'
  amount: Scalars['numeric']['output']
  blockNumber: Scalars['numeric']['output']
  blockTimestamp: Scalars['numeric']['output']
  id: Scalars['String']['output']
  /** An object relationship */
  receiver?: Maybe<Accounts>
  receiverId: Scalars['bytea']['output']
  /** An object relationship */
  sender?: Maybe<Accounts>
  senderId: Scalars['bytea']['output']
  transactionHash: Scalars['bytea']['output']
}

/** aggregated selection of "FeeTransfer" */
export type FeeTranfers_Aggregate = {
  __typename?: 'feeTranfers_aggregate'
  aggregate?: Maybe<FeeTranfers_Aggregate_Fields>
  nodes: Array<FeeTranfers>
}

export type FeeTranfers_Aggregate_Bool_Exp = {
  count?: InputMaybe<FeeTranfers_Aggregate_Bool_Exp_Count>
}

export type FeeTranfers_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<FeeTranfers_Select_Column>>
  distinct?: InputMaybe<Scalars['Boolean']['input']>
  filter?: InputMaybe<FeeTranfers_Bool_Exp>
  predicate: Int_Comparison_Exp
}

/** aggregate fields of "FeeTransfer" */
export type FeeTranfers_Aggregate_Fields = {
  __typename?: 'feeTranfers_aggregate_fields'
  avg?: Maybe<FeeTranfers_Avg_Fields>
  count: Scalars['Int']['output']
  max?: Maybe<FeeTranfers_Max_Fields>
  min?: Maybe<FeeTranfers_Min_Fields>
  stddev?: Maybe<FeeTranfers_Stddev_Fields>
  stddev_pop?: Maybe<FeeTranfers_Stddev_Pop_Fields>
  stddev_samp?: Maybe<FeeTranfers_Stddev_Samp_Fields>
  sum?: Maybe<FeeTranfers_Sum_Fields>
  var_pop?: Maybe<FeeTranfers_Var_Pop_Fields>
  var_samp?: Maybe<FeeTranfers_Var_Samp_Fields>
  variance?: Maybe<FeeTranfers_Variance_Fields>
}

/** aggregate fields of "FeeTransfer" */
export type FeeTranfers_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<FeeTranfers_Select_Column>>
  distinct?: InputMaybe<Scalars['Boolean']['input']>
}

/** order by aggregate values of table "FeeTransfer" */
export type FeeTranfers_Aggregate_Order_By = {
  avg?: InputMaybe<FeeTranfers_Avg_Order_By>
  count?: InputMaybe<Order_By>
  max?: InputMaybe<FeeTranfers_Max_Order_By>
  min?: InputMaybe<FeeTranfers_Min_Order_By>
  stddev?: InputMaybe<FeeTranfers_Stddev_Order_By>
  stddev_pop?: InputMaybe<FeeTranfers_Stddev_Pop_Order_By>
  stddev_samp?: InputMaybe<FeeTranfers_Stddev_Samp_Order_By>
  sum?: InputMaybe<FeeTranfers_Sum_Order_By>
  var_pop?: InputMaybe<FeeTranfers_Var_Pop_Order_By>
  var_samp?: InputMaybe<FeeTranfers_Var_Samp_Order_By>
  variance?: InputMaybe<FeeTranfers_Variance_Order_By>
}

/** input type for inserting array relation for remote table "FeeTransfer" */
export type FeeTranfers_Arr_Rel_Insert_Input = {
  data: Array<FeeTranfers_Insert_Input>
  /** upsert condition */
  on_conflict?: InputMaybe<FeeTranfers_On_Conflict>
}

/** aggregate avg on columns */
export type FeeTranfers_Avg_Fields = {
  __typename?: 'feeTranfers_avg_fields'
  amount?: Maybe<Scalars['Float']['output']>
  blockNumber?: Maybe<Scalars['Float']['output']>
  blockTimestamp?: Maybe<Scalars['Float']['output']>
}

/** order by avg() on columns of table "FeeTransfer" */
export type FeeTranfers_Avg_Order_By = {
  amount?: InputMaybe<Order_By>
  blockNumber?: InputMaybe<Order_By>
  blockTimestamp?: InputMaybe<Order_By>
}

/** Boolean expression to filter rows from the table "FeeTransfer". All fields are combined with a logical 'AND'. */
export type FeeTranfers_Bool_Exp = {
  _and?: InputMaybe<Array<FeeTranfers_Bool_Exp>>
  _not?: InputMaybe<FeeTranfers_Bool_Exp>
  _or?: InputMaybe<Array<FeeTranfers_Bool_Exp>>
  amount?: InputMaybe<Numeric_Comparison_Exp>
  blockNumber?: InputMaybe<Numeric_Comparison_Exp>
  blockTimestamp?: InputMaybe<Numeric_Comparison_Exp>
  id?: InputMaybe<String_Comparison_Exp>
  receiver?: InputMaybe<Accounts_Bool_Exp>
  receiverId?: InputMaybe<Bytea_Comparison_Exp>
  sender?: InputMaybe<Accounts_Bool_Exp>
  senderId?: InputMaybe<Bytea_Comparison_Exp>
  transactionHash?: InputMaybe<Bytea_Comparison_Exp>
}

/** unique or primary key constraints on table "FeeTransfer" */
export enum FeeTranfers_Constraint {
  /** unique or primary key constraint on columns "id" */
  FeeTransferPkey = 'FeeTransfer_pkey',
}

/** input type for incrementing numeric columns in table "FeeTransfer" */
export type FeeTranfers_Inc_Input = {
  amount?: InputMaybe<Scalars['numeric']['input']>
  blockNumber?: InputMaybe<Scalars['numeric']['input']>
  blockTimestamp?: InputMaybe<Scalars['numeric']['input']>
}

/** input type for inserting data into table "FeeTransfer" */
export type FeeTranfers_Insert_Input = {
  amount?: InputMaybe<Scalars['numeric']['input']>
  blockNumber?: InputMaybe<Scalars['numeric']['input']>
  blockTimestamp?: InputMaybe<Scalars['numeric']['input']>
  id?: InputMaybe<Scalars['String']['input']>
  receiver?: InputMaybe<Accounts_Obj_Rel_Insert_Input>
  receiverId?: InputMaybe<Scalars['bytea']['input']>
  sender?: InputMaybe<Accounts_Obj_Rel_Insert_Input>
  senderId?: InputMaybe<Scalars['bytea']['input']>
  transactionHash?: InputMaybe<Scalars['bytea']['input']>
}

/** aggregate max on columns */
export type FeeTranfers_Max_Fields = {
  __typename?: 'feeTranfers_max_fields'
  amount?: Maybe<Scalars['numeric']['output']>
  blockNumber?: Maybe<Scalars['numeric']['output']>
  blockTimestamp?: Maybe<Scalars['numeric']['output']>
  id?: Maybe<Scalars['String']['output']>
}

/** order by max() on columns of table "FeeTransfer" */
export type FeeTranfers_Max_Order_By = {
  amount?: InputMaybe<Order_By>
  blockNumber?: InputMaybe<Order_By>
  blockTimestamp?: InputMaybe<Order_By>
  id?: InputMaybe<Order_By>
}

/** aggregate min on columns */
export type FeeTranfers_Min_Fields = {
  __typename?: 'feeTranfers_min_fields'
  amount?: Maybe<Scalars['numeric']['output']>
  blockNumber?: Maybe<Scalars['numeric']['output']>
  blockTimestamp?: Maybe<Scalars['numeric']['output']>
  id?: Maybe<Scalars['String']['output']>
}

/** order by min() on columns of table "FeeTransfer" */
export type FeeTranfers_Min_Order_By = {
  amount?: InputMaybe<Order_By>
  blockNumber?: InputMaybe<Order_By>
  blockTimestamp?: InputMaybe<Order_By>
  id?: InputMaybe<Order_By>
}

/** response of any mutation on the table "FeeTransfer" */
export type FeeTranfers_Mutation_Response = {
  __typename?: 'feeTranfers_mutation_response'
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output']
  /** data from the rows affected by the mutation */
  returning: Array<FeeTranfers>
}

/** input type for inserting object relation for remote table "FeeTransfer" */
export type FeeTranfers_Obj_Rel_Insert_Input = {
  data: FeeTranfers_Insert_Input
  /** upsert condition */
  on_conflict?: InputMaybe<FeeTranfers_On_Conflict>
}

/** on_conflict condition type for table "FeeTransfer" */
export type FeeTranfers_On_Conflict = {
  constraint: FeeTranfers_Constraint
  update_columns?: Array<FeeTranfers_Update_Column>
  where?: InputMaybe<FeeTranfers_Bool_Exp>
}

/** Ordering options when selecting data from "FeeTransfer". */
export type FeeTranfers_Order_By = {
  amount?: InputMaybe<Order_By>
  blockNumber?: InputMaybe<Order_By>
  blockTimestamp?: InputMaybe<Order_By>
  id?: InputMaybe<Order_By>
  receiver?: InputMaybe<Accounts_Order_By>
  receiverId?: InputMaybe<Order_By>
  sender?: InputMaybe<Accounts_Order_By>
  senderId?: InputMaybe<Order_By>
  transactionHash?: InputMaybe<Order_By>
}

/** primary key columns input for table: FeeTransfer */
export type FeeTranfers_Pk_Columns_Input = {
  id: Scalars['String']['input']
}

/** select columns of table "FeeTransfer" */
export enum FeeTranfers_Select_Column {
  /** column name */
  Amount = 'amount',
  /** column name */
  BlockNumber = 'blockNumber',
  /** column name */
  BlockTimestamp = 'blockTimestamp',
  /** column name */
  Id = 'id',
  /** column name */
  ReceiverId = 'receiverId',
  /** column name */
  SenderId = 'senderId',
  /** column name */
  TransactionHash = 'transactionHash',
}

/** input type for updating data in table "FeeTransfer" */
export type FeeTranfers_Set_Input = {
  amount?: InputMaybe<Scalars['numeric']['input']>
  blockNumber?: InputMaybe<Scalars['numeric']['input']>
  blockTimestamp?: InputMaybe<Scalars['numeric']['input']>
  id?: InputMaybe<Scalars['String']['input']>
  receiverId?: InputMaybe<Scalars['bytea']['input']>
  senderId?: InputMaybe<Scalars['bytea']['input']>
  transactionHash?: InputMaybe<Scalars['bytea']['input']>
}

/** aggregate stddev on columns */
export type FeeTranfers_Stddev_Fields = {
  __typename?: 'feeTranfers_stddev_fields'
  amount?: Maybe<Scalars['Float']['output']>
  blockNumber?: Maybe<Scalars['Float']['output']>
  blockTimestamp?: Maybe<Scalars['Float']['output']>
}

/** order by stddev() on columns of table "FeeTransfer" */
export type FeeTranfers_Stddev_Order_By = {
  amount?: InputMaybe<Order_By>
  blockNumber?: InputMaybe<Order_By>
  blockTimestamp?: InputMaybe<Order_By>
}

/** aggregate stddev_pop on columns */
export type FeeTranfers_Stddev_Pop_Fields = {
  __typename?: 'feeTranfers_stddev_pop_fields'
  amount?: Maybe<Scalars['Float']['output']>
  blockNumber?: Maybe<Scalars['Float']['output']>
  blockTimestamp?: Maybe<Scalars['Float']['output']>
}

/** order by stddev_pop() on columns of table "FeeTransfer" */
export type FeeTranfers_Stddev_Pop_Order_By = {
  amount?: InputMaybe<Order_By>
  blockNumber?: InputMaybe<Order_By>
  blockTimestamp?: InputMaybe<Order_By>
}

/** aggregate stddev_samp on columns */
export type FeeTranfers_Stddev_Samp_Fields = {
  __typename?: 'feeTranfers_stddev_samp_fields'
  amount?: Maybe<Scalars['Float']['output']>
  blockNumber?: Maybe<Scalars['Float']['output']>
  blockTimestamp?: Maybe<Scalars['Float']['output']>
}

/** order by stddev_samp() on columns of table "FeeTransfer" */
export type FeeTranfers_Stddev_Samp_Order_By = {
  amount?: InputMaybe<Order_By>
  blockNumber?: InputMaybe<Order_By>
  blockTimestamp?: InputMaybe<Order_By>
}

/** Streaming cursor of the table "feeTranfers" */
export type FeeTranfers_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: FeeTranfers_Stream_Cursor_Value_Input
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>
}

/** Initial value of the column from where the streaming should start */
export type FeeTranfers_Stream_Cursor_Value_Input = {
  amount?: InputMaybe<Scalars['numeric']['input']>
  blockNumber?: InputMaybe<Scalars['numeric']['input']>
  blockTimestamp?: InputMaybe<Scalars['numeric']['input']>
  id?: InputMaybe<Scalars['String']['input']>
  receiverId?: InputMaybe<Scalars['bytea']['input']>
  senderId?: InputMaybe<Scalars['bytea']['input']>
  transactionHash?: InputMaybe<Scalars['bytea']['input']>
}

/** aggregate sum on columns */
export type FeeTranfers_Sum_Fields = {
  __typename?: 'feeTranfers_sum_fields'
  amount?: Maybe<Scalars['numeric']['output']>
  blockNumber?: Maybe<Scalars['numeric']['output']>
  blockTimestamp?: Maybe<Scalars['numeric']['output']>
}

/** order by sum() on columns of table "FeeTransfer" */
export type FeeTranfers_Sum_Order_By = {
  amount?: InputMaybe<Order_By>
  blockNumber?: InputMaybe<Order_By>
  blockTimestamp?: InputMaybe<Order_By>
}

/** update columns of table "FeeTransfer" */
export enum FeeTranfers_Update_Column {
  /** column name */
  Amount = 'amount',
  /** column name */
  BlockNumber = 'blockNumber',
  /** column name */
  BlockTimestamp = 'blockTimestamp',
  /** column name */
  Id = 'id',
  /** column name */
  ReceiverId = 'receiverId',
  /** column name */
  SenderId = 'senderId',
  /** column name */
  TransactionHash = 'transactionHash',
}

export type FeeTranfers_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<FeeTranfers_Inc_Input>
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<FeeTranfers_Set_Input>
  /** filter the rows which have to be updated */
  where: FeeTranfers_Bool_Exp
}

/** aggregate var_pop on columns */
export type FeeTranfers_Var_Pop_Fields = {
  __typename?: 'feeTranfers_var_pop_fields'
  amount?: Maybe<Scalars['Float']['output']>
  blockNumber?: Maybe<Scalars['Float']['output']>
  blockTimestamp?: Maybe<Scalars['Float']['output']>
}

/** order by var_pop() on columns of table "FeeTransfer" */
export type FeeTranfers_Var_Pop_Order_By = {
  amount?: InputMaybe<Order_By>
  blockNumber?: InputMaybe<Order_By>
  blockTimestamp?: InputMaybe<Order_By>
}

/** aggregate var_samp on columns */
export type FeeTranfers_Var_Samp_Fields = {
  __typename?: 'feeTranfers_var_samp_fields'
  amount?: Maybe<Scalars['Float']['output']>
  blockNumber?: Maybe<Scalars['Float']['output']>
  blockTimestamp?: Maybe<Scalars['Float']['output']>
}

/** order by var_samp() on columns of table "FeeTransfer" */
export type FeeTranfers_Var_Samp_Order_By = {
  amount?: InputMaybe<Order_By>
  blockNumber?: InputMaybe<Order_By>
  blockTimestamp?: InputMaybe<Order_By>
}

/** aggregate variance on columns */
export type FeeTranfers_Variance_Fields = {
  __typename?: 'feeTranfers_variance_fields'
  amount?: Maybe<Scalars['Float']['output']>
  blockNumber?: Maybe<Scalars['Float']['output']>
  blockTimestamp?: Maybe<Scalars['Float']['output']>
}

/** order by variance() on columns of table "FeeTransfer" */
export type FeeTranfers_Variance_Order_By = {
  amount?: InputMaybe<Order_By>
  blockNumber?: InputMaybe<Order_By>
  blockTimestamp?: InputMaybe<Order_By>
}

/** Boolean expression to compare columns of type "float8". All fields are combined with logical 'AND'. */
export type Float8_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['float8']['input']>
  _gt?: InputMaybe<Scalars['float8']['input']>
  _gte?: InputMaybe<Scalars['float8']['input']>
  _in?: InputMaybe<Array<Scalars['float8']['input']>>
  _is_null?: InputMaybe<Scalars['Boolean']['input']>
  _lt?: InputMaybe<Scalars['float8']['input']>
  _lte?: InputMaybe<Scalars['float8']['input']>
  _neq?: InputMaybe<Scalars['float8']['input']>
  _nin?: InputMaybe<Array<Scalars['float8']['input']>>
}

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root'
  /** delete data from the table: "Account" */
  delete_accounts?: Maybe<Accounts_Mutation_Response>
  /** delete single row from the table: "Account" */
  delete_accounts_by_pk?: Maybe<Accounts>
  /** delete data from the table: "AtomValue" */
  delete_atomValues?: Maybe<AtomValues_Mutation_Response>
  /** delete single row from the table: "AtomValue" */
  delete_atomValues_by_pk?: Maybe<AtomValues>
  /** delete data from the table: "Atom" */
  delete_atoms?: Maybe<Atoms_Mutation_Response>
  /** delete single row from the table: "Atom" */
  delete_atoms_by_pk?: Maybe<Atoms>
  /** delete data from the table: "Book" */
  delete_books?: Maybe<Books_Mutation_Response>
  /** delete single row from the table: "Book" */
  delete_books_by_pk?: Maybe<Books>
  /** delete data from the table: "ChainlinkPrice" */
  delete_chainLinkPrices?: Maybe<ChainLinkPrices_Mutation_Response>
  /** delete single row from the table: "ChainlinkPrice" */
  delete_chainLinkPrices_by_pk?: Maybe<ChainLinkPrices>
  /** delete data from the table: "Deposit" */
  delete_deposits?: Maybe<Deposits_Mutation_Response>
  /** delete single row from the table: "Deposit" */
  delete_deposits_by_pk?: Maybe<Deposits>
  /** delete data from the table: "Event" */
  delete_events?: Maybe<Events_Mutation_Response>
  /** delete single row from the table: "Event" */
  delete_events_by_pk?: Maybe<Events>
  /** delete data from the table: "FeeTransfer" */
  delete_feeTranfers?: Maybe<FeeTranfers_Mutation_Response>
  /** delete single row from the table: "FeeTransfer" */
  delete_feeTranfers_by_pk?: Maybe<FeeTranfers>
  /** delete data from the table: "Organization" */
  delete_organizations?: Maybe<Organizations_Mutation_Response>
  /** delete single row from the table: "Organization" */
  delete_organizations_by_pk?: Maybe<Organizations>
  /** delete data from the table: "Person" */
  delete_persons?: Maybe<Persons_Mutation_Response>
  /** delete single row from the table: "Person" */
  delete_persons_by_pk?: Maybe<Persons>
  /** delete data from the table: "Position" */
  delete_positions?: Maybe<Positions_Mutation_Response>
  /** delete single row from the table: "Position" */
  delete_positions_by_pk?: Maybe<Positions>
  /** delete data from the table: "Redemption" */
  delete_redemptions?: Maybe<Redemptions_Mutation_Response>
  /** delete single row from the table: "Redemption" */
  delete_redemptions_by_pk?: Maybe<Redemptions>
  /** delete data from the table: "Signal" */
  delete_signals?: Maybe<Signals_Mutation_Response>
  /** delete single row from the table: "Signal" */
  delete_signals_by_pk?: Maybe<Signals>
  /** delete data from the table: "StatsHour" */
  delete_statHours?: Maybe<StatHours_Mutation_Response>
  /** delete single row from the table: "StatsHour" */
  delete_statHours_by_pk?: Maybe<StatHours>
  /** delete data from the table: "Stats" */
  delete_stats?: Maybe<Stats_Mutation_Response>
  /** delete single row from the table: "Stats" */
  delete_stats_by_pk?: Maybe<Stats>
  /** delete data from the table: "Thing" */
  delete_things?: Maybe<Things_Mutation_Response>
  /** delete single row from the table: "Thing" */
  delete_things_by_pk?: Maybe<Things>
  /** delete data from the table: "Triple" */
  delete_triples?: Maybe<Triples_Mutation_Response>
  /** delete single row from the table: "Triple" */
  delete_triples_by_pk?: Maybe<Triples>
  /** delete data from the table: "Vault" */
  delete_vaults?: Maybe<Vaults_Mutation_Response>
  /** delete single row from the table: "Vault" */
  delete_vaults_by_pk?: Maybe<Vaults>
  /** insert data into the table: "Account" */
  insert_accounts?: Maybe<Accounts_Mutation_Response>
  /** insert a single row into the table: "Account" */
  insert_accounts_one?: Maybe<Accounts>
  /** insert data into the table: "AtomValue" */
  insert_atomValues?: Maybe<AtomValues_Mutation_Response>
  /** insert a single row into the table: "AtomValue" */
  insert_atomValues_one?: Maybe<AtomValues>
  /** insert data into the table: "Atom" */
  insert_atoms?: Maybe<Atoms_Mutation_Response>
  /** insert a single row into the table: "Atom" */
  insert_atoms_one?: Maybe<Atoms>
  /** insert data into the table: "Book" */
  insert_books?: Maybe<Books_Mutation_Response>
  /** insert a single row into the table: "Book" */
  insert_books_one?: Maybe<Books>
  /** insert data into the table: "ChainlinkPrice" */
  insert_chainLinkPrices?: Maybe<ChainLinkPrices_Mutation_Response>
  /** insert a single row into the table: "ChainlinkPrice" */
  insert_chainLinkPrices_one?: Maybe<ChainLinkPrices>
  /** insert data into the table: "Deposit" */
  insert_deposits?: Maybe<Deposits_Mutation_Response>
  /** insert a single row into the table: "Deposit" */
  insert_deposits_one?: Maybe<Deposits>
  /** insert data into the table: "Event" */
  insert_events?: Maybe<Events_Mutation_Response>
  /** insert a single row into the table: "Event" */
  insert_events_one?: Maybe<Events>
  /** insert data into the table: "FeeTransfer" */
  insert_feeTranfers?: Maybe<FeeTranfers_Mutation_Response>
  /** insert a single row into the table: "FeeTransfer" */
  insert_feeTranfers_one?: Maybe<FeeTranfers>
  /** insert data into the table: "Organization" */
  insert_organizations?: Maybe<Organizations_Mutation_Response>
  /** insert a single row into the table: "Organization" */
  insert_organizations_one?: Maybe<Organizations>
  /** insert data into the table: "Person" */
  insert_persons?: Maybe<Persons_Mutation_Response>
  /** insert a single row into the table: "Person" */
  insert_persons_one?: Maybe<Persons>
  /** insert data into the table: "Position" */
  insert_positions?: Maybe<Positions_Mutation_Response>
  /** insert a single row into the table: "Position" */
  insert_positions_one?: Maybe<Positions>
  /** insert data into the table: "Redemption" */
  insert_redemptions?: Maybe<Redemptions_Mutation_Response>
  /** insert a single row into the table: "Redemption" */
  insert_redemptions_one?: Maybe<Redemptions>
  /** insert data into the table: "Signal" */
  insert_signals?: Maybe<Signals_Mutation_Response>
  /** insert a single row into the table: "Signal" */
  insert_signals_one?: Maybe<Signals>
  /** insert data into the table: "StatsHour" */
  insert_statHours?: Maybe<StatHours_Mutation_Response>
  /** insert a single row into the table: "StatsHour" */
  insert_statHours_one?: Maybe<StatHours>
  /** insert data into the table: "Stats" */
  insert_stats?: Maybe<Stats_Mutation_Response>
  /** insert a single row into the table: "Stats" */
  insert_stats_one?: Maybe<Stats>
  /** insert data into the table: "Thing" */
  insert_things?: Maybe<Things_Mutation_Response>
  /** insert a single row into the table: "Thing" */
  insert_things_one?: Maybe<Things>
  /** insert data into the table: "Triple" */
  insert_triples?: Maybe<Triples_Mutation_Response>
  /** insert a single row into the table: "Triple" */
  insert_triples_one?: Maybe<Triples>
  /** insert data into the table: "Vault" */
  insert_vaults?: Maybe<Vaults_Mutation_Response>
  /** insert a single row into the table: "Vault" */
  insert_vaults_one?: Maybe<Vaults>
  /** update data of the table: "Account" */
  update_accounts?: Maybe<Accounts_Mutation_Response>
  /** update single row of the table: "Account" */
  update_accounts_by_pk?: Maybe<Accounts>
  /** update multiples rows of table: "Account" */
  update_accounts_many?: Maybe<Array<Maybe<Accounts_Mutation_Response>>>
  /** update data of the table: "AtomValue" */
  update_atomValues?: Maybe<AtomValues_Mutation_Response>
  /** update single row of the table: "AtomValue" */
  update_atomValues_by_pk?: Maybe<AtomValues>
  /** update multiples rows of table: "AtomValue" */
  update_atomValues_many?: Maybe<Array<Maybe<AtomValues_Mutation_Response>>>
  /** update data of the table: "Atom" */
  update_atoms?: Maybe<Atoms_Mutation_Response>
  /** update single row of the table: "Atom" */
  update_atoms_by_pk?: Maybe<Atoms>
  /** update multiples rows of table: "Atom" */
  update_atoms_many?: Maybe<Array<Maybe<Atoms_Mutation_Response>>>
  /** update data of the table: "Book" */
  update_books?: Maybe<Books_Mutation_Response>
  /** update single row of the table: "Book" */
  update_books_by_pk?: Maybe<Books>
  /** update multiples rows of table: "Book" */
  update_books_many?: Maybe<Array<Maybe<Books_Mutation_Response>>>
  /** update data of the table: "ChainlinkPrice" */
  update_chainLinkPrices?: Maybe<ChainLinkPrices_Mutation_Response>
  /** update single row of the table: "ChainlinkPrice" */
  update_chainLinkPrices_by_pk?: Maybe<ChainLinkPrices>
  /** update multiples rows of table: "ChainlinkPrice" */
  update_chainLinkPrices_many?: Maybe<
    Array<Maybe<ChainLinkPrices_Mutation_Response>>
  >
  /** update data of the table: "Deposit" */
  update_deposits?: Maybe<Deposits_Mutation_Response>
  /** update single row of the table: "Deposit" */
  update_deposits_by_pk?: Maybe<Deposits>
  /** update multiples rows of table: "Deposit" */
  update_deposits_many?: Maybe<Array<Maybe<Deposits_Mutation_Response>>>
  /** update data of the table: "Event" */
  update_events?: Maybe<Events_Mutation_Response>
  /** update single row of the table: "Event" */
  update_events_by_pk?: Maybe<Events>
  /** update multiples rows of table: "Event" */
  update_events_many?: Maybe<Array<Maybe<Events_Mutation_Response>>>
  /** update data of the table: "FeeTransfer" */
  update_feeTranfers?: Maybe<FeeTranfers_Mutation_Response>
  /** update single row of the table: "FeeTransfer" */
  update_feeTranfers_by_pk?: Maybe<FeeTranfers>
  /** update multiples rows of table: "FeeTransfer" */
  update_feeTranfers_many?: Maybe<Array<Maybe<FeeTranfers_Mutation_Response>>>
  /** update data of the table: "Organization" */
  update_organizations?: Maybe<Organizations_Mutation_Response>
  /** update single row of the table: "Organization" */
  update_organizations_by_pk?: Maybe<Organizations>
  /** update multiples rows of table: "Organization" */
  update_organizations_many?: Maybe<
    Array<Maybe<Organizations_Mutation_Response>>
  >
  /** update data of the table: "Person" */
  update_persons?: Maybe<Persons_Mutation_Response>
  /** update single row of the table: "Person" */
  update_persons_by_pk?: Maybe<Persons>
  /** update multiples rows of table: "Person" */
  update_persons_many?: Maybe<Array<Maybe<Persons_Mutation_Response>>>
  /** update data of the table: "Position" */
  update_positions?: Maybe<Positions_Mutation_Response>
  /** update single row of the table: "Position" */
  update_positions_by_pk?: Maybe<Positions>
  /** update multiples rows of table: "Position" */
  update_positions_many?: Maybe<Array<Maybe<Positions_Mutation_Response>>>
  /** update data of the table: "Redemption" */
  update_redemptions?: Maybe<Redemptions_Mutation_Response>
  /** update single row of the table: "Redemption" */
  update_redemptions_by_pk?: Maybe<Redemptions>
  /** update multiples rows of table: "Redemption" */
  update_redemptions_many?: Maybe<Array<Maybe<Redemptions_Mutation_Response>>>
  /** update data of the table: "Signal" */
  update_signals?: Maybe<Signals_Mutation_Response>
  /** update single row of the table: "Signal" */
  update_signals_by_pk?: Maybe<Signals>
  /** update multiples rows of table: "Signal" */
  update_signals_many?: Maybe<Array<Maybe<Signals_Mutation_Response>>>
  /** update data of the table: "StatsHour" */
  update_statHours?: Maybe<StatHours_Mutation_Response>
  /** update single row of the table: "StatsHour" */
  update_statHours_by_pk?: Maybe<StatHours>
  /** update multiples rows of table: "StatsHour" */
  update_statHours_many?: Maybe<Array<Maybe<StatHours_Mutation_Response>>>
  /** update data of the table: "Stats" */
  update_stats?: Maybe<Stats_Mutation_Response>
  /** update single row of the table: "Stats" */
  update_stats_by_pk?: Maybe<Stats>
  /** update multiples rows of table: "Stats" */
  update_stats_many?: Maybe<Array<Maybe<Stats_Mutation_Response>>>
  /** update data of the table: "Thing" */
  update_things?: Maybe<Things_Mutation_Response>
  /** update single row of the table: "Thing" */
  update_things_by_pk?: Maybe<Things>
  /** update multiples rows of table: "Thing" */
  update_things_many?: Maybe<Array<Maybe<Things_Mutation_Response>>>
  /** update data of the table: "Triple" */
  update_triples?: Maybe<Triples_Mutation_Response>
  /** update single row of the table: "Triple" */
  update_triples_by_pk?: Maybe<Triples>
  /** update multiples rows of table: "Triple" */
  update_triples_many?: Maybe<Array<Maybe<Triples_Mutation_Response>>>
  /** update data of the table: "Vault" */
  update_vaults?: Maybe<Vaults_Mutation_Response>
  /** update single row of the table: "Vault" */
  update_vaults_by_pk?: Maybe<Vaults>
  /** update multiples rows of table: "Vault" */
  update_vaults_many?: Maybe<Array<Maybe<Vaults_Mutation_Response>>>
}

/** mutation root */
export type Mutation_RootDelete_AccountsArgs = {
  where: Accounts_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Accounts_By_PkArgs = {
  id: Scalars['bytea']['input']
}

/** mutation root */
export type Mutation_RootDelete_AtomValuesArgs = {
  where: AtomValues_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_AtomValues_By_PkArgs = {
  id: Scalars['numeric']['input']
}

/** mutation root */
export type Mutation_RootDelete_AtomsArgs = {
  where: Atoms_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Atoms_By_PkArgs = {
  id: Scalars['numeric']['input']
}

/** mutation root */
export type Mutation_RootDelete_BooksArgs = {
  where: Books_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Books_By_PkArgs = {
  id: Scalars['numeric']['input']
}

/** mutation root */
export type Mutation_RootDelete_ChainLinkPricesArgs = {
  where: ChainLinkPrices_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_ChainLinkPrices_By_PkArgs = {
  id: Scalars['numeric']['input']
}

/** mutation root */
export type Mutation_RootDelete_DepositsArgs = {
  where: Deposits_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Deposits_By_PkArgs = {
  id: Scalars['String']['input']
}

/** mutation root */
export type Mutation_RootDelete_EventsArgs = {
  where: Events_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Events_By_PkArgs = {
  id: Scalars['String']['input']
}

/** mutation root */
export type Mutation_RootDelete_FeeTranfersArgs = {
  where: FeeTranfers_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_FeeTranfers_By_PkArgs = {
  id: Scalars['String']['input']
}

/** mutation root */
export type Mutation_RootDelete_OrganizationsArgs = {
  where: Organizations_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Organizations_By_PkArgs = {
  id: Scalars['numeric']['input']
}

/** mutation root */
export type Mutation_RootDelete_PersonsArgs = {
  where: Persons_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Persons_By_PkArgs = {
  id: Scalars['numeric']['input']
}

/** mutation root */
export type Mutation_RootDelete_PositionsArgs = {
  where: Positions_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Positions_By_PkArgs = {
  id: Scalars['String']['input']
}

/** mutation root */
export type Mutation_RootDelete_RedemptionsArgs = {
  where: Redemptions_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Redemptions_By_PkArgs = {
  id: Scalars['String']['input']
}

/** mutation root */
export type Mutation_RootDelete_SignalsArgs = {
  where: Signals_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Signals_By_PkArgs = {
  id: Scalars['String']['input']
}

/** mutation root */
export type Mutation_RootDelete_StatHoursArgs = {
  where: StatHours_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_StatHours_By_PkArgs = {
  id: Scalars['Int']['input']
}

/** mutation root */
export type Mutation_RootDelete_StatsArgs = {
  where: Stats_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Stats_By_PkArgs = {
  id: Scalars['Int']['input']
}

/** mutation root */
export type Mutation_RootDelete_ThingsArgs = {
  where: Things_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Things_By_PkArgs = {
  id: Scalars['numeric']['input']
}

/** mutation root */
export type Mutation_RootDelete_TriplesArgs = {
  where: Triples_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Triples_By_PkArgs = {
  id: Scalars['numeric']['input']
}

/** mutation root */
export type Mutation_RootDelete_VaultsArgs = {
  where: Vaults_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Vaults_By_PkArgs = {
  id: Scalars['numeric']['input']
}

/** mutation root */
export type Mutation_RootInsert_AccountsArgs = {
  objects: Array<Accounts_Insert_Input>
  on_conflict?: InputMaybe<Accounts_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Accounts_OneArgs = {
  object: Accounts_Insert_Input
  on_conflict?: InputMaybe<Accounts_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_AtomValuesArgs = {
  objects: Array<AtomValues_Insert_Input>
  on_conflict?: InputMaybe<AtomValues_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_AtomValues_OneArgs = {
  object: AtomValues_Insert_Input
  on_conflict?: InputMaybe<AtomValues_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_AtomsArgs = {
  objects: Array<Atoms_Insert_Input>
  on_conflict?: InputMaybe<Atoms_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Atoms_OneArgs = {
  object: Atoms_Insert_Input
  on_conflict?: InputMaybe<Atoms_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_BooksArgs = {
  objects: Array<Books_Insert_Input>
  on_conflict?: InputMaybe<Books_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Books_OneArgs = {
  object: Books_Insert_Input
  on_conflict?: InputMaybe<Books_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_ChainLinkPricesArgs = {
  objects: Array<ChainLinkPrices_Insert_Input>
  on_conflict?: InputMaybe<ChainLinkPrices_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_ChainLinkPrices_OneArgs = {
  object: ChainLinkPrices_Insert_Input
  on_conflict?: InputMaybe<ChainLinkPrices_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_DepositsArgs = {
  objects: Array<Deposits_Insert_Input>
  on_conflict?: InputMaybe<Deposits_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Deposits_OneArgs = {
  object: Deposits_Insert_Input
  on_conflict?: InputMaybe<Deposits_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_EventsArgs = {
  objects: Array<Events_Insert_Input>
  on_conflict?: InputMaybe<Events_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Events_OneArgs = {
  object: Events_Insert_Input
  on_conflict?: InputMaybe<Events_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_FeeTranfersArgs = {
  objects: Array<FeeTranfers_Insert_Input>
  on_conflict?: InputMaybe<FeeTranfers_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_FeeTranfers_OneArgs = {
  object: FeeTranfers_Insert_Input
  on_conflict?: InputMaybe<FeeTranfers_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_OrganizationsArgs = {
  objects: Array<Organizations_Insert_Input>
  on_conflict?: InputMaybe<Organizations_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Organizations_OneArgs = {
  object: Organizations_Insert_Input
  on_conflict?: InputMaybe<Organizations_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_PersonsArgs = {
  objects: Array<Persons_Insert_Input>
  on_conflict?: InputMaybe<Persons_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Persons_OneArgs = {
  object: Persons_Insert_Input
  on_conflict?: InputMaybe<Persons_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_PositionsArgs = {
  objects: Array<Positions_Insert_Input>
  on_conflict?: InputMaybe<Positions_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Positions_OneArgs = {
  object: Positions_Insert_Input
  on_conflict?: InputMaybe<Positions_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_RedemptionsArgs = {
  objects: Array<Redemptions_Insert_Input>
  on_conflict?: InputMaybe<Redemptions_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Redemptions_OneArgs = {
  object: Redemptions_Insert_Input
  on_conflict?: InputMaybe<Redemptions_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_SignalsArgs = {
  objects: Array<Signals_Insert_Input>
  on_conflict?: InputMaybe<Signals_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Signals_OneArgs = {
  object: Signals_Insert_Input
  on_conflict?: InputMaybe<Signals_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_StatHoursArgs = {
  objects: Array<StatHours_Insert_Input>
  on_conflict?: InputMaybe<StatHours_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_StatHours_OneArgs = {
  object: StatHours_Insert_Input
  on_conflict?: InputMaybe<StatHours_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_StatsArgs = {
  objects: Array<Stats_Insert_Input>
  on_conflict?: InputMaybe<Stats_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Stats_OneArgs = {
  object: Stats_Insert_Input
  on_conflict?: InputMaybe<Stats_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_ThingsArgs = {
  objects: Array<Things_Insert_Input>
  on_conflict?: InputMaybe<Things_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Things_OneArgs = {
  object: Things_Insert_Input
  on_conflict?: InputMaybe<Things_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_TriplesArgs = {
  objects: Array<Triples_Insert_Input>
  on_conflict?: InputMaybe<Triples_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Triples_OneArgs = {
  object: Triples_Insert_Input
  on_conflict?: InputMaybe<Triples_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_VaultsArgs = {
  objects: Array<Vaults_Insert_Input>
  on_conflict?: InputMaybe<Vaults_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Vaults_OneArgs = {
  object: Vaults_Insert_Input
  on_conflict?: InputMaybe<Vaults_On_Conflict>
}

/** mutation root */
export type Mutation_RootUpdate_AccountsArgs = {
  _inc?: InputMaybe<Accounts_Inc_Input>
  _set?: InputMaybe<Accounts_Set_Input>
  where: Accounts_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Accounts_By_PkArgs = {
  _inc?: InputMaybe<Accounts_Inc_Input>
  _set?: InputMaybe<Accounts_Set_Input>
  pk_columns: Accounts_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_Accounts_ManyArgs = {
  updates: Array<Accounts_Updates>
}

/** mutation root */
export type Mutation_RootUpdate_AtomValuesArgs = {
  _inc?: InputMaybe<AtomValues_Inc_Input>
  _set?: InputMaybe<AtomValues_Set_Input>
  where: AtomValues_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_AtomValues_By_PkArgs = {
  _inc?: InputMaybe<AtomValues_Inc_Input>
  _set?: InputMaybe<AtomValues_Set_Input>
  pk_columns: AtomValues_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_AtomValues_ManyArgs = {
  updates: Array<AtomValues_Updates>
}

/** mutation root */
export type Mutation_RootUpdate_AtomsArgs = {
  _inc?: InputMaybe<Atoms_Inc_Input>
  _set?: InputMaybe<Atoms_Set_Input>
  where: Atoms_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Atoms_By_PkArgs = {
  _inc?: InputMaybe<Atoms_Inc_Input>
  _set?: InputMaybe<Atoms_Set_Input>
  pk_columns: Atoms_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_Atoms_ManyArgs = {
  updates: Array<Atoms_Updates>
}

/** mutation root */
export type Mutation_RootUpdate_BooksArgs = {
  _inc?: InputMaybe<Books_Inc_Input>
  _set?: InputMaybe<Books_Set_Input>
  where: Books_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Books_By_PkArgs = {
  _inc?: InputMaybe<Books_Inc_Input>
  _set?: InputMaybe<Books_Set_Input>
  pk_columns: Books_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_Books_ManyArgs = {
  updates: Array<Books_Updates>
}

/** mutation root */
export type Mutation_RootUpdate_ChainLinkPricesArgs = {
  _inc?: InputMaybe<ChainLinkPrices_Inc_Input>
  _set?: InputMaybe<ChainLinkPrices_Set_Input>
  where: ChainLinkPrices_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_ChainLinkPrices_By_PkArgs = {
  _inc?: InputMaybe<ChainLinkPrices_Inc_Input>
  _set?: InputMaybe<ChainLinkPrices_Set_Input>
  pk_columns: ChainLinkPrices_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_ChainLinkPrices_ManyArgs = {
  updates: Array<ChainLinkPrices_Updates>
}

/** mutation root */
export type Mutation_RootUpdate_DepositsArgs = {
  _inc?: InputMaybe<Deposits_Inc_Input>
  _set?: InputMaybe<Deposits_Set_Input>
  where: Deposits_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Deposits_By_PkArgs = {
  _inc?: InputMaybe<Deposits_Inc_Input>
  _set?: InputMaybe<Deposits_Set_Input>
  pk_columns: Deposits_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_Deposits_ManyArgs = {
  updates: Array<Deposits_Updates>
}

/** mutation root */
export type Mutation_RootUpdate_EventsArgs = {
  _inc?: InputMaybe<Events_Inc_Input>
  _set?: InputMaybe<Events_Set_Input>
  where: Events_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Events_By_PkArgs = {
  _inc?: InputMaybe<Events_Inc_Input>
  _set?: InputMaybe<Events_Set_Input>
  pk_columns: Events_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_Events_ManyArgs = {
  updates: Array<Events_Updates>
}

/** mutation root */
export type Mutation_RootUpdate_FeeTranfersArgs = {
  _inc?: InputMaybe<FeeTranfers_Inc_Input>
  _set?: InputMaybe<FeeTranfers_Set_Input>
  where: FeeTranfers_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_FeeTranfers_By_PkArgs = {
  _inc?: InputMaybe<FeeTranfers_Inc_Input>
  _set?: InputMaybe<FeeTranfers_Set_Input>
  pk_columns: FeeTranfers_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_FeeTranfers_ManyArgs = {
  updates: Array<FeeTranfers_Updates>
}

/** mutation root */
export type Mutation_RootUpdate_OrganizationsArgs = {
  _inc?: InputMaybe<Organizations_Inc_Input>
  _set?: InputMaybe<Organizations_Set_Input>
  where: Organizations_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Organizations_By_PkArgs = {
  _inc?: InputMaybe<Organizations_Inc_Input>
  _set?: InputMaybe<Organizations_Set_Input>
  pk_columns: Organizations_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_Organizations_ManyArgs = {
  updates: Array<Organizations_Updates>
}

/** mutation root */
export type Mutation_RootUpdate_PersonsArgs = {
  _inc?: InputMaybe<Persons_Inc_Input>
  _set?: InputMaybe<Persons_Set_Input>
  where: Persons_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Persons_By_PkArgs = {
  _inc?: InputMaybe<Persons_Inc_Input>
  _set?: InputMaybe<Persons_Set_Input>
  pk_columns: Persons_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_Persons_ManyArgs = {
  updates: Array<Persons_Updates>
}

/** mutation root */
export type Mutation_RootUpdate_PositionsArgs = {
  _inc?: InputMaybe<Positions_Inc_Input>
  _set?: InputMaybe<Positions_Set_Input>
  where: Positions_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Positions_By_PkArgs = {
  _inc?: InputMaybe<Positions_Inc_Input>
  _set?: InputMaybe<Positions_Set_Input>
  pk_columns: Positions_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_Positions_ManyArgs = {
  updates: Array<Positions_Updates>
}

/** mutation root */
export type Mutation_RootUpdate_RedemptionsArgs = {
  _inc?: InputMaybe<Redemptions_Inc_Input>
  _set?: InputMaybe<Redemptions_Set_Input>
  where: Redemptions_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Redemptions_By_PkArgs = {
  _inc?: InputMaybe<Redemptions_Inc_Input>
  _set?: InputMaybe<Redemptions_Set_Input>
  pk_columns: Redemptions_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_Redemptions_ManyArgs = {
  updates: Array<Redemptions_Updates>
}

/** mutation root */
export type Mutation_RootUpdate_SignalsArgs = {
  _inc?: InputMaybe<Signals_Inc_Input>
  _set?: InputMaybe<Signals_Set_Input>
  where: Signals_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Signals_By_PkArgs = {
  _inc?: InputMaybe<Signals_Inc_Input>
  _set?: InputMaybe<Signals_Set_Input>
  pk_columns: Signals_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_Signals_ManyArgs = {
  updates: Array<Signals_Updates>
}

/** mutation root */
export type Mutation_RootUpdate_StatHoursArgs = {
  _inc?: InputMaybe<StatHours_Inc_Input>
  _set?: InputMaybe<StatHours_Set_Input>
  where: StatHours_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_StatHours_By_PkArgs = {
  _inc?: InputMaybe<StatHours_Inc_Input>
  _set?: InputMaybe<StatHours_Set_Input>
  pk_columns: StatHours_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_StatHours_ManyArgs = {
  updates: Array<StatHours_Updates>
}

/** mutation root */
export type Mutation_RootUpdate_StatsArgs = {
  _inc?: InputMaybe<Stats_Inc_Input>
  _set?: InputMaybe<Stats_Set_Input>
  where: Stats_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Stats_By_PkArgs = {
  _inc?: InputMaybe<Stats_Inc_Input>
  _set?: InputMaybe<Stats_Set_Input>
  pk_columns: Stats_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_Stats_ManyArgs = {
  updates: Array<Stats_Updates>
}

/** mutation root */
export type Mutation_RootUpdate_ThingsArgs = {
  _inc?: InputMaybe<Things_Inc_Input>
  _set?: InputMaybe<Things_Set_Input>
  where: Things_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Things_By_PkArgs = {
  _inc?: InputMaybe<Things_Inc_Input>
  _set?: InputMaybe<Things_Set_Input>
  pk_columns: Things_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_Things_ManyArgs = {
  updates: Array<Things_Updates>
}

/** mutation root */
export type Mutation_RootUpdate_TriplesArgs = {
  _inc?: InputMaybe<Triples_Inc_Input>
  _set?: InputMaybe<Triples_Set_Input>
  where: Triples_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Triples_By_PkArgs = {
  _inc?: InputMaybe<Triples_Inc_Input>
  _set?: InputMaybe<Triples_Set_Input>
  pk_columns: Triples_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_Triples_ManyArgs = {
  updates: Array<Triples_Updates>
}

/** mutation root */
export type Mutation_RootUpdate_VaultsArgs = {
  _inc?: InputMaybe<Vaults_Inc_Input>
  _set?: InputMaybe<Vaults_Set_Input>
  where: Vaults_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Vaults_By_PkArgs = {
  _inc?: InputMaybe<Vaults_Inc_Input>
  _set?: InputMaybe<Vaults_Set_Input>
  pk_columns: Vaults_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_Vaults_ManyArgs = {
  updates: Array<Vaults_Updates>
}

/** Boolean expression to compare columns of type "numeric". All fields are combined with logical 'AND'. */
export type Numeric_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['numeric']['input']>
  _gt?: InputMaybe<Scalars['numeric']['input']>
  _gte?: InputMaybe<Scalars['numeric']['input']>
  _in?: InputMaybe<Array<Scalars['numeric']['input']>>
  _is_null?: InputMaybe<Scalars['Boolean']['input']>
  _lt?: InputMaybe<Scalars['numeric']['input']>
  _lte?: InputMaybe<Scalars['numeric']['input']>
  _neq?: InputMaybe<Scalars['numeric']['input']>
  _nin?: InputMaybe<Array<Scalars['numeric']['input']>>
}

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last',
}

/** columns and relationships of "Organization" */
export type Organizations = {
  __typename?: 'organizations'
  /** An object relationship */
  atom?: Maybe<Atoms>
  atomId: Scalars['numeric']['output']
  description?: Maybe<Scalars['String']['output']>
  email?: Maybe<Scalars['String']['output']>
  id: Scalars['numeric']['output']
  image?: Maybe<Scalars['String']['output']>
  name?: Maybe<Scalars['String']['output']>
  url?: Maybe<Scalars['String']['output']>
}

/** aggregated selection of "Organization" */
export type Organizations_Aggregate = {
  __typename?: 'organizations_aggregate'
  aggregate?: Maybe<Organizations_Aggregate_Fields>
  nodes: Array<Organizations>
}

/** aggregate fields of "Organization" */
export type Organizations_Aggregate_Fields = {
  __typename?: 'organizations_aggregate_fields'
  avg?: Maybe<Organizations_Avg_Fields>
  count: Scalars['Int']['output']
  max?: Maybe<Organizations_Max_Fields>
  min?: Maybe<Organizations_Min_Fields>
  stddev?: Maybe<Organizations_Stddev_Fields>
  stddev_pop?: Maybe<Organizations_Stddev_Pop_Fields>
  stddev_samp?: Maybe<Organizations_Stddev_Samp_Fields>
  sum?: Maybe<Organizations_Sum_Fields>
  var_pop?: Maybe<Organizations_Var_Pop_Fields>
  var_samp?: Maybe<Organizations_Var_Samp_Fields>
  variance?: Maybe<Organizations_Variance_Fields>
}

/** aggregate fields of "Organization" */
export type Organizations_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Organizations_Select_Column>>
  distinct?: InputMaybe<Scalars['Boolean']['input']>
}

/** aggregate avg on columns */
export type Organizations_Avg_Fields = {
  __typename?: 'organizations_avg_fields'
  atomId?: Maybe<Scalars['Float']['output']>
  id?: Maybe<Scalars['Float']['output']>
}

/** Boolean expression to filter rows from the table "Organization". All fields are combined with a logical 'AND'. */
export type Organizations_Bool_Exp = {
  _and?: InputMaybe<Array<Organizations_Bool_Exp>>
  _not?: InputMaybe<Organizations_Bool_Exp>
  _or?: InputMaybe<Array<Organizations_Bool_Exp>>
  atom?: InputMaybe<Atoms_Bool_Exp>
  atomId?: InputMaybe<Numeric_Comparison_Exp>
  description?: InputMaybe<String_Comparison_Exp>
  email?: InputMaybe<String_Comparison_Exp>
  id?: InputMaybe<Numeric_Comparison_Exp>
  image?: InputMaybe<String_Comparison_Exp>
  name?: InputMaybe<String_Comparison_Exp>
  url?: InputMaybe<String_Comparison_Exp>
}

/** unique or primary key constraints on table "Organization" */
export enum Organizations_Constraint {
  /** unique or primary key constraint on columns "id" */
  OrganizationPkey = 'Organization_pkey',
}

/** input type for incrementing numeric columns in table "Organization" */
export type Organizations_Inc_Input = {
  atomId?: InputMaybe<Scalars['numeric']['input']>
  id?: InputMaybe<Scalars['numeric']['input']>
}

/** input type for inserting data into table "Organization" */
export type Organizations_Insert_Input = {
  atom?: InputMaybe<Atoms_Obj_Rel_Insert_Input>
  atomId?: InputMaybe<Scalars['numeric']['input']>
  description?: InputMaybe<Scalars['String']['input']>
  email?: InputMaybe<Scalars['String']['input']>
  id?: InputMaybe<Scalars['numeric']['input']>
  image?: InputMaybe<Scalars['String']['input']>
  name?: InputMaybe<Scalars['String']['input']>
  url?: InputMaybe<Scalars['String']['input']>
}

/** aggregate max on columns */
export type Organizations_Max_Fields = {
  __typename?: 'organizations_max_fields'
  atomId?: Maybe<Scalars['numeric']['output']>
  description?: Maybe<Scalars['String']['output']>
  email?: Maybe<Scalars['String']['output']>
  id?: Maybe<Scalars['numeric']['output']>
  image?: Maybe<Scalars['String']['output']>
  name?: Maybe<Scalars['String']['output']>
  url?: Maybe<Scalars['String']['output']>
}

/** aggregate min on columns */
export type Organizations_Min_Fields = {
  __typename?: 'organizations_min_fields'
  atomId?: Maybe<Scalars['numeric']['output']>
  description?: Maybe<Scalars['String']['output']>
  email?: Maybe<Scalars['String']['output']>
  id?: Maybe<Scalars['numeric']['output']>
  image?: Maybe<Scalars['String']['output']>
  name?: Maybe<Scalars['String']['output']>
  url?: Maybe<Scalars['String']['output']>
}

/** response of any mutation on the table "Organization" */
export type Organizations_Mutation_Response = {
  __typename?: 'organizations_mutation_response'
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output']
  /** data from the rows affected by the mutation */
  returning: Array<Organizations>
}

/** input type for inserting object relation for remote table "Organization" */
export type Organizations_Obj_Rel_Insert_Input = {
  data: Organizations_Insert_Input
  /** upsert condition */
  on_conflict?: InputMaybe<Organizations_On_Conflict>
}

/** on_conflict condition type for table "Organization" */
export type Organizations_On_Conflict = {
  constraint: Organizations_Constraint
  update_columns?: Array<Organizations_Update_Column>
  where?: InputMaybe<Organizations_Bool_Exp>
}

/** Ordering options when selecting data from "Organization". */
export type Organizations_Order_By = {
  atom?: InputMaybe<Atoms_Order_By>
  atomId?: InputMaybe<Order_By>
  description?: InputMaybe<Order_By>
  email?: InputMaybe<Order_By>
  id?: InputMaybe<Order_By>
  image?: InputMaybe<Order_By>
  name?: InputMaybe<Order_By>
  url?: InputMaybe<Order_By>
}

/** primary key columns input for table: Organization */
export type Organizations_Pk_Columns_Input = {
  id: Scalars['numeric']['input']
}

/** select columns of table "Organization" */
export enum Organizations_Select_Column {
  /** column name */
  AtomId = 'atomId',
  /** column name */
  Description = 'description',
  /** column name */
  Email = 'email',
  /** column name */
  Id = 'id',
  /** column name */
  Image = 'image',
  /** column name */
  Name = 'name',
  /** column name */
  Url = 'url',
}

/** input type for updating data in table "Organization" */
export type Organizations_Set_Input = {
  atomId?: InputMaybe<Scalars['numeric']['input']>
  description?: InputMaybe<Scalars['String']['input']>
  email?: InputMaybe<Scalars['String']['input']>
  id?: InputMaybe<Scalars['numeric']['input']>
  image?: InputMaybe<Scalars['String']['input']>
  name?: InputMaybe<Scalars['String']['input']>
  url?: InputMaybe<Scalars['String']['input']>
}

/** aggregate stddev on columns */
export type Organizations_Stddev_Fields = {
  __typename?: 'organizations_stddev_fields'
  atomId?: Maybe<Scalars['Float']['output']>
  id?: Maybe<Scalars['Float']['output']>
}

/** aggregate stddev_pop on columns */
export type Organizations_Stddev_Pop_Fields = {
  __typename?: 'organizations_stddev_pop_fields'
  atomId?: Maybe<Scalars['Float']['output']>
  id?: Maybe<Scalars['Float']['output']>
}

/** aggregate stddev_samp on columns */
export type Organizations_Stddev_Samp_Fields = {
  __typename?: 'organizations_stddev_samp_fields'
  atomId?: Maybe<Scalars['Float']['output']>
  id?: Maybe<Scalars['Float']['output']>
}

/** Streaming cursor of the table "organizations" */
export type Organizations_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Organizations_Stream_Cursor_Value_Input
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>
}

/** Initial value of the column from where the streaming should start */
export type Organizations_Stream_Cursor_Value_Input = {
  atomId?: InputMaybe<Scalars['numeric']['input']>
  description?: InputMaybe<Scalars['String']['input']>
  email?: InputMaybe<Scalars['String']['input']>
  id?: InputMaybe<Scalars['numeric']['input']>
  image?: InputMaybe<Scalars['String']['input']>
  name?: InputMaybe<Scalars['String']['input']>
  url?: InputMaybe<Scalars['String']['input']>
}

/** aggregate sum on columns */
export type Organizations_Sum_Fields = {
  __typename?: 'organizations_sum_fields'
  atomId?: Maybe<Scalars['numeric']['output']>
  id?: Maybe<Scalars['numeric']['output']>
}

/** update columns of table "Organization" */
export enum Organizations_Update_Column {
  /** column name */
  AtomId = 'atomId',
  /** column name */
  Description = 'description',
  /** column name */
  Email = 'email',
  /** column name */
  Id = 'id',
  /** column name */
  Image = 'image',
  /** column name */
  Name = 'name',
  /** column name */
  Url = 'url',
}

export type Organizations_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Organizations_Inc_Input>
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Organizations_Set_Input>
  /** filter the rows which have to be updated */
  where: Organizations_Bool_Exp
}

/** aggregate var_pop on columns */
export type Organizations_Var_Pop_Fields = {
  __typename?: 'organizations_var_pop_fields'
  atomId?: Maybe<Scalars['Float']['output']>
  id?: Maybe<Scalars['Float']['output']>
}

/** aggregate var_samp on columns */
export type Organizations_Var_Samp_Fields = {
  __typename?: 'organizations_var_samp_fields'
  atomId?: Maybe<Scalars['Float']['output']>
  id?: Maybe<Scalars['Float']['output']>
}

/** aggregate variance on columns */
export type Organizations_Variance_Fields = {
  __typename?: 'organizations_variance_fields'
  atomId?: Maybe<Scalars['Float']['output']>
  id?: Maybe<Scalars['Float']['output']>
}

/** columns and relationships of "Person" */
export type Persons = {
  __typename?: 'persons'
  /** An object relationship */
  atom?: Maybe<Atoms>
  atomId: Scalars['numeric']['output']
  description?: Maybe<Scalars['String']['output']>
  email?: Maybe<Scalars['String']['output']>
  id: Scalars['numeric']['output']
  identifier?: Maybe<Scalars['String']['output']>
  image?: Maybe<Scalars['String']['output']>
  name?: Maybe<Scalars['String']['output']>
  url?: Maybe<Scalars['String']['output']>
}

/** aggregated selection of "Person" */
export type Persons_Aggregate = {
  __typename?: 'persons_aggregate'
  aggregate?: Maybe<Persons_Aggregate_Fields>
  nodes: Array<Persons>
}

/** aggregate fields of "Person" */
export type Persons_Aggregate_Fields = {
  __typename?: 'persons_aggregate_fields'
  avg?: Maybe<Persons_Avg_Fields>
  count: Scalars['Int']['output']
  max?: Maybe<Persons_Max_Fields>
  min?: Maybe<Persons_Min_Fields>
  stddev?: Maybe<Persons_Stddev_Fields>
  stddev_pop?: Maybe<Persons_Stddev_Pop_Fields>
  stddev_samp?: Maybe<Persons_Stddev_Samp_Fields>
  sum?: Maybe<Persons_Sum_Fields>
  var_pop?: Maybe<Persons_Var_Pop_Fields>
  var_samp?: Maybe<Persons_Var_Samp_Fields>
  variance?: Maybe<Persons_Variance_Fields>
}

/** aggregate fields of "Person" */
export type Persons_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Persons_Select_Column>>
  distinct?: InputMaybe<Scalars['Boolean']['input']>
}

/** aggregate avg on columns */
export type Persons_Avg_Fields = {
  __typename?: 'persons_avg_fields'
  atomId?: Maybe<Scalars['Float']['output']>
  id?: Maybe<Scalars['Float']['output']>
}

/** Boolean expression to filter rows from the table "Person". All fields are combined with a logical 'AND'. */
export type Persons_Bool_Exp = {
  _and?: InputMaybe<Array<Persons_Bool_Exp>>
  _not?: InputMaybe<Persons_Bool_Exp>
  _or?: InputMaybe<Array<Persons_Bool_Exp>>
  atom?: InputMaybe<Atoms_Bool_Exp>
  atomId?: InputMaybe<Numeric_Comparison_Exp>
  description?: InputMaybe<String_Comparison_Exp>
  email?: InputMaybe<String_Comparison_Exp>
  id?: InputMaybe<Numeric_Comparison_Exp>
  identifier?: InputMaybe<String_Comparison_Exp>
  image?: InputMaybe<String_Comparison_Exp>
  name?: InputMaybe<String_Comparison_Exp>
  url?: InputMaybe<String_Comparison_Exp>
}

/** unique or primary key constraints on table "Person" */
export enum Persons_Constraint {
  /** unique or primary key constraint on columns "id" */
  PersonPkey = 'Person_pkey',
}

/** input type for incrementing numeric columns in table "Person" */
export type Persons_Inc_Input = {
  atomId?: InputMaybe<Scalars['numeric']['input']>
  id?: InputMaybe<Scalars['numeric']['input']>
}

/** input type for inserting data into table "Person" */
export type Persons_Insert_Input = {
  atom?: InputMaybe<Atoms_Obj_Rel_Insert_Input>
  atomId?: InputMaybe<Scalars['numeric']['input']>
  description?: InputMaybe<Scalars['String']['input']>
  email?: InputMaybe<Scalars['String']['input']>
  id?: InputMaybe<Scalars['numeric']['input']>
  identifier?: InputMaybe<Scalars['String']['input']>
  image?: InputMaybe<Scalars['String']['input']>
  name?: InputMaybe<Scalars['String']['input']>
  url?: InputMaybe<Scalars['String']['input']>
}

/** aggregate max on columns */
export type Persons_Max_Fields = {
  __typename?: 'persons_max_fields'
  atomId?: Maybe<Scalars['numeric']['output']>
  description?: Maybe<Scalars['String']['output']>
  email?: Maybe<Scalars['String']['output']>
  id?: Maybe<Scalars['numeric']['output']>
  identifier?: Maybe<Scalars['String']['output']>
  image?: Maybe<Scalars['String']['output']>
  name?: Maybe<Scalars['String']['output']>
  url?: Maybe<Scalars['String']['output']>
}

/** aggregate min on columns */
export type Persons_Min_Fields = {
  __typename?: 'persons_min_fields'
  atomId?: Maybe<Scalars['numeric']['output']>
  description?: Maybe<Scalars['String']['output']>
  email?: Maybe<Scalars['String']['output']>
  id?: Maybe<Scalars['numeric']['output']>
  identifier?: Maybe<Scalars['String']['output']>
  image?: Maybe<Scalars['String']['output']>
  name?: Maybe<Scalars['String']['output']>
  url?: Maybe<Scalars['String']['output']>
}

/** response of any mutation on the table "Person" */
export type Persons_Mutation_Response = {
  __typename?: 'persons_mutation_response'
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output']
  /** data from the rows affected by the mutation */
  returning: Array<Persons>
}

/** input type for inserting object relation for remote table "Person" */
export type Persons_Obj_Rel_Insert_Input = {
  data: Persons_Insert_Input
  /** upsert condition */
  on_conflict?: InputMaybe<Persons_On_Conflict>
}

/** on_conflict condition type for table "Person" */
export type Persons_On_Conflict = {
  constraint: Persons_Constraint
  update_columns?: Array<Persons_Update_Column>
  where?: InputMaybe<Persons_Bool_Exp>
}

/** Ordering options when selecting data from "Person". */
export type Persons_Order_By = {
  atom?: InputMaybe<Atoms_Order_By>
  atomId?: InputMaybe<Order_By>
  description?: InputMaybe<Order_By>
  email?: InputMaybe<Order_By>
  id?: InputMaybe<Order_By>
  identifier?: InputMaybe<Order_By>
  image?: InputMaybe<Order_By>
  name?: InputMaybe<Order_By>
  url?: InputMaybe<Order_By>
}

/** primary key columns input for table: Person */
export type Persons_Pk_Columns_Input = {
  id: Scalars['numeric']['input']
}

/** select columns of table "Person" */
export enum Persons_Select_Column {
  /** column name */
  AtomId = 'atomId',
  /** column name */
  Description = 'description',
  /** column name */
  Email = 'email',
  /** column name */
  Id = 'id',
  /** column name */
  Identifier = 'identifier',
  /** column name */
  Image = 'image',
  /** column name */
  Name = 'name',
  /** column name */
  Url = 'url',
}

/** input type for updating data in table "Person" */
export type Persons_Set_Input = {
  atomId?: InputMaybe<Scalars['numeric']['input']>
  description?: InputMaybe<Scalars['String']['input']>
  email?: InputMaybe<Scalars['String']['input']>
  id?: InputMaybe<Scalars['numeric']['input']>
  identifier?: InputMaybe<Scalars['String']['input']>
  image?: InputMaybe<Scalars['String']['input']>
  name?: InputMaybe<Scalars['String']['input']>
  url?: InputMaybe<Scalars['String']['input']>
}

/** aggregate stddev on columns */
export type Persons_Stddev_Fields = {
  __typename?: 'persons_stddev_fields'
  atomId?: Maybe<Scalars['Float']['output']>
  id?: Maybe<Scalars['Float']['output']>
}

/** aggregate stddev_pop on columns */
export type Persons_Stddev_Pop_Fields = {
  __typename?: 'persons_stddev_pop_fields'
  atomId?: Maybe<Scalars['Float']['output']>
  id?: Maybe<Scalars['Float']['output']>
}

/** aggregate stddev_samp on columns */
export type Persons_Stddev_Samp_Fields = {
  __typename?: 'persons_stddev_samp_fields'
  atomId?: Maybe<Scalars['Float']['output']>
  id?: Maybe<Scalars['Float']['output']>
}

/** Streaming cursor of the table "persons" */
export type Persons_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Persons_Stream_Cursor_Value_Input
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>
}

/** Initial value of the column from where the streaming should start */
export type Persons_Stream_Cursor_Value_Input = {
  atomId?: InputMaybe<Scalars['numeric']['input']>
  description?: InputMaybe<Scalars['String']['input']>
  email?: InputMaybe<Scalars['String']['input']>
  id?: InputMaybe<Scalars['numeric']['input']>
  identifier?: InputMaybe<Scalars['String']['input']>
  image?: InputMaybe<Scalars['String']['input']>
  name?: InputMaybe<Scalars['String']['input']>
  url?: InputMaybe<Scalars['String']['input']>
}

/** aggregate sum on columns */
export type Persons_Sum_Fields = {
  __typename?: 'persons_sum_fields'
  atomId?: Maybe<Scalars['numeric']['output']>
  id?: Maybe<Scalars['numeric']['output']>
}

/** update columns of table "Person" */
export enum Persons_Update_Column {
  /** column name */
  AtomId = 'atomId',
  /** column name */
  Description = 'description',
  /** column name */
  Email = 'email',
  /** column name */
  Id = 'id',
  /** column name */
  Identifier = 'identifier',
  /** column name */
  Image = 'image',
  /** column name */
  Name = 'name',
  /** column name */
  Url = 'url',
}

export type Persons_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Persons_Inc_Input>
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Persons_Set_Input>
  /** filter the rows which have to be updated */
  where: Persons_Bool_Exp
}

/** aggregate var_pop on columns */
export type Persons_Var_Pop_Fields = {
  __typename?: 'persons_var_pop_fields'
  atomId?: Maybe<Scalars['Float']['output']>
  id?: Maybe<Scalars['Float']['output']>
}

/** aggregate var_samp on columns */
export type Persons_Var_Samp_Fields = {
  __typename?: 'persons_var_samp_fields'
  atomId?: Maybe<Scalars['Float']['output']>
  id?: Maybe<Scalars['Float']['output']>
}

/** aggregate variance on columns */
export type Persons_Variance_Fields = {
  __typename?: 'persons_variance_fields'
  atomId?: Maybe<Scalars['Float']['output']>
  id?: Maybe<Scalars['Float']['output']>
}

/** columns and relationships of "Position" */
export type Positions = {
  __typename?: 'positions'
  /** An object relationship */
  account?: Maybe<Accounts>
  accountId: Scalars['bytea']['output']
  id: Scalars['String']['output']
  shares: Scalars['numeric']['output']
  /** An object relationship */
  vault?: Maybe<Vaults>
  vaultId: Scalars['numeric']['output']
}

/** aggregated selection of "Position" */
export type Positions_Aggregate = {
  __typename?: 'positions_aggregate'
  aggregate?: Maybe<Positions_Aggregate_Fields>
  nodes: Array<Positions>
}

export type Positions_Aggregate_Bool_Exp = {
  count?: InputMaybe<Positions_Aggregate_Bool_Exp_Count>
}

export type Positions_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Positions_Select_Column>>
  distinct?: InputMaybe<Scalars['Boolean']['input']>
  filter?: InputMaybe<Positions_Bool_Exp>
  predicate: Int_Comparison_Exp
}

/** aggregate fields of "Position" */
export type Positions_Aggregate_Fields = {
  __typename?: 'positions_aggregate_fields'
  avg?: Maybe<Positions_Avg_Fields>
  count: Scalars['Int']['output']
  max?: Maybe<Positions_Max_Fields>
  min?: Maybe<Positions_Min_Fields>
  stddev?: Maybe<Positions_Stddev_Fields>
  stddev_pop?: Maybe<Positions_Stddev_Pop_Fields>
  stddev_samp?: Maybe<Positions_Stddev_Samp_Fields>
  sum?: Maybe<Positions_Sum_Fields>
  var_pop?: Maybe<Positions_Var_Pop_Fields>
  var_samp?: Maybe<Positions_Var_Samp_Fields>
  variance?: Maybe<Positions_Variance_Fields>
}

/** aggregate fields of "Position" */
export type Positions_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Positions_Select_Column>>
  distinct?: InputMaybe<Scalars['Boolean']['input']>
}

/** order by aggregate values of table "Position" */
export type Positions_Aggregate_Order_By = {
  avg?: InputMaybe<Positions_Avg_Order_By>
  count?: InputMaybe<Order_By>
  max?: InputMaybe<Positions_Max_Order_By>
  min?: InputMaybe<Positions_Min_Order_By>
  stddev?: InputMaybe<Positions_Stddev_Order_By>
  stddev_pop?: InputMaybe<Positions_Stddev_Pop_Order_By>
  stddev_samp?: InputMaybe<Positions_Stddev_Samp_Order_By>
  sum?: InputMaybe<Positions_Sum_Order_By>
  var_pop?: InputMaybe<Positions_Var_Pop_Order_By>
  var_samp?: InputMaybe<Positions_Var_Samp_Order_By>
  variance?: InputMaybe<Positions_Variance_Order_By>
}

/** input type for inserting array relation for remote table "Position" */
export type Positions_Arr_Rel_Insert_Input = {
  data: Array<Positions_Insert_Input>
  /** upsert condition */
  on_conflict?: InputMaybe<Positions_On_Conflict>
}

/** aggregate avg on columns */
export type Positions_Avg_Fields = {
  __typename?: 'positions_avg_fields'
  shares?: Maybe<Scalars['Float']['output']>
  vaultId?: Maybe<Scalars['Float']['output']>
}

/** order by avg() on columns of table "Position" */
export type Positions_Avg_Order_By = {
  shares?: InputMaybe<Order_By>
  vaultId?: InputMaybe<Order_By>
}

/** Boolean expression to filter rows from the table "Position". All fields are combined with a logical 'AND'. */
export type Positions_Bool_Exp = {
  _and?: InputMaybe<Array<Positions_Bool_Exp>>
  _not?: InputMaybe<Positions_Bool_Exp>
  _or?: InputMaybe<Array<Positions_Bool_Exp>>
  account?: InputMaybe<Accounts_Bool_Exp>
  accountId?: InputMaybe<Bytea_Comparison_Exp>
  id?: InputMaybe<String_Comparison_Exp>
  shares?: InputMaybe<Numeric_Comparison_Exp>
  vault?: InputMaybe<Vaults_Bool_Exp>
  vaultId?: InputMaybe<Numeric_Comparison_Exp>
}

/** unique or primary key constraints on table "Position" */
export enum Positions_Constraint {
  /** unique or primary key constraint on columns "id" */
  PositionPkey = 'Position_pkey',
}

/** input type for incrementing numeric columns in table "Position" */
export type Positions_Inc_Input = {
  shares?: InputMaybe<Scalars['numeric']['input']>
  vaultId?: InputMaybe<Scalars['numeric']['input']>
}

/** input type for inserting data into table "Position" */
export type Positions_Insert_Input = {
  account?: InputMaybe<Accounts_Obj_Rel_Insert_Input>
  accountId?: InputMaybe<Scalars['bytea']['input']>
  id?: InputMaybe<Scalars['String']['input']>
  shares?: InputMaybe<Scalars['numeric']['input']>
  vault?: InputMaybe<Vaults_Obj_Rel_Insert_Input>
  vaultId?: InputMaybe<Scalars['numeric']['input']>
}

/** aggregate max on columns */
export type Positions_Max_Fields = {
  __typename?: 'positions_max_fields'
  id?: Maybe<Scalars['String']['output']>
  shares?: Maybe<Scalars['numeric']['output']>
  vaultId?: Maybe<Scalars['numeric']['output']>
}

/** order by max() on columns of table "Position" */
export type Positions_Max_Order_By = {
  id?: InputMaybe<Order_By>
  shares?: InputMaybe<Order_By>
  vaultId?: InputMaybe<Order_By>
}

/** aggregate min on columns */
export type Positions_Min_Fields = {
  __typename?: 'positions_min_fields'
  id?: Maybe<Scalars['String']['output']>
  shares?: Maybe<Scalars['numeric']['output']>
  vaultId?: Maybe<Scalars['numeric']['output']>
}

/** order by min() on columns of table "Position" */
export type Positions_Min_Order_By = {
  id?: InputMaybe<Order_By>
  shares?: InputMaybe<Order_By>
  vaultId?: InputMaybe<Order_By>
}

/** response of any mutation on the table "Position" */
export type Positions_Mutation_Response = {
  __typename?: 'positions_mutation_response'
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output']
  /** data from the rows affected by the mutation */
  returning: Array<Positions>
}

/** on_conflict condition type for table "Position" */
export type Positions_On_Conflict = {
  constraint: Positions_Constraint
  update_columns?: Array<Positions_Update_Column>
  where?: InputMaybe<Positions_Bool_Exp>
}

/** Ordering options when selecting data from "Position". */
export type Positions_Order_By = {
  account?: InputMaybe<Accounts_Order_By>
  accountId?: InputMaybe<Order_By>
  id?: InputMaybe<Order_By>
  shares?: InputMaybe<Order_By>
  vault?: InputMaybe<Vaults_Order_By>
  vaultId?: InputMaybe<Order_By>
}

/** primary key columns input for table: Position */
export type Positions_Pk_Columns_Input = {
  id: Scalars['String']['input']
}

/** select columns of table "Position" */
export enum Positions_Select_Column {
  /** column name */
  AccountId = 'accountId',
  /** column name */
  Id = 'id',
  /** column name */
  Shares = 'shares',
  /** column name */
  VaultId = 'vaultId',
}

/** input type for updating data in table "Position" */
export type Positions_Set_Input = {
  accountId?: InputMaybe<Scalars['bytea']['input']>
  id?: InputMaybe<Scalars['String']['input']>
  shares?: InputMaybe<Scalars['numeric']['input']>
  vaultId?: InputMaybe<Scalars['numeric']['input']>
}

/** aggregate stddev on columns */
export type Positions_Stddev_Fields = {
  __typename?: 'positions_stddev_fields'
  shares?: Maybe<Scalars['Float']['output']>
  vaultId?: Maybe<Scalars['Float']['output']>
}

/** order by stddev() on columns of table "Position" */
export type Positions_Stddev_Order_By = {
  shares?: InputMaybe<Order_By>
  vaultId?: InputMaybe<Order_By>
}

/** aggregate stddev_pop on columns */
export type Positions_Stddev_Pop_Fields = {
  __typename?: 'positions_stddev_pop_fields'
  shares?: Maybe<Scalars['Float']['output']>
  vaultId?: Maybe<Scalars['Float']['output']>
}

/** order by stddev_pop() on columns of table "Position" */
export type Positions_Stddev_Pop_Order_By = {
  shares?: InputMaybe<Order_By>
  vaultId?: InputMaybe<Order_By>
}

/** aggregate stddev_samp on columns */
export type Positions_Stddev_Samp_Fields = {
  __typename?: 'positions_stddev_samp_fields'
  shares?: Maybe<Scalars['Float']['output']>
  vaultId?: Maybe<Scalars['Float']['output']>
}

/** order by stddev_samp() on columns of table "Position" */
export type Positions_Stddev_Samp_Order_By = {
  shares?: InputMaybe<Order_By>
  vaultId?: InputMaybe<Order_By>
}

/** Streaming cursor of the table "positions" */
export type Positions_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Positions_Stream_Cursor_Value_Input
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>
}

/** Initial value of the column from where the streaming should start */
export type Positions_Stream_Cursor_Value_Input = {
  accountId?: InputMaybe<Scalars['bytea']['input']>
  id?: InputMaybe<Scalars['String']['input']>
  shares?: InputMaybe<Scalars['numeric']['input']>
  vaultId?: InputMaybe<Scalars['numeric']['input']>
}

/** aggregate sum on columns */
export type Positions_Sum_Fields = {
  __typename?: 'positions_sum_fields'
  shares?: Maybe<Scalars['numeric']['output']>
  vaultId?: Maybe<Scalars['numeric']['output']>
}

/** order by sum() on columns of table "Position" */
export type Positions_Sum_Order_By = {
  shares?: InputMaybe<Order_By>
  vaultId?: InputMaybe<Order_By>
}

/** update columns of table "Position" */
export enum Positions_Update_Column {
  /** column name */
  AccountId = 'accountId',
  /** column name */
  Id = 'id',
  /** column name */
  Shares = 'shares',
  /** column name */
  VaultId = 'vaultId',
}

export type Positions_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Positions_Inc_Input>
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Positions_Set_Input>
  /** filter the rows which have to be updated */
  where: Positions_Bool_Exp
}

/** aggregate var_pop on columns */
export type Positions_Var_Pop_Fields = {
  __typename?: 'positions_var_pop_fields'
  shares?: Maybe<Scalars['Float']['output']>
  vaultId?: Maybe<Scalars['Float']['output']>
}

/** order by var_pop() on columns of table "Position" */
export type Positions_Var_Pop_Order_By = {
  shares?: InputMaybe<Order_By>
  vaultId?: InputMaybe<Order_By>
}

/** aggregate var_samp on columns */
export type Positions_Var_Samp_Fields = {
  __typename?: 'positions_var_samp_fields'
  shares?: Maybe<Scalars['Float']['output']>
  vaultId?: Maybe<Scalars['Float']['output']>
}

/** order by var_samp() on columns of table "Position" */
export type Positions_Var_Samp_Order_By = {
  shares?: InputMaybe<Order_By>
  vaultId?: InputMaybe<Order_By>
}

/** aggregate variance on columns */
export type Positions_Variance_Fields = {
  __typename?: 'positions_variance_fields'
  shares?: Maybe<Scalars['Float']['output']>
  vaultId?: Maybe<Scalars['Float']['output']>
}

/** order by variance() on columns of table "Position" */
export type Positions_Variance_Order_By = {
  shares?: InputMaybe<Order_By>
  vaultId?: InputMaybe<Order_By>
}

export type Query_Root = {
  __typename?: 'query_root'
  /** fetch data from the table: "Account" using primary key columns */
  account?: Maybe<Accounts>
  /** fetch data from the table: "Account" */
  accounts: Array<Accounts>
  /** fetch aggregated fields from the table: "Account" */
  accounts_aggregate: Accounts_Aggregate
  /** fetch data from the table: "Atom" using primary key columns */
  atom?: Maybe<Atoms>
  /** fetch data from the table: "AtomValue" using primary key columns */
  atomValue?: Maybe<AtomValues>
  /** fetch data from the table: "AtomValue" */
  atomValues: Array<AtomValues>
  /** fetch aggregated fields from the table: "AtomValue" */
  atomValues_aggregate: AtomValues_Aggregate
  /** fetch data from the table: "Atom" */
  atoms: Array<Atoms>
  /** fetch aggregated fields from the table: "Atom" */
  atoms_aggregate: Atoms_Aggregate
  /** fetch data from the table: "Book" using primary key columns */
  book?: Maybe<Books>
  /** fetch data from the table: "Book" */
  books: Array<Books>
  /** fetch aggregated fields from the table: "Book" */
  books_aggregate: Books_Aggregate
  /** fetch data from the table: "ChainlinkPrice" using primary key columns */
  chainLinkPrice?: Maybe<ChainLinkPrices>
  /** fetch data from the table: "ChainlinkPrice" */
  chainLinkPrices: Array<ChainLinkPrices>
  /** fetch aggregated fields from the table: "ChainlinkPrice" */
  chainLinkPrices_aggregate: ChainLinkPrices_Aggregate
  /** fetch data from the table: "Deposit" using primary key columns */
  deposit?: Maybe<Deposits>
  /** An array relationship */
  deposits: Array<Deposits>
  /** An aggregate relationship */
  deposits_aggregate: Deposits_Aggregate
  /** fetch data from the table: "Event" using primary key columns */
  event?: Maybe<Events>
  /** fetch data from the table: "Event" */
  events: Array<Events>
  /** fetch aggregated fields from the table: "Event" */
  events_aggregate: Events_Aggregate
  /** fetch data from the table: "FeeTransfer" */
  feeTranfers: Array<FeeTranfers>
  /** fetch aggregated fields from the table: "FeeTransfer" */
  feeTranfers_aggregate: FeeTranfers_Aggregate
  /** fetch data from the table: "FeeTransfer" using primary key columns */
  feeTransfers?: Maybe<FeeTranfers>
  followers: Array<Follower>
  /** fetch data from the table: "Organization" using primary key columns */
  organization?: Maybe<Organizations>
  /** fetch data from the table: "Organization" */
  organizations: Array<Organizations>
  /** fetch aggregated fields from the table: "Organization" */
  organizations_aggregate: Organizations_Aggregate
  /** fetch data from the table: "Person" using primary key columns */
  person?: Maybe<Persons>
  /** fetch data from the table: "Person" */
  persons: Array<Persons>
  /** fetch aggregated fields from the table: "Person" */
  persons_aggregate: Persons_Aggregate
  /** fetch data from the table: "Position" using primary key columns */
  position?: Maybe<Positions>
  /** An array relationship */
  positions: Array<Positions>
  /** An aggregate relationship */
  positions_aggregate: Positions_Aggregate
  /** fetch data from the table: "Redemption" using primary key columns */
  redemption?: Maybe<Redemptions>
  /** An array relationship */
  redemptions: Array<Redemptions>
  /** An aggregate relationship */
  redemptions_aggregate: Redemptions_Aggregate
  /** fetch data from the table: "Signal" using primary key columns */
  signal?: Maybe<Signals>
  /** An array relationship */
  signals: Array<Signals>
  /** An aggregate relationship */
  signals_aggregate: Signals_Aggregate
  /** fetch data from the table: "Stats" using primary key columns */
  stat?: Maybe<Stats>
  /** fetch data from the table: "StatsHour" using primary key columns */
  statHour?: Maybe<StatHours>
  /** fetch data from the table: "StatsHour" */
  statHours: Array<StatHours>
  /** fetch aggregated fields from the table: "StatsHour" */
  statHours_aggregate: StatHours_Aggregate
  /** fetch data from the table: "Stats" */
  stats: Array<Stats>
  /** fetch aggregated fields from the table: "Stats" */
  stats_aggregate: Stats_Aggregate
  /** fetch data from the table: "Thing" using primary key columns */
  thing?: Maybe<Things>
  /** fetch data from the table: "Thing" */
  things: Array<Things>
  /** fetch aggregated fields from the table: "Thing" */
  things_aggregate: Things_Aggregate
  /** fetch data from the table: "Triple" using primary key columns */
  triple?: Maybe<Triples>
  /** fetch data from the table: "Triple" */
  triples: Array<Triples>
  /** fetch aggregated fields from the table: "Triple" */
  triples_aggregate: Triples_Aggregate
  /** fetch data from the table: "Vault" using primary key columns */
  vault?: Maybe<Vaults>
  /** fetch data from the table: "Vault" */
  vaults: Array<Vaults>
  /** fetch aggregated fields from the table: "Vault" */
  vaults_aggregate: Vaults_Aggregate
}

export type Query_RootAccountArgs = {
  id: Scalars['bytea']['input']
}

export type Query_RootAccountsArgs = {
  distinct_on?: InputMaybe<Array<Accounts_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Accounts_Order_By>>
  where?: InputMaybe<Accounts_Bool_Exp>
}

export type Query_RootAccounts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Accounts_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Accounts_Order_By>>
  where?: InputMaybe<Accounts_Bool_Exp>
}

export type Query_RootAtomArgs = {
  id: Scalars['numeric']['input']
}

export type Query_RootAtomValueArgs = {
  id: Scalars['numeric']['input']
}

export type Query_RootAtomValuesArgs = {
  distinct_on?: InputMaybe<Array<AtomValues_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<AtomValues_Order_By>>
  where?: InputMaybe<AtomValues_Bool_Exp>
}

export type Query_RootAtomValues_AggregateArgs = {
  distinct_on?: InputMaybe<Array<AtomValues_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<AtomValues_Order_By>>
  where?: InputMaybe<AtomValues_Bool_Exp>
}

export type Query_RootAtomsArgs = {
  distinct_on?: InputMaybe<Array<Atoms_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Atoms_Order_By>>
  where?: InputMaybe<Atoms_Bool_Exp>
}

export type Query_RootAtoms_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Atoms_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Atoms_Order_By>>
  where?: InputMaybe<Atoms_Bool_Exp>
}

export type Query_RootBookArgs = {
  id: Scalars['numeric']['input']
}

export type Query_RootBooksArgs = {
  distinct_on?: InputMaybe<Array<Books_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Books_Order_By>>
  where?: InputMaybe<Books_Bool_Exp>
}

export type Query_RootBooks_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Books_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Books_Order_By>>
  where?: InputMaybe<Books_Bool_Exp>
}

export type Query_RootChainLinkPriceArgs = {
  id: Scalars['numeric']['input']
}

export type Query_RootChainLinkPricesArgs = {
  distinct_on?: InputMaybe<Array<ChainLinkPrices_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<ChainLinkPrices_Order_By>>
  where?: InputMaybe<ChainLinkPrices_Bool_Exp>
}

export type Query_RootChainLinkPrices_AggregateArgs = {
  distinct_on?: InputMaybe<Array<ChainLinkPrices_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<ChainLinkPrices_Order_By>>
  where?: InputMaybe<ChainLinkPrices_Bool_Exp>
}

export type Query_RootDepositArgs = {
  id: Scalars['String']['input']
}

export type Query_RootDepositsArgs = {
  distinct_on?: InputMaybe<Array<Deposits_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Deposits_Order_By>>
  where?: InputMaybe<Deposits_Bool_Exp>
}

export type Query_RootDeposits_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Deposits_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Deposits_Order_By>>
  where?: InputMaybe<Deposits_Bool_Exp>
}

export type Query_RootEventArgs = {
  id: Scalars['String']['input']
}

export type Query_RootEventsArgs = {
  distinct_on?: InputMaybe<Array<Events_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Events_Order_By>>
  where?: InputMaybe<Events_Bool_Exp>
}

export type Query_RootEvents_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Events_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Events_Order_By>>
  where?: InputMaybe<Events_Bool_Exp>
}

export type Query_RootFeeTranfersArgs = {
  distinct_on?: InputMaybe<Array<FeeTranfers_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<FeeTranfers_Order_By>>
  where?: InputMaybe<FeeTranfers_Bool_Exp>
}

export type Query_RootFeeTranfers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<FeeTranfers_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<FeeTranfers_Order_By>>
  where?: InputMaybe<FeeTranfers_Bool_Exp>
}

export type Query_RootFeeTransfersArgs = {
  id: Scalars['String']['input']
}

export type Query_RootFollowersArgs = {
  account: Scalars['ID']['input']
}

export type Query_RootOrganizationArgs = {
  id: Scalars['numeric']['input']
}

export type Query_RootOrganizationsArgs = {
  distinct_on?: InputMaybe<Array<Organizations_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Organizations_Order_By>>
  where?: InputMaybe<Organizations_Bool_Exp>
}

export type Query_RootOrganizations_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Organizations_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Organizations_Order_By>>
  where?: InputMaybe<Organizations_Bool_Exp>
}

export type Query_RootPersonArgs = {
  id: Scalars['numeric']['input']
}

export type Query_RootPersonsArgs = {
  distinct_on?: InputMaybe<Array<Persons_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Persons_Order_By>>
  where?: InputMaybe<Persons_Bool_Exp>
}

export type Query_RootPersons_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Persons_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Persons_Order_By>>
  where?: InputMaybe<Persons_Bool_Exp>
}

export type Query_RootPositionArgs = {
  id: Scalars['String']['input']
}

export type Query_RootPositionsArgs = {
  distinct_on?: InputMaybe<Array<Positions_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Positions_Order_By>>
  where?: InputMaybe<Positions_Bool_Exp>
}

export type Query_RootPositions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Positions_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Positions_Order_By>>
  where?: InputMaybe<Positions_Bool_Exp>
}

export type Query_RootRedemptionArgs = {
  id: Scalars['String']['input']
}

export type Query_RootRedemptionsArgs = {
  distinct_on?: InputMaybe<Array<Redemptions_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Redemptions_Order_By>>
  where?: InputMaybe<Redemptions_Bool_Exp>
}

export type Query_RootRedemptions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Redemptions_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Redemptions_Order_By>>
  where?: InputMaybe<Redemptions_Bool_Exp>
}

export type Query_RootSignalArgs = {
  id: Scalars['String']['input']
}

export type Query_RootSignalsArgs = {
  distinct_on?: InputMaybe<Array<Signals_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Signals_Order_By>>
  where?: InputMaybe<Signals_Bool_Exp>
}

export type Query_RootSignals_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Signals_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Signals_Order_By>>
  where?: InputMaybe<Signals_Bool_Exp>
}

export type Query_RootStatArgs = {
  id: Scalars['Int']['input']
}

export type Query_RootStatHourArgs = {
  id: Scalars['Int']['input']
}

export type Query_RootStatHoursArgs = {
  distinct_on?: InputMaybe<Array<StatHours_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<StatHours_Order_By>>
  where?: InputMaybe<StatHours_Bool_Exp>
}

export type Query_RootStatHours_AggregateArgs = {
  distinct_on?: InputMaybe<Array<StatHours_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<StatHours_Order_By>>
  where?: InputMaybe<StatHours_Bool_Exp>
}

export type Query_RootStatsArgs = {
  distinct_on?: InputMaybe<Array<Stats_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Stats_Order_By>>
  where?: InputMaybe<Stats_Bool_Exp>
}

export type Query_RootStats_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Stats_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Stats_Order_By>>
  where?: InputMaybe<Stats_Bool_Exp>
}

export type Query_RootThingArgs = {
  id: Scalars['numeric']['input']
}

export type Query_RootThingsArgs = {
  distinct_on?: InputMaybe<Array<Things_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Things_Order_By>>
  where?: InputMaybe<Things_Bool_Exp>
}

export type Query_RootThings_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Things_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Things_Order_By>>
  where?: InputMaybe<Things_Bool_Exp>
}

export type Query_RootTripleArgs = {
  id: Scalars['numeric']['input']
}

export type Query_RootTriplesArgs = {
  distinct_on?: InputMaybe<Array<Triples_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Triples_Order_By>>
  where?: InputMaybe<Triples_Bool_Exp>
}

export type Query_RootTriples_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Triples_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Triples_Order_By>>
  where?: InputMaybe<Triples_Bool_Exp>
}

export type Query_RootVaultArgs = {
  id: Scalars['numeric']['input']
}

export type Query_RootVaultsArgs = {
  distinct_on?: InputMaybe<Array<Vaults_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Vaults_Order_By>>
  where?: InputMaybe<Vaults_Bool_Exp>
}

export type Query_RootVaults_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Vaults_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Vaults_Order_By>>
  where?: InputMaybe<Vaults_Bool_Exp>
}

/** columns and relationships of "Redemption" */
export type Redemptions = {
  __typename?: 'redemptions'
  assetsForReceiver: Scalars['numeric']['output']
  blockNumber: Scalars['numeric']['output']
  blockTimestamp: Scalars['numeric']['output']
  exitFee: Scalars['numeric']['output']
  id: Scalars['String']['output']
  /** An object relationship */
  receiver?: Maybe<Accounts>
  receiverId: Scalars['bytea']['output']
  /** An object relationship */
  sender?: Maybe<Accounts>
  senderId: Scalars['bytea']['output']
  senderTotalSharesInVault: Scalars['numeric']['output']
  sharesRedeemedBySender: Scalars['numeric']['output']
  transactionHash: Scalars['bytea']['output']
  /** An object relationship */
  vault?: Maybe<Vaults>
  vaultId: Scalars['numeric']['output']
}

/** aggregated selection of "Redemption" */
export type Redemptions_Aggregate = {
  __typename?: 'redemptions_aggregate'
  aggregate?: Maybe<Redemptions_Aggregate_Fields>
  nodes: Array<Redemptions>
}

export type Redemptions_Aggregate_Bool_Exp = {
  count?: InputMaybe<Redemptions_Aggregate_Bool_Exp_Count>
}

export type Redemptions_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Redemptions_Select_Column>>
  distinct?: InputMaybe<Scalars['Boolean']['input']>
  filter?: InputMaybe<Redemptions_Bool_Exp>
  predicate: Int_Comparison_Exp
}

/** aggregate fields of "Redemption" */
export type Redemptions_Aggregate_Fields = {
  __typename?: 'redemptions_aggregate_fields'
  avg?: Maybe<Redemptions_Avg_Fields>
  count: Scalars['Int']['output']
  max?: Maybe<Redemptions_Max_Fields>
  min?: Maybe<Redemptions_Min_Fields>
  stddev?: Maybe<Redemptions_Stddev_Fields>
  stddev_pop?: Maybe<Redemptions_Stddev_Pop_Fields>
  stddev_samp?: Maybe<Redemptions_Stddev_Samp_Fields>
  sum?: Maybe<Redemptions_Sum_Fields>
  var_pop?: Maybe<Redemptions_Var_Pop_Fields>
  var_samp?: Maybe<Redemptions_Var_Samp_Fields>
  variance?: Maybe<Redemptions_Variance_Fields>
}

/** aggregate fields of "Redemption" */
export type Redemptions_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Redemptions_Select_Column>>
  distinct?: InputMaybe<Scalars['Boolean']['input']>
}

/** order by aggregate values of table "Redemption" */
export type Redemptions_Aggregate_Order_By = {
  avg?: InputMaybe<Redemptions_Avg_Order_By>
  count?: InputMaybe<Order_By>
  max?: InputMaybe<Redemptions_Max_Order_By>
  min?: InputMaybe<Redemptions_Min_Order_By>
  stddev?: InputMaybe<Redemptions_Stddev_Order_By>
  stddev_pop?: InputMaybe<Redemptions_Stddev_Pop_Order_By>
  stddev_samp?: InputMaybe<Redemptions_Stddev_Samp_Order_By>
  sum?: InputMaybe<Redemptions_Sum_Order_By>
  var_pop?: InputMaybe<Redemptions_Var_Pop_Order_By>
  var_samp?: InputMaybe<Redemptions_Var_Samp_Order_By>
  variance?: InputMaybe<Redemptions_Variance_Order_By>
}

/** input type for inserting array relation for remote table "Redemption" */
export type Redemptions_Arr_Rel_Insert_Input = {
  data: Array<Redemptions_Insert_Input>
  /** upsert condition */
  on_conflict?: InputMaybe<Redemptions_On_Conflict>
}

/** aggregate avg on columns */
export type Redemptions_Avg_Fields = {
  __typename?: 'redemptions_avg_fields'
  assetsForReceiver?: Maybe<Scalars['Float']['output']>
  blockNumber?: Maybe<Scalars['Float']['output']>
  blockTimestamp?: Maybe<Scalars['Float']['output']>
  exitFee?: Maybe<Scalars['Float']['output']>
  senderTotalSharesInVault?: Maybe<Scalars['Float']['output']>
  sharesRedeemedBySender?: Maybe<Scalars['Float']['output']>
  vaultId?: Maybe<Scalars['Float']['output']>
}

/** order by avg() on columns of table "Redemption" */
export type Redemptions_Avg_Order_By = {
  assetsForReceiver?: InputMaybe<Order_By>
  blockNumber?: InputMaybe<Order_By>
  blockTimestamp?: InputMaybe<Order_By>
  exitFee?: InputMaybe<Order_By>
  senderTotalSharesInVault?: InputMaybe<Order_By>
  sharesRedeemedBySender?: InputMaybe<Order_By>
  vaultId?: InputMaybe<Order_By>
}

/** Boolean expression to filter rows from the table "Redemption". All fields are combined with a logical 'AND'. */
export type Redemptions_Bool_Exp = {
  _and?: InputMaybe<Array<Redemptions_Bool_Exp>>
  _not?: InputMaybe<Redemptions_Bool_Exp>
  _or?: InputMaybe<Array<Redemptions_Bool_Exp>>
  assetsForReceiver?: InputMaybe<Numeric_Comparison_Exp>
  blockNumber?: InputMaybe<Numeric_Comparison_Exp>
  blockTimestamp?: InputMaybe<Numeric_Comparison_Exp>
  exitFee?: InputMaybe<Numeric_Comparison_Exp>
  id?: InputMaybe<String_Comparison_Exp>
  receiver?: InputMaybe<Accounts_Bool_Exp>
  receiverId?: InputMaybe<Bytea_Comparison_Exp>
  sender?: InputMaybe<Accounts_Bool_Exp>
  senderId?: InputMaybe<Bytea_Comparison_Exp>
  senderTotalSharesInVault?: InputMaybe<Numeric_Comparison_Exp>
  sharesRedeemedBySender?: InputMaybe<Numeric_Comparison_Exp>
  transactionHash?: InputMaybe<Bytea_Comparison_Exp>
  vault?: InputMaybe<Vaults_Bool_Exp>
  vaultId?: InputMaybe<Numeric_Comparison_Exp>
}

/** unique or primary key constraints on table "Redemption" */
export enum Redemptions_Constraint {
  /** unique or primary key constraint on columns "id" */
  RedemptionPkey = 'Redemption_pkey',
}

/** input type for incrementing numeric columns in table "Redemption" */
export type Redemptions_Inc_Input = {
  assetsForReceiver?: InputMaybe<Scalars['numeric']['input']>
  blockNumber?: InputMaybe<Scalars['numeric']['input']>
  blockTimestamp?: InputMaybe<Scalars['numeric']['input']>
  exitFee?: InputMaybe<Scalars['numeric']['input']>
  senderTotalSharesInVault?: InputMaybe<Scalars['numeric']['input']>
  sharesRedeemedBySender?: InputMaybe<Scalars['numeric']['input']>
  vaultId?: InputMaybe<Scalars['numeric']['input']>
}

/** input type for inserting data into table "Redemption" */
export type Redemptions_Insert_Input = {
  assetsForReceiver?: InputMaybe<Scalars['numeric']['input']>
  blockNumber?: InputMaybe<Scalars['numeric']['input']>
  blockTimestamp?: InputMaybe<Scalars['numeric']['input']>
  exitFee?: InputMaybe<Scalars['numeric']['input']>
  id?: InputMaybe<Scalars['String']['input']>
  receiver?: InputMaybe<Accounts_Obj_Rel_Insert_Input>
  receiverId?: InputMaybe<Scalars['bytea']['input']>
  sender?: InputMaybe<Accounts_Obj_Rel_Insert_Input>
  senderId?: InputMaybe<Scalars['bytea']['input']>
  senderTotalSharesInVault?: InputMaybe<Scalars['numeric']['input']>
  sharesRedeemedBySender?: InputMaybe<Scalars['numeric']['input']>
  transactionHash?: InputMaybe<Scalars['bytea']['input']>
  vault?: InputMaybe<Vaults_Obj_Rel_Insert_Input>
  vaultId?: InputMaybe<Scalars['numeric']['input']>
}

/** aggregate max on columns */
export type Redemptions_Max_Fields = {
  __typename?: 'redemptions_max_fields'
  assetsForReceiver?: Maybe<Scalars['numeric']['output']>
  blockNumber?: Maybe<Scalars['numeric']['output']>
  blockTimestamp?: Maybe<Scalars['numeric']['output']>
  exitFee?: Maybe<Scalars['numeric']['output']>
  id?: Maybe<Scalars['String']['output']>
  senderTotalSharesInVault?: Maybe<Scalars['numeric']['output']>
  sharesRedeemedBySender?: Maybe<Scalars['numeric']['output']>
  vaultId?: Maybe<Scalars['numeric']['output']>
}

/** order by max() on columns of table "Redemption" */
export type Redemptions_Max_Order_By = {
  assetsForReceiver?: InputMaybe<Order_By>
  blockNumber?: InputMaybe<Order_By>
  blockTimestamp?: InputMaybe<Order_By>
  exitFee?: InputMaybe<Order_By>
  id?: InputMaybe<Order_By>
  senderTotalSharesInVault?: InputMaybe<Order_By>
  sharesRedeemedBySender?: InputMaybe<Order_By>
  vaultId?: InputMaybe<Order_By>
}

/** aggregate min on columns */
export type Redemptions_Min_Fields = {
  __typename?: 'redemptions_min_fields'
  assetsForReceiver?: Maybe<Scalars['numeric']['output']>
  blockNumber?: Maybe<Scalars['numeric']['output']>
  blockTimestamp?: Maybe<Scalars['numeric']['output']>
  exitFee?: Maybe<Scalars['numeric']['output']>
  id?: Maybe<Scalars['String']['output']>
  senderTotalSharesInVault?: Maybe<Scalars['numeric']['output']>
  sharesRedeemedBySender?: Maybe<Scalars['numeric']['output']>
  vaultId?: Maybe<Scalars['numeric']['output']>
}

/** order by min() on columns of table "Redemption" */
export type Redemptions_Min_Order_By = {
  assetsForReceiver?: InputMaybe<Order_By>
  blockNumber?: InputMaybe<Order_By>
  blockTimestamp?: InputMaybe<Order_By>
  exitFee?: InputMaybe<Order_By>
  id?: InputMaybe<Order_By>
  senderTotalSharesInVault?: InputMaybe<Order_By>
  sharesRedeemedBySender?: InputMaybe<Order_By>
  vaultId?: InputMaybe<Order_By>
}

/** response of any mutation on the table "Redemption" */
export type Redemptions_Mutation_Response = {
  __typename?: 'redemptions_mutation_response'
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output']
  /** data from the rows affected by the mutation */
  returning: Array<Redemptions>
}

/** input type for inserting object relation for remote table "Redemption" */
export type Redemptions_Obj_Rel_Insert_Input = {
  data: Redemptions_Insert_Input
  /** upsert condition */
  on_conflict?: InputMaybe<Redemptions_On_Conflict>
}

/** on_conflict condition type for table "Redemption" */
export type Redemptions_On_Conflict = {
  constraint: Redemptions_Constraint
  update_columns?: Array<Redemptions_Update_Column>
  where?: InputMaybe<Redemptions_Bool_Exp>
}

/** Ordering options when selecting data from "Redemption". */
export type Redemptions_Order_By = {
  assetsForReceiver?: InputMaybe<Order_By>
  blockNumber?: InputMaybe<Order_By>
  blockTimestamp?: InputMaybe<Order_By>
  exitFee?: InputMaybe<Order_By>
  id?: InputMaybe<Order_By>
  receiver?: InputMaybe<Accounts_Order_By>
  receiverId?: InputMaybe<Order_By>
  sender?: InputMaybe<Accounts_Order_By>
  senderId?: InputMaybe<Order_By>
  senderTotalSharesInVault?: InputMaybe<Order_By>
  sharesRedeemedBySender?: InputMaybe<Order_By>
  transactionHash?: InputMaybe<Order_By>
  vault?: InputMaybe<Vaults_Order_By>
  vaultId?: InputMaybe<Order_By>
}

/** primary key columns input for table: Redemption */
export type Redemptions_Pk_Columns_Input = {
  id: Scalars['String']['input']
}

/** select columns of table "Redemption" */
export enum Redemptions_Select_Column {
  /** column name */
  AssetsForReceiver = 'assetsForReceiver',
  /** column name */
  BlockNumber = 'blockNumber',
  /** column name */
  BlockTimestamp = 'blockTimestamp',
  /** column name */
  ExitFee = 'exitFee',
  /** column name */
  Id = 'id',
  /** column name */
  ReceiverId = 'receiverId',
  /** column name */
  SenderId = 'senderId',
  /** column name */
  SenderTotalSharesInVault = 'senderTotalSharesInVault',
  /** column name */
  SharesRedeemedBySender = 'sharesRedeemedBySender',
  /** column name */
  TransactionHash = 'transactionHash',
  /** column name */
  VaultId = 'vaultId',
}

/** input type for updating data in table "Redemption" */
export type Redemptions_Set_Input = {
  assetsForReceiver?: InputMaybe<Scalars['numeric']['input']>
  blockNumber?: InputMaybe<Scalars['numeric']['input']>
  blockTimestamp?: InputMaybe<Scalars['numeric']['input']>
  exitFee?: InputMaybe<Scalars['numeric']['input']>
  id?: InputMaybe<Scalars['String']['input']>
  receiverId?: InputMaybe<Scalars['bytea']['input']>
  senderId?: InputMaybe<Scalars['bytea']['input']>
  senderTotalSharesInVault?: InputMaybe<Scalars['numeric']['input']>
  sharesRedeemedBySender?: InputMaybe<Scalars['numeric']['input']>
  transactionHash?: InputMaybe<Scalars['bytea']['input']>
  vaultId?: InputMaybe<Scalars['numeric']['input']>
}

/** aggregate stddev on columns */
export type Redemptions_Stddev_Fields = {
  __typename?: 'redemptions_stddev_fields'
  assetsForReceiver?: Maybe<Scalars['Float']['output']>
  blockNumber?: Maybe<Scalars['Float']['output']>
  blockTimestamp?: Maybe<Scalars['Float']['output']>
  exitFee?: Maybe<Scalars['Float']['output']>
  senderTotalSharesInVault?: Maybe<Scalars['Float']['output']>
  sharesRedeemedBySender?: Maybe<Scalars['Float']['output']>
  vaultId?: Maybe<Scalars['Float']['output']>
}

/** order by stddev() on columns of table "Redemption" */
export type Redemptions_Stddev_Order_By = {
  assetsForReceiver?: InputMaybe<Order_By>
  blockNumber?: InputMaybe<Order_By>
  blockTimestamp?: InputMaybe<Order_By>
  exitFee?: InputMaybe<Order_By>
  senderTotalSharesInVault?: InputMaybe<Order_By>
  sharesRedeemedBySender?: InputMaybe<Order_By>
  vaultId?: InputMaybe<Order_By>
}

/** aggregate stddev_pop on columns */
export type Redemptions_Stddev_Pop_Fields = {
  __typename?: 'redemptions_stddev_pop_fields'
  assetsForReceiver?: Maybe<Scalars['Float']['output']>
  blockNumber?: Maybe<Scalars['Float']['output']>
  blockTimestamp?: Maybe<Scalars['Float']['output']>
  exitFee?: Maybe<Scalars['Float']['output']>
  senderTotalSharesInVault?: Maybe<Scalars['Float']['output']>
  sharesRedeemedBySender?: Maybe<Scalars['Float']['output']>
  vaultId?: Maybe<Scalars['Float']['output']>
}

/** order by stddev_pop() on columns of table "Redemption" */
export type Redemptions_Stddev_Pop_Order_By = {
  assetsForReceiver?: InputMaybe<Order_By>
  blockNumber?: InputMaybe<Order_By>
  blockTimestamp?: InputMaybe<Order_By>
  exitFee?: InputMaybe<Order_By>
  senderTotalSharesInVault?: InputMaybe<Order_By>
  sharesRedeemedBySender?: InputMaybe<Order_By>
  vaultId?: InputMaybe<Order_By>
}

/** aggregate stddev_samp on columns */
export type Redemptions_Stddev_Samp_Fields = {
  __typename?: 'redemptions_stddev_samp_fields'
  assetsForReceiver?: Maybe<Scalars['Float']['output']>
  blockNumber?: Maybe<Scalars['Float']['output']>
  blockTimestamp?: Maybe<Scalars['Float']['output']>
  exitFee?: Maybe<Scalars['Float']['output']>
  senderTotalSharesInVault?: Maybe<Scalars['Float']['output']>
  sharesRedeemedBySender?: Maybe<Scalars['Float']['output']>
  vaultId?: Maybe<Scalars['Float']['output']>
}

/** order by stddev_samp() on columns of table "Redemption" */
export type Redemptions_Stddev_Samp_Order_By = {
  assetsForReceiver?: InputMaybe<Order_By>
  blockNumber?: InputMaybe<Order_By>
  blockTimestamp?: InputMaybe<Order_By>
  exitFee?: InputMaybe<Order_By>
  senderTotalSharesInVault?: InputMaybe<Order_By>
  sharesRedeemedBySender?: InputMaybe<Order_By>
  vaultId?: InputMaybe<Order_By>
}

/** Streaming cursor of the table "redemptions" */
export type Redemptions_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Redemptions_Stream_Cursor_Value_Input
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>
}

/** Initial value of the column from where the streaming should start */
export type Redemptions_Stream_Cursor_Value_Input = {
  assetsForReceiver?: InputMaybe<Scalars['numeric']['input']>
  blockNumber?: InputMaybe<Scalars['numeric']['input']>
  blockTimestamp?: InputMaybe<Scalars['numeric']['input']>
  exitFee?: InputMaybe<Scalars['numeric']['input']>
  id?: InputMaybe<Scalars['String']['input']>
  receiverId?: InputMaybe<Scalars['bytea']['input']>
  senderId?: InputMaybe<Scalars['bytea']['input']>
  senderTotalSharesInVault?: InputMaybe<Scalars['numeric']['input']>
  sharesRedeemedBySender?: InputMaybe<Scalars['numeric']['input']>
  transactionHash?: InputMaybe<Scalars['bytea']['input']>
  vaultId?: InputMaybe<Scalars['numeric']['input']>
}

/** aggregate sum on columns */
export type Redemptions_Sum_Fields = {
  __typename?: 'redemptions_sum_fields'
  assetsForReceiver?: Maybe<Scalars['numeric']['output']>
  blockNumber?: Maybe<Scalars['numeric']['output']>
  blockTimestamp?: Maybe<Scalars['numeric']['output']>
  exitFee?: Maybe<Scalars['numeric']['output']>
  senderTotalSharesInVault?: Maybe<Scalars['numeric']['output']>
  sharesRedeemedBySender?: Maybe<Scalars['numeric']['output']>
  vaultId?: Maybe<Scalars['numeric']['output']>
}

/** order by sum() on columns of table "Redemption" */
export type Redemptions_Sum_Order_By = {
  assetsForReceiver?: InputMaybe<Order_By>
  blockNumber?: InputMaybe<Order_By>
  blockTimestamp?: InputMaybe<Order_By>
  exitFee?: InputMaybe<Order_By>
  senderTotalSharesInVault?: InputMaybe<Order_By>
  sharesRedeemedBySender?: InputMaybe<Order_By>
  vaultId?: InputMaybe<Order_By>
}

/** update columns of table "Redemption" */
export enum Redemptions_Update_Column {
  /** column name */
  AssetsForReceiver = 'assetsForReceiver',
  /** column name */
  BlockNumber = 'blockNumber',
  /** column name */
  BlockTimestamp = 'blockTimestamp',
  /** column name */
  ExitFee = 'exitFee',
  /** column name */
  Id = 'id',
  /** column name */
  ReceiverId = 'receiverId',
  /** column name */
  SenderId = 'senderId',
  /** column name */
  SenderTotalSharesInVault = 'senderTotalSharesInVault',
  /** column name */
  SharesRedeemedBySender = 'sharesRedeemedBySender',
  /** column name */
  TransactionHash = 'transactionHash',
  /** column name */
  VaultId = 'vaultId',
}

export type Redemptions_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Redemptions_Inc_Input>
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Redemptions_Set_Input>
  /** filter the rows which have to be updated */
  where: Redemptions_Bool_Exp
}

/** aggregate var_pop on columns */
export type Redemptions_Var_Pop_Fields = {
  __typename?: 'redemptions_var_pop_fields'
  assetsForReceiver?: Maybe<Scalars['Float']['output']>
  blockNumber?: Maybe<Scalars['Float']['output']>
  blockTimestamp?: Maybe<Scalars['Float']['output']>
  exitFee?: Maybe<Scalars['Float']['output']>
  senderTotalSharesInVault?: Maybe<Scalars['Float']['output']>
  sharesRedeemedBySender?: Maybe<Scalars['Float']['output']>
  vaultId?: Maybe<Scalars['Float']['output']>
}

/** order by var_pop() on columns of table "Redemption" */
export type Redemptions_Var_Pop_Order_By = {
  assetsForReceiver?: InputMaybe<Order_By>
  blockNumber?: InputMaybe<Order_By>
  blockTimestamp?: InputMaybe<Order_By>
  exitFee?: InputMaybe<Order_By>
  senderTotalSharesInVault?: InputMaybe<Order_By>
  sharesRedeemedBySender?: InputMaybe<Order_By>
  vaultId?: InputMaybe<Order_By>
}

/** aggregate var_samp on columns */
export type Redemptions_Var_Samp_Fields = {
  __typename?: 'redemptions_var_samp_fields'
  assetsForReceiver?: Maybe<Scalars['Float']['output']>
  blockNumber?: Maybe<Scalars['Float']['output']>
  blockTimestamp?: Maybe<Scalars['Float']['output']>
  exitFee?: Maybe<Scalars['Float']['output']>
  senderTotalSharesInVault?: Maybe<Scalars['Float']['output']>
  sharesRedeemedBySender?: Maybe<Scalars['Float']['output']>
  vaultId?: Maybe<Scalars['Float']['output']>
}

/** order by var_samp() on columns of table "Redemption" */
export type Redemptions_Var_Samp_Order_By = {
  assetsForReceiver?: InputMaybe<Order_By>
  blockNumber?: InputMaybe<Order_By>
  blockTimestamp?: InputMaybe<Order_By>
  exitFee?: InputMaybe<Order_By>
  senderTotalSharesInVault?: InputMaybe<Order_By>
  sharesRedeemedBySender?: InputMaybe<Order_By>
  vaultId?: InputMaybe<Order_By>
}

/** aggregate variance on columns */
export type Redemptions_Variance_Fields = {
  __typename?: 'redemptions_variance_fields'
  assetsForReceiver?: Maybe<Scalars['Float']['output']>
  blockNumber?: Maybe<Scalars['Float']['output']>
  blockTimestamp?: Maybe<Scalars['Float']['output']>
  exitFee?: Maybe<Scalars['Float']['output']>
  senderTotalSharesInVault?: Maybe<Scalars['Float']['output']>
  sharesRedeemedBySender?: Maybe<Scalars['Float']['output']>
  vaultId?: Maybe<Scalars['Float']['output']>
}

/** order by variance() on columns of table "Redemption" */
export type Redemptions_Variance_Order_By = {
  assetsForReceiver?: InputMaybe<Order_By>
  blockNumber?: InputMaybe<Order_By>
  blockTimestamp?: InputMaybe<Order_By>
  exitFee?: InputMaybe<Order_By>
  senderTotalSharesInVault?: InputMaybe<Order_By>
  sharesRedeemedBySender?: InputMaybe<Order_By>
  vaultId?: InputMaybe<Order_By>
}

/** columns and relationships of "Signal" */
export type Signals = {
  __typename?: 'signals'
  /** An object relationship */
  account?: Maybe<Accounts>
  accountId: Scalars['bytea']['output']
  /** An object relationship */
  atom?: Maybe<Atoms>
  atomId?: Maybe<Scalars['numeric']['output']>
  blockNumber: Scalars['numeric']['output']
  blockTimestamp: Scalars['numeric']['output']
  delta: Scalars['numeric']['output']
  /** An object relationship */
  deposit?: Maybe<Deposits>
  depositId?: Maybe<Scalars['String']['output']>
  id: Scalars['String']['output']
  /** An object relationship */
  redemption?: Maybe<Redemptions>
  redemptionId?: Maybe<Scalars['String']['output']>
  relativeStrength: Scalars['numeric']['output']
  transactionHash: Scalars['bytea']['output']
  /** An object relationship */
  triple?: Maybe<Triples>
  tripleId?: Maybe<Scalars['numeric']['output']>
}

/** aggregated selection of "Signal" */
export type Signals_Aggregate = {
  __typename?: 'signals_aggregate'
  aggregate?: Maybe<Signals_Aggregate_Fields>
  nodes: Array<Signals>
}

export type Signals_Aggregate_Bool_Exp = {
  count?: InputMaybe<Signals_Aggregate_Bool_Exp_Count>
}

export type Signals_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Signals_Select_Column>>
  distinct?: InputMaybe<Scalars['Boolean']['input']>
  filter?: InputMaybe<Signals_Bool_Exp>
  predicate: Int_Comparison_Exp
}

/** aggregate fields of "Signal" */
export type Signals_Aggregate_Fields = {
  __typename?: 'signals_aggregate_fields'
  avg?: Maybe<Signals_Avg_Fields>
  count: Scalars['Int']['output']
  max?: Maybe<Signals_Max_Fields>
  min?: Maybe<Signals_Min_Fields>
  stddev?: Maybe<Signals_Stddev_Fields>
  stddev_pop?: Maybe<Signals_Stddev_Pop_Fields>
  stddev_samp?: Maybe<Signals_Stddev_Samp_Fields>
  sum?: Maybe<Signals_Sum_Fields>
  var_pop?: Maybe<Signals_Var_Pop_Fields>
  var_samp?: Maybe<Signals_Var_Samp_Fields>
  variance?: Maybe<Signals_Variance_Fields>
}

/** aggregate fields of "Signal" */
export type Signals_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Signals_Select_Column>>
  distinct?: InputMaybe<Scalars['Boolean']['input']>
}

/** order by aggregate values of table "Signal" */
export type Signals_Aggregate_Order_By = {
  avg?: InputMaybe<Signals_Avg_Order_By>
  count?: InputMaybe<Order_By>
  max?: InputMaybe<Signals_Max_Order_By>
  min?: InputMaybe<Signals_Min_Order_By>
  stddev?: InputMaybe<Signals_Stddev_Order_By>
  stddev_pop?: InputMaybe<Signals_Stddev_Pop_Order_By>
  stddev_samp?: InputMaybe<Signals_Stddev_Samp_Order_By>
  sum?: InputMaybe<Signals_Sum_Order_By>
  var_pop?: InputMaybe<Signals_Var_Pop_Order_By>
  var_samp?: InputMaybe<Signals_Var_Samp_Order_By>
  variance?: InputMaybe<Signals_Variance_Order_By>
}

/** input type for inserting array relation for remote table "Signal" */
export type Signals_Arr_Rel_Insert_Input = {
  data: Array<Signals_Insert_Input>
  /** upsert condition */
  on_conflict?: InputMaybe<Signals_On_Conflict>
}

/** aggregate avg on columns */
export type Signals_Avg_Fields = {
  __typename?: 'signals_avg_fields'
  atomId?: Maybe<Scalars['Float']['output']>
  blockNumber?: Maybe<Scalars['Float']['output']>
  blockTimestamp?: Maybe<Scalars['Float']['output']>
  delta?: Maybe<Scalars['Float']['output']>
  relativeStrength?: Maybe<Scalars['Float']['output']>
  tripleId?: Maybe<Scalars['Float']['output']>
}

/** order by avg() on columns of table "Signal" */
export type Signals_Avg_Order_By = {
  atomId?: InputMaybe<Order_By>
  blockNumber?: InputMaybe<Order_By>
  blockTimestamp?: InputMaybe<Order_By>
  delta?: InputMaybe<Order_By>
  relativeStrength?: InputMaybe<Order_By>
  tripleId?: InputMaybe<Order_By>
}

/** Boolean expression to filter rows from the table "Signal". All fields are combined with a logical 'AND'. */
export type Signals_Bool_Exp = {
  _and?: InputMaybe<Array<Signals_Bool_Exp>>
  _not?: InputMaybe<Signals_Bool_Exp>
  _or?: InputMaybe<Array<Signals_Bool_Exp>>
  account?: InputMaybe<Accounts_Bool_Exp>
  accountId?: InputMaybe<Bytea_Comparison_Exp>
  atom?: InputMaybe<Atoms_Bool_Exp>
  atomId?: InputMaybe<Numeric_Comparison_Exp>
  blockNumber?: InputMaybe<Numeric_Comparison_Exp>
  blockTimestamp?: InputMaybe<Numeric_Comparison_Exp>
  delta?: InputMaybe<Numeric_Comparison_Exp>
  deposit?: InputMaybe<Deposits_Bool_Exp>
  depositId?: InputMaybe<String_Comparison_Exp>
  id?: InputMaybe<String_Comparison_Exp>
  redemption?: InputMaybe<Redemptions_Bool_Exp>
  redemptionId?: InputMaybe<String_Comparison_Exp>
  relativeStrength?: InputMaybe<Numeric_Comparison_Exp>
  transactionHash?: InputMaybe<Bytea_Comparison_Exp>
  triple?: InputMaybe<Triples_Bool_Exp>
  tripleId?: InputMaybe<Numeric_Comparison_Exp>
}

/** unique or primary key constraints on table "Signal" */
export enum Signals_Constraint {
  /** unique or primary key constraint on columns "id" */
  SignalPkey = 'Signal_pkey',
}

/** input type for incrementing numeric columns in table "Signal" */
export type Signals_Inc_Input = {
  atomId?: InputMaybe<Scalars['numeric']['input']>
  blockNumber?: InputMaybe<Scalars['numeric']['input']>
  blockTimestamp?: InputMaybe<Scalars['numeric']['input']>
  delta?: InputMaybe<Scalars['numeric']['input']>
  relativeStrength?: InputMaybe<Scalars['numeric']['input']>
  tripleId?: InputMaybe<Scalars['numeric']['input']>
}

/** input type for inserting data into table "Signal" */
export type Signals_Insert_Input = {
  account?: InputMaybe<Accounts_Obj_Rel_Insert_Input>
  accountId?: InputMaybe<Scalars['bytea']['input']>
  atom?: InputMaybe<Atoms_Obj_Rel_Insert_Input>
  atomId?: InputMaybe<Scalars['numeric']['input']>
  blockNumber?: InputMaybe<Scalars['numeric']['input']>
  blockTimestamp?: InputMaybe<Scalars['numeric']['input']>
  delta?: InputMaybe<Scalars['numeric']['input']>
  deposit?: InputMaybe<Deposits_Obj_Rel_Insert_Input>
  depositId?: InputMaybe<Scalars['String']['input']>
  id?: InputMaybe<Scalars['String']['input']>
  redemption?: InputMaybe<Redemptions_Obj_Rel_Insert_Input>
  redemptionId?: InputMaybe<Scalars['String']['input']>
  relativeStrength?: InputMaybe<Scalars['numeric']['input']>
  transactionHash?: InputMaybe<Scalars['bytea']['input']>
  triple?: InputMaybe<Triples_Obj_Rel_Insert_Input>
  tripleId?: InputMaybe<Scalars['numeric']['input']>
}

/** aggregate max on columns */
export type Signals_Max_Fields = {
  __typename?: 'signals_max_fields'
  atomId?: Maybe<Scalars['numeric']['output']>
  blockNumber?: Maybe<Scalars['numeric']['output']>
  blockTimestamp?: Maybe<Scalars['numeric']['output']>
  delta?: Maybe<Scalars['numeric']['output']>
  depositId?: Maybe<Scalars['String']['output']>
  id?: Maybe<Scalars['String']['output']>
  redemptionId?: Maybe<Scalars['String']['output']>
  relativeStrength?: Maybe<Scalars['numeric']['output']>
  tripleId?: Maybe<Scalars['numeric']['output']>
}

/** order by max() on columns of table "Signal" */
export type Signals_Max_Order_By = {
  atomId?: InputMaybe<Order_By>
  blockNumber?: InputMaybe<Order_By>
  blockTimestamp?: InputMaybe<Order_By>
  delta?: InputMaybe<Order_By>
  depositId?: InputMaybe<Order_By>
  id?: InputMaybe<Order_By>
  redemptionId?: InputMaybe<Order_By>
  relativeStrength?: InputMaybe<Order_By>
  tripleId?: InputMaybe<Order_By>
}

/** aggregate min on columns */
export type Signals_Min_Fields = {
  __typename?: 'signals_min_fields'
  atomId?: Maybe<Scalars['numeric']['output']>
  blockNumber?: Maybe<Scalars['numeric']['output']>
  blockTimestamp?: Maybe<Scalars['numeric']['output']>
  delta?: Maybe<Scalars['numeric']['output']>
  depositId?: Maybe<Scalars['String']['output']>
  id?: Maybe<Scalars['String']['output']>
  redemptionId?: Maybe<Scalars['String']['output']>
  relativeStrength?: Maybe<Scalars['numeric']['output']>
  tripleId?: Maybe<Scalars['numeric']['output']>
}

/** order by min() on columns of table "Signal" */
export type Signals_Min_Order_By = {
  atomId?: InputMaybe<Order_By>
  blockNumber?: InputMaybe<Order_By>
  blockTimestamp?: InputMaybe<Order_By>
  delta?: InputMaybe<Order_By>
  depositId?: InputMaybe<Order_By>
  id?: InputMaybe<Order_By>
  redemptionId?: InputMaybe<Order_By>
  relativeStrength?: InputMaybe<Order_By>
  tripleId?: InputMaybe<Order_By>
}

/** response of any mutation on the table "Signal" */
export type Signals_Mutation_Response = {
  __typename?: 'signals_mutation_response'
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output']
  /** data from the rows affected by the mutation */
  returning: Array<Signals>
}

/** on_conflict condition type for table "Signal" */
export type Signals_On_Conflict = {
  constraint: Signals_Constraint
  update_columns?: Array<Signals_Update_Column>
  where?: InputMaybe<Signals_Bool_Exp>
}

/** Ordering options when selecting data from "Signal". */
export type Signals_Order_By = {
  account?: InputMaybe<Accounts_Order_By>
  accountId?: InputMaybe<Order_By>
  atom?: InputMaybe<Atoms_Order_By>
  atomId?: InputMaybe<Order_By>
  blockNumber?: InputMaybe<Order_By>
  blockTimestamp?: InputMaybe<Order_By>
  delta?: InputMaybe<Order_By>
  deposit?: InputMaybe<Deposits_Order_By>
  depositId?: InputMaybe<Order_By>
  id?: InputMaybe<Order_By>
  redemption?: InputMaybe<Redemptions_Order_By>
  redemptionId?: InputMaybe<Order_By>
  relativeStrength?: InputMaybe<Order_By>
  transactionHash?: InputMaybe<Order_By>
  triple?: InputMaybe<Triples_Order_By>
  tripleId?: InputMaybe<Order_By>
}

/** primary key columns input for table: Signal */
export type Signals_Pk_Columns_Input = {
  id: Scalars['String']['input']
}

/** select columns of table "Signal" */
export enum Signals_Select_Column {
  /** column name */
  AccountId = 'accountId',
  /** column name */
  AtomId = 'atomId',
  /** column name */
  BlockNumber = 'blockNumber',
  /** column name */
  BlockTimestamp = 'blockTimestamp',
  /** column name */
  Delta = 'delta',
  /** column name */
  DepositId = 'depositId',
  /** column name */
  Id = 'id',
  /** column name */
  RedemptionId = 'redemptionId',
  /** column name */
  RelativeStrength = 'relativeStrength',
  /** column name */
  TransactionHash = 'transactionHash',
  /** column name */
  TripleId = 'tripleId',
}

/** input type for updating data in table "Signal" */
export type Signals_Set_Input = {
  accountId?: InputMaybe<Scalars['bytea']['input']>
  atomId?: InputMaybe<Scalars['numeric']['input']>
  blockNumber?: InputMaybe<Scalars['numeric']['input']>
  blockTimestamp?: InputMaybe<Scalars['numeric']['input']>
  delta?: InputMaybe<Scalars['numeric']['input']>
  depositId?: InputMaybe<Scalars['String']['input']>
  id?: InputMaybe<Scalars['String']['input']>
  redemptionId?: InputMaybe<Scalars['String']['input']>
  relativeStrength?: InputMaybe<Scalars['numeric']['input']>
  transactionHash?: InputMaybe<Scalars['bytea']['input']>
  tripleId?: InputMaybe<Scalars['numeric']['input']>
}

/** aggregate stddev on columns */
export type Signals_Stddev_Fields = {
  __typename?: 'signals_stddev_fields'
  atomId?: Maybe<Scalars['Float']['output']>
  blockNumber?: Maybe<Scalars['Float']['output']>
  blockTimestamp?: Maybe<Scalars['Float']['output']>
  delta?: Maybe<Scalars['Float']['output']>
  relativeStrength?: Maybe<Scalars['Float']['output']>
  tripleId?: Maybe<Scalars['Float']['output']>
}

/** order by stddev() on columns of table "Signal" */
export type Signals_Stddev_Order_By = {
  atomId?: InputMaybe<Order_By>
  blockNumber?: InputMaybe<Order_By>
  blockTimestamp?: InputMaybe<Order_By>
  delta?: InputMaybe<Order_By>
  relativeStrength?: InputMaybe<Order_By>
  tripleId?: InputMaybe<Order_By>
}

/** aggregate stddev_pop on columns */
export type Signals_Stddev_Pop_Fields = {
  __typename?: 'signals_stddev_pop_fields'
  atomId?: Maybe<Scalars['Float']['output']>
  blockNumber?: Maybe<Scalars['Float']['output']>
  blockTimestamp?: Maybe<Scalars['Float']['output']>
  delta?: Maybe<Scalars['Float']['output']>
  relativeStrength?: Maybe<Scalars['Float']['output']>
  tripleId?: Maybe<Scalars['Float']['output']>
}

/** order by stddev_pop() on columns of table "Signal" */
export type Signals_Stddev_Pop_Order_By = {
  atomId?: InputMaybe<Order_By>
  blockNumber?: InputMaybe<Order_By>
  blockTimestamp?: InputMaybe<Order_By>
  delta?: InputMaybe<Order_By>
  relativeStrength?: InputMaybe<Order_By>
  tripleId?: InputMaybe<Order_By>
}

/** aggregate stddev_samp on columns */
export type Signals_Stddev_Samp_Fields = {
  __typename?: 'signals_stddev_samp_fields'
  atomId?: Maybe<Scalars['Float']['output']>
  blockNumber?: Maybe<Scalars['Float']['output']>
  blockTimestamp?: Maybe<Scalars['Float']['output']>
  delta?: Maybe<Scalars['Float']['output']>
  relativeStrength?: Maybe<Scalars['Float']['output']>
  tripleId?: Maybe<Scalars['Float']['output']>
}

/** order by stddev_samp() on columns of table "Signal" */
export type Signals_Stddev_Samp_Order_By = {
  atomId?: InputMaybe<Order_By>
  blockNumber?: InputMaybe<Order_By>
  blockTimestamp?: InputMaybe<Order_By>
  delta?: InputMaybe<Order_By>
  relativeStrength?: InputMaybe<Order_By>
  tripleId?: InputMaybe<Order_By>
}

/** Streaming cursor of the table "signals" */
export type Signals_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Signals_Stream_Cursor_Value_Input
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>
}

/** Initial value of the column from where the streaming should start */
export type Signals_Stream_Cursor_Value_Input = {
  accountId?: InputMaybe<Scalars['bytea']['input']>
  atomId?: InputMaybe<Scalars['numeric']['input']>
  blockNumber?: InputMaybe<Scalars['numeric']['input']>
  blockTimestamp?: InputMaybe<Scalars['numeric']['input']>
  delta?: InputMaybe<Scalars['numeric']['input']>
  depositId?: InputMaybe<Scalars['String']['input']>
  id?: InputMaybe<Scalars['String']['input']>
  redemptionId?: InputMaybe<Scalars['String']['input']>
  relativeStrength?: InputMaybe<Scalars['numeric']['input']>
  transactionHash?: InputMaybe<Scalars['bytea']['input']>
  tripleId?: InputMaybe<Scalars['numeric']['input']>
}

/** aggregate sum on columns */
export type Signals_Sum_Fields = {
  __typename?: 'signals_sum_fields'
  atomId?: Maybe<Scalars['numeric']['output']>
  blockNumber?: Maybe<Scalars['numeric']['output']>
  blockTimestamp?: Maybe<Scalars['numeric']['output']>
  delta?: Maybe<Scalars['numeric']['output']>
  relativeStrength?: Maybe<Scalars['numeric']['output']>
  tripleId?: Maybe<Scalars['numeric']['output']>
}

/** order by sum() on columns of table "Signal" */
export type Signals_Sum_Order_By = {
  atomId?: InputMaybe<Order_By>
  blockNumber?: InputMaybe<Order_By>
  blockTimestamp?: InputMaybe<Order_By>
  delta?: InputMaybe<Order_By>
  relativeStrength?: InputMaybe<Order_By>
  tripleId?: InputMaybe<Order_By>
}

/** update columns of table "Signal" */
export enum Signals_Update_Column {
  /** column name */
  AccountId = 'accountId',
  /** column name */
  AtomId = 'atomId',
  /** column name */
  BlockNumber = 'blockNumber',
  /** column name */
  BlockTimestamp = 'blockTimestamp',
  /** column name */
  Delta = 'delta',
  /** column name */
  DepositId = 'depositId',
  /** column name */
  Id = 'id',
  /** column name */
  RedemptionId = 'redemptionId',
  /** column name */
  RelativeStrength = 'relativeStrength',
  /** column name */
  TransactionHash = 'transactionHash',
  /** column name */
  TripleId = 'tripleId',
}

export type Signals_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Signals_Inc_Input>
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Signals_Set_Input>
  /** filter the rows which have to be updated */
  where: Signals_Bool_Exp
}

/** aggregate var_pop on columns */
export type Signals_Var_Pop_Fields = {
  __typename?: 'signals_var_pop_fields'
  atomId?: Maybe<Scalars['Float']['output']>
  blockNumber?: Maybe<Scalars['Float']['output']>
  blockTimestamp?: Maybe<Scalars['Float']['output']>
  delta?: Maybe<Scalars['Float']['output']>
  relativeStrength?: Maybe<Scalars['Float']['output']>
  tripleId?: Maybe<Scalars['Float']['output']>
}

/** order by var_pop() on columns of table "Signal" */
export type Signals_Var_Pop_Order_By = {
  atomId?: InputMaybe<Order_By>
  blockNumber?: InputMaybe<Order_By>
  blockTimestamp?: InputMaybe<Order_By>
  delta?: InputMaybe<Order_By>
  relativeStrength?: InputMaybe<Order_By>
  tripleId?: InputMaybe<Order_By>
}

/** aggregate var_samp on columns */
export type Signals_Var_Samp_Fields = {
  __typename?: 'signals_var_samp_fields'
  atomId?: Maybe<Scalars['Float']['output']>
  blockNumber?: Maybe<Scalars['Float']['output']>
  blockTimestamp?: Maybe<Scalars['Float']['output']>
  delta?: Maybe<Scalars['Float']['output']>
  relativeStrength?: Maybe<Scalars['Float']['output']>
  tripleId?: Maybe<Scalars['Float']['output']>
}

/** order by var_samp() on columns of table "Signal" */
export type Signals_Var_Samp_Order_By = {
  atomId?: InputMaybe<Order_By>
  blockNumber?: InputMaybe<Order_By>
  blockTimestamp?: InputMaybe<Order_By>
  delta?: InputMaybe<Order_By>
  relativeStrength?: InputMaybe<Order_By>
  tripleId?: InputMaybe<Order_By>
}

/** aggregate variance on columns */
export type Signals_Variance_Fields = {
  __typename?: 'signals_variance_fields'
  atomId?: Maybe<Scalars['Float']['output']>
  blockNumber?: Maybe<Scalars['Float']['output']>
  blockTimestamp?: Maybe<Scalars['Float']['output']>
  delta?: Maybe<Scalars['Float']['output']>
  relativeStrength?: Maybe<Scalars['Float']['output']>
  tripleId?: Maybe<Scalars['Float']['output']>
}

/** order by variance() on columns of table "Signal" */
export type Signals_Variance_Order_By = {
  atomId?: InputMaybe<Order_By>
  blockNumber?: InputMaybe<Order_By>
  blockTimestamp?: InputMaybe<Order_By>
  delta?: InputMaybe<Order_By>
  relativeStrength?: InputMaybe<Order_By>
  tripleId?: InputMaybe<Order_By>
}

/** columns and relationships of "StatsHour" */
export type StatHours = {
  __typename?: 'statHours'
  contractBalance: Scalars['numeric']['output']
  id: Scalars['Int']['output']
  totalAccounts: Scalars['Int']['output']
  totalAtoms: Scalars['Int']['output']
  totalFees: Scalars['numeric']['output']
  totalPositions: Scalars['Int']['output']
  totalSignals: Scalars['Int']['output']
  totalTriples: Scalars['Int']['output']
}

/** aggregated selection of "StatsHour" */
export type StatHours_Aggregate = {
  __typename?: 'statHours_aggregate'
  aggregate?: Maybe<StatHours_Aggregate_Fields>
  nodes: Array<StatHours>
}

/** aggregate fields of "StatsHour" */
export type StatHours_Aggregate_Fields = {
  __typename?: 'statHours_aggregate_fields'
  avg?: Maybe<StatHours_Avg_Fields>
  count: Scalars['Int']['output']
  max?: Maybe<StatHours_Max_Fields>
  min?: Maybe<StatHours_Min_Fields>
  stddev?: Maybe<StatHours_Stddev_Fields>
  stddev_pop?: Maybe<StatHours_Stddev_Pop_Fields>
  stddev_samp?: Maybe<StatHours_Stddev_Samp_Fields>
  sum?: Maybe<StatHours_Sum_Fields>
  var_pop?: Maybe<StatHours_Var_Pop_Fields>
  var_samp?: Maybe<StatHours_Var_Samp_Fields>
  variance?: Maybe<StatHours_Variance_Fields>
}

/** aggregate fields of "StatsHour" */
export type StatHours_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<StatHours_Select_Column>>
  distinct?: InputMaybe<Scalars['Boolean']['input']>
}

/** aggregate avg on columns */
export type StatHours_Avg_Fields = {
  __typename?: 'statHours_avg_fields'
  contractBalance?: Maybe<Scalars['Float']['output']>
  id?: Maybe<Scalars['Float']['output']>
  totalAccounts?: Maybe<Scalars['Float']['output']>
  totalAtoms?: Maybe<Scalars['Float']['output']>
  totalFees?: Maybe<Scalars['Float']['output']>
  totalPositions?: Maybe<Scalars['Float']['output']>
  totalSignals?: Maybe<Scalars['Float']['output']>
  totalTriples?: Maybe<Scalars['Float']['output']>
}

/** Boolean expression to filter rows from the table "StatsHour". All fields are combined with a logical 'AND'. */
export type StatHours_Bool_Exp = {
  _and?: InputMaybe<Array<StatHours_Bool_Exp>>
  _not?: InputMaybe<StatHours_Bool_Exp>
  _or?: InputMaybe<Array<StatHours_Bool_Exp>>
  contractBalance?: InputMaybe<Numeric_Comparison_Exp>
  id?: InputMaybe<Int_Comparison_Exp>
  totalAccounts?: InputMaybe<Int_Comparison_Exp>
  totalAtoms?: InputMaybe<Int_Comparison_Exp>
  totalFees?: InputMaybe<Numeric_Comparison_Exp>
  totalPositions?: InputMaybe<Int_Comparison_Exp>
  totalSignals?: InputMaybe<Int_Comparison_Exp>
  totalTriples?: InputMaybe<Int_Comparison_Exp>
}

/** unique or primary key constraints on table "StatsHour" */
export enum StatHours_Constraint {
  /** unique or primary key constraint on columns "id" */
  StatsHourPkey = 'StatsHour_pkey',
}

/** input type for incrementing numeric columns in table "StatsHour" */
export type StatHours_Inc_Input = {
  contractBalance?: InputMaybe<Scalars['numeric']['input']>
  id?: InputMaybe<Scalars['Int']['input']>
  totalAccounts?: InputMaybe<Scalars['Int']['input']>
  totalAtoms?: InputMaybe<Scalars['Int']['input']>
  totalFees?: InputMaybe<Scalars['numeric']['input']>
  totalPositions?: InputMaybe<Scalars['Int']['input']>
  totalSignals?: InputMaybe<Scalars['Int']['input']>
  totalTriples?: InputMaybe<Scalars['Int']['input']>
}

/** input type for inserting data into table "StatsHour" */
export type StatHours_Insert_Input = {
  contractBalance?: InputMaybe<Scalars['numeric']['input']>
  id?: InputMaybe<Scalars['Int']['input']>
  totalAccounts?: InputMaybe<Scalars['Int']['input']>
  totalAtoms?: InputMaybe<Scalars['Int']['input']>
  totalFees?: InputMaybe<Scalars['numeric']['input']>
  totalPositions?: InputMaybe<Scalars['Int']['input']>
  totalSignals?: InputMaybe<Scalars['Int']['input']>
  totalTriples?: InputMaybe<Scalars['Int']['input']>
}

/** aggregate max on columns */
export type StatHours_Max_Fields = {
  __typename?: 'statHours_max_fields'
  contractBalance?: Maybe<Scalars['numeric']['output']>
  id?: Maybe<Scalars['Int']['output']>
  totalAccounts?: Maybe<Scalars['Int']['output']>
  totalAtoms?: Maybe<Scalars['Int']['output']>
  totalFees?: Maybe<Scalars['numeric']['output']>
  totalPositions?: Maybe<Scalars['Int']['output']>
  totalSignals?: Maybe<Scalars['Int']['output']>
  totalTriples?: Maybe<Scalars['Int']['output']>
}

/** aggregate min on columns */
export type StatHours_Min_Fields = {
  __typename?: 'statHours_min_fields'
  contractBalance?: Maybe<Scalars['numeric']['output']>
  id?: Maybe<Scalars['Int']['output']>
  totalAccounts?: Maybe<Scalars['Int']['output']>
  totalAtoms?: Maybe<Scalars['Int']['output']>
  totalFees?: Maybe<Scalars['numeric']['output']>
  totalPositions?: Maybe<Scalars['Int']['output']>
  totalSignals?: Maybe<Scalars['Int']['output']>
  totalTriples?: Maybe<Scalars['Int']['output']>
}

/** response of any mutation on the table "StatsHour" */
export type StatHours_Mutation_Response = {
  __typename?: 'statHours_mutation_response'
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output']
  /** data from the rows affected by the mutation */
  returning: Array<StatHours>
}

/** on_conflict condition type for table "StatsHour" */
export type StatHours_On_Conflict = {
  constraint: StatHours_Constraint
  update_columns?: Array<StatHours_Update_Column>
  where?: InputMaybe<StatHours_Bool_Exp>
}

/** Ordering options when selecting data from "StatsHour". */
export type StatHours_Order_By = {
  contractBalance?: InputMaybe<Order_By>
  id?: InputMaybe<Order_By>
  totalAccounts?: InputMaybe<Order_By>
  totalAtoms?: InputMaybe<Order_By>
  totalFees?: InputMaybe<Order_By>
  totalPositions?: InputMaybe<Order_By>
  totalSignals?: InputMaybe<Order_By>
  totalTriples?: InputMaybe<Order_By>
}

/** primary key columns input for table: StatsHour */
export type StatHours_Pk_Columns_Input = {
  id: Scalars['Int']['input']
}

/** select columns of table "StatsHour" */
export enum StatHours_Select_Column {
  /** column name */
  ContractBalance = 'contractBalance',
  /** column name */
  Id = 'id',
  /** column name */
  TotalAccounts = 'totalAccounts',
  /** column name */
  TotalAtoms = 'totalAtoms',
  /** column name */
  TotalFees = 'totalFees',
  /** column name */
  TotalPositions = 'totalPositions',
  /** column name */
  TotalSignals = 'totalSignals',
  /** column name */
  TotalTriples = 'totalTriples',
}

/** input type for updating data in table "StatsHour" */
export type StatHours_Set_Input = {
  contractBalance?: InputMaybe<Scalars['numeric']['input']>
  id?: InputMaybe<Scalars['Int']['input']>
  totalAccounts?: InputMaybe<Scalars['Int']['input']>
  totalAtoms?: InputMaybe<Scalars['Int']['input']>
  totalFees?: InputMaybe<Scalars['numeric']['input']>
  totalPositions?: InputMaybe<Scalars['Int']['input']>
  totalSignals?: InputMaybe<Scalars['Int']['input']>
  totalTriples?: InputMaybe<Scalars['Int']['input']>
}

/** aggregate stddev on columns */
export type StatHours_Stddev_Fields = {
  __typename?: 'statHours_stddev_fields'
  contractBalance?: Maybe<Scalars['Float']['output']>
  id?: Maybe<Scalars['Float']['output']>
  totalAccounts?: Maybe<Scalars['Float']['output']>
  totalAtoms?: Maybe<Scalars['Float']['output']>
  totalFees?: Maybe<Scalars['Float']['output']>
  totalPositions?: Maybe<Scalars['Float']['output']>
  totalSignals?: Maybe<Scalars['Float']['output']>
  totalTriples?: Maybe<Scalars['Float']['output']>
}

/** aggregate stddev_pop on columns */
export type StatHours_Stddev_Pop_Fields = {
  __typename?: 'statHours_stddev_pop_fields'
  contractBalance?: Maybe<Scalars['Float']['output']>
  id?: Maybe<Scalars['Float']['output']>
  totalAccounts?: Maybe<Scalars['Float']['output']>
  totalAtoms?: Maybe<Scalars['Float']['output']>
  totalFees?: Maybe<Scalars['Float']['output']>
  totalPositions?: Maybe<Scalars['Float']['output']>
  totalSignals?: Maybe<Scalars['Float']['output']>
  totalTriples?: Maybe<Scalars['Float']['output']>
}

/** aggregate stddev_samp on columns */
export type StatHours_Stddev_Samp_Fields = {
  __typename?: 'statHours_stddev_samp_fields'
  contractBalance?: Maybe<Scalars['Float']['output']>
  id?: Maybe<Scalars['Float']['output']>
  totalAccounts?: Maybe<Scalars['Float']['output']>
  totalAtoms?: Maybe<Scalars['Float']['output']>
  totalFees?: Maybe<Scalars['Float']['output']>
  totalPositions?: Maybe<Scalars['Float']['output']>
  totalSignals?: Maybe<Scalars['Float']['output']>
  totalTriples?: Maybe<Scalars['Float']['output']>
}

/** Streaming cursor of the table "statHours" */
export type StatHours_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: StatHours_Stream_Cursor_Value_Input
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>
}

/** Initial value of the column from where the streaming should start */
export type StatHours_Stream_Cursor_Value_Input = {
  contractBalance?: InputMaybe<Scalars['numeric']['input']>
  id?: InputMaybe<Scalars['Int']['input']>
  totalAccounts?: InputMaybe<Scalars['Int']['input']>
  totalAtoms?: InputMaybe<Scalars['Int']['input']>
  totalFees?: InputMaybe<Scalars['numeric']['input']>
  totalPositions?: InputMaybe<Scalars['Int']['input']>
  totalSignals?: InputMaybe<Scalars['Int']['input']>
  totalTriples?: InputMaybe<Scalars['Int']['input']>
}

/** aggregate sum on columns */
export type StatHours_Sum_Fields = {
  __typename?: 'statHours_sum_fields'
  contractBalance?: Maybe<Scalars['numeric']['output']>
  id?: Maybe<Scalars['Int']['output']>
  totalAccounts?: Maybe<Scalars['Int']['output']>
  totalAtoms?: Maybe<Scalars['Int']['output']>
  totalFees?: Maybe<Scalars['numeric']['output']>
  totalPositions?: Maybe<Scalars['Int']['output']>
  totalSignals?: Maybe<Scalars['Int']['output']>
  totalTriples?: Maybe<Scalars['Int']['output']>
}

/** update columns of table "StatsHour" */
export enum StatHours_Update_Column {
  /** column name */
  ContractBalance = 'contractBalance',
  /** column name */
  Id = 'id',
  /** column name */
  TotalAccounts = 'totalAccounts',
  /** column name */
  TotalAtoms = 'totalAtoms',
  /** column name */
  TotalFees = 'totalFees',
  /** column name */
  TotalPositions = 'totalPositions',
  /** column name */
  TotalSignals = 'totalSignals',
  /** column name */
  TotalTriples = 'totalTriples',
}

export type StatHours_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<StatHours_Inc_Input>
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<StatHours_Set_Input>
  /** filter the rows which have to be updated */
  where: StatHours_Bool_Exp
}

/** aggregate var_pop on columns */
export type StatHours_Var_Pop_Fields = {
  __typename?: 'statHours_var_pop_fields'
  contractBalance?: Maybe<Scalars['Float']['output']>
  id?: Maybe<Scalars['Float']['output']>
  totalAccounts?: Maybe<Scalars['Float']['output']>
  totalAtoms?: Maybe<Scalars['Float']['output']>
  totalFees?: Maybe<Scalars['Float']['output']>
  totalPositions?: Maybe<Scalars['Float']['output']>
  totalSignals?: Maybe<Scalars['Float']['output']>
  totalTriples?: Maybe<Scalars['Float']['output']>
}

/** aggregate var_samp on columns */
export type StatHours_Var_Samp_Fields = {
  __typename?: 'statHours_var_samp_fields'
  contractBalance?: Maybe<Scalars['Float']['output']>
  id?: Maybe<Scalars['Float']['output']>
  totalAccounts?: Maybe<Scalars['Float']['output']>
  totalAtoms?: Maybe<Scalars['Float']['output']>
  totalFees?: Maybe<Scalars['Float']['output']>
  totalPositions?: Maybe<Scalars['Float']['output']>
  totalSignals?: Maybe<Scalars['Float']['output']>
  totalTriples?: Maybe<Scalars['Float']['output']>
}

/** aggregate variance on columns */
export type StatHours_Variance_Fields = {
  __typename?: 'statHours_variance_fields'
  contractBalance?: Maybe<Scalars['Float']['output']>
  id?: Maybe<Scalars['Float']['output']>
  totalAccounts?: Maybe<Scalars['Float']['output']>
  totalAtoms?: Maybe<Scalars['Float']['output']>
  totalFees?: Maybe<Scalars['Float']['output']>
  totalPositions?: Maybe<Scalars['Float']['output']>
  totalSignals?: Maybe<Scalars['Float']['output']>
  totalTriples?: Maybe<Scalars['Float']['output']>
}

/** columns and relationships of "Stats" */
export type Stats = {
  __typename?: 'stats'
  contractBalance: Scalars['numeric']['output']
  id: Scalars['Int']['output']
  totalAccounts: Scalars['Int']['output']
  totalAtoms: Scalars['Int']['output']
  totalFees: Scalars['numeric']['output']
  totalPositions: Scalars['Int']['output']
  totalSignals: Scalars['Int']['output']
  totalTriples: Scalars['Int']['output']
}

/** aggregated selection of "Stats" */
export type Stats_Aggregate = {
  __typename?: 'stats_aggregate'
  aggregate?: Maybe<Stats_Aggregate_Fields>
  nodes: Array<Stats>
}

/** aggregate fields of "Stats" */
export type Stats_Aggregate_Fields = {
  __typename?: 'stats_aggregate_fields'
  avg?: Maybe<Stats_Avg_Fields>
  count: Scalars['Int']['output']
  max?: Maybe<Stats_Max_Fields>
  min?: Maybe<Stats_Min_Fields>
  stddev?: Maybe<Stats_Stddev_Fields>
  stddev_pop?: Maybe<Stats_Stddev_Pop_Fields>
  stddev_samp?: Maybe<Stats_Stddev_Samp_Fields>
  sum?: Maybe<Stats_Sum_Fields>
  var_pop?: Maybe<Stats_Var_Pop_Fields>
  var_samp?: Maybe<Stats_Var_Samp_Fields>
  variance?: Maybe<Stats_Variance_Fields>
}

/** aggregate fields of "Stats" */
export type Stats_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Stats_Select_Column>>
  distinct?: InputMaybe<Scalars['Boolean']['input']>
}

/** aggregate avg on columns */
export type Stats_Avg_Fields = {
  __typename?: 'stats_avg_fields'
  contractBalance?: Maybe<Scalars['Float']['output']>
  id?: Maybe<Scalars['Float']['output']>
  totalAccounts?: Maybe<Scalars['Float']['output']>
  totalAtoms?: Maybe<Scalars['Float']['output']>
  totalFees?: Maybe<Scalars['Float']['output']>
  totalPositions?: Maybe<Scalars['Float']['output']>
  totalSignals?: Maybe<Scalars['Float']['output']>
  totalTriples?: Maybe<Scalars['Float']['output']>
}

/** Boolean expression to filter rows from the table "Stats". All fields are combined with a logical 'AND'. */
export type Stats_Bool_Exp = {
  _and?: InputMaybe<Array<Stats_Bool_Exp>>
  _not?: InputMaybe<Stats_Bool_Exp>
  _or?: InputMaybe<Array<Stats_Bool_Exp>>
  contractBalance?: InputMaybe<Numeric_Comparison_Exp>
  id?: InputMaybe<Int_Comparison_Exp>
  totalAccounts?: InputMaybe<Int_Comparison_Exp>
  totalAtoms?: InputMaybe<Int_Comparison_Exp>
  totalFees?: InputMaybe<Numeric_Comparison_Exp>
  totalPositions?: InputMaybe<Int_Comparison_Exp>
  totalSignals?: InputMaybe<Int_Comparison_Exp>
  totalTriples?: InputMaybe<Int_Comparison_Exp>
}

/** unique or primary key constraints on table "Stats" */
export enum Stats_Constraint {
  /** unique or primary key constraint on columns "id" */
  StatsPkey = 'Stats_pkey',
}

/** input type for incrementing numeric columns in table "Stats" */
export type Stats_Inc_Input = {
  contractBalance?: InputMaybe<Scalars['numeric']['input']>
  id?: InputMaybe<Scalars['Int']['input']>
  totalAccounts?: InputMaybe<Scalars['Int']['input']>
  totalAtoms?: InputMaybe<Scalars['Int']['input']>
  totalFees?: InputMaybe<Scalars['numeric']['input']>
  totalPositions?: InputMaybe<Scalars['Int']['input']>
  totalSignals?: InputMaybe<Scalars['Int']['input']>
  totalTriples?: InputMaybe<Scalars['Int']['input']>
}

/** input type for inserting data into table "Stats" */
export type Stats_Insert_Input = {
  contractBalance?: InputMaybe<Scalars['numeric']['input']>
  id?: InputMaybe<Scalars['Int']['input']>
  totalAccounts?: InputMaybe<Scalars['Int']['input']>
  totalAtoms?: InputMaybe<Scalars['Int']['input']>
  totalFees?: InputMaybe<Scalars['numeric']['input']>
  totalPositions?: InputMaybe<Scalars['Int']['input']>
  totalSignals?: InputMaybe<Scalars['Int']['input']>
  totalTriples?: InputMaybe<Scalars['Int']['input']>
}

/** aggregate max on columns */
export type Stats_Max_Fields = {
  __typename?: 'stats_max_fields'
  contractBalance?: Maybe<Scalars['numeric']['output']>
  id?: Maybe<Scalars['Int']['output']>
  totalAccounts?: Maybe<Scalars['Int']['output']>
  totalAtoms?: Maybe<Scalars['Int']['output']>
  totalFees?: Maybe<Scalars['numeric']['output']>
  totalPositions?: Maybe<Scalars['Int']['output']>
  totalSignals?: Maybe<Scalars['Int']['output']>
  totalTriples?: Maybe<Scalars['Int']['output']>
}

/** aggregate min on columns */
export type Stats_Min_Fields = {
  __typename?: 'stats_min_fields'
  contractBalance?: Maybe<Scalars['numeric']['output']>
  id?: Maybe<Scalars['Int']['output']>
  totalAccounts?: Maybe<Scalars['Int']['output']>
  totalAtoms?: Maybe<Scalars['Int']['output']>
  totalFees?: Maybe<Scalars['numeric']['output']>
  totalPositions?: Maybe<Scalars['Int']['output']>
  totalSignals?: Maybe<Scalars['Int']['output']>
  totalTriples?: Maybe<Scalars['Int']['output']>
}

/** response of any mutation on the table "Stats" */
export type Stats_Mutation_Response = {
  __typename?: 'stats_mutation_response'
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output']
  /** data from the rows affected by the mutation */
  returning: Array<Stats>
}

/** on_conflict condition type for table "Stats" */
export type Stats_On_Conflict = {
  constraint: Stats_Constraint
  update_columns?: Array<Stats_Update_Column>
  where?: InputMaybe<Stats_Bool_Exp>
}

/** Ordering options when selecting data from "Stats". */
export type Stats_Order_By = {
  contractBalance?: InputMaybe<Order_By>
  id?: InputMaybe<Order_By>
  totalAccounts?: InputMaybe<Order_By>
  totalAtoms?: InputMaybe<Order_By>
  totalFees?: InputMaybe<Order_By>
  totalPositions?: InputMaybe<Order_By>
  totalSignals?: InputMaybe<Order_By>
  totalTriples?: InputMaybe<Order_By>
}

/** primary key columns input for table: Stats */
export type Stats_Pk_Columns_Input = {
  id: Scalars['Int']['input']
}

/** select columns of table "Stats" */
export enum Stats_Select_Column {
  /** column name */
  ContractBalance = 'contractBalance',
  /** column name */
  Id = 'id',
  /** column name */
  TotalAccounts = 'totalAccounts',
  /** column name */
  TotalAtoms = 'totalAtoms',
  /** column name */
  TotalFees = 'totalFees',
  /** column name */
  TotalPositions = 'totalPositions',
  /** column name */
  TotalSignals = 'totalSignals',
  /** column name */
  TotalTriples = 'totalTriples',
}

/** input type for updating data in table "Stats" */
export type Stats_Set_Input = {
  contractBalance?: InputMaybe<Scalars['numeric']['input']>
  id?: InputMaybe<Scalars['Int']['input']>
  totalAccounts?: InputMaybe<Scalars['Int']['input']>
  totalAtoms?: InputMaybe<Scalars['Int']['input']>
  totalFees?: InputMaybe<Scalars['numeric']['input']>
  totalPositions?: InputMaybe<Scalars['Int']['input']>
  totalSignals?: InputMaybe<Scalars['Int']['input']>
  totalTriples?: InputMaybe<Scalars['Int']['input']>
}

/** aggregate stddev on columns */
export type Stats_Stddev_Fields = {
  __typename?: 'stats_stddev_fields'
  contractBalance?: Maybe<Scalars['Float']['output']>
  id?: Maybe<Scalars['Float']['output']>
  totalAccounts?: Maybe<Scalars['Float']['output']>
  totalAtoms?: Maybe<Scalars['Float']['output']>
  totalFees?: Maybe<Scalars['Float']['output']>
  totalPositions?: Maybe<Scalars['Float']['output']>
  totalSignals?: Maybe<Scalars['Float']['output']>
  totalTriples?: Maybe<Scalars['Float']['output']>
}

/** aggregate stddev_pop on columns */
export type Stats_Stddev_Pop_Fields = {
  __typename?: 'stats_stddev_pop_fields'
  contractBalance?: Maybe<Scalars['Float']['output']>
  id?: Maybe<Scalars['Float']['output']>
  totalAccounts?: Maybe<Scalars['Float']['output']>
  totalAtoms?: Maybe<Scalars['Float']['output']>
  totalFees?: Maybe<Scalars['Float']['output']>
  totalPositions?: Maybe<Scalars['Float']['output']>
  totalSignals?: Maybe<Scalars['Float']['output']>
  totalTriples?: Maybe<Scalars['Float']['output']>
}

/** aggregate stddev_samp on columns */
export type Stats_Stddev_Samp_Fields = {
  __typename?: 'stats_stddev_samp_fields'
  contractBalance?: Maybe<Scalars['Float']['output']>
  id?: Maybe<Scalars['Float']['output']>
  totalAccounts?: Maybe<Scalars['Float']['output']>
  totalAtoms?: Maybe<Scalars['Float']['output']>
  totalFees?: Maybe<Scalars['Float']['output']>
  totalPositions?: Maybe<Scalars['Float']['output']>
  totalSignals?: Maybe<Scalars['Float']['output']>
  totalTriples?: Maybe<Scalars['Float']['output']>
}

/** Streaming cursor of the table "stats" */
export type Stats_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Stats_Stream_Cursor_Value_Input
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>
}

/** Initial value of the column from where the streaming should start */
export type Stats_Stream_Cursor_Value_Input = {
  contractBalance?: InputMaybe<Scalars['numeric']['input']>
  id?: InputMaybe<Scalars['Int']['input']>
  totalAccounts?: InputMaybe<Scalars['Int']['input']>
  totalAtoms?: InputMaybe<Scalars['Int']['input']>
  totalFees?: InputMaybe<Scalars['numeric']['input']>
  totalPositions?: InputMaybe<Scalars['Int']['input']>
  totalSignals?: InputMaybe<Scalars['Int']['input']>
  totalTriples?: InputMaybe<Scalars['Int']['input']>
}

/** aggregate sum on columns */
export type Stats_Sum_Fields = {
  __typename?: 'stats_sum_fields'
  contractBalance?: Maybe<Scalars['numeric']['output']>
  id?: Maybe<Scalars['Int']['output']>
  totalAccounts?: Maybe<Scalars['Int']['output']>
  totalAtoms?: Maybe<Scalars['Int']['output']>
  totalFees?: Maybe<Scalars['numeric']['output']>
  totalPositions?: Maybe<Scalars['Int']['output']>
  totalSignals?: Maybe<Scalars['Int']['output']>
  totalTriples?: Maybe<Scalars['Int']['output']>
}

/** update columns of table "Stats" */
export enum Stats_Update_Column {
  /** column name */
  ContractBalance = 'contractBalance',
  /** column name */
  Id = 'id',
  /** column name */
  TotalAccounts = 'totalAccounts',
  /** column name */
  TotalAtoms = 'totalAtoms',
  /** column name */
  TotalFees = 'totalFees',
  /** column name */
  TotalPositions = 'totalPositions',
  /** column name */
  TotalSignals = 'totalSignals',
  /** column name */
  TotalTriples = 'totalTriples',
}

export type Stats_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Stats_Inc_Input>
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Stats_Set_Input>
  /** filter the rows which have to be updated */
  where: Stats_Bool_Exp
}

/** aggregate var_pop on columns */
export type Stats_Var_Pop_Fields = {
  __typename?: 'stats_var_pop_fields'
  contractBalance?: Maybe<Scalars['Float']['output']>
  id?: Maybe<Scalars['Float']['output']>
  totalAccounts?: Maybe<Scalars['Float']['output']>
  totalAtoms?: Maybe<Scalars['Float']['output']>
  totalFees?: Maybe<Scalars['Float']['output']>
  totalPositions?: Maybe<Scalars['Float']['output']>
  totalSignals?: Maybe<Scalars['Float']['output']>
  totalTriples?: Maybe<Scalars['Float']['output']>
}

/** aggregate var_samp on columns */
export type Stats_Var_Samp_Fields = {
  __typename?: 'stats_var_samp_fields'
  contractBalance?: Maybe<Scalars['Float']['output']>
  id?: Maybe<Scalars['Float']['output']>
  totalAccounts?: Maybe<Scalars['Float']['output']>
  totalAtoms?: Maybe<Scalars['Float']['output']>
  totalFees?: Maybe<Scalars['Float']['output']>
  totalPositions?: Maybe<Scalars['Float']['output']>
  totalSignals?: Maybe<Scalars['Float']['output']>
  totalTriples?: Maybe<Scalars['Float']['output']>
}

/** aggregate variance on columns */
export type Stats_Variance_Fields = {
  __typename?: 'stats_variance_fields'
  contractBalance?: Maybe<Scalars['Float']['output']>
  id?: Maybe<Scalars['Float']['output']>
  totalAccounts?: Maybe<Scalars['Float']['output']>
  totalAtoms?: Maybe<Scalars['Float']['output']>
  totalFees?: Maybe<Scalars['Float']['output']>
  totalPositions?: Maybe<Scalars['Float']['output']>
  totalSignals?: Maybe<Scalars['Float']['output']>
  totalTriples?: Maybe<Scalars['Float']['output']>
}

export type Subscription_Root = {
  __typename?: 'subscription_root'
  /** fetch data from the table: "Account" using primary key columns */
  account?: Maybe<Accounts>
  /** fetch data from the table: "Account" */
  accounts: Array<Accounts>
  /** fetch aggregated fields from the table: "Account" */
  accounts_aggregate: Accounts_Aggregate
  /** fetch data from the table in a streaming manner: "Account" */
  accounts_stream: Array<Accounts>
  /** fetch data from the table: "Atom" using primary key columns */
  atom?: Maybe<Atoms>
  /** fetch data from the table: "AtomValue" using primary key columns */
  atomValue?: Maybe<AtomValues>
  /** fetch data from the table: "AtomValue" */
  atomValues: Array<AtomValues>
  /** fetch aggregated fields from the table: "AtomValue" */
  atomValues_aggregate: AtomValues_Aggregate
  /** fetch data from the table in a streaming manner: "AtomValue" */
  atomValues_stream: Array<AtomValues>
  /** fetch data from the table: "Atom" */
  atoms: Array<Atoms>
  /** fetch aggregated fields from the table: "Atom" */
  atoms_aggregate: Atoms_Aggregate
  /** fetch data from the table in a streaming manner: "Atom" */
  atoms_stream: Array<Atoms>
  /** fetch data from the table: "Book" using primary key columns */
  book?: Maybe<Books>
  /** fetch data from the table: "Book" */
  books: Array<Books>
  /** fetch aggregated fields from the table: "Book" */
  books_aggregate: Books_Aggregate
  /** fetch data from the table in a streaming manner: "Book" */
  books_stream: Array<Books>
  /** fetch data from the table: "ChainlinkPrice" using primary key columns */
  chainLinkPrice?: Maybe<ChainLinkPrices>
  /** fetch data from the table: "ChainlinkPrice" */
  chainLinkPrices: Array<ChainLinkPrices>
  /** fetch aggregated fields from the table: "ChainlinkPrice" */
  chainLinkPrices_aggregate: ChainLinkPrices_Aggregate
  /** fetch data from the table in a streaming manner: "ChainlinkPrice" */
  chainLinkPrices_stream: Array<ChainLinkPrices>
  /** fetch data from the table: "Deposit" using primary key columns */
  deposit?: Maybe<Deposits>
  /** An array relationship */
  deposits: Array<Deposits>
  /** An aggregate relationship */
  deposits_aggregate: Deposits_Aggregate
  /** fetch data from the table in a streaming manner: "Deposit" */
  deposits_stream: Array<Deposits>
  /** fetch data from the table: "Event" using primary key columns */
  event?: Maybe<Events>
  /** fetch data from the table: "Event" */
  events: Array<Events>
  /** fetch aggregated fields from the table: "Event" */
  events_aggregate: Events_Aggregate
  /** fetch data from the table in a streaming manner: "Event" */
  events_stream: Array<Events>
  /** fetch data from the table: "FeeTransfer" */
  feeTranfers: Array<FeeTranfers>
  /** fetch aggregated fields from the table: "FeeTransfer" */
  feeTranfers_aggregate: FeeTranfers_Aggregate
  /** fetch data from the table in a streaming manner: "FeeTransfer" */
  feeTranfers_stream: Array<FeeTranfers>
  /** fetch data from the table: "FeeTransfer" using primary key columns */
  feeTransfers?: Maybe<FeeTranfers>
  /** fetch data from the table: "Organization" using primary key columns */
  organization?: Maybe<Organizations>
  /** fetch data from the table: "Organization" */
  organizations: Array<Organizations>
  /** fetch aggregated fields from the table: "Organization" */
  organizations_aggregate: Organizations_Aggregate
  /** fetch data from the table in a streaming manner: "Organization" */
  organizations_stream: Array<Organizations>
  /** fetch data from the table: "Person" using primary key columns */
  person?: Maybe<Persons>
  /** fetch data from the table: "Person" */
  persons: Array<Persons>
  /** fetch aggregated fields from the table: "Person" */
  persons_aggregate: Persons_Aggregate
  /** fetch data from the table in a streaming manner: "Person" */
  persons_stream: Array<Persons>
  /** fetch data from the table: "Position" using primary key columns */
  position?: Maybe<Positions>
  /** An array relationship */
  positions: Array<Positions>
  /** An aggregate relationship */
  positions_aggregate: Positions_Aggregate
  /** fetch data from the table in a streaming manner: "Position" */
  positions_stream: Array<Positions>
  /** fetch data from the table: "Redemption" using primary key columns */
  redemption?: Maybe<Redemptions>
  /** An array relationship */
  redemptions: Array<Redemptions>
  /** An aggregate relationship */
  redemptions_aggregate: Redemptions_Aggregate
  /** fetch data from the table in a streaming manner: "Redemption" */
  redemptions_stream: Array<Redemptions>
  /** fetch data from the table: "Signal" using primary key columns */
  signal?: Maybe<Signals>
  /** An array relationship */
  signals: Array<Signals>
  /** An aggregate relationship */
  signals_aggregate: Signals_Aggregate
  /** fetch data from the table in a streaming manner: "Signal" */
  signals_stream: Array<Signals>
  /** fetch data from the table: "Stats" using primary key columns */
  stat?: Maybe<Stats>
  /** fetch data from the table: "StatsHour" using primary key columns */
  statHour?: Maybe<StatHours>
  /** fetch data from the table: "StatsHour" */
  statHours: Array<StatHours>
  /** fetch aggregated fields from the table: "StatsHour" */
  statHours_aggregate: StatHours_Aggregate
  /** fetch data from the table in a streaming manner: "StatsHour" */
  statHours_stream: Array<StatHours>
  /** fetch data from the table: "Stats" */
  stats: Array<Stats>
  /** fetch aggregated fields from the table: "Stats" */
  stats_aggregate: Stats_Aggregate
  /** fetch data from the table in a streaming manner: "Stats" */
  stats_stream: Array<Stats>
  /** fetch data from the table: "Thing" using primary key columns */
  thing?: Maybe<Things>
  /** fetch data from the table: "Thing" */
  things: Array<Things>
  /** fetch aggregated fields from the table: "Thing" */
  things_aggregate: Things_Aggregate
  /** fetch data from the table in a streaming manner: "Thing" */
  things_stream: Array<Things>
  /** fetch data from the table: "Triple" using primary key columns */
  triple?: Maybe<Triples>
  /** fetch data from the table: "Triple" */
  triples: Array<Triples>
  /** fetch aggregated fields from the table: "Triple" */
  triples_aggregate: Triples_Aggregate
  /** fetch data from the table in a streaming manner: "Triple" */
  triples_stream: Array<Triples>
  /** fetch data from the table: "Vault" using primary key columns */
  vault?: Maybe<Vaults>
  /** fetch data from the table: "Vault" */
  vaults: Array<Vaults>
  /** fetch aggregated fields from the table: "Vault" */
  vaults_aggregate: Vaults_Aggregate
  /** fetch data from the table in a streaming manner: "Vault" */
  vaults_stream: Array<Vaults>
}

export type Subscription_RootAccountArgs = {
  id: Scalars['bytea']['input']
}

export type Subscription_RootAccountsArgs = {
  distinct_on?: InputMaybe<Array<Accounts_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Accounts_Order_By>>
  where?: InputMaybe<Accounts_Bool_Exp>
}

export type Subscription_RootAccounts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Accounts_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Accounts_Order_By>>
  where?: InputMaybe<Accounts_Bool_Exp>
}

export type Subscription_RootAccounts_StreamArgs = {
  batch_size: Scalars['Int']['input']
  cursor: Array<InputMaybe<Accounts_Stream_Cursor_Input>>
  where?: InputMaybe<Accounts_Bool_Exp>
}

export type Subscription_RootAtomArgs = {
  id: Scalars['numeric']['input']
}

export type Subscription_RootAtomValueArgs = {
  id: Scalars['numeric']['input']
}

export type Subscription_RootAtomValuesArgs = {
  distinct_on?: InputMaybe<Array<AtomValues_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<AtomValues_Order_By>>
  where?: InputMaybe<AtomValues_Bool_Exp>
}

export type Subscription_RootAtomValues_AggregateArgs = {
  distinct_on?: InputMaybe<Array<AtomValues_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<AtomValues_Order_By>>
  where?: InputMaybe<AtomValues_Bool_Exp>
}

export type Subscription_RootAtomValues_StreamArgs = {
  batch_size: Scalars['Int']['input']
  cursor: Array<InputMaybe<AtomValues_Stream_Cursor_Input>>
  where?: InputMaybe<AtomValues_Bool_Exp>
}

export type Subscription_RootAtomsArgs = {
  distinct_on?: InputMaybe<Array<Atoms_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Atoms_Order_By>>
  where?: InputMaybe<Atoms_Bool_Exp>
}

export type Subscription_RootAtoms_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Atoms_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Atoms_Order_By>>
  where?: InputMaybe<Atoms_Bool_Exp>
}

export type Subscription_RootAtoms_StreamArgs = {
  batch_size: Scalars['Int']['input']
  cursor: Array<InputMaybe<Atoms_Stream_Cursor_Input>>
  where?: InputMaybe<Atoms_Bool_Exp>
}

export type Subscription_RootBookArgs = {
  id: Scalars['numeric']['input']
}

export type Subscription_RootBooksArgs = {
  distinct_on?: InputMaybe<Array<Books_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Books_Order_By>>
  where?: InputMaybe<Books_Bool_Exp>
}

export type Subscription_RootBooks_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Books_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Books_Order_By>>
  where?: InputMaybe<Books_Bool_Exp>
}

export type Subscription_RootBooks_StreamArgs = {
  batch_size: Scalars['Int']['input']
  cursor: Array<InputMaybe<Books_Stream_Cursor_Input>>
  where?: InputMaybe<Books_Bool_Exp>
}

export type Subscription_RootChainLinkPriceArgs = {
  id: Scalars['numeric']['input']
}

export type Subscription_RootChainLinkPricesArgs = {
  distinct_on?: InputMaybe<Array<ChainLinkPrices_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<ChainLinkPrices_Order_By>>
  where?: InputMaybe<ChainLinkPrices_Bool_Exp>
}

export type Subscription_RootChainLinkPrices_AggregateArgs = {
  distinct_on?: InputMaybe<Array<ChainLinkPrices_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<ChainLinkPrices_Order_By>>
  where?: InputMaybe<ChainLinkPrices_Bool_Exp>
}

export type Subscription_RootChainLinkPrices_StreamArgs = {
  batch_size: Scalars['Int']['input']
  cursor: Array<InputMaybe<ChainLinkPrices_Stream_Cursor_Input>>
  where?: InputMaybe<ChainLinkPrices_Bool_Exp>
}

export type Subscription_RootDepositArgs = {
  id: Scalars['String']['input']
}

export type Subscription_RootDepositsArgs = {
  distinct_on?: InputMaybe<Array<Deposits_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Deposits_Order_By>>
  where?: InputMaybe<Deposits_Bool_Exp>
}

export type Subscription_RootDeposits_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Deposits_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Deposits_Order_By>>
  where?: InputMaybe<Deposits_Bool_Exp>
}

export type Subscription_RootDeposits_StreamArgs = {
  batch_size: Scalars['Int']['input']
  cursor: Array<InputMaybe<Deposits_Stream_Cursor_Input>>
  where?: InputMaybe<Deposits_Bool_Exp>
}

export type Subscription_RootEventArgs = {
  id: Scalars['String']['input']
}

export type Subscription_RootEventsArgs = {
  distinct_on?: InputMaybe<Array<Events_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Events_Order_By>>
  where?: InputMaybe<Events_Bool_Exp>
}

export type Subscription_RootEvents_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Events_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Events_Order_By>>
  where?: InputMaybe<Events_Bool_Exp>
}

export type Subscription_RootEvents_StreamArgs = {
  batch_size: Scalars['Int']['input']
  cursor: Array<InputMaybe<Events_Stream_Cursor_Input>>
  where?: InputMaybe<Events_Bool_Exp>
}

export type Subscription_RootFeeTranfersArgs = {
  distinct_on?: InputMaybe<Array<FeeTranfers_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<FeeTranfers_Order_By>>
  where?: InputMaybe<FeeTranfers_Bool_Exp>
}

export type Subscription_RootFeeTranfers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<FeeTranfers_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<FeeTranfers_Order_By>>
  where?: InputMaybe<FeeTranfers_Bool_Exp>
}

export type Subscription_RootFeeTranfers_StreamArgs = {
  batch_size: Scalars['Int']['input']
  cursor: Array<InputMaybe<FeeTranfers_Stream_Cursor_Input>>
  where?: InputMaybe<FeeTranfers_Bool_Exp>
}

export type Subscription_RootFeeTransfersArgs = {
  id: Scalars['String']['input']
}

export type Subscription_RootOrganizationArgs = {
  id: Scalars['numeric']['input']
}

export type Subscription_RootOrganizationsArgs = {
  distinct_on?: InputMaybe<Array<Organizations_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Organizations_Order_By>>
  where?: InputMaybe<Organizations_Bool_Exp>
}

export type Subscription_RootOrganizations_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Organizations_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Organizations_Order_By>>
  where?: InputMaybe<Organizations_Bool_Exp>
}

export type Subscription_RootOrganizations_StreamArgs = {
  batch_size: Scalars['Int']['input']
  cursor: Array<InputMaybe<Organizations_Stream_Cursor_Input>>
  where?: InputMaybe<Organizations_Bool_Exp>
}

export type Subscription_RootPersonArgs = {
  id: Scalars['numeric']['input']
}

export type Subscription_RootPersonsArgs = {
  distinct_on?: InputMaybe<Array<Persons_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Persons_Order_By>>
  where?: InputMaybe<Persons_Bool_Exp>
}

export type Subscription_RootPersons_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Persons_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Persons_Order_By>>
  where?: InputMaybe<Persons_Bool_Exp>
}

export type Subscription_RootPersons_StreamArgs = {
  batch_size: Scalars['Int']['input']
  cursor: Array<InputMaybe<Persons_Stream_Cursor_Input>>
  where?: InputMaybe<Persons_Bool_Exp>
}

export type Subscription_RootPositionArgs = {
  id: Scalars['String']['input']
}

export type Subscription_RootPositionsArgs = {
  distinct_on?: InputMaybe<Array<Positions_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Positions_Order_By>>
  where?: InputMaybe<Positions_Bool_Exp>
}

export type Subscription_RootPositions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Positions_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Positions_Order_By>>
  where?: InputMaybe<Positions_Bool_Exp>
}

export type Subscription_RootPositions_StreamArgs = {
  batch_size: Scalars['Int']['input']
  cursor: Array<InputMaybe<Positions_Stream_Cursor_Input>>
  where?: InputMaybe<Positions_Bool_Exp>
}

export type Subscription_RootRedemptionArgs = {
  id: Scalars['String']['input']
}

export type Subscription_RootRedemptionsArgs = {
  distinct_on?: InputMaybe<Array<Redemptions_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Redemptions_Order_By>>
  where?: InputMaybe<Redemptions_Bool_Exp>
}

export type Subscription_RootRedemptions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Redemptions_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Redemptions_Order_By>>
  where?: InputMaybe<Redemptions_Bool_Exp>
}

export type Subscription_RootRedemptions_StreamArgs = {
  batch_size: Scalars['Int']['input']
  cursor: Array<InputMaybe<Redemptions_Stream_Cursor_Input>>
  where?: InputMaybe<Redemptions_Bool_Exp>
}

export type Subscription_RootSignalArgs = {
  id: Scalars['String']['input']
}

export type Subscription_RootSignalsArgs = {
  distinct_on?: InputMaybe<Array<Signals_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Signals_Order_By>>
  where?: InputMaybe<Signals_Bool_Exp>
}

export type Subscription_RootSignals_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Signals_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Signals_Order_By>>
  where?: InputMaybe<Signals_Bool_Exp>
}

export type Subscription_RootSignals_StreamArgs = {
  batch_size: Scalars['Int']['input']
  cursor: Array<InputMaybe<Signals_Stream_Cursor_Input>>
  where?: InputMaybe<Signals_Bool_Exp>
}

export type Subscription_RootStatArgs = {
  id: Scalars['Int']['input']
}

export type Subscription_RootStatHourArgs = {
  id: Scalars['Int']['input']
}

export type Subscription_RootStatHoursArgs = {
  distinct_on?: InputMaybe<Array<StatHours_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<StatHours_Order_By>>
  where?: InputMaybe<StatHours_Bool_Exp>
}

export type Subscription_RootStatHours_AggregateArgs = {
  distinct_on?: InputMaybe<Array<StatHours_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<StatHours_Order_By>>
  where?: InputMaybe<StatHours_Bool_Exp>
}

export type Subscription_RootStatHours_StreamArgs = {
  batch_size: Scalars['Int']['input']
  cursor: Array<InputMaybe<StatHours_Stream_Cursor_Input>>
  where?: InputMaybe<StatHours_Bool_Exp>
}

export type Subscription_RootStatsArgs = {
  distinct_on?: InputMaybe<Array<Stats_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Stats_Order_By>>
  where?: InputMaybe<Stats_Bool_Exp>
}

export type Subscription_RootStats_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Stats_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Stats_Order_By>>
  where?: InputMaybe<Stats_Bool_Exp>
}

export type Subscription_RootStats_StreamArgs = {
  batch_size: Scalars['Int']['input']
  cursor: Array<InputMaybe<Stats_Stream_Cursor_Input>>
  where?: InputMaybe<Stats_Bool_Exp>
}

export type Subscription_RootThingArgs = {
  id: Scalars['numeric']['input']
}

export type Subscription_RootThingsArgs = {
  distinct_on?: InputMaybe<Array<Things_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Things_Order_By>>
  where?: InputMaybe<Things_Bool_Exp>
}

export type Subscription_RootThings_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Things_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Things_Order_By>>
  where?: InputMaybe<Things_Bool_Exp>
}

export type Subscription_RootThings_StreamArgs = {
  batch_size: Scalars['Int']['input']
  cursor: Array<InputMaybe<Things_Stream_Cursor_Input>>
  where?: InputMaybe<Things_Bool_Exp>
}

export type Subscription_RootTripleArgs = {
  id: Scalars['numeric']['input']
}

export type Subscription_RootTriplesArgs = {
  distinct_on?: InputMaybe<Array<Triples_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Triples_Order_By>>
  where?: InputMaybe<Triples_Bool_Exp>
}

export type Subscription_RootTriples_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Triples_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Triples_Order_By>>
  where?: InputMaybe<Triples_Bool_Exp>
}

export type Subscription_RootTriples_StreamArgs = {
  batch_size: Scalars['Int']['input']
  cursor: Array<InputMaybe<Triples_Stream_Cursor_Input>>
  where?: InputMaybe<Triples_Bool_Exp>
}

export type Subscription_RootVaultArgs = {
  id: Scalars['numeric']['input']
}

export type Subscription_RootVaultsArgs = {
  distinct_on?: InputMaybe<Array<Vaults_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Vaults_Order_By>>
  where?: InputMaybe<Vaults_Bool_Exp>
}

export type Subscription_RootVaults_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Vaults_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Vaults_Order_By>>
  where?: InputMaybe<Vaults_Bool_Exp>
}

export type Subscription_RootVaults_StreamArgs = {
  batch_size: Scalars['Int']['input']
  cursor: Array<InputMaybe<Vaults_Stream_Cursor_Input>>
  where?: InputMaybe<Vaults_Bool_Exp>
}

/** columns and relationships of "Thing" */
export type Things = {
  __typename?: 'things'
  /** An object relationship */
  atom?: Maybe<Atoms>
  atomId: Scalars['numeric']['output']
  description?: Maybe<Scalars['String']['output']>
  id: Scalars['numeric']['output']
  image?: Maybe<Scalars['String']['output']>
  name?: Maybe<Scalars['String']['output']>
  url?: Maybe<Scalars['String']['output']>
}

/** aggregated selection of "Thing" */
export type Things_Aggregate = {
  __typename?: 'things_aggregate'
  aggregate?: Maybe<Things_Aggregate_Fields>
  nodes: Array<Things>
}

/** aggregate fields of "Thing" */
export type Things_Aggregate_Fields = {
  __typename?: 'things_aggregate_fields'
  avg?: Maybe<Things_Avg_Fields>
  count: Scalars['Int']['output']
  max?: Maybe<Things_Max_Fields>
  min?: Maybe<Things_Min_Fields>
  stddev?: Maybe<Things_Stddev_Fields>
  stddev_pop?: Maybe<Things_Stddev_Pop_Fields>
  stddev_samp?: Maybe<Things_Stddev_Samp_Fields>
  sum?: Maybe<Things_Sum_Fields>
  var_pop?: Maybe<Things_Var_Pop_Fields>
  var_samp?: Maybe<Things_Var_Samp_Fields>
  variance?: Maybe<Things_Variance_Fields>
}

/** aggregate fields of "Thing" */
export type Things_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Things_Select_Column>>
  distinct?: InputMaybe<Scalars['Boolean']['input']>
}

/** aggregate avg on columns */
export type Things_Avg_Fields = {
  __typename?: 'things_avg_fields'
  atomId?: Maybe<Scalars['Float']['output']>
  id?: Maybe<Scalars['Float']['output']>
}

/** Boolean expression to filter rows from the table "Thing". All fields are combined with a logical 'AND'. */
export type Things_Bool_Exp = {
  _and?: InputMaybe<Array<Things_Bool_Exp>>
  _not?: InputMaybe<Things_Bool_Exp>
  _or?: InputMaybe<Array<Things_Bool_Exp>>
  atom?: InputMaybe<Atoms_Bool_Exp>
  atomId?: InputMaybe<Numeric_Comparison_Exp>
  description?: InputMaybe<String_Comparison_Exp>
  id?: InputMaybe<Numeric_Comparison_Exp>
  image?: InputMaybe<String_Comparison_Exp>
  name?: InputMaybe<String_Comparison_Exp>
  url?: InputMaybe<String_Comparison_Exp>
}

/** unique or primary key constraints on table "Thing" */
export enum Things_Constraint {
  /** unique or primary key constraint on columns "id" */
  ThingPkey = 'Thing_pkey',
}

/** input type for incrementing numeric columns in table "Thing" */
export type Things_Inc_Input = {
  atomId?: InputMaybe<Scalars['numeric']['input']>
  id?: InputMaybe<Scalars['numeric']['input']>
}

/** input type for inserting data into table "Thing" */
export type Things_Insert_Input = {
  atom?: InputMaybe<Atoms_Obj_Rel_Insert_Input>
  atomId?: InputMaybe<Scalars['numeric']['input']>
  description?: InputMaybe<Scalars['String']['input']>
  id?: InputMaybe<Scalars['numeric']['input']>
  image?: InputMaybe<Scalars['String']['input']>
  name?: InputMaybe<Scalars['String']['input']>
  url?: InputMaybe<Scalars['String']['input']>
}

/** aggregate max on columns */
export type Things_Max_Fields = {
  __typename?: 'things_max_fields'
  atomId?: Maybe<Scalars['numeric']['output']>
  description?: Maybe<Scalars['String']['output']>
  id?: Maybe<Scalars['numeric']['output']>
  image?: Maybe<Scalars['String']['output']>
  name?: Maybe<Scalars['String']['output']>
  url?: Maybe<Scalars['String']['output']>
}

/** aggregate min on columns */
export type Things_Min_Fields = {
  __typename?: 'things_min_fields'
  atomId?: Maybe<Scalars['numeric']['output']>
  description?: Maybe<Scalars['String']['output']>
  id?: Maybe<Scalars['numeric']['output']>
  image?: Maybe<Scalars['String']['output']>
  name?: Maybe<Scalars['String']['output']>
  url?: Maybe<Scalars['String']['output']>
}

/** response of any mutation on the table "Thing" */
export type Things_Mutation_Response = {
  __typename?: 'things_mutation_response'
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output']
  /** data from the rows affected by the mutation */
  returning: Array<Things>
}

/** input type for inserting object relation for remote table "Thing" */
export type Things_Obj_Rel_Insert_Input = {
  data: Things_Insert_Input
  /** upsert condition */
  on_conflict?: InputMaybe<Things_On_Conflict>
}

/** on_conflict condition type for table "Thing" */
export type Things_On_Conflict = {
  constraint: Things_Constraint
  update_columns?: Array<Things_Update_Column>
  where?: InputMaybe<Things_Bool_Exp>
}

/** Ordering options when selecting data from "Thing". */
export type Things_Order_By = {
  atom?: InputMaybe<Atoms_Order_By>
  atomId?: InputMaybe<Order_By>
  description?: InputMaybe<Order_By>
  id?: InputMaybe<Order_By>
  image?: InputMaybe<Order_By>
  name?: InputMaybe<Order_By>
  url?: InputMaybe<Order_By>
}

/** primary key columns input for table: Thing */
export type Things_Pk_Columns_Input = {
  id: Scalars['numeric']['input']
}

/** select columns of table "Thing" */
export enum Things_Select_Column {
  /** column name */
  AtomId = 'atomId',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Image = 'image',
  /** column name */
  Name = 'name',
  /** column name */
  Url = 'url',
}

/** input type for updating data in table "Thing" */
export type Things_Set_Input = {
  atomId?: InputMaybe<Scalars['numeric']['input']>
  description?: InputMaybe<Scalars['String']['input']>
  id?: InputMaybe<Scalars['numeric']['input']>
  image?: InputMaybe<Scalars['String']['input']>
  name?: InputMaybe<Scalars['String']['input']>
  url?: InputMaybe<Scalars['String']['input']>
}

/** aggregate stddev on columns */
export type Things_Stddev_Fields = {
  __typename?: 'things_stddev_fields'
  atomId?: Maybe<Scalars['Float']['output']>
  id?: Maybe<Scalars['Float']['output']>
}

/** aggregate stddev_pop on columns */
export type Things_Stddev_Pop_Fields = {
  __typename?: 'things_stddev_pop_fields'
  atomId?: Maybe<Scalars['Float']['output']>
  id?: Maybe<Scalars['Float']['output']>
}

/** aggregate stddev_samp on columns */
export type Things_Stddev_Samp_Fields = {
  __typename?: 'things_stddev_samp_fields'
  atomId?: Maybe<Scalars['Float']['output']>
  id?: Maybe<Scalars['Float']['output']>
}

/** Streaming cursor of the table "things" */
export type Things_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Things_Stream_Cursor_Value_Input
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>
}

/** Initial value of the column from where the streaming should start */
export type Things_Stream_Cursor_Value_Input = {
  atomId?: InputMaybe<Scalars['numeric']['input']>
  description?: InputMaybe<Scalars['String']['input']>
  id?: InputMaybe<Scalars['numeric']['input']>
  image?: InputMaybe<Scalars['String']['input']>
  name?: InputMaybe<Scalars['String']['input']>
  url?: InputMaybe<Scalars['String']['input']>
}

/** aggregate sum on columns */
export type Things_Sum_Fields = {
  __typename?: 'things_sum_fields'
  atomId?: Maybe<Scalars['numeric']['output']>
  id?: Maybe<Scalars['numeric']['output']>
}

/** update columns of table "Thing" */
export enum Things_Update_Column {
  /** column name */
  AtomId = 'atomId',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Image = 'image',
  /** column name */
  Name = 'name',
  /** column name */
  Url = 'url',
}

export type Things_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Things_Inc_Input>
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Things_Set_Input>
  /** filter the rows which have to be updated */
  where: Things_Bool_Exp
}

/** aggregate var_pop on columns */
export type Things_Var_Pop_Fields = {
  __typename?: 'things_var_pop_fields'
  atomId?: Maybe<Scalars['Float']['output']>
  id?: Maybe<Scalars['Float']['output']>
}

/** aggregate var_samp on columns */
export type Things_Var_Samp_Fields = {
  __typename?: 'things_var_samp_fields'
  atomId?: Maybe<Scalars['Float']['output']>
  id?: Maybe<Scalars['Float']['output']>
}

/** aggregate variance on columns */
export type Things_Variance_Fields = {
  __typename?: 'things_variance_fields'
  atomId?: Maybe<Scalars['Float']['output']>
  id?: Maybe<Scalars['Float']['output']>
}

/** columns and relationships of "Triple" */
export type Triples = {
  __typename?: 'triples'
  blockNumber: Scalars['numeric']['output']
  blockTimestamp: Scalars['numeric']['output']
  /** An object relationship */
  counterVault?: Maybe<Vaults>
  counterVaultId: Scalars['numeric']['output']
  /** An object relationship */
  creator?: Maybe<Accounts>
  creatorId: Scalars['bytea']['output']
  id: Scalars['numeric']['output']
  label?: Maybe<Scalars['String']['output']>
  /** An object relationship */
  object?: Maybe<Atoms>
  objectId: Scalars['numeric']['output']
  /** An object relationship */
  predicate?: Maybe<Atoms>
  predicateId: Scalars['numeric']['output']
  /** An object relationship */
  subject?: Maybe<Atoms>
  subjectId: Scalars['numeric']['output']
  transactionHash: Scalars['bytea']['output']
  /** An object relationship */
  vault?: Maybe<Vaults>
  vaultId: Scalars['numeric']['output']
}

/** aggregated selection of "Triple" */
export type Triples_Aggregate = {
  __typename?: 'triples_aggregate'
  aggregate?: Maybe<Triples_Aggregate_Fields>
  nodes: Array<Triples>
}

export type Triples_Aggregate_Bool_Exp = {
  count?: InputMaybe<Triples_Aggregate_Bool_Exp_Count>
}

export type Triples_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Triples_Select_Column>>
  distinct?: InputMaybe<Scalars['Boolean']['input']>
  filter?: InputMaybe<Triples_Bool_Exp>
  predicate: Int_Comparison_Exp
}

/** aggregate fields of "Triple" */
export type Triples_Aggregate_Fields = {
  __typename?: 'triples_aggregate_fields'
  avg?: Maybe<Triples_Avg_Fields>
  count: Scalars['Int']['output']
  max?: Maybe<Triples_Max_Fields>
  min?: Maybe<Triples_Min_Fields>
  stddev?: Maybe<Triples_Stddev_Fields>
  stddev_pop?: Maybe<Triples_Stddev_Pop_Fields>
  stddev_samp?: Maybe<Triples_Stddev_Samp_Fields>
  sum?: Maybe<Triples_Sum_Fields>
  var_pop?: Maybe<Triples_Var_Pop_Fields>
  var_samp?: Maybe<Triples_Var_Samp_Fields>
  variance?: Maybe<Triples_Variance_Fields>
}

/** aggregate fields of "Triple" */
export type Triples_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Triples_Select_Column>>
  distinct?: InputMaybe<Scalars['Boolean']['input']>
}

/** order by aggregate values of table "Triple" */
export type Triples_Aggregate_Order_By = {
  avg?: InputMaybe<Triples_Avg_Order_By>
  count?: InputMaybe<Order_By>
  max?: InputMaybe<Triples_Max_Order_By>
  min?: InputMaybe<Triples_Min_Order_By>
  stddev?: InputMaybe<Triples_Stddev_Order_By>
  stddev_pop?: InputMaybe<Triples_Stddev_Pop_Order_By>
  stddev_samp?: InputMaybe<Triples_Stddev_Samp_Order_By>
  sum?: InputMaybe<Triples_Sum_Order_By>
  var_pop?: InputMaybe<Triples_Var_Pop_Order_By>
  var_samp?: InputMaybe<Triples_Var_Samp_Order_By>
  variance?: InputMaybe<Triples_Variance_Order_By>
}

/** input type for inserting array relation for remote table "Triple" */
export type Triples_Arr_Rel_Insert_Input = {
  data: Array<Triples_Insert_Input>
  /** upsert condition */
  on_conflict?: InputMaybe<Triples_On_Conflict>
}

/** aggregate avg on columns */
export type Triples_Avg_Fields = {
  __typename?: 'triples_avg_fields'
  blockNumber?: Maybe<Scalars['Float']['output']>
  blockTimestamp?: Maybe<Scalars['Float']['output']>
  counterVaultId?: Maybe<Scalars['Float']['output']>
  id?: Maybe<Scalars['Float']['output']>
  objectId?: Maybe<Scalars['Float']['output']>
  predicateId?: Maybe<Scalars['Float']['output']>
  subjectId?: Maybe<Scalars['Float']['output']>
  vaultId?: Maybe<Scalars['Float']['output']>
}

/** order by avg() on columns of table "Triple" */
export type Triples_Avg_Order_By = {
  blockNumber?: InputMaybe<Order_By>
  blockTimestamp?: InputMaybe<Order_By>
  counterVaultId?: InputMaybe<Order_By>
  id?: InputMaybe<Order_By>
  objectId?: InputMaybe<Order_By>
  predicateId?: InputMaybe<Order_By>
  subjectId?: InputMaybe<Order_By>
  vaultId?: InputMaybe<Order_By>
}

/** Boolean expression to filter rows from the table "Triple". All fields are combined with a logical 'AND'. */
export type Triples_Bool_Exp = {
  _and?: InputMaybe<Array<Triples_Bool_Exp>>
  _not?: InputMaybe<Triples_Bool_Exp>
  _or?: InputMaybe<Array<Triples_Bool_Exp>>
  blockNumber?: InputMaybe<Numeric_Comparison_Exp>
  blockTimestamp?: InputMaybe<Numeric_Comparison_Exp>
  counterVault?: InputMaybe<Vaults_Bool_Exp>
  counterVaultId?: InputMaybe<Numeric_Comparison_Exp>
  creator?: InputMaybe<Accounts_Bool_Exp>
  creatorId?: InputMaybe<Bytea_Comparison_Exp>
  id?: InputMaybe<Numeric_Comparison_Exp>
  label?: InputMaybe<String_Comparison_Exp>
  object?: InputMaybe<Atoms_Bool_Exp>
  objectId?: InputMaybe<Numeric_Comparison_Exp>
  predicate?: InputMaybe<Atoms_Bool_Exp>
  predicateId?: InputMaybe<Numeric_Comparison_Exp>
  subject?: InputMaybe<Atoms_Bool_Exp>
  subjectId?: InputMaybe<Numeric_Comparison_Exp>
  transactionHash?: InputMaybe<Bytea_Comparison_Exp>
  vault?: InputMaybe<Vaults_Bool_Exp>
  vaultId?: InputMaybe<Numeric_Comparison_Exp>
}

/** unique or primary key constraints on table "Triple" */
export enum Triples_Constraint {
  /** unique or primary key constraint on columns "id" */
  TriplePkey = 'Triple_pkey',
}

/** input type for incrementing numeric columns in table "Triple" */
export type Triples_Inc_Input = {
  blockNumber?: InputMaybe<Scalars['numeric']['input']>
  blockTimestamp?: InputMaybe<Scalars['numeric']['input']>
  counterVaultId?: InputMaybe<Scalars['numeric']['input']>
  id?: InputMaybe<Scalars['numeric']['input']>
  objectId?: InputMaybe<Scalars['numeric']['input']>
  predicateId?: InputMaybe<Scalars['numeric']['input']>
  subjectId?: InputMaybe<Scalars['numeric']['input']>
  vaultId?: InputMaybe<Scalars['numeric']['input']>
}

/** input type for inserting data into table "Triple" */
export type Triples_Insert_Input = {
  blockNumber?: InputMaybe<Scalars['numeric']['input']>
  blockTimestamp?: InputMaybe<Scalars['numeric']['input']>
  counterVault?: InputMaybe<Vaults_Obj_Rel_Insert_Input>
  counterVaultId?: InputMaybe<Scalars['numeric']['input']>
  creator?: InputMaybe<Accounts_Obj_Rel_Insert_Input>
  creatorId?: InputMaybe<Scalars['bytea']['input']>
  id?: InputMaybe<Scalars['numeric']['input']>
  label?: InputMaybe<Scalars['String']['input']>
  object?: InputMaybe<Atoms_Obj_Rel_Insert_Input>
  objectId?: InputMaybe<Scalars['numeric']['input']>
  predicate?: InputMaybe<Atoms_Obj_Rel_Insert_Input>
  predicateId?: InputMaybe<Scalars['numeric']['input']>
  subject?: InputMaybe<Atoms_Obj_Rel_Insert_Input>
  subjectId?: InputMaybe<Scalars['numeric']['input']>
  transactionHash?: InputMaybe<Scalars['bytea']['input']>
  vault?: InputMaybe<Vaults_Obj_Rel_Insert_Input>
  vaultId?: InputMaybe<Scalars['numeric']['input']>
}

/** aggregate max on columns */
export type Triples_Max_Fields = {
  __typename?: 'triples_max_fields'
  blockNumber?: Maybe<Scalars['numeric']['output']>
  blockTimestamp?: Maybe<Scalars['numeric']['output']>
  counterVaultId?: Maybe<Scalars['numeric']['output']>
  id?: Maybe<Scalars['numeric']['output']>
  label?: Maybe<Scalars['String']['output']>
  objectId?: Maybe<Scalars['numeric']['output']>
  predicateId?: Maybe<Scalars['numeric']['output']>
  subjectId?: Maybe<Scalars['numeric']['output']>
  vaultId?: Maybe<Scalars['numeric']['output']>
}

/** order by max() on columns of table "Triple" */
export type Triples_Max_Order_By = {
  blockNumber?: InputMaybe<Order_By>
  blockTimestamp?: InputMaybe<Order_By>
  counterVaultId?: InputMaybe<Order_By>
  id?: InputMaybe<Order_By>
  label?: InputMaybe<Order_By>
  objectId?: InputMaybe<Order_By>
  predicateId?: InputMaybe<Order_By>
  subjectId?: InputMaybe<Order_By>
  vaultId?: InputMaybe<Order_By>
}

/** aggregate min on columns */
export type Triples_Min_Fields = {
  __typename?: 'triples_min_fields'
  blockNumber?: Maybe<Scalars['numeric']['output']>
  blockTimestamp?: Maybe<Scalars['numeric']['output']>
  counterVaultId?: Maybe<Scalars['numeric']['output']>
  id?: Maybe<Scalars['numeric']['output']>
  label?: Maybe<Scalars['String']['output']>
  objectId?: Maybe<Scalars['numeric']['output']>
  predicateId?: Maybe<Scalars['numeric']['output']>
  subjectId?: Maybe<Scalars['numeric']['output']>
  vaultId?: Maybe<Scalars['numeric']['output']>
}

/** order by min() on columns of table "Triple" */
export type Triples_Min_Order_By = {
  blockNumber?: InputMaybe<Order_By>
  blockTimestamp?: InputMaybe<Order_By>
  counterVaultId?: InputMaybe<Order_By>
  id?: InputMaybe<Order_By>
  label?: InputMaybe<Order_By>
  objectId?: InputMaybe<Order_By>
  predicateId?: InputMaybe<Order_By>
  subjectId?: InputMaybe<Order_By>
  vaultId?: InputMaybe<Order_By>
}

/** response of any mutation on the table "Triple" */
export type Triples_Mutation_Response = {
  __typename?: 'triples_mutation_response'
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output']
  /** data from the rows affected by the mutation */
  returning: Array<Triples>
}

/** input type for inserting object relation for remote table "Triple" */
export type Triples_Obj_Rel_Insert_Input = {
  data: Triples_Insert_Input
  /** upsert condition */
  on_conflict?: InputMaybe<Triples_On_Conflict>
}

/** on_conflict condition type for table "Triple" */
export type Triples_On_Conflict = {
  constraint: Triples_Constraint
  update_columns?: Array<Triples_Update_Column>
  where?: InputMaybe<Triples_Bool_Exp>
}

/** Ordering options when selecting data from "Triple". */
export type Triples_Order_By = {
  blockNumber?: InputMaybe<Order_By>
  blockTimestamp?: InputMaybe<Order_By>
  counterVault?: InputMaybe<Vaults_Order_By>
  counterVaultId?: InputMaybe<Order_By>
  creator?: InputMaybe<Accounts_Order_By>
  creatorId?: InputMaybe<Order_By>
  id?: InputMaybe<Order_By>
  label?: InputMaybe<Order_By>
  object?: InputMaybe<Atoms_Order_By>
  objectId?: InputMaybe<Order_By>
  predicate?: InputMaybe<Atoms_Order_By>
  predicateId?: InputMaybe<Order_By>
  subject?: InputMaybe<Atoms_Order_By>
  subjectId?: InputMaybe<Order_By>
  transactionHash?: InputMaybe<Order_By>
  vault?: InputMaybe<Vaults_Order_By>
  vaultId?: InputMaybe<Order_By>
}

/** primary key columns input for table: Triple */
export type Triples_Pk_Columns_Input = {
  id: Scalars['numeric']['input']
}

/** select columns of table "Triple" */
export enum Triples_Select_Column {
  /** column name */
  BlockNumber = 'blockNumber',
  /** column name */
  BlockTimestamp = 'blockTimestamp',
  /** column name */
  CounterVaultId = 'counterVaultId',
  /** column name */
  CreatorId = 'creatorId',
  /** column name */
  Id = 'id',
  /** column name */
  Label = 'label',
  /** column name */
  ObjectId = 'objectId',
  /** column name */
  PredicateId = 'predicateId',
  /** column name */
  SubjectId = 'subjectId',
  /** column name */
  TransactionHash = 'transactionHash',
  /** column name */
  VaultId = 'vaultId',
}

/** input type for updating data in table "Triple" */
export type Triples_Set_Input = {
  blockNumber?: InputMaybe<Scalars['numeric']['input']>
  blockTimestamp?: InputMaybe<Scalars['numeric']['input']>
  counterVaultId?: InputMaybe<Scalars['numeric']['input']>
  creatorId?: InputMaybe<Scalars['bytea']['input']>
  id?: InputMaybe<Scalars['numeric']['input']>
  label?: InputMaybe<Scalars['String']['input']>
  objectId?: InputMaybe<Scalars['numeric']['input']>
  predicateId?: InputMaybe<Scalars['numeric']['input']>
  subjectId?: InputMaybe<Scalars['numeric']['input']>
  transactionHash?: InputMaybe<Scalars['bytea']['input']>
  vaultId?: InputMaybe<Scalars['numeric']['input']>
}

/** aggregate stddev on columns */
export type Triples_Stddev_Fields = {
  __typename?: 'triples_stddev_fields'
  blockNumber?: Maybe<Scalars['Float']['output']>
  blockTimestamp?: Maybe<Scalars['Float']['output']>
  counterVaultId?: Maybe<Scalars['Float']['output']>
  id?: Maybe<Scalars['Float']['output']>
  objectId?: Maybe<Scalars['Float']['output']>
  predicateId?: Maybe<Scalars['Float']['output']>
  subjectId?: Maybe<Scalars['Float']['output']>
  vaultId?: Maybe<Scalars['Float']['output']>
}

/** order by stddev() on columns of table "Triple" */
export type Triples_Stddev_Order_By = {
  blockNumber?: InputMaybe<Order_By>
  blockTimestamp?: InputMaybe<Order_By>
  counterVaultId?: InputMaybe<Order_By>
  id?: InputMaybe<Order_By>
  objectId?: InputMaybe<Order_By>
  predicateId?: InputMaybe<Order_By>
  subjectId?: InputMaybe<Order_By>
  vaultId?: InputMaybe<Order_By>
}

/** aggregate stddev_pop on columns */
export type Triples_Stddev_Pop_Fields = {
  __typename?: 'triples_stddev_pop_fields'
  blockNumber?: Maybe<Scalars['Float']['output']>
  blockTimestamp?: Maybe<Scalars['Float']['output']>
  counterVaultId?: Maybe<Scalars['Float']['output']>
  id?: Maybe<Scalars['Float']['output']>
  objectId?: Maybe<Scalars['Float']['output']>
  predicateId?: Maybe<Scalars['Float']['output']>
  subjectId?: Maybe<Scalars['Float']['output']>
  vaultId?: Maybe<Scalars['Float']['output']>
}

/** order by stddev_pop() on columns of table "Triple" */
export type Triples_Stddev_Pop_Order_By = {
  blockNumber?: InputMaybe<Order_By>
  blockTimestamp?: InputMaybe<Order_By>
  counterVaultId?: InputMaybe<Order_By>
  id?: InputMaybe<Order_By>
  objectId?: InputMaybe<Order_By>
  predicateId?: InputMaybe<Order_By>
  subjectId?: InputMaybe<Order_By>
  vaultId?: InputMaybe<Order_By>
}

/** aggregate stddev_samp on columns */
export type Triples_Stddev_Samp_Fields = {
  __typename?: 'triples_stddev_samp_fields'
  blockNumber?: Maybe<Scalars['Float']['output']>
  blockTimestamp?: Maybe<Scalars['Float']['output']>
  counterVaultId?: Maybe<Scalars['Float']['output']>
  id?: Maybe<Scalars['Float']['output']>
  objectId?: Maybe<Scalars['Float']['output']>
  predicateId?: Maybe<Scalars['Float']['output']>
  subjectId?: Maybe<Scalars['Float']['output']>
  vaultId?: Maybe<Scalars['Float']['output']>
}

/** order by stddev_samp() on columns of table "Triple" */
export type Triples_Stddev_Samp_Order_By = {
  blockNumber?: InputMaybe<Order_By>
  blockTimestamp?: InputMaybe<Order_By>
  counterVaultId?: InputMaybe<Order_By>
  id?: InputMaybe<Order_By>
  objectId?: InputMaybe<Order_By>
  predicateId?: InputMaybe<Order_By>
  subjectId?: InputMaybe<Order_By>
  vaultId?: InputMaybe<Order_By>
}

/** Streaming cursor of the table "triples" */
export type Triples_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Triples_Stream_Cursor_Value_Input
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>
}

/** Initial value of the column from where the streaming should start */
export type Triples_Stream_Cursor_Value_Input = {
  blockNumber?: InputMaybe<Scalars['numeric']['input']>
  blockTimestamp?: InputMaybe<Scalars['numeric']['input']>
  counterVaultId?: InputMaybe<Scalars['numeric']['input']>
  creatorId?: InputMaybe<Scalars['bytea']['input']>
  id?: InputMaybe<Scalars['numeric']['input']>
  label?: InputMaybe<Scalars['String']['input']>
  objectId?: InputMaybe<Scalars['numeric']['input']>
  predicateId?: InputMaybe<Scalars['numeric']['input']>
  subjectId?: InputMaybe<Scalars['numeric']['input']>
  transactionHash?: InputMaybe<Scalars['bytea']['input']>
  vaultId?: InputMaybe<Scalars['numeric']['input']>
}

/** aggregate sum on columns */
export type Triples_Sum_Fields = {
  __typename?: 'triples_sum_fields'
  blockNumber?: Maybe<Scalars['numeric']['output']>
  blockTimestamp?: Maybe<Scalars['numeric']['output']>
  counterVaultId?: Maybe<Scalars['numeric']['output']>
  id?: Maybe<Scalars['numeric']['output']>
  objectId?: Maybe<Scalars['numeric']['output']>
  predicateId?: Maybe<Scalars['numeric']['output']>
  subjectId?: Maybe<Scalars['numeric']['output']>
  vaultId?: Maybe<Scalars['numeric']['output']>
}

/** order by sum() on columns of table "Triple" */
export type Triples_Sum_Order_By = {
  blockNumber?: InputMaybe<Order_By>
  blockTimestamp?: InputMaybe<Order_By>
  counterVaultId?: InputMaybe<Order_By>
  id?: InputMaybe<Order_By>
  objectId?: InputMaybe<Order_By>
  predicateId?: InputMaybe<Order_By>
  subjectId?: InputMaybe<Order_By>
  vaultId?: InputMaybe<Order_By>
}

/** update columns of table "Triple" */
export enum Triples_Update_Column {
  /** column name */
  BlockNumber = 'blockNumber',
  /** column name */
  BlockTimestamp = 'blockTimestamp',
  /** column name */
  CounterVaultId = 'counterVaultId',
  /** column name */
  CreatorId = 'creatorId',
  /** column name */
  Id = 'id',
  /** column name */
  Label = 'label',
  /** column name */
  ObjectId = 'objectId',
  /** column name */
  PredicateId = 'predicateId',
  /** column name */
  SubjectId = 'subjectId',
  /** column name */
  TransactionHash = 'transactionHash',
  /** column name */
  VaultId = 'vaultId',
}

export type Triples_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Triples_Inc_Input>
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Triples_Set_Input>
  /** filter the rows which have to be updated */
  where: Triples_Bool_Exp
}

/** aggregate var_pop on columns */
export type Triples_Var_Pop_Fields = {
  __typename?: 'triples_var_pop_fields'
  blockNumber?: Maybe<Scalars['Float']['output']>
  blockTimestamp?: Maybe<Scalars['Float']['output']>
  counterVaultId?: Maybe<Scalars['Float']['output']>
  id?: Maybe<Scalars['Float']['output']>
  objectId?: Maybe<Scalars['Float']['output']>
  predicateId?: Maybe<Scalars['Float']['output']>
  subjectId?: Maybe<Scalars['Float']['output']>
  vaultId?: Maybe<Scalars['Float']['output']>
}

/** order by var_pop() on columns of table "Triple" */
export type Triples_Var_Pop_Order_By = {
  blockNumber?: InputMaybe<Order_By>
  blockTimestamp?: InputMaybe<Order_By>
  counterVaultId?: InputMaybe<Order_By>
  id?: InputMaybe<Order_By>
  objectId?: InputMaybe<Order_By>
  predicateId?: InputMaybe<Order_By>
  subjectId?: InputMaybe<Order_By>
  vaultId?: InputMaybe<Order_By>
}

/** aggregate var_samp on columns */
export type Triples_Var_Samp_Fields = {
  __typename?: 'triples_var_samp_fields'
  blockNumber?: Maybe<Scalars['Float']['output']>
  blockTimestamp?: Maybe<Scalars['Float']['output']>
  counterVaultId?: Maybe<Scalars['Float']['output']>
  id?: Maybe<Scalars['Float']['output']>
  objectId?: Maybe<Scalars['Float']['output']>
  predicateId?: Maybe<Scalars['Float']['output']>
  subjectId?: Maybe<Scalars['Float']['output']>
  vaultId?: Maybe<Scalars['Float']['output']>
}

/** order by var_samp() on columns of table "Triple" */
export type Triples_Var_Samp_Order_By = {
  blockNumber?: InputMaybe<Order_By>
  blockTimestamp?: InputMaybe<Order_By>
  counterVaultId?: InputMaybe<Order_By>
  id?: InputMaybe<Order_By>
  objectId?: InputMaybe<Order_By>
  predicateId?: InputMaybe<Order_By>
  subjectId?: InputMaybe<Order_By>
  vaultId?: InputMaybe<Order_By>
}

/** aggregate variance on columns */
export type Triples_Variance_Fields = {
  __typename?: 'triples_variance_fields'
  blockNumber?: Maybe<Scalars['Float']['output']>
  blockTimestamp?: Maybe<Scalars['Float']['output']>
  counterVaultId?: Maybe<Scalars['Float']['output']>
  id?: Maybe<Scalars['Float']['output']>
  objectId?: Maybe<Scalars['Float']['output']>
  predicateId?: Maybe<Scalars['Float']['output']>
  subjectId?: Maybe<Scalars['Float']['output']>
  vaultId?: Maybe<Scalars['Float']['output']>
}

/** order by variance() on columns of table "Triple" */
export type Triples_Variance_Order_By = {
  blockNumber?: InputMaybe<Order_By>
  blockTimestamp?: InputMaybe<Order_By>
  counterVaultId?: InputMaybe<Order_By>
  id?: InputMaybe<Order_By>
  objectId?: InputMaybe<Order_By>
  predicateId?: InputMaybe<Order_By>
  subjectId?: InputMaybe<Order_By>
  vaultId?: InputMaybe<Order_By>
}

/** columns and relationships of "Vault" */
export type Vaults = {
  __typename?: 'vaults'
  /** An object relationship */
  atom?: Maybe<Atoms>
  atomId?: Maybe<Scalars['numeric']['output']>
  currentSharePrice: Scalars['numeric']['output']
  /** An array relationship */
  deposits: Array<Deposits>
  /** An aggregate relationship */
  deposits_aggregate: Deposits_Aggregate
  id: Scalars['numeric']['output']
  positionCount: Scalars['Int']['output']
  /** An array relationship */
  positions: Array<Positions>
  /** An aggregate relationship */
  positions_aggregate: Positions_Aggregate
  /** An object relationship */
  redemptions?: Maybe<Redemptions>
  totalShares: Scalars['numeric']['output']
  /** An object relationship */
  triple?: Maybe<Triples>
  tripleId?: Maybe<Scalars['numeric']['output']>
}

/** columns and relationships of "Vault" */
export type VaultsDepositsArgs = {
  distinct_on?: InputMaybe<Array<Deposits_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Deposits_Order_By>>
  where?: InputMaybe<Deposits_Bool_Exp>
}

/** columns and relationships of "Vault" */
export type VaultsDeposits_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Deposits_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Deposits_Order_By>>
  where?: InputMaybe<Deposits_Bool_Exp>
}

/** columns and relationships of "Vault" */
export type VaultsPositionsArgs = {
  distinct_on?: InputMaybe<Array<Positions_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Positions_Order_By>>
  where?: InputMaybe<Positions_Bool_Exp>
}

/** columns and relationships of "Vault" */
export type VaultsPositions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Positions_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Positions_Order_By>>
  where?: InputMaybe<Positions_Bool_Exp>
}

/** aggregated selection of "Vault" */
export type Vaults_Aggregate = {
  __typename?: 'vaults_aggregate'
  aggregate?: Maybe<Vaults_Aggregate_Fields>
  nodes: Array<Vaults>
}

/** aggregate fields of "Vault" */
export type Vaults_Aggregate_Fields = {
  __typename?: 'vaults_aggregate_fields'
  avg?: Maybe<Vaults_Avg_Fields>
  count: Scalars['Int']['output']
  max?: Maybe<Vaults_Max_Fields>
  min?: Maybe<Vaults_Min_Fields>
  stddev?: Maybe<Vaults_Stddev_Fields>
  stddev_pop?: Maybe<Vaults_Stddev_Pop_Fields>
  stddev_samp?: Maybe<Vaults_Stddev_Samp_Fields>
  sum?: Maybe<Vaults_Sum_Fields>
  var_pop?: Maybe<Vaults_Var_Pop_Fields>
  var_samp?: Maybe<Vaults_Var_Samp_Fields>
  variance?: Maybe<Vaults_Variance_Fields>
}

/** aggregate fields of "Vault" */
export type Vaults_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Vaults_Select_Column>>
  distinct?: InputMaybe<Scalars['Boolean']['input']>
}

/** aggregate avg on columns */
export type Vaults_Avg_Fields = {
  __typename?: 'vaults_avg_fields'
  atomId?: Maybe<Scalars['Float']['output']>
  currentSharePrice?: Maybe<Scalars['Float']['output']>
  id?: Maybe<Scalars['Float']['output']>
  positionCount?: Maybe<Scalars['Float']['output']>
  totalShares?: Maybe<Scalars['Float']['output']>
  tripleId?: Maybe<Scalars['Float']['output']>
}

/** Boolean expression to filter rows from the table "Vault". All fields are combined with a logical 'AND'. */
export type Vaults_Bool_Exp = {
  _and?: InputMaybe<Array<Vaults_Bool_Exp>>
  _not?: InputMaybe<Vaults_Bool_Exp>
  _or?: InputMaybe<Array<Vaults_Bool_Exp>>
  atom?: InputMaybe<Atoms_Bool_Exp>
  atomId?: InputMaybe<Numeric_Comparison_Exp>
  currentSharePrice?: InputMaybe<Numeric_Comparison_Exp>
  deposits?: InputMaybe<Deposits_Bool_Exp>
  deposits_aggregate?: InputMaybe<Deposits_Aggregate_Bool_Exp>
  id?: InputMaybe<Numeric_Comparison_Exp>
  positionCount?: InputMaybe<Int_Comparison_Exp>
  positions?: InputMaybe<Positions_Bool_Exp>
  positions_aggregate?: InputMaybe<Positions_Aggregate_Bool_Exp>
  redemptions?: InputMaybe<Redemptions_Bool_Exp>
  totalShares?: InputMaybe<Numeric_Comparison_Exp>
  triple?: InputMaybe<Triples_Bool_Exp>
  tripleId?: InputMaybe<Numeric_Comparison_Exp>
}

/** unique or primary key constraints on table "Vault" */
export enum Vaults_Constraint {
  /** unique or primary key constraint on columns "id" */
  VaultPkey = 'Vault_pkey',
}

/** input type for incrementing numeric columns in table "Vault" */
export type Vaults_Inc_Input = {
  atomId?: InputMaybe<Scalars['numeric']['input']>
  currentSharePrice?: InputMaybe<Scalars['numeric']['input']>
  id?: InputMaybe<Scalars['numeric']['input']>
  positionCount?: InputMaybe<Scalars['Int']['input']>
  totalShares?: InputMaybe<Scalars['numeric']['input']>
  tripleId?: InputMaybe<Scalars['numeric']['input']>
}

/** input type for inserting data into table "Vault" */
export type Vaults_Insert_Input = {
  atom?: InputMaybe<Atoms_Obj_Rel_Insert_Input>
  atomId?: InputMaybe<Scalars['numeric']['input']>
  currentSharePrice?: InputMaybe<Scalars['numeric']['input']>
  deposits?: InputMaybe<Deposits_Arr_Rel_Insert_Input>
  id?: InputMaybe<Scalars['numeric']['input']>
  positionCount?: InputMaybe<Scalars['Int']['input']>
  positions?: InputMaybe<Positions_Arr_Rel_Insert_Input>
  redemptions?: InputMaybe<Redemptions_Obj_Rel_Insert_Input>
  totalShares?: InputMaybe<Scalars['numeric']['input']>
  triple?: InputMaybe<Triples_Obj_Rel_Insert_Input>
  tripleId?: InputMaybe<Scalars['numeric']['input']>
}

/** aggregate max on columns */
export type Vaults_Max_Fields = {
  __typename?: 'vaults_max_fields'
  atomId?: Maybe<Scalars['numeric']['output']>
  currentSharePrice?: Maybe<Scalars['numeric']['output']>
  id?: Maybe<Scalars['numeric']['output']>
  positionCount?: Maybe<Scalars['Int']['output']>
  totalShares?: Maybe<Scalars['numeric']['output']>
  tripleId?: Maybe<Scalars['numeric']['output']>
}

/** aggregate min on columns */
export type Vaults_Min_Fields = {
  __typename?: 'vaults_min_fields'
  atomId?: Maybe<Scalars['numeric']['output']>
  currentSharePrice?: Maybe<Scalars['numeric']['output']>
  id?: Maybe<Scalars['numeric']['output']>
  positionCount?: Maybe<Scalars['Int']['output']>
  totalShares?: Maybe<Scalars['numeric']['output']>
  tripleId?: Maybe<Scalars['numeric']['output']>
}

/** response of any mutation on the table "Vault" */
export type Vaults_Mutation_Response = {
  __typename?: 'vaults_mutation_response'
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output']
  /** data from the rows affected by the mutation */
  returning: Array<Vaults>
}

/** input type for inserting object relation for remote table "Vault" */
export type Vaults_Obj_Rel_Insert_Input = {
  data: Vaults_Insert_Input
  /** upsert condition */
  on_conflict?: InputMaybe<Vaults_On_Conflict>
}

/** on_conflict condition type for table "Vault" */
export type Vaults_On_Conflict = {
  constraint: Vaults_Constraint
  update_columns?: Array<Vaults_Update_Column>
  where?: InputMaybe<Vaults_Bool_Exp>
}

/** Ordering options when selecting data from "Vault". */
export type Vaults_Order_By = {
  atom?: InputMaybe<Atoms_Order_By>
  atomId?: InputMaybe<Order_By>
  currentSharePrice?: InputMaybe<Order_By>
  deposits_aggregate?: InputMaybe<Deposits_Aggregate_Order_By>
  id?: InputMaybe<Order_By>
  positionCount?: InputMaybe<Order_By>
  positions_aggregate?: InputMaybe<Positions_Aggregate_Order_By>
  redemptions?: InputMaybe<Redemptions_Order_By>
  totalShares?: InputMaybe<Order_By>
  triple?: InputMaybe<Triples_Order_By>
  tripleId?: InputMaybe<Order_By>
}

/** primary key columns input for table: Vault */
export type Vaults_Pk_Columns_Input = {
  id: Scalars['numeric']['input']
}

/** select columns of table "Vault" */
export enum Vaults_Select_Column {
  /** column name */
  AtomId = 'atomId',
  /** column name */
  CurrentSharePrice = 'currentSharePrice',
  /** column name */
  Id = 'id',
  /** column name */
  PositionCount = 'positionCount',
  /** column name */
  TotalShares = 'totalShares',
  /** column name */
  TripleId = 'tripleId',
}

/** input type for updating data in table "Vault" */
export type Vaults_Set_Input = {
  atomId?: InputMaybe<Scalars['numeric']['input']>
  currentSharePrice?: InputMaybe<Scalars['numeric']['input']>
  id?: InputMaybe<Scalars['numeric']['input']>
  positionCount?: InputMaybe<Scalars['Int']['input']>
  totalShares?: InputMaybe<Scalars['numeric']['input']>
  tripleId?: InputMaybe<Scalars['numeric']['input']>
}

/** aggregate stddev on columns */
export type Vaults_Stddev_Fields = {
  __typename?: 'vaults_stddev_fields'
  atomId?: Maybe<Scalars['Float']['output']>
  currentSharePrice?: Maybe<Scalars['Float']['output']>
  id?: Maybe<Scalars['Float']['output']>
  positionCount?: Maybe<Scalars['Float']['output']>
  totalShares?: Maybe<Scalars['Float']['output']>
  tripleId?: Maybe<Scalars['Float']['output']>
}

/** aggregate stddev_pop on columns */
export type Vaults_Stddev_Pop_Fields = {
  __typename?: 'vaults_stddev_pop_fields'
  atomId?: Maybe<Scalars['Float']['output']>
  currentSharePrice?: Maybe<Scalars['Float']['output']>
  id?: Maybe<Scalars['Float']['output']>
  positionCount?: Maybe<Scalars['Float']['output']>
  totalShares?: Maybe<Scalars['Float']['output']>
  tripleId?: Maybe<Scalars['Float']['output']>
}

/** aggregate stddev_samp on columns */
export type Vaults_Stddev_Samp_Fields = {
  __typename?: 'vaults_stddev_samp_fields'
  atomId?: Maybe<Scalars['Float']['output']>
  currentSharePrice?: Maybe<Scalars['Float']['output']>
  id?: Maybe<Scalars['Float']['output']>
  positionCount?: Maybe<Scalars['Float']['output']>
  totalShares?: Maybe<Scalars['Float']['output']>
  tripleId?: Maybe<Scalars['Float']['output']>
}

/** Streaming cursor of the table "vaults" */
export type Vaults_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Vaults_Stream_Cursor_Value_Input
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>
}

/** Initial value of the column from where the streaming should start */
export type Vaults_Stream_Cursor_Value_Input = {
  atomId?: InputMaybe<Scalars['numeric']['input']>
  currentSharePrice?: InputMaybe<Scalars['numeric']['input']>
  id?: InputMaybe<Scalars['numeric']['input']>
  positionCount?: InputMaybe<Scalars['Int']['input']>
  totalShares?: InputMaybe<Scalars['numeric']['input']>
  tripleId?: InputMaybe<Scalars['numeric']['input']>
}

/** aggregate sum on columns */
export type Vaults_Sum_Fields = {
  __typename?: 'vaults_sum_fields'
  atomId?: Maybe<Scalars['numeric']['output']>
  currentSharePrice?: Maybe<Scalars['numeric']['output']>
  id?: Maybe<Scalars['numeric']['output']>
  positionCount?: Maybe<Scalars['Int']['output']>
  totalShares?: Maybe<Scalars['numeric']['output']>
  tripleId?: Maybe<Scalars['numeric']['output']>
}

/** update columns of table "Vault" */
export enum Vaults_Update_Column {
  /** column name */
  AtomId = 'atomId',
  /** column name */
  CurrentSharePrice = 'currentSharePrice',
  /** column name */
  Id = 'id',
  /** column name */
  PositionCount = 'positionCount',
  /** column name */
  TotalShares = 'totalShares',
  /** column name */
  TripleId = 'tripleId',
}

export type Vaults_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Vaults_Inc_Input>
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Vaults_Set_Input>
  /** filter the rows which have to be updated */
  where: Vaults_Bool_Exp
}

/** aggregate var_pop on columns */
export type Vaults_Var_Pop_Fields = {
  __typename?: 'vaults_var_pop_fields'
  atomId?: Maybe<Scalars['Float']['output']>
  currentSharePrice?: Maybe<Scalars['Float']['output']>
  id?: Maybe<Scalars['Float']['output']>
  positionCount?: Maybe<Scalars['Float']['output']>
  totalShares?: Maybe<Scalars['Float']['output']>
  tripleId?: Maybe<Scalars['Float']['output']>
}

/** aggregate var_samp on columns */
export type Vaults_Var_Samp_Fields = {
  __typename?: 'vaults_var_samp_fields'
  atomId?: Maybe<Scalars['Float']['output']>
  currentSharePrice?: Maybe<Scalars['Float']['output']>
  id?: Maybe<Scalars['Float']['output']>
  positionCount?: Maybe<Scalars['Float']['output']>
  totalShares?: Maybe<Scalars['Float']['output']>
  tripleId?: Maybe<Scalars['Float']['output']>
}

/** aggregate variance on columns */
export type Vaults_Variance_Fields = {
  __typename?: 'vaults_variance_fields'
  atomId?: Maybe<Scalars['Float']['output']>
  currentSharePrice?: Maybe<Scalars['Float']['output']>
  id?: Maybe<Scalars['Float']['output']>
  positionCount?: Maybe<Scalars['Float']['output']>
  totalShares?: Maybe<Scalars['Float']['output']>
  tripleId?: Maybe<Scalars['Float']['output']>
}

export type GetAtomsQueryVariables = Exact<{ [key: string]: never }>

export type GetAtomsQuery = {
  __typename?: 'query_root'
  atoms: Array<{
    __typename?: 'atoms'
    id: any
    label?: string | null
    creator?: {
      __typename?: 'accounts'
      id: any
      label: string
      image?: string | null
    } | null
  }>
}

export const GetAtomsDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetAtoms' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'atoms' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'label' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'creator' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'label' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'image' } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetAtomsQuery, GetAtomsQueryVariables>

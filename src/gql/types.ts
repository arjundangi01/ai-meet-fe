export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type CreateRecordingInput = {
  /** Example field (placeholder) */
  exampleField: Scalars['Int']['input'];
};

export type GetRecordingsInput = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['Float']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  meetingId?: InputMaybe<Scalars['String']['input']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createRecording: Recording;
  removeRecording: Recording;
  updateRecording: Recording;
};


export type MutationCreateRecordingArgs = {
  createRecordingInput: CreateRecordingInput;
};


export type MutationRemoveRecordingArgs = {
  id: Scalars['Int']['input'];
};


export type MutationUpdateRecordingArgs = {
  updateRecordingInput: UpdateRecordingInput;
};

export type PageInfo = {
  __typename?: 'PageInfo';
  afterCursor?: Maybe<Scalars['String']['output']>;
  beforeCursor?: Maybe<Scalars['String']['output']>;
  hasNextPage: Scalars['Boolean']['output'];
  hasPreviousPage: Scalars['Boolean']['output'];
};

export type PaginatedRecordingResponse = {
  __typename?: 'PaginatedRecordingResponse';
  edges: Array<RecordingEdge>;
  pageInfo: PageInfo;
  pageSize: Scalars['Int']['output'];
  totalCount: Scalars['Int']['output'];
  totalPage: Scalars['Int']['output'];
};

export type Query = {
  __typename?: 'Query';
  recording: Recording;
  recordings: PaginatedRecordingResponse;
};


export type QueryRecordingArgs = {
  id: Scalars['Int']['input'];
};


export type QueryRecordingsArgs = {
  input: GetRecordingsInput;
};

export type Recording = {
  __typename?: 'Recording';
  createdAt: Scalars['String']['output'];
  fileUrl?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  summary?: Maybe<Scalars['String']['output']>;
  transcript?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['String']['output'];
  userMeetingId: Scalars['String']['output'];
};

export type RecordingEdge = {
  __typename?: 'RecordingEdge';
  cursor: Scalars['String']['output'];
  node: Recording;
};

export type UpdateRecordingInput = {
  /** Example field (placeholder) */
  exampleField?: InputMaybe<Scalars['Int']['input']>;
  id: Scalars['Int']['input'];
};

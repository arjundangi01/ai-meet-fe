/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
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
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: { input: any; output: any; }
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

export type GetUserMeetingsInput = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['Float']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  meetingId?: InputMaybe<Scalars['String']['input']>;
};

export type JoinMeetingInput = {
  /** The ID of the meeting to join */
  meetingId: Scalars['String']['input'];
};

export type Meeting = {
  __typename?: 'Meeting';
  /** Example field (placeholder) */
  id: Scalars['Int']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createRecording: Recording;
  joinMeeting: Meeting;
  removeRecording: Recording;
  updateRecording: Recording;
};


export type MutationCreateRecordingArgs = {
  createRecordingInput: CreateRecordingInput;
};


export type MutationJoinMeetingArgs = {
  input: JoinMeetingInput;
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

export type PaginatedUserMeetingResponse = {
  __typename?: 'PaginatedUserMeetingResponse';
  edges: Array<UserMeetingEdge>;
  pageInfo: PageInfo;
  pageSize: Scalars['Int']['output'];
  totalCount: Scalars['Int']['output'];
  totalPage: Scalars['Int']['output'];
};

export type Query = {
  __typename?: 'Query';
  me: User;
  recording: Recording;
  recordings: PaginatedRecordingResponse;
  userMeeting: UserMeeting;
  userMeetings: PaginatedUserMeetingResponse;
};


export type QueryRecordingArgs = {
  id: Scalars['Int']['input'];
};


export type QueryRecordingsArgs = {
  input: GetRecordingsInput;
};


export type QueryUserMeetingArgs = {
  id: Scalars['String']['input'];
};


export type QueryUserMeetingsArgs = {
  input: GetUserMeetingsInput;
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

export type User = {
  __typename?: 'User';
  /** User accessToken */
  accessToken: Scalars['String']['output'];
  /** User email */
  email: Scalars['String']['output'];
  /** User firebaseUid */
  firebaseUid: Scalars['String']['output'];
  /** User id */
  id: Scalars['String']['output'];
  /** User idToken */
  idToken: Scalars['String']['output'];
  /** User name */
  name: Scalars['String']['output'];
  /** User oauth */
  oauth: Scalars['String']['output'];
  /** User role */
  role: Scalars['String']['output'];
};

export type UserMeeting = {
  __typename?: 'UserMeeting';
  containerId?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  fileUrl?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  meetingId: Scalars['String']['output'];
  participants?: Maybe<Scalars['String']['output']>;
  summary?: Maybe<Scalars['String']['output']>;
  transcript?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
  userId: Scalars['String']['output'];
};

export type UserMeetingEdge = {
  __typename?: 'UserMeetingEdge';
  cursor: Scalars['String']['output'];
  node: UserMeeting;
};

export type JoinMeetingMutationVariables = Exact<{
  input: JoinMeetingInput;
}>;


export type JoinMeetingMutation = { __typename?: 'Mutation', joinMeeting: { __typename?: 'Meeting', id: number } };

export type RecordingsQueryVariables = Exact<{
  query: GetRecordingsInput;
}>;


export type RecordingsQuery = { __typename?: 'Query', recordings: { __typename?: 'PaginatedRecordingResponse', edges: Array<{ __typename?: 'RecordingEdge', node: { __typename?: 'Recording', id: string, fileUrl?: string | null, summary?: string | null, transcript?: string | null, createdAt: string, updatedAt: string, userMeetingId: string } }> } };

export type UserMeetingsQueryVariables = Exact<{
  input: GetUserMeetingsInput;
}>;


export type UserMeetingsQuery = { __typename?: 'Query', userMeetings: { __typename?: 'PaginatedUserMeetingResponse', edges: Array<{ __typename?: 'UserMeetingEdge', node: { __typename?: 'UserMeeting', id: string, fileUrl?: string | null, meetingId: string, summary?: string | null, transcript?: string | null, createdAt: any, updatedAt: any, participants?: string | null } }>, pageInfo: { __typename?: 'PageInfo', afterCursor?: string | null, beforeCursor?: string | null, hasNextPage: boolean, hasPreviousPage: boolean } } };

export type UserMeetingQueryVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type UserMeetingQuery = { __typename?: 'Query', userMeeting: { __typename?: 'UserMeeting', id: string, fileUrl?: string | null, meetingId: string, summary?: string | null, transcript?: string | null, createdAt: any, updatedAt: any, userId: string, containerId?: string | null, participants?: string | null } };

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { __typename?: 'Query', me: { __typename?: 'User', id: string, email: string, name: string } };


export const JoinMeetingDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"joinMeeting"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"JoinMeetingInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"joinMeeting"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<JoinMeetingMutation, JoinMeetingMutationVariables>;
export const RecordingsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"recordings"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"query"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"GetRecordingsInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"recordings"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"query"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"fileUrl"}},{"kind":"Field","name":{"kind":"Name","value":"summary"}},{"kind":"Field","name":{"kind":"Name","value":"transcript"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"userMeetingId"}}]}}]}}]}}]}}]} as unknown as DocumentNode<RecordingsQuery, RecordingsQueryVariables>;
export const UserMeetingsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"userMeetings"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"GetUserMeetingsInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userMeetings"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"fileUrl"}},{"kind":"Field","name":{"kind":"Name","value":"meetingId"}},{"kind":"Field","name":{"kind":"Name","value":"summary"}},{"kind":"Field","name":{"kind":"Name","value":"transcript"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"participants"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"afterCursor"}},{"kind":"Field","name":{"kind":"Name","value":"beforeCursor"}},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasPreviousPage"}}]}}]}}]}}]} as unknown as DocumentNode<UserMeetingsQuery, UserMeetingsQueryVariables>;
export const UserMeetingDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"userMeeting"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userMeeting"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"fileUrl"}},{"kind":"Field","name":{"kind":"Name","value":"meetingId"}},{"kind":"Field","name":{"kind":"Name","value":"summary"}},{"kind":"Field","name":{"kind":"Name","value":"transcript"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"containerId"}},{"kind":"Field","name":{"kind":"Name","value":"participants"}}]}}]}}]} as unknown as DocumentNode<UserMeetingQuery, UserMeetingQueryVariables>;
export const MeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"me"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"me"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<MeQuery, MeQueryVariables>;
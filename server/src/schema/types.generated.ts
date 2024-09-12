import { GraphQLResolveInfo } from 'graphql';
export type Maybe<T> = T | null | undefined;
export type InputMaybe<T> = T | null | undefined;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string | number; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type AddReactionInput = {
  postId: Scalars['String']['input'];
  reactionType: ReactionType;
  userId: Scalars['String']['input'];
};

export type Comment = {
  __typename?: 'Comment';
  body?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  postId?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['String']['output']>;
  user?: Maybe<User>;
};

export type CommentCount = {
  __typename?: 'CommentCount';
  comments?: Maybe<Scalars['Int']['output']>;
};

export type CreateCommentInput = {
  body: Scalars['String']['input'];
  postId: Scalars['String']['input'];
  userId: Scalars['String']['input'];
};

export type CreatePostInput = {
  author: Scalars['String']['input'];
  body: Scalars['String']['input'];
  slug: Scalars['String']['input'];
  title: Scalars['String']['input'];
};

export type ItemId = {
  id: Scalars['String']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  addReaction: SuccessResults;
  createComment?: Maybe<SuccessResults>;
  createPost?: Maybe<SuccessResults>;
  deleteComment?: Maybe<SuccessResults>;
  incrementPageView?: Maybe<SuccessResults>;
};


export type MutationaddReactionArgs = {
  input: AddReactionInput;
};


export type MutationcreateCommentArgs = {
  input: CreateCommentInput;
};


export type MutationcreatePostArgs = {
  input: CreatePostInput;
};


export type MutationdeleteCommentArgs = {
  input: ItemId;
};


export type MutationincrementPageViewArgs = {
  postId?: InputMaybe<Scalars['String']['input']>;
};

export type Post = {
  __typename?: 'Post';
  _count?: Maybe<CommentCount>;
  body?: Maybe<Scalars['String']['output']>;
  comments?: Maybe<Array<Maybe<Comment>>>;
  createdAt?: Maybe<Scalars['String']['output']>;
  hatePost?: Maybe<Scalars['Int']['output']>;
  id: Scalars['ID']['output'];
  lovePost?: Maybe<Scalars['Int']['output']>;
  published?: Maybe<Scalars['Boolean']['output']>;
  reactions: Array<Reaction>;
  slug?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['String']['output']>;
  views?: Maybe<Scalars['Int']['output']>;
};

export type PostDetails = {
  __typename?: 'PostDetails';
  body?: Maybe<Scalars['String']['output']>;
  comments?: Maybe<Array<Maybe<Comment>>>;
  createdAt?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  published?: Maybe<Scalars['Boolean']['output']>;
  reactions: Array<Maybe<Reaction>>;
  slug?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['String']['output']>;
  user?: Maybe<User>;
  views?: Maybe<Scalars['Int']['output']>;
};

export type Query = {
  __typename?: 'Query';
  getAllComments?: Maybe<Array<Maybe<Comment>>>;
  getAllPosts?: Maybe<Array<Maybe<Post>>>;
  getAllUsers?: Maybe<Array<Maybe<User>>>;
  getCurrentUser?: Maybe<User>;
  getMyPostReaction?: Maybe<Array<Maybe<Reaction>>>;
  getPostComments?: Maybe<Array<Maybe<Comment>>>;
  getPostDetails?: Maybe<PostDetails>;
  getPostReactions?: Maybe<SuccessReactionResults>;
  healthCheck?: Maybe<Scalars['String']['output']>;
  hello?: Maybe<Scalars['String']['output']>;
};


export type QuerygetMyPostReactionArgs = {
  postId: Scalars['String']['input'];
  userId: Scalars['String']['input'];
};


export type QuerygetPostCommentsArgs = {
  postId: Scalars['String']['input'];
};


export type QuerygetPostDetailsArgs = {
  slug: Scalars['String']['input'];
};


export type QuerygetPostReactionsArgs = {
  postId: Scalars['String']['input'];
};

export type Reaction = {
  __typename?: 'Reaction';
  id: Scalars['ID']['output'];
  post: Post;
  postId: Scalars['String']['output'];
  reactionType: ReactionType;
  user: User;
  userId: Scalars['Int']['output'];
};

export type ReactionCount = {
  __typename?: 'ReactionCount';
  count?: Maybe<Scalars['Int']['output']>;
  reactionType: ReactionType;
};

export type ReactionType =
  | 'BORING'
  | 'DISLIKE'
  | 'HAPPY'
  | 'HATE'
  | 'INTERESTING'
  | 'LIKE'
  | 'LOVE'
  | 'SAD';

export type SuccessReactionResults = {
  __typename?: 'SuccessReactionResults';
  data?: Maybe<Array<Maybe<ReactionCount>>>;
  message?: Maybe<Scalars['String']['output']>;
  success: Scalars['Boolean']['output'];
};

export type SuccessResults = {
  __typename?: 'SuccessResults';
  message?: Maybe<Scalars['String']['output']>;
  success: Scalars['Boolean']['output'];
};

export type User = {
  __typename?: 'User';
  email?: Maybe<Scalars['String']['output']>;
  gender?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  image?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;



/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  AddReactionInput: AddReactionInput;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  Comment: ResolverTypeWrapper<Comment>;
  ID: ResolverTypeWrapper<Scalars['ID']['output']>;
  CommentCount: ResolverTypeWrapper<CommentCount>;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  CreateCommentInput: CreateCommentInput;
  CreatePostInput: CreatePostInput;
  ItemId: ItemId;
  Mutation: ResolverTypeWrapper<{}>;
  Post: ResolverTypeWrapper<Post>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  PostDetails: ResolverTypeWrapper<PostDetails>;
  Query: ResolverTypeWrapper<{}>;
  Reaction: ResolverTypeWrapper<Reaction>;
  ReactionCount: ResolverTypeWrapper<ReactionCount>;
  ReactionType: ReactionType;
  SuccessReactionResults: ResolverTypeWrapper<SuccessReactionResults>;
  SuccessResults: ResolverTypeWrapper<SuccessResults>;
  User: ResolverTypeWrapper<User>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  AddReactionInput: AddReactionInput;
  String: Scalars['String']['output'];
  Comment: Comment;
  ID: Scalars['ID']['output'];
  CommentCount: CommentCount;
  Int: Scalars['Int']['output'];
  CreateCommentInput: CreateCommentInput;
  CreatePostInput: CreatePostInput;
  ItemId: ItemId;
  Mutation: {};
  Post: Post;
  Boolean: Scalars['Boolean']['output'];
  PostDetails: PostDetails;
  Query: {};
  Reaction: Reaction;
  ReactionCount: ReactionCount;
  SuccessReactionResults: SuccessReactionResults;
  SuccessResults: SuccessResults;
  User: User;
};

export type CommentResolvers<ContextType = any, ParentType extends ResolversParentTypes['Comment'] = ResolversParentTypes['Comment']> = {
  body?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  postId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CommentCountResolvers<ContextType = any, ParentType extends ResolversParentTypes['CommentCount'] = ResolversParentTypes['CommentCount']> = {
  comments?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  addReaction?: Resolver<ResolversTypes['SuccessResults'], ParentType, ContextType, RequireFields<MutationaddReactionArgs, 'input'>>;
  createComment?: Resolver<Maybe<ResolversTypes['SuccessResults']>, ParentType, ContextType, RequireFields<MutationcreateCommentArgs, 'input'>>;
  createPost?: Resolver<Maybe<ResolversTypes['SuccessResults']>, ParentType, ContextType, RequireFields<MutationcreatePostArgs, 'input'>>;
  deleteComment?: Resolver<Maybe<ResolversTypes['SuccessResults']>, ParentType, ContextType, RequireFields<MutationdeleteCommentArgs, 'input'>>;
  incrementPageView?: Resolver<Maybe<ResolversTypes['SuccessResults']>, ParentType, ContextType, Partial<MutationincrementPageViewArgs>>;
};

export type PostResolvers<ContextType = any, ParentType extends ResolversParentTypes['Post'] = ResolversParentTypes['Post']> = {
  _count?: Resolver<Maybe<ResolversTypes['CommentCount']>, ParentType, ContextType>;
  body?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  comments?: Resolver<Maybe<Array<Maybe<ResolversTypes['Comment']>>>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  hatePost?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  lovePost?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  published?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  reactions?: Resolver<Array<ResolversTypes['Reaction']>, ParentType, ContextType>;
  slug?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  views?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PostDetailsResolvers<ContextType = any, ParentType extends ResolversParentTypes['PostDetails'] = ResolversParentTypes['PostDetails']> = {
  body?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  comments?: Resolver<Maybe<Array<Maybe<ResolversTypes['Comment']>>>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  published?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  reactions?: Resolver<Array<Maybe<ResolversTypes['Reaction']>>, ParentType, ContextType>;
  slug?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  views?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  getAllComments?: Resolver<Maybe<Array<Maybe<ResolversTypes['Comment']>>>, ParentType, ContextType>;
  getAllPosts?: Resolver<Maybe<Array<Maybe<ResolversTypes['Post']>>>, ParentType, ContextType>;
  getAllUsers?: Resolver<Maybe<Array<Maybe<ResolversTypes['User']>>>, ParentType, ContextType>;
  getCurrentUser?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  getMyPostReaction?: Resolver<Maybe<Array<Maybe<ResolversTypes['Reaction']>>>, ParentType, ContextType, RequireFields<QuerygetMyPostReactionArgs, 'postId' | 'userId'>>;
  getPostComments?: Resolver<Maybe<Array<Maybe<ResolversTypes['Comment']>>>, ParentType, ContextType, RequireFields<QuerygetPostCommentsArgs, 'postId'>>;
  getPostDetails?: Resolver<Maybe<ResolversTypes['PostDetails']>, ParentType, ContextType, RequireFields<QuerygetPostDetailsArgs, 'slug'>>;
  getPostReactions?: Resolver<Maybe<ResolversTypes['SuccessReactionResults']>, ParentType, ContextType, RequireFields<QuerygetPostReactionsArgs, 'postId'>>;
  healthCheck?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  hello?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
};

export type ReactionResolvers<ContextType = any, ParentType extends ResolversParentTypes['Reaction'] = ResolversParentTypes['Reaction']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  post?: Resolver<ResolversTypes['Post'], ParentType, ContextType>;
  postId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  reactionType?: Resolver<ResolversTypes['ReactionType'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  userId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ReactionCountResolvers<ContextType = any, ParentType extends ResolversParentTypes['ReactionCount'] = ResolversParentTypes['ReactionCount']> = {
  count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  reactionType?: Resolver<ResolversTypes['ReactionType'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SuccessReactionResultsResolvers<ContextType = any, ParentType extends ResolversParentTypes['SuccessReactionResults'] = ResolversParentTypes['SuccessReactionResults']> = {
  data?: Resolver<Maybe<Array<Maybe<ResolversTypes['ReactionCount']>>>, ParentType, ContextType>;
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SuccessResultsResolvers<ContextType = any, ParentType extends ResolversParentTypes['SuccessResults'] = ResolversParentTypes['SuccessResults']> = {
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserResolvers<ContextType = any, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  gender?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  Comment?: CommentResolvers<ContextType>;
  CommentCount?: CommentCountResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Post?: PostResolvers<ContextType>;
  PostDetails?: PostDetailsResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Reaction?: ReactionResolvers<ContextType>;
  ReactionCount?: ReactionCountResolvers<ContextType>;
  SuccessReactionResults?: SuccessReactionResultsResolvers<ContextType>;
  SuccessResults?: SuccessResultsResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
};


/* This file was automatically generated. DO NOT UPDATE MANUALLY. */
    import type   { Resolvers } from './types.generated';
    import    { getCurrentUser as Query_getCurrentUser } from './resolvers/Query/getCurrentUser';
import    { healthCheck as Query_healthCheck } from './resolvers/Query/healthCheck';
import    { hello as Query_hello } from './resolvers/Query/hello';
import    { User } from './resolvers/User';
    export const resolvers: Resolvers = {
      Query: { getCurrentUser: Query_getCurrentUser,healthCheck: Query_healthCheck,hello: Query_hello },
      
      
      User: User
    }
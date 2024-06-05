
        import type   { QueryResolvers } from './../../types.generated';
        export const healthCheck: NonNullable<QueryResolvers['healthCheck']> = async (_parent, _arg, _ctx) => { 
                console.log("Route arrived");
                return "true"
        };
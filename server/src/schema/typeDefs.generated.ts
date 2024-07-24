import type { DocumentNode } from 'graphql';
  export const typeDefs = {"kind":"Document","definitions":[{"kind":"ObjectTypeDefinition","name":{"kind":"Name","value":"Query","loc":{"start":5,"end":10}},"interfaces":[],"directives":[],"fields":[{"kind":"FieldDefinition","name":{"kind":"Name","value":"hello","loc":{"start":15,"end":20}},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"String","loc":{"start":22,"end":28}},"loc":{"start":22,"end":28}},"directives":[],"loc":{"start":15,"end":28}},{"kind":"FieldDefinition","name":{"kind":"Name","value":"getCurrentUser","loc":{"start":31,"end":45}},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"User","loc":{"start":47,"end":51}},"loc":{"start":47,"end":51}},"directives":[],"loc":{"start":31,"end":51}},{"kind":"FieldDefinition","name":{"kind":"Name","value":"getAllPosts","loc":{"start":54,"end":65}},"arguments":[],"type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Post","loc":{"start":68,"end":72}},"loc":{"start":68,"end":72}},"loc":{"start":67,"end":73}},"directives":[],"loc":{"start":54,"end":73}},{"kind":"FieldDefinition","name":{"kind":"Name","value":"getPostDetails","loc":{"start":76,"end":90}},"arguments":[{"kind":"InputValueDefinition","name":{"kind":"Name","value":"slug","loc":{"start":91,"end":95}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String","loc":{"start":97,"end":103}},"loc":{"start":97,"end":103}},"loc":{"start":97,"end":104}},"directives":[],"loc":{"start":91,"end":104}}],"type":{"kind":"NamedType","name":{"kind":"Name","value":"PostDetails","loc":{"start":107,"end":118}},"loc":{"start":107,"end":118}},"directives":[],"loc":{"start":76,"end":118}},{"kind":"FieldDefinition","name":{"kind":"Name","value":"getAllUsers","loc":{"start":121,"end":132}},"arguments":[],"type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"User","loc":{"start":135,"end":139}},"loc":{"start":135,"end":139}},"loc":{"start":134,"end":140}},"directives":[],"loc":{"start":121,"end":140}},{"kind":"FieldDefinition","name":{"kind":"Name","value":"getAllComments","loc":{"start":143,"end":157}},"arguments":[],"type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Comment","loc":{"start":160,"end":167}},"loc":{"start":160,"end":167}},"loc":{"start":159,"end":168}},"directives":[],"loc":{"start":143,"end":168}},{"kind":"FieldDefinition","name":{"kind":"Name","value":"healthCheck","loc":{"start":171,"end":182}},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"String","loc":{"start":184,"end":190}},"loc":{"start":184,"end":190}},"directives":[],"loc":{"start":171,"end":190}}],"loc":{"start":0,"end":192}},{"kind":"ObjectTypeDefinition","name":{"kind":"Name","value":"Mutation","loc":{"start":199,"end":207}},"interfaces":[],"directives":[],"fields":[{"kind":"FieldDefinition","name":{"kind":"Name","value":"createPost","loc":{"start":212,"end":222}},"arguments":[{"kind":"InputValueDefinition","name":{"kind":"Name","value":"input","loc":{"start":223,"end":228}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreatePostInput","loc":{"start":230,"end":245}},"loc":{"start":230,"end":245}},"loc":{"start":230,"end":246}},"directives":[],"loc":{"start":223,"end":246}}],"type":{"kind":"NamedType","name":{"kind":"Name","value":"SuccessResults","loc":{"start":249,"end":263}},"loc":{"start":249,"end":263}},"directives":[],"loc":{"start":212,"end":263}},{"kind":"FieldDefinition","name":{"kind":"Name","value":"createComment","loc":{"start":266,"end":279}},"arguments":[{"kind":"InputValueDefinition","name":{"kind":"Name","value":"input","loc":{"start":280,"end":285}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateCommentInput","loc":{"start":287,"end":305}},"loc":{"start":287,"end":305}},"loc":{"start":287,"end":306}},"directives":[],"loc":{"start":280,"end":306}}],"type":{"kind":"NamedType","name":{"kind":"Name","value":"SuccessResults","loc":{"start":309,"end":323}},"loc":{"start":309,"end":323}},"directives":[],"loc":{"start":266,"end":323}}],"loc":{"start":194,"end":325}},{"kind":"InputObjectTypeDefinition","name":{"kind":"Name","value":"CreateCommentInput","loc":{"start":333,"end":351}},"directives":[],"fields":[{"kind":"InputValueDefinition","name":{"kind":"Name","value":"body","loc":{"start":356,"end":360}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String","loc":{"start":362,"end":368}},"loc":{"start":362,"end":368}},"loc":{"start":362,"end":369}},"directives":[],"loc":{"start":356,"end":369}},{"kind":"InputValueDefinition","name":{"kind":"Name","value":"userId","loc":{"start":372,"end":378}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String","loc":{"start":380,"end":386}},"loc":{"start":380,"end":386}},"loc":{"start":380,"end":387}},"directives":[],"loc":{"start":372,"end":387}},{"kind":"InputValueDefinition","name":{"kind":"Name","value":"postId","loc":{"start":390,"end":396}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String","loc":{"start":398,"end":404}},"loc":{"start":398,"end":404}},"loc":{"start":398,"end":405}},"directives":[],"loc":{"start":390,"end":405}}],"loc":{"start":327,"end":407}},{"kind":"InputObjectTypeDefinition","name":{"kind":"Name","value":"CreatePostInput","loc":{"start":415,"end":430}},"directives":[],"fields":[{"kind":"InputValueDefinition","name":{"kind":"Name","value":"title","loc":{"start":435,"end":440}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String","loc":{"start":442,"end":448}},"loc":{"start":442,"end":448}},"loc":{"start":442,"end":449}},"directives":[],"loc":{"start":435,"end":449}},{"kind":"InputValueDefinition","name":{"kind":"Name","value":"body","loc":{"start":452,"end":456}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String","loc":{"start":458,"end":464}},"loc":{"start":458,"end":464}},"loc":{"start":458,"end":465}},"directives":[],"loc":{"start":452,"end":465}},{"kind":"InputValueDefinition","name":{"kind":"Name","value":"slug","loc":{"start":468,"end":472}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String","loc":{"start":474,"end":480}},"loc":{"start":474,"end":480}},"loc":{"start":474,"end":481}},"directives":[],"loc":{"start":468,"end":481}},{"kind":"InputValueDefinition","name":{"kind":"Name","value":"author","loc":{"start":484,"end":490}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String","loc":{"start":492,"end":498}},"loc":{"start":492,"end":498}},"loc":{"start":492,"end":499}},"directives":[],"loc":{"start":484,"end":499}}],"loc":{"start":409,"end":501}},{"kind":"ObjectTypeDefinition","name":{"kind":"Name","value":"SuccessResults","loc":{"start":508,"end":522}},"interfaces":[],"directives":[],"fields":[{"kind":"FieldDefinition","name":{"kind":"Name","value":"success","loc":{"start":527,"end":534}},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean","loc":{"start":536,"end":543}},"loc":{"start":536,"end":543}},"loc":{"start":536,"end":544}},"directives":[],"loc":{"start":527,"end":544}},{"kind":"FieldDefinition","name":{"kind":"Name","value":"message","loc":{"start":547,"end":554}},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String","loc":{"start":556,"end":562}},"loc":{"start":556,"end":562}},"loc":{"start":556,"end":563}},"directives":[],"loc":{"start":547,"end":563}}],"loc":{"start":503,"end":565}},{"kind":"ObjectTypeDefinition","name":{"kind":"Name","value":"User","loc":{"start":572,"end":576}},"interfaces":[],"directives":[],"fields":[{"kind":"FieldDefinition","name":{"kind":"Name","value":"id","loc":{"start":581,"end":583}},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID","loc":{"start":585,"end":587}},"loc":{"start":585,"end":587}},"loc":{"start":585,"end":588}},"directives":[],"loc":{"start":581,"end":588}},{"kind":"FieldDefinition","name":{"kind":"Name","value":"name","loc":{"start":591,"end":595}},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"String","loc":{"start":597,"end":603}},"loc":{"start":597,"end":603}},"directives":[],"loc":{"start":591,"end":603}},{"kind":"FieldDefinition","name":{"kind":"Name","value":"email","loc":{"start":606,"end":611}},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"String","loc":{"start":613,"end":619}},"loc":{"start":613,"end":619}},"directives":[],"loc":{"start":606,"end":619}},{"kind":"FieldDefinition","name":{"kind":"Name","value":"image","loc":{"start":622,"end":627}},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"String","loc":{"start":629,"end":635}},"loc":{"start":629,"end":635}},"directives":[],"loc":{"start":622,"end":635}},{"kind":"FieldDefinition","name":{"kind":"Name","value":"gender","loc":{"start":638,"end":644}},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"String","loc":{"start":646,"end":652}},"loc":{"start":646,"end":652}},"directives":[],"loc":{"start":638,"end":652}}],"loc":{"start":567,"end":654}},{"kind":"ObjectTypeDefinition","name":{"kind":"Name","value":"Post","loc":{"start":661,"end":665}},"interfaces":[],"directives":[],"fields":[{"kind":"FieldDefinition","name":{"kind":"Name","value":"id","loc":{"start":670,"end":672}},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID","loc":{"start":674,"end":676}},"loc":{"start":674,"end":676}},"loc":{"start":674,"end":677}},"directives":[],"loc":{"start":670,"end":677}},{"kind":"FieldDefinition","name":{"kind":"Name","value":"title","loc":{"start":680,"end":685}},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"String","loc":{"start":687,"end":693}},"loc":{"start":687,"end":693}},"directives":[],"loc":{"start":680,"end":693}},{"kind":"FieldDefinition","name":{"kind":"Name","value":"slug","loc":{"start":696,"end":700}},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"String","loc":{"start":702,"end":708}},"loc":{"start":702,"end":708}},"directives":[],"loc":{"start":696,"end":708}},{"kind":"FieldDefinition","name":{"kind":"Name","value":"body","loc":{"start":711,"end":715}},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"String","loc":{"start":717,"end":723}},"loc":{"start":717,"end":723}},"directives":[],"loc":{"start":711,"end":723}},{"kind":"FieldDefinition","name":{"kind":"Name","value":"published","loc":{"start":726,"end":735}},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean","loc":{"start":737,"end":744}},"loc":{"start":737,"end":744}},"directives":[],"loc":{"start":726,"end":744}},{"kind":"FieldDefinition","name":{"kind":"Name","value":"createdAt","loc":{"start":747,"end":756}},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"String","loc":{"start":758,"end":764}},"loc":{"start":758,"end":764}},"directives":[],"loc":{"start":747,"end":764}},{"kind":"FieldDefinition","name":{"kind":"Name","value":"updatedAt","loc":{"start":767,"end":776}},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"String","loc":{"start":778,"end":784}},"loc":{"start":778,"end":784}},"directives":[],"loc":{"start":767,"end":784}},{"kind":"FieldDefinition","name":{"kind":"Name","value":"comments","loc":{"start":787,"end":795}},"arguments":[],"type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Comment","loc":{"start":798,"end":805}},"loc":{"start":798,"end":805}},"loc":{"start":797,"end":806}},"directives":[],"loc":{"start":787,"end":806}}],"loc":{"start":656,"end":808}},{"kind":"ObjectTypeDefinition","name":{"kind":"Name","value":"PostDetails","loc":{"start":815,"end":826}},"interfaces":[],"directives":[],"fields":[{"kind":"FieldDefinition","name":{"kind":"Name","value":"id","loc":{"start":831,"end":833}},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID","loc":{"start":835,"end":837}},"loc":{"start":835,"end":837}},"loc":{"start":835,"end":838}},"directives":[],"loc":{"start":831,"end":838}},{"kind":"FieldDefinition","name":{"kind":"Name","value":"title","loc":{"start":841,"end":846}},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"String","loc":{"start":848,"end":854}},"loc":{"start":848,"end":854}},"directives":[],"loc":{"start":841,"end":854}},{"kind":"FieldDefinition","name":{"kind":"Name","value":"slug","loc":{"start":857,"end":861}},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"String","loc":{"start":863,"end":869}},"loc":{"start":863,"end":869}},"directives":[],"loc":{"start":857,"end":869}},{"kind":"FieldDefinition","name":{"kind":"Name","value":"body","loc":{"start":872,"end":876}},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"String","loc":{"start":878,"end":884}},"loc":{"start":878,"end":884}},"directives":[],"loc":{"start":872,"end":884}},{"kind":"FieldDefinition","name":{"kind":"Name","value":"published","loc":{"start":887,"end":896}},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean","loc":{"start":898,"end":905}},"loc":{"start":898,"end":905}},"directives":[],"loc":{"start":887,"end":905}},{"kind":"FieldDefinition","name":{"kind":"Name","value":"createdAt","loc":{"start":908,"end":917}},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"String","loc":{"start":919,"end":925}},"loc":{"start":919,"end":925}},"directives":[],"loc":{"start":908,"end":925}},{"kind":"FieldDefinition","name":{"kind":"Name","value":"updatedAt","loc":{"start":928,"end":937}},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"String","loc":{"start":939,"end":945}},"loc":{"start":939,"end":945}},"directives":[],"loc":{"start":928,"end":945}},{"kind":"FieldDefinition","name":{"kind":"Name","value":"comments","loc":{"start":948,"end":956}},"arguments":[],"type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Comment","loc":{"start":959,"end":966}},"loc":{"start":959,"end":966}},"loc":{"start":958,"end":967}},"directives":[],"loc":{"start":948,"end":967}},{"kind":"FieldDefinition","name":{"kind":"Name","value":"user","loc":{"start":970,"end":974}},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"User","loc":{"start":976,"end":980}},"loc":{"start":976,"end":980}},"directives":[],"loc":{"start":970,"end":980}}],"loc":{"start":810,"end":982}},{"kind":"ObjectTypeDefinition","name":{"kind":"Name","value":"Comment","loc":{"start":989,"end":996}},"interfaces":[],"directives":[],"fields":[{"kind":"FieldDefinition","name":{"kind":"Name","value":"id","loc":{"start":1001,"end":1003}},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID","loc":{"start":1005,"end":1007}},"loc":{"start":1005,"end":1007}},"loc":{"start":1005,"end":1008}},"directives":[],"loc":{"start":1001,"end":1008}},{"kind":"FieldDefinition","name":{"kind":"Name","value":"body","loc":{"start":1011,"end":1015}},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"String","loc":{"start":1017,"end":1023}},"loc":{"start":1017,"end":1023}},"directives":[],"loc":{"start":1011,"end":1023}},{"kind":"FieldDefinition","name":{"kind":"Name","value":"createdAt","loc":{"start":1026,"end":1035}},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"String","loc":{"start":1037,"end":1043}},"loc":{"start":1037,"end":1043}},"directives":[],"loc":{"start":1026,"end":1043}},{"kind":"FieldDefinition","name":{"kind":"Name","value":"updatedAt","loc":{"start":1046,"end":1055}},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"String","loc":{"start":1057,"end":1063}},"loc":{"start":1057,"end":1063}},"directives":[],"loc":{"start":1046,"end":1063}},{"kind":"FieldDefinition","name":{"kind":"Name","value":"user","loc":{"start":1066,"end":1070}},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"User","loc":{"start":1072,"end":1076}},"loc":{"start":1072,"end":1076}},"directives":[],"loc":{"start":1066,"end":1076}},{"kind":"FieldDefinition","name":{"kind":"Name","value":"postId","loc":{"start":1079,"end":1085}},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"String","loc":{"start":1087,"end":1093}},"loc":{"start":1087,"end":1093}},"directives":[],"loc":{"start":1079,"end":1093}}],"loc":{"start":984,"end":1095}}],"loc":{"start":0,"end":1096}} as unknown as DocumentNode
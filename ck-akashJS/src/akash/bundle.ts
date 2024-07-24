import * as _0 from "./audit/v1beta1/audit";
import * as _1 from "./audit/v1beta2/audit";
import * as _2 from "./audit/v1beta2/genesis";
import * as _3 from "./audit/v1beta2/query";
import * as _4 from "./audit/v1beta3/audit";
import * as _5 from "./audit/v1beta3/genesis";
import * as _6 from "./audit/v1beta3/query";
import * as _7 from "./base/v1beta1/attribute";
import * as _8 from "./base/v1beta1/endpoint";
import * as _9 from "./base/v1beta1/resource";
import * as _10 from "./base/v1beta1/resourcevalue";
import * as _11 from "./base/v1beta2/attribute";
import * as _12 from "./base/v1beta2/endpoint";
import * as _13 from "./base/v1beta2/resource";
import * as _14 from "./base/v1beta2/resourceunits";
import * as _15 from "./base/v1beta2/resourcevalue";
import * as _16 from "./base/v1beta3/attribute";
import * as _17 from "./base/v1beta3/cpu";
import * as _18 from "./base/v1beta3/endpoint";
import * as _19 from "./base/v1beta3/gpu";
import * as _20 from "./base/v1beta3/memory";
import * as _21 from "./base/v1beta3/resources";
import * as _22 from "./base/v1beta3/resourcevalue";
import * as _23 from "./base/v1beta3/storage";
import * as _24 from "./cert/v1beta2/cert";
import * as _25 from "./cert/v1beta2/genesis";
import * as _26 from "./cert/v1beta2/query";
import * as _27 from "./cert/v1beta3/cert";
import * as _28 from "./cert/v1beta3/genesis";
import * as _29 from "./cert/v1beta3/query";
import * as _30 from "./deployment/v1beta1/authz";
import * as _31 from "./deployment/v1beta1/deployment";
import * as _32 from "./deployment/v1beta1/genesis";
import * as _33 from "./deployment/v1beta1/group";
import * as _34 from "./deployment/v1beta1/params";
import * as _35 from "./deployment/v1beta1/query";
import * as _36 from "./deployment/v1beta2/authz";
import * as _37 from "./deployment/v1beta2/deployment";
import * as _38 from "./deployment/v1beta2/deploymentmsg";
import * as _39 from "./deployment/v1beta2/genesis";
import * as _40 from "./deployment/v1beta2/group";
import * as _41 from "./deployment/v1beta2/groupid";
import * as _42 from "./deployment/v1beta2/groupmsg";
import * as _43 from "./deployment/v1beta2/groupspec";
import * as _44 from "./deployment/v1beta2/params";
import * as _45 from "./deployment/v1beta2/query";
import * as _46 from "./deployment/v1beta2/resource";
import * as _47 from "./deployment/v1beta2/service";
import * as _48 from "./deployment/v1beta3/authz";
import * as _49 from "./deployment/v1beta3/deployment";
import * as _50 from "./deployment/v1beta3/deploymentmsg";
import * as _51 from "./deployment/v1beta3/genesis";
import * as _52 from "./deployment/v1beta3/group";
import * as _53 from "./deployment/v1beta3/groupid";
import * as _54 from "./deployment/v1beta3/groupmsg";
import * as _55 from "./deployment/v1beta3/groupspec";
import * as _56 from "./deployment/v1beta3/params";
import * as _57 from "./deployment/v1beta3/query";
import * as _58 from "./deployment/v1beta3/resourceunit";
import * as _59 from "./deployment/v1beta3/service";
import * as _60 from "./discovery/v1/akash";
import * as _61 from "./discovery/v1/client_info";
import * as _62 from "./escrow/v1beta1/genesis";
import * as _63 from "./escrow/v1beta1/query";
import * as _64 from "./escrow/v1beta1/types";
import * as _65 from "./escrow/v1beta2/genesis";
import * as _66 from "./escrow/v1beta2/query";
import * as _67 from "./escrow/v1beta2/types";
import * as _68 from "./escrow/v1beta3/genesis";
import * as _69 from "./escrow/v1beta3/query";
import * as _70 from "./escrow/v1beta3/types";
import * as _71 from "./gov/v1beta3/genesis";
import * as _72 from "./gov/v1beta3/params";
import * as _73 from "./inflation/v1beta2/genesis";
import * as _74 from "./inflation/v1beta2/params";
import * as _75 from "./inflation/v1beta3/genesis";
import * as _76 from "./inflation/v1beta3/params";
import * as _77 from "./inventory/v1/cluster";
import * as _78 from "./inventory/v1/cpu";
import * as _79 from "./inventory/v1/gpu";
import * as _80 from "./inventory/v1/memory";
import * as _81 from "./inventory/v1/node";
import * as _82 from "./inventory/v1/resourcepair";
import * as _83 from "./inventory/v1/resources";
import * as _84 from "./inventory/v1/service";
import * as _85 from "./inventory/v1/storage";
import * as _86 from "./manifest/v2beta1/group";
import * as _87 from "./manifest/v2beta1/httpoptions";
import * as _88 from "./manifest/v2beta1/service";
import * as _89 from "./manifest/v2beta1/serviceexpose";
import * as _90 from "./manifest/v2beta2/group";
import * as _91 from "./manifest/v2beta2/httpoptions";
import * as _92 from "./manifest/v2beta2/service";
import * as _93 from "./manifest/v2beta2/serviceexpose";
import * as _94 from "./market/v1beta2/bid";
import * as _95 from "./market/v1beta2/genesis";
import * as _96 from "./market/v1beta2/lease";
import * as _97 from "./market/v1beta2/order";
import * as _98 from "./market/v1beta2/params";
import * as _99 from "./market/v1beta2/query";
import * as _100 from "./market/v1beta2/service";
import * as _101 from "./market/v1beta3/bid";
import * as _102 from "./market/v1beta3/genesis";
import * as _103 from "./market/v1beta3/lease";
import * as _104 from "./market/v1beta3/order";
import * as _105 from "./market/v1beta3/params";
import * as _106 from "./market/v1beta3/query";
import * as _107 from "./market/v1beta3/service";
import * as _108 from "./market/v1beta4/bid";
import * as _109 from "./market/v1beta4/genesis";
import * as _110 from "./market/v1beta4/lease";
import * as _111 from "./market/v1beta4/order";
import * as _112 from "./market/v1beta4/params";
import * as _113 from "./market/v1beta4/query";
import * as _114 from "./market/v1beta4/service";
import * as _115 from "./provider/lease/v1/service";
import * as _116 from "./provider/v1/service";
import * as _117 from "./provider/v1/status";
import * as _118 from "./provider/v1beta1/provider";
import * as _119 from "./provider/v1beta2/genesis";
import * as _120 from "./provider/v1beta2/provider";
import * as _121 from "./provider/v1beta2/query";
import * as _122 from "./provider/v1beta3/genesis";
import * as _123 from "./provider/v1beta3/provider";
import * as _124 from "./provider/v1beta3/query";
import * as _125 from "./staking/v1beta3/genesis";
import * as _126 from "./staking/v1beta3/params";
import * as _127 from "./take/v1beta3/genesis";
import * as _128 from "./take/v1beta3/params";
import * as _129 from "./take/v1beta3/query";
import * as _202 from "./audit/v1beta1/audit.amino";
import * as _203 from "./audit/v1beta2/audit.amino";
import * as _204 from "./audit/v1beta3/audit.amino";
import * as _205 from "./cert/v1beta2/cert.amino";
import * as _206 from "./cert/v1beta3/cert.amino";
import * as _207 from "./deployment/v1beta1/deployment.amino";
import * as _208 from "./deployment/v1beta2/service.amino";
import * as _209 from "./deployment/v1beta3/service.amino";
import * as _210 from "./market/v1beta2/service.amino";
import * as _211 from "./market/v1beta3/service.amino";
import * as _212 from "./market/v1beta4/service.amino";
import * as _213 from "./provider/v1beta1/provider.amino";
import * as _214 from "./provider/v1beta2/provider.amino";
import * as _215 from "./provider/v1beta3/provider.amino";
import * as _216 from "./audit/v1beta1/audit.registry";
import * as _217 from "./audit/v1beta2/audit.registry";
import * as _218 from "./audit/v1beta3/audit.registry";
import * as _219 from "./cert/v1beta2/cert.registry";
import * as _220 from "./cert/v1beta3/cert.registry";
import * as _221 from "./deployment/v1beta1/deployment.registry";
import * as _222 from "./deployment/v1beta2/service.registry";
import * as _223 from "./deployment/v1beta3/service.registry";
import * as _224 from "./market/v1beta2/service.registry";
import * as _225 from "./market/v1beta3/service.registry";
import * as _226 from "./market/v1beta4/service.registry";
import * as _227 from "./provider/v1beta1/provider.registry";
import * as _228 from "./provider/v1beta2/provider.registry";
import * as _229 from "./provider/v1beta3/provider.registry";
import * as _230 from "./audit/v1beta2/query.rpc.Query";
import * as _231 from "./audit/v1beta3/query.rpc.Query";
import * as _232 from "./cert/v1beta2/query.rpc.Query";
import * as _233 from "./cert/v1beta3/query.rpc.Query";
import * as _234 from "./deployment/v1beta1/query.rpc.Query";
import * as _235 from "./deployment/v1beta2/query.rpc.Query";
import * as _236 from "./deployment/v1beta3/query.rpc.Query";
import * as _237 from "./escrow/v1beta1/query.rpc.Query";
import * as _238 from "./escrow/v1beta2/query.rpc.Query";
import * as _239 from "./escrow/v1beta3/query.rpc.Query";
import * as _240 from "./market/v1beta2/query.rpc.Query";
import * as _241 from "./market/v1beta3/query.rpc.Query";
import * as _242 from "./market/v1beta4/query.rpc.Query";
import * as _243 from "./provider/v1beta2/query.rpc.Query";
import * as _244 from "./provider/v1beta3/query.rpc.Query";
import * as _245 from "./take/v1beta3/query.rpc.Query";
import * as _246 from "./audit/v1beta1/audit.rpc.msg";
import * as _247 from "./audit/v1beta2/audit.rpc.msg";
import * as _248 from "./audit/v1beta3/audit.rpc.msg";
import * as _249 from "./cert/v1beta2/cert.rpc.msg";
import * as _250 from "./cert/v1beta3/cert.rpc.msg";
import * as _251 from "./deployment/v1beta1/deployment.rpc.msg";
import * as _252 from "./deployment/v1beta2/service.rpc.msg";
import * as _253 from "./deployment/v1beta3/service.rpc.msg";
import * as _254 from "./market/v1beta2/service.rpc.msg";
import * as _255 from "./market/v1beta3/service.rpc.msg";
import * as _256 from "./market/v1beta4/service.rpc.msg";
import * as _257 from "./provider/v1beta1/provider.rpc.msg";
import * as _258 from "./provider/v1beta2/provider.rpc.msg";
import * as _259 from "./provider/v1beta3/provider.rpc.msg";
import * as _293 from "./rpc.query";
import * as _294 from "./rpc.tx";
export namespace akash {
  export namespace audit {
    export const v1beta1 = {
      ..._0,
      ..._202,
      ..._216,
      ..._246
    };
    export const v1beta2 = {
      ..._1,
      ..._2,
      ..._3,
      ..._203,
      ..._217,
      ..._230,
      ..._247
    };
    export const v1beta3 = {
      ..._4,
      ..._5,
      ..._6,
      ..._204,
      ..._218,
      ..._231,
      ..._248
    };
  }
  export namespace base {
    export const v1beta1 = {
      ..._7,
      ..._8,
      ..._9,
      ..._10
    };
    export const v1beta2 = {
      ..._11,
      ..._12,
      ..._13,
      ..._14,
      ..._15
    };
    export const v1beta3 = {
      ..._16,
      ..._17,
      ..._18,
      ..._19,
      ..._20,
      ..._21,
      ..._22,
      ..._23
    };
  }
  export namespace cert {
    export const v1beta2 = {
      ..._24,
      ..._25,
      ..._26,
      ..._205,
      ..._219,
      ..._232,
      ..._249
    };
    export const v1beta3 = {
      ..._27,
      ..._28,
      ..._29,
      ..._206,
      ..._220,
      ..._233,
      ..._250
    };
  }
  export namespace deployment {
    export const v1beta1 = {
      ..._30,
      ..._31,
      ..._32,
      ..._33,
      ..._34,
      ..._35,
      ..._207,
      ..._221,
      ..._234,
      ..._251
    };
    export const v1beta2 = {
      ..._36,
      ..._37,
      ..._38,
      ..._39,
      ..._40,
      ..._41,
      ..._42,
      ..._43,
      ..._44,
      ..._45,
      ..._46,
      ..._47,
      ..._208,
      ..._222,
      ..._235,
      ..._252
    };
    export const v1beta3 = {
      ..._48,
      ..._49,
      ..._50,
      ..._51,
      ..._52,
      ..._53,
      ..._54,
      ..._55,
      ..._56,
      ..._57,
      ..._58,
      ..._59,
      ..._209,
      ..._223,
      ..._236,
      ..._253
    };
  }
  export namespace discovery {
    export const v1 = {
      ..._60,
      ..._61
    };
  }
  export namespace escrow {
    export const v1beta1 = {
      ..._62,
      ..._63,
      ..._64,
      ..._237
    };
    export const v1beta2 = {
      ..._65,
      ..._66,
      ..._67,
      ..._238
    };
    export const v1beta3 = {
      ..._68,
      ..._69,
      ..._70,
      ..._239
    };
  }
  export namespace gov {
    export const v1beta3 = {
      ..._71,
      ..._72
    };
  }
  export namespace inflation {
    export const v1beta2 = {
      ..._73,
      ..._74
    };
    export const v1beta3 = {
      ..._75,
      ..._76
    };
  }
  export namespace inventory {
    export const v1 = {
      ..._77,
      ..._78,
      ..._79,
      ..._80,
      ..._81,
      ..._82,
      ..._83,
      ..._84,
      ..._85
    };
  }
  export namespace manifest {
    export const v2beta1 = {
      ..._86,
      ..._87,
      ..._88,
      ..._89
    };
    export const v2beta2 = {
      ..._90,
      ..._91,
      ..._92,
      ..._93
    };
  }
  export namespace market {
    export const v1beta2 = {
      ..._94,
      ..._95,
      ..._96,
      ..._97,
      ..._98,
      ..._99,
      ..._100,
      ..._210,
      ..._224,
      ..._240,
      ..._254
    };
    export const v1beta3 = {
      ..._101,
      ..._102,
      ..._103,
      ..._104,
      ..._105,
      ..._106,
      ..._107,
      ..._211,
      ..._225,
      ..._241,
      ..._255
    };
    export const v1beta4 = {
      ..._108,
      ..._109,
      ..._110,
      ..._111,
      ..._112,
      ..._113,
      ..._114,
      ..._212,
      ..._226,
      ..._242,
      ..._256
    };
  }
  export namespace provider {
    export namespace lease {
      export const v1 = {
        ..._115
      };
    }
    export const v1 = {
      ..._116,
      ..._117
    };
    export const v1beta1 = {
      ..._118,
      ..._213,
      ..._227,
      ..._257
    };
    export const v1beta2 = {
      ..._119,
      ..._120,
      ..._121,
      ..._214,
      ..._228,
      ..._243,
      ..._258
    };
    export const v1beta3 = {
      ..._122,
      ..._123,
      ..._124,
      ..._215,
      ..._229,
      ..._244,
      ..._259
    };
  }
  export namespace staking {
    export const v1beta3 = {
      ..._125,
      ..._126
    };
  }
  export namespace take {
    export const v1beta3 = {
      ..._127,
      ..._128,
      ..._129,
      ..._245
    };
  }
  export const ClientFactory = {
    ..._293,
    ..._294
  };
}
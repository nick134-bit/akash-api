//@ts-nocheck
import * as _132 from "./auth/v1beta1/auth";
import * as _133 from "./auth/v1beta1/genesis";
import * as _134 from "./auth/v1beta1/query";
import * as _135 from "./authz/v1beta1/authz";
import * as _136 from "./authz/v1beta1/event";
import * as _137 from "./authz/v1beta1/genesis";
import * as _138 from "./authz/v1beta1/query";
import * as _139 from "./authz/v1beta1/tx";
import * as _140 from "./bank/v1beta1/authz";
import * as _141 from "./bank/v1beta1/bank";
import * as _142 from "./bank/v1beta1/genesis";
import * as _143 from "./bank/v1beta1/query";
import * as _144 from "./bank/v1beta1/tx";
import * as _145 from "./base/abci/v1beta1/abci";
import * as _146 from "./base/node/v1beta1/query";
import * as _147 from "./base/query/v1beta1/pagination";
import * as _148 from "./base/reflection/v2alpha1/reflection";
import * as _149 from "./base/v1beta1/coin";
import * as _150 from "./crypto/ed25519/keys";
import * as _151 from "./crypto/multisig/keys";
import * as _152 from "./crypto/secp256k1/keys";
import * as _153 from "./crypto/secp256r1/keys";
import * as _154 from "./distribution/v1beta1/distribution";
import * as _155 from "./distribution/v1beta1/genesis";
import * as _156 from "./distribution/v1beta1/query";
import * as _157 from "./distribution/v1beta1/tx";
import * as _158 from "./feegrant/v1beta1/feegrant";
import * as _159 from "./feegrant/v1beta1/genesis";
import * as _160 from "./feegrant/v1beta1/query";
import * as _161 from "./feegrant/v1beta1/tx";
import * as _162 from "./gov/v1beta1/genesis";
import * as _163 from "./gov/v1beta1/gov";
import * as _164 from "./gov/v1beta1/query";
import * as _165 from "./gov/v1beta1/tx";
import * as _166 from "./mint/v1beta1/genesis";
import * as _167 from "./mint/v1beta1/mint";
import * as _168 from "./mint/v1beta1/query";
import * as _169 from "./params/v1beta1/params";
import * as _170 from "./params/v1beta1/query";
import * as _171 from "./staking/v1beta1/authz";
import * as _172 from "./staking/v1beta1/genesis";
import * as _173 from "./staking/v1beta1/query";
import * as _174 from "./staking/v1beta1/staking";
import * as _175 from "./staking/v1beta1/tx";
import * as _176 from "./tx/signing/v1beta1/signing";
import * as _177 from "./tx/v1beta1/service";
import * as _178 from "./tx/v1beta1/tx";
import * as _179 from "./upgrade/v1beta1/query";
import * as _180 from "./upgrade/v1beta1/upgrade";
import * as _181 from "./vesting/v1beta1/tx";
import * as _182 from "./vesting/v1beta1/vesting";
import * as _260 from "./authz/v1beta1/tx.amino";
import * as _261 from "./bank/v1beta1/tx.amino";
import * as _262 from "./distribution/v1beta1/tx.amino";
import * as _263 from "./feegrant/v1beta1/tx.amino";
import * as _264 from "./gov/v1beta1/tx.amino";
import * as _265 from "./staking/v1beta1/tx.amino";
import * as _266 from "./vesting/v1beta1/tx.amino";
import * as _267 from "./authz/v1beta1/tx.registry";
import * as _268 from "./bank/v1beta1/tx.registry";
import * as _269 from "./distribution/v1beta1/tx.registry";
import * as _270 from "./feegrant/v1beta1/tx.registry";
import * as _271 from "./gov/v1beta1/tx.registry";
import * as _272 from "./staking/v1beta1/tx.registry";
import * as _273 from "./vesting/v1beta1/tx.registry";
import * as _274 from "./auth/v1beta1/query.rpc.Query";
import * as _275 from "./authz/v1beta1/query.rpc.Query";
import * as _276 from "./bank/v1beta1/query.rpc.Query";
import * as _277 from "./base/node/v1beta1/query.rpc.Service";
import * as _278 from "./distribution/v1beta1/query.rpc.Query";
import * as _279 from "./feegrant/v1beta1/query.rpc.Query";
import * as _280 from "./gov/v1beta1/query.rpc.Query";
import * as _281 from "./mint/v1beta1/query.rpc.Query";
import * as _282 from "./params/v1beta1/query.rpc.Query";
import * as _283 from "./staking/v1beta1/query.rpc.Query";
import * as _284 from "./tx/v1beta1/service.rpc.Service";
import * as _285 from "./upgrade/v1beta1/query.rpc.Query";
import * as _286 from "./authz/v1beta1/tx.rpc.msg";
import * as _287 from "./bank/v1beta1/tx.rpc.msg";
import * as _288 from "./distribution/v1beta1/tx.rpc.msg";
import * as _289 from "./feegrant/v1beta1/tx.rpc.msg";
import * as _290 from "./gov/v1beta1/tx.rpc.msg";
import * as _291 from "./staking/v1beta1/tx.rpc.msg";
import * as _292 from "./vesting/v1beta1/tx.rpc.msg";
import * as _295 from "./rpc.query";
import * as _296 from "./rpc.tx";
export namespace cosmos {
  export namespace auth {
    export const v1beta1 = {
      ..._132,
      ..._133,
      ..._134,
      ..._274
    };
  }
  export namespace authz {
    export const v1beta1 = {
      ..._135,
      ..._136,
      ..._137,
      ..._138,
      ..._139,
      ..._260,
      ..._267,
      ..._275,
      ..._286
    };
  }
  export namespace bank {
    export const v1beta1 = {
      ..._140,
      ..._141,
      ..._142,
      ..._143,
      ..._144,
      ..._261,
      ..._268,
      ..._276,
      ..._287
    };
  }
  export namespace base {
    export namespace abci {
      export const v1beta1 = {
        ..._145
      };
    }
    export namespace node {
      export const v1beta1 = {
        ..._146,
        ..._277
      };
    }
    export namespace query {
      export const v1beta1 = {
        ..._147
      };
    }
    export namespace reflection {
      export const v2alpha1 = {
        ..._148
      };
    }
    export const v1beta1 = {
      ..._149
    };
  }
  export namespace crypto {
    export const ed25519 = {
      ..._150
    };
    export const multisig = {
      ..._151
    };
    export const secp256k1 = {
      ..._152
    };
    export const secp256r1 = {
      ..._153
    };
  }
  export namespace distribution {
    export const v1beta1 = {
      ..._154,
      ..._155,
      ..._156,
      ..._157,
      ..._262,
      ..._269,
      ..._278,
      ..._288
    };
  }
  export namespace feegrant {
    export const v1beta1 = {
      ..._158,
      ..._159,
      ..._160,
      ..._161,
      ..._263,
      ..._270,
      ..._279,
      ..._289
    };
  }
  export namespace gov {
    export const v1beta1 = {
      ..._162,
      ..._163,
      ..._164,
      ..._165,
      ..._264,
      ..._271,
      ..._280,
      ..._290
    };
  }
  export namespace mint {
    export const v1beta1 = {
      ..._166,
      ..._167,
      ..._168,
      ..._281
    };
  }
  export namespace params {
    export const v1beta1 = {
      ..._169,
      ..._170,
      ..._282
    };
  }
  export namespace staking {
    export const v1beta1 = {
      ..._171,
      ..._172,
      ..._173,
      ..._174,
      ..._175,
      ..._265,
      ..._272,
      ..._283,
      ..._291
    };
  }
  export namespace tx {
    export namespace signing {
      export const v1beta1 = {
        ..._176
      };
    }
    export const v1beta1 = {
      ..._177,
      ..._178,
      ..._284
    };
  }
  export namespace upgrade {
    export const v1beta1 = {
      ..._179,
      ..._180,
      ..._285
    };
  }
  export namespace vesting {
    export const v1beta1 = {
      ..._181,
      ..._182,
      ..._266,
      ..._273,
      ..._292
    };
  }
  export const ClientFactory = {
    ..._295,
    ..._296
  };
}
import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { JsonSafe } from "../../../json-safe";
/** Params defines the parameters for the x/deployment package */
export interface Params {
  minDeposits: Coin[];
}
export interface ParamsProtoMsg {
  typeUrl: "/akash.deployment.v1beta3.Params";
  value: Uint8Array;
}
/** Params defines the parameters for the x/deployment package */
export interface ParamsAmino {
  min_deposits: CoinAmino[];
}
export interface ParamsAminoMsg {
  type: "/akash.deployment.v1beta3.Params";
  value: ParamsAmino;
}
/** Params defines the parameters for the x/deployment package */
export interface ParamsSDKType {
  min_deposits: CoinSDKType[];
}
function createBaseParams(): Params {
  return {
    minDeposits: []
  };
}
export const Params = {
  typeUrl: "/akash.deployment.v1beta3.Params",
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.minDeposits) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Params {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.minDeposits.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Params {
    return {
      minDeposits: Array.isArray(object?.minDeposits) ? object.minDeposits.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  toJSON(message: Params): JsonSafe<Params> {
    const obj: any = {};
    if (message.minDeposits) {
      obj.minDeposits = message.minDeposits.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.minDeposits = [];
    }
    return obj;
  },
  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.minDeposits = object.minDeposits?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    const message = createBaseParams();
    message.minDeposits = object.min_deposits?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    if (message.minDeposits) {
      obj.min_deposits = message.minDeposits.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.min_deposits = message.minDeposits;
    }
    return obj;
  },
  fromAminoMsg(object: ParamsAminoMsg): Params {
    return Params.fromAmino(object.value);
  },
  fromProtoMsg(message: ParamsProtoMsg): Params {
    return Params.decode(message.value);
  },
  toProto(message: Params): Uint8Array {
    return Params.encode(message).finish();
  },
  toProtoMsg(message: Params): ParamsProtoMsg {
    return {
      typeUrl: "/akash.deployment.v1beta3.Params",
      value: Params.encode(message).finish()
    };
  }
};
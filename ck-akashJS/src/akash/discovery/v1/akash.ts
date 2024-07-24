import { ClientInfo, ClientInfoAmino, ClientInfoSDKType } from "./client_info";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../helpers";
import { JsonSafe } from "../../../json-safe";
/** Akash akash specific RPC parameters */
export interface Akash {
  clientInfo?: ClientInfo | undefined;
}
export interface AkashProtoMsg {
  typeUrl: "/akash.discovery.v1.Akash";
  value: Uint8Array;
}
/** Akash akash specific RPC parameters */
export interface AkashAmino {
  client_info: ClientInfoAmino | undefined;
}
export interface AkashAminoMsg {
  type: "/akash.discovery.v1.Akash";
  value: AkashAmino;
}
/** Akash akash specific RPC parameters */
export interface AkashSDKType {
  client_info?: ClientInfoSDKType | undefined;
}
function createBaseAkash(): Akash {
  return {
    clientInfo: undefined
  };
}
export const Akash = {
  typeUrl: "/akash.discovery.v1.Akash",
  encode(message: Akash, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.clientInfo !== undefined) {
      ClientInfo.encode(message.clientInfo, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Akash {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAkash();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clientInfo = ClientInfo.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Akash {
    return {
      clientInfo: isSet(object.clientInfo) ? ClientInfo.fromJSON(object.clientInfo) : undefined
    };
  },
  toJSON(message: Akash): JsonSafe<Akash> {
    const obj: any = {};
    message.clientInfo !== undefined && (obj.clientInfo = message.clientInfo ? ClientInfo.toJSON(message.clientInfo) : undefined);
    return obj;
  },
  fromPartial(object: Partial<Akash>): Akash {
    const message = createBaseAkash();
    message.clientInfo = object.clientInfo !== undefined && object.clientInfo !== null ? ClientInfo.fromPartial(object.clientInfo) : undefined;
    return message;
  },
  fromAmino(object: AkashAmino): Akash {
    const message = createBaseAkash();
    if (object.client_info !== undefined && object.client_info !== null) {
      message.clientInfo = ClientInfo.fromAmino(object.client_info);
    }
    return message;
  },
  toAmino(message: Akash): AkashAmino {
    const obj: any = {};
    obj.client_info = message.clientInfo ? ClientInfo.toAmino(message.clientInfo) : ClientInfo.toAmino(ClientInfo.fromPartial({}));
    return obj;
  },
  fromAminoMsg(object: AkashAminoMsg): Akash {
    return Akash.fromAmino(object.value);
  },
  fromProtoMsg(message: AkashProtoMsg): Akash {
    return Akash.decode(message.value);
  },
  toProto(message: Akash): Uint8Array {
    return Akash.encode(message).finish();
  },
  toProtoMsg(message: Akash): AkashProtoMsg {
    return {
      typeUrl: "/akash.discovery.v1.Akash",
      value: Akash.encode(message).finish()
    };
  }
};
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/** ClientInfo akash specific client info */
export interface ClientInfo {
  apiVersion: string;
}
export interface ClientInfoProtoMsg {
  typeUrl: "/akash.discovery.v1.ClientInfo";
  value: Uint8Array;
}
/** ClientInfo akash specific client info */
export interface ClientInfoAmino {
  api_version: string;
}
export interface ClientInfoAminoMsg {
  type: "/akash.discovery.v1.ClientInfo";
  value: ClientInfoAmino;
}
/** ClientInfo akash specific client info */
export interface ClientInfoSDKType {
  api_version: string;
}
function createBaseClientInfo(): ClientInfo {
  return {
    apiVersion: ""
  };
}
export const ClientInfo = {
  typeUrl: "/akash.discovery.v1.ClientInfo",
  encode(message: ClientInfo, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.apiVersion !== "") {
      writer.uint32(10).string(message.apiVersion);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ClientInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseClientInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.apiVersion = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<ClientInfo>): ClientInfo {
    const message = createBaseClientInfo();
    message.apiVersion = object.apiVersion ?? "";
    return message;
  },
  fromAmino(object: ClientInfoAmino): ClientInfo {
    const message = createBaseClientInfo();
    if (object.api_version !== undefined && object.api_version !== null) {
      message.apiVersion = object.api_version;
    }
    return message;
  },
  toAmino(message: ClientInfo): ClientInfoAmino {
    const obj: any = {};
    obj.api_version = message.apiVersion ?? "";
    return obj;
  },
  fromAminoMsg(object: ClientInfoAminoMsg): ClientInfo {
    return ClientInfo.fromAmino(object.value);
  },
  fromProtoMsg(message: ClientInfoProtoMsg): ClientInfo {
    return ClientInfo.decode(message.value);
  },
  toProto(message: ClientInfo): Uint8Array {
    return ClientInfo.encode(message).finish();
  },
  toProtoMsg(message: ClientInfo): ClientInfoProtoMsg {
    return {
      typeUrl: "/akash.discovery.v1.ClientInfo",
      value: ClientInfo.encode(message).finish()
    };
  }
};
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../helpers";
import { JsonSafe } from "../../../json-safe";
/** ServiceExposeHTTPOptions */
export interface ServiceExposeHTTPOptions {
  maxBodySize: number;
  readTimeout: number;
  sendTimeout: number;
  nextTries: number;
  nextTimeout: number;
  nextCases: string[];
}
export interface ServiceExposeHTTPOptionsProtoMsg {
  typeUrl: "/akash.manifest.v2beta1.ServiceExposeHTTPOptions";
  value: Uint8Array;
}
/** ServiceExposeHTTPOptions */
export interface ServiceExposeHTTPOptionsAmino {
  max_body_size: number;
  read_timeout: number;
  send_timeout: number;
  next_tries: number;
  next_timeout: number;
  next_cases: string[];
}
export interface ServiceExposeHTTPOptionsAminoMsg {
  type: "/akash.manifest.v2beta1.ServiceExposeHTTPOptions";
  value: ServiceExposeHTTPOptionsAmino;
}
/** ServiceExposeHTTPOptions */
export interface ServiceExposeHTTPOptionsSDKType {
  max_body_size: number;
  read_timeout: number;
  send_timeout: number;
  next_tries: number;
  next_timeout: number;
  next_cases: string[];
}
function createBaseServiceExposeHTTPOptions(): ServiceExposeHTTPOptions {
  return {
    maxBodySize: 0,
    readTimeout: 0,
    sendTimeout: 0,
    nextTries: 0,
    nextTimeout: 0,
    nextCases: []
  };
}
export const ServiceExposeHTTPOptions = {
  typeUrl: "/akash.manifest.v2beta1.ServiceExposeHTTPOptions",
  encode(message: ServiceExposeHTTPOptions, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.maxBodySize !== 0) {
      writer.uint32(8).uint32(message.maxBodySize);
    }
    if (message.readTimeout !== 0) {
      writer.uint32(16).uint32(message.readTimeout);
    }
    if (message.sendTimeout !== 0) {
      writer.uint32(24).uint32(message.sendTimeout);
    }
    if (message.nextTries !== 0) {
      writer.uint32(32).uint32(message.nextTries);
    }
    if (message.nextTimeout !== 0) {
      writer.uint32(40).uint32(message.nextTimeout);
    }
    for (const v of message.nextCases) {
      writer.uint32(50).string(v!);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): ServiceExposeHTTPOptions {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseServiceExposeHTTPOptions();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.maxBodySize = reader.uint32();
          break;
        case 2:
          message.readTimeout = reader.uint32();
          break;
        case 3:
          message.sendTimeout = reader.uint32();
          break;
        case 4:
          message.nextTries = reader.uint32();
          break;
        case 5:
          message.nextTimeout = reader.uint32();
          break;
        case 6:
          message.nextCases.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ServiceExposeHTTPOptions {
    return {
      maxBodySize: isSet(object.maxBodySize) ? Number(object.maxBodySize) : 0,
      readTimeout: isSet(object.readTimeout) ? Number(object.readTimeout) : 0,
      sendTimeout: isSet(object.sendTimeout) ? Number(object.sendTimeout) : 0,
      nextTries: isSet(object.nextTries) ? Number(object.nextTries) : 0,
      nextTimeout: isSet(object.nextTimeout) ? Number(object.nextTimeout) : 0,
      nextCases: Array.isArray(object?.nextCases) ? object.nextCases.map((e: any) => String(e)) : []
    };
  },
  toJSON(message: ServiceExposeHTTPOptions): JsonSafe<ServiceExposeHTTPOptions> {
    const obj: any = {};
    message.maxBodySize !== undefined && (obj.maxBodySize = Math.round(message.maxBodySize));
    message.readTimeout !== undefined && (obj.readTimeout = Math.round(message.readTimeout));
    message.sendTimeout !== undefined && (obj.sendTimeout = Math.round(message.sendTimeout));
    message.nextTries !== undefined && (obj.nextTries = Math.round(message.nextTries));
    message.nextTimeout !== undefined && (obj.nextTimeout = Math.round(message.nextTimeout));
    if (message.nextCases) {
      obj.nextCases = message.nextCases.map(e => e);
    } else {
      obj.nextCases = [];
    }
    return obj;
  },
  fromPartial(object: Partial<ServiceExposeHTTPOptions>): ServiceExposeHTTPOptions {
    const message = createBaseServiceExposeHTTPOptions();
    message.maxBodySize = object.maxBodySize ?? 0;
    message.readTimeout = object.readTimeout ?? 0;
    message.sendTimeout = object.sendTimeout ?? 0;
    message.nextTries = object.nextTries ?? 0;
    message.nextTimeout = object.nextTimeout ?? 0;
    message.nextCases = object.nextCases?.map(e => e) || [];
    return message;
  },
  fromAmino(object: ServiceExposeHTTPOptionsAmino): ServiceExposeHTTPOptions {
    const message = createBaseServiceExposeHTTPOptions();
    if (object.max_body_size !== undefined && object.max_body_size !== null) {
      message.maxBodySize = object.max_body_size;
    }
    if (object.read_timeout !== undefined && object.read_timeout !== null) {
      message.readTimeout = object.read_timeout;
    }
    if (object.send_timeout !== undefined && object.send_timeout !== null) {
      message.sendTimeout = object.send_timeout;
    }
    if (object.next_tries !== undefined && object.next_tries !== null) {
      message.nextTries = object.next_tries;
    }
    if (object.next_timeout !== undefined && object.next_timeout !== null) {
      message.nextTimeout = object.next_timeout;
    }
    message.nextCases = object.next_cases?.map(e => e) || [];
    return message;
  },
  toAmino(message: ServiceExposeHTTPOptions): ServiceExposeHTTPOptionsAmino {
    const obj: any = {};
    obj.max_body_size = message.maxBodySize ?? 0;
    obj.read_timeout = message.readTimeout ?? 0;
    obj.send_timeout = message.sendTimeout ?? 0;
    obj.next_tries = message.nextTries ?? 0;
    obj.next_timeout = message.nextTimeout ?? 0;
    if (message.nextCases) {
      obj.next_cases = message.nextCases.map(e => e);
    } else {
      obj.next_cases = message.nextCases;
    }
    return obj;
  },
  fromAminoMsg(object: ServiceExposeHTTPOptionsAminoMsg): ServiceExposeHTTPOptions {
    return ServiceExposeHTTPOptions.fromAmino(object.value);
  },
  fromProtoMsg(message: ServiceExposeHTTPOptionsProtoMsg): ServiceExposeHTTPOptions {
    return ServiceExposeHTTPOptions.decode(message.value);
  },
  toProto(message: ServiceExposeHTTPOptions): Uint8Array {
    return ServiceExposeHTTPOptions.encode(message).finish();
  },
  toProtoMsg(message: ServiceExposeHTTPOptions): ServiceExposeHTTPOptionsProtoMsg {
    return {
      typeUrl: "/akash.manifest.v2beta1.ServiceExposeHTTPOptions",
      value: ServiceExposeHTTPOptions.encode(message).finish()
    };
  }
};
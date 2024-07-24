import { ResourcePair, ResourcePairAmino, ResourcePairSDKType } from "./resourcepair";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../helpers";
import { JsonSafe } from "../../../json-safe";
/** MemoryInfo reports Memory details */
export interface MemoryInfo {
  vendor: string;
  type: string;
  totalSize: string;
  speed: string;
}
export interface MemoryInfoProtoMsg {
  typeUrl: "/akash.inventory.v1.MemoryInfo";
  value: Uint8Array;
}
/** MemoryInfo reports Memory details */
export interface MemoryInfoAmino {
  vendor: string;
  type: string;
  total_size: string;
  speed: string;
}
export interface MemoryInfoAminoMsg {
  type: "/akash.inventory.v1.MemoryInfo";
  value: MemoryInfoAmino;
}
/** MemoryInfo reports Memory details */
export interface MemoryInfoSDKType {
  vendor: string;
  type: string;
  total_size: string;
  speed: string;
}
/** Memory reports Memory inventory details */
export interface Memory {
  quantity: ResourcePair | undefined;
  info: MemoryInfo[];
}
export interface MemoryProtoMsg {
  typeUrl: "/akash.inventory.v1.Memory";
  value: Uint8Array;
}
/** Memory reports Memory inventory details */
export interface MemoryAmino {
  quantity: ResourcePairAmino | undefined;
  info: MemoryInfoAmino[];
}
export interface MemoryAminoMsg {
  type: "/akash.inventory.v1.Memory";
  value: MemoryAmino;
}
/** Memory reports Memory inventory details */
export interface MemorySDKType {
  quantity: ResourcePairSDKType | undefined;
  info: MemoryInfoSDKType[];
}
function createBaseMemoryInfo(): MemoryInfo {
  return {
    vendor: "",
    type: "",
    totalSize: "",
    speed: ""
  };
}
export const MemoryInfo = {
  typeUrl: "/akash.inventory.v1.MemoryInfo",
  encode(message: MemoryInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.vendor !== "") {
      writer.uint32(10).string(message.vendor);
    }
    if (message.type !== "") {
      writer.uint32(18).string(message.type);
    }
    if (message.totalSize !== "") {
      writer.uint32(26).string(message.totalSize);
    }
    if (message.speed !== "") {
      writer.uint32(34).string(message.speed);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MemoryInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMemoryInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.vendor = reader.string();
          break;
        case 2:
          message.type = reader.string();
          break;
        case 3:
          message.totalSize = reader.string();
          break;
        case 4:
          message.speed = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MemoryInfo {
    return {
      vendor: isSet(object.vendor) ? String(object.vendor) : "",
      type: isSet(object.type) ? String(object.type) : "",
      totalSize: isSet(object.totalSize) ? String(object.totalSize) : "",
      speed: isSet(object.speed) ? String(object.speed) : ""
    };
  },
  toJSON(message: MemoryInfo): JsonSafe<MemoryInfo> {
    const obj: any = {};
    message.vendor !== undefined && (obj.vendor = message.vendor);
    message.type !== undefined && (obj.type = message.type);
    message.totalSize !== undefined && (obj.totalSize = message.totalSize);
    message.speed !== undefined && (obj.speed = message.speed);
    return obj;
  },
  fromPartial(object: Partial<MemoryInfo>): MemoryInfo {
    const message = createBaseMemoryInfo();
    message.vendor = object.vendor ?? "";
    message.type = object.type ?? "";
    message.totalSize = object.totalSize ?? "";
    message.speed = object.speed ?? "";
    return message;
  },
  fromAmino(object: MemoryInfoAmino): MemoryInfo {
    const message = createBaseMemoryInfo();
    if (object.vendor !== undefined && object.vendor !== null) {
      message.vendor = object.vendor;
    }
    if (object.type !== undefined && object.type !== null) {
      message.type = object.type;
    }
    if (object.total_size !== undefined && object.total_size !== null) {
      message.totalSize = object.total_size;
    }
    if (object.speed !== undefined && object.speed !== null) {
      message.speed = object.speed;
    }
    return message;
  },
  toAmino(message: MemoryInfo): MemoryInfoAmino {
    const obj: any = {};
    obj.vendor = message.vendor ?? "";
    obj.type = message.type ?? "";
    obj.total_size = message.totalSize ?? "";
    obj.speed = message.speed ?? "";
    return obj;
  },
  fromAminoMsg(object: MemoryInfoAminoMsg): MemoryInfo {
    return MemoryInfo.fromAmino(object.value);
  },
  fromProtoMsg(message: MemoryInfoProtoMsg): MemoryInfo {
    return MemoryInfo.decode(message.value);
  },
  toProto(message: MemoryInfo): Uint8Array {
    return MemoryInfo.encode(message).finish();
  },
  toProtoMsg(message: MemoryInfo): MemoryInfoProtoMsg {
    return {
      typeUrl: "/akash.inventory.v1.MemoryInfo",
      value: MemoryInfo.encode(message).finish()
    };
  }
};
function createBaseMemory(): Memory {
  return {
    quantity: ResourcePair.fromPartial({}),
    info: []
  };
}
export const Memory = {
  typeUrl: "/akash.inventory.v1.Memory",
  encode(message: Memory, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.quantity !== undefined) {
      ResourcePair.encode(message.quantity, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.info) {
      MemoryInfo.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Memory {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMemory();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.quantity = ResourcePair.decode(reader, reader.uint32());
          break;
        case 2:
          message.info.push(MemoryInfo.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Memory {
    return {
      quantity: isSet(object.quantity) ? ResourcePair.fromJSON(object.quantity) : undefined,
      info: Array.isArray(object?.info) ? object.info.map((e: any) => MemoryInfo.fromJSON(e)) : []
    };
  },
  toJSON(message: Memory): JsonSafe<Memory> {
    const obj: any = {};
    message.quantity !== undefined && (obj.quantity = message.quantity ? ResourcePair.toJSON(message.quantity) : undefined);
    if (message.info) {
      obj.info = message.info.map(e => e ? MemoryInfo.toJSON(e) : undefined);
    } else {
      obj.info = [];
    }
    return obj;
  },
  fromPartial(object: Partial<Memory>): Memory {
    const message = createBaseMemory();
    message.quantity = object.quantity !== undefined && object.quantity !== null ? ResourcePair.fromPartial(object.quantity) : undefined;
    message.info = object.info?.map(e => MemoryInfo.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: MemoryAmino): Memory {
    const message = createBaseMemory();
    if (object.quantity !== undefined && object.quantity !== null) {
      message.quantity = ResourcePair.fromAmino(object.quantity);
    }
    message.info = object.info?.map(e => MemoryInfo.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: Memory): MemoryAmino {
    const obj: any = {};
    obj.quantity = message.quantity ? ResourcePair.toAmino(message.quantity) : ResourcePair.toAmino(ResourcePair.fromPartial({}));
    if (message.info) {
      obj.info = message.info.map(e => e ? MemoryInfo.toAmino(e) : undefined);
    } else {
      obj.info = message.info;
    }
    return obj;
  },
  fromAminoMsg(object: MemoryAminoMsg): Memory {
    return Memory.fromAmino(object.value);
  },
  fromProtoMsg(message: MemoryProtoMsg): Memory {
    return Memory.decode(message.value);
  },
  toProto(message: Memory): Uint8Array {
    return Memory.encode(message).finish();
  },
  toProtoMsg(message: Memory): MemoryProtoMsg {
    return {
      typeUrl: "/akash.inventory.v1.Memory",
      value: Memory.encode(message).finish()
    };
  }
};
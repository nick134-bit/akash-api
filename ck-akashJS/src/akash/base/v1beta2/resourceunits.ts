import { CPU, CPUAmino, CPUSDKType, Memory, MemoryAmino, MemorySDKType, Storage, StorageAmino, StorageSDKType } from "./resource";
import { Endpoint, EndpointAmino, EndpointSDKType } from "./endpoint";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../helpers";
import { JsonSafe } from "../../../json-safe";
/**
 * ResourceUnits describes all available resources types for deployment/node etc
 * if field is nil resource is not present in the given data-structure
 */
export interface ResourceUnits {
  cpu?: CPU | undefined;
  memory?: Memory | undefined;
  storage: Storage[];
  endpoints: Endpoint[];
}
export interface ResourceUnitsProtoMsg {
  typeUrl: "/akash.base.v1beta2.ResourceUnits";
  value: Uint8Array;
}
/**
 * ResourceUnits describes all available resources types for deployment/node etc
 * if field is nil resource is not present in the given data-structure
 */
export interface ResourceUnitsAmino {
  cpu?: CPUAmino | undefined;
  memory?: MemoryAmino | undefined;
  storage?: StorageAmino[];
  endpoints: EndpointAmino[];
}
export interface ResourceUnitsAminoMsg {
  type: "/akash.base.v1beta2.ResourceUnits";
  value: ResourceUnitsAmino;
}
/**
 * ResourceUnits describes all available resources types for deployment/node etc
 * if field is nil resource is not present in the given data-structure
 */
export interface ResourceUnitsSDKType {
  cpu?: CPUSDKType | undefined;
  memory?: MemorySDKType | undefined;
  storage: StorageSDKType[];
  endpoints: EndpointSDKType[];
}
function createBaseResourceUnits(): ResourceUnits {
  return {
    cpu: undefined,
    memory: undefined,
    storage: [],
    endpoints: []
  };
}
export const ResourceUnits = {
  typeUrl: "/akash.base.v1beta2.ResourceUnits",
  encode(message: ResourceUnits, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.cpu !== undefined) {
      CPU.encode(message.cpu, writer.uint32(10).fork()).ldelim();
    }
    if (message.memory !== undefined) {
      Memory.encode(message.memory, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.storage) {
      Storage.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.endpoints) {
      Endpoint.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): ResourceUnits {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResourceUnits();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.cpu = CPU.decode(reader, reader.uint32());
          break;
        case 2:
          message.memory = Memory.decode(reader, reader.uint32());
          break;
        case 3:
          message.storage.push(Storage.decode(reader, reader.uint32()));
          break;
        case 4:
          message.endpoints.push(Endpoint.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ResourceUnits {
    return {
      cpu: isSet(object.cpu) ? CPU.fromJSON(object.cpu) : undefined,
      memory: isSet(object.memory) ? Memory.fromJSON(object.memory) : undefined,
      storage: Array.isArray(object?.storage) ? object.storage.map((e: any) => Storage.fromJSON(e)) : [],
      endpoints: Array.isArray(object?.endpoints) ? object.endpoints.map((e: any) => Endpoint.fromJSON(e)) : []
    };
  },
  toJSON(message: ResourceUnits): JsonSafe<ResourceUnits> {
    const obj: any = {};
    message.cpu !== undefined && (obj.cpu = message.cpu ? CPU.toJSON(message.cpu) : undefined);
    message.memory !== undefined && (obj.memory = message.memory ? Memory.toJSON(message.memory) : undefined);
    if (message.storage) {
      obj.storage = message.storage.map(e => e ? Storage.toJSON(e) : undefined);
    } else {
      obj.storage = [];
    }
    if (message.endpoints) {
      obj.endpoints = message.endpoints.map(e => e ? Endpoint.toJSON(e) : undefined);
    } else {
      obj.endpoints = [];
    }
    return obj;
  },
  fromPartial(object: Partial<ResourceUnits>): ResourceUnits {
    const message = createBaseResourceUnits();
    message.cpu = object.cpu !== undefined && object.cpu !== null ? CPU.fromPartial(object.cpu) : undefined;
    message.memory = object.memory !== undefined && object.memory !== null ? Memory.fromPartial(object.memory) : undefined;
    message.storage = object.storage?.map(e => Storage.fromPartial(e)) || [];
    message.endpoints = object.endpoints?.map(e => Endpoint.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: ResourceUnitsAmino): ResourceUnits {
    const message = createBaseResourceUnits();
    if (object.cpu !== undefined && object.cpu !== null) {
      message.cpu = CPU.fromAmino(object.cpu);
    }
    if (object.memory !== undefined && object.memory !== null) {
      message.memory = Memory.fromAmino(object.memory);
    }
    message.storage = object.storage?.map(e => Storage.fromAmino(e)) || [];
    message.endpoints = object.endpoints?.map(e => Endpoint.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: ResourceUnits): ResourceUnitsAmino {
    const obj: any = {};
    obj.cpu = message.cpu ? CPU.toAmino(message.cpu) : undefined;
    obj.memory = message.memory ? Memory.toAmino(message.memory) : undefined;
    if (message.storage) {
      obj.storage = message.storage.map(e => e ? Storage.toAmino(e) : undefined);
    } else {
      obj.storage = message.storage;
    }
    if (message.endpoints) {
      obj.endpoints = message.endpoints.map(e => e ? Endpoint.toAmino(e) : undefined);
    } else {
      obj.endpoints = message.endpoints;
    }
    return obj;
  },
  fromAminoMsg(object: ResourceUnitsAminoMsg): ResourceUnits {
    return ResourceUnits.fromAmino(object.value);
  },
  fromProtoMsg(message: ResourceUnitsProtoMsg): ResourceUnits {
    return ResourceUnits.decode(message.value);
  },
  toProto(message: ResourceUnits): Uint8Array {
    return ResourceUnits.encode(message).finish();
  },
  toProtoMsg(message: ResourceUnits): ResourceUnitsProtoMsg {
    return {
      typeUrl: "/akash.base.v1beta2.ResourceUnits",
      value: ResourceUnits.encode(message).finish()
    };
  }
};
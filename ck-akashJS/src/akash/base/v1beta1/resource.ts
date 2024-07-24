import { ResourceValue, ResourceValueAmino, ResourceValueSDKType } from "./resourcevalue";
import { Attribute, AttributeAmino, AttributeSDKType } from "./attribute";
import { Endpoint, EndpointAmino, EndpointSDKType } from "./endpoint";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../helpers";
import { JsonSafe } from "../../../json-safe";
/** CPU stores resource units and cpu config attributes */
export interface CPU {
  units: ResourceValue | undefined;
  attributes: Attribute[];
}
export interface CPUProtoMsg {
  typeUrl: "/akash.base.v1beta1.CPU";
  value: Uint8Array;
}
/** CPU stores resource units and cpu config attributes */
export interface CPUAmino {
  units?: ResourceValueAmino | undefined;
  attributes?: AttributeAmino[];
}
export interface CPUAminoMsg {
  type: "/akash.base.v1beta1.CPU";
  value: CPUAmino;
}
/** CPU stores resource units and cpu config attributes */
export interface CPUSDKType {
  units: ResourceValueSDKType | undefined;
  attributes: AttributeSDKType[];
}
/** Memory stores resource quantity and memory attributes */
export interface Memory {
  quantity: ResourceValue | undefined;
  attributes: Attribute[];
}
export interface MemoryProtoMsg {
  typeUrl: "/akash.base.v1beta1.Memory";
  value: Uint8Array;
}
/** Memory stores resource quantity and memory attributes */
export interface MemoryAmino {
  quantity: ResourceValueAmino | undefined;
  attributes?: AttributeAmino[];
}
export interface MemoryAminoMsg {
  type: "/akash.base.v1beta1.Memory";
  value: MemoryAmino;
}
/** Memory stores resource quantity and memory attributes */
export interface MemorySDKType {
  quantity: ResourceValueSDKType | undefined;
  attributes: AttributeSDKType[];
}
/** Storage stores resource quantity and storage attributes */
export interface Storage {
  quantity: ResourceValue | undefined;
  attributes: Attribute[];
}
export interface StorageProtoMsg {
  typeUrl: "/akash.base.v1beta1.Storage";
  value: Uint8Array;
}
/** Storage stores resource quantity and storage attributes */
export interface StorageAmino {
  quantity: ResourceValueAmino | undefined;
  attributes?: AttributeAmino[];
}
export interface StorageAminoMsg {
  type: "/akash.base.v1beta1.Storage";
  value: StorageAmino;
}
/** Storage stores resource quantity and storage attributes */
export interface StorageSDKType {
  quantity: ResourceValueSDKType | undefined;
  attributes: AttributeSDKType[];
}
/**
 * ResourceUnits describes all available resources types for deployment/node etc
 * if field is nil resource is not present in the given data-structure
 */
export interface ResourceUnits {
  cpu?: CPU | undefined;
  memory?: Memory | undefined;
  storage?: Storage | undefined;
  endpoints: Endpoint[];
}
export interface ResourceUnitsProtoMsg {
  typeUrl: "/akash.base.v1beta1.ResourceUnits";
  value: Uint8Array;
}
/**
 * ResourceUnits describes all available resources types for deployment/node etc
 * if field is nil resource is not present in the given data-structure
 */
export interface ResourceUnitsAmino {
  cpu?: CPUAmino | undefined;
  memory?: MemoryAmino | undefined;
  storage?: StorageAmino | undefined;
  endpoints: EndpointAmino[];
}
export interface ResourceUnitsAminoMsg {
  type: "/akash.base.v1beta1.ResourceUnits";
  value: ResourceUnitsAmino;
}
/**
 * ResourceUnits describes all available resources types for deployment/node etc
 * if field is nil resource is not present in the given data-structure
 */
export interface ResourceUnitsSDKType {
  cpu?: CPUSDKType | undefined;
  memory?: MemorySDKType | undefined;
  storage?: StorageSDKType | undefined;
  endpoints: EndpointSDKType[];
}
function createBaseCPU(): CPU {
  return {
    units: ResourceValue.fromPartial({}),
    attributes: []
  };
}
export const CPU = {
  typeUrl: "/akash.base.v1beta1.CPU",
  encode(message: CPU, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.units !== undefined) {
      ResourceValue.encode(message.units, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.attributes) {
      Attribute.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): CPU {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCPU();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.units = ResourceValue.decode(reader, reader.uint32());
          break;
        case 2:
          message.attributes.push(Attribute.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): CPU {
    return {
      units: isSet(object.units) ? ResourceValue.fromJSON(object.units) : undefined,
      attributes: Array.isArray(object?.attributes) ? object.attributes.map((e: any) => Attribute.fromJSON(e)) : []
    };
  },
  toJSON(message: CPU): JsonSafe<CPU> {
    const obj: any = {};
    message.units !== undefined && (obj.units = message.units ? ResourceValue.toJSON(message.units) : undefined);
    if (message.attributes) {
      obj.attributes = message.attributes.map(e => e ? Attribute.toJSON(e) : undefined);
    } else {
      obj.attributes = [];
    }
    return obj;
  },
  fromPartial(object: Partial<CPU>): CPU {
    const message = createBaseCPU();
    message.units = object.units !== undefined && object.units !== null ? ResourceValue.fromPartial(object.units) : undefined;
    message.attributes = object.attributes?.map(e => Attribute.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: CPUAmino): CPU {
    const message = createBaseCPU();
    if (object.units !== undefined && object.units !== null) {
      message.units = ResourceValue.fromAmino(object.units);
    }
    message.attributes = object.attributes?.map(e => Attribute.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: CPU): CPUAmino {
    const obj: any = {};
    obj.units = message.units ? ResourceValue.toAmino(message.units) : undefined;
    if (message.attributes) {
      obj.attributes = message.attributes.map(e => e ? Attribute.toAmino(e) : undefined);
    } else {
      obj.attributes = message.attributes;
    }
    return obj;
  },
  fromAminoMsg(object: CPUAminoMsg): CPU {
    return CPU.fromAmino(object.value);
  },
  fromProtoMsg(message: CPUProtoMsg): CPU {
    return CPU.decode(message.value);
  },
  toProto(message: CPU): Uint8Array {
    return CPU.encode(message).finish();
  },
  toProtoMsg(message: CPU): CPUProtoMsg {
    return {
      typeUrl: "/akash.base.v1beta1.CPU",
      value: CPU.encode(message).finish()
    };
  }
};
function createBaseMemory(): Memory {
  return {
    quantity: ResourceValue.fromPartial({}),
    attributes: []
  };
}
export const Memory = {
  typeUrl: "/akash.base.v1beta1.Memory",
  encode(message: Memory, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.quantity !== undefined) {
      ResourceValue.encode(message.quantity, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.attributes) {
      Attribute.encode(v!, writer.uint32(18).fork()).ldelim();
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
          message.quantity = ResourceValue.decode(reader, reader.uint32());
          break;
        case 2:
          message.attributes.push(Attribute.decode(reader, reader.uint32()));
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
      quantity: isSet(object.quantity) ? ResourceValue.fromJSON(object.quantity) : undefined,
      attributes: Array.isArray(object?.attributes) ? object.attributes.map((e: any) => Attribute.fromJSON(e)) : []
    };
  },
  toJSON(message: Memory): JsonSafe<Memory> {
    const obj: any = {};
    message.quantity !== undefined && (obj.quantity = message.quantity ? ResourceValue.toJSON(message.quantity) : undefined);
    if (message.attributes) {
      obj.attributes = message.attributes.map(e => e ? Attribute.toJSON(e) : undefined);
    } else {
      obj.attributes = [];
    }
    return obj;
  },
  fromPartial(object: Partial<Memory>): Memory {
    const message = createBaseMemory();
    message.quantity = object.quantity !== undefined && object.quantity !== null ? ResourceValue.fromPartial(object.quantity) : undefined;
    message.attributes = object.attributes?.map(e => Attribute.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: MemoryAmino): Memory {
    const message = createBaseMemory();
    if (object.quantity !== undefined && object.quantity !== null) {
      message.quantity = ResourceValue.fromAmino(object.quantity);
    }
    message.attributes = object.attributes?.map(e => Attribute.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: Memory): MemoryAmino {
    const obj: any = {};
    obj.quantity = message.quantity ? ResourceValue.toAmino(message.quantity) : ResourceValue.toAmino(ResourceValue.fromPartial({}));
    if (message.attributes) {
      obj.attributes = message.attributes.map(e => e ? Attribute.toAmino(e) : undefined);
    } else {
      obj.attributes = message.attributes;
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
      typeUrl: "/akash.base.v1beta1.Memory",
      value: Memory.encode(message).finish()
    };
  }
};
function createBaseStorage(): Storage {
  return {
    quantity: ResourceValue.fromPartial({}),
    attributes: []
  };
}
export const Storage = {
  typeUrl: "/akash.base.v1beta1.Storage",
  encode(message: Storage, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.quantity !== undefined) {
      ResourceValue.encode(message.quantity, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.attributes) {
      Attribute.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Storage {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStorage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.quantity = ResourceValue.decode(reader, reader.uint32());
          break;
        case 2:
          message.attributes.push(Attribute.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Storage {
    return {
      quantity: isSet(object.quantity) ? ResourceValue.fromJSON(object.quantity) : undefined,
      attributes: Array.isArray(object?.attributes) ? object.attributes.map((e: any) => Attribute.fromJSON(e)) : []
    };
  },
  toJSON(message: Storage): JsonSafe<Storage> {
    const obj: any = {};
    message.quantity !== undefined && (obj.quantity = message.quantity ? ResourceValue.toJSON(message.quantity) : undefined);
    if (message.attributes) {
      obj.attributes = message.attributes.map(e => e ? Attribute.toJSON(e) : undefined);
    } else {
      obj.attributes = [];
    }
    return obj;
  },
  fromPartial(object: Partial<Storage>): Storage {
    const message = createBaseStorage();
    message.quantity = object.quantity !== undefined && object.quantity !== null ? ResourceValue.fromPartial(object.quantity) : undefined;
    message.attributes = object.attributes?.map(e => Attribute.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: StorageAmino): Storage {
    const message = createBaseStorage();
    if (object.quantity !== undefined && object.quantity !== null) {
      message.quantity = ResourceValue.fromAmino(object.quantity);
    }
    message.attributes = object.attributes?.map(e => Attribute.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: Storage): StorageAmino {
    const obj: any = {};
    obj.quantity = message.quantity ? ResourceValue.toAmino(message.quantity) : ResourceValue.toAmino(ResourceValue.fromPartial({}));
    if (message.attributes) {
      obj.attributes = message.attributes.map(e => e ? Attribute.toAmino(e) : undefined);
    } else {
      obj.attributes = message.attributes;
    }
    return obj;
  },
  fromAminoMsg(object: StorageAminoMsg): Storage {
    return Storage.fromAmino(object.value);
  },
  fromProtoMsg(message: StorageProtoMsg): Storage {
    return Storage.decode(message.value);
  },
  toProto(message: Storage): Uint8Array {
    return Storage.encode(message).finish();
  },
  toProtoMsg(message: Storage): StorageProtoMsg {
    return {
      typeUrl: "/akash.base.v1beta1.Storage",
      value: Storage.encode(message).finish()
    };
  }
};
function createBaseResourceUnits(): ResourceUnits {
  return {
    cpu: undefined,
    memory: undefined,
    storage: undefined,
    endpoints: []
  };
}
export const ResourceUnits = {
  typeUrl: "/akash.base.v1beta1.ResourceUnits",
  encode(message: ResourceUnits, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.cpu !== undefined) {
      CPU.encode(message.cpu, writer.uint32(10).fork()).ldelim();
    }
    if (message.memory !== undefined) {
      Memory.encode(message.memory, writer.uint32(18).fork()).ldelim();
    }
    if (message.storage !== undefined) {
      Storage.encode(message.storage, writer.uint32(26).fork()).ldelim();
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
          message.storage = Storage.decode(reader, reader.uint32());
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
      storage: isSet(object.storage) ? Storage.fromJSON(object.storage) : undefined,
      endpoints: Array.isArray(object?.endpoints) ? object.endpoints.map((e: any) => Endpoint.fromJSON(e)) : []
    };
  },
  toJSON(message: ResourceUnits): JsonSafe<ResourceUnits> {
    const obj: any = {};
    message.cpu !== undefined && (obj.cpu = message.cpu ? CPU.toJSON(message.cpu) : undefined);
    message.memory !== undefined && (obj.memory = message.memory ? Memory.toJSON(message.memory) : undefined);
    message.storage !== undefined && (obj.storage = message.storage ? Storage.toJSON(message.storage) : undefined);
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
    message.storage = object.storage !== undefined && object.storage !== null ? Storage.fromPartial(object.storage) : undefined;
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
    if (object.storage !== undefined && object.storage !== null) {
      message.storage = Storage.fromAmino(object.storage);
    }
    message.endpoints = object.endpoints?.map(e => Endpoint.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: ResourceUnits): ResourceUnitsAmino {
    const obj: any = {};
    obj.cpu = message.cpu ? CPU.toAmino(message.cpu) : undefined;
    obj.memory = message.memory ? Memory.toAmino(message.memory) : undefined;
    obj.storage = message.storage ? Storage.toAmino(message.storage) : undefined;
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
      typeUrl: "/akash.base.v1beta1.ResourceUnits",
      value: ResourceUnits.encode(message).finish()
    };
  }
};
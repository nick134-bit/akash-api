import { CPU, CPUAmino, CPUSDKType } from "./cpu";
import { Memory, MemoryAmino, MemorySDKType } from "./memory";
import { Storage, StorageAmino, StorageSDKType } from "./storage";
import { GPU, GPUAmino, GPUSDKType } from "./gpu";
import { Endpoint, EndpointAmino, EndpointSDKType } from "./endpoint";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/**
 * Resources describes all available resources types for deployment/node etc
 * if field is nil resource is not present in the given data-structure
 */
export interface Resources {
  id: number;
  cpu?: CPU | undefined;
  memory?: Memory | undefined;
  storage: Storage[];
  gpu?: GPU | undefined;
  endpoints: Endpoint[];
}
export interface ResourcesProtoMsg {
  typeUrl: "/akash.base.v1beta3.Resources";
  value: Uint8Array;
}
/**
 * Resources describes all available resources types for deployment/node etc
 * if field is nil resource is not present in the given data-structure
 */
export interface ResourcesAmino {
  id: number;
  cpu?: CPUAmino | undefined;
  memory?: MemoryAmino | undefined;
  storage: StorageAmino[];
  gpu?: GPUAmino | undefined;
  endpoints: EndpointAmino[];
}
export interface ResourcesAminoMsg {
  type: "/akash.base.v1beta3.Resources";
  value: ResourcesAmino;
}
/**
 * Resources describes all available resources types for deployment/node etc
 * if field is nil resource is not present in the given data-structure
 */
export interface ResourcesSDKType {
  id: number;
  cpu?: CPUSDKType | undefined;
  memory?: MemorySDKType | undefined;
  storage: StorageSDKType[];
  gpu?: GPUSDKType | undefined;
  endpoints: EndpointSDKType[];
}
function createBaseResources(): Resources {
  return {
    id: 0,
    cpu: undefined,
    memory: undefined,
    storage: [],
    gpu: undefined,
    endpoints: []
  };
}
export const Resources = {
  typeUrl: "/akash.base.v1beta3.Resources",
  encode(message: Resources, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== 0) {
      writer.uint32(8).uint32(message.id);
    }
    if (message.cpu !== undefined) {
      CPU.encode(message.cpu, writer.uint32(18).fork()).ldelim();
    }
    if (message.memory !== undefined) {
      Memory.encode(message.memory, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.storage) {
      Storage.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.gpu !== undefined) {
      GPU.encode(message.gpu, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.endpoints) {
      Endpoint.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Resources {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResources();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint32();
          break;
        case 2:
          message.cpu = CPU.decode(reader, reader.uint32());
          break;
        case 3:
          message.memory = Memory.decode(reader, reader.uint32());
          break;
        case 4:
          message.storage.push(Storage.decode(reader, reader.uint32()));
          break;
        case 5:
          message.gpu = GPU.decode(reader, reader.uint32());
          break;
        case 6:
          message.endpoints.push(Endpoint.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<Resources>): Resources {
    const message = createBaseResources();
    message.id = object.id ?? 0;
    message.cpu = object.cpu !== undefined && object.cpu !== null ? CPU.fromPartial(object.cpu) : undefined;
    message.memory = object.memory !== undefined && object.memory !== null ? Memory.fromPartial(object.memory) : undefined;
    message.storage = object.storage?.map(e => Storage.fromPartial(e)) || [];
    message.gpu = object.gpu !== undefined && object.gpu !== null ? GPU.fromPartial(object.gpu) : undefined;
    message.endpoints = object.endpoints?.map(e => Endpoint.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: ResourcesAmino): Resources {
    const message = createBaseResources();
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    }
    if (object.cpu !== undefined && object.cpu !== null) {
      message.cpu = CPU.fromAmino(object.cpu);
    }
    if (object.memory !== undefined && object.memory !== null) {
      message.memory = Memory.fromAmino(object.memory);
    }
    message.storage = object.storage?.map(e => Storage.fromAmino(e)) || [];
    if (object.gpu !== undefined && object.gpu !== null) {
      message.gpu = GPU.fromAmino(object.gpu);
    }
    message.endpoints = object.endpoints?.map(e => Endpoint.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: Resources): ResourcesAmino {
    const obj: any = {};
    obj.id = message.id ?? 0;
    obj.cpu = message.cpu ? CPU.toAmino(message.cpu) : undefined;
    obj.memory = message.memory ? Memory.toAmino(message.memory) : undefined;
    if (message.storage) {
      obj.storage = message.storage.map(e => e ? Storage.toAmino(e) : undefined);
    } else {
      obj.storage = message.storage;
    }
    obj.gpu = message.gpu ? GPU.toAmino(message.gpu) : undefined;
    if (message.endpoints) {
      obj.endpoints = message.endpoints.map(e => e ? Endpoint.toAmino(e) : undefined);
    } else {
      obj.endpoints = message.endpoints;
    }
    return obj;
  },
  fromAminoMsg(object: ResourcesAminoMsg): Resources {
    return Resources.fromAmino(object.value);
  },
  fromProtoMsg(message: ResourcesProtoMsg): Resources {
    return Resources.decode(message.value);
  },
  toProto(message: Resources): Uint8Array {
    return Resources.encode(message).finish();
  },
  toProtoMsg(message: Resources): ResourcesProtoMsg {
    return {
      typeUrl: "/akash.base.v1beta3.Resources",
      value: Resources.encode(message).finish()
    };
  }
};
import { CPU, CPUAmino, CPUSDKType } from "./cpu";
import { Memory, MemoryAmino, MemorySDKType } from "./memory";
import { GPU, GPUAmino, GPUSDKType } from "./gpu";
import { ResourcePair, ResourcePairAmino, ResourcePairSDKType } from "./resourcepair";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/** NodeResources reports node inventory details */
export interface NodeResources {
  cpu: CPU | undefined;
  memory: Memory | undefined;
  gpu: GPU | undefined;
  ephemeralStorage: ResourcePair | undefined;
  volumesAttached: ResourcePair | undefined;
  volumesMounted: ResourcePair | undefined;
}
export interface NodeResourcesProtoMsg {
  typeUrl: "/akash.inventory.v1.NodeResources";
  value: Uint8Array;
}
/** NodeResources reports node inventory details */
export interface NodeResourcesAmino {
  cpu: CPUAmino | undefined;
  memory: MemoryAmino | undefined;
  gpu: GPUAmino | undefined;
  ephemeral_storage: ResourcePairAmino | undefined;
  volumes_attached: ResourcePairAmino | undefined;
  volumes_mounted: ResourcePairAmino | undefined;
}
export interface NodeResourcesAminoMsg {
  type: "/akash.inventory.v1.NodeResources";
  value: NodeResourcesAmino;
}
/** NodeResources reports node inventory details */
export interface NodeResourcesSDKType {
  cpu: CPUSDKType | undefined;
  memory: MemorySDKType | undefined;
  gpu: GPUSDKType | undefined;
  ephemeral_storage: ResourcePairSDKType | undefined;
  volumes_attached: ResourcePairSDKType | undefined;
  volumes_mounted: ResourcePairSDKType | undefined;
}
function createBaseNodeResources(): NodeResources {
  return {
    cpu: CPU.fromPartial({}),
    memory: Memory.fromPartial({}),
    gpu: GPU.fromPartial({}),
    ephemeralStorage: ResourcePair.fromPartial({}),
    volumesAttached: ResourcePair.fromPartial({}),
    volumesMounted: ResourcePair.fromPartial({})
  };
}
export const NodeResources = {
  typeUrl: "/akash.inventory.v1.NodeResources",
  encode(message: NodeResources, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.cpu !== undefined) {
      CPU.encode(message.cpu, writer.uint32(10).fork()).ldelim();
    }
    if (message.memory !== undefined) {
      Memory.encode(message.memory, writer.uint32(18).fork()).ldelim();
    }
    if (message.gpu !== undefined) {
      GPU.encode(message.gpu, writer.uint32(26).fork()).ldelim();
    }
    if (message.ephemeralStorage !== undefined) {
      ResourcePair.encode(message.ephemeralStorage, writer.uint32(34).fork()).ldelim();
    }
    if (message.volumesAttached !== undefined) {
      ResourcePair.encode(message.volumesAttached, writer.uint32(42).fork()).ldelim();
    }
    if (message.volumesMounted !== undefined) {
      ResourcePair.encode(message.volumesMounted, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): NodeResources {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNodeResources();
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
          message.gpu = GPU.decode(reader, reader.uint32());
          break;
        case 4:
          message.ephemeralStorage = ResourcePair.decode(reader, reader.uint32());
          break;
        case 5:
          message.volumesAttached = ResourcePair.decode(reader, reader.uint32());
          break;
        case 6:
          message.volumesMounted = ResourcePair.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<NodeResources>): NodeResources {
    const message = createBaseNodeResources();
    message.cpu = object.cpu !== undefined && object.cpu !== null ? CPU.fromPartial(object.cpu) : undefined;
    message.memory = object.memory !== undefined && object.memory !== null ? Memory.fromPartial(object.memory) : undefined;
    message.gpu = object.gpu !== undefined && object.gpu !== null ? GPU.fromPartial(object.gpu) : undefined;
    message.ephemeralStorage = object.ephemeralStorage !== undefined && object.ephemeralStorage !== null ? ResourcePair.fromPartial(object.ephemeralStorage) : undefined;
    message.volumesAttached = object.volumesAttached !== undefined && object.volumesAttached !== null ? ResourcePair.fromPartial(object.volumesAttached) : undefined;
    message.volumesMounted = object.volumesMounted !== undefined && object.volumesMounted !== null ? ResourcePair.fromPartial(object.volumesMounted) : undefined;
    return message;
  },
  fromAmino(object: NodeResourcesAmino): NodeResources {
    const message = createBaseNodeResources();
    if (object.cpu !== undefined && object.cpu !== null) {
      message.cpu = CPU.fromAmino(object.cpu);
    }
    if (object.memory !== undefined && object.memory !== null) {
      message.memory = Memory.fromAmino(object.memory);
    }
    if (object.gpu !== undefined && object.gpu !== null) {
      message.gpu = GPU.fromAmino(object.gpu);
    }
    if (object.ephemeral_storage !== undefined && object.ephemeral_storage !== null) {
      message.ephemeralStorage = ResourcePair.fromAmino(object.ephemeral_storage);
    }
    if (object.volumes_attached !== undefined && object.volumes_attached !== null) {
      message.volumesAttached = ResourcePair.fromAmino(object.volumes_attached);
    }
    if (object.volumes_mounted !== undefined && object.volumes_mounted !== null) {
      message.volumesMounted = ResourcePair.fromAmino(object.volumes_mounted);
    }
    return message;
  },
  toAmino(message: NodeResources): NodeResourcesAmino {
    const obj: any = {};
    obj.cpu = message.cpu ? CPU.toAmino(message.cpu) : CPU.toAmino(CPU.fromPartial({}));
    obj.memory = message.memory ? Memory.toAmino(message.memory) : Memory.toAmino(Memory.fromPartial({}));
    obj.gpu = message.gpu ? GPU.toAmino(message.gpu) : GPU.toAmino(GPU.fromPartial({}));
    obj.ephemeral_storage = message.ephemeralStorage ? ResourcePair.toAmino(message.ephemeralStorage) : ResourcePair.toAmino(ResourcePair.fromPartial({}));
    obj.volumes_attached = message.volumesAttached ? ResourcePair.toAmino(message.volumesAttached) : ResourcePair.toAmino(ResourcePair.fromPartial({}));
    obj.volumes_mounted = message.volumesMounted ? ResourcePair.toAmino(message.volumesMounted) : ResourcePair.toAmino(ResourcePair.fromPartial({}));
    return obj;
  },
  fromAminoMsg(object: NodeResourcesAminoMsg): NodeResources {
    return NodeResources.fromAmino(object.value);
  },
  fromProtoMsg(message: NodeResourcesProtoMsg): NodeResources {
    return NodeResources.decode(message.value);
  },
  toProto(message: NodeResources): Uint8Array {
    return NodeResources.encode(message).finish();
  },
  toProtoMsg(message: NodeResources): NodeResourcesProtoMsg {
    return {
      typeUrl: "/akash.inventory.v1.NodeResources",
      value: NodeResources.encode(message).finish()
    };
  }
};
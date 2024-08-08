import { ResourcePair, ResourcePairAmino, ResourcePairSDKType } from "./resourcepair";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/** GPUInfo reports GPU details */
export interface GPUInfo {
  vendor: string;
  vendorId: string;
  name: string;
  modelid: string;
  interface: string;
  memorySize: string;
}
export interface GPUInfoProtoMsg {
  typeUrl: "/akash.inventory.v1.GPUInfo";
  value: Uint8Array;
}
/** GPUInfo reports GPU details */
export interface GPUInfoAmino {
  vendor: string;
  vendor_id: string;
  name: string;
  modelid: string;
  interface: string;
  memory_size: string;
}
export interface GPUInfoAminoMsg {
  type: "/akash.inventory.v1.GPUInfo";
  value: GPUInfoAmino;
}
/** GPUInfo reports GPU details */
export interface GPUInfoSDKType {
  vendor: string;
  vendor_id: string;
  name: string;
  modelid: string;
  interface: string;
  memory_size: string;
}
/** GPUInfo reports GPU inventory details */
export interface GPU {
  quantity: ResourcePair | undefined;
  info: GPUInfo[];
}
export interface GPUProtoMsg {
  typeUrl: "/akash.inventory.v1.GPU";
  value: Uint8Array;
}
/** GPUInfo reports GPU inventory details */
export interface GPUAmino {
  quantity: ResourcePairAmino | undefined;
  info: GPUInfoAmino[];
}
export interface GPUAminoMsg {
  type: "/akash.inventory.v1.GPU";
  value: GPUAmino;
}
/** GPUInfo reports GPU inventory details */
export interface GPUSDKType {
  quantity: ResourcePairSDKType | undefined;
  info: GPUInfoSDKType[];
}
function createBaseGPUInfo(): GPUInfo {
  return {
    vendor: "",
    vendorId: "",
    name: "",
    modelid: "",
    interface: "",
    memorySize: ""
  };
}
export const GPUInfo = {
  typeUrl: "/akash.inventory.v1.GPUInfo",
  encode(message: GPUInfo, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.vendor !== "") {
      writer.uint32(10).string(message.vendor);
    }
    if (message.vendorId !== "") {
      writer.uint32(18).string(message.vendorId);
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    if (message.modelid !== "") {
      writer.uint32(34).string(message.modelid);
    }
    if (message.interface !== "") {
      writer.uint32(42).string(message.interface);
    }
    if (message.memorySize !== "") {
      writer.uint32(50).string(message.memorySize);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GPUInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGPUInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.vendor = reader.string();
          break;
        case 2:
          message.vendorId = reader.string();
          break;
        case 3:
          message.name = reader.string();
          break;
        case 4:
          message.modelid = reader.string();
          break;
        case 5:
          message.interface = reader.string();
          break;
        case 6:
          message.memorySize = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<GPUInfo>): GPUInfo {
    const message = createBaseGPUInfo();
    message.vendor = object.vendor ?? "";
    message.vendorId = object.vendorId ?? "";
    message.name = object.name ?? "";
    message.modelid = object.modelid ?? "";
    message.interface = object.interface ?? "";
    message.memorySize = object.memorySize ?? "";
    return message;
  },
  fromAmino(object: GPUInfoAmino): GPUInfo {
    const message = createBaseGPUInfo();
    if (object.vendor !== undefined && object.vendor !== null) {
      message.vendor = object.vendor;
    }
    if (object.vendor_id !== undefined && object.vendor_id !== null) {
      message.vendorId = object.vendor_id;
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    if (object.modelid !== undefined && object.modelid !== null) {
      message.modelid = object.modelid;
    }
    if (object.interface !== undefined && object.interface !== null) {
      message.interface = object.interface;
    }
    if (object.memory_size !== undefined && object.memory_size !== null) {
      message.memorySize = object.memory_size;
    }
    return message;
  },
  toAmino(message: GPUInfo): GPUInfoAmino {
    const obj: any = {};
    obj.vendor = message.vendor ?? "";
    obj.vendor_id = message.vendorId ?? "";
    obj.name = message.name ?? "";
    obj.modelid = message.modelid ?? "";
    obj.interface = message.interface ?? "";
    obj.memory_size = message.memorySize ?? "";
    return obj;
  },
  fromAminoMsg(object: GPUInfoAminoMsg): GPUInfo {
    return GPUInfo.fromAmino(object.value);
  },
  fromProtoMsg(message: GPUInfoProtoMsg): GPUInfo {
    return GPUInfo.decode(message.value);
  },
  toProto(message: GPUInfo): Uint8Array {
    return GPUInfo.encode(message).finish();
  },
  toProtoMsg(message: GPUInfo): GPUInfoProtoMsg {
    return {
      typeUrl: "/akash.inventory.v1.GPUInfo",
      value: GPUInfo.encode(message).finish()
    };
  }
};
function createBaseGPU(): GPU {
  return {
    quantity: ResourcePair.fromPartial({}),
    info: []
  };
}
export const GPU = {
  typeUrl: "/akash.inventory.v1.GPU",
  encode(message: GPU, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.quantity !== undefined) {
      ResourcePair.encode(message.quantity, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.info) {
      GPUInfo.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GPU {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGPU();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.quantity = ResourcePair.decode(reader, reader.uint32());
          break;
        case 2:
          message.info.push(GPUInfo.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<GPU>): GPU {
    const message = createBaseGPU();
    message.quantity = object.quantity !== undefined && object.quantity !== null ? ResourcePair.fromPartial(object.quantity) : undefined;
    message.info = object.info?.map(e => GPUInfo.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: GPUAmino): GPU {
    const message = createBaseGPU();
    if (object.quantity !== undefined && object.quantity !== null) {
      message.quantity = ResourcePair.fromAmino(object.quantity);
    }
    message.info = object.info?.map(e => GPUInfo.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: GPU): GPUAmino {
    const obj: any = {};
    obj.quantity = message.quantity ? ResourcePair.toAmino(message.quantity) : ResourcePair.toAmino(ResourcePair.fromPartial({}));
    if (message.info) {
      obj.info = message.info.map(e => e ? GPUInfo.toAmino(e) : undefined);
    } else {
      obj.info = message.info;
    }
    return obj;
  },
  fromAminoMsg(object: GPUAminoMsg): GPU {
    return GPU.fromAmino(object.value);
  },
  fromProtoMsg(message: GPUProtoMsg): GPU {
    return GPU.decode(message.value);
  },
  toProto(message: GPU): Uint8Array {
    return GPU.encode(message).finish();
  },
  toProtoMsg(message: GPU): GPUProtoMsg {
    return {
      typeUrl: "/akash.inventory.v1.GPU",
      value: GPU.encode(message).finish()
    };
  }
};
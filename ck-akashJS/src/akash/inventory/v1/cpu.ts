import { ResourcePair, ResourcePairAmino, ResourcePairSDKType } from "./resourcepair";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/** CPUInfo reports CPU details */
export interface CPUInfo {
  id: string;
  vendor: string;
  model: string;
  vcores: number;
}
export interface CPUInfoProtoMsg {
  typeUrl: "/akash.inventory.v1.CPUInfo";
  value: Uint8Array;
}
/** CPUInfo reports CPU details */
export interface CPUInfoAmino {
  id: string;
  vendor: string;
  model: string;
  vcores: number;
}
export interface CPUInfoAminoMsg {
  type: "/akash.inventory.v1.CPUInfo";
  value: CPUInfoAmino;
}
/** CPUInfo reports CPU details */
export interface CPUInfoSDKType {
  id: string;
  vendor: string;
  model: string;
  vcores: number;
}
/** CPU reports CPU inventory details */
export interface CPU {
  quantity: ResourcePair | undefined;
  info: CPUInfo[];
}
export interface CPUProtoMsg {
  typeUrl: "/akash.inventory.v1.CPU";
  value: Uint8Array;
}
/** CPU reports CPU inventory details */
export interface CPUAmino {
  quantity: ResourcePairAmino | undefined;
  info: CPUInfoAmino[];
}
export interface CPUAminoMsg {
  type: "/akash.inventory.v1.CPU";
  value: CPUAmino;
}
/** CPU reports CPU inventory details */
export interface CPUSDKType {
  quantity: ResourcePairSDKType | undefined;
  info: CPUInfoSDKType[];
}
function createBaseCPUInfo(): CPUInfo {
  return {
    id: "",
    vendor: "",
    model: "",
    vcores: 0
  };
}
export const CPUInfo = {
  typeUrl: "/akash.inventory.v1.CPUInfo",
  encode(message: CPUInfo, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.vendor !== "") {
      writer.uint32(18).string(message.vendor);
    }
    if (message.model !== "") {
      writer.uint32(26).string(message.model);
    }
    if (message.vcores !== 0) {
      writer.uint32(32).uint32(message.vcores);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): CPUInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCPUInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.vendor = reader.string();
          break;
        case 3:
          message.model = reader.string();
          break;
        case 4:
          message.vcores = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<CPUInfo>): CPUInfo {
    const message = createBaseCPUInfo();
    message.id = object.id ?? "";
    message.vendor = object.vendor ?? "";
    message.model = object.model ?? "";
    message.vcores = object.vcores ?? 0;
    return message;
  },
  fromAmino(object: CPUInfoAmino): CPUInfo {
    const message = createBaseCPUInfo();
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    }
    if (object.vendor !== undefined && object.vendor !== null) {
      message.vendor = object.vendor;
    }
    if (object.model !== undefined && object.model !== null) {
      message.model = object.model;
    }
    if (object.vcores !== undefined && object.vcores !== null) {
      message.vcores = object.vcores;
    }
    return message;
  },
  toAmino(message: CPUInfo): CPUInfoAmino {
    const obj: any = {};
    obj.id = message.id ?? "";
    obj.vendor = message.vendor ?? "";
    obj.model = message.model ?? "";
    obj.vcores = message.vcores ?? 0;
    return obj;
  },
  fromAminoMsg(object: CPUInfoAminoMsg): CPUInfo {
    return CPUInfo.fromAmino(object.value);
  },
  fromProtoMsg(message: CPUInfoProtoMsg): CPUInfo {
    return CPUInfo.decode(message.value);
  },
  toProto(message: CPUInfo): Uint8Array {
    return CPUInfo.encode(message).finish();
  },
  toProtoMsg(message: CPUInfo): CPUInfoProtoMsg {
    return {
      typeUrl: "/akash.inventory.v1.CPUInfo",
      value: CPUInfo.encode(message).finish()
    };
  }
};
function createBaseCPU(): CPU {
  return {
    quantity: ResourcePair.fromPartial({}),
    info: []
  };
}
export const CPU = {
  typeUrl: "/akash.inventory.v1.CPU",
  encode(message: CPU, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.quantity !== undefined) {
      ResourcePair.encode(message.quantity, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.info) {
      CPUInfo.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): CPU {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCPU();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.quantity = ResourcePair.decode(reader, reader.uint32());
          break;
        case 2:
          message.info.push(CPUInfo.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<CPU>): CPU {
    const message = createBaseCPU();
    message.quantity = object.quantity !== undefined && object.quantity !== null ? ResourcePair.fromPartial(object.quantity) : undefined;
    message.info = object.info?.map(e => CPUInfo.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: CPUAmino): CPU {
    const message = createBaseCPU();
    if (object.quantity !== undefined && object.quantity !== null) {
      message.quantity = ResourcePair.fromAmino(object.quantity);
    }
    message.info = object.info?.map(e => CPUInfo.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: CPU): CPUAmino {
    const obj: any = {};
    obj.quantity = message.quantity ? ResourcePair.toAmino(message.quantity) : ResourcePair.toAmino(ResourcePair.fromPartial({}));
    if (message.info) {
      obj.info = message.info.map(e => e ? CPUInfo.toAmino(e) : undefined);
    } else {
      obj.info = message.info;
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
      typeUrl: "/akash.inventory.v1.CPU",
      value: CPU.encode(message).finish()
    };
  }
};
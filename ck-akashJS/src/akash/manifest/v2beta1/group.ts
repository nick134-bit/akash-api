import { Service, ServiceAmino, ServiceSDKType } from "./service";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/** Group store name and list of services */
export interface Group {
  name: string;
  services: Service[];
}
export interface GroupProtoMsg {
  typeUrl: "/akash.manifest.v2beta1.Group";
  value: Uint8Array;
}
/** Group store name and list of services */
export interface GroupAmino {
  name: string;
  services: ServiceAmino[];
}
export interface GroupAminoMsg {
  type: "/akash.manifest.v2beta1.Group";
  value: GroupAmino;
}
/** Group store name and list of services */
export interface GroupSDKType {
  name: string;
  services: ServiceSDKType[];
}
function createBaseGroup(): Group {
  return {
    name: "",
    services: []
  };
}
export const Group = {
  typeUrl: "/akash.manifest.v2beta1.Group",
  encode(message: Group, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    for (const v of message.services) {
      Service.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Group {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGroup();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.services.push(Service.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<Group>): Group {
    const message = createBaseGroup();
    message.name = object.name ?? "";
    message.services = object.services?.map(e => Service.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: GroupAmino): Group {
    const message = createBaseGroup();
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    message.services = object.services?.map(e => Service.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: Group): GroupAmino {
    const obj: any = {};
    obj.name = message.name ?? "";
    if (message.services) {
      obj.services = message.services.map(e => e ? Service.toAmino(e) : undefined);
    } else {
      obj.services = message.services;
    }
    return obj;
  },
  fromAminoMsg(object: GroupAminoMsg): Group {
    return Group.fromAmino(object.value);
  },
  fromProtoMsg(message: GroupProtoMsg): Group {
    return Group.decode(message.value);
  },
  toProto(message: Group): Uint8Array {
    return Group.encode(message).finish();
  },
  toProtoMsg(message: Group): GroupProtoMsg {
    return {
      typeUrl: "/akash.manifest.v2beta1.Group",
      value: Group.encode(message).finish()
    };
  }
};
import { Service, ServiceAmino, ServiceSDKType } from "./service";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../helpers";
import { JsonSafe } from "../../../json-safe";
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
  encode(message: Group, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    for (const v of message.services) {
      Service.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Group {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
  fromJSON(object: any): Group {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      services: Array.isArray(object?.services) ? object.services.map((e: any) => Service.fromJSON(e)) : []
    };
  },
  toJSON(message: Group): JsonSafe<Group> {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    if (message.services) {
      obj.services = message.services.map(e => e ? Service.toJSON(e) : undefined);
    } else {
      obj.services = [];
    }
    return obj;
  },
  fromPartial(object: Partial<Group>): Group {
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
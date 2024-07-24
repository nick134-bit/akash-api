import { ResourceValue, ResourceValueAmino, ResourceValueSDKType } from "./resourcevalue";
import { Attribute, AttributeAmino, AttributeSDKType } from "./attribute";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../helpers";
import { JsonSafe } from "../../../json-safe";
/** Memory stores resource quantity and memory attributes */
export interface Memory {
  quantity: ResourceValue | undefined;
  attributes: Attribute[];
}
export interface MemoryProtoMsg {
  typeUrl: "/akash.base.v1beta3.Memory";
  value: Uint8Array;
}
/** Memory stores resource quantity and memory attributes */
export interface MemoryAmino {
  quantity: ResourceValueAmino | undefined;
  attributes?: AttributeAmino[];
}
export interface MemoryAminoMsg {
  type: "/akash.base.v1beta3.Memory";
  value: MemoryAmino;
}
/** Memory stores resource quantity and memory attributes */
export interface MemorySDKType {
  quantity: ResourceValueSDKType | undefined;
  attributes: AttributeSDKType[];
}
function createBaseMemory(): Memory {
  return {
    quantity: ResourceValue.fromPartial({}),
    attributes: []
  };
}
export const Memory = {
  typeUrl: "/akash.base.v1beta3.Memory",
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
      typeUrl: "/akash.base.v1beta3.Memory",
      value: Memory.encode(message).finish()
    };
  }
};
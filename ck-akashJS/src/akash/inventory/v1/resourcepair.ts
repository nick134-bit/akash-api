import { Quantity, QuantityAmino, QuantitySDKType } from "../../../k8s.io/apimachinery/pkg/api/resource/generated";
import { Attribute, AttributeAmino, AttributeSDKType } from "../../base/v1beta3/attribute";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/** ResourcePair to extents resource.Quantity to provide total and available units of the resource */
export interface ResourcePair {
  allocatable?: Quantity | undefined;
  allocated?: Quantity | undefined;
  attributes: Attribute[];
}
export interface ResourcePairProtoMsg {
  typeUrl: "/akash.inventory.v1.ResourcePair";
  value: Uint8Array;
}
/** ResourcePair to extents resource.Quantity to provide total and available units of the resource */
export interface ResourcePairAmino {
  allocatable?: QuantityAmino | undefined;
  allocated?: QuantityAmino | undefined;
  attributes: AttributeAmino[];
}
export interface ResourcePairAminoMsg {
  type: "/akash.inventory.v1.ResourcePair";
  value: ResourcePairAmino;
}
/** ResourcePair to extents resource.Quantity to provide total and available units of the resource */
export interface ResourcePairSDKType {
  allocatable?: QuantitySDKType | undefined;
  allocated?: QuantitySDKType | undefined;
  attributes: AttributeSDKType[];
}
function createBaseResourcePair(): ResourcePair {
  return {
    allocatable: undefined,
    allocated: undefined,
    attributes: []
  };
}
export const ResourcePair = {
  typeUrl: "/akash.inventory.v1.ResourcePair",
  encode(message: ResourcePair, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.allocatable !== undefined) {
      Quantity.encode(message.allocatable, writer.uint32(10).fork()).ldelim();
    }
    if (message.allocated !== undefined) {
      Quantity.encode(message.allocated, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.attributes) {
      Attribute.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ResourcePair {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResourcePair();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.allocatable = Quantity.decode(reader, reader.uint32());
          break;
        case 2:
          message.allocated = Quantity.decode(reader, reader.uint32());
          break;
        case 3:
          message.attributes.push(Attribute.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<ResourcePair>): ResourcePair {
    const message = createBaseResourcePair();
    message.allocatable = object.allocatable !== undefined && object.allocatable !== null ? Quantity.fromPartial(object.allocatable) : undefined;
    message.allocated = object.allocated !== undefined && object.allocated !== null ? Quantity.fromPartial(object.allocated) : undefined;
    message.attributes = object.attributes?.map(e => Attribute.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: ResourcePairAmino): ResourcePair {
    const message = createBaseResourcePair();
    if (object.allocatable !== undefined && object.allocatable !== null) {
      message.allocatable = Quantity.fromAmino(object.allocatable);
    }
    if (object.allocated !== undefined && object.allocated !== null) {
      message.allocated = Quantity.fromAmino(object.allocated);
    }
    message.attributes = object.attributes?.map(e => Attribute.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: ResourcePair): ResourcePairAmino {
    const obj: any = {};
    obj.allocatable = message.allocatable ? Quantity.toAmino(message.allocatable) : Quantity.toAmino(Quantity.fromPartial({}));
    obj.allocated = message.allocated ? Quantity.toAmino(message.allocated) : Quantity.toAmino(Quantity.fromPartial({}));
    if (message.attributes) {
      obj.attributes = message.attributes.map(e => e ? Attribute.toAmino(e) : undefined);
    } else {
      obj.attributes = message.attributes;
    }
    return obj;
  },
  fromAminoMsg(object: ResourcePairAminoMsg): ResourcePair {
    return ResourcePair.fromAmino(object.value);
  },
  fromProtoMsg(message: ResourcePairProtoMsg): ResourcePair {
    return ResourcePair.decode(message.value);
  },
  toProto(message: ResourcePair): Uint8Array {
    return ResourcePair.encode(message).finish();
  },
  toProtoMsg(message: ResourcePair): ResourcePairProtoMsg {
    return {
      typeUrl: "/akash.inventory.v1.ResourcePair",
      value: ResourcePair.encode(message).finish()
    };
  }
};
import { Resources, ResourcesAmino, ResourcesSDKType } from "../../base/v1beta3/resources";
import { DecCoin, DecCoinAmino, DecCoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../helpers";
import { JsonSafe } from "../../../json-safe";
/** ResourceUnit extends Resources and adds Count along with the Price */
export interface ResourceUnit {
  resource: Resources | undefined;
  count: number;
  price: DecCoin | undefined;
}
export interface ResourceUnitProtoMsg {
  typeUrl: "/akash.deployment.v1beta3.ResourceUnit";
  value: Uint8Array;
}
/** ResourceUnit extends Resources and adds Count along with the Price */
export interface ResourceUnitAmino {
  resource: ResourcesAmino | undefined;
  count: number;
  price: DecCoinAmino | undefined;
}
export interface ResourceUnitAminoMsg {
  type: "/akash.deployment.v1beta3.ResourceUnit";
  value: ResourceUnitAmino;
}
/** ResourceUnit extends Resources and adds Count along with the Price */
export interface ResourceUnitSDKType {
  resource: ResourcesSDKType | undefined;
  count: number;
  price: DecCoinSDKType | undefined;
}
function createBaseResourceUnit(): ResourceUnit {
  return {
    resource: Resources.fromPartial({}),
    count: 0,
    price: DecCoin.fromPartial({})
  };
}
export const ResourceUnit = {
  typeUrl: "/akash.deployment.v1beta3.ResourceUnit",
  encode(message: ResourceUnit, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.resource !== undefined) {
      Resources.encode(message.resource, writer.uint32(10).fork()).ldelim();
    }
    if (message.count !== 0) {
      writer.uint32(16).uint32(message.count);
    }
    if (message.price !== undefined) {
      DecCoin.encode(message.price, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): ResourceUnit {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResourceUnit();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.resource = Resources.decode(reader, reader.uint32());
          break;
        case 2:
          message.count = reader.uint32();
          break;
        case 3:
          message.price = DecCoin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ResourceUnit {
    return {
      resource: isSet(object.resource) ? Resources.fromJSON(object.resource) : undefined,
      count: isSet(object.count) ? Number(object.count) : 0,
      price: isSet(object.price) ? DecCoin.fromJSON(object.price) : undefined
    };
  },
  toJSON(message: ResourceUnit): JsonSafe<ResourceUnit> {
    const obj: any = {};
    message.resource !== undefined && (obj.resource = message.resource ? Resources.toJSON(message.resource) : undefined);
    message.count !== undefined && (obj.count = Math.round(message.count));
    message.price !== undefined && (obj.price = message.price ? DecCoin.toJSON(message.price) : undefined);
    return obj;
  },
  fromPartial(object: Partial<ResourceUnit>): ResourceUnit {
    const message = createBaseResourceUnit();
    message.resource = object.resource !== undefined && object.resource !== null ? Resources.fromPartial(object.resource) : undefined;
    message.count = object.count ?? 0;
    message.price = object.price !== undefined && object.price !== null ? DecCoin.fromPartial(object.price) : undefined;
    return message;
  },
  fromAmino(object: ResourceUnitAmino): ResourceUnit {
    const message = createBaseResourceUnit();
    if (object.resource !== undefined && object.resource !== null) {
      message.resource = Resources.fromAmino(object.resource);
    }
    if (object.count !== undefined && object.count !== null) {
      message.count = object.count;
    }
    if (object.price !== undefined && object.price !== null) {
      message.price = DecCoin.fromAmino(object.price);
    }
    return message;
  },
  toAmino(message: ResourceUnit): ResourceUnitAmino {
    const obj: any = {};
    obj.resource = message.resource ? Resources.toAmino(message.resource) : Resources.toAmino(Resources.fromPartial({}));
    obj.count = message.count ?? 0;
    obj.price = message.price ? DecCoin.toAmino(message.price) : DecCoin.toAmino(DecCoin.fromPartial({}));
    return obj;
  },
  fromAminoMsg(object: ResourceUnitAminoMsg): ResourceUnit {
    return ResourceUnit.fromAmino(object.value);
  },
  fromProtoMsg(message: ResourceUnitProtoMsg): ResourceUnit {
    return ResourceUnit.decode(message.value);
  },
  toProto(message: ResourceUnit): Uint8Array {
    return ResourceUnit.encode(message).finish();
  },
  toProtoMsg(message: ResourceUnit): ResourceUnitProtoMsg {
    return {
      typeUrl: "/akash.deployment.v1beta3.ResourceUnit",
      value: ResourceUnit.encode(message).finish()
    };
  }
};
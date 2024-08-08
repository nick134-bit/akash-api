import { NodeResources, NodeResourcesAmino, NodeResourcesSDKType } from "./resources";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/** NodeCapabilities extended list of node capabilities */
export interface NodeCapabilities {
  storageClasses: string[];
}
export interface NodeCapabilitiesProtoMsg {
  typeUrl: "/akash.inventory.v1.NodeCapabilities";
  value: Uint8Array;
}
/** NodeCapabilities extended list of node capabilities */
export interface NodeCapabilitiesAmino {
  storage_classes: string[];
}
export interface NodeCapabilitiesAminoMsg {
  type: "/akash.inventory.v1.NodeCapabilities";
  value: NodeCapabilitiesAmino;
}
/** NodeCapabilities extended list of node capabilities */
export interface NodeCapabilitiesSDKType {
  storage_classes: string[];
}
/** Node reports node inventory details */
export interface Node {
  name: string;
  resources: NodeResources | undefined;
  capabilities: NodeCapabilities | undefined;
}
export interface NodeProtoMsg {
  typeUrl: "/akash.inventory.v1.Node";
  value: Uint8Array;
}
/** Node reports node inventory details */
export interface NodeAmino {
  name: string;
  resources: NodeResourcesAmino | undefined;
  capabilities: NodeCapabilitiesAmino | undefined;
}
export interface NodeAminoMsg {
  type: "/akash.inventory.v1.Node";
  value: NodeAmino;
}
/** Node reports node inventory details */
export interface NodeSDKType {
  name: string;
  resources: NodeResourcesSDKType | undefined;
  capabilities: NodeCapabilitiesSDKType | undefined;
}
function createBaseNodeCapabilities(): NodeCapabilities {
  return {
    storageClasses: []
  };
}
export const NodeCapabilities = {
  typeUrl: "/akash.inventory.v1.NodeCapabilities",
  encode(message: NodeCapabilities, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.storageClasses) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): NodeCapabilities {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNodeCapabilities();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.storageClasses.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<NodeCapabilities>): NodeCapabilities {
    const message = createBaseNodeCapabilities();
    message.storageClasses = object.storageClasses?.map(e => e) || [];
    return message;
  },
  fromAmino(object: NodeCapabilitiesAmino): NodeCapabilities {
    const message = createBaseNodeCapabilities();
    message.storageClasses = object.storage_classes?.map(e => e) || [];
    return message;
  },
  toAmino(message: NodeCapabilities): NodeCapabilitiesAmino {
    const obj: any = {};
    if (message.storageClasses) {
      obj.storage_classes = message.storageClasses.map(e => e);
    } else {
      obj.storage_classes = message.storageClasses;
    }
    return obj;
  },
  fromAminoMsg(object: NodeCapabilitiesAminoMsg): NodeCapabilities {
    return NodeCapabilities.fromAmino(object.value);
  },
  fromProtoMsg(message: NodeCapabilitiesProtoMsg): NodeCapabilities {
    return NodeCapabilities.decode(message.value);
  },
  toProto(message: NodeCapabilities): Uint8Array {
    return NodeCapabilities.encode(message).finish();
  },
  toProtoMsg(message: NodeCapabilities): NodeCapabilitiesProtoMsg {
    return {
      typeUrl: "/akash.inventory.v1.NodeCapabilities",
      value: NodeCapabilities.encode(message).finish()
    };
  }
};
function createBaseNode(): Node {
  return {
    name: "",
    resources: NodeResources.fromPartial({}),
    capabilities: NodeCapabilities.fromPartial({})
  };
}
export const Node = {
  typeUrl: "/akash.inventory.v1.Node",
  encode(message: Node, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.resources !== undefined) {
      NodeResources.encode(message.resources, writer.uint32(18).fork()).ldelim();
    }
    if (message.capabilities !== undefined) {
      NodeCapabilities.encode(message.capabilities, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Node {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNode();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.resources = NodeResources.decode(reader, reader.uint32());
          break;
        case 3:
          message.capabilities = NodeCapabilities.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<Node>): Node {
    const message = createBaseNode();
    message.name = object.name ?? "";
    message.resources = object.resources !== undefined && object.resources !== null ? NodeResources.fromPartial(object.resources) : undefined;
    message.capabilities = object.capabilities !== undefined && object.capabilities !== null ? NodeCapabilities.fromPartial(object.capabilities) : undefined;
    return message;
  },
  fromAmino(object: NodeAmino): Node {
    const message = createBaseNode();
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    if (object.resources !== undefined && object.resources !== null) {
      message.resources = NodeResources.fromAmino(object.resources);
    }
    if (object.capabilities !== undefined && object.capabilities !== null) {
      message.capabilities = NodeCapabilities.fromAmino(object.capabilities);
    }
    return message;
  },
  toAmino(message: Node): NodeAmino {
    const obj: any = {};
    obj.name = message.name ?? "";
    obj.resources = message.resources ? NodeResources.toAmino(message.resources) : NodeResources.toAmino(NodeResources.fromPartial({}));
    obj.capabilities = message.capabilities ? NodeCapabilities.toAmino(message.capabilities) : NodeCapabilities.toAmino(NodeCapabilities.fromPartial({}));
    return obj;
  },
  fromAminoMsg(object: NodeAminoMsg): Node {
    return Node.fromAmino(object.value);
  },
  fromProtoMsg(message: NodeProtoMsg): Node {
    return Node.decode(message.value);
  },
  toProto(message: Node): Uint8Array {
    return Node.encode(message).finish();
  },
  toProtoMsg(message: Node): NodeProtoMsg {
    return {
      typeUrl: "/akash.inventory.v1.Node",
      value: Node.encode(message).finish()
    };
  }
};
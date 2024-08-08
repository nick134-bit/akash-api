import { Node, NodeAmino, NodeSDKType } from "./node";
import { Storage, StorageAmino, StorageSDKType } from "./storage";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/** Cluster reports inventory across entire cluster */
export interface Cluster {
  nodes: Node[];
  storage: Storage[];
}
export interface ClusterProtoMsg {
  typeUrl: "/akash.inventory.v1.Cluster";
  value: Uint8Array;
}
/** Cluster reports inventory across entire cluster */
export interface ClusterAmino {
  nodes: NodeAmino[];
  storage: StorageAmino[];
}
export interface ClusterAminoMsg {
  type: "/akash.inventory.v1.Cluster";
  value: ClusterAmino;
}
/** Cluster reports inventory across entire cluster */
export interface ClusterSDKType {
  nodes: NodeSDKType[];
  storage: StorageSDKType[];
}
function createBaseCluster(): Cluster {
  return {
    nodes: [],
    storage: []
  };
}
export const Cluster = {
  typeUrl: "/akash.inventory.v1.Cluster",
  encode(message: Cluster, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.nodes) {
      Node.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.storage) {
      Storage.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Cluster {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCluster();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.nodes.push(Node.decode(reader, reader.uint32()));
          break;
        case 2:
          message.storage.push(Storage.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<Cluster>): Cluster {
    const message = createBaseCluster();
    message.nodes = object.nodes?.map(e => Node.fromPartial(e)) || [];
    message.storage = object.storage?.map(e => Storage.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: ClusterAmino): Cluster {
    const message = createBaseCluster();
    message.nodes = object.nodes?.map(e => Node.fromAmino(e)) || [];
    message.storage = object.storage?.map(e => Storage.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: Cluster): ClusterAmino {
    const obj: any = {};
    if (message.nodes) {
      obj.nodes = message.nodes.map(e => e ? Node.toAmino(e) : undefined);
    } else {
      obj.nodes = message.nodes;
    }
    if (message.storage) {
      obj.storage = message.storage.map(e => e ? Storage.toAmino(e) : undefined);
    } else {
      obj.storage = message.storage;
    }
    return obj;
  },
  fromAminoMsg(object: ClusterAminoMsg): Cluster {
    return Cluster.fromAmino(object.value);
  },
  fromProtoMsg(message: ClusterProtoMsg): Cluster {
    return Cluster.decode(message.value);
  },
  toProto(message: Cluster): Uint8Array {
    return Cluster.encode(message).finish();
  },
  toProtoMsg(message: Cluster): ClusterProtoMsg {
    return {
      typeUrl: "/akash.inventory.v1.Cluster",
      value: Cluster.encode(message).finish()
    };
  }
};
// Code generated by protoc-gen-gogo. DO NOT EDIT.
// source: akash/inventory/v1/storage.proto

package v1

import (
	fmt "fmt"
	_ "github.com/gogo/protobuf/gogoproto"
	proto "github.com/gogo/protobuf/proto"
	io "io"
	math "math"
	math_bits "math/bits"
)

// Reference imports to suppress errors if they are not otherwise used.
var _ = proto.Marshal
var _ = fmt.Errorf
var _ = math.Inf

// This is a compile-time assertion to ensure that this generated file
// is compatible with the proto package it is being compiled against.
// A compilation error at this line likely means your copy of the
// proto package needs to be updated.
const _ = proto.GoGoProtoPackageIsVersion3 // please upgrade the proto package

// StorageInfo reports Storage details
type StorageInfo struct {
	Class string `protobuf:"bytes,1,opt,name=class,proto3" json:"class" yaml:"class"`
	IOPS  string `protobuf:"bytes,2,opt,name=iops,proto3" json:"iops" yaml:"iops"`
}

func (m *StorageInfo) Reset()         { *m = StorageInfo{} }
func (m *StorageInfo) String() string { return proto.CompactTextString(m) }
func (*StorageInfo) ProtoMessage()    {}
func (*StorageInfo) Descriptor() ([]byte, []int) {
	return fileDescriptor_98ef685b221b1af7, []int{0}
}
func (m *StorageInfo) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *StorageInfo) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_StorageInfo.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *StorageInfo) XXX_Merge(src proto.Message) {
	xxx_messageInfo_StorageInfo.Merge(m, src)
}
func (m *StorageInfo) XXX_Size() int {
	return m.Size()
}
func (m *StorageInfo) XXX_DiscardUnknown() {
	xxx_messageInfo_StorageInfo.DiscardUnknown(m)
}

var xxx_messageInfo_StorageInfo proto.InternalMessageInfo

func (m *StorageInfo) GetClass() string {
	if m != nil {
		return m.Class
	}
	return ""
}

func (m *StorageInfo) GetIOPS() string {
	if m != nil {
		return m.IOPS
	}
	return ""
}

// Storage reports Storage inventory details
type Storage struct {
	Quantity ResourcePair `protobuf:"bytes,1,opt,name=quantity,proto3" json:"quantity" yaml:"quantity"`
	Info     StorageInfo  `protobuf:"bytes,2,opt,name=info,proto3" json:"info" yaml:"info"`
}

func (m *Storage) Reset()         { *m = Storage{} }
func (m *Storage) String() string { return proto.CompactTextString(m) }
func (*Storage) ProtoMessage()    {}
func (*Storage) Descriptor() ([]byte, []int) {
	return fileDescriptor_98ef685b221b1af7, []int{1}
}
func (m *Storage) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *Storage) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_Storage.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *Storage) XXX_Merge(src proto.Message) {
	xxx_messageInfo_Storage.Merge(m, src)
}
func (m *Storage) XXX_Size() int {
	return m.Size()
}
func (m *Storage) XXX_DiscardUnknown() {
	xxx_messageInfo_Storage.DiscardUnknown(m)
}

var xxx_messageInfo_Storage proto.InternalMessageInfo

func (m *Storage) GetQuantity() ResourcePair {
	if m != nil {
		return m.Quantity
	}
	return ResourcePair{}
}

func (m *Storage) GetInfo() StorageInfo {
	if m != nil {
		return m.Info
	}
	return StorageInfo{}
}

func init() {
	proto.RegisterType((*StorageInfo)(nil), "akash.inventory.v1.StorageInfo")
	proto.RegisterType((*Storage)(nil), "akash.inventory.v1.Storage")
}

func init() { proto.RegisterFile("akash/inventory/v1/storage.proto", fileDescriptor_98ef685b221b1af7) }

var fileDescriptor_98ef685b221b1af7 = []byte{
	// 355 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0x6c, 0x91, 0x31, 0x4f, 0xc2, 0x40,
	0x1c, 0xc5, 0x5b, 0x53, 0x14, 0x5b, 0x13, 0x93, 0xc6, 0x81, 0x30, 0xf4, 0x48, 0x8d, 0x89, 0x8b,
	0xbd, 0x00, 0x8b, 0x71, 0xc4, 0x89, 0xc4, 0x44, 0x2c, 0x8b, 0x71, 0x3b, 0x48, 0x5b, 0x2e, 0xc0,
	0xfd, 0xeb, 0xf5, 0xc0, 0x90, 0xf8, 0x21, 0xfc, 0x58, 0x8c, 0xc4, 0xc9, 0xe9, 0x62, 0xca, 0xc6,
	0xc8, 0x27, 0x30, 0xbd, 0xab, 0x04, 0x23, 0x5b, 0xdf, 0xfb, 0xbf, 0xff, 0xfd, 0xfa, 0xee, 0xec,
	0x06, 0x19, 0x93, 0x6c, 0x84, 0x29, 0x9b, 0x47, 0x4c, 0x00, 0x5f, 0xe0, 0x79, 0x13, 0x67, 0x02,
	0x38, 0x49, 0xa2, 0x20, 0xe5, 0x20, 0xc0, 0x75, 0x55, 0x22, 0xd8, 0x25, 0x82, 0x79, 0xb3, 0x7e,
	0x91, 0x40, 0x02, 0x6a, 0x8c, 0x8b, 0x2f, 0x9d, 0xac, 0x5f, 0x1d, 0x38, 0x8b, 0x47, 0x19, 0xcc,
	0xf8, 0x30, 0x4a, 0x09, 0xe5, 0x3a, 0xe6, 0xbf, 0xdb, 0x4e, 0x5f, 0x13, 0xba, 0x2c, 0x06, 0xf7,
	0xd6, 0xae, 0x0c, 0x27, 0x24, 0xcb, 0x6a, 0x66, 0xc3, 0xbc, 0x3e, 0xed, 0xf8, 0xb9, 0x44, 0x95,
	0xfb, 0xc2, 0xd8, 0x48, 0xa4, 0x27, 0x5b, 0x89, 0xce, 0x16, 0x64, 0x3a, 0xb9, 0xf3, 0x95, 0xf4,
	0x43, 0x6d, 0xbb, 0x6d, 0xdb, 0xa2, 0x90, 0x66, 0xb5, 0x23, 0xb5, 0x88, 0x72, 0x89, 0xac, 0xee,
	0x63, 0xaf, 0xbf, 0x91, 0x48, 0xf9, 0x5b, 0x89, 0x1c, 0xbd, 0x56, 0x28, 0x3f, 0x54, 0xa6, 0xff,
	0x69, 0xda, 0x27, 0x25, 0xde, 0x9d, 0xda, 0xd5, 0xd7, 0x19, 0x61, 0x82, 0x8a, 0x85, 0xa2, 0x3b,
	0xad, 0x46, 0xf0, 0xbf, 0x6d, 0x10, 0x96, 0x1d, 0x7a, 0x84, 0xf2, 0x0e, 0x5e, 0x4a, 0x64, 0xe4,
	0x12, 0x55, 0x9f, 0xca, 0xcd, 0x8d, 0x44, 0xbb, 0x53, 0xb6, 0x12, 0x9d, 0x6b, 0xe4, 0xaf, 0xe3,
	0x87, 0xbb, 0xa1, 0xfb, 0x6c, 0x5b, 0x94, 0xc5, 0xa0, 0xfe, 0xd7, 0x69, 0xa1, 0x43, 0xa8, 0xbd,
	0x8b, 0xe9, 0x5c, 0x96, 0x24, 0xab, 0x50, 0xaa, 0x14, 0x8b, 0x61, 0xaf, 0x14, 0x8b, 0xa1, 0x28,
	0x55, 0x44, 0x1f, 0x96, 0xb9, 0x67, 0xae, 0x72, 0xcf, 0xfc, 0xce, 0x3d, 0xf3, 0x63, 0xed, 0x19,
	0xab, 0xb5, 0x67, 0x7c, 0xad, 0x3d, 0xe3, 0xa5, 0x95, 0x50, 0x31, 0x9a, 0x0d, 0x82, 0x21, 0x4c,
	0xb1, 0xe2, 0xdd, 0xb0, 0x48, 0xbc, 0x01, 0x1f, 0x97, 0x8a, 0xa4, 0x14, 0x27, 0xf0, 0xe7, 0xcd,
	0x06, 0xc7, 0xea, 0x9d, 0xda, 0x3f, 0x01, 0x00, 0x00, 0xff, 0xff, 0x05, 0x29, 0xcd, 0xfa, 0x1c,
	0x02, 0x00, 0x00,
}

func (m *StorageInfo) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *StorageInfo) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *StorageInfo) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if len(m.IOPS) > 0 {
		i -= len(m.IOPS)
		copy(dAtA[i:], m.IOPS)
		i = encodeVarintStorage(dAtA, i, uint64(len(m.IOPS)))
		i--
		dAtA[i] = 0x12
	}
	if len(m.Class) > 0 {
		i -= len(m.Class)
		copy(dAtA[i:], m.Class)
		i = encodeVarintStorage(dAtA, i, uint64(len(m.Class)))
		i--
		dAtA[i] = 0xa
	}
	return len(dAtA) - i, nil
}

func (m *Storage) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *Storage) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *Storage) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	{
		size, err := m.Info.MarshalToSizedBuffer(dAtA[:i])
		if err != nil {
			return 0, err
		}
		i -= size
		i = encodeVarintStorage(dAtA, i, uint64(size))
	}
	i--
	dAtA[i] = 0x12
	{
		size, err := m.Quantity.MarshalToSizedBuffer(dAtA[:i])
		if err != nil {
			return 0, err
		}
		i -= size
		i = encodeVarintStorage(dAtA, i, uint64(size))
	}
	i--
	dAtA[i] = 0xa
	return len(dAtA) - i, nil
}

func encodeVarintStorage(dAtA []byte, offset int, v uint64) int {
	offset -= sovStorage(v)
	base := offset
	for v >= 1<<7 {
		dAtA[offset] = uint8(v&0x7f | 0x80)
		v >>= 7
		offset++
	}
	dAtA[offset] = uint8(v)
	return base
}
func (m *StorageInfo) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	l = len(m.Class)
	if l > 0 {
		n += 1 + l + sovStorage(uint64(l))
	}
	l = len(m.IOPS)
	if l > 0 {
		n += 1 + l + sovStorage(uint64(l))
	}
	return n
}

func (m *Storage) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	l = m.Quantity.Size()
	n += 1 + l + sovStorage(uint64(l))
	l = m.Info.Size()
	n += 1 + l + sovStorage(uint64(l))
	return n
}

func sovStorage(x uint64) (n int) {
	return (math_bits.Len64(x|1) + 6) / 7
}
func sozStorage(x uint64) (n int) {
	return sovStorage(uint64((x << 1) ^ uint64((int64(x) >> 63))))
}
func (m *StorageInfo) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowStorage
			}
			if iNdEx >= l {
				return io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= uint64(b&0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		fieldNum := int32(wire >> 3)
		wireType := int(wire & 0x7)
		if wireType == 4 {
			return fmt.Errorf("proto: StorageInfo: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: StorageInfo: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Class", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowStorage
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthStorage
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthStorage
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Class = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 2:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field IOPS", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowStorage
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthStorage
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthStorage
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.IOPS = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		default:
			iNdEx = preIndex
			skippy, err := skipStorage(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthStorage
			}
			if (iNdEx + skippy) > l {
				return io.ErrUnexpectedEOF
			}
			iNdEx += skippy
		}
	}

	if iNdEx > l {
		return io.ErrUnexpectedEOF
	}
	return nil
}
func (m *Storage) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowStorage
			}
			if iNdEx >= l {
				return io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= uint64(b&0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		fieldNum := int32(wire >> 3)
		wireType := int(wire & 0x7)
		if wireType == 4 {
			return fmt.Errorf("proto: Storage: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: Storage: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Quantity", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowStorage
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				msglen |= int(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if msglen < 0 {
				return ErrInvalidLengthStorage
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthStorage
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			if err := m.Quantity.Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		case 2:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Info", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowStorage
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				msglen |= int(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if msglen < 0 {
				return ErrInvalidLengthStorage
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthStorage
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			if err := m.Info.Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		default:
			iNdEx = preIndex
			skippy, err := skipStorage(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthStorage
			}
			if (iNdEx + skippy) > l {
				return io.ErrUnexpectedEOF
			}
			iNdEx += skippy
		}
	}

	if iNdEx > l {
		return io.ErrUnexpectedEOF
	}
	return nil
}
func skipStorage(dAtA []byte) (n int, err error) {
	l := len(dAtA)
	iNdEx := 0
	depth := 0
	for iNdEx < l {
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return 0, ErrIntOverflowStorage
			}
			if iNdEx >= l {
				return 0, io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= (uint64(b) & 0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		wireType := int(wire & 0x7)
		switch wireType {
		case 0:
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return 0, ErrIntOverflowStorage
				}
				if iNdEx >= l {
					return 0, io.ErrUnexpectedEOF
				}
				iNdEx++
				if dAtA[iNdEx-1] < 0x80 {
					break
				}
			}
		case 1:
			iNdEx += 8
		case 2:
			var length int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return 0, ErrIntOverflowStorage
				}
				if iNdEx >= l {
					return 0, io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				length |= (int(b) & 0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if length < 0 {
				return 0, ErrInvalidLengthStorage
			}
			iNdEx += length
		case 3:
			depth++
		case 4:
			if depth == 0 {
				return 0, ErrUnexpectedEndOfGroupStorage
			}
			depth--
		case 5:
			iNdEx += 4
		default:
			return 0, fmt.Errorf("proto: illegal wireType %d", wireType)
		}
		if iNdEx < 0 {
			return 0, ErrInvalidLengthStorage
		}
		if depth == 0 {
			return iNdEx, nil
		}
	}
	return 0, io.ErrUnexpectedEOF
}

var (
	ErrInvalidLengthStorage        = fmt.Errorf("proto: negative length found during unmarshaling")
	ErrIntOverflowStorage          = fmt.Errorf("proto: integer overflow")
	ErrUnexpectedEndOfGroupStorage = fmt.Errorf("proto: unexpected end of group")
)
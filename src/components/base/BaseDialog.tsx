import {View, Modal, Dimensions, Pressable} from 'react-native';
import React from 'react';

export default function BaseDialog({
  showModal,
  children,
  widthProps = 'auto',
  onRequestClose = () => {},
}: {
  showModal: boolean;
  children: React.ReactNode;
  widthProps?: string | number;
  onRequestClose: () => void;
}) {
  const {width} = Dimensions.get('window');

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={showModal}
      onRequestClose={onRequestClose}>
      <View className="flex-1 bg-black/40 justify-center items-center relative z-40">
        <View
          className="bg-white rounded-xl"
          style={{maxWidth: width * 0.8, width: widthProps}}>
          {children}
        </View>
      </View>
    </Modal>
  );
}
